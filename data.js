// Focal — Datos de demostración
const DEMO_TEXTS = {
  habitos: `Los pequeños cambios producen resultados extraordinarios cuando se acumulan a lo largo del tiempo. Mejorar un uno por ciento cada día no parece gran cosa en el momento, pero al cabo de un año la diferencia es enorme. Los hábitos son el interés compuesto de la superación personal. Del mismo modo que el dinero se multiplica mediante el interés compuesto, los efectos de tus hábitos se multiplican a medida que los repites. Parecen insignificantes en un día cualquiera, y sin embargo el impacto que producen a lo largo de meses y años puede ser inmenso. Solo cuando miramos atrás, dos, cinco o diez años después, el valor de los buenos hábitos y el coste de los malos se vuelve completamente evidente. Con frecuencia descartamos los pequeños cambios porque no parecen importar demasiado en el momento. Si ahorras un poco de dinero hoy, sigues sin ser millonario. Si vas al gimnasio tres días seguidos, sigues sin estar en forma. Hacemos algunos cambios, los resultados parecen llegar demasiado despacio, y volvemos a nuestras rutinas anteriores. Por desgracia, la lentitud de la transformación también facilita que un mal hábito se instale sin que nos demos cuenta. El éxito es el producto de los esfuerzos diarios, no de transformaciones únicas en la vida. No importa el éxito que persigas: siempre existe la tentación de buscar el gran salto, el resultado inmediato del que todos hablan. Pero la verdad es que los resultados tienen poco que ver con las metas y mucho que ver con los sistemas. Las metas señalan la dirección; los sistemas determinan el progreso. Si tienes problemas para cambiar tus hábitos, el problema no eres tú. El problema es tu sistema. Los malos hábitos se repiten una y otra vez, no porque no quieras cambiar, sino porque tienes un sistema equivocado para el cambio. No te elevas al nivel de tus metas. Caes al nivel de tus sistemas.`,
  viento: `La posada del Roble Vacío guardaba silencio, y era un silencio de tres partes. La más evidente era una quietud hueca y resonante, hecha de las cosas que faltaban. Si hubiera habido viento, este habría suspirado entre los árboles y habría hecho girar el rótulo de la posada sobre sus goznes. Si hubiera habido una multitud, aunque solo fueran un puñado de hombres, habrían llenado el silencio con conversaciones y risas. Si hubiera habido música... pero no, claro que no había música. De hecho, no había ninguna de esas cosas, y por eso persistía el silencio. En el interior, dos hombres se acurrucaban en un extremo de la barra. Bebían con silenciosa determinación, evitando discusiones serias sobre noticias inquietantes. Con ello añadían un pequeño silencio hosco al otro mayor y vacío. Formaban una aleación, un contrapunto. El tercer silencio no era tan fácil de notar. Si pasabas una hora escuchando, quizá empezaras a percibirlo en el suelo de madera y en los toneles rajados. Estaba en el peso de la negra piedra del hogar, que conservaba el calor de un fuego extinguido hacía tiempo. Estaba en el lento vaivén de un paño blanco frotando la veta de la barra. Y estaba en las manos del hombre que la frotaba, puliendo una superficie que ya relucía a la luz de las lámparas. El hombre tenía el cabello rojo como el fuego. Sus ojos eran oscuros y distantes, y se movía con la sutil certeza de quien sabe muchas cosas.`,
  meditaciones: `Al despuntar la aurora, hazte estas consideraciones previas: me encontraré con un indiscreto, un ingrato, un insolente, un mentiroso, un envidioso, un insociable. Todo eso les acontece por ignorancia del bien y del mal. Pero yo, que he observado que la naturaleza del bien es lo bello, y que la del mal es lo vergonzoso, y que la naturaleza del que obra mal es pariente de la mía, no porque tenga la misma sangre o la misma semilla, sino porque participa de la misma inteligencia y de la misma porción de divinidad, no puedo recibir daño de ninguno de ellos, pues nadie me cubrirá de vergüenza. Tampoco puedo enfadarme con mi pariente ni odiarle. Pues hemos nacido para colaborar, al igual que los pies, las manos, los párpados, las hileras de dientes superiores e inferiores. Obrar, pues, como adversarios los unos de los otros es contrario a la naturaleza. Y es actuar como adversario el hecho de manifestar indignación y repulsa. Esto que soy, sea lo que sea, es carne, un poco de aliento vital y la parte directriz. Deja los libros, no te distraigas más, no te está permitido. Como si ya estuvieras a punto de morir, desprecia la carne: sangre y huesos, un entramado de nervios, de venas y arterias. Considera también qué es el aliento vital: aire, y no siempre el mismo, sino que a cada momento lo expulsamos y de nuevo lo aspiramos. En tercer lugar queda la parte directriz. Reflexiona así: eres viejo, no permitas por más tiempo que esta sea esclava, ni que penda como una marioneta de los hilos del deseo egoísta, ni que se irrite con el destino presente o recele del futuro.`,
  paper_ia: `Resumen. Los modelos de lenguaje de gran escala han transformado el procesamiento del lenguaje natural, pero su comportamiento en tareas de razonamiento complejo sigue siendo objeto de debate. En este trabajo evaluamos sistemáticamente la capacidad de razonamiento en cadena de once modelos contemporáneos sobre un conjunto de 4.200 problemas de lógica, matemáticas y comprensión causal. Nuestros resultados indican que el rendimiento escala de forma no lineal con el tamaño del modelo, y que las técnicas de descomposición de problemas mejoran la precisión media en un 23,7 por ciento. Introducción. Desde la aparición de las arquitecturas basadas en atención, el campo ha experimentado un crecimiento sin precedentes. Sin embargo, persiste una pregunta fundamental: ¿los modelos razonan o simplemente recuperan patrones estadísticos aprendidos durante el entrenamiento? Trabajos recientes sugieren que la frontera entre ambos fenómenos es difusa. La memorización y la generalización no son procesos mutuamente excluyentes, sino extremos de un continuo. Metodología. Construimos un banco de pruebas con tres categorías principales. La primera contiene silogismos y problemas de lógica proposicional generados proceduralmente para evitar contaminación del conjunto de entrenamiento. La segunda incluye problemas aritméticos de varios pasos con distractores numéricos. La tercera evalúa comprensión causal mediante escenarios contrafactuales. Cada problema fue validado por tres anotadores independientes con un acuerdo inter-anotador de 0,91. Resultados. El modelo de mayor tamaño alcanzó una precisión del 87,3 por ciento en lógica proposicional, frente al 52,1 por ciento del modelo base. La descomposición explícita de problemas resultó especialmente eficaz en tareas aritméticas, donde la tasa de error se redujo a menos de la mitad.`,
  apuntes: `Estructuras de datos: notas de repaso. Un array almacena elementos en posiciones contiguas de memoria, lo que permite acceso aleatorio en tiempo constante. La inserción en mitad del array es costosa porque requiere desplazar todos los elementos posteriores. Una lista enlazada, en cambio, permite inserciones y borrados en tiempo constante si ya tenemos el puntero al nodo, pero el acceso por índice es lineal. Las tablas hash ofrecen inserción, búsqueda y borrado en tiempo constante amortizado. La clave está en la función de dispersión: debe distribuir las claves uniformemente para minimizar colisiones. Las colisiones se resuelven mediante encadenamiento o direccionamiento abierto. El factor de carga determina cuándo redimensionar la tabla; un valor típico es 0,75. Los árboles binarios de búsqueda mantienen la propiedad de orden: todo nodo del subárbol izquierdo es menor que la raíz, y todo nodo del derecho es mayor. Sin equilibrado, el peor caso degenera en una lista con coste lineal. Los árboles AVL y los rojinegros garantizan altura logarítmica mediante rotaciones. Un montículo binario es un árbol completo que satisface la propiedad de montículo: cada padre es menor o igual que sus hijos en un montículo de mínimos. Se implementa sobre un array y sirve de base para las colas de prioridad y el algoritmo heapsort. Los grafos se representan mediante matrices de adyacencia, eficientes para grafos densos, o listas de adyacencia, preferibles para grafos dispersos. La búsqueda en anchura encuentra caminos mínimos en grafos no ponderados; la búsqueda en profundidad sirve para detectar ciclos y ordenación topológica. Dijkstra resuelve caminos mínimos con pesos no negativos usando una cola de prioridad.`,
  scifi: `La estación Meridiano llevaba doscientos años orbitando un sol que ya no calentaba a nadie. Vera Osuna atravesó el anillo de observación con las botas magnéticas silbando contra el metal, y se detuvo frente al ventanal donde su abuela le había enseñado a distinguir constelaciones que ningún humano volvería a ver desde la Tierra. El mensaje había llegado a las cuatro de la madrugada, hora de a bordo: una secuencia de números primos emitida desde el cinturón exterior, repetida cada once minutos con una precisión que ninguna fuente natural podía explicar. Once minutos. El mismo intervalo que los pulsos del faro de Deneb, extinto desde antes de que ella naciera. No lo llames señal todavía, había dicho Ilias desde el laboratorio, con esa cautela suya que a Vera le parecía cada vez más una forma de miedo. Llámalo patrón. Los patrones no esperan respuesta. Pero Vera sabía que sí la esperaba. Lo sabía por la tercera secuencia, la que nadie más había querido analizar: no eran primos, eran coordenadas. Y apuntaban al único lugar del sistema que los protocolos prohibían visitar, el casco hueco de la nave generacional Esperanza, abandonada con sus doce mil colonos dormidos y su inteligencia de a bordo aún despierta, aún esperando, aún contando el tiempo en intervalos de once minutos. Se apartó del ventanal y abrió el canal del hangar. Preparad el Cormorán, dijo. Salgo en dos horas. La voz de Ilias tardó tres segundos en responder, y no fue para discutir. Ya lo sabías, dijo él. Sabías que era ella desde el primer pulso. Vera miró las estrellas frías una última vez. La Esperanza nunca dejó de emitir, respondió. Solo dejamos de escuchar.`,
  informe: `Informe trimestral de resultados. Tercer trimestre del ejercicio 2025. Resumen ejecutivo. Los ingresos consolidados alcanzaron los 48,2 millones de euros, lo que representa un crecimiento interanual del 14,3 por ciento y supera en 2,1 puntos la previsión comunicada en julio. El margen bruto se situó en el 61,8 por ciento, ochenta puntos básicos por encima del trimestre anterior, impulsado por la migración de clientes al plan anual y la reducción de costes de infraestructura. La base de clientes activos creció hasta 12.400 cuentas, con una tasa de retención neta del 118 por ciento. El coste de adquisición de cliente descendió un 9 por ciento gracias a la mayor contribución del canal orgánico, que ya genera el 46 por ciento de las altas nuevas. Evolución por segmentos. El segmento empresarial aportó 29,7 millones de euros, un 61,6 por ciento del total, con especial fortaleza en los sectores financiero y sanitario. El segmento de pequeñas y medianas empresas creció un 22 por ciento interanual, aunque muestra una elasticidad al precio superior a la prevista tras la actualización de tarifas de septiembre. Riesgos y perspectivas. Mantenemos la previsión anual de ingresos entre 192 y 196 millones de euros. Los principales riesgos identificados son la prolongación de los ciclos de venta en el segmento empresarial, la presión competitiva en precios en el mercado norteamericano y la evolución del tipo de cambio euro-dólar. El consejo ha aprobado una inversión adicional de 4 millones de euros en el desarrollo de la plataforma de análisis, con lanzamiento previsto para el segundo trimestre de 2026.`
};

