-- Focal — deja un único libro de demostración (Hábitos atómicos).
-- Elimina el resto de documentos de catálogo (owner_id nulo) para no
-- sobrecargar las cuentas nuevas con datos que el usuario acabará borrando.
-- El borrado en cascada limpia progreso/notas/sesiones asociados a esos demos.
delete from documents
where owner_id is null
  and id in ('viento','meditaciones','paper_ia','apuntes','scifi','informe');
