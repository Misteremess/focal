-- Focal — esquema inicial
-- Ejecutar en Supabase → SQL Editor (proyecto nuevo y separado de TurnOff).

-- ============ documentos (catálogo) ============
-- owner_id nulo = documento de demostración visible para todos.
-- owner_id relleno = documento importado por ese usuario.
create table if not exists documents (
  id text primary key,
  owner_id uuid references auth.users(id) on delete cascade,
  title text not null,
  author text not null,
  type text not null default 'TXT',
  pages int not null default 0,
  words int not null default 0,
  tags text[] not null default '{}',
  collection text,
  cover jsonb not null default '{}'::jsonb,
  content text not null default '',
  added_at timestamptz not null default now()
);
alter table documents enable row level security;
create policy "documentos visibles: demo o propios" on documents
  for select using (owner_id is null or owner_id = auth.uid());
create policy "insertar documentos propios" on documents
  for insert with check (owner_id = auth.uid());
create policy "editar documentos propios" on documents
  for update using (owner_id = auth.uid());
create policy "borrar documentos propios" on documents
  for delete using (owner_id = auth.uid());

-- ============ progreso de lectura por usuario ============
create table if not exists progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  doc_id text not null references documents(id) on delete cascade,
  progress numeric not null default 0,
  chapter text default '',
  last_read timestamptz default now(),
  avg_wpm int default 0,
  sessions int default 0,
  time_left text default '',
  read_time text default '',
  favorite boolean not null default false,
  done boolean not null default false,
  archived boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, doc_id)
);
alter table progress enable row level security;
create policy "progreso propio" on progress for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ notas y destacados ============
create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  doc_id text not null references documents(id) on delete cascade,
  color text not null default 'amber',
  quote text not null,
  note text default '',
  chapter text default '',
  created_at timestamptz not null default now()
);
alter table notes enable row level security;
create policy "notas propias" on notes for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ vocabulario ============
create table if not exists vocabulary (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  word text not null,
  definition text default '',
  doc_id text references documents(id) on delete set null,
  level int not null default 1,
  created_at timestamptz not null default now()
);
alter table vocabulary enable row level security;
create policy "vocabulario propio" on vocabulary for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ historial de sesiones ============
create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  doc_id text references documents(id) on delete set null,
  mode text not null default 'RSVP',
  mins int not null default 0,
  words int not null default 0,
  wpm int not null default 0,
  comprehension int default null,
  created_at timestamptz not null default now()
);
alter table sessions enable row level security;
create policy "sesiones propias" on sessions for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ objetivos ============
create table if not exists goals (
  user_id uuid primary key references auth.users(id) on delete cascade,
  min_day int not null default 30,
  words_day int not null default 8000,
  wpm_target int not null default 500,
  updated_at timestamptz not null default now()
);
alter table goals enable row level security;
create policy "objetivos propios" on goals for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ logros desbloqueados ============
create table if not exists achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table achievements enable row level security;
create policy "logros propios" on achievements for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ ajustes (tema, RSVP, lector) ============
create table if not exists settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  theme text not null default 'paper',
  custom_theme jsonb,
  rsvp jsonb not null default '{}'::jsonb,
  reader jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table settings enable row level security;
create policy "ajustes propios" on settings for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ perfiles ============
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);
alter table profiles enable row level security;
create policy "perfil propio" on profiles for all
  using (auth.uid() = id) with check (auth.uid() = id);

-- crea el perfil automáticamente al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$ language plpgsql security definer set search_path = public;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
