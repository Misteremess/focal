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
  prev10:'<svg viewBox="0 0 24 24"><path d="m11 6-6 6 6 6M19 6l-6 6 6 6"/></svg>',
  next10:'<svg viewBox="0 0 24 24"><path d="m13 6 6 6-6 6M5 6l6 6-6 6"/></svg>',
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
};
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
  r.setProperty('--rsvp-font', t.mono ? 'var(--mono)' : (S.rsvp.font==='sans'?'var(--sans)':S.rsvp.font==='mono'?'var(--mono)':'var(--serif)'));
  document.querySelectorAll('.theme-quick button').forEach(b=>b.classList.toggle('on', b.dataset.t===key));
  document.querySelectorAll('.theme-card').forEach(c=>c.classList.toggle('on', c.dataset.t===key));
  if (DB.user) DB.saveSettings({theme:key}).catch(console.error);
}

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
        `<button class="nav-item ${route===n[0]?'active':''}" onclick="go('${n[0]}')">${I[n[2]]}<span>${n[1]}</span>${n[0]==='biblioteca'?'<span class="nav-badge">7</span>':''}</button>`).join('')}
    </nav>
    <div class="sidebar-foot">
      <div class="theme-quick">${themeDots}</div>
      <button class="import-btn" onclick="openImport()">${I.upload}<span>Importar</span></button>
      <div class="profile-row" onclick="go('perfil')">
        <div class="avatar">MD</div>
        <div style="min-width:0"><div style="font-size:12.5px;font-weight:550">Máximo D.</div><div style="font-size:10.5px;color:var(--text3)">Plan Pro · Sincronizado</div></div>
        <span class="sync-dot"></span>
      </div>
    </div>
  </aside>
  <div class="main">
    <header class="topbar">
      <button class="tb-collapse" onclick="toggleSidebar()">${I.panel}</button>
      <div class="searchbox" onclick="openCmdk()">${I.search}<span>Buscar documentos, notas, acciones…</span><kbd>⌘K</kbd></div>
      <div class="tb-right">
        <span class="sync-pill"><span class="sync-dot" style="margin:0"></span>Sincronizado</span>
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
  return `<div class="cover ${extra}" style="background:${c.bg};color:${c.fg};aspect-ratio:1/${c.ratio}">
    <div><div class="c-rule" style="background:${c.accent}"></div><div class="c-title">${d.title}</div></div>
    <div><div class="c-label" style="color:${c.accent}">${c.label}</div><div class="c-author">${d.author}</div></div>
  </div>`;
}

/* ---------- Vistas ---------- */
const views = {};

views.inicio = () => {
  const d = docById('habitos');
  const stats = [
    ['147','min','esta semana','+12 %'], ['58,4','k','palabras','+8 %'], ['402','ppm','velocidad media','+3 %'],
    ['12','días','racha actual',''], ['91','%','comprensión',''], ['3','','terminados','']
  ];
  const totalMin = WEEK_DATA.reduce((a,b)=>a+b.min,0);
  return `<div class="page">
    <p class="eyebrow">Jueves, 17 de julio</p>
    <h1 class="page-title serif" style="font-family:var(--serif)">Buenas tardes, Máximo</h1>
    <p class="page-sub">Llevas 12 días seguidos leyendo. Hoy te faltan 9 minutos para tu objetivo.</p>

    <section class="card hero-cr">
      ${coverHTML(d)}
      <div class="hero-info">
        <p class="eyebrow">Continúa leyendo</p>
        <h2>${d.title}</h2>
        <p class="h-author">${d.author} · ${d.chapter}</p>
        <div class="hero-meta">
          <div class="hm"><b>${Math.round(d.progress*100)} %</b><span>completado</span></div>
          <div class="hm"><b>${d.timeLeft}</b><span>restante</span></div>
          <div class="hm"><b>${d.avgWpm} ppm</b><span>tu velocidad</span></div>
          <div class="hm"><b>Hace 2 h</b><span>última sesión</span></div>
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
          <span style="font-family:var(--mono);font-size:22px">${totalMin}<span style="font-size:12px;color:var(--text3)"> / 210 min</span></span>
          <span class="chip">5 días activos</span>
        </div>
        <div class="weekchart">
          ${WEEK_DATA.map(w=>`<div class="wc-col"><div class="wc-bar" style="height:${Math.max(6,(w.min/60)*100)}%"><i style="height:${Math.min(100,(w.min/w.goal)*100)}%;opacity:${w.min>=w.goal?1:.45}"></i></div><span>${w.d}</span></div>`).join('')}
        </div>
      </section>
      <section class="card panel">
        <h3>Actividad reciente <a onclick="go('historial');return false" href="#/historial">Historial</a></h3>
        ${DEMO_SESSIONS.slice(0,4).map(s=>{const doc=docById(s.doc);return `
          <div style="display:flex;gap:12px;align-items:center;padding:9px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="go('documento/${doc.id}')">
            <div style="width:8px;height:8px;border-radius:50%;background:${doc.cover.accent};flex-shrink:0"></div>
            <div style="flex:1;min-width:0"><div style="font-size:12.5px;font-weight:540;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${doc.title}</div><div style="font-size:11px;color:var(--text3)">${s.date} · ${s.mode}</div></div>
            <span class="mono" style="font-size:11px;color:var(--text2)">${s.mins} min · ${s.wpm} ppm</span>
          </div>`;}).join('')}
      </section>
    </div>

    <div class="smart-tip">${I.spark}<div><b>Sugerencia.</b> Con tu velocidad actual de ${S.rsvp.wpm} ppm puedes terminar el capítulo 11 de <i>Hábitos atómicos</i> en unos <b>18 minutos</b>. Tu mejor franja de concentración empieza a las 21:30.</div></div>

    <h3 style="font-size:15px;margin-top:36px;display:flex;justify-content:space-between">Biblioteca reciente <a href="#/biblioteca" onclick="go('biblioteca');return false" style="font-size:12.5px;color:var(--text3);font-weight:450;text-decoration:none">Ver todo</a></h3>
    <div class="shelf">
      ${DEMO_DOCS.slice(0,6).map(d=>`<div class="shelf-item" onclick="go('documento/${d.id}')">${coverHTML(d)}<div class="s-t">${d.title}</div><div class="s-a">${d.author}</div><div class="pbar"><i style="width:${d.progress*100}%"></i></div></div>`).join('')}
    </div>
  </div>`;
};

