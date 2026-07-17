/* ===== Focal — aplicación ===== */
'use strict';

/* ---------- Iconos (línea fina) ---------- */
const I = {
  home:'<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  library:'<svg viewBox="0 0 24 24"><path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="m16.5 4.6 3.9 1-3.9 14.8-3.9-1z"/></svg>',
  play:'<svg viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z"/></svg>',
  pause:'<svg viewBox="0 0 24 24"><path d="M7 4h3.5v16H7zM13.5 4H17v16h-3.5z"/></svg>',
  collections:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="m12 3 2.7 5.6 6.3.8-4.6 4.3 1.2 6.1L12 16.9l-5.6 2.9 1.2-6.1L3 9.4l6.3-.8z"/></svg>',
  note:'<svg viewBox="0 0 24 24"><path d="M5 4h14v12l-4 4H5z"/><path d="M15 20v-4h4"/><path d="M8 9h8M8 13h5"/></svg>',
  stats:'<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>',
  target:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.5-4.5"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  zap:'<svg viewBox="0 0 24 24"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H13z"/></svg>',
  book:'<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></svg>',
  back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="m4.5 12.5 5 5L19.5 7"/></svg>',
  upload:'<svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v4h16v-4"/></svg>',
  menu:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  panel:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9.5 4v16"/></svg>',
  sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/></svg>',
  bookmark:'<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg>',
  timer:'<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9.5V13l2.5 1.5M9.5 2.5h5"/></svg>',
  eye:'<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  expand:'<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>',
  prev10:'<svg viewBox="0 0 24 24"><path d="m14.5 6-6 6 6 6"/></svg>',
  next10:'<svg viewBox="0 0 24 24"><path d="m9.5 6 6 6-6 6"/></svg>',
  prevS:'<svg viewBox="0 0 24 24"><path d="M7 5v14M19 5l-9 7 9 7z"/></svg>',
  nextS:'<svg viewBox="0 0 24 24"><path d="M17 5v14M5 5l9 7-9 7z"/></svg>',
  sliders:'<svg viewBox="0 0 24 24"><path d="M4 8h9M17 8h3M4 16h3M11 16h9"/><circle cx="15" cy="8" r="2.2"/><circle cx="9" cy="16" r="2.2"/></svg>',
  doc:'<svg viewBox="0 0 24 24"><path d="M6 2.5h8L19 7.5v14H6z"/><path d="M14 2.5v5h5"/></svg>',
  spark:'<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/></svg>',
  trophy:'<svg viewBox="0 0 24 24"><path d="M7 4h10v6a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 15v3M8 21h8M9.5 18h5"/></svg>',
  user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
  layers:'<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
  grid:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>',
  list:'<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
  refresh:'<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4"/></svg>',
  moon:'<svg viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/></svg>',
  split:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M3 14h9"/></svg>',
  gauge:'<svg viewBox="0 0 24 24"><path d="M4 14a8 8 0 1 1 16 0"/><path d="m12 14 4-5"/><path d="M2 20h20"/></svg>',
};

/* ---------- Estado ---------- */
const store = {
  get(k, d){ try{ const v = localStorage.getItem('focal.'+k); return v===null? d : JSON.parse(v);}catch(e){return d} },
  set(k, v){ localStorage.setItem('focal.'+k, JSON.stringify(v)); }
};
const S = {
  theme: store.get('theme','paper'),
  custom: store.get('customTheme', null),
  collapsed: store.get('collapsed', false),
  libView: store.get('libView','grid'),
  onboarded: store.get('onboarded', false),
  rsvp: Object.assign({
    wpm:420, chunk:1, font:'serif', weight:500, size:54, ctxOp:.45, transition:'fade', tdur:80,
    pauseComma:true, pausePoint:true, pausePara:true, longWords:true, numbers:true, adaptive:true,
    showCtx:true, anchor:'lines', autohide:true, punct:true, sentenceOnPause:true,
  }, store.get('rsvp', {})),
  reader: Object.assign({ fs:18, lh:1.75, width:640, align:'left', font:'serif' }, store.get('reader', {})),
  setTab: 'apariencia',
  goals: store.get('goals', { minDay:30, wordsDay:8000, wpmTarget:500 }),
  goalList: store.get('goalList', null),
  comp: Object.assign({ mode:'auto', freq:10 }, store.get('comp', {})),
  audio: Object.assign({ voice:false, tick:false, rate:100, voiceName:'' }, store.get('audio', {})),
  access: Object.assign({ contrast:false, motion:false, dyslexia:false, bigControls:false, ls:0 }, store.get('access', {})),
  ui: Object.assign({ scale:100, followSystem:false, reduceTransp:false }, store.get('ui', {})),
  account: Object.assign({ name:'Máximo Duperez', email:'maximoduperez@gmail.com' }, store.get('account', {})),
  collections: store.get('collections', null), // null = derivar de los documentos
};

/* ---------- Persistencia local (modo demo, sin backend) ---------- */
function hydrateLocal(){
  const deleted = store.get('deletedDocs', []);
  if (deleted.length) DEMO_DOCS = DEMO_DOCS.filter(d=>!deleted.includes(d.id));
  const saved = store.get('docState', {});
  DEMO_DOCS.forEach(d => { if (saved[d.id]) Object.assign(d, saved[d.id]); });
  DEMO_NOTES = store.get('notes', DEMO_NOTES);
  DEMO_VOCAB = store.get('vocab', DEMO_VOCAB);
  const savedSessions = store.get('sessions', null);
  if (savedSessions) DEMO_SESSIONS = savedSessions;
  else DEMO_SESSIONS.forEach(s => s.demo = true);
}
function saveDocState(){
  try{
    const m = {};
    DEMO_DOCS.forEach(d => m[d.id] = {
      progress:d.progress, fav:!!d.fav, archived:!!d.archived, done:!!d.done, avgWpm:d.avgWpm,
      sessions:d.sessions, lastRead:d.lastRead, chapter:d.chapter, pos:d.pos||0,
      collection:d.collection, tags:d.tags, title:d.title, author:d.author, timeLeft:d.timeLeft, readTime:d.readTime,
    });
    store.set('docState', m);
  }catch(err){ storageError(err); }
}
function saveNotes(){ try{ store.set('notes', DEMO_NOTES); }catch(e){ storageError(e); } }
function saveVocab(){ try{ store.set('vocab', DEMO_VOCAB); }catch(e){ storageError(e); } }
function saveSessions(){ try{ store.set('sessions', DEMO_SESSIONS.slice(0,120)); }catch(e){ storageError(e); } }
function storageError(err){
  console.error('Focal · error de almacenamiento', err);
  toast('No se pudo guardar: el almacenamiento del navegador está lleno o no disponible','x');
}
function getBookmarks(){ return store.get('bookmarks', []); }
function setBookmarks(b){ try{ store.set('bookmarks', b); }catch(e){ storageError(e); } }
function getCollections(){
  if (S.collections) return S.collections;
  return [...new Set(DEMO_DOCS.map(d=>d.collection).filter(Boolean))];
}
function saveCollections(list){ S.collections = list; store.set('collections', list); }
function downloadFile(name, content, mime='text/plain'){
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type: mime+';charset=utf-8' }));
  a.download = name; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
}
function confirmModal(title, text, cta, onOk, danger=true){
  window._confirmCb = onOk;
  openModal(`<div class="modal-h"><h3>${title}</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><p style="font-size:13.5px;color:var(--text2);line-height:1.55">${text}</p>
  <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:20px">
    <button class="btn" onclick="closeModal()">Cancelar</button>
    <button class="btn ${danger?'':'primary'}" ${danger?'style="color:#c04545;border-color:color-mix(in srgb,#c04545 40%,var(--border))"':''} onclick="closeModal();_confirmCb()">${cta}</button>
  </div></div>`);
}
function saveRsvp(){ store.set('rsvp', S.rsvp); if (DB.user) DB.saveSettings({rsvp:S.rsvp}).catch(console.error); }
function saveReader(){ store.set('reader', S.reader); if (DB.user) DB.saveSettings({reader:S.reader}).catch(console.error); }
const docById = id => DEMO_DOCS.find(d => d.id===id);
const docText = id => (DB.user ? DEMO_TEXTS_LIVE[id] : DEMO_TEXTS[id]) || DEMO_TEXTS[id] || '';
const fmtWords = n => n>=1000 ? (n/1000).toFixed(n>=100000?0:1).replace('.',',')+' k' : n;

/* ---------- Temas ---------- */
function applyTheme(key){
  S.theme = key; store.set('theme', key);
  const t = key==='custom' && S.custom ? S.custom : THEMES[key] || THEMES.paper;
  const r = document.documentElement.style;
  for (const [k,v] of Object.entries(t.vars)) r.setProperty('--'+k, v);
  // Redondeado del tema personalizado (los temas integrados usan el valor por defecto)
  if (key==='custom' && S.custom?.radius !== undefined){ r.setProperty('--r', S.custom.radius+'px'); r.setProperty('--r-lg', (S.custom.radius+4)+'px'); }
  else { r.removeProperty('--r'); r.removeProperty('--r-lg'); }
  r.setProperty('--rsvp-font', t.mono ? 'var(--mono)' : (S.rsvp.font==='sans'?'var(--sans)':S.rsvp.font==='mono'?'var(--mono)':'var(--serif)'));
  document.querySelectorAll('.theme-quick button').forEach(b=>b.classList.toggle('on', b.dataset.t===key));
  document.querySelectorAll('.theme-card').forEach(c=>c.classList.toggle('on', c.dataset.t===key));
  if (DB.user) DB.saveSettings({theme:key}).catch(console.error);
}