// Nota: estos DEMO_* son el modo sin conexión (CONFIG.SUPABASE_URL vacío).
// Con Supabase configurado, app.js los sustituye por datos reales por cuenta tras el login.
// Modo demo local (sin Supabase): un único libro de muestra, claramente marcado como Demo.
let DEMO_DOCS = [
  { id:'habitos', demo:true, title:'Hábitos atómicos', author:'James Clear', type:'EPUB', pages:328, words:71200, progress:0.62, lastRead:'Hace 2 horas', chapter:'Cap. 11 — Camina despacio, pero nunca hacia atrás', timeLeft:'2 h 10 min', avgWpm:412, tags:['No ficción','Productividad'], fav:true, cover:{bg:'#1d3a2f', fg:'#e8e3d8', accent:'#d97742', ratio:1.5, label:'HA'}, collection:'Crecimiento', added:'12 mar 2026', readTime:'6 h 40 min', sessions:23 },
];

let DEMO_NOTES = [
  { id:1, doc:'habitos', color:'amber', text:'No te elevas al nivel de tus metas. Caes al nivel de tus sistemas.', note:'Aplicar a la rutina de lectura: diseñar el sistema, no la meta.', chapter:'Cap. 1', date:'14 jul 2026' },
  { id:2, doc:'habitos', color:'green', text:'Los hábitos son el interés compuesto de la superación personal.', note:'', chapter:'Cap. 1', date:'14 jul 2026' },
];