let libFilter = 'todos';
views.biblioteca = () => {
  let docs = DEMO_DOCS.slice();
  if (libFilter==='favoritos') docs = docs.filter(d=>d.fav);
  if (libFilter==='sinterminar') docs = docs.filter(d=>!d.done && d.progress>0);
  if (libFilter==='completados') docs = docs.filter(d=>d.done);
  if (libFilter==='archivados') docs = [];
  const body = docs.length===0 ? emptyState('library','Nada por aquí','No hay documentos archivados todavía. Cuando termines con un documento puedes archivarlo para mantener la biblioteca limpia.','Explorar biblioteca',"libFilter='todos';render()") :
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
  return `<div class="page">
    <h1 class="page-title">Biblioteca</h1>
    <p class="page-sub">7 documentos · 532.000 palabras · 4 colecciones</p>
    <div class="lib-toolbar">
      <div class="lib-tabs">
        ${[['todos','Todos'],['favoritos','Favoritos'],['sinterminar','En curso'],['completados','Completados'],['archivados','Archivados']].map(t=>
          `<button class="${libFilter===t[0]?'on':''}" onclick="libFilter='${t[0]}';render()">${t[1]}</button>`).join('')}
      </div>
      <div style="flex:1"></div>
      <select class="input" style="width:auto;padding:6px 34px 6px 10px;font-size:12.5px" onchange="toast('Ordenado por '+this.value)"><option>Recientes</option><option>Título</option><option>Autor</option><option>Progreso</option><option>Tiempo restante</option></select>
      <div class="seg">
        <button class="${S.libView==='grid'?'on':''}" onclick="S.libView='grid';store.set('libView','grid');render()">${I.grid}</button>
        <button class="${S.libView==='list'?'on':''}" onclick="S.libView='list';store.set('libView','list');render()">${I.list}</button>
      </div>
    </div>
    ${body}
  </div>`;
};
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
  doc.progress = Math.max(doc.progress, newProgress);
  doc.avgWpm = Math.round((doc.avgWpm + S.rsvp.wpm) / 2) || S.rsvp.wpm;
  doc.sessions = (doc.sessions||0) + 1;
  doc.lastRead = 'Hace un momento';
  doc.done = doc.progress >= .995;
  const modeLabel = location.hash.includes('estudio') ? 'Modo estudio' : 'RSVP';
  DEMO_SESSIONS.unshift({ doc: doc.id, date: 'Ahora mismo', mode: modeLabel, mins, words, wpm: S.rsvp.wpm, comp });
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
  if (DB.user) DB.toggleFavorite(id, d.fav).catch(console.error);
  toast(d.fav ? 'Añadido a favoritos' : 'Quitado de favoritos', 'star');
  render();
}
function emptyState(icon,title,text,cta,action){
  return `<div class="empty"><div class="e-glyph">${I[icon]||I.doc}</div><h3>${title}</h3><p>${text}</p>${cta?`<button class="btn primary" onclick="${action}">${cta}</button>`:''}</div>`;
}

views.continuar = () => `<div class="page">
  <h1 class="page-title">Continuar leyendo</h1><p class="page-sub">Retoma cualquier documento exactamente donde lo dejaste.</p>
  ${DEMO_DOCS.filter(d=>!d.done && d.progress>0).map(d=>`
    <div class="card" style="display:flex;gap:20px;padding:18px 20px;margin-bottom:14px;align-items:center;cursor:pointer" onclick="go('documento/${d.id}')">
      <div style="width:52px">${coverHTML(d)}</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:560;font-size:14px">${d.title}</div>
        <div style="font-size:12px;color:var(--text3);margin:2px 0 8px">${d.chapter} · ${d.lastRead}</div>
        <div class="pbar"><i style="width:${d.progress*100}%"></i></div>
      </div>
      <div class="mono" style="font-size:11.5px;color:var(--text3);text-align:right">${Math.round(d.progress*100)} %<br>${d.timeLeft}</div>
      <button class="btn accent sm" onclick="event.stopPropagation();go('rsvp/${d.id}')">${I.zap} RSVP</button>
    </div>`).join('')}
</div>`;

views.colecciones = () => {
  const cols = ['Crecimiento','Ficción','Investigación','Universidad','Trabajo'];
  return `<div class="page"><h1 class="page-title">Colecciones</h1><p class="page-sub">Organiza tus documentos por proyecto o tema.</p>
  <div class="libgrid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
    ${cols.map(c=>{const items=DEMO_DOCS.filter(d=>d.collection===c);if(!items.length)return '';return `
    <div class="card panel" style="cursor:pointer" onclick="toast('Colección ${c}')">
      <div style="display:flex;gap:6px;margin-bottom:14px">${items.slice(0,3).map(d=>`<div style="width:40px">${coverHTML(d)}</div>`).join('')}</div>
      <b style="font-size:14px">${c}</b><div style="font-size:12px;color:var(--text3);margin-top:2px">${items.length} documento${items.length>1?'s':''}</div>
    </div>`;}).join('')}
    <button class="card panel" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--text3);border-style:dashed;min-height:150px" onclick="toast('Nueva colección creada')">${I.plus}<span style="font-size:13px">Nueva colección</span></button>
  </div></div>`;
};

const HL_COLORS = { amber:'#e8b04b', green:'#69b979', blue:'#5b8def', rose:'#e06c8a' };
let noteFilter='todas';
views.notas = views.destacados = () => {
  let notes = DEMO_NOTES;
  if (noteFilter!=='todas') notes = HL_COLORS[noteFilter] ? notes.filter(n=>n.color===noteFilter) : notes.filter(n=>n.doc===noteFilter);
  return `<div class="page"><h1 class="page-title">Notas y destacados</h1><p class="page-sub">${DEMO_NOTES.length} fragmentos en 5 documentos.</p>
  <div class="lib-toolbar">
    <div class="lib-tabs"><button class="${noteFilter==='todas'?'on':''}" onclick="noteFilter='todas';render()">Todas</button>
    ${Object.entries(HL_COLORS).map(([k,c])=>`<button class="${noteFilter===k?'on':''}" onclick="noteFilter='${k}';render()"><span class="hl-dot" style="background:${c};display:inline-block;margin-right:5px"></span>${{amber:'Ámbar',green:'Verde',blue:'Azul',rose:'Rosa'}[k]}</button>`).join('')}</div>
    <div style="flex:1"></div>
    <button class="btn sm">Exportar</button><button class="btn sm">Crear tarjetas</button>
  </div>
  ${notes.length? notes.map(n=>{const d=docById(n.doc);return `
    <div class="card note-card" style="--hl:${HL_COLORS[n.color]}">
      <div class="note-q serif">“${n.text}”</div>
      ${n.note?`<div class="note-n">${n.note}</div>`:''}
      <div class="note-meta"><span class="hl-dot" style="background:${HL_COLORS[n.color]}"></span><b style="color:var(--text2)">${d.title}</b><span>${n.chapter}</span><span>${n.date}</span>
      <span style="margin-left:auto;display:flex;gap:10px"><a style="cursor:pointer" onclick="toast('Cita copiada con referencia')">Copiar cita</a><a style="cursor:pointer" onclick="go('lector/${d.id}')">Ir al fragmento</a></span></div>
    </div>`;}).join('') : emptyState('note','Sin notas aquí','Subraya cualquier fragmento durante la lectura o pulsa N en modo RSVP para crear una nota rápida.','Abrir un documento',"go('biblioteca')")}
  </div>`;
};