/* ---------- Preferencias de interfaz y accesibilidad ---------- */
function applyPrefs(){
  const html = document.documentElement;
  html.style.fontSize = (S.ui.scale/100*100) + '%';
  html.classList.toggle('reduce-transp', !!S.ui.reduceTransp);
  html.classList.toggle('a11y-contrast', !!S.access.contrast);
  html.classList.toggle('a11y-motion', !!S.access.motion || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  html.classList.toggle('a11y-dyslexia', !!S.access.dyslexia);
  html.classList.toggle('a11y-big', !!S.access.bigControls);
  html.style.setProperty('--a11y-ls', (S.access.ls/10) + 'px');
}
function saveUi(){ store.set('ui', S.ui); applyPrefs(); }
function saveAccess(){ store.set('access', S.access); applyPrefs(); }
function saveComp(){ store.set('comp', S.comp); }
function saveAudio(){ store.set('audio', S.audio); }
const _sysDark = window.matchMedia('(prefers-color-scheme: dark)');
function systemThemeSync(){
  if (!S.ui.followSystem) return;
  applyTheme(_sysDark.matches ? 'midnight' : 'paper');
}
_sysDark.addEventListener('change', systemThemeSync);
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', applyPrefs);

/* ---------- Toast ---------- */
function toast(msg, icon='check'){
  const el = document.createElement('div');
  el.className = 'toast'; el.innerHTML = I[icon] + msg;
  document.getElementById('toast-root').appendChild(el);
  setTimeout(()=>{ el.classList.add('out'); setTimeout(()=>el.remove(), 320); }, 2400);
}

/* ---------- Modal genérico ---------- */
function openModal(html, cls=''){
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="overlay" onclick="if(event.target===this)closeModal()"><div class="modal ${cls}">${html}</div></div>`;
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

/* ---------- Shell ---------- */
const NAV = [
  ['inicio','Inicio','home'], ['biblioteca','Biblioteca','library'], ['continuar','Continuar leyendo','play'],
  ['colecciones','Colecciones','collections'], ['destacados','Destacados','star'], ['notas','Notas','note'],
  null,
  ['estadisticas','Estadísticas','stats'], ['objetivos','Objetivos','target'], ['vocabulario','Vocabulario','layers'], ['historial','Historial','clock'],
  null,
  ['ajustes','Ajustes','settings'],
];
function shell(route, content){
  const themeDots = ['paper','midnight','oled','sepia','studio'].map(k=>
    `<button data-t="${k}" title="${THEMES[k].name}" style="background:${THEMES[k].vars.bg};border-color:${THEMES[k].vars.border}" onclick="applyTheme('${k}');toast('Tema ${THEMES[k].name}','sun')" class="${S.theme===k?'on':''}"></button>`).join('');
  return `
  <aside class="sidebar ${S.collapsed?'collapsed':''}" id="sidebar">
    <div class="brand"><span class="brand-dot"></span><span class="brand-name">Focal</span></div>
    <nav class="nav">
      ${NAV.map(n => n===null ? '<div class="nav-label"></div>' :
        `<button class="nav-item ${route===n[0]?'active':''}" onclick="go('${n[0]}')">${I[n[2]]}<span>${n[1]}</span>${n[0]==='biblioteca'?`<span class="nav-badge">${DEMO_DOCS.filter(d=>!d.archived).length}</span>`:''}</button>`).join('')}
    </nav>
    <div class="sidebar-foot">
      <div class="theme-quick">${themeDots}</div>
      <button class="import-btn" onclick="openImport()">${I.upload}<span>Importar</span></button>
      <div class="profile-row" onclick="go('perfil')">
        <div class="avatar">${(S.account.name||'MD').split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase()}</div>
        <div style="min-width:0"><div style="font-size:12.5px;font-weight:550">${escHtml(S.account.name.split(' ')[0])} ${escHtml((S.account.name.split(' ')[1]||'').slice(0,1))}.</div><div style="font-size:10.5px;color:var(--text3)">${DB.user?'Plan Pro · Sincronizado':'Modo local'}</div></div>
        <span class="sync-dot"></span>
      </div>
    </div>
  </aside>
  <div class="main">
    <header class="topbar">
      <button class="tb-collapse" onclick="toggleSidebar()">${I.panel}</button>
      <div class="searchbox" onclick="openCmdk()">${I.search}<span>Buscar documentos, notas, acciones…</span><kbd>⌘K</kbd></div>
      <div class="tb-right">
        <span class="sync-pill"><span class="sync-dot" style="margin:0"></span>${DB.user?'Sincronizado':'Guardado en este dispositivo'}</span>
        <button class="tb-icon" title="Importar" onclick="openImport()">${I.plus}</button>
        <button class="tb-icon" title="Tema" onclick="go('ajustes');S.setTab='apariencia'">${I.sun}</button>
        <button class="tb-icon" title="Perfil" onclick="go('perfil')">${I.user}</button>
      </div>
    </header>
    <div class="view" id="view">${content}</div>
  </div>
  <nav class="bottomnav">
    ${[['inicio','home','Inicio'],['biblioteca','library','Biblioteca'],['continuar','zap','RSVP'],['notas','note','Notas'],['perfil','user','Perfil']].map(n=>
      `<button class="${route===n[0]?'on':''}" onclick="go('${n[0]}')">${I[n[1]]}<span>${n[2]}</span></button>`).join('')}
  </nav>`;
}
function toggleSidebar(){
  const sb = document.getElementById('sidebar');
  if (window.innerWidth <= 920){ sb.classList.toggle('mob-open'); return; }
  S.collapsed = !S.collapsed; store.set('collapsed', S.collapsed);
  sb.classList.toggle('collapsed', S.collapsed);
}

/* ---------- Portada ---------- */
function coverHTML(d, extra=''){
  const c = d.cover;
  if (c.img) return `<div class="cover ${extra}" style="background:${c.bg};aspect-ratio:1/${c.ratio};padding:0">
    <img src="${c.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
  </div>`;
  return `<div class="cover ${extra}" style="background:${c.bg};color:${c.fg};aspect-ratio:1/${c.ratio}">
    <div><div class="c-rule" style="background:${c.accent}"></div><div class="c-title">${d.title}</div></div>
    <div><div class="c-label" style="color:${c.accent}">${c.label}</div><div class="c-author">${d.author}</div></div>
  </div>`;
}

/* ---------- Vistas ---------- */
const views = {};

views.inicio = () => {
  const inProgress = DEMO_DOCS.filter(x=>!x.archived && !x.done && x.progress>0);
  const d = inProgress[0] || DEMO_DOCS.find(x=>!x.archived) || DEMO_DOCS[0];
  const real = realSessions();
  const week = sessionsLastDays(7), tw = totals(week), today = totals(sessionsToday());
  const streak = streakDays();
  const cAvg = compAvg();
  const doneCount = DEMO_DOCS.filter(x=>x.done).length;
  const stats = [
    [tw.mins||0,'min','esta semana',''],
    [fmtWords(tw.words||0),'','palabras',''],
    [tw.avgWpm||S.rsvp.wpm,'ppm', tw.avgWpm?'velocidad media':'velocidad configurada',''],
    [streak,'día'+(streak!==1?'s':''),'racha actual',''],
    [cAvg===null?'—':cAvg, cAvg===null?'':'%','comprensión',''],
    [doneCount,'','terminados','']
  ];
  const minGoal = getGoals().find(g=>g.type==='minDay');
  const missing = minGoal ? Math.max(0, minGoal.target - today.mins) : 0;
  const now = new Date();
  const dateLabel = now.toLocaleDateString('es-ES',{ weekday:'long', day:'numeric', month:'long' });
  const greet = now.getHours()<7?'Buenas noches':now.getHours()<13?'Buenos días':now.getHours()<21?'Buenas tardes':'Buenas noches';
  const totalMin = tw.mins;
  const weekGoal = (minGoal?minGoal.target:30)*7;
  const weekDays = Array.from({length:7},(_,i)=>{
    const ts = Date.now() - (6-i)*86400000;
    return { d:['D','L','M','X','J','V','S'][new Date(ts).getDay()], min: real.filter(s=>dayKey(s.ts)===dayKey(ts)).reduce((a,s)=>a+s.mins,0), goal: minGoal?minGoal.target:30 };
  });
  const activeDays = weekDays.filter(w=>w.min>0).length;
  return `<div class="page">
    <p class="eyebrow">${dateLabel.charAt(0).toUpperCase()+dateLabel.slice(1)}</p>
    <h1 class="page-title serif" style="font-family:var(--serif)">${greet}, ${escHtml(S.account.name.split(' ')[0])}</h1>
    <p class="page-sub">${streak>0?`Llevas ${streak} día${streak!==1?'s':''} seguido${streak!==1?'s':''} leyendo. `:''}${minGoal ? (missing>0?`Hoy te faltan ${missing} minutos para tu objetivo.`:'Objetivo diario cumplido. Bien hecho.') : 'Configura un objetivo diario en la sección Objetivos.'}</p>

    <section class="card hero-cr">
      ${coverHTML(d)}
      <div class="hero-info">
        <p class="eyebrow">Continúa leyendo</p>
        <h2>${d.title}</h2>
        <p class="h-author">${d.author} · ${d.chapter}</p>
        <div class="hero-meta">
          <div class="hm"><b>${Math.round(d.progress*100)} %</b><span>completado</span></div>
          <div class="hm"><b>${d.timeLeft}</b><span>restante</span></div>
          <div class="hm"><b>${d.avgWpm||S.rsvp.wpm} ppm</b><span>tu velocidad</span></div>
          <div class="hm"><b>${d.lastRead}</b><span>última sesión</span></div>
        </div>
        <div class="pbar" style="margin-bottom:16px"><i style="width:${d.progress*100}%"></i></div>
        <div class="hero-actions">
          <button class="btn primary" onclick="go('lector/${d.id}')">${I.book} Continuar</button>
          <button class="btn accent" onclick="go('rsvp/${d.id}')">${I.zap} Abrir en RSVP</button>
          <span class="hero-wpm">RSVP a ${S.rsvp.wpm} ppm</span>
        </div>
      </div>
    </section>

    <div class="statgrid">
      ${stats.map(s=>`<div class="stat"><b>${s[0]}<em> ${s[1]}</em></b><span>${s[2]}</span>${s[3]?` <span class="delta">${s[3]}</span>`:''}</div>`).join('')}
    </div>

    <div class="home-cols">
      <section class="card panel">
        <h3>Objetivo semanal <a href="#/objetivos" onclick="go('objetivos');return false">Ver objetivos</a></h3>
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
          <span style="font-family:var(--mono);font-size:22px">${totalMin}<span style="font-size:12px;color:var(--text3)"> / ${weekGoal} min</span></span>
          <span class="chip">${activeDays} día${activeDays!==1?'s':''} activo${activeDays!==1?'s':''}</span>
        </div>
        <div class="weekchart">
          ${weekDays.map(w=>`<div class="wc-col"><div class="wc-bar" style="height:${Math.max(6,(w.min/60)*100)}%"><i style="height:${Math.min(100,(w.min/w.goal)*100)}%;opacity:${w.min>=w.goal?1:.45}"></i></div><span>${w.d}</span></div>`).join('')}
        </div>
      </section>
      <section class="card panel">
        <h3>Actividad reciente <a onclick="go('historial');return false" href="#/historial">Historial</a></h3>
        ${DEMO_SESSIONS.slice(0,4).map(s=>{const doc=docById(s.doc);if(!doc)return '';return `
          <div style="display:flex;gap:12px;align-items:center;padding:9px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="go('documento/${doc.id}')">
            <div style="width:8px;height:8px;border-radius:50%;background:${doc.cover.accent};flex-shrink:0"></div>
            <div style="flex:1;min-width:0"><div style="font-size:12.5px;font-weight:540;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${doc.title}</div><div style="font-size:11px;color:var(--text3)">${s.date} · ${s.mode}</div></div>
            <span class="mono" style="font-size:11px;color:var(--text2)">${s.mins} min · ${s.wpm} ppm</span>
          </div>`;}).join('')}
      </section>
    </div>

    <div class="smart-tip">${I.spark}<div><b>Sugerencia.</b> Con tu velocidad actual de ${S.rsvp.wpm} ppm puedes terminar <i>${escHtml(d.title)}</i> en unos <b>${Math.max(1,Math.round((docText(d.id).split(/\s+/).filter(Boolean).length||d.words)*(1-d.progress)/S.rsvp.wpm))} minutos</b> de lectura RSVP.</div></div>

    <h3 style="font-size:15px;margin-top:36px;display:flex;justify-content:space-between">Biblioteca reciente <a href="#/biblioteca" onclick="go('biblioteca');return false" style="font-size:12.5px;color:var(--text3);font-weight:450;text-decoration:none">Ver todo</a></h3>
    <div class="shelf">
      ${DEMO_DOCS.filter(x=>!x.archived).slice(0,6).map(d=>`<div class="shelf-item" onclick="go('documento/${d.id}')">${coverHTML(d)}<div class="s-t">${escHtml(d.title)}</div><div class="s-a">${escHtml(d.author)}</div><div class="pbar"><i style="width:${d.progress*100}%"></i></div></div>`).join('')}
    </div>
  </div>`;
};

let libFilter = 'todos', libSort = 'recientes', libQuery = '';
function libSearch(q){ libQuery = q; const grid = document.getElementById('lib-body'); if (grid) grid.innerHTML = libBody(); }
function filteredDocs(){
  let docs = DEMO_DOCS.slice();
  if (libFilter==='archivados') docs = docs.filter(d=>d.archived);
  else {
    docs = docs.filter(d=>!d.archived);
    if (libFilter==='favoritos') docs = docs.filter(d=>d.fav);
    if (libFilter==='sinterminar') docs = docs.filter(d=>!d.done && d.progress>0);
    if (libFilter==='completados') docs = docs.filter(d=>d.done);
    if (libFilter.startsWith('col:')) docs = docs.filter(d=>d.collection===libFilter.slice(4));
  }
  if (libQuery){
    const q = libQuery.toLowerCase();
    docs = docs.filter(d =>
      d.title.toLowerCase().includes(q) || d.author.toLowerCase().includes(q) ||
      (d.tags||[]).some(t=>t.toLowerCase().includes(q)) || (d.collection||'').toLowerCase().includes(q) ||
      DEMO_NOTES.some(n=>n.doc===d.id && (n.text+' '+n.note).toLowerCase().includes(q)));
  }
  const cmp = {
    recientes: null, // orden de inserción (los recién importados van primero)
    titulo: (a,b)=>a.title.localeCompare(b.title,'es'),
    autor: (a,b)=>a.author.localeCompare(b.author,'es'),
    progreso: (a,b)=>b.progress-a.progress,
    restante: (a,b)=>(a.done?1:0)-(b.done?1:0) || a.progress-b.progress,
  }[libSort];
  if (cmp) docs.sort(cmp);
  return docs;
}
function libBody(){
  const docs = filteredDocs();
  return docs.length===0 ? (libQuery
      ? emptyState('search','Sin resultados',`Nada coincide con «${escHtml(libQuery)}» en este filtro. Prueba con otro término o quita filtros.`,'Limpiar búsqueda',"libQuery='';render()")
      : libFilter==='archivados'
      ? emptyState('library','Nada por aquí','No hay documentos archivados todavía. Cuando termines con un documento puedes archivarlo para mantener la biblioteca limpia.','Explorar biblioteca',"libFilter='todos';render()")
      : emptyState('library','Sin documentos','No hay documentos que cumplan este filtro.','Ver todos',"libFilter='todos';render()")) :
    S.libView==='grid' ? `<div class="libgrid">${docs.map(docCard).join('')}</div>` :
    `<div class="ll-head"><span></span><span>Título</span><span>Última apertura</span><span>Progreso</span><span>Velocidad</span><span>Restante</span><span></span></div>
     <div class="liblist">${docs.map(d=>`
      <div class="ll-row" onclick="go('documento/${d.id}')">
        ${coverHTML(d)}
        <div><div class="ll-t">${d.title} ${d.fav?'<span style="color:var(--accent)">★</span>':''}</div><div class="ll-a">${d.author} · <span class="ftype">${d.type}</span></div></div>
        <span class="ll-cell">${d.lastRead}</span>
        <div class="ll-cell" style="display:flex;align-items:center;gap:8px"><div class="pbar" style="flex:1"><i style="width:${d.progress*100}%"></i></div>${Math.round(d.progress*100)} %</div>
        <span class="ll-cell">${d.avgWpm} ppm</span>
        <span class="ll-cell">${d.timeLeft}</span>
        <button class="tb-icon" onclick="event.stopPropagation();go('rsvp/${d.id}')" title="RSVP">${I.zap}</button>
      </div>`).join('')}</div>`;
}
views.biblioteca = () => {
  const active = DEMO_DOCS.filter(d=>!d.archived);
  const totalWords = active.reduce((a,d)=>a+(d.words||0),0);
  return `<div class="page">
    <h1 class="page-title">Biblioteca</h1>
    <p class="page-sub">${active.length} documento${active.length!==1?'s':''} · ${fmtWords(totalWords)} palabras · ${getCollections().length} colecciones</p>
    <div class="lib-toolbar">
      <div class="lib-tabs">
        ${[['todos','Todos'],['favoritos','Favoritos'],['sinterminar','En curso'],['completados','Completados'],['archivados','Archivados']].map(t=>
          `<button class="${libFilter===t[0]?'on':''}" onclick="libFilter='${t[0]}';render()">${t[1]}</button>`).join('')}
        ${libFilter.startsWith('col:')?`<button class="on" onclick="libFilter='todos';render()">${escHtml(libFilter.slice(4))} ✕</button>`:''}
      </div>
      <div style="flex:1"></div>
      <input class="input" style="width:170px;padding:6px 10px;font-size:12.5px" placeholder="Buscar en la biblioteca…" value="${escHtml(libQuery)}" oninput="libSearch(this.value)">
      <select class="input" style="width:auto;padding:6px 34px 6px 10px;font-size:12.5px" onchange="libSort=this.value;render()">
        ${[['recientes','Recientes'],['titulo','Título'],['autor','Autor'],['progreso','Progreso'],['restante','Tiempo restante']].map(o=>`<option value="${o[0]}" ${libSort===o[0]?'selected':''}>${o[1]}</option>`).join('')}
      </select>
      <div class="seg">
        <button class="${S.libView==='grid'?'on':''}" onclick="S.libView='grid';store.set('libView','grid');render()">${I.grid}</button>
        <button class="${S.libView==='list'?'on':''}" onclick="S.libView='list';store.set('libView','list');render()">${I.list}</button>
      </div>
    </div>
    <div id="lib-body">${libBody()}</div>
  </div>`;
};
function toggleArchive(id){
  const d = docById(id); if (!d) return;
  d.archived = !d.archived; saveDocState();
  toast(d.archived ? 'Documento archivado' : 'Documento restaurado', 'library');
  render();
}
function deleteDocument(id){
  const d = docById(id); if (!d) return;
  confirmModal('Eliminar documento', `Se eliminará «${escHtml(d.title)}» junto con su progreso. Las notas asociadas se conservan en la sección Notas. Esta acción no se puede deshacer.`, 'Eliminar', ()=>{
    DEMO_DOCS = DEMO_DOCS.filter(x=>x.id!==id);
    delete DEMO_TEXTS[id];
    const deleted = store.get('deletedDocs', []);
    if (!deleted.includes(id)){ deleted.push(id); try{ store.set('deletedDocs', deleted); }catch(e){ storageError(e); } }
    const local = store.get('localImports', []).filter(x=>x.id!==id);
    try{ store.set('localImports', local); }catch(e){ storageError(e); }
    saveDocState();
    toast('Documento eliminado','x'); go('biblioteca');
  });
}
function renameDocument(id){
  const d = docById(id); if (!d) return;
  openModal(`<div class="modal-h"><h3>Editar metadatos</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <div class="field"><label>Título</label><input class="input" id="md-title" value="${escHtml(d.title)}"></div>
    <div class="field"><label>Autor</label><input class="input" id="md-author" value="${escHtml(d.author)}"></div>
    <div class="field"><label>Colección</label><select class="input" id="md-col">
      ${getCollections().map(c=>`<option ${d.collection===c?'selected':''}>${escHtml(c)}</option>`).join('')}</select></div>
    <div class="field"><label>Etiquetas (separadas por comas)</label><input class="input" id="md-tags" value="${escHtml((d.tags||[]).join(', '))}"></div>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:16px">
      <button class="btn" onclick="closeModal()">Cancelar</button>
      <button class="btn primary" onclick="commitDocMeta('${id}')">Guardar</button>
    </div>
  </div>`);
}
function commitDocMeta(id){
  const d = docById(id); if (!d) return;
  const title = document.getElementById('md-title').value.trim();
  if (!title){ toast('El título no puede estar vacío','x'); return; }
  d.title = title;
  d.author = document.getElementById('md-author').value.trim() || 'Autor desconocido';
  d.collection = document.getElementById('md-col').value;
  d.tags = document.getElementById('md-tags').value.split(',').map(t=>t.trim()).filter(Boolean);
  saveDocState(); closeModal(); render(); toast('Metadatos guardados','check');
}
function docCard(d){
  return `<div class="doc-card">
    <div style="position:relative" onclick="go('documento/${d.id}')">
      ${coverHTML(d)}
      <div class="dc-hover">
        <button title="Leer" onclick="event.stopPropagation();go('lector/${d.id}')">${I.book}</button>
        <button title="Abrir en RSVP" onclick="event.stopPropagation();go('rsvp/${d.id}')">${I.zap}</button>
        <button title="Favorito" onclick="event.stopPropagation();toggleFav('${d.id}')">${I.star}</button>
      </div>
    </div>
    <div class="dc-meta" onclick="go('documento/${d.id}')">
      <div class="t">${d.title}</div><div class="a">${d.author}</div>
      <div class="dc-foot"><span class="ftype">${d.type}</span><div class="pbar"><i style="width:${d.progress*100}%"></i></div><span>${Math.round(d.progress*100)} %</span></div>
    </div>
  </div>`;
}
function persistSession(doc, mins, words, comp){
  const totalWords = docText(doc.id).split(/\s+/).filter(Boolean).length || doc.words;
  const newProgress = Math.min(1, RSVP.i / (totalWords || 1));
  doc.pos = RSVP.i;
  doc.progress = Math.max(doc.progress, newProgress);
  doc.avgWpm = doc.avgWpm ? Math.round((doc.avgWpm + S.rsvp.wpm) / 2) : S.rsvp.wpm;
  doc.sessions = (doc.sessions||0) + 1;
  doc.lastRead = 'Hace un momento';
  doc.done = doc.progress >= .995;
  doc.timeLeft = doc.done ? '—' : estimateReadTime(Math.round(totalWords*(1-doc.progress)), doc.avgWpm||300);
  const modeLabel = location.hash.includes('estudio') ? 'Modo estudio' : 'RSVP';
  DEMO_SESSIONS.unshift({ doc: doc.id, date: 'Ahora mismo', ts: Date.now(), mode: modeLabel, mins, words, wpm: S.rsvp.wpm, comp, maxWpm: RSVP.maxWpm, pauses: RSVP.pauses, rewinds: RSVP.rewinds, theme: THEMES[S.theme]?.name||S.theme });
  saveDocState(); saveSessions(); checkAchievements();
  if (DB.user){
    DB.addSession({ docId: doc.id, mode: modeLabel, mins, words, wpm: S.rsvp.wpm, comprehension: comp }).catch(console.error);
    DB.upsertProgress(doc.id, {
      progress: doc.progress, avg_wpm: doc.avgWpm, sessions: doc.sessions, done: doc.done,
      last_read: new Date().toISOString(),
    }).catch(console.error);
  }
}
function toggleFav(id){
  const d = docById(id); if (!d) return;
  d.fav = !d.fav;
  saveDocState();
  if (DB.user) DB.toggleFavorite(id, d.fav).catch(console.error);
  toast(d.fav ? 'Añadido a favoritos' : 'Quitado de favoritos', 'star');
  render();
}
function emptyState(icon,title,text,cta,action){
  return `<div class="empty"><div class="e-glyph">${I[icon]||I.doc}</div><h3>${title}</h3><p>${text}</p>${cta?`<button class="btn primary" onclick="${action}">${cta}</button>`:''}</div>`;
}

views.continuar = () => `<div class="page">
  <h1 class="page-title">Continuar leyendo</h1><p class="page-sub">Retoma cualquier documento exactamente donde lo dejaste.</p>
  ${DEMO_DOCS.filter(d=>!d.archived && !d.done && d.progress>0).map(d=>`
    <div class="card" style="display:flex;gap:20px;padding:18px 20px;margin-bottom:14px;align-items:center;cursor:pointer" onclick="go('documento/${d.id}')">
      <div style="width:52px">${coverHTML(d)}</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:560;font-size:14px">${d.title}</div>
        <div style="font-size:12px;color:var(--text3);margin:2px 0 8px">${d.chapter} · ${d.lastRead}</div>
        <div class="pbar"><i style="width:${d.progress*100}%"></i></div>
      </div>
      <div class="mono" style="font-size:11.5px;color:var(--text3);text-align:right">${Math.round(d.progress*100)} %<br>${d.timeLeft}</div>
      <button class="btn accent sm" onclick="event.stopPropagation();go('rsvp/${d.id}')">${I.zap} RSVP</button>
    </div>`).join('') || emptyState('play','Nada a medias','No tienes documentos empezados sin terminar. Abre cualquiera de tu biblioteca para empezar.','Ir a la biblioteca',"go('biblioteca')")}
</div>`;

views.colecciones = () => {
  const cols = getCollections();
  return `<div class="page"><h1 class="page-title">Colecciones</h1><p class="page-sub">Organiza tus documentos por proyecto o tema.</p>
  <div class="libgrid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
    ${cols.map(c=>{const items=DEMO_DOCS.filter(d=>d.collection===c && !d.archived);return `
    <div class="card panel" style="cursor:pointer;position:relative" onclick="libFilter='col:${escHtml(c).replace(/'/g,"\\'")}';go('biblioteca')">
      <div style="display:flex;gap:6px;margin-bottom:14px;min-height:58px">${items.slice(0,3).map(d=>`<div style="width:40px">${coverHTML(d)}</div>`).join('') || `<span style="color:var(--text3)">${I.collections}</span>`}</div>
      <b style="font-size:14px">${escHtml(c)}</b><div style="font-size:12px;color:var(--text3);margin-top:2px">${items.length} documento${items.length!==1?'s':''}</div>
      <div style="position:absolute;top:10px;right:10px;display:flex;gap:4px">
        <button class="tb-icon" title="Renombrar" onclick="event.stopPropagation();renameCollection('${escHtml(c).replace(/'/g,"\\'")}')">${I.note}</button>
        <button class="tb-icon" title="Eliminar" onclick="event.stopPropagation();deleteCollection('${escHtml(c).replace(/'/g,"\\'")}')">${I.x}</button>
      </div>
    </div>`;}).join('')}
    <button class="card panel" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--text3);border-style:dashed;min-height:150px" onclick="createCollection()">${I.plus}<span style="font-size:13px">Nueva colección</span></button>
  </div></div>`;
};
function createCollection(){
  openModal(`<div class="modal-h"><h3>Nueva colección</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><div class="field"><label>Nombre</label><input class="input" id="col-name" placeholder="Ej. Lecturas de verano" onkeydown="if(event.key==='Enter')commitCollection()"></div>
  <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:14px"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="commitCollection()">Crear</button></div></div>`);
  setTimeout(()=>document.getElementById('col-name')?.focus(), 40);
}
function commitCollection(){
  const name = document.getElementById('col-name').value.trim();
  if (!name){ toast('Escribe un nombre para la colección','x'); return; }
  const cols = getCollections();
  if (cols.includes(name)){ toast('Ya existe una colección con ese nombre','x'); return; }
  saveCollections([...cols, name]);
  closeModal(); render(); toast(`Colección «${name}» creada`,'collections');
}
function renameCollection(old){
  openModal(`<div class="modal-h"><h3>Renombrar colección</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><div class="field"><label>Nombre</label><input class="input" id="col-name" value="${escHtml(old)}"></div>
  <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:14px"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="commitRenameCollection('${escHtml(old).replace(/'/g,"\\'")}')">Guardar</button></div></div>`);
}
function commitRenameCollection(old){
  const name = document.getElementById('col-name').value.trim();
  if (!name){ toast('Escribe un nombre','x'); return; }
  saveCollections(getCollections().map(c=>c===old?name:c));
  DEMO_DOCS.forEach(d=>{ if(d.collection===old) d.collection=name; });
  saveDocState(); closeModal(); render(); toast('Colección renombrada','check');
}
function deleteCollection(name){
  confirmModal('Eliminar colección', `Se eliminará la colección «${escHtml(name)}». Los documentos no se borran: quedarán sin colección.`, 'Eliminar', ()=>{
    saveCollections(getCollections().filter(c=>c!==name));
    DEMO_DOCS.forEach(d=>{ if(d.collection===name) d.collection=''; });
    saveDocState(); render(); toast('Colección eliminada','x');
  });
}

const HL_COLORS = { amber:'#e8b04b', green:'#69b979', blue:'#5b8def', rose:'#e06c8a' };
let noteFilter='todas';
views.notas = views.destacados = () => {
  let notes = DEMO_NOTES;
  if (noteFilter!=='todas') notes = HL_COLORS[noteFilter] ? notes.filter(n=>n.color===noteFilter) : notes.filter(n=>n.doc===noteFilter);
  const nDocs = new Set(DEMO_NOTES.map(n=>n.doc)).size;
  return `<div class="page"><h1 class="page-title">Notas y destacados</h1><p class="page-sub">${DEMO_NOTES.length} fragmento${DEMO_NOTES.length!==1?'s':''} en ${nDocs} documento${nDocs!==1?'s':''}.</p>
  <div class="lib-toolbar">
    <div class="lib-tabs"><button class="${noteFilter==='todas'?'on':''}" onclick="noteFilter='todas';render()">Todas</button>
    ${Object.entries(HL_COLORS).map(([k,c])=>`<button class="${noteFilter===k?'on':''}" onclick="noteFilter='${k}';render()"><span class="hl-dot" style="background:${c};display:inline-block;margin-right:5px"></span>${{amber:'Ámbar',green:'Verde',blue:'Azul',rose:'Rosa'}[k]}</button>`).join('')}</div>
    <div style="flex:1"></div>
    <button class="btn sm" onclick="exportNotes()">Exportar</button><button class="btn sm" onclick="openFlashcards()">Crear tarjetas</button>
  </div>
  ${notes.length? notes.map(n=>{const d=docById(n.doc);return `
    <div class="card note-card" style="--hl:${HL_COLORS[n.color]}">
      <div class="note-q serif">“${escHtml(n.text)}”</div>
      ${n.note?`<div class="note-n">${escHtml(n.note)}</div>`:''}
      <div class="note-meta"><span class="hl-dot" style="background:${HL_COLORS[n.color]}"></span><b style="color:var(--text2)">${d?escHtml(d.title):'Documento eliminado'}</b><span>${n.chapter}</span><span>${n.date}</span>
      <span style="margin-left:auto;display:flex;gap:10px">
        <a style="cursor:pointer" onclick="editNote('${n.id}')">Editar</a>
        <a style="cursor:pointer" onclick="copyQuote('${n.id}')">Copiar cita</a>
        ${d?`<a style="cursor:pointer" onclick="go('lector/${d.id}')">Ir al fragmento</a>`:''}
        <a style="cursor:pointer;color:#c04545" onclick="deleteNote('${n.id}')">Eliminar</a>
      </span></div>
    </div>`;}).join('') : emptyState('note','Sin notas aquí','Subraya cualquier fragmento durante la lectura o pulsa N en modo RSVP para crear una nota rápida.','Abrir un documento',"go('biblioteca')")}
  </div>`;
};
function noteById(id){ return DEMO_NOTES.find(n=>String(n.id)===String(id)); }
function copyQuote(id){
  const n = noteById(id); if(!n) return;
  const d = docById(n.doc);
  navigator.clipboard.writeText(`“${n.text}”${d?` — ${d.title}, ${d.author}`:''}${n.chapter?` (${n.chapter})`:''}`)
    .then(()=>toast('Cita copiada con referencia','check')).catch(()=>toast('No se pudo copiar','x'));
}
function deleteNote(id){
  confirmModal('Eliminar nota','La nota y su destacado se eliminarán definitivamente.','Eliminar',()=>{
    DEMO_NOTES = DEMO_NOTES.filter(n=>String(n.id)!==String(id)); saveNotes(); render(); toast('Nota eliminada','x');
  });
}
function editNote(id){
  const n = noteById(id); if(!n) return;
  openModal(`<div class="modal-h"><h3>Editar nota</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <div class="note-q serif" style="--hl:${HL_COLORS[n.color]};margin-bottom:12px">“${escHtml(n.text)}”</div>
    <div class="field"><label>Anotación</label><textarea class="input" id="note-body" style="height:90px;resize:none">${escHtml(n.note||'')}</textarea></div>
    <div class="field"><label>Color</label><div class="seg">${Object.entries(HL_COLORS).map(([k,c])=>`<button class="${n.color===k?'on':''}" data-c="${k}" onclick="segSel(this)"><span class="hl-dot" style="background:${c};display:inline-block"></span></button>`).join('')}</div></div>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:14px">
      <button class="btn" onclick="closeModal()">Cancelar</button>
      <button class="btn primary" onclick="commitNote('${n.id}')">Guardar</button>
    </div>
  </div>`);
}
function commitNote(id){
  const n = noteById(id); if(!n) return;
  n.note = document.getElementById('note-body').value.trim();
  n.color = document.querySelector('.modal .seg button.on')?.dataset.c || n.color;
  saveNotes(); closeModal(); render(); toast('Nota guardada','check');
}
function exportNotes(){
  if (!DEMO_NOTES.length){ toast('No hay notas que exportar','x'); return; }
  const md = '# Notas y destacados — Focal\n\n' + DEMO_NOTES.map(n=>{
    const d = docById(n.doc);
    return `> ${n.text}\n>\n> — ${d?d.title+', '+d.author:'Documento eliminado'}${n.chapter?` (${n.chapter})`:''} · ${n.date}${n.note?`\n\n${n.note}`:''}`;
  }).join('\n\n---\n\n');
  downloadFile('focal-notas.md', md, 'text/markdown');
  toast('Notas exportadas en Markdown','check');
}
let fcIdx = 0, fcFlip = false;
function openFlashcards(){
  const cards = DEMO_NOTES.filter(n=>n.note);
  if (!cards.length){ toast('Añade anotaciones a tus destacados para crear tarjetas','x'); return; }
  fcIdx = 0; fcFlip = false; window._fcCards = cards;
  openModal(`<div class="modal-h"><h3>Tarjetas de repaso</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><div id="fc-body"></div></div>`);
  renderFlashcard();
}
function renderFlashcard(){
  const cards = window._fcCards; const n = cards[fcIdx]; const el = document.getElementById('fc-body'); if(!el) return;
  el.innerHTML = `
    <div class="card" style="min-height:150px;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;cursor:pointer;--hl:${HL_COLORS[n.color]}" onclick="fcFlip=!fcFlip;renderFlashcard()">
      <div>${fcFlip ? `<div style="font-size:14px;line-height:1.6">${escHtml(n.note)}</div>` : `<div class="note-q serif">“${escHtml(n.text)}”</div>`}
      <p style="font-size:11px;color:var(--text3);margin-top:12px">${fcFlip?'Anotación':'Pulsa para ver tu anotación'}</p></div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px">
      <button class="btn sm" ${fcIdx===0?'disabled':''} onclick="fcIdx--;fcFlip=false;renderFlashcard()">Anterior</button>
      <span class="mono" style="font-size:11.5px;color:var(--text3)">${fcIdx+1} / ${cards.length}</span>
      <button class="btn sm primary" onclick="if(fcIdx<${cards.length-1}){fcIdx++;fcFlip=false;renderFlashcard()}else{closeModal();toast('Repaso completado','trophy')}">${'Siguiente'}</button>
    </div>`;
}