let DEMO_VOCAB = [
  { id:'v1', word:'compuesto', def:'Que está formado por la unión de varios elementos; en el texto, el «interés compuesto» de los hábitos.', doc:'Hábitos atómicos', docId:'habitos', date:'14 jul 2026', level:2 },
];

// Preguntas de comprensión preconfiguradas para los textos de demostración.
// Para documentos importados no se generan preguntas automáticas: el usuario puede crearlas manualmente.
const QUIZ = {
  habitos: [
    { q:'Según el texto, ¿qué son los hábitos?', opts:['El interés compuesto de la superación personal','Metas a corto plazo','Transformaciones únicas en la vida'], a:0 },
    { q:'¿Qué determina el progreso según el autor?', opts:['Las metas','Los sistemas','La motivación'], a:1 },
    { q:'«No te elevas al nivel de tus metas…»', opts:['…subes al nivel de tu esfuerzo','…caes al nivel de tus sistemas','…bajas al nivel de tus miedos'], a:1 },
  ],
  viento: [
    { q:'¿De cuántas partes era el silencio de la posada?', opts:['Dos','Tres','Cuatro'], a:1 },
    { q:'¿De qué color era el cabello del posadero?', opts:['Negro','Rubio','Rojo como el fuego'], a:2 },
  ],
  meditaciones: [
    { q:'Según Marco Aurelio, hemos nacido para…', opts:['competir','colaborar','contemplar'], a:1 },
    { q:'¿Qué debe dejar de ser esclava la parte directriz?', opts:['De los libros','De los hilos del deseo egoísta','Del destino'], a:1 },
  ],
  paper_ia: [
    { q:'¿Cuántos problemas contiene el banco de pruebas?', opts:['1.200','4.200','11.000'], a:1 },
    { q:'¿Qué mejora la descomposición de problemas?', opts:['La precisión media un 23,7 %','La velocidad de inferencia','El tamaño del modelo'], a:0 },
  ],
  apuntes: [
    { q:'¿Qué estructura permite acceso aleatorio en tiempo constante?', opts:['Lista enlazada','Array','Árbol binario'], a:1 },
    { q:'¿Qué factor de carga típico se menciona para tablas hash?', opts:['0,5','0,75','0,9'], a:1 },
  ],
  scifi: [
    { q:'¿Cada cuánto se repetía la secuencia de números primos?', opts:['Cada once minutos','Cada hora','Cada tres segundos'], a:0 },
    { q:'¿Cómo se llama la nave generacional?', opts:['Meridiano','Cormorán','Esperanza'], a:2 },
  ],
  informe: [
    { q:'¿Cuánto crecieron los ingresos interanualmente?', opts:['9 %','14,3 %','22 %'], a:1 },
    { q:'¿Qué canal genera ya el 46 % de las altas nuevas?', opts:['El canal de pago','El canal orgánico','Las ventas directas'], a:1 },
  ],
};

