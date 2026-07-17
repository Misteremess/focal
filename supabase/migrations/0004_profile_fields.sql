-- Focal — campos de perfil ampliados (foto, username único, bio, país).
alter table profiles add column if not exists username text unique;
alter table profiles add column if not exists bio text;
alter table profiles add column if not exists avatar_url text;
alter table profiles add column if not exists country text;
alter table profiles add column if not exists birthdate date;

-- Los perfiles son legibles por cualquiera autenticado (para mostrar nombre/foto),
-- pero solo el dueño puede modificarlos (la política de escritura ya existe en 0001).
drop policy if exists "perfiles visibles" on profiles;
create policy "perfiles visibles" on profiles for select using (true);