views.estadisticas = () => {
  const real = realSessions();
  const hasReal = real.length > 0;
  const base = hasReal ? real : DEMO_SESSIONS; // sin actividad real: agregados de ejemplo, etiquetados
  const t = totals(base);
  const demoTag = hasReal ? '' : ' <span class="chip" style="font-size:10px;vertical-align:middle">datos de ejemplo</span>';
  const hoursSaved = Math.max(0, Math.round((t.words/250 - t.mins) / 6) / 10); // frente a 250 ppm de lectura tradicional
  // Minutos por día (últimos 30 días, solo sesiones reales con marca de tiempo)
  const perDay = Array.from({length:30},(_,i)=>{
    const k = dayKey(Date.now() - (29-i)*86400000);
    return real.filter(s=>dayKey(s.ts)===k).reduce((a,s)=>a+s.mins,0);
  });
  const maxDay = Math.max(10, ...perDay);
  const pts = perDay.map((v,i)=>`${(i/29)*720},${170-(v/maxDay)*150}`);
  // Horario favorito por franjas (sesiones reales)
  const bands = [['06–09',6,9],['09–12',9,12],['12–15',12,15],['15–18',15,18],['18–21',18,21],['21–24',21,24]];
  const bandCounts = bands.map(b => real.filter(s=>{ const h = new Date(s.ts).getHours(); return h>=b[1] && h<b[2]; }).length);
  const bandTotal = Math.max(1, bandCounts.reduce((a,b)=>a+b,0));
  // Distribución por velocidad
  const speedBands = [['250–350 ppm',250,350],['350–450 ppm',350,450],['450–550 ppm',450,550],['550+ ppm',550,Infinity]];
  const speedCounts = speedBands.map(b => base.filter(s=>s.wpm>=b[1] && s.wpm<b[2]).length);
  const speedTotal = Math.max(1, speedCounts.reduce((a,b)=>a+b,0));
  // Formatos leídos y temas usados
  const fmtCounts = {};
  base.forEach(s=>{ const d = docById(s.doc); if (d) fmtCounts[d.type] = (fmtCounts[d.type]||0) + s.mins; });
  const fmtTotal = Math.max(1, Object.values(fmtCounts).reduce((a,b)=>a+b,0));
  const themeCounts = {};
  real.forEach(s=>{ if (s.theme) themeCounts[s.theme] = (themeCounts[s.theme]||0)+1; });
  const topTheme = Object.entries(themeCounts).sort((a,b)=>b[1]-a[1])[0];
  const cAvg = compAvg();
  // Calendario de actividad: 26 semanas reales hacia atrás
  const heat = Array.from({length:26*7},(_,i)=>{
    const daysAgo = 26*7-1-i;
    const k = dayKey(Date.now() - daysAgo*86400000);
    const mins = real.filter(s=>dayKey(s.ts)===k).reduce((a,s)=>a+s.mins,0);
    const l = mins>=45?4:mins>=30?3:mins>=15?2:mins>0?1:0;
    return `<i class="${l?'l'+l:''}" title="${k} · ${mins} min"></i>`;
  }).join('');
  return `<div class="page"><h1 class="page-title">Estadísticas</h1><p class="page-sub">${hasReal?`${real.length} sesiones registradas en este dispositivo.`:'Aún no hay actividad registrada: se muestran agregados de las sesiones de ejemplo.'}</p>
  <div class="statgrid four">
    <div class="stat"><b>${(t.mins/60).toFixed(1).replace('.',',')}<em> h</em></b><span>tiempo total${demoTag}</span></div>
    <div class="stat"><b>${fmtWords(t.words)}</b><span>palabras leídas${demoTag}</span></div>
    <div class="stat"><b>${t.avgWpm}<em> ppm</em></b><span>velocidad media</span> ${t.maxWpm?`<span class="delta">máx. ${t.maxWpm}</span>`:''}</div>
    <div class="stat"><b>${hoursSaved.toString().replace('.',',')}<em> h</em></b><span>ahorradas con RSVP</span></div>
  </div>
  <div class="home-cols" style="margin-top:22px">
    <section class="card panel"><h3>Minutos por día · últimos 30 días</h3>
      ${hasReal ? `<svg class="chart-line" viewBox="0 0 720 190" preserveAspectRatio="none">
        <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".18"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
        <path class="a" d="M${pts.join(' L')} L720,190 L0,190 Z"/>
        <path class="l" d="M${pts.join(' L')}"/>
      </svg>` : '<p style="font-size:12.5px;color:var(--text3);padding:30px 0;text-align:center">Completa tu primera sesión para ver la evolución diaria.</p>'}
    </section>
    <section class="card panel"><h3>Horario favorito</h3>
      ${hasReal ? bands.map((b,i)=>`<div class="hbar-row"><span class="lbl mono" style="font-size:11px">${b[0]}</span><div class="bar"><i style="width:${Math.round(bandCounts[i]/bandTotal*100)}%"></i></div><span class="val">${Math.round(bandCounts[i]/bandTotal*100)} %</span></div>`).join('')
        : '<p style="font-size:12.5px;color:var(--text3);padding:30px 0;text-align:center">Sin sesiones reales todavía.</p>'}
      ${cAvg!==null?`<p style="font-size:12px;color:var(--text3);margin-top:10px">Comprensión media en tus pruebas: <b>${cAvg} %</b>.</p>`:''}
    </section>
  </div>
  <div class="home-cols" style="margin-top:22px">
    <section class="card panel"><h3>Calendario de actividad</h3>
      <div class="heatcal">${heat}</div>
      <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--text3);margin-top:8px"><span>Hace 6 meses</span><span>Hoy</span></div>
    </section>
    <section class="card panel"><h3>Distribución por velocidad${demoTag}</h3>
      ${speedBands.map((b,i)=>`<div class="hbar-row"><span class="lbl mono" style="font-size:11px">${b[0]}</span><div class="bar"><i style="width:${Math.round(speedCounts[i]/speedTotal*100)}%"></i></div><span class="val">${Math.round(speedCounts[i]/speedTotal*100)} %</span></div>`).join('')}
    </section>
  </div>
  <div class="home-cols" style="margin-top:22px">
    <section class="card panel"><h3>Formatos leídos${demoTag}</h3>
      ${Object.entries(fmtCounts).sort((a,b)=>b[1]-a[1]).map(([f,m])=>`<div class="hbar-row"><span class="lbl">${f}</span><div class="bar"><i style="width:${Math.round(m/fmtTotal*100)}%"></i></div><span class="val">${Math.round(m/fmtTotal*100)} %</span></div>`).join('') || '<p style="font-size:12.5px;color:var(--text3)">Sin datos.</p>'}
      ${topTheme?`<p style="font-size:12px;color:var(--text3);margin-top:8px">Tema más usado en tus sesiones: <b>${topTheme[0]}</b>.</p>`:''}
    </section>
    <section class="card panel"><h3>Pausas y retrocesos</h3>
      <div class="statgrid" style="grid-template-columns:1fr 1fr">
        <div class="stat"><b>${totals(real).pauses}</b><span>pausas totales</span></div>
        <div class="stat"><b>${totals(real).rewinds}</b><span>retrocesos</span></div>
      </div>
      ${hasReal?'':'<p style="font-size:12px;color:var(--text3);margin-top:8px">Se contabilizan a partir de tus sesiones reales.</p>'}
    </section>
  </div></div>`;
};