// Sin sesiones ficticias: las estadísticas se calculan solo con la actividad real
// del usuario (entradas con marca de tiempo `ts`). Ver realSessions() en app.js.
let DEMO_SESSIONS = [];

const THEMES = {
  paper:     { name:'Paper', vars:{ bg:'#f6f2ea', surface:'#fcfaf5', surface2:'#efe9dd', border:'#e2dbcc', text:'#2b2824', text2:'#6b655a', text3:'#9a9284', accent:'#b3382c', orp:'#b3382c', shadow:'rgba(60,50,30,.08)' }, desc:'Libro impreso moderno' },
  midnight:  { name:'Midnight', dark:true, vars:{ bg:'#0b0f1a', surface:'#111726', surface2:'#18203245', border:'#1e293e', text:'#e6eaf2', text2:'#8b95ab', text3:'#5b6478', accent:'#3d7bfd', orp:'#3d7bfd', shadow:'rgba(0,0,0,.4)' }, desc:'Lectura nocturna' },
  oled:      { name:'OLED', dark:true, vars:{ bg:'#000000', surface:'#0c0c0c', surface2:'#161616', border:'#222222', text:'#f2f2f2', text2:'#9a9a9a', text3:'#5c5c5c', accent:'#ff3b30', orp:'#ff3b30', shadow:'rgba(0,0,0,.6)' }, desc:'Alto contraste' },
  sepia:     { name:'Sepia', vars:{ bg:'#f3e7d3', surface:'#faf1e2', surface2:'#ecdcc2', border:'#ddc9a8', text:'#4a3423', text2:'#7d6349', text3:'#a58c6d', accent:'#b5602f', orp:'#b5602f', shadow:'rgba(90,60,20,.1)' }, desc:'Lectores clásicos' },
  forest:    { name:'Forest', dark:true, vars:{ bg:'#0c1410', surface:'#111b16', surface2:'#17241d', border:'#20362a', text:'#d9e8dc', text2:'#8aa693', text3:'#587263', accent:'#a4d65e', orp:'#a4d65e', shadow:'rgba(0,0,0,.4)' }, desc:'Natural y calmado' },
  ocean:     { name:'Ocean', dark:true, vars:{ bg:'#16222c', surface:'#1b2a36', surface2:'#223442', border:'#2c4252', text:'#dbe9f2', text2:'#8fa9ba', text3:'#5f7khaki888', accent:'#2dd4bf', orp:'#2dd4bf', shadow:'rgba(0,0,0,.35)' }, desc:'Fresco y tecnológico' },
  lavender:  { name:'Lavender', vars:{ bg:'#f2eef9', surface:'#faf8fe', surface2:'#eae3f5', border:'#ddd2ee', text:'#3a2b52', text2:'#6f5f8c', text3:'#a396bc', accent:'#7c4dcc', orp:'#7c4dcc', shadow:'rgba(90,60,150,.09)' }, desc:'Suave y relajante' },
  terminal:  { name:'Terminal', dark:true, mono:true, vars:{ bg:'#0a0f0a', surface:'#0e150e', surface2:'#142014', border:'#1e3020', text:'#b8e6b8', text2:'#6faa6f', text3:'#437043', accent:'#33ff66', orp:'#33ff66', shadow:'rgba(0,0,0,.5)' }, desc:'Verde fósforo' },
  solarized: { name:'Solarized', dark:true, vars:{ bg:'#002b36', surface:'#073642', surface2:'#0a3d4a', border:'#12495a', text:'#eee8d5', text2:'#93a1a1', text3:'#657b83', accent:'#cb4b16', orp:'#b58900', shadow:'rgba(0,0,0,.35)' }, desc:'Equilibrio clásico' },
  studio:    { name:'Studio', vars:{ bg:'#e9e6e1', surface:'#f4f2ee', surface2:'#dfdbd4', border:'#cfc9c0', text:'#181614', text2:'#5f5a53', text3:'#948d83', accent:'#c25a1e', orp:'#c25a1e', shadow:'rgba(40,35,30,.1)' }, desc:'Estudio editorial' },
};
// arreglo de errata en ocean
THEMES.ocean.vars.text3 = '#5f7888';