views.estadisticas = () => {
  const days = [22,35,18,42,31,0,28,45,38,24,52,41,33,0,29,47,36,31,44,52,24];
  const max = 55;
  const pts = days.map((v,i)=>`${(i/(days.length-1))*720},${170-(v/max)*150}`);
  const hours = [['06–09',14],['09–12',22],['12–15',9],['15–18',18],['18–21',31],['21–24',48]];
  return `<div class="page"><h1 class="page-title">Estadísticas</h1><p class="page-sub">Tu actividad de lectura de los últimos 30 días.</p>
  <div class="statgrid four">
    <div class="stat"><b>21,4<em> h</em></b><span>tiempo total</span></div>
    <div class="stat"><b>486<em> k</em></b><span>palabras leídas</span></div>
    <div class="stat"><b>402<em> ppm</em></b><span>velocidad media</span> <span class="delta">máx. 640</span></div>
    <div class="stat"><b>9,2<em> h</em></b><span>ahorradas con RSVP</span></div>
  </div>
  <div class="home-cols" style="margin-top:22px">
    <section class="card panel"><h3>Minutos por día</h3>
      <svg class="chart-line" viewBox="0 0 720 190" preserveAspectRatio="none">
        <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".18"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
        <path class="a" d="M${pts.join(' L')} L720,190 L0,190 Z"/>
        <path class="l" d="M${pts.join(' L')}"/>
      </svg>
    </section>
    <section class="card panel"><h3>Horario favorito</h3>
      ${hours.map(h=>`<div class="hbar-row"><span class="lbl mono" style="font-size:11px">${h[0]}</span><div class="bar"><i style="width:${(h[1]/48)*100}%"></i></div><span class="val">${h[1]} %</span></div>`).join('')}
      <p style="font-size:12px;color:var(--text3);margin-top:10px">Lees mejor entre las 21:00 y las 24:00. Comprensión media en esa franja: 93 %.</p>
    </section>
  </div>
  <div class="home-cols" style="margin-top:22px">
    <section class="card panel"><h3>Calendario de actividad</h3>
      <div class="heatcal">${Array.from({length:26*7},(_,i)=>{const r=Math.sin(i*7.13)*.5+.5;const l=r>.82?4:r>.62?3:r>.45?2:r>.3?1:0;return `<i class="${l?'l'+l:''}" title="${Math.round(r*60)} min"></i>`;}).join('')}</div>
      <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--text3);margin-top:8px"><span>Enero</span><span>Julio</span></div>
    </section>
    <section class="card panel"><h3>Lectura normal frente a RSVP</h3>
      ${[['Hábitos atómicos',272,412],['El nombre del viento',260,388],['Meditaciones',248,356],['Paper de IA',232,298]].map(r=>`
        <div style="margin-bottom:14px"><div style="font-size:12.5px;font-weight:540;margin-bottom:5px">${r[0]}</div>
        <div class="hbar-row" style="margin-bottom:4px"><span class="lbl" style="width:72px;font-size:11px">Normal</span><div class="bar"><i style="width:${r[1]/6.5}%;background:var(--text3)"></i></div><span class="val">${r[1]}</span></div>
        <div class="hbar-row" style="margin-bottom:0"><span class="lbl" style="width:72px;font-size:11px">RSVP</span><div class="bar"><i style="width:${r[2]/6.5}%"></i></div><span class="val">${r[2]}</span></div></div>`).join('')}
    </section>
  </div>
  <div class="home-cols" style="margin-top:22px">
    <section class="card panel"><h3>Distribución por velocidad</h3>
      ${[['250–350 ppm',18],['350–450 ppm',46],['450–550 ppm',27],['550+ ppm',9]].map(h=>`<div class="hbar-row"><span class="lbl mono" style="font-size:11px">${h[0]}</span><div class="bar"><i style="width:${h[1]*2}%"></i></div><span class="val">${h[1]} %</span></div>`).join('')}
    </section>
    <section class="card panel"><h3>Formatos y temas</h3>
      ${[['EPUB',58],['PDF',27],['Markdown',10],['TXT',5]].map(h=>`<div class="hbar-row"><span class="lbl">${h[0]}</span><div class="bar"><i style="width:${h[1]}%"></i></div><span class="val">${h[1]} %</span></div>`).join('')}
      <p style="font-size:12px;color:var(--text3);margin-top:8px">Tema más usado: <b>Paper</b> (62 %), seguido de Midnight en sesiones nocturnas.</p>
    </section>
  </div></div>`;
};

views.objetivos = () => `<div class="page"><h1 class="page-title">Objetivos y logros</h1><p class="page-sub">Pequeños compromisos diarios, resultados acumulados.</p>
  <div class="home-cols">
    <section class="card panel"><h3>Objetivos activos</h3>
      ${[['Minutos diarios','30 min','23 / 30',77],['Palabras diarias','8.000','6.240 / 8.000',78],['Racha','30 días','12 / 30',40],['Velocidad objetivo','500 ppm','412 / 500',82],['Libros este mes','2','1 / 2',50]].map(g=>`
        <div style="padding:11px 0;border-bottom:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:7px"><span style="font-weight:540">${g[0]}</span><span class="mono" style="font-size:11.5px;color:var(--text3)">${g[2]}</span></div>
          <div class="pbar"><i style="width:${g[3]}%"></i></div>
        </div>`).join('')}
      <button class="btn sm" style="margin-top:14px" onclick="toast('Nuevo objetivo creado','target')">${I.plus} Nuevo objetivo</button>
    </section>
    <section class="card panel"><h3>Logros</h3>
      <div style="display:flex;flex-direction:column;gap:9px">
      ${ACHIEVEMENTS.map(a=>`<div class="ach ${a.done?'':'locked'}"><div class="ach-medal">${a.done?I.check:I.trophy}</div>
        <div style="flex:1"><b style="font-size:13px">${a.name}</b><div style="font-size:11.5px;color:var(--text3)">${a.desc}</div></div>
        <span class="mono" style="font-size:10.5px;color:var(--text3)">${a.done?a.date:a.progress}</span></div>`).join('')}
      </div>
    </section>
  </div></div>`;

views.vocabulario = () => `<div class="page"><h1 class="page-title">Vocabulario</h1><p class="page-sub">${DEMO_VOCAB.length} palabras guardadas · 2 pendientes de repaso hoy.</p>
  <div class="lib-toolbar"><button class="btn primary sm" onclick="toast('Sesión de repaso iniciada','layers')">${I.layers} Repasar (2)</button><button class="btn sm">Exportar tarjetas</button></div>
  <div class="libgrid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
  ${DEMO_VOCAB.map(v=>`<div class="card vocab-card">
    <div style="display:flex;justify-content:space-between;align-items:center"><b class="serif" style="font-size:17px">${v.word}</b>
    <div class="level-dots">${[1,2,3,4,5].map(i=>`<i class="${i<=v.level?'on':''}"></i>`).join('')}</div></div>
    <p style="font-size:13px;color:var(--text2);line-height:1.5">${v.def}</p>
    <div class="note-meta" style="margin-top:2px"><span>${v.doc}</span><span>${v.date}</span><a style="margin-left:auto;cursor:pointer" onclick="toast('Contexto original abierto')">Ver contexto</a></div>
  </div>`).join('')}
  </div></div>`;

views.historial = () => `<div class="page"><h1 class="page-title">Historial de sesiones</h1><p class="page-sub">Todas tus sesiones de lectura, con métricas por sesión.</p>
  <div class="ll-head" style="grid-template-columns:1fr 110px 90px 90px 90px 80px"><span>Documento</span><span>Fecha</span><span>Modo</span><span>Duración</span><span>Velocidad</span><span>Compr.</span></div>
  ${DEMO_SESSIONS.map(s=>{const d=docById(s.doc);return `
    <div class="session-row" onclick="go('documento/${d.id}')" style="cursor:pointer">
      <div style="display:flex;gap:10px;align-items:center"><span class="hl-dot" style="background:${d.cover.accent}"></span><b style="font-size:13px">${d.title}</b></div>
      <span class="mono">${s.date}</span><span class="chip" style="font-size:10.5px">${s.mode}</span>
      <span class="mono">${s.mins} min</span><span class="mono">${s.wpm} ppm</span><span class="mono">${s.comp} %</span>
    </div>`;}).join('')}
</div>`;

