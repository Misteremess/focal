# Focal — lector RSVP

App web de lectura rápida (RSVP) + lector tradicional, con biblioteca, notas,
vocabulario, estadísticas y ajustes, personalizada por cuenta de usuario.

Stack: **HTML/CSS/JS puro (sin build ni framework) + Supabase** (auth por
enlace mágico + Postgres con RLS). No hay paso de compilación: es un sitio
estático que Vercel sirve tal cual.

---

## 1. Modo demo (sin backend)

Si `config.js` está vacío, la app arranca directamente en modo demo: todos los
datos son los de `data.js` y se guardan solo en `localStorage` del navegador.
Sirve para desarrollar la interfaz sin tocar Supabase:

```bash
python3 -m http.server 4173
# abre http://localhost:4173
```

## 2. Configurar Supabase (persistencia real por cuenta)

1. Crea un proyecto nuevo en [supabase.com](https://supabase.com) (gratis).
   Usa uno **separado** del de otros proyectos personales (TurnOff, etc.):
   así una cuota o un fallo no afecta a los demás.
2. **SQL Editor** → pega y ejecuta, en este orden:
   - [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql) — tablas y RLS.
   - [`supabase/migrations/0002_seed.sql`](supabase/migrations/0002_seed.sql) — catálogo de documentos de demostración (visibles para todas las cuentas).
3. **Authentication → Providers → Email**: dejar activado "Enable email
   provider" y activar **"Enable Email OTP" / magic link** (viene activado
   por defecto). No hace falta configurar OAuth de terceros.
4. **Authentication → URL Configuration**:
   - *Site URL*: `https://focal.maximoduperez.com`
   - *Redirect URLs*: añade también `http://localhost:4173` (para probar en local).
5. **Project Settings → API** → copia `Project URL` y `anon public key` y
   rellena [`config.js`](config.js):
   ```js
   const CONFIG = {
     SUPABASE_URL: 'https://xxxxxxxx.supabase.co',
     SUPABASE_ANON_KEY: 'eyJ...',
   };
   ```
   La `anon key` está pensada para ser pública (la seguridad la da RLS, no el
   secreto de la key) — es seguro hacer commit de `config.js` con estos valores.
6. Haz commit y push. Con el autodeploy de Vercel activo, en ~1 minuto
   `focal.maximoduperez.com` ya pide el enlace mágico y guarda todo por cuenta.

## 3. Despliegue: Vercel + subdominio (mismo patrón que TurnOff)

Es un sitio 100% estático (sin servidor Node ni Server Actions), así que el
despliegue en Vercel es "zero-config": no hace falta `vercel.json` ni build
command.

1. **Sube el código a GitHub** (ya está en `github.com/Misteremess/focal`).
2. **Vercel** → [vercel.com/new](https://vercel.com/new) → *Import Git
   Repository* → selecciona `Misteremess/focal`.
   - Framework Preset: **Other** (o "Static").
   - Build Command / Output Directory: déjalos vacíos — Vercel sirve la raíz tal cual.
   - Pulsa **Deploy**.
3. **Dominio**: Vercel → tu proyecto → *Settings → Domains* → añade
   `focal.maximoduperez.com`. Vercel te da un registro CNAME (normalmente
   `cname.vercel-dns.com`).
4. **DNS en Hostinger**: hPanel → *Dominios* → `maximoduperez.com` → *DNS /
   Nameservers* → añade:
   ```
   Tipo: CNAME
   Nombre: focal
   Apunta a: cname.vercel-dns.com   (el valor exacto que te dé Vercel)
   TTL: por defecto
   ```
   Espera a que propague (minutos–horas). Vercel emite el certificado SSL solo.
5. **Autodeploy**: ya viene activado por defecto en Vercel — cada `git push`
   a `main` redepliega `focal.maximoduperez.com` automáticamente, sin webhooks
   que configurar a mano.

### Variables de entorno en Vercel

No hace falta ninguna: `config.js` contiene la `anon key` (pública por
diseño) directamente en el repo. Si en el futuro prefieres no versionarla,
podrías moverla a una env var de Vercel y generar `config.js` en un build
step — pero con RLS activo no es necesario.

## 4. Estructura de datos

- `documents` — catálogo compartido (documentos de demo con `owner_id NULL`,
  o importados por un usuario con `owner_id` relleno).
- `progress` — progreso de lectura por `(user_id, doc_id)`: porcentaje,
  capítulo, velocidad media, favorito, sesiones, etc.
- `notes`, `vocabulary`, `sessions`, `goals`, `settings`, `achievements` — todo
  por usuario, con RLS que solo permite leer/escribir las filas propias.

Ver [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql)
para el esquema completo y las políticas de seguridad.

## 5. Importación de documentos

La importación (`import.js`) extrae texto real en el propio navegador, sin
servidor intermedio:

- **PDF** — [pdf.js](https://mozilla.github.io/pdf.js/) (cargado bajo demanda desde CDN).
- **EPUB** — descomprimido con [JSZip](https://stuk.github.io/jszip/), lee el
  `container.xml` / `.opf` y concatena el `spine` en orden.
- **DOCX** — descomprimido con JSZip, texto extraído de `word/document.xml`.
- **TXT / MD / HTML** — lectura directa (Markdown/HTML se limpian de marcado).
- **Desde URL** — `fetch` + extracción de texto; sujeto a CORS del sitio origen.
- **Pegar texto / portapapeles** — creación inmediata de documento.

Con sesión iniciada, el documento se guarda en `documents` (con
`owner_id` = tu usuario) y en `progress`. Sin backend configurado, se
guarda en `localStorage` bajo la clave `focal.localImports` y se fusiona
con el catálogo de demo al arrancar.
