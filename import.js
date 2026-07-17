// Focal — importación real de documentos (extracción de texto en el navegador).
'use strict';

const IMPORT = { queue: [], activeTab: 0 };

/* ---------- Carga perezosa de librerías (CDN) ---------- */
const _libCache = {};
function loadScript(src){
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = () => reject(new Error('No se pudo cargar ' + src));
    document.head.appendChild(s);
  });
}
async function ensureJSZip(){
  if (window.JSZip) return window.JSZip;
  await loadScript('https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js');
  return window.JSZip;
}
async function ensurePdfJs(){
  if (window.pdfjsLib) return window.pdfjsLib;
  await loadScript('https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js');
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  return window.pdfjsLib;
}

/* ---------- Utilidades de texto ---------- */
function stripHtml(html){
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('script,style,nav,header,footer,noscript').forEach(el => el.remove());
  return (doc.body?.innerText || doc.documentElement.innerText || '').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
}
// Variante para EPUB: preserva los títulos (h1–h6) como bloques propios para que
// el lector detecte las secciones (Prólogo, Capítulo 1…).
function stripHtmlEpub(html){
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('script,style,nav,header,footer,noscript').forEach(el => el.remove());
  doc.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
    const t = (h.textContent||'').trim();
    if (t) h.textContent = `\n\n${t}\n\n`;
  });
  return (doc.body?.innerText || doc.documentElement.innerText || '').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
}
function stripMarkdown(md){
  return md
    .replace(/^```[\s\S]*?```$/gm, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/[*_~>#-]{1,3}/g, m => m.length <= 1 ? '' : m)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
function guessTitleAuthor(text, filename){
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const first = lines[0] || '';
  const title = (first && first.length <= 90) ? first : (filename ? filename.replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ') : 'Documento sin título');
  return { title: title.charAt(0).toUpperCase() + title.slice(1), author: 'Autor desconocido' };
}
function makeCover(title){
  const palette = [
    ['#1d3a2f','#e8e3d8','#d97742'], ['#8c2f28','#f2e6cf','#e8b04b'], ['#131a2e','#cfd8f5','#4b7bec'],
    ['#3a2b52','#efe6fa','#7c4dcc'], ['#16222c','#dbe9f2','#2dd4bf'], ['#101418','#7ee2a8','#7ee2a8'],
  ];
  const idx = Math.abs([...title].reduce((a,c)=>a+c.charCodeAt(0),0)) % palette.length;
  const [bg,fg,accent] = palette[idx];
  const initials = title.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase() || '?';
  return { bg, fg, accent, ratio: 1.45, label: initials };
}
function slugify(title){
  return 'doc-' + title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,40) + '-' + Date.now().toString(36);
}
function countWords(text){ return (text.match(/\S+/g) || []).length; }
// Reduce una imagen a miniatura JPEG (~360 px de ancho) para guardarla como portada.
function shrinkImage(src, maxW = 360){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => reject(new Error('imagen de portada ilegible'));
    img.src = src;
  });
}
function estimateReadTime(words, wpm){ const m = Math.round(words / (wpm||300)); return m < 1 ? '< 1 min' : m < 60 ? `${m} min` : `${Math.floor(m/60)} h ${m%60} min`; }

/* ---------- Extractores por tipo ---------- */
async function extractTxt(file){ return { text: await file.text(), meta: {} }; }
async function extractMd(file){ return { text: stripMarkdown(await file.text()), meta: {} }; }
async function extractHtmlFile(file){ return { text: stripHtml(await file.text()), meta: {} }; }

async function extractPdf(file){
  const pdfjsLib = await ensurePdfJs();
  const buf = await file.arrayBuffer();
  const doc = await pdfjsLib.getDocument({ data: buf }).promise;
  let text = '';
  for (let i = 1; i <= doc.numPages; i++){
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(it => it.str).join(' ') + '\n\n';
  }
  let meta = {};
  try { const info = (await doc.getMetadata()).info; meta = { title: info?.Title, author: info?.Author }; } catch(e){}
  // Portada: render de la primera página.
  let coverImg = null;
  try {
    const page1 = await doc.getPage(1);
    const vp = page1.getViewport({ scale: 1 });
    const scale = 360 / vp.width;
    const viewport = page1.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(viewport.width); canvas.height = Math.round(viewport.height);
    await page1.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
    coverImg = canvas.toDataURL('image/jpeg', 0.82);
  } catch(e){ console.warn('Sin portada PDF:', e); }
  return { text: text.trim(), meta, pages: doc.numPages, coverImg };
}

async function extractEpub(file){
  const JSZip = await ensureJSZip();
  const zip = await JSZip.loadAsync(file);
  const containerXml = await zip.file('META-INF/container.xml').async('text');
  const containerDoc = new DOMParser().parseFromString(containerXml, 'application/xml');
  const opfPath = containerDoc.querySelector('rootfile').getAttribute('full-path');
  const opfDir = opfPath.includes('/') ? opfPath.slice(0, opfPath.lastIndexOf('/') + 1) : '';
  const opfXml = await zip.file(opfPath).async('text');
  const opfDoc = new DOMParser().parseFromString(opfXml, 'application/xml');
  const title = opfDoc.querySelector('metadata > title, dc\\:title')?.textContent?.trim();
  const author = opfDoc.querySelector('metadata > creator, dc\\:creator')?.textContent?.trim();
  const manifest = {};
  opfDoc.querySelectorAll('manifest > item').forEach(it => manifest[it.getAttribute('id')] = it.getAttribute('href'));
  const spineIds = [...opfDoc.querySelectorAll('spine > itemref')].map(it => it.getAttribute('idref'));
  let text = '';
  for (const id of spineIds){
    const href = manifest[id]; if (!href) continue;
    const path = opfDir + href;
    const entry = zip.file(path) || zip.file(decodeURIComponent(path));
    if (!entry) continue;
    const html = await entry.async('text');
    text += stripHtmlEpub(html) + '\n\n';
  }
  // Portada: item con properties="cover-image" (EPUB 3) o <meta name="cover"> (EPUB 2).
  let coverImg = null;
  try {
    let coverHref = null;
    const item3 = [...opfDoc.querySelectorAll('manifest > item')].find(it => (it.getAttribute('properties')||'').includes('cover-image'));
    if (item3) coverHref = item3.getAttribute('href');
    if (!coverHref){
      const metaCover = opfDoc.querySelector('metadata > meta[name="cover"]');
      const coverId = metaCover?.getAttribute('content');
      if (coverId && manifest[coverId]) coverHref = manifest[coverId];
    }
    if (coverHref){
      const path = opfDir + coverHref;
      const entry = zip.file(path) || zip.file(decodeURIComponent(path));
      if (entry){
        const ext = coverHref.toLowerCase().split('.').pop();
        const mime = { jpg:'image/jpeg', jpeg:'image/jpeg', png:'image/png', gif:'image/gif', webp:'image/webp', svg:'image/svg+xml' }[ext] || 'image/jpeg';
        const b64 = await entry.async('base64');
        coverImg = await shrinkImage(`data:${mime};base64,${b64}`);
      }
    }
  } catch(e){ console.warn('Sin portada EPUB:', e); }
  return { text: text.trim(), meta: { title, author }, coverImg };
}

async function extractDocx(file){
  const JSZip = await ensureJSZip();
  const zip = await JSZip.loadAsync(file);
  const entry = zip.file('word/document.xml');
  if (!entry) throw new Error('DOCX sin word/document.xml');
  const xml = await entry.async('text');
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const paras = [...doc.getElementsByTagName('w:p')];
  const text = paras.map(p => [...p.getElementsByTagName('w:t')].map(t => t.textContent).join('')).join('\n').replace(/\n{3,}/g,'\n\n').trim();
  return { text, meta: {} };
}

function extractorFor(filename){
  const ext = filename.toLowerCase().split('.').pop();
  return { pdf: extractPdf, epub: extractEpub, docx: extractDocx, txt: extractTxt, md: extractMd, markdown: extractMd, html: extractHtmlFile, htm: extractHtmlFile }[ext];
}

/* ---------- Alta del documento en Focal ---------- */
async function commitDocument({ title, author, type, text, chapterLabel, coverImg }){
  const words = countWords(text);
  const id = slugify(title);
  const cover = makeCover(title);
  if (coverImg) cover.img = coverImg;
  const doc = {
    id, title, author: author || 'Autor desconocido', type, pages: Math.max(1, Math.round(words / 280)), words,
    progress: 0, chapter: chapterLabel || 'Principio del documento', timeLeft: estimateReadTime(words, 300),
    lastRead: 'Nunca', avgWpm: 0, tags: ['Importado'], fav: false, cover, collection: 'Importados',
    added: new Date().toLocaleDateString('es-ES', { day:'numeric', month:'short', year:'numeric' }),
    readTime: '0 min', sessions: 0, done: false,
  };
  DEMO_DOCS.unshift(doc);
  DEMO_TEXTS[id] = text; DEMO_TEXTS_LIVE[id] = text;
  if (DB.user){
    const { error: e1 } = await DB.client.from('documents').insert({
      id, owner_id: DB.user.id, title: doc.title, author: doc.author, type, pages: doc.pages, words,
      tags: doc.tags, collection: doc.collection, cover, content: text,
    });
    if (e1) throw e1;
    await DB.upsertProgress(id, { progress: 0, chapter: doc.chapter, time_left: doc.timeLeft, read_time: '0 min' });
  } else {
    const local = store.get('localImports', []);
    local.unshift({ id, title: doc.title, author: doc.author, type, cover, text, addedAt: Date.now() });
    store.set('localImports', local);
  }
  return doc;
}

/* ---------- UI: cola de importación ---------- */
function importQueueRow(name, size){
  return `<div class="imp-file" data-name="${name}">
    <div class="fi">${(name.split('.').pop()||'doc').slice(0,4).toUpperCase()}</div>
    <div style="flex:1;min-width:0"><b style="font-size:13px">${escHtml(name)}</b>
      <div style="font-size:11px;color:var(--text3)" class="imp-status">Leyendo archivo…</div>
      <div class="imp-prog"><i></i></div>
    </div>
    <span class="mono" style="font-size:10.5px;color:var(--text3)">${size?(size/1024/1024).toFixed(1)+' MB':''}</span>
  </div>`;
}
async function importFiles(fileList){
  const files = [...fileList].filter(f => extractorFor(f.name));
  const rejected = [...fileList].filter(f => !extractorFor(f.name));
  const q = document.getElementById('imp-queue'); if (!q) return;
  q.innerHTML = files.map(f => importQueueRow(f.name, f.size)).join('') +
    (rejected.length ? `<p style="font-size:11.5px;color:var(--text3);margin-top:8px">Formato no soportado: ${rejected.map(f=>escHtml(f.name)).join(', ')}</p>` : '');
  let lastDoc = null, okCount = 0;
  for (const file of files){
    const row = q.querySelector(`[data-name="${CSS.escape(file.name)}"]`);
    const statusEl = row.querySelector('.imp-status');
    try{
      statusEl.textContent = 'Extrayendo texto y portada…';
      const extractor = extractorFor(file.name);
      const { text, meta, pages, coverImg } = await extractor(file);
      if (!text || countWords(text) < 5) throw new Error('No se encontró texto legible en el archivo');
      statusEl.textContent = 'Detectando título y autor…';
      const guessed = guessTitleAuthor(text, file.name);
      const title = (meta?.title && meta.title.trim()) || guessed.title;
      const author = (meta?.author && meta.author.trim()) || guessed.author;
      const type = file.name.split('.').pop().toUpperCase();
      const doc = await commitDocument({ title, author, type, text, coverImg });
      if (pages) doc.pages = pages;
      statusEl.textContent = `Listo · «${title}» · ${fmtWords(countWords(text))} palabras`;
      row.querySelector('.imp-prog')?.remove();
      lastDoc = doc; okCount++;
    }catch(err){
      console.error(err);
      statusEl.textContent = 'Error: ' + err.message;
      statusEl.style.color = '#c04545';
      row.querySelector('.imp-prog')?.remove();
    }
  }
  if (okCount){
    setTimeout(()=>{
      closeModal();
      toast(okCount===1 ? `«${lastDoc.title}» añadido a tu biblioteca` : `${okCount} documentos añadidos a tu biblioteca`, 'check');
      // Si estamos en el onboarding, complétalo y abre el documento importado.
      if (typeof S !== 'undefined' && !S.onboarded){ S.onboarded = true; store.set('onboarded', true); go('documento/'+lastDoc.id); }
      else render();
    }, 900);
  }
}
async function importFromUrl(url){
  const q = document.getElementById('imp-queue'); if (!q) return;
  q.innerHTML = importQueueRow(url, 0);
  const statusEl = q.querySelector('.imp-status');
  try{
    statusEl.textContent = 'Descargando artículo…';
    const res = await fetch(url, { mode: 'cors' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();
    const text = stripHtml(html);
    if (countWords(text) < 20) throw new Error('No se pudo extraer texto de esta página');
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : guessTitleAuthor(text).title;
    const doc = await commitDocument({ title, author: new URL(url).hostname.replace('www.',''), type: 'HTML', text });
    statusEl.textContent = `Listo · «${title}»`;
    q.querySelector('.imp-prog')?.remove();
    setTimeout(()=>{ closeModal(); toast(`«${doc.title}» añadido a tu biblioteca`, 'check'); render(); }, 700);
  }catch(err){
    statusEl.textContent = 'No se pudo importar (posible bloqueo CORS del sitio origen): ' + err.message;
    statusEl.style.color = '#c04545';
    q.querySelector('.imp-prog')?.remove();
  }
}
async function importPastedText(text){
  if (countWords(text) < 5) { toast('Pega algo más de texto para crear el documento','x'); return; }
  const { title, author } = guessTitleAuthor(text);
  const doc = await commitDocument({ title, author, type: 'TXT', text });
  closeModal(); toast(`«${doc.title}» añadido a tu biblioteca`, 'check'); render();
}
function escHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
