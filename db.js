// Focal — capa de datos sobre Supabase (auth + persistencia por usuario).
'use strict';

const DB = { client: null, user: null, ready: false };

DB.configured = () => !!(CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY);

DB.init = async function () {
  if (!DB.configured()) return null;
  DB.client = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
  const { data: { session } } = await DB.client.auth.getSession();
  DB.user = session?.user || null;
  return DB.user;
};

DB.onAuthChange = (cb) => {
  if (!DB.client) return;
  DB.client.auth.onAuthStateChange((event, session) => cb(session?.user || null, event));
};

/* ---------- Registro / acceso con usuario y contraseña ---------- */
DB.signUp = async ({ email, password, username, displayName, birthdate, country }) => {
  const { data, error } = await DB.client.auth.signUp({
    email, password,
    options: {
      emailRedirectTo: window.location.origin,
      data: { username, display_name: displayName || username, birthdate: birthdate || null, country: country || null },
    },
  });
  if (error) throw error;
  return data; // data.session === null cuando se requiere confirmar el correo
};
DB.signInWithPassword = async (email, password) => {
  const { data, error } = await DB.client.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};
// Enlace mágico (opcional, se conserva como alternativa sin contraseña).
DB.signInWithEmail = async (email) => {
  const { error } = await DB.client.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin } });
  if (error) throw error;
};
DB.resetPassword = async (email) => {
  const { error } = await DB.client.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin });
  if (error) throw error;
};
DB.updatePassword = async (password) => {
  const { error } = await DB.client.auth.updateUser({ password });
  if (error) throw error;
};
DB.resendConfirmation = async (email) => {
  const { error } = await DB.client.auth.resend({ type: 'signup', email });
  if (error) throw error;
};
// Comprueba disponibilidad del nombre de usuario (requiere política de lectura pública en profiles).
DB.usernameTaken = async (username) => {
  try{
    const { data } = await DB.client.from('profiles').select('id').eq('username', username).maybeSingle();
    return !!data;
  }catch(e){ return false; }
};

DB.signOut = () => DB.client.auth.signOut();

/* ---------- Catálogo + progreso (fusionados en la forma que espera la UI) ---------- */
DB.loadLibrary = async function () {
  const uid = DB.user.id;
  // IMPORTANTE: no se pide `content`. El texto de cada libro puede pesar megas y descargarlo
  // para toda la biblioteca en el arranque satura la red y la memoria (sobre todo en móvil).
  // Se carga bajo demanda al abrir un documento (ver DB.loadDocContent).
  const COLS = 'id,owner_id,title,author,type,pages,words,tags,collection,cover,added_at';
  const [{ data: docs, error: e1 }, { data: prog, error: e2 }] = await Promise.all([
    DB.client.from('documents').select(COLS).order('added_at', { ascending: false }),
    DB.client.from('progress').select('*').eq('user_id', uid),
  ]);
  if (e1) throw e1; if (e2) throw e2;
  const byDoc = Object.fromEntries((prog || []).map(p => [p.doc_id, p]));
  DEMO_TEXTS_LIVE = {};
  const merged = (docs || []).map(d => {
    const p = byDoc[d.id] || {};
    return {
      id: d.id, title: d.title, author: d.author, type: d.type, pages: d.pages, words: d.words,
      tags: d.tags || [], collection: d.collection, cover: d.cover || { bg:'#ccc', fg:'#111', accent:'#888', ratio:1.4, label:'?' },
      added: fmtDate(d.added_at),
      progress: Number(p.progress || 0), chapter: p.chapter || '', lastRead: p.last_read ? relDate(p.last_read) : 'Nunca',
      avgWpm: p.avg_wpm || 0, sessions: p.sessions || 0, timeLeft: p.time_left || '—', readTime: p.read_time || '0 min',
      fav: !!p.favorite, done: !!p.done, archived: !!p.archived,
      demo: d.owner_id == null, // documentos de catálogo (sin dueño) = demo
    };
  });
  return merged;
};