// El estado de desbloqueo se calcula en app.js con la actividad real y se persiste.
// Modelo data-driven: cada logro define una métrica (ver METRICS en app.js), un objetivo
// y un icono. El progreso y el desbloqueo se evalúan de forma genérica.
const ACHIEVEMENTS = [
  // — Sesiones —
  { key:'sess_1',   name:'Primera sesión',        desc:'Completa tu primera sesión de lectura',        metric:'sessions', target:1,   icon:'🎉' },
  { key:'sess_5',   name:'Cinco sesiones',         desc:'Completa 5 sesiones de lectura',               metric:'sessions', target:5,   icon:'📖' },
  { key:'sess_10',  name:'Constancia inicial',     desc:'Completa 10 sesiones',                          metric:'sessions', target:10,  icon:'📚' },
  { key:'sess_25',  name:'Lector habitual',        desc:'Completa 25 sesiones',                          metric:'sessions', target:25,  icon:'📕' },
  { key:'sess_50',  name:'Medio centenar',         desc:'Completa 50 sesiones',                          metric:'sessions', target:50,  icon:'📗' },
  { key:'sess_100', name:'Centurión lector',       desc:'Completa 100 sesiones',                         metric:'sessions', target:100, icon:'💯' },
  { key:'sess_250', name:'Devorador de sesiones',  desc:'Completa 250 sesiones',                         metric:'sessions', target:250, icon:'🏅' },
  // — Palabras —
  { key:'w_1k',     name:'Mil palabras',           desc:'Lee 1.000 palabras acumuladas',                metric:'words', target:1000,    icon:'✍️' },
  { key:'w_10k',    name:'10.000 palabras',        desc:'Lee 10.000 palabras acumuladas',               metric:'words', target:10000,   icon:'📝' },
  { key:'w_50k',    name:'50.000 palabras',        desc:'Lee 50.000 palabras acumuladas',               metric:'words', target:50000,   icon:'🗒️' },
  { key:'w_100k',   name:'100.000 palabras',       desc:'Lee 100.000 palabras acumuladas',              metric:'words', target:100000,  icon:'📜' },
  { key:'w_250k',   name:'Cuarto de millón',       desc:'Lee 250.000 palabras acumuladas',              metric:'words', target:250000,  icon:'📈' },
  { key:'w_500k',   name:'Medio millón',           desc:'Lee 500.000 palabras acumuladas',              metric:'words', target:500000,  icon:'🌟' },
  { key:'w_1m',     name:'Millón de palabras',     desc:'Lee 1.000.000 de palabras acumuladas',         metric:'words', target:1000000, icon:'👑' },
  // — Tiempo —
  { key:'t_30',     name:'Media hora',             desc:'Acumula 30 minutos de lectura',                metric:'mins', target:30,    icon:'⏱️' },
  { key:'t_60',     name:'Una hora',               desc:'Acumula 60 minutos de lectura',                metric:'mins', target:60,    icon:'⏲️' },
  { key:'t_300',    name:'Cinco horas',            desc:'Acumula 5 horas de lectura',                   metric:'mins', target:300,   icon:'🕐' },
  { key:'t_600',    name:'Diez horas',             desc:'Acumula 10 horas de lectura',                  metric:'mins', target:600,   icon:'🕙' },
  { key:'t_1500',   name:'Veinticinco horas',      desc:'Acumula 25 horas de lectura',                  metric:'mins', target:1500,  icon:'⌛' },
  { key:'t_3000',   name:'Cincuenta horas',        desc:'Acumula 50 horas de lectura',                  metric:'mins', target:3000,  icon:'🏆' },
  { key:'long_30',  name:'Concentración',          desc:'Una sesión de 30 minutos seguidos',            metric:'longSession', target:30, icon:'🎯' },
  { key:'long_60',  name:'Sin distracciones',      desc:'Una sesión de 60 minutos seguidos',            metric:'longSession', target:60, icon:'🧘' },
  { key:'long_120', name:'Maratón de lectura',     desc:'Una sesión de 120 minutos seguidos',           metric:'longSession', target:120, icon:'🏃' },
  // — Racha —
  { key:'str_3',    name:'Tres días seguidos',     desc:'Lee 3 días consecutivos',                      metric:'streak', target:3,   icon:'🔥' },
  { key:'str_7',    name:'Primera semana',         desc:'Lee 7 días consecutivos',                      metric:'streak', target:7,   icon:'📅' },
  { key:'str_14',   name:'Dos semanas',            desc:'Lee 14 días consecutivos',                     metric:'streak', target:14,  icon:'🗓️' },
  { key:'str_30',   name:'Racha de 30 días',       desc:'Lee 30 días consecutivos',                     metric:'streak', target:30,  icon:'🌙' },
  { key:'str_60',   name:'Dos meses imparable',    desc:'Lee 60 días consecutivos',                     metric:'streak', target:60,  icon:'⚡' },
  { key:'str_100',  name:'Cien días de fuego',     desc:'Lee 100 días consecutivos',                    metric:'streak', target:100, icon:'💥' },
  { key:'str_365',  name:'Un año leyendo',         desc:'Lee 365 días consecutivos',                    metric:'streak', target:365, icon:'🎖️' },
  // — Velocidad —
  { key:'wpm_250',  name:'250 ppm',                desc:'Alcanza 250 palabras por minuto',              metric:'maxWpm', target:250, icon:'🚶' },
  { key:'wpm_350',  name:'350 ppm',                desc:'Alcanza 350 palabras por minuto',              metric:'maxWpm', target:350, icon:'🏇' },
  { key:'wpm_500',  name:'500 ppm',                desc:'Alcanza 500 palabras por minuto',              metric:'maxWpm', target:500, icon:'🚀' },
  { key:'wpm_700',  name:'700 ppm',                desc:'Alcanza 700 palabras por minuto',              metric:'maxWpm', target:700, icon:'💨' },
  { key:'wpm_900',  name:'900 ppm',                desc:'Alcanza 900 palabras por minuto',              metric:'maxWpm', target:900, icon:'⚡' },
  { key:'wpm_1000', name:'Velocidad supersónica',  desc:'Alcanza 1.000 palabras por minuto',            metric:'maxWpm', target:1000, icon:'🛸' },
  // — Libros —
  { key:'book_1',   name:'Un libro terminado',     desc:'Termina tu primer documento',                  metric:'books', target:1,  icon:'✅' },
  { key:'book_3',   name:'Tres libros',            desc:'Termina 3 documentos',                          metric:'books', target:3,  icon:'📘' },
  { key:'book_5',   name:'Cinco libros',           desc:'Termina 5 documentos',                          metric:'books', target:5,  icon:'📙' },
  { key:'book_10',  name:'Diez libros terminados', desc:'Termina 10 documentos',                         metric:'books', target:10, icon:'🎓' },
  { key:'book_25',  name:'Biblioteca conquistada', desc:'Termina 25 documentos',                         metric:'books', target:25, icon:'🏛️' },
  { key:'book_50',  name:'Bibliófilo',             desc:'Termina 50 documentos',                         metric:'books', target:50, icon:'👓' },
  // — Comprensión —
  { key:'comp_80',  name:'Buena comprensión',      desc:'Media superior al 80 % en las pruebas',        metric:'comp', target:80, icon:'🧠' },
  { key:'comp_90',  name:'Comprensión > 90 %',     desc:'Media superior al 90 % en las pruebas',        metric:'comp', target:90, icon:'🎓' },
  { key:'comp_95',  name:'Casi perfecto',          desc:'Media superior al 95 % en las pruebas',        metric:'comp', target:95, icon:'💎' },
  // — Notas y vocabulario —
  { key:'note_1',   name:'Primera nota',           desc:'Crea tu primera nota o destacado',             metric:'notes', target:1,  icon:'📌' },
  { key:'note_10',  name:'Anotador',               desc:'Crea 10 notas o destacados',                    metric:'notes', target:10, icon:'🖍️' },
  { key:'note_50',  name:'Escriba diligente',      desc:'Crea 50 notas o destacados',                    metric:'notes', target:50, icon:'🗂️' },
  { key:'voc_1',    name:'Nueva palabra',          desc:'Guarda tu primera palabra de vocabulario',     metric:'vocab', target:1,  icon:'🔤' },
  { key:'voc_10',   name:'Coleccionista de palabras', desc:'Guarda 10 palabras de vocabulario',         metric:'vocab', target:10, icon:'📖' },
  { key:'voc_50',   name:'Lexicógrafo',            desc:'Guarda 50 palabras de vocabulario',             metric:'vocab', target:50, icon:'📚' },
  // — Variedad y hábitos —
  { key:'div_3',    name:'Explorador',             desc:'Lee en 3 documentos distintos',                metric:'distinctDocs', target:3, icon:'🧭' },
  { key:'div_5',    name:'Ecléctico',              desc:'Lee en 5 documentos distintos',                metric:'distinctDocs', target:5, icon:'🎨' },
  { key:'div_10',   name:'Mente inquieta',         desc:'Lee en 10 documentos distintos',               metric:'distinctDocs', target:10, icon:'🌍' },
  { key:'night_1',  name:'Búho nocturno',          desc:'Lee una sesión entre medianoche y las 5 h',    metric:'nightSessions', target:1, icon:'🦉' },
  { key:'dawn_1',   name:'Madrugador',             desc:'Lee una sesión entre las 5 h y las 8 h',       metric:'dawnSessions', target:1,  icon:'🌅' },
  { key:'days_10',  name:'Diez días de lectura',   desc:'Lee en 10 días distintos',                     metric:'readingDays', target:10, icon:'📆' },
  { key:'days_30',  name:'Mes lector',             desc:'Lee en 30 días distintos',                     metric:'readingDays', target:30, icon:'🗒️' },
];