views.perfil = () => `<div class="page" style="max-width:720px">
  <h1 class="page-title">Perfil</h1><p class="page-sub">Cuenta, dispositivos y sincronización.</p>
  <div class="card panel" style="display:flex;gap:18px;align-items:center;margin-bottom:18px">
    <div class="avatar" style="width:56px;height:56px;font-size:19px">${(DB.user?.email||'MD').slice(0,2).toUpperCase()}</div>
    <div style="flex:1"><b style="font-size:16px">${DB.user ? (DB.user.email.split('@')[0]) : 'Máximo Duperez'}</b><div style="font-size:13px;color:var(--text3)">${DB.user?.email || 'maximoduperez@gmail.com'}${DB.user?'':' · modo demo sin conexión'}</div></div>
    ${DB.user ? `<button class="btn sm" onclick="DB.signOut().then(()=>location.reload())">Cerrar sesión</button>` : `<span class="chip" style="background:color-mix(in srgb,var(--accent) 12%,var(--surface2));color:var(--accent);font-weight:600">Plan Pro</span>`}
  </div>
  <div class="card panel" style="margin-bottom:18px"><h3>Dispositivos y sincronización</h3>
    ${[['MacBook Pro de Máximo','Este dispositivo · Activo ahora',true],['iPhone 15','Última sincronización hace 20 min',false],['iPad Air','Última sincronización ayer',false]].map(d=>`
      <div class="setrow"><div><div class="sr-t">${d[0]}</div><div class="sr-d">${d[1]}</div></div>${d[2]?'<span class="sync-dot" style="margin:0"></span>':'<button class="btn ghost sm">Cerrar sesión</button>'}</div>`).join('')}
  </div>
  <div class="card panel" style="margin-bottom:18px"><h3>Almacenamiento y copias</h3>
    <div class="setrow"><div><div class="sr-t">Almacenamiento</div><div class="sr-d">1,2 GB de 10 GB utilizados</div></div><div style="width:140px" class="pbar"><i style="width:12%"></i></div></div>
    <div class="setrow"><div><div class="sr-t">Última copia de seguridad</div><div class="sr-d">Hoy, 14:02 · automática</div></div><button class="btn sm" onclick="toast('Copia de seguridad creada','refresh')">Crear ahora</button></div>
    <div class="setrow"><div><div class="sr-t">Exportar mis datos</div><div class="sr-d">Biblioteca, notas, estadísticas y vocabulario en JSON</div></div><button class="btn sm" onclick="toast('Exportación preparada, revisa tu correo')">Exportar</button></div>
  </div>
  <div class="card panel"><h3 style="color:#c04545">Zona de riesgo</h3>
    <div class="setrow"><div><div class="sr-t">Eliminar cuenta</div><div class="sr-d">Borra permanentemente tu cuenta y todos tus datos.</div></div><button class="btn sm" style="color:#c04545;border-color:color-mix(in srgb,#c04545 40%,var(--border))">Eliminar…</button></div>
  </div>
</div>`;

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
    ${tRow('Seguir el sistema','Cambia entre Paper y Midnight automáticamente',false)}
    ${sRow('Tamaño de interfaz','',100,85,130,'%')}
    ${tRow('Reducir transparencias','',false)}`;
  else if (tab==='lectura') body = `
    ${sRow('Tamaño de fuente','',S.reader.fs,14,26,'px',"S.reader.fs=+this.value;store.set('reader',S.reader)")}
    ${sRow('Interlineado','',Math.round(S.reader.lh*100),130,220,'%',"S.reader.lh=this.value/100;store.set('reader',S.reader)")}
    ${sRow('Ancho de columna','',S.reader.width,480,860,'px',"S.reader.width=+this.value;store.set('reader',S.reader)")}
    ${sRow('Espaciado entre letras','',0,-2,8,'')}
    ${sRow('Separación entre párrafos','',115,80,220,'%')}
    <div class="setrow"><div><div class="sr-t">Fuente</div></div><div class="seg">${['Serif','Sans','Dislexia'].map((f,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this)">${f}</button>`).join('')}</div></div>
    <div class="setrow"><div><div class="sr-t">Alineación</div></div><div class="seg">${['Izquierda','Justificada'].map((f,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this)">${f}</button>`).join('')}</div></div>
    <div class="setrow"><div><div class="sr-t">Desplazamiento</div></div><div class="seg">${['Continuo','Paginado'].map((f,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this)">${f}</button>`).join('')}</div></div>
    ${tRow('Modo enfoque','Atenúa todo excepto el párrafo actual',false)}
    ${tRow('Barra superior automática','Oculta la interfaz al hacer scroll',true)}`;
  else if (tab==='rsvp') body = rsvpSettingsBody();
  else if (tab==='comprension') body = `
    <div class="setrow"><div><div class="sr-t">Preguntas de comprensión</div><div class="sr-d">Una pregunta breve sobre el contenido cada cierto intervalo.</div></div>
    <div class="seg">${['Automáticas','V / F','Resumen','Examen','Off'].map((f,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this)">${f}</button>`).join('')}</div></div>
    ${sRow('Frecuencia','Cada cuántos minutos aparece una pregunta',10,3,30,'min')}
    ${tRow('Velocidad adaptativa','Ajusta la velocidad según la complejidad del texto',S.rsvp.adaptive,"S.rsvp.adaptive=this.classList.contains('on');saveRsvp()")}
    ${tRow('Heatmap de dificultad','Analiza qué capítulos son más complejos',true)}
    ${tRow('Rebobinado inteligente','Retrocede al inicio de la idea, no un número fijo de palabras',true)}`;
  else if (tab==='audio') body = `
    ${tRow('Lectura con voz','Sintetiza el texto sincronizado con el RSVP',false)}
    ${tRow('Sonido de ritmo','Un tic sutil que marca la cadencia',false)}
    ${sRow('Velocidad de voz','',100,60,180,'%')}
    <div class="setrow"><div><div class="sr-t">Voz</div></div><select class="input" style="width:200px"><option>Lucía (es-ES)</option><option>Mateo (es-MX)</option><option>Elena (es-AR)</option></select></div>`;
  else if (tab==='accesibilidad') body = `
    ${tRow('Alto contraste','',false)} ${tRow('Reducción de movimiento','Desactiva animaciones no esenciales',false)}
    ${tRow('Fuente para dislexia','',false)} ${tRow('Controles ampliados','',false)}
    ${tRow('Compatibilidad con lector de pantalla','',true)}
    ${sRow('Espaciado entre letras','',0,0,10,'')}
    <div class="setrow"><div><div class="sr-t">Daltonismo</div><div class="sr-d">Ajusta la paleta de acentos y resaltados.</div></div>
    <div class="seg">${['Ninguno','Protan.','Deutan.','Tritan.'].map((f,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this)">${f}</button>`).join('')}</div></div>`;
  else if (tab==='atajos') body = `<div class="kbd-grid">
    ${[['Reproducir / pausar','Espacio'],['Retroceder / avanzar palabra','← →'],['Avanzar por frase','⇧ ← →'],['Reiniciar frase','R'],['Pantalla completa','F'],['Cambiar tema','T'],['Crear marcador','M'],['Crear nota','N'],['Salir del modo inmersivo','Esc'],['Subir / bajar velocidad','+ −'],['Buscador global','⌘ K'],['Alternar lector ↔ RSVP','⇥ Tab']].map(k=>`<div class="kbd-row"><span>${k[0]}</span><kbd>${k[1]}</kbd></div>`).join('')}</div>`;
  else if (tab==='cuenta') body = `
    <div class="field"><label>Nombre</label><input class="input" value="Máximo Duperez"></div>
    <div class="field"><label>Correo</label><input class="input" value="maximoduperez@gmail.com"></div>
    <div class="setrow"><div><div class="sr-t">Plan</div><div class="sr-d">Pro anual · se renueva el 4 de enero de 2027</div></div><button class="btn sm">Gestionar</button></div>`;
  else if (tab==='idioma') body = `
    <div class="setrow"><div><div class="sr-t">Idioma de la interfaz</div></div><select class="input" style="width:200px"><option>Español</option><option>English</option><option>Português</option></select></div>
    <div class="setrow"><div><div class="sr-t">Idioma de lectura por defecto</div><div class="sr-d">Usado para diccionario, silabeo y detección de frases.</div></div><select class="input" style="width:200px"><option>Detectar automáticamente</option><option>Español</option><option>Inglés</option></select></div>
    ${tRow('Traducción en el diccionario','Muestra traducción al pausar sobre una palabra',true)}`;
  else if (tab==='sincronizacion') body = `${tRow('Sincronización automática','',true)} ${tRow('Sincronizar solo con Wi-Fi','',false)} ${tRow('Sincronizar posición de lectura','',true)} ${tRow('Sincronizar estadísticas','',true)}
    <div class="setrow"><div><div class="sr-t">Estado</div><div class="sr-d">Última sincronización: hoy, 16:42</div></div><button class="btn sm" onclick="toast('Sincronizado','refresh')">Sincronizar ahora</button></div>`;
  else if (tab==='privacidad') body = `${tRow('Estadísticas anónimas de uso','',false)} ${tRow('Procesamiento local de documentos','Los archivos nunca salen de tus dispositivos',true)} ${tRow('Bloquear con Face ID / Touch ID','',false)}`;
  else body = `<div class="setrow"><div><div class="sr-t">Exportar notas</div><div class="sr-d">Markdown, HTML o CSV con referencias.</div></div><button class="btn sm" onclick="toast('Notas exportadas')">Exportar</button></div>
    <div class="setrow"><div><div class="sr-t">Exportar estadísticas</div></div><button class="btn sm">CSV</button></div>
    <div class="setrow"><div><div class="sr-t">Borrar caché local</div><div class="sr-d">1,2 GB en portadas y documentos procesados.</div></div><button class="btn sm">Borrar</button></div>`;
  return `<div class="page"><h1 class="page-title">Ajustes</h1><p class="page-sub">Personaliza cada detalle de Focal.</p>
  <div class="settings-layout">
    <nav class="set-nav">${SET_SECTIONS.map(s=>`<button class="${tab===s?'on':''}" onclick="S.setTab='${s}';render()">${SET_LABELS[s]}</button>`).join('')}</nav>
    <div class="card panel">${body}</div>
  </div></div>`;
};
function segSel(btn){ [...btn.parentElement.children].forEach(b=>b.classList.remove('on')); btn.classList.add('on'); }
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
      ${sRow('Redondeado','',8,0,20,'px')} ${sRow('Intensidad de sombras','',40,0,100,'%')} ${sRow('Temperatura','',50,0,100,'')}
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:20px">
        <button class="btn" onclick="closeModal()">Cancelar</button>
        <button class="btn primary" onclick="saveCustomTheme()">Guardar y aplicar</button>
      </div>
    </div>`);
  ctPrev();
}
function toHex(c){ if(!c) return '#888888'; if(c.startsWith('#')) return c.length===4? '#'+[...c.slice(1)].map(x=>x+x).join('') : c.slice(0,7); return '#888888'; }
function ctPrev(){
  const p = document.getElementById('ct-prev'); if(!p) return;
  p.style.background = _ct.bg; p.style.color = _ct.text; p.style.borderColor = _ct.border;
  document.getElementById('ct-orp').style.color = _ct.orp;
}
function saveCustomTheme(){
  S.custom = { name:'Mi tema', desc:'Personalizado', vars:{..._ct, shadow:'rgba(0,0,0,.15)'} };
  store.set('customTheme', S.custom); applyTheme('custom'); closeModal(); render(); toast('Tema personalizado guardado','sun');
}

/* ---------- Detalle de documento ---------- */
views.documento = (id) => {
  const d = docById(id); if(!d) return views.biblioteca();
  const toc = ['Prólogo','Capítulo 1','Capítulo 2','Capítulo 3','Capítulo 4','Capítulo 5'];
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
        </div>
        <p style="font-size:12px;color:var(--text3);margin-top:14px">Este capítulo tardaría <b>42 min</b> en lectura normal y <b>19 min</b> a tu velocidad RSVP actual.</p>
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
        ${toc.map((c,i)=>`<button class="toc-item ${i===2?'on':''}" onclick="go('lector/${d.id}')"><span>${c}</span><span>${i<3?'✓':(12+i*9)+' min'}</span></button>`).join('')}
      </section>
      <section class="card panel"><h3>Notas en este documento <a onclick="go('notas');return false" href="#/notas">Ver todas</a></h3>
        ${DEMO_NOTES.filter(n=>n.doc===d.id).map(n=>`<div style="padding:10px 0;border-bottom:1px solid var(--border)"><div class="serif" style="font-size:13.5px;padding-left:10px;border-left:2.5px solid ${HL_COLORS[n.color]};line-height:1.5">“${n.text}”</div></div>`).join('') || '<p style="font-size:13px;color:var(--text3)">Aún no hay notas. Subraya durante la lectura para verlas aquí.</p>'}
        <h3 style="margin-top:22px">Heatmap de dificultad</h3>
        <div style="display:flex;gap:3px;align-items:flex-end;height:44px">
          ${Array.from({length:30},(_,i)=>{const v=Math.abs(Math.sin(i*1.7))*.9+.1;return `<i style="flex:1;height:${v*100}%;border-radius:2px;background:color-mix(in srgb,var(--accent) ${Math.round(v*85)}%,var(--surface2))" title="Sección ${i+1}"></i>`;}).join('')}
        </div>
        <p style="font-size:11.5px;color:var(--text3);margin-top:8px">Los capítulos 4 y 5 concentran la mayor densidad léxica. Focal reducirá la velocidad un 8 % en esas secciones.</p>
      </section>
    </div>
  </div>`;
};

/* ---------- Lector tradicional ---------- */
views.lector = (id) => {
  const d = docById(id) || DEMO_DOCS[0];
  const text = docText(d.id) || DEMO_TEXTS.habitos;
  const paras = text.split(/(?<=\.)\s+(?=[A-ZÁÉÍÓÚ¿L])/g).reduce((acc,s)=>{ // agrupar frases en párrafos
    if (!acc.length || acc[acc.length-1].split(' ').length > 70) acc.push(s); else acc[acc.length-1]+=' '+s; return acc; },[]);
  setTimeout(initReader, 30);
  return `<div class="reader" id="reader">
    <div class="read-prog" id="readprog" style="width:${d.progress*100}%"></div>
    <div class="reader-top">
      <button class="tb-icon" onclick="go('documento/${d.id}')">${I.back}</button>
      <div class="reader-title">${d.title} <span>· ${d.chapter}</span></div>
      <div style="flex:1"></div>
      <button class="tb-icon" title="Contenidos" onclick="document.getElementById('toc-panel').classList.toggle('open')">${I.list}</button>
      <button class="tb-icon" title="Notas" onclick="document.getElementById('notes-panel').classList.toggle('open')">${I.note}</button>
      <button class="tb-icon" title="Buscar en el texto" onclick="toast('Búsqueda en el documento')">${I.search}</button>
      <button class="tb-icon" title="Ajustes de lectura" onclick="openReadCtrl()">${I.sliders}</button>
      <button class="btn accent sm" onclick="go('rsvp/${d.id}')">${I.zap} RSVP</button>
    </div>
    <div class="reader-body" id="rbody">
      <div class="reader-col" style="--read-w:${S.reader.width}px;--read-fs:${S.reader.fs}px;--read-lh:${S.reader.lh}">
        <p class="ch-label">${d.chapter}</p>
        <h2>${d.title}</h2>
        <p style="color:var(--text3);font-family:var(--sans);font-size:12.5px;margin-bottom:2.2em">${d.author} · ${Math.round(d.progress*100)} % completado</p>
        ${paras.map(p=>`<p>${p}</p>`).join('')}
        <p style="text-align:center;color:var(--text3);font-family:var(--sans);font-size:12px;margin-top:3em">· · ·</p>
      </div>
    </div>
    <div class="minimap"><i style="top:${d.progress*70}%;height:9%"></i></div>
    <div class="reader-foot"><span>${d.chapter}</span><span>·</span><span>${Math.round(d.progress*100)} %</span><span>·</span><span>${d.timeLeft} restante</span></div>
    <aside class="side-panel left" id="toc-panel">
      <div class="sp-h">Contenidos <button class="modal-x" onclick="this.closest('.side-panel').classList.remove('open')">${I.x}</button></div>
      <div class="sp-b">${['Prólogo','Capítulo 1 — El poder sorprendente','Capítulo 2 — Identidad','Capítulo 3 — Cuatro pasos','Capítulo 4 — El hombre que no parecía','Capítulo 5 — La mejor manera'].map((c,i)=>`<button class="toc-item ${i===1?'on':''}">${c}</button>`).join('')}</div>
    </aside>
    <aside class="side-panel" id="notes-panel">
      <div class="sp-h">Notas y destacados <button class="modal-x" onclick="this.closest('.side-panel').classList.remove('open')">${I.x}</button></div>
      <div class="sp-b">${DEMO_NOTES.filter(n=>n.doc===d.id).map(n=>`<div class="card" style="padding:12px 14px;margin-bottom:10px;--hl:${HL_COLORS[n.color]}"><div class="note-q serif" style="font-size:13px">“${n.text}”</div>${n.note?`<div class="note-n" style="font-size:12px">${n.note}</div>`:''}</div>`).join('') || '<p style="font-size:12.5px;color:var(--text3);padding:10px">Selecciona texto para subrayar o crear una nota.</p>'}</div>
    </aside>
  </div>`;
};
function initReader(){
  const body = document.getElementById('rbody'), reader = document.getElementById('reader');
  if (!body) return;
  let last = 0;
  body.addEventListener('scroll', ()=>{
    const y = body.scrollTop;
    reader.classList.toggle('hide-ui', y > last && y > 80);
    last = y;
    const p = y / (body.scrollHeight - body.clientHeight);
    const prog = document.getElementById('readprog'); if (prog) prog.style.width = (34 + p*10) + '%';
  });
}
function openReadCtrl(){
  openModal(`
    <div class="modal-h"><h3>Ajustes de lectura</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
    <div class="modal-b">
      ${sRow('Tamaño de fuente','',S.reader.fs,14,26,'px',"document.querySelector('.reader-col').style.setProperty('--read-fs',this.value+'px')")}
      ${sRow('Interlineado','',Math.round(S.reader.lh*100),130,220,'%',"document.querySelector('.reader-col').style.setProperty('--read-lh',this.value/100)")}
      ${sRow('Ancho de columna','',S.reader.width,480,860,'px',"document.querySelector('.reader-col').style.setProperty('--read-w',this.value+'px')")}
      ${sRow('Brillo','',100,40,100,'%')} ${sRow('Márgenes','',48,16,120,'px')}
      <div class="setrow"><div class="sr-t">Alineación</div><div class="seg"><button class="on" onclick="segSel(this);document.querySelector('.reader-col').style.setProperty('--read-align','left')">Izquierda</button><button onclick="segSel(this);document.querySelector('.reader-col').style.setProperty('--read-align','justify')">Justificada</button></div></div>
      <div class="setrow"><div class="sr-t">Fuente</div><div class="seg"><button class="on" onclick="segSel(this);document.querySelector('.reader-col').style.fontFamily='var(--serif)'">Literata</button><button onclick="segSel(this);document.querySelector('.reader-col').style.fontFamily='var(--sans)'">Inter</button></div></div>
      ${tRow('Modo enfoque','Atenúa los párrafos no activos',false)}
    </div>`);
}

/* ---------- Motor RSVP ---------- */
const RSVP = {
  words:[], i:0, playing:false, timer:null, doc:null, idleTimer:null,
  startedAt:0, wordsRead:0, maxWpm:0, pauses:0, rewinds:0,
};
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
  const d = docById(id) || DEMO_DOCS[0];
  RSVP.doc = d; RSVP.words = tokenize(docText(d.id) || DEMO_TEXTS.habitos);
  RSVP.i = Math.floor(RSVP.words.length * .1); RSVP.playing=false;
  RSVP.startedAt = Date.now(); RSVP.wordsRead=0; RSVP.maxWpm=S.rsvp.wpm; RSVP.pauses=0; RSVP.rewinds=0;
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
      <button class="rb-btn" title="Retroceder 10 (←)" onclick="rsvpSkip(-10)">${I.prev10}</button>
      <button class="rb-btn play" id="playbtn" onclick="rsvpToggle()">${I.play}</button>
      <button class="rb-btn" title="Avanzar 10 (→)" onclick="rsvpSkip(10)">${I.next10}</button>
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
    <div class="setrow"><div class="sr-t">Entrenador ocular</div><button class="btn sm" onclick="toast('Sesión de entrenamiento: seguimiento de ORP · 3 min')">Iniciar</button></div>
    <div class="setrow"><div class="sr-t">Modo relectura</div><button class="btn sm" onclick="toast('Selecciona una sección para repetirla al 70 % de velocidad')">Activar</button></div>`;
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
  else { clearTimeout(RSVP.timer); wrap.classList.remove('idle'); RSVP.pauses++; showWord(false); }
}
function scheduleNext(extra){
  clearTimeout(RSVP.timer);
  const w = RSVP.words[RSVP.i] || '';
  RSVP.timer = setTimeout(()=>{
    if (!RSVP.playing) return;
    RSVP.i += S.rsvp.chunk; RSVP.wordsRead += S.rsvp.chunk;
    if (RSVP.i >= RSVP.words.length){ rsvpToggle(); endSession(); return; }
    showWord(true); scheduleNext(0);
  }, wordDelay(w) + extra);
}
function armIdle(){
  const wrap = document.getElementById('rsvpwrap'); if (!wrap) return;
  if (!S.rsvp.autohide) return;
  clearTimeout(RSVP.idleTimer);
  wrap.classList.remove('idle');
  RSVP.idleTimer = setTimeout(()=>{ if (RSVP.playing) wrap.classList.add('idle'); }, 1600);
}
function rsvpSkip(n){ if(n<0) RSVP.rewinds++; RSVP.i = Math.max(0, Math.min(RSVP.words.length-1, RSVP.i+n)); showWord(false); if (RSVP.playing) scheduleNext(160); }
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
  wrap.addEventListener('wheel', e=>{ rsvpSpeed(e.deltaY<0?10:-10); e.preventDefault(); }, {passive:false});
  const stage = document.getElementById('stage');
  let tx=null;
  stage.addEventListener('touchstart', e=>tx=e.touches[0].clientX, {passive:true});
  stage.addEventListener('touchend', e=>{ if(tx===null)return; const dx=e.changedTouches[0].clientX-tx; if(Math.abs(dx)>60) rsvpSentence(dx>0?-1:1); else rsvpToggle(); tx=null; }, {passive:true});
}
function rsvpExit(){ clearTimeout(RSVP.timer); RSVP.playing=false; go('documento/'+RSVP.doc.id); }
function toggleFS(){ if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(()=>{}); }
function saveVocabWord(word){
  const definition = `Acción y efecto relacionados con «${word.toLowerCase()}». Definición obtenida del diccionario integrado.`;
  const docId = RSVP.doc?.id || null;
  DEMO_VOCAB.unshift({ word, def: definition, doc: docId ? docById(docId)?.title : '—', date: 'Ahora mismo', level: 1 });
  if (DB.user) DB.addVocabWord({ word, definition, docId, level:1 }).catch(console.error);
  closeModal(); toast('Guardada en tu vocabulario','layers');
}
function quickNote(){
  const doc = RSVP.doc; if (!doc) { toast('Nota rápida creada','note'); return; }
  const chunk = RSVP.words.slice(RSVP.i, RSVP.i + S.rsvp.chunk).join(' ');
  const [s,e] = sentenceBounds(RSVP.i);
  const quote = RSVP.words.slice(s,e+1).join(' ');
  const colors = ['amber','green','blue','rose']; const color = colors[Math.floor(Math.random()*colors.length)];
  const entry = { id: 'local-'+Date.now(), doc: doc.id, color, text: quote || chunk, note: '', chapter: doc.chapter, date: 'Ahora mismo' };
  DEMO_NOTES.unshift(entry);
  if (DB.user) DB.addNote(doc.id, { color, quote: entry.text, note: '', chapter: doc.chapter }).catch(console.error);
  toast('Nota rápida creada','note');
}
function quickBookmark(){
  if (!RSVP.doc) { toast('Marcador guardado','bookmark'); return; }
  toast(`Marcador guardado en «${RSVP.doc.title}» · ${S.rsvp.wpm} ppm · ${THEMES[S.theme]?.name||S.theme}`, 'bookmark');
}
function openDict(word){
  openModal(`<div class="modal-h"><h3 class="serif" style="font-family:var(--serif);font-size:20px">${word}</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <p style="font-size:11px;color:var(--text3);font-family:var(--mono);margin-bottom:10px">/${word.toLowerCase()}/ · sustantivo</p>
    <p style="font-size:14px;line-height:1.6;margin-bottom:14px">Acción y efecto relacionados con «${word.toLowerCase()}». Definición obtenida del diccionario integrado, con ejemplos de uso en tu documento.</p>
    <p style="font-size:12.5px;color:var(--text2)"><b>Sinónimos:</b> término, expresión, vocablo · <b>EN:</b> ${word.toLowerCase()}</p>
    <div style="display:flex;gap:8px;margin-top:18px">
      <button class="btn primary sm" onclick="saveVocabWord('${word.replace(/'/g,"\\'")}')">Guardar en vocabulario</button>
      <button class="btn sm" onclick="toast('Pronunciación reproducida')">Escuchar</button>
      <button class="btn ghost sm" onclick="closeModal()">Ver contexto</button>
    </div>
  </div>`);
}
function openPomodoro(){
  openModal(`<div class="modal-h"><h3>Sesión temporizada</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
  <div class="modal-b">
    <p style="font-size:13px;color:var(--text2);margin-bottom:16px">Lectura por intervalos con descansos. Las estadísticas se registran por sesión.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">${[10,15,20,25,30,45,60].map(m=>`<button class="btn sm ${m===25?'primary':''}" onclick="segSel(this)">${m} min</button>`).join('')}</div>
    ${sRow('Descanso','',5,2,15,'min')} ${tRow('Sonido al terminar','',true)} ${tRow('Objetivo de palabras','8.000 en esta sesión',false)}
    <button class="btn accent" style="width:100%;margin-top:16px;justify-content:center" onclick="closeModal();toast('Pomodoro de 25 min iniciado','timer')">${I.play} Empezar sesión</button>
  </div>`);
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
  const mins = Math.max(1, Math.round((Date.now()-RSVP.startedAt)/60000));
  const words = Math.max(RSVP.wordsRead, 120);
  const comp = Math.round(85 + Math.random()*11);
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
      <div class="stat"><b>${comp}<em> %</em></b><span>comprensión</span></div>
    </div>
    <div class="smart-tip" style="margin-top:0">${I.spark}<div>A este ritmo terminarás <b>${RSVP.doc.title}</b> el <b>martes 22 de julio</b>. Has leído un ${Math.round(words/RSVP.doc.words*100)||1} % del documento en esta sesión.</div></div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn" style="flex:1;justify-content:center" onclick="closeModal();toast('Tarjeta de sesión copiada','star')">Compartir tarjeta</button>
      <button class="btn primary" style="flex:1;justify-content:center" onclick="closeModal();go('inicio')">Terminar</button>
      <button class="btn accent" style="flex:1;justify-content:center" onclick="closeModal();rsvpToggle()">Seguir leyendo</button>
    </div>
  </div>`);
}

/* ---------- Modo estudio ---------- */
views.estudio = (id) => {
  const d = docById(id) || DEMO_DOCS[0];
  const text = docText(d.id) || DEMO_TEXTS.habitos;
  RSVP.doc = d; RSVP.words = tokenize(text); RSVP.i = 0; RSVP.playing = false;
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
        <button class="rb-btn" onclick="rsvpSkip(-10)">${I.prev10}</button>
        <button class="rb-btn" onclick="rsvpSkip(10)">${I.next10}</button>
        <div class="rb-speed"><button onclick="rsvpSpeed(-25)">−</button><b id="wpmval">${S.rsvp.wpm} ppm</b><button onclick="rsvpSpeed(25)">+</button></div>
      </div>
    </section>
    <section><div class="st-label">Notas</div><textarea class="input" style="height:120px;resize:none" placeholder="Escribe mientras escuchas el ritmo del texto…"></textarea></section>
    <section><div class="st-label">Conceptos clave</div>
      ${['Interés compuesto de los hábitos','Sistemas frente a metas','Mejora del 1 % diario','Identidad y comportamiento'].map(c=>`<div class="chip" style="margin:0 6px 8px 0;display:inline-flex">${c}</div>`).join('')}
    </section>
  </div>`;
};

/* ---------- Importación ---------- */
function openImport(){
  openModal(`
    <div class="modal-h"><h3>Importar documentos</h3><button class="modal-x" onclick="closeModal()">${I.x}</button></div>
    <div class="modal-b">
      <div class="imp-tabs">
        ${['Archivos','Desde URL','Pegar texto','Portapapeles'].map((t,i)=>`<button class="${i===0?'on':''}" onclick="segSel(this);impTab(${i})">${t}</button>`).join('')}
      </div>
      <div id="imp-body">
        <div class="dropzone" id="dz" onclick="simulateImport()" ondragover="event.preventDefault();this.classList.add('over')" ondragleave="this.classList.remove('over')" ondrop="event.preventDefault();this.classList.remove('over');simulateImport()">
          <div class="dz-ico">${I.upload}</div>
          <b style="font-size:14px">Arrastra tus archivos aquí</b>
          <p style="font-size:12.5px;color:var(--text3);margin-top:5px">o haz clic para seleccionarlos · varios a la vez</p>
          <div class="fmt-row">${['PDF','EPUB','TXT','HTML','MD','DOCX'].map(f=>`<span class="ftype">${f}</span>`).join('')}</div>
        </div>
        <div id="imp-queue"></div>
        <div class="setrow" style="margin-top:14px"><div><div class="sr-t">OCR para PDF escaneado</div><div class="sr-d">Reconoce texto en documentos digitalizados.</div></div><button class="toggle" onclick="this.classList.toggle('on')"></button></div>
        <div class="setrow"><div><div class="sr-t">Idioma del documento</div></div><select class="input" style="width:170px"><option>Detectar automáticamente</option><option>Español</option><option>Inglés</option></select></div>
      </div>
    </div>`);
}
function impTab(i){
  const b = document.getElementById('imp-body').firstElementChild;
  if (i===1) b.outerHTML = `<div id="dz"><div class="field"><label>Dirección URL</label><input class="input" placeholder="https://ejemplo.com/articulo"></div><button class="btn primary" style="width:100%;justify-content:center" onclick="simulateImport()">Importar artículo</button></div>`;
  else if (i===2) b.outerHTML = `<div id="dz"><textarea class="input" style="height:140px;resize:none" placeholder="Pega aquí cualquier texto…"></textarea><button class="btn primary" style="width:100%;justify-content:center;margin-top:10px" onclick="simulateImport()">Crear documento</button></div>`;
  else if (i===3) b.outerHTML = `<div id="dz" class="dropzone" onclick="simulateImport()"><div class="dz-ico">${I.doc}</div><b style="font-size:14px">Importar desde el portapapeles</b><p style="font-size:12.5px;color:var(--text3);margin-top:5px">Se detectó texto copiado hace 2 min · 1.240 palabras</p></div>`;
  else { closeModal(); openImport(); }
}
function simulateImport(){
  const q = document.getElementById('imp-queue'); if (!q) return;
  q.innerHTML = `<div class="imp-file"><div class="fi">PDF</div>
    <div style="flex:1;min-width:0"><b style="font-size:13px">arquitectura-de-software.pdf</b>
    <div style="font-size:11px;color:var(--text3)" id="imp-status">Extrayendo texto y portada…</div>
    <div class="imp-prog"><i></i></div></div>
    <span class="mono" style="font-size:10.5px;color:var(--text3)">4,2 MB</span></div>`;
  setTimeout(()=>{ const s=document.getElementById('imp-status'); if(s) s.textContent='Detectando título, autor e idioma…'; }, 1200);
  setTimeout(()=>{ const s=document.getElementById('imp-status'); if(s){ s.textContent='Listo · «Arquitectura de software» · Español · 214 páginas'; s.previousElementSibling?.remove(); s.parentElement.querySelector('.imp-prog')?.remove(); } }, 2400);
  setTimeout(()=>{ closeModal(); toast('Documento importado a tu biblioteca','check'); }, 3300);
}

/* ---------- Command palette ---------- */
let cmdkSel = 0;
const CMDK_ITEMS = [
  ['doc','Hábitos atómicos','James Clear · 62 %',"go('documento/habitos')"],
  ['doc','El nombre del viento','Patrick Rothfuss · 34 %',"go('documento/viento')"],
  ['doc','Meditaciones','Marco Aurelio · 81 %',"go('documento/meditaciones')"],
  ['zap','Empezar sesión RSVP','último documento',"go('rsvp/habitos')"],
  ['upload','Importar documento','⌘I','openImport()'],
  ['sun','Cambiar tema','T',"go('ajustes');S.setTab='apariencia'"],
  ['stats','Abrir estadísticas','',"go('estadisticas')"],
  ['collections','Crear colección','',"toast('Colección creada')"],
  ['eye','Activar modo concentración','',"toast('Modo concentración activado','eye')"],
  ['gauge','Cambiar velocidad — 420 ppm','+ / −',"go('ajustes');S.setTab='rsvp'"],
  ['book','Ir al último documento','',"go('lector/habitos')"],
  ['target','Calibrar velocidad','',"go('calibracion')"],
];
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
  const items = CMDK_ITEMS.filter(it => (it[1]+it[2]).toLowerCase().includes(q.toLowerCase()));
  cmdkSel = Math.min(cmdkSel, Math.max(0,items.length-1));
  window._cmdkItems = items;
  document.getElementById('cmdk-list').innerHTML =
    `<div class="cmdk-sec">${q?'Resultados':'Documentos y acciones'}</div>` +
    (items.length ? items.map((it,i)=>`<div class="cmdk-item ${i===cmdkSel?'sel':''}" onmouseenter="cmdkSel=${i};renderCmdk(document.getElementById('cmdk-in').value)" onclick="closeModal();${it[3]}">${I[it[0]]||I.doc}<span>${it[1]}</span><span class="ck-sub">${it[2]}</span></div>`).join('')
    : `<div class="empty" style="padding:30px"><p style="margin:0">Sin resultados para «${q}». Prueba con un título, una nota o una acción.</p></div>`);
}
function cmdkKeys(e){
  const items = window._cmdkItems || [];
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
function runCalib(){
  RSVP.words = tokenize(DEMO_TEXTS.meditaciones); RSVP.i = 0;
  let wpm = 300, n = 0;
  const step = () => {
    const el = document.getElementById('word'); if (!el) return;
    const w = RSVP.words[RSVP.i % RSVP.words.length]; RSVP.i++; n++;
    const oi = orpIndex(w);
    el.innerHTML = `<span class="pre" style="flex:1;text-align:right">${esc(w.slice(0,oi))}</span><span class="orp">${esc(w[oi]||'')}</span><span class="post" style="flex:1;text-align:left">${esc(w.slice(oi+1))}</span>`;
    if (n % 30 === 0){ wpm += 40; const e2=document.getElementById('calib-wpm'); if(e2) e2.textContent = wpm; }
    const p=document.getElementById('calib-prog'); if(p) p.style.width = Math.min(100, n/1.8)+'%';
    if (n < 180) RSVP.timer = setTimeout(step, 60000/wpm);
    else finishCalib();
  };
  step();
}
function finishCalib(){
  clearTimeout(RSVP.timer);
  openModal(`<div class="modal-b" style="text-align:center;padding-top:30px">
    <p class="eyebrow">Resultado de calibración</p>
    <div class="calib-num">420 <em>ppm recomendadas</em></div>
    <div class="sum-grid" style="text-align:left">
      <div class="stat"><b>380<em> ppm</em></b><span>velocidad cómoda</span></div>
      <div class="stat"><b>540<em> ppm</em></b><span>velocidad máxima</span></div>
      <div class="stat"><b>93<em> %</em></b><span>comprensión</span></div>
    </div>
    <p style="font-size:13px;color:var(--text2);margin-bottom:18px">Duración ideal de sesión: <b>22 minutos</b>. Repite la calibración cada pocas semanas: tu velocidad mejorará con la práctica.</p>
    <button class="btn primary" onclick="S.rsvp.wpm=420;saveRsvp();closeModal();go('inicio');toast('Velocidad ajustada a 420 ppm','gauge')">Aplicar 420 ppm</button>
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
  <div class="dropzone" style="margin-bottom:20px" onclick="toast('Usa el texto de demo para continuar')">
    <div class="dz-ico">${I.upload}</div><b style="font-size:14px">Arrastra un archivo</b>
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
  <p class="mono" style="font-family:var(--mono);font-size:12px;color:var(--text3)">Tu velocidad recomendada inicial es de <b style="color:var(--accent)">420 palabras por minuto</b></p>
  <div class="onb-actions" style="margin-top:26px"><button class="btn primary" onclick="finishOnb()">Entrar en Focal</button></div>`;
function finishOnb(){ clearTimeout(onbTimer); S.onboarded = true; store.set('onboarded', true); go('inicio'); }

/* ---------- Router ---------- */
function go(route){ location.hash = '#/' + route; }
function render(){
  clearTimeout(RSVP.timer); clearTimeout(onbTimer);
  const hash = location.hash.replace(/^#\//,'') || (S.onboarded ? 'inicio' : 'onboarding');
  if (hash === 'onboarding'){ onbStep = 0; renderOnboarding(); return; }
  const [name, arg] = hash.split('/');
  const fn = views[name] || views.inicio;
  if (name==='lector' || name==='rsvp' || name==='calibracion'){
    document.getElementById('app').innerHTML = shell(name, '') ;
    document.getElementById('view').innerHTML = fn(arg);
  } else {
    document.getElementById('app').innerHTML = shell(name, fn(arg));
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
  if (e.key==='Escape'){ closeModal(); if (document.fullscreenElement) document.exitFullscreen(); return; }
  if (!inRsvp) return;
  if (e.key===' '){ e.preventDefault(); rsvpToggle(); }
  else if (e.key==='ArrowLeft'){ e.shiftKey ? rsvpSentence(-1) : rsvpSkip(-10); }
  else if (e.key==='ArrowRight'){ e.shiftKey ? rsvpSentence(1) : rsvpSkip(10); }
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
async function bootFocal(){
  if (!DB.configured()){
    // Sin Supabase configurado: modo demo local (localStorage), como antes.
    applyTheme(S.theme); render(); return;
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
  applyTheme(S.theme); render();
}

/* ---------- Init ---------- */
bootFocal();