/* ---------- Métricas reales a partir de sesiones ---------- */
function realSessions(){ return DEMO_SESSIONS.filter(s => s.ts); }
function dayKey(ts){ const d = new Date(ts); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function sessionsToday(){ const k = dayKey(Date.now()); return realSessions().filter(s => dayKey(s.ts) === k); }
function sessionsLastDays(n){ const lim = Date.now() - n*86400000; return realSessions().filter(s => s.ts >= lim); }
function streakDays(){
  const days = new Set(realSessions().map(s => dayKey(s.ts)));
  let streak = 0, t = Date.now();
  if (!days.has(dayKey(t))) t -= 86400000; // la racha sigue viva si leíste ayer
  while (days.has(dayKey(t))){ streak++; t -= 86400000; }
  return streak;
}
function totals(list){
  return {
    mins: list.reduce((a,s)=>a+(s.mins||0),0),
    words: list.reduce((a,s)=>a+(s.words||0),0),
    avgWpm: list.length ? Math.round(list.reduce((a,s)=>a+(s.wpm||0),0)/list.length) : 0,
    maxWpm: list.reduce((a,s)=>Math.max(a, s.maxWpm||s.wpm||0), 0),
    pauses: list.reduce((a,s)=>a+(s.pauses||0),0),
    rewinds: list.reduce((a,s)=>a+(s.rewinds||0),0),
  };
}
function compAvg(){
  const h = store.get('compHistory', []);
  return h.length ? Math.round(h.filter(x=>x.ok).length/h.length*100) : null;
}

/* ---------- Objetivos ---------- */
const GOAL_TYPES = {
  minDay:   { label:'Minutos diarios',    unit:'min',      progress: t => totals(sessionsToday()).mins },
  wordsDay: { label:'Palabras diarias',   unit:'palabras', progress: t => totals(sessionsToday()).words },
  sessWeek: { label:'Sesiones semanales', unit:'sesiones', progress: t => sessionsLastDays(7).length },
  streak:   { label:'Racha',              unit:'días',     progress: t => streakDays() },
  wpm:      { label:'Velocidad',          unit:'ppm',      progress: t => totals(realSessions()).avgWpm || S.rsvp.wpm },
  books:    { label:'Libros terminados',  unit:'libros',   progress: t => DEMO_DOCS.filter(d=>d.done).length },
};
function getGoals(){
  if (!S.goalList) S.goalList = [
    { id:'g-min', type:'minDay', target:30 }, { id:'g-words', type:'wordsDay', target:8000 },
    { id:'g-streak', type:'streak', target:30 }, { id:'g-wpm', type:'wpm', target:500 },
  ];
  return S.goalList;
}
function saveGoals(){ try{ store.set('goalList', S.goalList); }catch(e){ storageError(e); } }
function openGoalEditor(id){
  const g = id ? getGoals().find(x=>x.id===id) : null;
  openModal(`<div class="modal-h"><h3>${g?'Editar objetivo':'Nuevo objetivo'}</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <div class="field"><label>Tipo</label><select class="input" id="goal-type" ${g?'disabled':''}>
      ${Object.entries(GOAL_TYPES).map(([k,t])=>`<option value="${k}" ${g?.type===k?'selected':''}>${t.label}</option>`).join('')}</select></div>
    <div class="field"><label>Objetivo</label><input class="input" id="goal-target" type="number" min="1" value="${g?.target||30}"></div>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:16px">
      ${g?`<button class="btn" style="margin-right:auto;color:#c04545" onclick="deleteGoal('${g.id}')">Eliminar</button>`:''}
      <button class="btn" onclick="closeModal()">Cancelar</button>
      <button class="btn primary" onclick="commitGoal(${g?`'${g.id}'`:'null'})">Guardar</button>
    </div>
  </div>`);
}
function commitGoal(id){
  const type = document.getElementById('goal-type').value;
  const target = Math.max(1, +document.getElementById('goal-target').value || 0);
  if (!target){ toast('Introduce un objetivo válido','x'); return; }
  if (id){ const g = getGoals().find(x=>x.id===id); g.target = target; }
  else getGoals().push({ id:'g-'+Date.now(), type, target });
  saveGoals(); closeModal(); render(); toast('Objetivo guardado','target');
}
function deleteGoal(id){ S.goalList = getGoals().filter(g=>g.id!==id); saveGoals(); closeModal(); render(); toast('Objetivo eliminado','x'); }

/* ---------- Logros (desbloqueo real y persistente) ---------- */
const ACH_RULES = {
  'Primera sesión': () => realSessions().length >= 1,
  '10.000 palabras': () => totals(realSessions()).words >= 10000,
  '100.000 palabras': () => totals(realSessions()).words >= 100000,
  'Primera semana completa': () => streakDays() >= 7,
  '500 ppm': () => totals(realSessions()).maxWpm >= 500,
  'Un libro terminado': () => realSessions().some(s => docById(s.doc)?.done),
  'Diez libros terminados': () => DEMO_DOCS.filter(d=>d.done).length >= 10,
  'Una hora sin distracciones': () => realSessions().some(s => s.mins >= 60),
  'Comprensión > 90 %': () => (compAvg()||0) > 90,
  'Racha de 30 días': () => streakDays() >= 30,
};
function unlockedAchievements(){ return store.get('achieved', {}); }
function checkAchievements(){
  const unlocked = unlockedAchievements();
  let news = false;
  for (const [name, rule] of Object.entries(ACH_RULES)){
    if (unlocked[name]) continue;
    try{ if (rule()){ unlocked[name] = fmtDate(new Date().toISOString()); news = true; toast(`Logro desbloqueado: ${name}`,'trophy'); if (DB.user) DB.unlockAchievement(name).catch(console.error); } }catch(e){}
  }
  if (news){ try{ store.set('achieved', unlocked); }catch(e){ storageError(e); } }
}
function achProgressLabel(name){
  const t = totals(realSessions());
  switch(name){
    case '10.000 palabras': return `${Math.min(t.words,10000)} / 10.000`;
    case '100.000 palabras': return `${fmtWords(Math.min(t.words,100000))} / 100 k`;
    case 'Diez libros terminados': return `${DEMO_DOCS.filter(d=>d.done).length} / 10`;
    case 'Racha de 30 días': return `${streakDays()} / 30`;
    case 'Primera semana completa': return `${Math.min(streakDays(),7)} / 7 días`;
    case '500 ppm': return `${t.maxWpm||0} / 500`;
    default: return 'Pendiente';
  }
}

views.objetivos = () => {
  const unlocked = unlockedAchievements();
  return `<div class="page"><h1 class="page-title">Objetivos y logros</h1><p class="page-sub">Pequeños compromisos diarios, resultados acumulados.</p>
  <div class="home-cols">
    <section class="card panel"><h3>Objetivos activos</h3>
      ${getGoals().map(g=>{ const t = GOAL_TYPES[g.type]; const cur = t.progress(g.target); const pct = Math.min(100, Math.round(cur/g.target*100)); return `
        <div style="padding:11px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="openGoalEditor('${g.id}')">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:7px"><span style="font-weight:540">${t.label}</span><span class="mono" style="font-size:11.5px;color:var(--text3)">${cur} / ${g.target} ${t.unit}</span></div>
          <div class="pbar"><i style="width:${pct}%"></i></div>
        </div>`;}).join('') || '<p style="font-size:13px;color:var(--text3)">Sin objetivos activos.</p>'}
      <button class="btn sm" style="margin-top:14px" onclick="openGoalEditor(null)">${I.plus} Nuevo objetivo</button>
      ${realSessions().length===0?'<p style="font-size:11.5px;color:var(--text3);margin-top:12px">El progreso se calcula con tus sesiones reales. Aún no hay actividad registrada en este dispositivo.</p>':''}
    </section>
    <section class="card panel"><h3>Logros</h3>
      <div style="display:flex;flex-direction:column;gap:9px">
      ${ACHIEVEMENTS.map(a=>{ const date = unlocked[a.name]; return `<div class="ach ${date?'':'locked'}"><div class="ach-medal">${date?I.check:I.trophy}</div>
        <div style="flex:1"><b style="font-size:13px">${a.name}</b><div style="font-size:11.5px;color:var(--text3)">${a.desc}</div></div>
        <span class="mono" style="font-size:10.5px;color:var(--text3)">${date || achProgressLabel(a.name)}</span></div>`;}).join('')}
      </div>
    </section>
  </div></div>`;
};

let vocabQuery = '';
function vocabDue(){ return DEMO_VOCAB.filter(v => (v.level||1) <= 2); } // niveles bajos = pendientes de repaso
views.vocabulario = () => {
  const due = vocabDue();
  let list = DEMO_VOCAB;
  if (vocabQuery){ const q = vocabQuery.toLowerCase(); list = list.filter(v => (v.word+' '+(v.def||'')+' '+(v.tr||'')+' '+(v.doc||'')).toLowerCase().includes(q)); }
  return `<div class="page"><h1 class="page-title">Vocabulario</h1><p class="page-sub">${DEMO_VOCAB.length} palabra${DEMO_VOCAB.length!==1?'s':''} guardada${DEMO_VOCAB.length!==1?'s':''} · ${due.length} pendiente${due.length!==1?'s':''} de repaso.</p>
  <div class="lib-toolbar">
    <button class="btn primary sm" ${due.length?'':'disabled'} onclick="startVocabReview()">${I.layers} Repasar (${due.length})</button>
    <button class="btn sm" onclick="exportVocab()">Exportar tarjetas</button>
    <button class="btn sm" onclick="openVocabEditor(null)">${I.plus} Añadir palabra</button>
    <div style="flex:1"></div>
    <input class="input" style="width:180px;padding:6px 10px;font-size:12.5px" placeholder="Buscar palabra…" value="${escHtml(vocabQuery)}" oninput="vocabQuery=this.value;render();setTimeout(()=>{const i=document.querySelector('.lib-toolbar input');i&&i.focus();i&&i.setSelectionRange(i.value.length,i.value.length)},0)">
  </div>
  ${list.length ? `<div class="libgrid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
  ${list.map(v=>`<div class="card vocab-card">
    <div style="display:flex;justify-content:space-between;align-items:center"><b class="serif" style="font-size:17px">${escHtml(v.word)}</b>
    <div class="level-dots" title="Nivel de dominio: pulsa para cambiar" style="cursor:pointer">${[1,2,3,4,5].map(i=>`<i class="${i<=v.level?'on':''}" onclick="setVocabLevel('${v.id}',${i})"></i>`).join('')}</div></div>
    <p style="font-size:13px;color:var(--text2);line-height:1.5">${escHtml(v.def||'Sin definición todavía — pulsa Editar para añadirla.')}</p>
    ${v.tr?`<p style="font-size:12px;color:var(--text3)">Traducción: ${escHtml(v.tr)}</p>`:''}
    <div class="note-meta" style="margin-top:2px"><span>${escHtml(v.doc||'—')}</span><span>${v.date}</span>
      <span style="margin-left:auto;display:flex;gap:8px">
      <a style="cursor:pointer" onclick="openVocabEditor('${v.id}')">Editar</a>
      ${v.docId&&docById(v.docId)?`<a style="cursor:pointer" onclick="go('lector/${v.docId}')">Ver contexto</a>`:''}
      <a style="cursor:pointer;color:#c04545" onclick="deleteVocab('${v.id}')">Eliminar</a></span></div>
  </div>`).join('')}
  </div>` : emptyState('layers','Sin resultados', vocabQuery?`Nada coincide con «${escHtml(vocabQuery)}».`:'Guarda palabras desde el lector (pausa el RSVP y abre el diccionario) para construir tu vocabulario.','Ver todo',"vocabQuery='';render()")}
  </div>`;
};
function vocabById(id){ return DEMO_VOCAB.find(v=>String(v.id)===String(id)); }
function setVocabLevel(id, level){ const v = vocabById(id); if(!v) return; v.level = level; saveVocab(); render(); }
function deleteVocab(id){
  confirmModal('Eliminar palabra','La palabra se eliminará de tu vocabulario.','Eliminar',()=>{
    DEMO_VOCAB = DEMO_VOCAB.filter(v=>String(v.id)!==String(id)); saveVocab(); render(); toast('Palabra eliminada','x');
  });
}
function openVocabEditor(id){
  const v = id ? vocabById(id) : null;
  openModal(`<div class="modal-h"><h3>${v?'Editar palabra':'Añadir palabra'}</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <div class="field"><label>Palabra</label><input class="input" id="vw-word" value="${v?escHtml(v.word):''}"></div>
    <div class="field"><label>Definición</label><textarea class="input" id="vw-def" style="height:70px;resize:none">${v?escHtml(v.def||''):''}</textarea></div>
    <div class="field"><label>Traducción</label><input class="input" id="vw-tr" value="${v?escHtml(v.tr||''):''}"></div>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:14px">
      <button class="btn" onclick="closeModal()">Cancelar</button>
      <button class="btn primary" onclick="commitVocab(${v?`'${v.id}'`:'null'})">Guardar</button>
    </div>
  </div>`);
}
function commitVocab(id){
  const word = document.getElementById('vw-word').value.trim();
  if (!word){ toast('Escribe la palabra','x'); return; }
  const def = document.getElementById('vw-def').value.trim();
  const tr = document.getElementById('vw-tr').value.trim();
  if (id){ const v = vocabById(id); Object.assign(v, { word, def, tr }); }
  else DEMO_VOCAB.unshift({ id:'v-'+Date.now(), word, def, tr, doc:'—', docId:null, date: fmtDate(new Date().toISOString()), level:1 });
  saveVocab(); closeModal(); render(); toast('Vocabulario actualizado','layers');
}
function exportVocab(){
  if (!DEMO_VOCAB.length){ toast('No hay palabras que exportar','x'); return; }
  const csv = 'palabra;definición;traducción;documento;nivel\n' +
    DEMO_VOCAB.map(v=>[v.word, v.def||'', v.tr||'', v.doc||'', v.level].map(x=>`"${String(x).replace(/"/g,'""')}"`).join(';')).join('\n');
  downloadFile('focal-vocabulario.csv', csv, 'text/csv');
  toast('Vocabulario exportado en CSV','check');
}
let vrIdx = 0, vrShow = false;
function startVocabReview(){
  const due = vocabDue(); if (!due.length) return;
  vrIdx = 0; vrShow = false; window._vrCards = due;
  openModal(`<div class="modal-h"><h3>Repaso de vocabulario</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><div id="vr-body"></div></div>`);
  renderVocabReview();
}
function renderVocabReview(){
  const cards = window._vrCards; const el = document.getElementById('vr-body'); if(!el) return;
  if (vrIdx >= cards.length){ el.innerHTML = `<div style="text-align:center;padding:20px 0"><p class="eyebrow">Repaso completado</p><p style="font-size:14px;margin:10px 0 18px">Has repasado ${cards.length} palabra${cards.length!==1?'s':''}.</p><button class="btn primary" onclick="closeModal();render()">Cerrar</button></div>`; return; }
  const v = cards[vrIdx];
  el.innerHTML = `
    <div class="card" style="min-height:130px;display:flex;align-items:center;justify-content:center;text-align:center;padding:22px;cursor:pointer" onclick="vrShow=!vrShow;renderVocabReview()">
      <div><b class="serif" style="font-size:20px">${escHtml(v.word)}</b>
      ${vrShow?`<p style="font-size:13px;color:var(--text2);margin-top:10px;line-height:1.5">${escHtml(v.def||'Sin definición')}</p>${v.tr?`<p style="font-size:12px;color:var(--text3)">${escHtml(v.tr)}</p>`:''}`:`<p style="font-size:11.5px;color:var(--text3);margin-top:10px">Pulsa para ver la definición</p>`}</div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:14px">
      <button class="btn sm" onclick="reviewAnswer('${v.id}',false)">No la recordaba</button>
      <button class="btn sm primary" onclick="reviewAnswer('${v.id}',true)">La sabía</button>
    </div>
    <p class="mono" style="text-align:center;font-size:11px;color:var(--text3);margin-top:10px">${vrIdx+1} / ${cards.length}</p>`;
}
function reviewAnswer(id, ok){
  const v = vocabById(id);
  if (v) v.level = Math.max(1, Math.min(5, (v.level||1) + (ok?1:-1)));
  saveVocab(); vrIdx++; vrShow = false; renderVocabReview();
}

views.historial = () => `<div class="page"><h1 class="page-title">Historial de sesiones</h1><p class="page-sub">Todas tus sesiones de lectura, con métricas por sesión.</p>
  <div class="ll-head" style="grid-template-columns:1fr 110px 90px 90px 90px 80px"><span>Documento</span><span>Fecha</span><span>Modo</span><span>Duración</span><span>Velocidad</span><span>Compr.</span></div>
  ${DEMO_SESSIONS.map(s=>{const d=docById(s.doc);if(!d)return '';return `
    <div class="session-row" onclick="go('documento/${d.id}')" style="cursor:pointer">
      <div style="display:flex;gap:10px;align-items:center"><span class="hl-dot" style="background:${d.cover.accent}"></span><b style="font-size:13px">${escHtml(d.title)}</b>${s.demo?' <span class="chip" style="font-size:9.5px">ejemplo</span>':''}</div>
      <span class="mono">${s.ts?relDate(new Date(s.ts).toISOString()):s.date}</span><span class="chip" style="font-size:10.5px">${s.mode}</span>
      <span class="mono">${s.mins} min</span><span class="mono">${s.wpm} ppm</span><span class="mono">${s.comp==null?'—':s.comp+' %'}</span>
    </div>`;}).join('') || emptyState('clock','Sin sesiones','Tus sesiones de lectura aparecerán aquí con sus métricas.','Empezar a leer',"go('biblioteca')")}
</div>`;

views.perfil = () => {
  let usedKb = 0;
  try{ usedKb = Math.round(Object.keys(localStorage).filter(k=>k.startsWith('focal.')).reduce((a,k)=>a+(localStorage.getItem(k)||'').length,0)/1024); }catch(e){}
  const quotaMb = 5; // límite habitual de localStorage
  return `<div class="page" style="max-width:720px">
  <h1 class="page-title">Perfil</h1><p class="page-sub">Cuenta, almacenamiento y datos.</p>
  <div class="card panel" style="display:flex;gap:18px;align-items:center;margin-bottom:18px">
    <div class="avatar" style="width:56px;height:56px;font-size:19px">${(DB.user?.email||S.account.name).slice(0,2).toUpperCase()}</div>
    <div style="flex:1"><b style="font-size:16px">${DB.user ? escHtml(DB.user.email.split('@')[0]) : escHtml(S.account.name)}</b><div style="font-size:13px;color:var(--text3)">${escHtml(DB.user?.email || S.account.email)}${DB.user?'':' · modo local, sin cuenta'}</div></div>
    ${DB.user ? `<button class="btn sm" onclick="DB.signOut().then(()=>location.reload())">Cerrar sesión</button>` : `<button class="btn sm" onclick="go('ajustes');S.setTab='cuenta'">Editar</button>`}
  </div>
  <div class="card panel" style="margin-bottom:18px"><h3>Sincronización</h3>
    ${DB.user ? `<div class="setrow"><div><div class="sr-t">Este dispositivo</div><div class="sr-d">Sesión activa · los cambios se guardan en tu cuenta</div></div><span class="sync-dot" style="margin:0"></span></div>`
    : `<div class="setrow"><div><div class="sr-t">Modo local</div><div class="sr-d">Todos los datos se guardan en este navegador. Configura Supabase (ver README) para sincronizar entre dispositivos.</div></div></div>`}
  </div>
  <div class="card panel" style="margin-bottom:18px"><h3>Almacenamiento y copias</h3>
    <div class="setrow"><div><div class="sr-t">Almacenamiento local</div><div class="sr-d">${usedKb<1024?usedKb+' KB':(usedKb/1024).toFixed(1)+' MB'} de ~${quotaMb} MB disponibles en el navegador</div></div><div style="width:140px" class="pbar"><i style="width:${Math.min(100,Math.round(usedKb/(quotaMb*1024)*100))}%"></i></div></div>
    <div class="setrow"><div><div class="sr-t">Copia de seguridad</div><div class="sr-d">Descarga un JSON con todos tus datos</div></div><button class="btn sm" onclick="exportAllData()">Crear ahora</button></div>
    <div class="setrow"><div><div class="sr-t">Exportar notas</div><div class="sr-d">Markdown con referencias</div></div><button class="btn sm" onclick="exportNotes()">Exportar</button></div>
  </div>
  <div class="card panel"><h3 style="color:#c04545">Zona de riesgo</h3>
    <div class="setrow"><div><div class="sr-t">Borrar datos locales</div><div class="sr-d">Elimina permanentemente todos los datos guardados en este navegador.</div></div><button class="btn sm" style="color:#c04545;border-color:color-mix(in srgb,#c04545 40%,var(--border))" onclick="clearLocalData()">Borrar…</button></div>
  </div>
</div>`;
};

/* ---------- Ajustes ---------- */
const SET_SECTIONS = ['cuenta','apariencia','lectura','rsvp','comprension','audio','idioma','accesibilidad','sincronizacion','privacidad','atajos','datos'];
const SET_LABELS = { cuenta:'Cuenta', apariencia:'Apariencia', lectura:'Lectura tradicional', rsvp:'RSVP', comprension:'Comprensión', audio:'Audio', idioma:'Idioma', accesibilidad:'Accesibilidad', sincronizacion:'Sincronización', privacidad:'Privacidad', atajos:'Atajos', datos:'Datos y exportación' };
function tRow(t,d,on=true,cb=''){ return `<div class="setrow"><div><div class="sr-t">${t}</div>${d?`<div class="sr-d">${d}</div>`:''}</div><button class="toggle ${on?'on':''}" onclick="this.classList.toggle('on');${cb}"></button></div>`; }
function sRow(t,d,val,min,max,unit='',cb=''){ return `<div class="setrow"><div><div class="sr-t">${t}</div>${d?`<div class="sr-d">${d}</div>`:''}</div><div class="sr-ctrl" style="width:200px"><input type="range" class="slider" min="${min}" max="${max}" value="${val}" oninput="this.nextElementSibling.textContent=this.value+' ${unit}';${cb}"><span class="sr-val">${val} ${unit}</span></div></div>`; }

views.ajustes = () => {
  const tab = S.setTab;
  let body='';
  if (tab==='apariencia') body = `
    <h3 style="margin-bottom:16px">Tema</h3>
    <div class="themegrid">
      ${Object.entries(THEMES).map(([k,t])=>themeCard(k,t)).join('')}
      ${customThemeCard()}
    </div>
    <div class="hr"></div>
    ${tRow('Seguir el sistema','Cambia entre Paper y Midnight automáticamente',S.ui.followSystem,"S.ui.followSystem=this.classList.contains('on');saveUi();systemThemeSync()")}
    ${sRow('Tamaño de interfaz','',S.ui.scale,85,130,'%',"S.ui.scale=+this.value;saveUi()")}
    ${tRow('Reducir transparencias','',S.ui.reduceTransp,"S.ui.reduceTransp=this.classList.contains('on');saveUi()")}`;
  else if (tab==='lectura') body = `
    ${sRow('Tamaño de fuente','',S.reader.fs,14,26,'px',"S.reader.fs=+this.value;saveReader()")}
    ${sRow('Interlineado','',Math.round(S.reader.lh*100),130,220,'%',"S.reader.lh=this.value/100;saveReader()")}
    ${sRow('Ancho de columna','',S.reader.width,480,860,'px',"S.reader.width=+this.value;saveReader()")}
    ${sRow('Espaciado entre letras','',S.reader.ls||0,-2,8,'',"S.reader.ls=+this.value;saveReader()")}
    ${sRow('Separación entre párrafos','',S.reader.pgap||115,80,220,'%',"S.reader.pgap=+this.value;saveReader()")}
    <div class="setrow"><div><div class="sr-t">Fuente</div></div><div class="seg">${[['serif','Serif'],['sans','Sans']].map(f=>`<button class="${(S.reader.font||'serif')===f[0]?'on':''}" onclick="segSel(this);S.reader.font='${f[0]}';saveReader()">${f[1]}</button>`).join('')}</div></div>
    <div class="setrow"><div><div class="sr-t">Alineación</div></div><div class="seg">${[['left','Izquierda'],['justify','Justificada']].map(f=>`<button class="${(S.reader.align||'left')===f[0]?'on':''}" onclick="segSel(this);S.reader.align='${f[0]}';saveReader()">${f[1]}</button>`).join('')}</div></div>
    ${tRow('Modo enfoque','Atenúa todo excepto el párrafo actual',!!S.reader.focus,"S.reader.focus=this.classList.contains('on');saveReader()")}
    ${tRow('Barra superior automática','Oculta la interfaz al hacer scroll',S.reader.autoTop!==false,"S.reader.autoTop=this.classList.contains('on');saveReader()")}
    <p style="font-size:11.5px;color:var(--text3);margin-top:12px">Los cambios se aplican al abrir el lector y se guardan en este dispositivo.</p>`;
  else if (tab==='rsvp') body = rsvpSettingsBody();
  else if (tab==='comprension') body = `
    <div class="setrow"><div><div class="sr-t">Preguntas de comprensión</div><div class="sr-d">Preguntas preconfiguradas sobre los textos de demostración. Para documentos importados no se generan preguntas automáticas.</div></div>
    <div class="seg">${[['auto','Activadas'],['off','Off']].map(f=>`<button class="${S.comp.mode===f[0]?'on':''}" onclick="segSel(this);S.comp.mode='${f[0]}';saveComp()">${f[1]}</button>`).join('')}</div></div>
    ${sRow('Frecuencia','Cada cuántos minutos aparece una pregunta',S.comp.freq,3,30,'min',"S.comp.freq=+this.value;saveComp()")}
    ${tRow('Velocidad adaptativa','Ajusta la velocidad según la complejidad del texto',S.rsvp.adaptive,"S.rsvp.adaptive=this.classList.contains('on');saveRsvp()")}
    <div class="setrow"><div><div class="sr-t">Comprensión media</div><div class="sr-d">${(()=>{const h=store.get('compHistory',[]);return h.length?`${h.length} pregunta${h.length!==1?'s':''} respondida${h.length!==1?'s':''}`:'Aún sin preguntas respondidas';})()}</div></div><b class="mono" style="font-size:15px">${compAvg()===null?'—':compAvg()+' %'}</b></div>`;
  else if (tab==='audio') body = `
    ${tRow('Lectura con voz','Sintetiza cada palabra durante el RSVP (según la voz del sistema)',S.audio.voice,"S.audio.voice=this.classList.contains('on');saveAudio()")}
    ${tRow('Sonido de ritmo','Un tic sutil que marca la cadencia',S.audio.tick,"S.audio.tick=this.classList.contains('on');saveAudio()")}
    ${sRow('Velocidad de voz','',S.audio.rate,60,180,'%',"S.audio.rate=+this.value;saveAudio()")}
    <div class="setrow"><div><div class="sr-t">Voz</div><div class="sr-d">Voces en español instaladas en tu sistema.</div></div><select class="input" style="width:220px" onchange="S.audio.voiceName=this.value;saveAudio()">
      ${('speechSynthesis' in window ? speechSynthesis.getVoices().filter(v=>v.lang.startsWith('es')) : []).map(v=>`<option value="${escHtml(v.name)}" ${S.audio.voiceName===v.name?'selected':''}>${escHtml(v.name)} (${v.lang})</option>`).join('') || '<option value="">Voz por defecto del sistema</option>'}
    </select></div>
    <div class="setrow"><div class="sr-t">Probar</div><button class="btn sm" onclick="speakWord('Focal, lectura rápida palabra a palabra')">Escuchar ejemplo</button></div>`;
  else if (tab==='accesibilidad') body = `
    ${tRow('Alto contraste','',S.access.contrast,"S.access.contrast=this.classList.contains('on');saveAccess()")}
    ${tRow('Reducción de movimiento','Desactiva animaciones no esenciales',S.access.motion,"S.access.motion=this.classList.contains('on');saveAccess()")}
    ${tRow('Controles ampliados','Aumenta el tamaño de botones y áreas táctiles',S.access.bigControls,"S.access.bigControls=this.classList.contains('on');saveAccess()")}
    ${sRow('Espaciado entre letras','',S.access.ls,0,10,'',"S.access.ls=+this.value;saveAccess()")}
    <p style="font-size:11.5px;color:var(--text3);margin-top:12px">La app también respeta la preferencia de reducción de movimiento de tu sistema operativo automáticamente.</p>`;
  else if (tab==='atajos') body = `<div class="kbd-grid">
    ${[['Reproducir / pausar','Espacio'],['Retroceder / avanzar palabra','← →'],['Avanzar por frase','⇧ ← →'],['Reiniciar frase','R'],['Pantalla completa','F'],['Cambiar tema','T'],['Crear marcador','M'],['Crear nota','N'],['Salir del modo inmersivo','Esc'],['Subir / bajar velocidad','+ −'],['Buscador global','⌘ K'],['Alternar lector ↔ RSVP','⇥ Tab']].map(k=>`<div class="kbd-row"><span>${k[0]}</span><kbd>${k[1]}</kbd></div>`).join('')}</div>`;
  else if (tab==='cuenta') body = `
    <div class="field"><label>Nombre</label><input class="input" id="acc-name" value="${escHtml(S.account.name)}"></div>
    <div class="field"><label>Correo</label><input class="input" id="acc-email" type="email" value="${escHtml(S.account.email)}"></div>
    <button class="btn primary sm" onclick="saveAccount()">Guardar cambios</button>
    <div class="hr"></div>
    <div class="setrow"><div><div class="sr-t">Plan</div><div class="sr-d">${DB.user?'Cuenta sincronizada con Supabase':'Modo local: los datos viven en este navegador. Configura Supabase para sincronizar entre dispositivos.'}</div></div></div>`;
  else if (tab==='idioma') body = `
    <div class="setrow"><div><div class="sr-t">Formato regional</div><div class="sr-d">Afecta a fechas y números en toda la aplicación.</div></div><select class="input" style="width:200px" onchange="S.locale=this.value;store.set('locale',S.locale);render();toast('Formato regional aplicado')">
      ${[['es-ES','Español (España)'],['es-MX','Español (México)'],['es-AR','Español (Argentina)']].map(l=>`<option value="${l[0]}" ${(S.locale||'es-ES')===l[0]?'selected':''}>${l[1]}</option>`).join('')}</select></div>
    <p style="font-size:11.5px;color:var(--text3);margin-top:12px">La detección de frases y el silabeo funcionan con cualquier idioma del texto: no requieren configuración.</p>`;
  else if (tab==='sincronizacion') body = DB.user ? `
    <div class="setrow"><div><div class="sr-t">Estado</div><div class="sr-d">Sesión iniciada como ${escHtml(DB.user.email)}. Los cambios se guardan en tu cuenta automáticamente.</div></div><span class="sync-dot" style="margin:0"></span></div>` : `
    <div class="setrow"><div><div class="sr-t">Estado</div><div class="sr-d">Modo local: todo se guarda en este navegador (localStorage). No hay nada que sincronizar.</div></div><button class="btn sm" disabled title="Configura Supabase en config.js para activar la sincronización">Sincronizar ahora</button></div>
    <p style="font-size:11.5px;color:var(--text3);margin-top:12px">Para sincronizar entre dispositivos, configura un proyecto de Supabase siguiendo el README e inicia sesión con tu correo.</p>`;
  else if (tab==='privacidad') body = `
    <div class="setrow"><div><div class="sr-t">Procesamiento local de documentos</div><div class="sr-d">La extracción de texto (PDF, EPUB…) ocurre siempre en tu navegador; los archivos no se suben a ningún servidor salvo tu propia cuenta.</div></div><span class="chip">Siempre activo</span></div>
    <div class="setrow"><div><div class="sr-t">Estadísticas anónimas de uso</div><div class="sr-d">Focal no envía telemetría de ningún tipo.</div></div><span class="chip">Sin telemetría</span></div>`;
  else body = `<div class="setrow"><div><div class="sr-t">Exportar notas</div><div class="sr-d">Markdown con referencias a documento y capítulo.</div></div><button class="btn sm" onclick="exportNotes()">Exportar</button></div>
    <div class="setrow"><div><div class="sr-t">Exportar estadísticas</div><div class="sr-d">Sesiones de lectura en CSV.</div></div><button class="btn sm" onclick="exportSessionsCsv()">CSV</button></div>
    <div class="setrow"><div><div class="sr-t">Exportar todos mis datos</div><div class="sr-d">Biblioteca, notas, vocabulario, sesiones y ajustes en JSON.</div></div><button class="btn sm" onclick="exportAllData()">JSON</button></div>
    <div class="setrow"><div><div class="sr-t">Borrar datos locales</div><div class="sr-d">Elimina progreso, notas, ajustes e importaciones guardados en este navegador.</div></div><button class="btn sm" style="color:#c04545" onclick="clearLocalData()">Borrar…</button></div>`;
  return `<div class="page"><h1 class="page-title">Ajustes</h1><p class="page-sub">Personaliza cada detalle de Focal.</p>
  <div class="settings-layout">
    <nav class="set-nav">${SET_SECTIONS.map(s=>`<button class="${tab===s?'on':''}" onclick="S.setTab='${s}';render()">${SET_LABELS[s]}</button>`).join('')}</nav>
    <div class="card panel">${body}</div>
  </div></div>`;
};
function segSel(btn){ [...btn.parentElement.children].forEach(b=>b.classList.remove('on')); btn.classList.add('on'); }
function saveAccount(){
  const name = document.getElementById('acc-name').value.trim();
  const email = document.getElementById('acc-email').value.trim();
  if (!name){ toast('El nombre no puede estar vacío','x'); return; }
  if (!email.includes('@')){ toast('Escribe un correo válido','x'); return; }
  S.account = { name, email }; store.set('account', S.account);
  render(); toast('Cuenta actualizada','check');
}
function exportSessionsCsv(){
  const rows = DEMO_SESSIONS.map(s=>{
    const d = docById(s.doc);
    return [s.ts?new Date(s.ts).toISOString():s.date, d?d.title:s.doc, s.mode, s.mins, s.words, s.wpm, s.comp??'', s.demo?'ejemplo':'real'];
  });
  const csv = 'fecha;documento;modo;minutos;palabras;ppm;comprensión;origen\n' + rows.map(r=>r.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(';')).join('\n');
  downloadFile('focal-sesiones.csv', csv, 'text/csv');
  toast('Estadísticas exportadas','check');
}
function exportAllData(){
  const data = {
    exportedAt: new Date().toISOString(),
    documents: DEMO_DOCS, notes: DEMO_NOTES, vocabulary: DEMO_VOCAB, sessions: DEMO_SESSIONS,
    bookmarks: getBookmarks(), goals: getGoals(), achievements: unlockedAchievements(),
    settings: { theme:S.theme, custom:S.custom, rsvp:S.rsvp, reader:S.reader, comp:S.comp, audio:S.audio, access:S.access, ui:S.ui },
  };
  downloadFile('focal-datos.json', JSON.stringify(data, null, 2), 'application/json');
  toast('Datos exportados en JSON','check');
}
function clearLocalData(){
  confirmModal('Borrar datos locales','Se eliminarán el progreso, las notas, el vocabulario, los ajustes y los documentos importados guardados en este navegador. Esta acción no se puede deshacer.','Borrar todo',()=>{
    Object.keys(localStorage).filter(k=>k.startsWith('focal.')).forEach(k=>localStorage.removeItem(k));
    location.reload();
  });
}
function themeCard(k,t){
  return `<button class="theme-card ${S.theme===k?'on':''}" data-t="${k}" onclick="applyTheme('${k}');toast('Tema ${t.name} aplicado','sun')">
    <div class="tc-prev" style="background:${t.vars.bg};color:${t.vars.text}">
      <span class="tc-word" style="${t.mono?'font-family:var(--mono);font-size:17px':''}">lec<span style="color:${t.vars.orp}">t</span>ura</span>
      <div class="tc-lines"><i style="width:70px;background:${t.vars.text3}"></i><i style="width:46px;background:${t.vars.text3};opacity:.6"></i></div>
    </div>
    <div class="tc-meta"><b>${t.name}</b><span>${t.desc}</span></div>
  </button>`;
}
function customThemeCard(){
  const c = S.custom;
  return `<button class="theme-card ${S.theme==='custom'?'on':''}" data-t="custom" onclick="openThemeEditor()">
    <div class="tc-prev" style="background:${c?c.vars.bg:'var(--surface2)'};color:${c?c.vars.text:'var(--text3)'}">
      ${c?`<span class="tc-word">lec<span style="color:${c.vars.orp}">t</span>ura</span>`:`<span style="font-size:26px;font-weight:300">+</span><span style="font-size:11px">Crear tema propio</span>`}
    </div>
    <div class="tc-meta"><b>${c?c.name:'Personalizado'}</b><span>${c?'Tu tema guardado — editar':'Editor completo de colores'}</span></div>
  </button>`;
}
function openThemeEditor(){
  const base = S.custom?.vars || {...THEMES[S.theme==='custom'?'paper':S.theme].vars};
  window._ct = {...base};
  window._ctExtra = { radius: S.custom?.radius ?? 10, shadow: S.custom?.shadowPct ?? 40 };
  const fields = [['bg','Fondo'],['text','Texto'],['text2','Texto secundario'],['text3','Terciario'],['accent','Acento'],['orp','Color ORP'],['surface','Superficies'],['surface2','Superficie 2'],['border','Bordes']];
  openModal(`
    <div class="modal-h"><h3>Editor de tema</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
    <div class="modal-b">
      <div id="ct-prev" style="border-radius:12px;border:1px solid var(--border);padding:30px;text-align:center;margin-bottom:20px;transition:all .25s">
        <div style="font-family:var(--serif);font-size:34px;font-weight:500">lec<span id="ct-orp">t</span>ura</div>
        <div style="font-size:12px;margin-top:8px;opacity:.6">Vista previa del tema · 420 ppm</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px 18px">
      ${fields.map(f=>`<div style="display:flex;align-items:center;gap:9px;padding:5px 0"><span class="color-swatch"><input type="color" value="${toHex(window._ct[f[0]])}" oninput="_ct['${f[0]}']=this.value;ctPrev()"></span><span style="font-size:12px">${f[1]}</span></div>`).join('')}
      </div>
      <div class="hr" style="margin:18px 0"></div>
      <div class="field"><label>Nombre del tema</label><input class="input" id="ct-name" value="${escHtml(S.custom?.name||'Mi tema')}"></div>
      ${sRow('Redondeado','',window._ctExtra.radius,0,20,'px','_ctExtra.radius=+this.value;ctPrev()')}
      ${sRow('Intensidad de sombras','',window._ctExtra.shadow,0,100,'%','_ctExtra.shadow=+this.value;ctPrev()')}
      <p id="ct-warn" style="font-size:12px;color:#c04545;display:none;margin-top:10px">Aviso de accesibilidad: el contraste entre texto y fondo es insuficiente (menos de 4,5:1).</p>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:20px;flex-wrap:wrap">
        ${S.custom?`<button class="btn sm" style="margin-right:auto;color:#c04545" onclick="deleteCustomTheme()">Eliminar</button>
        <button class="btn sm" onclick="exportCustomTheme()">Exportar</button>`:''}
        <button class="btn sm" onclick="importCustomTheme()">Importar</button>
        <button class="btn sm" onclick="resetCustomTheme()">Restaurar</button>
        <button class="btn" onclick="closeModal()">Cancelar</button>
        <button class="btn primary" onclick="saveCustomTheme()">Guardar y aplicar</button>
      </div>
    </div>`);
  ctPrev();
}
function luminance(hex){
  const c = toHex(hex).slice(1);
  const [r,g,b] = [0,2,4].map(i=>{ let v = parseInt(c.slice(i,i+2),16)/255; return v<=.03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); });
  return .2126*r + .7152*g + .0722*b;
}
function contrastRatio(a,b){ const [l1,l2] = [luminance(a), luminance(b)].sort((x,y)=>y-x); return (l1+.05)/(l2+.05); }
function deleteCustomTheme(){
  confirmModal('Eliminar tema','Se eliminará tu tema personalizado.','Eliminar',()=>{
    S.custom = null; store.set('customTheme', null);
    if (S.theme==='custom') applyTheme('paper');
    render(); toast('Tema personalizado eliminado','x');
  });
}
function exportCustomTheme(){
  if (!S.custom){ toast('No hay tema personalizado que exportar','x'); return; }
  downloadFile('focal-tema.json', JSON.stringify(S.custom, null, 2), 'application/json');
  toast('Tema exportado','sun');
}
function importCustomTheme(){
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json,application/json';
  input.onchange = async () => {
    try{
      const data = JSON.parse(await input.files[0].text());
      if (!data.vars || !data.vars.bg || !data.vars.text) throw new Error('estructura inválida');
      S.custom = { name: data.name||'Tema importado', desc:'Personalizado', vars: data.vars };
      store.set('customTheme', S.custom); applyTheme('custom'); closeModal(); render();
      toast('Tema importado y aplicado','sun');
    }catch(err){ toast('El archivo no es un tema válido de Focal','x'); }
  };
  input.click();
}
function resetCustomTheme(){
  window._ct = {...THEMES.paper.vars}; window._ctExtra = { radius:10, shadow:40 };
  document.querySelectorAll('.modal input[type=color]').forEach((inp,i)=>{
    const keys = ['bg','text','text2','text3','accent','orp','surface','surface2','border'];
    inp.value = toHex(window._ct[keys[i]]);
  });
  ctPrev(); toast('Valores restaurados','refresh');
}
function toHex(c){ if(!c) return '#888888'; if(c.startsWith('#')) return c.length===4? '#'+[...c.slice(1)].map(x=>x+x).join('') : c.slice(0,7); return '#888888'; }
function ctPrev(){
  const p = document.getElementById('ct-prev'); if(!p) return;
  p.style.background = _ct.bg; p.style.color = _ct.text; p.style.borderColor = _ct.border;
  p.style.borderRadius = (window._ctExtra?.radius ?? 10) + 'px';
  p.style.boxShadow = `0 8px 24px rgba(0,0,0,${((window._ctExtra?.shadow ?? 40)/100*.4).toFixed(2)})`;
  document.getElementById('ct-orp').style.color = _ct.orp;
  const warn = document.getElementById('ct-warn');
  if (warn) warn.style.display = contrastRatio(_ct.text, _ct.bg) < 4.5 ? 'block' : 'none';
}
function saveCustomTheme(){
  if (contrastRatio(_ct.text, _ct.bg) < 3){ toast('Contraste demasiado bajo entre texto y fondo: ajusta los colores','x'); return; }
  const name = document.getElementById('ct-name')?.value.trim() || 'Mi tema';
  S.custom = { name, desc:'Personalizado', radius: window._ctExtra.radius, shadowPct: window._ctExtra.shadow,
    vars:{..._ct, shadow:`rgba(0,0,0,${(window._ctExtra.shadow/100*.4).toFixed(2)})`} };
  store.set('customTheme', S.custom); applyTheme('custom'); closeModal(); render(); toast('Tema personalizado guardado','sun');
}