// Carga el texto de UN documento bajo demanda (al abrirlo en el lector/RSVP).
DB.loadDocContent = async function (docId) {
  const { data, error } = await DB.client.from('documents').select('content').eq('id', docId).maybeSingle();
  if (error) throw error;
  return data ? (data.content || '') : '';
};

DB.upsertProgress = async function (docId, patch) {
  const row = { user_id: DB.user.id, doc_id: docId, updated_at: new Date().toISOString(), ...patch };
  const { error } = await DB.client.from('progress').upsert(row, { onConflict: 'user_id,doc_id' });
  if (error) throw error;
};

DB.toggleFavorite = async function (docId, fav) {
  await DB.upsertProgress(docId, { favorite: fav });
};

// Borra un documento propio (RLS impide borrar los del catálogo compartido).
// Devuelve cuántas filas se borraron (0 = era un documento demo global).
DB.deleteDocument = async function (docId) {
  const { data, error } = await DB.client.from('documents').delete().eq('id', docId).eq('owner_id', DB.user.id).select('id');
  if (error) throw error;
  // El progreso propio se limpia siempre (aunque el documento sea demo).
  await DB.client.from('progress').delete().eq('user_id', DB.user.id).eq('doc_id', docId);
  return (data || []).length;
};

/* ---------- Notas ---------- */
DB.loadNotes = async function () {
  const { data, error } = await DB.client.from('notes').select('*').eq('user_id', DB.user.id).order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []).map(n => ({ id: n.id, doc: n.doc_id, color: n.color, text: n.quote, note: n.note || '', chapter: n.chapter || '', date: fmtDate(n.created_at) }));
};
DB.addNote = async function (docId, { color, quote, note, chapter }) {
  const { data, error } = await DB.client.from('notes').insert({ user_id: DB.user.id, doc_id: docId, color, quote, note, chapter }).select().single();
  if (error) throw error;
  return { id: data.id, doc: data.doc_id, color: data.color, text: data.quote, note: data.note || '', chapter: data.chapter || '', date: fmtDate(data.created_at) };
};

/* ---------- Vocabulario ---------- */
DB.loadVocabulary = async function () {
  const { data, error } = await DB.client.from('vocabulary').select('*').eq('user_id', DB.user.id).order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []).map(v => ({ word: v.word, def: v.definition || '', doc: v.doc_id, date: fmtDate(v.created_at), level: v.level }));
};
DB.addVocabWord = async function ({ word, definition, docId, level }) {
  const { error } = await DB.client.from('vocabulary').insert({ user_id: DB.user.id, word, definition, doc_id: docId, level: level || 1 });
  if (error) throw error;
};

/* ---------- Sesiones ---------- */
DB.loadSessions = async function () {
  const { data, error } = await DB.client.from('sessions').select('*').eq('user_id', DB.user.id).order('created_at', { ascending: false }).limit(60);
  if (error) throw error;
  return (data || []).map(s => ({ doc: s.doc_id, date: relDate(s.created_at), mode: s.mode, mins: s.mins, words: s.words, wpm: s.wpm, comp: s.comprehension }));
};
DB.addSession = async function ({ docId, mode, mins, words, wpm, comprehension }) {
  const { error } = await DB.client.from('sessions').insert({ user_id: DB.user.id, doc_id: docId, mode, mins, words, wpm, comprehension });
  if (error) throw error;
};

/* ---------- Objetivos ---------- */
DB.loadGoals = async function () {
  const { data, error } = await DB.client.from('goals').select('*').eq('user_id', DB.user.id).maybeSingle();
  if (error) throw error;
  return data ? { minDay: data.min_day, wordsDay: data.words_day, wpmTarget: data.wpm_target } : { minDay:30, wordsDay:8000, wpmTarget:500 };
};
DB.saveGoals = async function (g) {
  const { error } = await DB.client.from('goals').upsert({ user_id: DB.user.id, min_day: g.minDay, words_day: g.wordsDay, wpm_target: g.wpmTarget, updated_at: new Date().toISOString() });
  if (error) throw error;
};

