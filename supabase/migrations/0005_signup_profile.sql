-- Focal — al registrarse, rellena el perfil con los metadatos del alta
-- (username, display_name, país, fecha de nacimiento) enviados desde el cliente.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, username, country, birthdate)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'username', split_part(new.email,'@',1)),
    nullif(new.raw_user_meta_data->>'username',''),
    nullif(new.raw_user_meta_data->>'country',''),
    (nullif(new.raw_user_meta_data->>'birthdate',''))::date
  )
  on conflict (id) do update
    set display_name = excluded.display_name,
        username = coalesce(public.profiles.username, excluded.username);
  return new;
exception when others then
  -- Nunca bloquees el alta por un fallo al crear el perfil (p. ej. username duplicado).
  insert into public.profiles (id, display_name)
  values (new.id, split_part(new.email,'@',1))
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer set search_path = public;
