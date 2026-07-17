-- Focal — índices para escalar a muchos usuarios.
-- Supabase/Postgres no indexa automáticamente las claves foráneas; sin estos índices,
-- las consultas por usuario hacen full scan a medida que crece la base.
create index if not exists idx_progress_user      on progress   (user_id);
create index if not exists idx_notes_user         on notes      (user_id, created_at desc);
create index if not exists idx_vocabulary_user    on vocabulary (user_id, created_at desc);
create index if not exists idx_sessions_user      on sessions   (user_id, created_at desc);
create index if not exists idx_achievements_user  on achievements (user_id);
create index if not exists idx_documents_owner    on documents  (owner_id);
create index if not exists idx_profiles_username  on profiles   (username);