/* ---------- Detalle de documento ---------- */
views.documento = (id) => {
  const d = docById(id);
  if(!d){ setTimeout(()=>{ toast('Documento no encontrado','x'); go('biblioteca'); }, 20); return views.biblioteca(); }
  const paras = docParas(d.id);
  const secs = docSections(paras);
  const words = docText(d.id).split(/\s+/).filter(Boolean).length || d.words;
  const minNormal = Math.max(1, Math.round(words*(1-d.progress)/250));
  const minRsvp = Math.max(1, Math.round(words*(1-d.progress)/S.rsvp.wpm));
  const bms = getBookmarks().filter(b=>b.doc===d.id);
  return `<div class="page">
    <button class="btn ghost sm" style="margin-bottom:22px" onclick="go('biblioteca')">${I.back} Biblioteca</button>
    <div class="detail-hero">
      ${coverHTML(d)}
      <div style="flex:1;min-width:0">
        <div style="display:flex;gap:8px;margin-bottom:10px">${d.tags.map(t=>`<span class="chip">${t}</span>`).join('')}<span class="ftype" style="align-self:center">${d.type}</span></div>
        <h1 class="serif" style="font-family:var(--serif);font-size:30px;font-weight:600;letter-spacing:-.02em">${d.title}</h1>
        <p style="color:var(--text2);margin:6px 0 18px">${d.author}</p>
        <div class="hero-meta">
          <div class="hm"><b>${d.pages}</b><span>páginas</span></div>
          <div class="hm"><b>${fmtWords(d.words)}</b><span>palabras</span></div>
          <div class="hm"><b>${d.readTime}</b><span>tiempo leído</span></div>
          <div class="hm"><b>${d.timeLeft}</b><span>restante a ${d.avgWpm} ppm</span></div>
        </div>
        <div class="pbar" style="margin:6px 0 18px"><i style="width:${d.progress*100}%"></i></div>
        <div class="hero-actions">
          <button class="btn primary" onclick="go('lector/${d.id}')">${I.book} Lectura tradicional</button>
          <button class="btn accent" onclick="go('rsvp/${d.id}')">${I.zap} Lectura RSVP</button>
          <button class="btn" onclick="go('estudio/${d.id}')">${I.split} Modo estudio</button>
          <button class="btn" title="Favorito" onclick="toggleFav('${d.id}')">${I.star} ${d.fav?'Quitar favorito':'Favorito'}</button>
          <button class="btn" onclick="renameDocument('${d.id}')">${I.note} Editar</button>
          <button class="btn" onclick="toggleArchive('${d.id}')">${I.library} ${d.archived?'Restaurar':'Archivar'}</button>
          <button class="btn" style="color:#c04545" onclick="deleteDocument('${d.id}')">${I.x} Eliminar</button>
        </div>
        <p style="font-size:12px;color:var(--text3);margin-top:14px">Lo que te queda tardaría <b>${minNormal} min</b> en lectura normal (250 ppm) y <b>${minRsvp} min</b> a tu velocidad RSVP actual (${S.rsvp.wpm} ppm).</p>
      </div>
    </div>
    <div class="detail-stats">
      <div class="stat"><b>${d.sessions}</b><span>sesiones</span></div>
      <div class="stat"><b>${d.avgWpm}<em> ppm</em></b><span>velocidad media</span></div>
      <div class="stat"><b>${d.added}</b><span>importado</span></div>
      <div class="stat"><b>${d.lastRead}</b><span>última lectura</span></div>
    </div>
    <div class="home-cols">
      <section class="card panel"><h3>Tabla de contenidos</h3>
        ${secs.map((c,i)=>{ const pct = c.start/paras.length; return `<button class="toc-item ${d.progress>=pct && d.progress< (secs[i+1]?secs[i+1].start/paras.length:1) ?'on':''}" onclick="store.set('readpos.${d.id}',${pct.toFixed(3)});go('lector/${d.id}')"><span>${c.label}</span><span>${d.progress>=(secs[i+1]?secs[i+1].start/paras.length:1)?'✓':Math.max(1,Math.round((paras.slice(c.start, secs[i+1]?.start).join(' ').split(/\s+/).length)/S.rsvp.wpm))+' min'}</span></button>`;}).join('')}
        ${bms.length?`<h3 style="margin-top:22px">Marcadores</h3>${bms.map(b=>`
          <div class="toc-item" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="${b.token!==null?`openBookmark('${b.id}')`:`store.set('readpos.${d.id}',${(b.scroll||0).toFixed(3)});go('lector/${d.id}')`}">
            <span style="display:flex;gap:8px;align-items:center">${I.bookmark}<span style="font-size:12px">${escHtml(b.excerpt||'')}</span></span>
            <span style="display:flex;gap:8px;align-items:center"><span class="mono" style="font-size:10.5px">${b.progress} %</span><a style="cursor:pointer;color:#c04545;font-size:11px" onclick="event.stopPropagation();deleteBookmark('${b.id}')">✕</a></span>
          </div>`).join('')}`:''}
      </section>
      <section class="card panel"><h3>Notas en este documento <a onclick="go('notas');return false" href="#/notas">Ver todas</a></h3>
        ${DEMO_NOTES.filter(n=>n.doc===d.id).map(n=>`<div style="padding:10px 0;border-bottom:1px solid var(--border)"><div class="serif" style="font-size:13.5px;padding-left:10px;border-left:2.5px solid ${HL_COLORS[n.color]};line-height:1.5">“${escHtml(n.text)}”</div></div>`).join('') || '<p style="font-size:13px;color:var(--text3)">Aún no hay notas. Subraya durante la lectura para verlas aquí.</p>'}
        <h3 style="margin-top:22px">Densidad léxica por sección</h3>
        <div style="display:flex;gap:3px;align-items:flex-end;height:44px">
          ${(()=>{ const segs=30, all=docText(d.id).split(/\s+/).filter(Boolean); const per=Math.max(1,Math.ceil(all.length/segs));
            const dens=Array.from({length:segs},(_,i)=>{ const seg=all.slice(i*per,(i+1)*per); if(!seg.length) return 0; return seg.reduce((a,w)=>a+w.length,0)/seg.length; });
            const mx=Math.max(...dens,1), mn=Math.min(...dens.filter(x=>x>0));
            return dens.map((v,i)=>{ const h=v?Math.max(.12,(v-mn)/(mx-mn||1)*.88+.12):0; return `<i style="flex:1;height:${Math.round(h*100)}%;border-radius:2px;background:color-mix(in srgb,var(--accent) ${Math.round(h*85)}%,var(--surface2))" title="Segmento ${i+1} · longitud media ${v.toFixed(1)}"></i>`; }).join(''); })()}
        </div>
        <p style="font-size:11.5px;color:var(--text3);margin-top:8px">Calculada con la longitud media de palabra de cada segmento del texto real. Con la velocidad adaptativa activada, Focal ralentiza en los tramos más densos.</p>
      </section>
    </div>
  </div>`;
};

/* ---------- Lector tradicional ---------- */
function docParas(id){
  const text = docText(id) || DEMO_TEXTS.habitos;
  return text.split(/\n{2,}/).flatMap(block =>
    block.split(/(?<=\.)\s+(?=[A-ZÁÉÍÓÚ¿L])/g).reduce((acc,s)=>{
      if (!acc.length || acc[acc.length-1].split(' ').length > 70) acc.push(s); else acc[acc.length-1]+=' '+s; return acc; },[])
  ).filter(p=>p.trim());
}
function docSections(paras){
  const per = Math.max(4, Math.ceil(paras.length/8));
  const secs = [];
  for (let i=0;i<paras.length;i+=per) secs.push({ start:i, label:`Sección ${secs.length+1}` });
  return secs;
}
function applyHighlights(html, docId){
  // Marca en el texto los destacados guardados de este documento.
  let out = html;
  for (const n of DEMO_NOTES.filter(n=>n.doc===docId)){
    const frag = escHtml(n.text).slice(0, 220);
    if (frag && out.includes(frag)) out = out.replace(frag, `<mark class="hl" style="--hl:${HL_COLORS[n.color]}" title="${n.note?escHtml(n.note):'Destacado'}">${frag}</mark>`);
  }
  return out;
}
function readerColStyle(){
  const r = S.reader;
  return `--read-w:${r.width}px;--read-fs:${r.fs}px;--read-lh:${r.lh};letter-spacing:${(r.ls||0)/10}px;text-align:${r.align==='justify'?'justify':'left'};font-family:var(--${r.font==='sans'?'sans':'serif'});--para-gap:${(r.pgap||115)/100}em`;
}
views.lector = (id) => {
  const d = docById(id);
  if (!d){ setTimeout(()=>{ toast('Documento no encontrado','x'); go('biblioteca'); }, 20); return views.biblioteca(); }
  const paras = docParas(d.id);
  const secs = docSections(paras);
  setTimeout(()=>initReader(d.id), 30);
  return `<div class="reader ${S.reader.focus?'focus-mode':''}" id="reader">
    <div class="read-prog" id="readprog" style="width:${d.progress*100}%"></div>
    <div class="reader-top">
      <button class="tb-icon" onclick="go('documento/${d.id}')">${I.back}</button>
      <div class="reader-title">${escHtml(d.title)} <span>· ${escHtml(d.chapter||'')}</span></div>
      <div style="flex:1"></div>
      <button class="tb-icon" title="Contenidos" onclick="document.getElementById('toc-panel').classList.toggle('open')">${I.list}</button>
      <button class="tb-icon" title="Notas" onclick="document.getElementById('notes-panel').classList.toggle('open')">${I.note}</button>
      <button class="tb-icon" title="Buscar en el texto" onclick="openDocSearch('${d.id}')">${I.search}</button>
      <button class="tb-icon" title="Marcador" onclick="readerBookmark('${d.id}')">${I.bookmark}</button>
      <button class="tb-icon" title="Pantalla completa" onclick="toggleFS()">${I.expand}</button>
      <button class="tb-icon" title="Ajustes de lectura" onclick="openReadCtrl()">${I.sliders}</button>
      <button class="btn accent sm" onclick="go('rsvp/${d.id}')">${I.zap} RSVP</button>
    </div>
    <div class="reader-body" id="rbody">
      <div class="reader-col" id="rcol" style="${readerColStyle()}">
        <p class="ch-label">${escHtml(d.chapter||'')}</p>
        <h2>${escHtml(d.title)}</h2>
        <p style="color:var(--text3);font-family:var(--sans);font-size:12.5px;margin-bottom:2.2em">${escHtml(d.author)} · <span id="rhead-pct">${Math.round(d.progress*100)}</span> % completado</p>
        ${paras.map((p,i)=>`${secs.some(s=>s.start===i&&s.start>0)?`<p class="ch-label" id="sec-${secs.findIndex(s=>s.start===i)}" style="margin-top:2.5em">${secs.find(s=>s.start===i).label}</p>`:''}<p data-pi="${i}" ${i===0?'id="sec-0"':''}>${applyHighlights(escHtml(p), d.id)}</p>`).join('')}
        <p style="text-align:center;color:var(--text3);font-family:var(--sans);font-size:12px;margin-top:3em">· · ·</p>
      </div>
    </div>
    <div class="minimap"><i id="minimap-i" style="top:${d.progress*70}%;height:9%"></i></div>
    <div class="reader-foot"><span>${escHtml(d.chapter||'')}</span><span>·</span><span id="rfoot-pct">${Math.round(d.progress*100)} %</span><span>·</span><span>${d.timeLeft} restante</span></div>
    <div class="sel-pop" id="selpop">
      ${Object.entries(HL_COLORS).map(([k,c])=>`<button title="Destacar en ${k}" style="background:${c}" onclick="createHighlight('${d.id}','${k}',false)"></button>`).join('')}
      <button title="Crear nota" class="sp-note" onclick="createHighlight('${d.id}','amber',true)">${I.note}</button>
    </div>
    <aside class="side-panel left" id="toc-panel">
      <div class="sp-h">Contenidos <button class="modal-x" onclick="this.closest('.side-panel').classList.remove('open')">${I.x}</button></div>
      <div class="sp-b">${secs.map((s,i)=>`<button class="toc-item" onclick="document.getElementById('sec-${i}').scrollIntoView({behavior:'smooth'});this.closest('.side-panel').classList.remove('open')"><span>${s.label}</span><span>${Math.round(s.start/paras.length*100)} %</span></button>`).join('')}</div>
    </aside>
    <aside class="side-panel" id="notes-panel">
      <div class="sp-h">Notas y destacados <button class="modal-x" onclick="this.closest('.side-panel').classList.remove('open')">${I.x}</button></div>
      <div class="sp-b">${DEMO_NOTES.filter(n=>n.doc===d.id).map(n=>`<div class="card" style="padding:12px 14px;margin-bottom:10px;--hl:${HL_COLORS[n.color]}"><div class="note-q serif" style="font-size:13px">“${escHtml(n.text)}”</div>${n.note?`<div class="note-n" style="font-size:12px">${escHtml(n.note)}</div>`:''}</div>`).join('') || '<p style="font-size:12.5px;color:var(--text3);padding:10px">Selecciona texto para subrayar o crear una nota.</p>'}</div>
    </aside>
  </div>`;
};
let _readSaveT = null;
function initReader(docId){
  const body = document.getElementById('rbody'), reader = document.getElementById('reader');
  if (!body) return;
  const d = docById(docId);
  // Restaurar posición exacta de scroll
  const saved = store.get('readpos.'+docId, null);
  if (saved !== null){
    // Reintenta hasta que el layout esté listo (fuentes, pestaña en segundo plano…)
    let tries = 0;
    const applyPos = () => {
      if (!document.body.contains(body)) return;
      const max = body.scrollHeight - body.clientHeight;
      if (max > 50 || tries >= 12) body.scrollTop = saved * Math.max(0, max);
      else { tries++; setTimeout(applyPos, 120); }
    };
    setTimeout(applyPos, 40);
  }
  let last = 0;
  body.addEventListener('scroll', ()=>{
    const y = body.scrollTop;
    reader.classList.toggle('hide-ui', S.reader.autoTop!==false && y > last && y > 80);
    last = y;
    const p = Math.min(1, Math.max(0, y / Math.max(1, body.scrollHeight - body.clientHeight)));
    const prog = document.getElementById('readprog'); if (prog) prog.style.width = (p*100) + '%';
    const fp = document.getElementById('rfoot-pct'); if (fp) fp.textContent = Math.round(p*100) + ' %';
    const mm = document.getElementById('minimap-i'); if (mm) mm.style.top = (p*70) + '%';
    clearTimeout(_readSaveT);
    _readSaveT = setTimeout(()=>{
      try{ store.set('readpos.'+docId, p); }catch(e){}
      if (d){ d.progress = Math.max(d.progress, p); d.done = d.progress>=.995; saveDocState(); }
    }, 400);
    if (S.reader.focus) markFocusPara(body);
  });
  if (S.reader.focus) markFocusPara(body);
  // Popover de selección → destacado / nota
  body.addEventListener('mouseup', ()=>setTimeout(showSelPop, 10));
  body.addEventListener('touchend', ()=>setTimeout(showSelPop, 10));
}
function markFocusPara(body){
  const mid = body.getBoundingClientRect().top + body.clientHeight/2;
  let best = null, bestDist = Infinity;
  body.querySelectorAll('p[data-pi]').forEach(p=>{
    const r = p.getBoundingClientRect();
    const dist = Math.abs((r.top+r.bottom)/2 - mid);
    if (dist < bestDist){ bestDist = dist; best = p; }
    p.classList.remove('focus-on');
  });
  if (best) best.classList.add('focus-on');
}
function showSelPop(){
  const pop = document.getElementById('selpop'); if (!pop) return;
  const sel = window.getSelection();
  const text = sel?.toString().trim();
  if (!text || text.length < 3){ pop.classList.remove('show'); return; }
  const rect = sel.getRangeAt(0).getBoundingClientRect();
  pop.style.left = Math.max(10, rect.left + rect.width/2 - 90) + 'px';
  pop.style.top = Math.max(60, rect.top - 46) + 'px';
  pop.classList.add('show');
  window._selText = text;
}
function createHighlight(docId, color, withNote){
  const text = window._selText; if (!text) return;
  const d = docById(docId);
  const entry = { id:'local-'+Date.now(), doc:docId, color, text: text.slice(0,300), note:'', chapter: d?.chapter||'', date: fmtDate(new Date().toISOString()) };
  DEMO_NOTES.unshift(entry); saveNotes();
  if (DB.user) DB.addNote(docId, { color, quote: entry.text, note:'', chapter: entry.chapter }).catch(console.error);
  document.getElementById('selpop')?.classList.remove('show');
  window.getSelection()?.removeAllRanges();
  if (withNote) editNote(entry.id);
  else { toast('Destacado creado','star'); render(); }
}
function readerBookmark(docId){
  const d = docById(docId); if (!d) return;
  const body = document.getElementById('rbody');
  const p = body ? body.scrollTop / Math.max(1, body.scrollHeight - body.clientHeight) : 0;
  const bms = getBookmarks();
  bms.unshift({ id:'bm-'+Date.now(), doc:docId, chapter:d.chapter, token:null, scroll:p, progress:Math.round(p*100), wpm:S.rsvp.wpm, theme:THEMES[S.theme]?.name||S.theme, date:new Date().toISOString(), excerpt:'Lectura tradicional · '+Math.round(p*100)+' %' });
  setBookmarks(bms);
  toast('Marcador guardado','bookmark');
}
function openDocSearch(docId){
  window._searchDoc = docId;
  openModal(`<div class="modal-h"><h3>Buscar en el documento</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <input class="input" id="docsearch-in" placeholder="Texto a buscar…" oninput="runDocSearch(this.value)" onkeydown="if(event.key==='Escape')closeModal()">
    <div id="docsearch-res" style="margin-top:12px;max-height:300px;overflow:auto"></div>
  </div>`);
  setTimeout(()=>document.getElementById('docsearch-in')?.focus(), 40);
}
function runDocSearch(q){
  const res = document.getElementById('docsearch-res'); if (!res) return;
  if (!q || q.length < 2){ res.innerHTML = ''; return; }
  const paras = docParas(window._searchDoc);
  const ql = q.toLowerCase();
  const hits = [];
  paras.forEach((p,i)=>{ const ix = p.toLowerCase().indexOf(ql); if (ix>=0 && hits.length<30) hits.push({ i, ctx: p.slice(Math.max(0,ix-60), ix+q.length+60) }); });
  res.innerHTML = hits.length ? hits.map(h=>`<button class="toc-item" style="text-align:left" onclick="jumpToPara(${h.i},'${escHtml(q).replace(/'/g,"\\'")}')">…${escHtml(h.ctx)}…</button>`).join('')
    : `<p style="font-size:12.5px;color:var(--text3)">Sin coincidencias para «${escHtml(q)}».</p>`;
}
function jumpToPara(i, q){
  closeModal();
  const p = document.querySelector(`p[data-pi="${i}"]`); if (!p) return;
  p.scrollIntoView({ behavior:'smooth', block:'center' });
  document.querySelectorAll('mark.find').forEach(m=>{ m.replaceWith(...m.childNodes); });
  const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'i');
  p.innerHTML = p.innerHTML.replace(rx, m=>`<mark class="find">${m}</mark>`);
}
function openReadCtrl(){
  openModal(`
    <div class="modal-h"><h3>Ajustes de lectura</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
    <div class="modal-b">
      ${sRow('Tamaño de fuente','',S.reader.fs,14,26,'px',"S.reader.fs=+this.value;saveReader();document.getElementById('rcol')?.style.setProperty('--read-fs',this.value+'px')")}
      ${sRow('Interlineado','',Math.round(S.reader.lh*100),130,220,'%',"S.reader.lh=this.value/100;saveReader();document.getElementById('rcol')?.style.setProperty('--read-lh',this.value/100)")}
      ${sRow('Ancho de columna','',S.reader.width,480,860,'px',"S.reader.width=+this.value;saveReader();document.getElementById('rcol')?.style.setProperty('--read-w',this.value+'px')")}
      ${sRow('Brillo','',S.reader.bright||100,40,100,'%',"S.reader.bright=+this.value;saveReader();const b=document.getElementById('rbody');if(b)b.style.filter='brightness('+(this.value/100)+')'")}
      ${sRow('Espaciado entre letras','',S.reader.ls||0,-2,8,'',"S.reader.ls=+this.value;saveReader();const c=document.getElementById('rcol');if(c)c.style.letterSpacing=(this.value/10)+'px'")}
      <div class="setrow"><div class="sr-t">Alineación</div><div class="seg"><button class="${S.reader.align!=='justify'?'on':''}" onclick="segSel(this);S.reader.align='left';saveReader();const c=document.getElementById('rcol');if(c)c.style.textAlign='left'">Izquierda</button><button class="${S.reader.align==='justify'?'on':''}" onclick="segSel(this);S.reader.align='justify';saveReader();const c=document.getElementById('rcol');if(c)c.style.textAlign='justify'">Justificada</button></div></div>
      <div class="setrow"><div class="sr-t">Fuente</div><div class="seg"><button class="${S.reader.font!=='sans'?'on':''}" onclick="segSel(this);S.reader.font='serif';saveReader();const c=document.getElementById('rcol');if(c)c.style.fontFamily='var(--serif)'">Literata</button><button class="${S.reader.font==='sans'?'on':''}" onclick="segSel(this);S.reader.font='sans';saveReader();const c=document.getElementById('rcol');if(c)c.style.fontFamily='var(--sans)'">Inter</button></div></div>
      ${tRow('Modo enfoque','Atenúa los párrafos no activos',!!S.reader.focus,"S.reader.focus=this.classList.contains('on');saveReader();const r=document.getElementById('reader');if(r){r.classList.toggle('focus-mode',S.reader.focus);if(S.reader.focus)markFocusPara(document.getElementById('rbody'));else document.querySelectorAll('p.focus-on').forEach(p=>p.classList.remove('focus-on'))}")}
    </div>`);
}