/* ---------- Ajustes (tema / RSVP / lector) ---------- */
DB.loadSettings = async function () {
  const { data, error } = await DB.client.from('settings').select('*').eq('user_id', DB.user.id).maybeSingle();
  if (error) throw error;
  return data ? { theme: data.theme, custom: data.custom_theme, rsvp: data.rsvp, reader: data.reader } : null;
};
DB.saveSettings = async function (partial) {
  const row = { user_id: DB.user.id, updated_at: new Date().toISOString() };
  if ('theme' in partial) row.theme = partial.theme;
  if ('custom' in partial) row.custom_theme = partial.custom;
  if ('rsvp' in partial) row.rsvp = partial.rsvp;
  if ('reader' in partial) row.reader = partial.reader;
  const { error } = await DB.client.from('settings').upsert(row);
  if (error) throw error;
};

/* ---------- Logros ---------- */
DB.loadAchievements = async function () {
  const { data, error } = await DB.client.from('achievements').select('key').eq('user_id', DB.user.id);
  if (error) throw error;
  return new Set((data || []).map(a => a.key));
};
DB.unlockAchievement = async function (key) {
  const { error } = await DB.client.from('achievements').upsert({ user_id: DB.user.id, key }, { onConflict: 'user_id,key' });
  if (error) throw error;
};

/* ---------- Perfil ---------- */
DB.loadProfile = async function () {
  const { data, error } = await DB.client.from('profiles').select('*').eq('id', DB.user.id).maybeSingle();
  if (error) throw error;
  return data || null;
};
DB.saveProfile = async function (acc) {
  // Solo persiste display_name mientras las columnas extendidas no existan (ver migración 0004).
  const row = { id: DB.user.id, display_name: acc.name };
  if ('username' in acc) row.username = acc.username || null;
  if ('bio' in acc) row.bio = acc.bio || null;
  if ('avatar' in acc) row.avatar_url = acc.avatar || null;
  if ('country' in acc) row.country = acc.country || null;
  const { error } = await DB.client.from('profiles').upsert(row);
  if (error) throw error;
};

/* ---------- Semilla inicial (primer login) ---------- */
DB.seedIfEmpty = async function () {
  const { count } = await DB.client.from('progress').select('*', { count: 'exact', head: true }).eq('user_id', DB.user.id);
  if (count && count > 0) return false;
  // Un único libro demo para no sobrecargar la cuenta nueva de datos que el usuario borrará.
  const seedProgress = [
    ['habitos', 0, 'Principio del documento', 0, 0, '6 h 40 min', '0 min', false, false],
  ];
  const now = Date.now();
  await Promise.all(seedProgress.map(([doc_id, progress, chapter, avg_wpm, sessions, time_left, read_time, favorite, done], i) =>
    DB.client.from('progress').upsert({
      user_id: DB.user.id, doc_id, progress, chapter, avg_wpm, sessions, time_left, read_time, favorite, done,
      last_read: new Date(now - i * 86400000 * 2).toISOString(),
    }, { onConflict: 'user_id,doc_id' })));
  await DB.client.from('goals').upsert({ user_id: DB.user.id, min_day: 30, words_day: 8000, wpm_target: 500 });
  return true;
};

/* ---------- utilidades de fecha ---------- */
function fmtDate(iso) { if (!iso) return ''; const d = new Date(iso); return d.toLocaleDateString((typeof S !== 'undefined' && S.locale) || 'es-ES', { day:'numeric', month:'short', year:'numeric' }); }
function relDate(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff/60000), h = Math.floor(diff/3600000), d = Math.floor(diff/86400000);
  if (m < 60) return m<=1 ? 'Hace un momento' : `Hace ${m} min`;
  if (h < 24) return `Hace ${h} h`;
  if (d === 1) return 'Ayer';
  if (d < 7) return `Hace ${d} días`;
  return `Hace ${Math.floor(d/7)} semana${d>=14?'s':''}`;
}
let DEMO_TEXTS_LIVE = {};