/* ---------- Motor RSVP ---------- */
const RSVP = {
  words:[], i:0, playing:false, timer:null, doc:null, idleTimer:null,
  startedAt:0, wordsRead:0, maxWpm:0, pauses:0, rewinds:0,
  startPos:0, lastQuiz:0, quizResults:[], sessionSaved:false,
};
// Guarda la posición exacta y el progreso del documento activo.
function saveRsvpPos(){
  const d = RSVP.doc; if (!d || !RSVP.words.length) return;
  d.pos = RSVP.i;
  d.progress = Math.max(d.progress||0, Math.min(1, RSVP.i / RSVP.words.length));
  saveDocState();
}
function orpIndex(w){ const c=w.replace(/[^\p{L}\p{N}]/gu,'').length; return c<=1?0:c<=5?1:c<=9?2:c<=13?3:4; }
function tokenize(text){ return text.split(/\s+/).filter(Boolean); }
function wordDelay(w){
  const base = 60000 / S.rsvp.wpm * S.rsvp.chunk;
  if (!S.rsvp.adaptive) return base;
  let m = 1; const clean = w.replace(/[^\p{L}\p{N}]/gu,'');
  if (clean.length > 9 && S.rsvp.longWords) m += .45;
  else if (clean.length > 6) m += .18;
  if (/\d/.test(w) && S.rsvp.numbers) m += .5;
  if (/[,;:]$/.test(w) && S.rsvp.pauseComma) m += .7;
  if (/[.!?…]$|[.!?…]["»”]$/.test(w) && S.rsvp.pausePoint) m += 1.4;
  if (clean.length < 4) m -= .15;
  return base * Math.max(.6, m);
}
views.rsvp = (id) => {
  const d = docById(id) || DEMO_DOCS.find(x=>!x.archived);
  if (!d){ setTimeout(()=>{ toast('Documento no encontrado','x'); go('biblioteca'); }, 20); return views.biblioteca(); }
  RSVP.doc = d; RSVP.words = tokenize(docText(d.id) || DEMO_TEXTS.habitos);
  // Restaurar posición exacta guardada; si no hay, derivarla del progreso del documento.
  const savedPos = Number.isInteger(d.pos) ? d.pos : Math.floor(RSVP.words.length * (d.progress||0));
  RSVP.i = Math.max(0, Math.min(RSVP.words.length-1, savedPos)); RSVP.playing=false;
  RSVP.startedAt = Date.now(); RSVP.wordsRead=0; RSVP.maxWpm=S.rsvp.wpm; RSVP.pauses=0; RSVP.rewinds=0;
  RSVP.startPos = RSVP.i; RSVP.lastQuiz = Date.now(); RSVP.quizResults = []; RSVP.sessionSaved = false;
  setTimeout(()=>{ showWord(false); bindRsvp(); }, 40);
  return `<div class="rsvp" id="rsvpwrap">
    <div class="rsvp-top">
      <button class="tb-icon" onclick="rsvpExit()">${I.back}</button>
      <div class="reader-title">${d.title} <span>· ${d.chapter}</span></div>
      <div style="flex:1"></div>
      <button class="tb-icon" title="Lector tradicional" onclick="go('lector/${d.id}')">${I.book}</button>
      <button class="tb-icon" title="Personalizar" onclick="document.getElementById('rsvp-set').classList.toggle('open')">${I.sliders}</button>
      <button class="tb-icon" title="Pantalla completa" onclick="toggleFS()">${I.expand}</button>
    </div>
    <div class="rsvp-hud"><span id="hud-wpm">${S.rsvp.wpm} ppm</span><span id="hud-left">18 min restantes</span><span id="hud-prog">${Math.round(d.progress*100)} %</span></div>
    <div class="rsvp-stage" id="stage">
      <div class="adapt-ind" id="adapt"><i></i>velocidad adaptada</div>
      <div class="rsvp-ctx prev" id="ctx-prev"></div>
      <div class="orp-guides" id="guides"><span class="gv"></span><span class="gv b"></span></div>
      <div class="rsvp-word" id="word"></div>
      <div class="rsvp-ctx next" id="ctx-next"></div>
      <div id="pausecard"></div>
    </div>
    <div class="rsvp-bar" id="rbar">
      <button class="rb-btn" title="Frase anterior (⇧←)" onclick="rsvpSentence(-1)">${I.prevS}</button>
      <button class="rb-btn" title="Palabra anterior (←)" onclick="rsvpSkip(-1)">${I.prev10}</button>
      <button class="rb-btn play" id="playbtn" onclick="rsvpToggle()">${I.play}</button>
      <button class="rb-btn" title="Palabra siguiente (→)" onclick="rsvpSkip(1)">${I.next10}</button>
      <button class="rb-btn" title="Frase siguiente (⇧→)" onclick="rsvpSentence(1)">${I.nextS}</button>
      <span class="rb-sep"></span>
      <div class="rb-speed">
        <button onclick="rsvpSpeed(-25)">−</button><b id="wpmval">${S.rsvp.wpm} ppm</b><button onclick="rsvpSpeed(25)">+</button>
      </div>
      <select class="input" style="width:66px;padding:5px 8px;font-size:11.5px;font-family:var(--mono)" onchange="S.rsvp.chunk=+this.value;saveRsvp();showWord(false)" title="Palabras por bloque">
        ${[1,2,3,4,5].map(n=>`<option value="${n}" ${S.rsvp.chunk===n?'selected':''}>${n} pal</option>`).join('')}
      </select>
      <span class="rb-sep"></span>
      <button class="rb-btn" title="Marcador (M)" onclick="quickBookmark()">${I.bookmark}</button>
      <button class="rb-btn" title="Nota rápida (N)" onclick="quickNote()">${I.note}</button>
      <button class="rb-btn" title="Temporizador" onclick="openPomodoro()">${I.timer}</button>
      <button class="rb-btn" title="Terminar sesión" onclick="endSession()">${I.check}</button>
    </div>
    <div class="rsvp-foot"><i id="rprog" style="width:${d.progress*100}%"></i></div>
    ${rsvpSettingsPanel()}
  </div>`;
};
function rsvpSettingsPanel(){
  return `<aside class="rsvp-settings" id="rsvp-set">
    <div class="sp-h">Personalizar RSVP <button class="modal-x" onclick="document.getElementById('rsvp-set').classList.remove('open')">${I.x}</button></div>
    <div class="sp-b" style="padding:6px 18px 24px">${rsvpSettingsBody(true)}</div>
  </aside>`;
}
function rsvpSettingsBody(live=false){
  const upd = live ? "showWord(false);" : "";
  return `
    ${sRow('Velocidad','50 – 2.000 palabras por minuto',S.rsvp.wpm,50,2000,'ppm',`S.rsvp.wpm=+this.value;saveRsvp();syncWpm();`)}
    <div class="setrow"><div class="sr-t">Palabras por bloque</div><div class="seg">${[1,2,3,4,5].map(n=>`<button class="${S.rsvp.chunk===n?'on':''}" onclick="segSel(this);S.rsvp.chunk=${n};saveRsvp();${upd}">${n}</button>`).join('')}</div></div>
    ${sRow('Tamaño','',S.rsvp.size,28,96,'px',`S.rsvp.size=+this.value;saveRsvp();document.documentElement.style.setProperty('--rsvp-size',this.value+'px')`)}
    <div class="setrow"><div class="sr-t">Fuente</div><div class="seg">${[['serif','Serif'],['sans','Sans'],['mono','Mono']].map(f=>`<button class="${S.rsvp.font===f[0]?'on':''}" onclick="segSel(this);S.rsvp.font='${f[0]}';saveRsvp();document.documentElement.style.setProperty('--rsvp-font','var(--${f[0]==='serif'?'serif':f[0]==='sans'?'sans':'mono'})')">${f[1]}</button>`).join('')}</div></div>
    ${sRow('Peso tipográfico','',S.rsvp.weight,300,700,'',`S.rsvp.weight=+this.value;saveRsvp();document.documentElement.style.setProperty('--rsvp-weight',this.value)`)}
    ${sRow('Opacidad del contexto','',Math.round(S.rsvp.ctxOp*100),0,100,'%',`S.rsvp.ctxOp=this.value/100;saveRsvp();document.documentElement.style.setProperty('--ctx-op',this.value/100)`)}
    <div class="setrow"><div class="sr-t">Transición</div><div class="seg">${[['none','Instant.'],['fade','Fade'],['blur','Blur'],['scale','Scale']].map(f=>`<button class="${S.rsvp.transition===f[0]?'on':''}" onclick="segSel(this);S.rsvp.transition='${f[0]}';saveRsvp()">${f[1]}</button>`).join('')}</div></div>
    ${sRow('Duración de transición','',S.rsvp.tdur,0,240,'ms',`S.rsvp.tdur=+this.value;saveRsvp();document.documentElement.style.setProperty('--rsvp-tdur',this.value+'ms')`)}
    <div class="setrow"><div class="sr-t">Ancla visual</div><div class="seg">${[['lines','Líneas'],['cross','Cruz'],['none','Sin ancla']].map(f=>`<button class="${S.rsvp.anchor===f[0]?'on':''}" onclick="segSel(this);S.rsvp.anchor='${f[0]}';saveRsvp();applyAnchor()">${f[1]}</button>`).join('')}</div></div>
    <div class="nav-label" style="padding-left:0">Pausas inteligentes</div>
    ${tRow('Pausa tras comas','',S.rsvp.pauseComma,"S.rsvp.pauseComma=this.classList.contains('on');saveRsvp()")}
    ${tRow('Pausa tras puntos','',S.rsvp.pausePoint,"S.rsvp.pausePoint=this.classList.contains('on');saveRsvp()")}
    ${tRow('Pausa en palabras largas','',S.rsvp.longWords,"S.rsvp.longWords=this.classList.contains('on');saveRsvp()")}
    ${tRow('Pausa en números','',S.rsvp.numbers,"S.rsvp.numbers=this.classList.contains('on');saveRsvp()")}
    ${tRow('Velocidad adaptativa','Ajusta el ritmo a la complejidad',S.rsvp.adaptive,"S.rsvp.adaptive=this.classList.contains('on');saveRsvp()")}
    ${tRow('Frase completa al pausar','',S.rsvp.sentenceOnPause,"S.rsvp.sentenceOnPause=this.classList.contains('on');saveRsvp()")}
    ${tRow('Contexto anterior y posterior','',S.rsvp.showCtx,"S.rsvp.showCtx=this.classList.contains('on');saveRsvp();showWord(false)")}
    ${tRow('Ocultar controles al leer','',S.rsvp.autohide,"S.rsvp.autohide=this.classList.contains('on');saveRsvp()")}
    <div class="nav-label" style="padding-left:0">Herramientas</div>
    <div class="setrow"><div class="sr-t">Comparador de velocidad</div><button class="btn sm" onclick="openComparator()">Abrir</button></div>
    <div class="setrow"><div><div class="sr-t">Modo relectura</div><div class="sr-d">Repite la frase actual al 70 % de velocidad</div></div><button class="btn sm" onclick="rereadSentence()">Releer frase</button></div>`;
}
function applyAnchor(){ const g=document.getElementById('guides'); if(g) g.style.display = S.rsvp.anchor==='none'?'none':'block'; }
function syncWpm(){
  const w=document.getElementById('wpmval'); if(w) w.textContent = S.rsvp.wpm+' ppm';
  const h=document.getElementById('hud-wpm'); if(h) h.textContent = S.rsvp.wpm+' ppm';
  RSVP.maxWpm = Math.max(RSVP.maxWpm, S.rsvp.wpm);
}
function showWord(tick=true){
  const el = document.getElementById('word'); if (!el) return;
  const chunk = RSVP.words.slice(RSVP.i, RSVP.i + S.rsvp.chunk).join(' ');
  if (!chunk){ endSession(); return; }
  if (tick && RSVP.playing && S.audio.voice && 'speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(chunk.replace(/[^\p{L}\p{N}\s]/gu,''));
    u.lang = 'es-ES'; u.rate = Math.min(3, (S.audio.rate||100)/100 * Math.max(1, S.rsvp.wpm/200));
    const v = speechSynthesis.getVoices().find(v=>v.name===S.audio.voiceName);
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
  const oi = orpIndex(chunk.split(' ')[0]);
  // localizar índice real de la letra ORP (saltando puntuación inicial)
  let li=-1, seen=-1, pos=0;
  for (let c of chunk){ if (/[\p{L}\p{N}]/u.test(c)) seen++; if (seen===oi){ li=pos; break; } pos++; }
  if (li<0) li=0;
  el.innerHTML = `<span class="pre" style="flex:1;text-align:right">${esc(chunk.slice(0,li))}</span><span class="orp">${esc(chunk[li]||'')}</span><span class="post" style="flex:1;text-align:left">${esc(chunk.slice(li+1))}</span>`;
  el.style.width = '100%';
  if (tick && S.rsvp.transition!=='none'){
    el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick');
    el.style.filter = S.rsvp.transition==='blur' ? 'blur(0)' : '';
    if (S.rsvp.transition==='blur'){ el.animate([{filter:'blur(3px)',opacity:.4},{filter:'blur(0)',opacity:1}],{duration:S.rsvp.tdur,easing:'ease-out'}); }
    if (S.rsvp.transition==='scale'){ el.animate([{transform:'scale(.96)',opacity:.4},{transform:'scale(1)',opacity:1}],{duration:S.rsvp.tdur,easing:'cubic-bezier(.34,1.4,.64,1)'}); }
  }
  // contexto
  const prev=document.getElementById('ctx-prev'), next=document.getElementById('ctx-next');
  if (prev && next){
    if (S.rsvp.showCtx && !RSVP.playing){
      prev.textContent = '… ' + RSVP.words.slice(Math.max(0,RSVP.i-12), RSVP.i).join(' ');
      next.textContent = S.rsvp.sentenceOnPause ? '' : RSVP.words.slice(RSVP.i+S.rsvp.chunk, RSVP.i+S.rsvp.chunk+12).join(' ') + ' …';
    } else { prev.textContent=''; next.textContent=''; }
  }
  // progreso
  const p = RSVP.i / RSVP.words.length;
  const rp=document.getElementById('rprog'); if(rp) rp.style.width = (p*100)+'%';
  const hp=document.getElementById('hud-prog'); if(hp) hp.textContent = Math.round(p*100)+' %';
  const hl=document.getElementById('hud-left'); if(hl) hl.textContent = Math.max(1,Math.round((RSVP.words.length-RSVP.i)/S.rsvp.wpm))+' min restantes';
  // indicador adaptativo
  const w0 = chunk.split(' ')[0];
  const ad = document.getElementById('adapt');
  if (ad && RSVP.playing && S.rsvp.adaptive) ad.classList.toggle('show', /\d/.test(w0) || w0.replace(/[^\p{L}]/gu,'').length>9);
  updatePauseCard();
}
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function sentenceBounds(i){
  let s=i; while (s>0 && !/[.!?…]$/.test(RSVP.words[s-1])) s--;
  let e=i; while (e<RSVP.words.length-1 && !/[.!?…]$/.test(RSVP.words[e])) e++;
  return [s,e];
}
function updatePauseCard(){
  const pc = document.getElementById('pausecard'); if (!pc) return;
  if (RSVP.playing || !S.rsvp.sentenceOnPause){ pc.innerHTML=''; return; }
  const [s,e] = sentenceBounds(RSVP.i);
  const cur = RSVP.words.slice(RSVP.i, RSVP.i+S.rsvp.chunk).join(' ');
  const sent = RSVP.words.slice(s,e+1).map((w,ix)=> ix+s>=RSVP.i && ix+s<RSVP.i+S.rsvp.chunk ? `<mark>${esc(w)}</mark>` : esc(w)).join(' ');
  pc.innerHTML = `<div class="pause-card"><div class="pc-label">En pausa — frase actual</div><div class="pc-sent">${sent}</div>
    <div style="margin-top:14px;display:flex;gap:8px;justify-content:center">
    <button class="btn sm" onclick="openDict('${cur.replace(/[^\p{L}\p{N}]/gu,'')}')">${I.search} Diccionario</button>
    <button class="btn sm" onclick="rsvpSentence(-1)">Releer frase</button></div></div>`;
}
function rsvpToggle(){
  RSVP.playing = !RSVP.playing;
  const wrap = document.getElementById('rsvpwrap'), btn = document.getElementById('playbtn');
  wrap.classList.toggle('playing', RSVP.playing);
  btn.innerHTML = RSVP.playing ? I.pause : I.play;
  if (RSVP.playing){ scheduleNext(0); armIdle(); }
  else { clearTimeout(RSVP.timer); wrap.classList.remove('idle'); RSVP.pauses++; saveRsvpPos(); showWord(false); }
}
function scheduleNext(extra){
  clearTimeout(RSVP.timer);
  const w = RSVP.words[RSVP.i] || '';
  RSVP.timer = setTimeout(()=>{
    if (!RSVP.playing) return;
    RSVP.i += S.rsvp.chunk; RSVP.wordsRead += S.rsvp.chunk;
    if (RSVP.i >= RSVP.words.length){ RSVP.i = RSVP.words.length; rsvpToggle(); endSession(); return; }
    if (RSVP.wordsRead % 200 < S.rsvp.chunk) saveRsvpPos(); // autoguardado periódico
    playTick();
    if (maybeQuiz()) return;
    showWord(true); scheduleNext(0);
  }, wordDelay(w) + extra);
}
/* Tic de ritmo opcional (WebAudio) */
let _audioCtx = null;
function playTick(){
  if (!S.audio.tick) return;
  try{
    _audioCtx = _audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const o = _audioCtx.createOscillator(), g = _audioCtx.createGain();
    o.frequency.value = 880; g.gain.setValueAtTime(.03, _audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001, _audioCtx.currentTime + .04);
    o.connect(g); g.connect(_audioCtx.destination); o.start(); o.stop(_audioCtx.currentTime + .05);
  }catch(e){ /* sin soporte de audio */ }
}
/* Pregunta de comprensión durante la reproducción */
function maybeQuiz(){
  if (S.comp.mode === 'off' || !RSVP.doc) return false;
  if (Date.now() - RSVP.lastQuiz < S.comp.freq * 60000) return false;
  const bank = (typeof QUIZ !== 'undefined' && QUIZ[RSVP.doc.id]) || null;
  if (!bank || !bank.length) return false; // documentos importados sin preguntas configuradas
  RSVP.lastQuiz = Date.now();
  const q = bank[Math.floor(Math.random()*bank.length)];
  RSVP.playing = false; clearTimeout(RSVP.timer);
  const wrap = document.getElementById('rsvpwrap'), btn = document.getElementById('playbtn');
  if (wrap) wrap.classList.remove('playing','idle');
  if (btn) btn.innerHTML = I.play;
  window._quizQ = q;
  openModal(`<div class="modal-h"><h3>Comprobación de comprensión</h3><button class="modal-x" onclick="closeModal();rsvpToggle()">${I.x}</button></div>
    <div class="modal-b"><p style="font-size:14.5px;font-weight:550;margin-bottom:14px">${q.q}</p>
    ${q.opts.map((o,i)=>`<button class="btn" style="width:100%;justify-content:flex-start;margin-bottom:8px" onclick="answerQuiz(${i})">${o}</button>`).join('')}
    </div>`);
  return true;
}
function answerQuiz(i){
  const q = window._quizQ; const ok = i === q.a;
  RSVP.quizResults.push(ok);
  const hist = store.get('compHistory', []);
  hist.unshift({ doc: RSVP.doc.id, ok, ts: Date.now() });
  try{ store.set('compHistory', hist.slice(0,200)); }catch(e){ storageError(e); }
  closeModal();
  toast(ok ? 'Correcto — sigue así' : `Incorrecto. Respuesta: ${q.opts[q.a]}`, ok ? 'check' : 'x');
  rsvpToggle();
}
function armIdle(){
  const wrap = document.getElementById('rsvpwrap'); if (!wrap) return;
  if (!S.rsvp.autohide) return;
  clearTimeout(RSVP.idleTimer);
  wrap.classList.remove('idle');
  RSVP.idleTimer = setTimeout(()=>{ if (RSVP.playing) wrap.classList.add('idle'); }, 1600);
}
function rsvpSkip(n){ if(n<0) RSVP.rewinds++; RSVP.i = Math.max(0, Math.min(RSVP.words.length-1, RSVP.i+n)); if (!RSVP.playing) saveRsvpPos(); showWord(false); if (RSVP.playing) scheduleNext(160); }
function rsvpSentence(dir){
  RSVP.rewinds += dir<0?1:0;
  const [s] = sentenceBounds(RSVP.i);
  if (dir<0) RSVP.i = RSVP.i>s ? s : sentenceBounds(Math.max(0,s-2))[0]; // rebobinado inteligente: inicio de frase o anterior
  else { const [,e]=sentenceBounds(RSVP.i); RSVP.i = Math.min(RSVP.words.length-1, e+1); }
  showWord(false); if (RSVP.playing) scheduleNext(200);
}
function rsvpSpeed(d){
  S.rsvp.wpm = Math.max(50, Math.min(2000, S.rsvp.wpm + d)); saveRsvp(); syncWpm();
  const s=document.querySelector('#rsvp-set input[type=range]'); if(s) s.value=S.rsvp.wpm;
}
function bindRsvp(){
  const wrap = document.getElementById('rsvpwrap'); if(!wrap) return;
  applyAnchor();
  document.documentElement.style.setProperty('--rsvp-size', S.rsvp.size+'px');
  document.documentElement.style.setProperty('--rsvp-weight', S.rsvp.weight);
  document.documentElement.style.setProperty('--ctx-op', S.rsvp.ctxOp);
  document.documentElement.style.setProperty('--rsvp-tdur', S.rsvp.tdur+'ms');
  wrap.addEventListener('mousemove', armIdle);
  wrap.addEventListener('wheel', e=>{
    if (e.target.closest('.rsvp-settings') || e.target.closest('.modal') || e.target.closest('.side-panel')) return; // scroll normal en paneles
    rsvpSpeed(e.deltaY<0?10:-10); e.preventDefault();
  }, {passive:false});
  const stage = document.getElementById('stage');
  let tx=null;
  stage.addEventListener('touchstart', e=>tx=e.touches[0].clientX, {passive:true});
  stage.addEventListener('touchend', e=>{ if(tx===null)return; const dx=e.changedTouches[0].clientX-tx; if(Math.abs(dx)>60) rsvpSentence(dx>0?-1:1); else rsvpToggle(); tx=null; }, {passive:true});
}
function rsvpExit(){ clearTimeout(RSVP.timer); RSVP.playing=false; saveRsvpPos(); speechSynthesis?.cancel?.(); go('documento/'+RSVP.doc.id); }
function toggleFS(){ if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(()=>{}); }
function saveVocabWord(word){
  const definition = document.getElementById('dict-def')?.value.trim() || '';
  const translation = document.getElementById('dict-tr')?.value.trim() || '';
  const docId = RSVP.doc?.id || null;
  const [s,e] = RSVP.words.length ? sentenceBounds(Math.min(RSVP.i, RSVP.words.length-1)) : [0,-1];
  const context = e>=s ? RSVP.words.slice(s,e+1).join(' ') : '';
  DEMO_VOCAB.unshift({ id:'v-'+Date.now(), word, def: definition, tr: translation, context, doc: docId ? docById(docId)?.title : '—', docId, date: fmtDate(new Date().toISOString()), level: 1 });
  saveVocab();
  if (DB.user) DB.addVocabWord({ word, definition, docId, level:1 }).catch(console.error);
  closeModal(); toast('Guardada en tu vocabulario','layers');
}
function speakWord(word){
  if (!('speechSynthesis' in window)){ toast('Tu navegador no soporta síntesis de voz','x'); return; }
  const u = new SpeechSynthesisUtterance(word); u.lang = 'es-ES'; u.rate = (S.audio.rate||100)/100;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
function quickNote(){
  const doc = RSVP.doc; if (!doc) { toast('Nota rápida creada','note'); return; }
  const chunk = RSVP.words.slice(RSVP.i, RSVP.i + S.rsvp.chunk).join(' ');
  const [s,e] = sentenceBounds(RSVP.i);
  const quote = RSVP.words.slice(s,e+1).join(' ');
  const colors = ['amber','green','blue','rose']; const color = colors[Math.floor(Math.random()*colors.length)];
  const entry = { id: 'local-'+Date.now(), doc: doc.id, color, text: quote || chunk, note: '', chapter: doc.chapter, date: 'Ahora mismo' };
  DEMO_NOTES.unshift(entry);
  saveNotes();
  if (DB.user) DB.addNote(doc.id, { color, quote: entry.text, note: '', chapter: doc.chapter }).catch(console.error);
  toast('Nota rápida creada','note');
}
function quickBookmark(){
  if (!RSVP.doc){ toast('Abre un documento para crear marcadores','x'); return; }
  const [s] = sentenceBounds(RSVP.i);
  const bms = getBookmarks();
  bms.unshift({
    id: 'bm-'+Date.now(), doc: RSVP.doc.id, chapter: RSVP.doc.chapter, token: RSVP.i, sentence: s,
    progress: Math.round(RSVP.i / Math.max(1,RSVP.words.length) * 100), wpm: S.rsvp.wpm,
    theme: THEMES[S.theme]?.name || S.theme, date: new Date().toISOString(),
    excerpt: RSVP.words.slice(RSVP.i, RSVP.i+8).join(' '),
  });
  setBookmarks(bms);
  toast(`Marcador guardado en «${RSVP.doc.title}» · ${Math.round(RSVP.i/Math.max(1,RSVP.words.length)*100)} %`, 'bookmark');
}
function openBookmark(id){
  const bm = getBookmarks().find(b=>b.id===id); if(!bm) return;
  const d = docById(bm.doc); if(!d){ toast('El documento del marcador ya no existe','x'); return; }
  d.pos = bm.token; saveDocState(); go('rsvp/'+d.id);
}
function deleteBookmark(id){ setBookmarks(getBookmarks().filter(b=>b.id!==id)); toast('Marcador eliminado','x'); render(); }
function openDict(word){
  const safe = word.replace(/'/g,"\\'");
  const [s,e] = RSVP.words.length ? sentenceBounds(Math.min(RSVP.i, RSVP.words.length-1)) : [0,-1];
  const context = e>=s ? RSVP.words.slice(s,e+1).join(' ') : '';
  openModal(`<div class="modal-h"><h3 class="serif" style="font-family:var(--serif);font-size:20px">${escHtml(word)}</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    ${context?`<p style="font-size:12.5px;color:var(--text2);line-height:1.55;margin-bottom:12px;border-left:2.5px solid var(--accent);padding-left:10px">“${escHtml(context)}”</p>`:''}
    <p style="font-size:11.5px;color:var(--text3);margin-bottom:12px">Focal no tiene diccionario en línea: escribe tu propia definición o traducción para reforzar la memoria.</p>
    <div class="field"><label>Definición</label><textarea class="input" id="dict-def" style="height:64px;resize:none" placeholder="Escribe una definición con tus palabras…"></textarea></div>
    <div class="field"><label>Traducción (opcional)</label><input class="input" id="dict-tr" placeholder="Traducción a otro idioma"></div>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn primary sm" onclick="saveVocabWord('${safe}')">Guardar en vocabulario</button>
      <button class="btn sm" onclick="speakWord('${safe}')">Escuchar</button>
      <button class="btn ghost sm" onclick="closeModal()">Cerrar</button>
    </div>
  </div>`);
}
/* Pomodoro real: basado en marcas de tiempo, coherente al cambiar de pestaña. */
const POMO = { active:false, phase:'work', endAt:0, pausedLeft:null, workMin:25, breakMin:5, sound:true, iv:null };
function openPomodoro(){
  if (POMO.active){ pomoPanel(); return; }
  window._pomoSel = 25;
  openModal(`<div class="modal-h"><h3>Sesión temporizada</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <p style="font-size:13px;color:var(--text2);margin-bottom:16px">Lectura por intervalos con descansos. El temporizador usa la hora real: sigue siendo exacto aunque cambies de pestaña.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px" id="pomo-durs">${[10,15,20,25,30,45,60].map(m=>`<button class="btn sm ${m===25?'primary':''}" onclick="[...this.parentElement.children].forEach(b=>b.classList.remove('primary'));this.classList.add('primary');_pomoSel=${m}">${m} min</button>`).join('')}</div>
    ${sRow('Descanso','',POMO.breakMin,2,15,'min','POMO.breakMin=+this.value')}
    ${tRow('Sonido al terminar','',POMO.sound,"POMO.sound=this.classList.contains('on')")}
    <button class="btn accent" style="width:100%;margin-top:16px;justify-content:center" onclick="startPomodoro(_pomoSel)">${I.play} Empezar sesión</button>
  </div>`);
}
function startPomodoro(mins){
  POMO.active = true; POMO.phase = 'work'; POMO.workMin = mins;
  POMO.endAt = Date.now() + mins*60000; POMO.pausedLeft = null;
  closeModal(); ensurePomoPill(); pomoTickLoop();
  toast(`Pomodoro de ${mins} min iniciado`,'timer');
}
function ensurePomoPill(){
  if (document.getElementById('pomo-pill')) return;
  const el = document.createElement('div');
  el.id = 'pomo-pill'; el.className = 'pomo-pill';
  el.innerHTML = `<span id="pomo-phase"></span><b class="mono" id="pomo-time"></b>
    <button class="tb-icon" id="pomo-pause" title="Pausar" onclick="pomoPauseResume()">${I.pause}</button>
    <button class="tb-icon" title="Cancelar" onclick="stopPomodoro()">${I.x}</button>`;
  document.body.appendChild(el);
}
function pomoTickLoop(){
  clearInterval(POMO.iv);
  POMO.iv = setInterval(pomoTick, 500); pomoTick();
}
function pomoTick(){
  if (!POMO.active) return;
  const left = POMO.pausedLeft !== null ? POMO.pausedLeft : POMO.endAt - Date.now();
  const t = document.getElementById('pomo-time'), p = document.getElementById('pomo-phase');
  if (t) t.textContent = Math.max(0,Math.floor(left/60000)) + ':' + String(Math.max(0,Math.floor(left/1000)%60)).padStart(2,'0');
  if (p) p.textContent = POMO.phase==='work' ? 'Lectura' : 'Descanso';
  if (POMO.pausedLeft === null && left <= 0){
    if (POMO.sound) pomoBeep();
    if (POMO.phase === 'work'){
      POMO.phase = 'break'; POMO.endAt = Date.now() + POMO.breakMin*60000;
      toast(`Tiempo de lectura completado — descanso de ${POMO.breakMin} min`,'timer');
      if (RSVP.playing) rsvpToggle();
    } else {
      POMO.phase = 'work'; POMO.endAt = Date.now() + POMO.workMin*60000;
      toast('Descanso terminado — nueva ronda de lectura','timer');
    }
  }
}
function pomoBeep(){
  try{
    _audioCtx = _audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    [0,.18,.36].forEach(dt=>{
      const o=_audioCtx.createOscillator(), g=_audioCtx.createGain();
      o.frequency.value = 660; g.gain.setValueAtTime(.08,_audioCtx.currentTime+dt);
      g.gain.exponentialRampToValueAtTime(.0001,_audioCtx.currentTime+dt+.15);
      o.connect(g); g.connect(_audioCtx.destination); o.start(_audioCtx.currentTime+dt); o.stop(_audioCtx.currentTime+dt+.16);
    });
  }catch(e){}
}
function pomoPauseResume(){
  if (POMO.pausedLeft !== null){ POMO.endAt = Date.now() + POMO.pausedLeft; POMO.pausedLeft = null; }
  else POMO.pausedLeft = Math.max(0, POMO.endAt - Date.now());
  const b = document.getElementById('pomo-pause'); if (b) b.innerHTML = POMO.pausedLeft!==null ? I.play : I.pause;
}
function stopPomodoro(){
  POMO.active = false; clearInterval(POMO.iv);
  document.getElementById('pomo-pill')?.remove();
  toast('Temporizador cancelado','timer');
}
function pomoPanel(){
  openModal(`<div class="modal-h"><h3>Temporizador en curso</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><p style="font-size:13px;color:var(--text2)">Fase actual: <b>${POMO.phase==='work'?'lectura':'descanso'}</b>. Usa la píldora flotante para pausar o cancelar.</p>
  <div style="display:flex;gap:10px;margin-top:16px"><button class="btn" style="flex:1;justify-content:center" onclick="closeModal();stopPomodoro()">Cancelar sesión</button><button class="btn primary" style="flex:1;justify-content:center" onclick="closeModal()">Continuar</button></div></div>`);
}
/* Modo relectura: repite la frase actual al 70 % de velocidad y restaura la velocidad al terminar. */
function rereadSentence(){
  if (!RSVP.words.length || !document.getElementById('rsvpwrap')){ toast('Abre el modo RSVP para usar la relectura','x'); return; }
  const [s, e] = sentenceBounds(Math.min(RSVP.i, RSVP.words.length-1));
  const prevWpm = S.rsvp.wpm;
  RSVP.i = s;
  S.rsvp.wpm = Math.max(50, Math.round(prevWpm * .7));
  syncWpm();
  document.getElementById('rsvp-set')?.classList.remove('open');
  if (!RSVP.playing) rsvpToggle();
  const restore = setInterval(()=>{
    if (RSVP.i > e || !RSVP.playing){
      clearInterval(restore);
      S.rsvp.wpm = prevWpm; saveRsvp(); syncWpm();
    }
  }, 150);
  toast('Releyendo la frase al 70 % de velocidad','refresh');
}
function openComparator(){
  openModal(`<div class="modal-h"><h3>Comparador de velocidad</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b"><p style="font-size:13px;color:var(--text2);margin-bottom:16px">Reproduce el mismo fragmento a distintas velocidades para sentir la diferencia.</p>
  ${[250,400,600,800].map(v=>`<div class="setrow"><div><div class="sr-t mono" style="font-family:var(--mono)">${v} ppm</div><div class="sr-d">${v<=250?'Lectura tradicional en voz interior':v<=400?'Ritmo cómodo sin subvocalización':v<=600?'Lectura rápida entrenada':'Velocidad de exploración'}</div></div>
  <button class="btn sm" onclick="S.rsvp.wpm=${v};saveRsvp();syncWpm();closeModal();if(!RSVP.playing)rsvpToggle();toast('Reproduciendo a ${v} ppm','zap')">${I.play} Probar</button></div>`).join('')}
  </div>`);
}
function endSession(){
  clearTimeout(RSVP.timer);
  if (RSVP.sessionSaved){ closeModal(); go('documento/'+RSVP.doc.id); return; } // evita registrar la sesión dos veces
  RSVP.sessionSaved = true;
  const mins = Math.max(1, Math.round((Date.now()-RSVP.startedAt)/60000));
  const words = Math.max(0, RSVP.wordsRead);
  // Comprensión real: media de las preguntas respondidas en esta sesión (null si no hubo).
  const comp = RSVP.quizResults.length ? Math.round(RSVP.quizResults.filter(Boolean).length / RSVP.quizResults.length * 100) : null;
  persistSession(RSVP.doc, mins, words, comp);
  openModal(`<div class="modal-b" style="padding-top:26px">
    <div class="summary-hero">
      <p class="eyebrow">Sesión completada</p>
      <div class="big">${mins}<span style="font-size:16px;color:var(--text3)"> min</span></div>
      <p style="font-size:13px;color:var(--text2)">${RSVP.doc.title} · ${RSVP.doc.chapter}</p>
    </div>
    <div class="sum-grid">
      <div class="stat"><b>${fmtWords(words)}</b><span>palabras</span></div>
      <div class="stat"><b>${S.rsvp.wpm}<em> ppm</em></b><span>velocidad media</span></div>
      <div class="stat"><b>${RSVP.maxWpm}<em> ppm</em></b><span>máxima</span></div>
      <div class="stat"><b>${RSVP.pauses}</b><span>pausas</span></div>
      <div class="stat"><b>${RSVP.rewinds}</b><span>retrocesos</span></div>
      <div class="stat"><b>${comp===null?'—':comp+'<em> %</em>'}</b><span>comprensión</span></div>
    </div>
    <div class="smart-tip" style="margin-top:0">${I.spark}<div>${sessionForecast(words)}</div></div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn" style="flex:1;justify-content:center" onclick="shareSessionCard(${mins},${words},${comp===null?'null':comp})">Compartir tarjeta</button>
      <button class="btn" style="flex:1;justify-content:center" onclick="closeModal();quickNote();">Crear nota</button>
      <button class="btn primary" style="flex:1;justify-content:center" onclick="closeModal();go('estadisticas')">Estadísticas</button>
      <button class="btn accent" style="flex:1;justify-content:center" onclick="resumeAfterSummary()">Seguir leyendo</button>
    </div>
  </div>`);
}
function sessionForecast(words){
  const d = RSVP.doc;
  const total = docText(d.id).split(/\s+/).filter(Boolean).length || d.words;
  const restMin = Math.round(total*(1-d.progress)/Math.max(1,S.rsvp.wpm));
  const pct = Math.round(words/total*100);
  if (d.done || d.progress>=.995) return `Has terminado <b>${d.title}</b>. Enhorabuena.`;
  return `A tu velocidad actual te quedan unos <b>${restMin} min</b> para terminar <b>${d.title}</b>. Has leído un ${pct||'<1'} % del documento en esta sesión.`;
}
function resumeAfterSummary(){
  closeModal();
  RSVP.sessionSaved = false; RSVP.startedAt = Date.now(); RSVP.wordsRead = 0; RSVP.pauses = 0; RSVP.rewinds = 0; RSVP.quizResults = [];
  if (RSVP.i >= RSVP.words.length) RSVP.i = Math.max(0, RSVP.words.length-1);
  if (!RSVP.playing) rsvpToggle();
}
function shareSessionCard(mins, words, comp){
  const card = `Focal — sesión de lectura\n${RSVP.doc.title} · ${RSVP.doc.author}\n${mins} min · ${words} palabras · ${S.rsvp.wpm} ppm${comp!==null?` · comprensión ${comp} %`:''}`;
  navigator.clipboard.writeText(card)
    .then(()=>toast('Tarjeta de sesión copiada al portapapeles','star'))
    .catch(()=>toast('No se pudo copiar al portapapeles','x'));
}

/* ---------- Modo estudio ---------- */
views.estudio = (id) => {
  const d = docById(id) || DEMO_DOCS.find(x=>!x.archived);
  if (!d){ setTimeout(()=>{ toast('Documento no encontrado','x'); go('biblioteca'); }, 20); return views.biblioteca(); }
  const text = docText(d.id) || DEMO_TEXTS.habitos;
  RSVP.doc = d; RSVP.words = tokenize(text); RSVP.playing = false;
  RSVP.i = Math.max(0, Math.min(RSVP.words.length-1, Number.isInteger(d.pos) ? d.pos : Math.floor(RSVP.words.length*(d.progress||0))));
  RSVP.startedAt = Date.now(); RSVP.wordsRead=0; RSVP.maxWpm=S.rsvp.wpm; RSVP.pauses=0; RSVP.rewinds=0;
  RSVP.lastQuiz = Date.now(); RSVP.quizResults = []; RSVP.sessionSaved = false;
  setTimeout(()=>{ showWord(false); }, 40);
  return `<div class="study-top">
    <button class="tb-icon" onclick="go('documento/${d.id}')">${I.back}</button>
    <b style="font-size:13.5px">${d.title}</b><span class="chip">Modo estudio</span>
    <div style="flex:1"></div>
    <button class="btn accent sm" onclick="rsvpToggle()" id="playbtn">${I.play} Reproducir</button>
  </div>
  <div class="study" id="rsvpwrap">
    <section><div class="st-label">Documento</div><div class="serif" style="font-family:var(--serif);font-size:15px;line-height:1.7;color:var(--text2)">${text.slice(0,1400)}…</div></section>
    <section style="display:flex;flex-direction:column"><div class="st-label">RSVP</div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;position:relative">
        <div class="rsvp-word" id="word" style="font-size:34px"></div>
        <div id="pausecard" style="display:none"></div>
      </div>
      <div style="display:flex;justify-content:center;gap:6px;padding:10px">
        <button class="rb-btn" onclick="rsvpSkip(-1)">${I.prev10}</button>
        <button class="rb-btn" onclick="rsvpSkip(1)">${I.next10}</button>
        <div class="rb-speed"><button onclick="rsvpSpeed(-25)">−</button><b id="wpmval">${S.rsvp.wpm} ppm</b><button onclick="rsvpSpeed(25)">+</button></div>
      </div>
    </section>
    <section><div class="st-label">Notas</div>
      <textarea class="input" id="study-notes" style="height:120px;resize:none" placeholder="Escribe mientras escuchas el ritmo del texto…">${escHtml(store.get('studyNotes.'+d.id,''))}</textarea>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
        <span style="font-size:11px;color:var(--text3)" id="study-save-hint">Se guarda automáticamente</span>
        <button class="btn sm" onclick="saveStudyNoteAsNote('${d.id}')">Guardar como nota</button>
      </div>
    </section>
    <section><div class="st-label">Palabras frecuentes</div>
      ${keyTerms(text).map(c=>`<div class="chip" style="margin:0 6px 8px 0;display:inline-flex">${escHtml(c)}</div>`).join('')}
    </section>
  </div>`;
};

/* Términos más frecuentes del texto real (excluye palabras vacías). */
const STOPWORDS = new Set('el la los las un una unos unas de del a al en y o que se su sus por para con no es son como más pero lo le les mi tu si ya fue han este esta estos estas eso esa ese cuando donde entre sobre también hay muy sin nos me te ha había ser está están todo toda todos todas'.split(' '));
function keyTerms(text, n=4){
  const freq = {};
  text.toLowerCase().replace(/[^\p{L}\s]/gu,' ').split(/\s+/).forEach(w=>{
    if (w.length>4 && !STOPWORDS.has(w)) freq[w] = (freq[w]||0)+1;
  });
  return Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,n).map(([w])=>w.charAt(0).toUpperCase()+w.slice(1));
}
function saveStudyNoteAsNote(docId){
  const val = document.getElementById('study-notes')?.value.trim();
  if (!val){ toast('Escribe algo antes de guardar la nota','x'); return; }
  const d = docById(docId);
  DEMO_NOTES.unshift({ id:'local-'+Date.now(), doc:docId, color:'blue', text: val.slice(0,300), note:'Nota de modo estudio', chapter: d?.chapter||'', date: fmtDate(new Date().toISOString()) });
  saveNotes(); toast('Guardada en tus notas','note');
}
document.addEventListener('input', e=>{
  if (e.target.id === 'study-notes' && RSVP.doc){
    try{ store.set('studyNotes.'+RSVP.doc.id, e.target.value); }catch(err){ storageError(err); }
  }
});

/* ---------- Importación ---------- */
function openImport(){
  openModal(`
    <div class="modal-h"><h3>Importar documentos</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
    <div class="modal-b">
      <div class="imp-tabs">
        ${['Archivos','Desde URL','Pegar texto','Portapapeles'].map((t,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this);impTab(${i})">${t}</button>`).join('')}
      </div>
      <div id="imp-body">${impPanelFiles()}</div>
    </div>`);
}
function impPanelFiles(){
  return `<div id="dz">
      <div class="dropzone" id="dz-drop" onclick="document.getElementById('imp-file-input').click()"
        ondragover="event.preventDefault();this.classList.add('over')" ondragleave="this.classList.remove('over')"
        ondrop="event.preventDefault();this.classList.remove('over');importFiles(event.dataTransfer.files)">
        <input type="file" id="imp-file-input" multiple accept=".pdf,.epub,.txt,.md,.markdown,.html,.htm,.docx" style="display:none" onchange="importFiles(this.files)">
        <div class="dz-ico">${I.upload}</div>
        <b style="font-size:14px">Arrastra tus archivos aquí</b>
        <p style="font-size:12.5px;color:var(--text3);margin-top:5px">o haz clic para seleccionarlos · varios a la vez</p>
        <div class="fmt-row">${['PDF','EPUB','TXT','HTML','MD','DOCX'].map(f=>`<span class="ftype">${f}</span>`).join('')}</div>
      </div>
      <div id="imp-queue"></div>
      <p style="font-size:11px;color:var(--text3);margin-top:14px">El texto se extrae en tu propio navegador — nada se sube a ningún servidor salvo tu propia cuenta de Focal.</p>
    </div>`;
}
function impTab(i){
  const b = document.getElementById('imp-body');
  if (i===0) b.innerHTML = impPanelFiles();
  else if (i===1) b.innerHTML = `<div id="dz"><div class="field"><label>Dirección URL</label><input class="input" id="imp-url" placeholder="https://ejemplo.com/articulo" onkeydown="if(event.key==='Enter')importFromUrl(document.getElementById('imp-url').value.trim())"></div><button class="btn primary" style="width:100%;justify-content:center" onclick="importFromUrl(document.getElementById('imp-url').value.trim())">Importar artículo</button><div id="imp-queue"></div><p style="font-size:11px;color:var(--text3);margin-top:10px">Algunos sitios bloquean la lectura entre dominios (CORS); si falla, usa «Pegar texto».</p></div>`;
  else if (i===2) b.innerHTML = `<div id="dz"><textarea class="input" id="imp-paste" style="height:140px;resize:none" placeholder="Pega aquí cualquier texto…"></textarea><button class="btn primary" style="width:100%;justify-content:center;margin-top:10px" onclick="importPastedText(document.getElementById('imp-paste').value)">Crear documento</button></div>`;
  else if (i===3) b.innerHTML = `<div id="dz"><div class="dropzone" id="clip-drop" onclick="importFromClipboard()"><div class="dz-ico">${I.doc}</div><b style="font-size:14px">Importar desde el portapapeles</b><p style="font-size:12.5px;color:var(--text3);margin-top:5px">Copia un texto y pulsa aquí para crear el documento</p></div><div id="imp-queue"></div></div>`;
}
async function importFromClipboard(){
  try{
    const text = await navigator.clipboard.readText();
    if (!text || countWords(text) < 5){ toast('El portapapeles no tiene suficiente texto','x'); return; }
    await importPastedText(text);
  }catch(err){ toast('No se pudo leer el portapapeles: permiso denegado','x'); }
}

/* ---------- Command palette ---------- */
let cmdkSel = 0;
function cmdkItems(){
  const items = [];
  const recent = DEMO_DOCS.filter(d=>!d.archived);
  const last = recent.find(d=>d.progress>0 && !d.done) || recent[0];
  recent.forEach(d => items.push(['doc', d.title, `${d.author} · ${Math.round(d.progress*100)} %`, `go('documento/${d.id}')`]));
  DEMO_NOTES.slice(0,20).forEach(n => { const d = docById(n.doc); items.push(['note', n.text.slice(0,60)+(n.text.length>60?'…':''), `Nota · ${d?d.title:''}`, d?`go('lector/${d.id}')`:`go('notas')`]); });
  getCollections().forEach(c => items.push(['collections', c, 'Colección', `libFilter='col:${c.replace(/'/g,"\\'")}';go('biblioteca')`]));
  DEMO_VOCAB.slice(0,15).forEach(v => items.push(['layers', v.word, 'Vocabulario', `go('vocabulario')`]));
  if (last) items.push(['zap','Empezar sesión RSVP', last.title, `go('rsvp/${last.id}')`],
                       ['book','Ir al último documento','', `go('lector/${last.id}')`]);
  items.push(
    ['upload','Importar documento','', 'openImport()'],
    ['sun','Cambiar tema','T', "go('ajustes');S.setTab='apariencia'"],
    ['stats','Abrir estadísticas','', "go('estadisticas')"],
    ['target','Abrir objetivos','', "go('objetivos')"],
    ['clock','Abrir historial','', "go('historial')"],
    ['collections','Crear colección','', 'createCollection()'],
    ['gauge',`Cambiar velocidad — ${S.rsvp.wpm} ppm`,'+ / −', "go('ajustes');S.setTab='rsvp'"],
    ['target','Calibrar velocidad','', "go('calibracion')"],
    ['timer','Iniciar temporizador Pomodoro','', 'openPomodoro()'],
    ['settings','Abrir ajustes','', "go('ajustes')"],
  );
  return items;
}
function openCmdk(){
  cmdkSel = 0;
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="overlay" style="align-items:flex-start;padding-top:14vh" onclick="if(event.target===this)closeModal()">
    <div class="cmdk">
      <input id="cmdk-in" placeholder="Buscar o escribir un comando…" oninput="renderCmdk(this.value)" onkeydown="cmdkKeys(event)">
      <div class="cmdk-list" id="cmdk-list"></div>
    </div></div>`;
  renderCmdk(''); document.getElementById('cmdk-in').focus();
}
function renderCmdk(q){
  const items = cmdkItems().filter(it => (it[1]+' '+it[2]).toLowerCase().includes(q.toLowerCase())).slice(0, 14);
  cmdkSel = Math.min(cmdkSel, Math.max(0,items.length-1));
  window._cmdkItems = items;
  document.getElementById('cmdk-list').innerHTML =
    `<div class="cmdk-sec">${q?'Resultados':'Documentos y acciones'}</div>` +
    (items.length ? items.map((it,i)=>`<div class="cmdk-item ${i===cmdkSel?'sel':''}" onmouseenter="cmdkSel=${i};renderCmdk(document.getElementById('cmdk-in').value)" onclick="closeModal();${it[3]}">${I[it[0]]||I.doc}<span>${escHtml(it[1])}</span><span class="ck-sub">${escHtml(it[2])}</span></div>`).join('')
    : `<div class="empty" style="padding:30px"><p style="margin:0">Sin resultados para «${q}». Prueba con un título, una nota o una acción.</p></div>`);
}
function cmdkKeys(e){
  const items = window._cmdkItems || [];
  if (!items.length && e.key!=='Escape') return;
  if (e.key==='ArrowDown'){ cmdkSel=(cmdkSel+1)%items.length; renderCmdk(e.target.value); e.preventDefault(); }
  else if (e.key==='ArrowUp'){ cmdkSel=(cmdkSel-1+items.length)%items.length; renderCmdk(e.target.value); e.preventDefault(); }
  else if (e.key==='Enter' && items[cmdkSel]){ closeModal(); eval(items[cmdkSel][3]); }
  else if (e.key==='Escape') closeModal();
}

/* ---------- Calibración ---------- */
let calibStep = 0;
views.calibracion = () => {
  setTimeout(runCalib, 60);
  return `<div class="onb">
    <button class="onb-skip" onclick="go('inicio')">Salir</button>
    <div class="onb-card">
      <p class="eyebrow">Calibración de velocidad</p>
      <h1>Leyendo a <span class="mono" id="calib-wpm" style="font-family:var(--mono)">300</span> ppm</h1>
      <p>Lee con normalidad. Iremos subiendo la velocidad y al final te preguntaremos por el contenido para calcular tu punto óptimo.</p>
      <div class="onb-demo-word rsvp-word" id="word" style="font-size:44px;justify-content:center"></div>
      <div class="pbar" style="max-width:280px;margin:0 auto 30px"><i id="calib-prog" style="width:0%"></i></div>
      <div class="onb-actions">
        <button class="btn" onclick="go('inicio')">Cancelar</button>
        <button class="btn primary" onclick="finishCalib()">Terminar test</button>
      </div>
    </div>
  </div>`;
};
const CALIB = { wpm:300, maxWpm:300, n:0, answers:[] };
function runCalib(){
  RSVP.words = tokenize(DEMO_TEXTS.meditaciones); RSVP.i = 0;
  CALIB.wpm = 300; CALIB.maxWpm = 300; CALIB.n = 0; CALIB.answers = [];
  const step = () => {
    const el = document.getElementById('word'); if (!el) return;
    const w = RSVP.words[RSVP.i % RSVP.words.length]; RSVP.i++; CALIB.n++;
    const oi = orpIndex(w);
    el.innerHTML = `<span class="pre" style="flex:1;text-align:right">${esc(w.slice(0,oi))}</span><span class="orp">${esc(w[oi]||'')}</span><span class="post" style="flex:1;text-align:left">${esc(w.slice(oi+1))}</span>`;
    if (CALIB.n % 30 === 0){ CALIB.wpm += 40; CALIB.maxWpm = CALIB.wpm; const e2=document.getElementById('calib-wpm'); if(e2) e2.textContent = CALIB.wpm; }
    const p=document.getElementById('calib-prog'); if(p) p.style.width = Math.min(100, CALIB.n/1.8)+'%';
    if (CALIB.n < 180) RSVP.timer = setTimeout(step, 60000/CALIB.wpm);
    else finishCalib();
  };
  step();
}
function finishCalib(){
  clearTimeout(RSVP.timer);
  // Comprobación breve de comprensión sobre el texto de calibración.
  const qs = (typeof QUIZ !== 'undefined' && QUIZ.meditaciones) ? QUIZ.meditaciones.slice(0,2) : [];
  if (!qs.length){ showCalibResult(1); return; }
  let qi = 0;
  const ask = () => {
    const q = qs[qi];
    openModal(`<div class="modal-h"><h3>Pregunta ${qi+1} de ${qs.length}</h3></div>
    <div class="modal-b"><p style="font-size:14.5px;font-weight:550;margin-bottom:14px">${q.q}</p>
    ${q.opts.map((o,i)=>`<button class="btn" style="width:100%;justify-content:flex-start;margin-bottom:8px" onclick="window._calibAns(${i})">${o}</button>`).join('')}</div>`);
  };
  window._calibAns = (i) => {
    CALIB.answers.push(i === qs[qi].a);
    qi++;
    if (qi < qs.length) ask();
    else showCalibResult(CALIB.answers.filter(Boolean).length / CALIB.answers.length);
  };
  ask();
}
function showCalibResult(accuracy){
  // Recomendación real: velocidad máxima alcanzada, corregida por la comprensión demostrada.
  const comfort = Math.round((CALIB.maxWpm - 40) / 5) * 5;
  const factor = accuracy >= 1 ? 1 : accuracy >= .5 ? .85 : .7;
  const rec = Math.max(200, Math.round(comfort * factor / 5) * 5);
  const compPct = Math.round(accuracy*100);
  openModal(`<div class="modal-b" style="text-align:center;padding-top:30px">
    <p class="eyebrow">Resultado de calibración</p>
    <div class="calib-num">${rec} <em>ppm recomendadas</em></div>
    <div class="sum-grid" style="text-align:left">
      <div class="stat"><b>${comfort}<em> ppm</em></b><span>velocidad cómoda</span></div>
      <div class="stat"><b>${CALIB.maxWpm}<em> ppm</em></b><span>velocidad máxima</span></div>
      <div class="stat"><b>${compPct}<em> %</em></b><span>comprensión</span></div>
    </div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:18px">Repite la calibración cada pocas semanas: tu velocidad mejorará con la práctica.</p>
    <button class="btn primary" onclick="S.rsvp.wpm=${rec};saveRsvp();store.set('calibration',{wpm:${rec},comp:${compPct},date:Date.now()});closeModal();go('inicio');toast('Velocidad ajustada a ${rec} ppm','gauge')">Aplicar ${rec} ppm</button>
  </div>`);
}

/* ---------- Onboarding ---------- */
let onbStep = 0, onbTimer = null;
function renderOnboarding(){
  const steps = [onb1, onb2, onb3, onb4, onb5];
  document.getElementById('app').innerHTML = `<div class="onb">
    ${onbStep<4?`<button class="onb-skip" onclick="finishOnb()">Saltar introducción</button>`:''}
    <div class="onb-card">
      <div class="onb-steps">${[0,1,2,3,4].map(i=>`<i class="${i<=onbStep?'on':''}"></i>`).join('')}</div>
      ${steps[onbStep]()}
    </div>
  </div>`;
  if (onbStep===0) onbDemo(['Bienvenido','a','Focal.','Lee','palabra','a','palabra,','sin','mover','los','ojos.'], 300);
  if (onbStep===4) onbDemo(tokenize(DEMO_TEXTS.habitos).slice(0,90), 420);
}
function onbDemo(words, wpm){
  clearTimeout(onbTimer); let i = 0;
  const tick = () => {
    const el = document.getElementById('onbword'); if (!el) return;
    const w = words[i % words.length]; i++;
    const oi = orpIndex(w);
    el.innerHTML = `<span style="flex:1;text-align:right">${esc(w.slice(0,oi))}</span><span style="color:var(--orp)">${esc(w[oi]||'')}</span><span style="flex:1;text-align:left">${esc(w.slice(oi+1))}</span>`;
    onbTimer = setTimeout(tick, 60000/wpm * (/[.,]$/.test(w)?1.9:1));
  };
  tick();
}
const onb1 = () => `
  <p class="eyebrow">Paso 1 · Bienvenida</p>
  <h1 class="serif-big" style="font-family:var(--serif)">Lee más rápido.<br>Comprende mejor.</h1>
  <p>Focal usa RSVP —presentación visual rápida en serie—: el texto aparece palabra a palabra en un punto fijo, eliminando el movimiento ocular que frena tu lectura.</p>
  <div class="onb-demo-word" id="onbword" style="display:flex;width:100%"></div>
  <div class="onb-actions"><button class="btn primary" onclick="onbStep=1;renderOnboarding()">Empezar</button></div>`;
const onb2 = () => `
  <p class="eyebrow">Paso 2 · Tu primer documento</p>
  <h1>Añade algo que leer</h1>
  <p>Importa un PDF, EPUB o artículo, o empieza con un texto de demostración.</p>
  <div class="dropzone" style="margin-bottom:20px" onclick="openImport()"
    ondragover="event.preventDefault();this.classList.add('over')" ondragleave="this.classList.remove('over')"
    ondrop="event.preventDefault();this.classList.remove('over');window._dropFiles=[...event.dataTransfer.files];openImport();setTimeout(()=>importFiles(window._dropFiles),60)">
    <div class="dz-ico">${I.upload}</div><b style="font-size:14px">Arrastra un archivo o haz clic para importar</b>
    <div class="fmt-row">${['PDF','EPUB','TXT','HTML','MD','DOCX'].map(f=>`<span class="ftype">${f}</span>`).join('')}</div>
  </div>
  <div class="onb-actions"><button class="btn" onclick="onbStep=0;renderOnboarding()">Atrás</button><button class="btn primary" onclick="onbStep=2;renderOnboarding()">Usar texto de demostración</button></div>`;
const onb3 = () => `
  <p class="eyebrow">Paso 3 · Calibración</p>
  <h1>¿A qué ritmo lees hoy?</h1>
  <p>Un test de un minuto mide tu velocidad cómoda y tu comprensión para recomendarte un punto de partida. Podrás repetirlo cuando quieras.</p>
  <div class="calib-num">~1 <em>minuto</em></div>
  <div class="onb-actions"><button class="btn" onclick="onbStep=3;renderOnboarding()">Ahora no</button><button class="btn primary" onclick="finishOnb();go('calibracion')">Calibrar ahora</button></div>`;
const onb4 = () => `
  <p class="eyebrow">Paso 4 · Apariencia</p>
  <h1>Elige tu atmósfera</h1>
  <p>Diez temas cuidadosamente equilibrados. Podrás crear el tuyo más adelante.</p>
  <div class="themegrid" style="grid-template-columns:repeat(3,1fr);margin-bottom:26px">
    ${['paper','midnight','sepia'].map(k=>themeCard(k,THEMES[k])).join('')}
  </div>
  <div class="onb-actions"><button class="btn" onclick="onbStep=2;renderOnboarding()">Atrás</button><button class="btn primary" onclick="onbStep=4;renderOnboarding()">Continuar</button></div>`;
const onb5 = () => `
  <p class="eyebrow">Paso 5 · Primera sesión</p>
  <h1>30 segundos de práctica</h1>
  <p>Mantén la mirada en la letra acentuada. No subvocalices: deja que las palabras lleguen.</p>
  <div class="onb-demo-word" id="onbword" style="display:flex;width:100%;font-size:42px"></div>
  <p class="mono" style="font-family:var(--mono);font-size:12px;color:var(--text3)">Tu velocidad inicial es de <b style="color:var(--accent)">${S.rsvp.wpm} palabras por minuto</b> — puedes ajustarla con la calibración</p>
  <div class="onb-actions" style="margin-top:26px"><button class="btn primary" onclick="finishOnb()">Entrar en Focal</button></div>`;
function finishOnb(){ clearTimeout(onbTimer); S.onboarded = true; store.set('onboarded', true); go('inicio'); }

/* ---------- Router ---------- */
function go(route){ location.hash = '#/' + route; }
function render(){
  clearTimeout(RSVP.timer); clearTimeout(onbTimer);
  const hash = location.hash.replace(/^#\//,'') || (S.onboarded ? 'inicio' : 'onboarding');
  if (hash === 'onboarding'){ renderOnboarding(); return; }
  const [name, arg] = hash.split('/');
  const fn = views[name] || views.inicio;
  const app = document.getElementById('app');
  const immersive = ['lector','rsvp','calibracion','estudio'].includes(name);
  app.classList.toggle('immersive', immersive);
  if (name==='lector' || name==='rsvp' || name==='calibracion'){
    app.innerHTML = shell(name, '') ;
    document.getElementById('view').innerHTML = fn(arg);
  } else {
    app.innerHTML = shell(name, fn(arg));
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', render);

/* ---------- Atajos globales ---------- */
document.addEventListener('keydown', e => {
  const tag = document.activeElement?.tagName;
  if ((e.metaKey||e.ctrlKey) && e.key==='k'){ e.preventDefault(); openCmdk(); return; }
  if (tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT') return;
  const inRsvp = !!document.getElementById('rsvpwrap');
  if (e.key==='Escape'){
    const openPanel = document.querySelector('.side-panel.open, .rsvp-settings.open');
    if (openPanel){ openPanel.classList.remove('open'); return; }
    if (document.getElementById('modal-root').innerHTML){ closeModal(); return; }
    if (document.fullscreenElement) document.exitFullscreen();
    return;
  }
  if (e.key==='Tab'){ // alternar lector ↔ RSVP
    const m = location.hash.match(/^#\/(lector|rsvp)\/(.+)$/);
    if (m){ e.preventDefault(); go((m[1]==='lector'?'rsvp':'lector')+'/'+m[2]); return; }
  }
  if (!inRsvp) return;
  if (e.key===' '){ e.preventDefault(); rsvpToggle(); }
  else if (e.key==='ArrowLeft'){ e.shiftKey ? rsvpSentence(-1) : rsvpSkip(-1); }
  else if (e.key==='ArrowRight'){ e.shiftKey ? rsvpSentence(1) : rsvpSkip(1); }
  else if (e.key==='+'||e.key==='='){ rsvpSpeed(25); }
  else if (e.key==='-'){ rsvpSpeed(-25); }
  else if (e.key.toLowerCase()==='r'){ rsvpSentence(-1); }
  else if (e.key.toLowerCase()==='f'){ toggleFS(); }
  else if (e.key.toLowerCase()==='m'){ quickBookmark(); }
  else if (e.key.toLowerCase()==='n'){ quickNote(); }
  else if (e.key.toLowerCase()==='t'){ const keys=Object.keys(THEMES); applyTheme(keys[(keys.indexOf(S.theme)+1)%keys.length]); toast('Tema '+(THEMES[S.theme]?.name||''),'sun'); }
});

/* ---------- Autenticación (puerta de entrada) ---------- */
function renderLogin(status){
  document.getElementById('app').innerHTML = `<div class="onb">
    <div class="onb-card" style="width:min(420px,100%)">
      <div class="brand" style="justify-content:center;margin-bottom:8px"><span class="brand-dot"></span><span style="font-weight:650;font-size:19px">Focal</span></div>
      <h1 style="font-size:22px;margin-top:18px">Entra en tu biblioteca</h1>
      <p>Te enviamos un enlace mágico a tu correo. Sin contraseñas — ábrelo desde este mismo dispositivo.</p>
      <div class="field" style="text-align:left;margin-top:24px">
        <label>Correo electrónico</label>
        <input class="input" id="login-email" type="email" placeholder="tú@correo.com" autocomplete="email" onkeydown="if(event.key==='Enter')sendMagicLink()">
      </div>
      <div class="onb-actions" style="margin-top:6px"><button class="btn primary" style="width:100%;justify-content:center" onclick="sendMagicLink()">Enviar enlace mágico</button></div>
      <p id="login-status" style="margin-top:16px;font-size:12.5px;color:var(--text3)">${status||''}</p>
    </div>
  </div>`;
}
function sendMagicLink(){
  const email = document.getElementById('login-email').value.trim();
  const status = document.getElementById('login-status');
  if (!email || !email.includes('@')){ status.textContent = 'Escribe un correo válido.'; status.style.color = '#c04545'; return; }
  status.textContent = 'Enviando…'; status.style.color = 'var(--text3)';
  DB.signInWithEmail(email).then(()=>{
    status.textContent = `Enlace enviado a ${email}. Revisa tu bandeja de entrada.`; status.style.color = '#3fb96f';
  }).catch(err=>{ status.textContent = 'No se pudo enviar: ' + err.message; status.style.color = '#c04545'; });
}
async function loadUserData(){
  const [docs, notes, vocab, sessions, goals, settings, achieved] = await Promise.all([
    DB.loadLibrary(), DB.loadNotes(), DB.loadVocabulary(), DB.loadSessions(), DB.loadGoals(), DB.loadSettings(), DB.loadAchievements(),
  ]);
  DEMO_DOCS = docs; DEMO_NOTES = notes; DEMO_VOCAB = vocab; DEMO_SESSIONS = sessions; S.goals = goals;
  if (settings){ S.theme = settings.theme || S.theme; S.custom = settings.custom || S.custom; Object.assign(S.rsvp, settings.rsvp||{}); Object.assign(S.reader, settings.reader||{}); }
  window._unlockedAchievements = achieved;
}
function mergeLocalImports(){
  const local = store.get('localImports', []);
  for (const d of local){
    if (DEMO_DOCS.some(x => x.id === d.id)) continue;
    DEMO_DOCS.unshift({
      id: d.id, title: d.title, author: d.author, type: d.type, pages: Math.max(1, Math.round(countWords(d.text)/280)),
      words: countWords(d.text), progress: 0, chapter: 'Principio del documento', timeLeft: estimateReadTime(countWords(d.text),300),
      lastRead: 'Nunca', avgWpm: 0, tags: ['Importado'], fav: false, cover: d.cover, collection: 'Importados',
      added: new Date(d.addedAt).toLocaleDateString('es-ES', { day:'numeric', month:'short', year:'numeric' }), readTime:'0 min', sessions:0, done:false,
    });
    DEMO_TEXTS[d.id] = d.text;
  }
}
async function bootFocal(){
  if (!DB.configured()){
    // Sin Supabase configurado: modo demo local (localStorage), como antes.
    mergeLocalImports(); hydrateLocal(); applyPrefs(); applyTheme(S.theme); render(); return;
  }
  const user = await DB.init();
  if (!user){ renderLogin(); DB.onAuthChange(async (u)=>{ if (u){ DB.user = u; await bootAuthed(); } }); return; }
  DB.user = user; await bootAuthed();
  DB.onAuthChange((u)=>{ if (!u) location.reload(); });
}
async function bootAuthed(){
  try{
    await DB.seedIfEmpty();
    await loadUserData();
  }catch(err){ console.error('Focal · error cargando datos de Supabase', err); toast('Error cargando tus datos, reintenta','x'); }
  applyPrefs(); applyTheme(S.theme); render();
}

/* ---------- Init ---------- */
bootFocal();
