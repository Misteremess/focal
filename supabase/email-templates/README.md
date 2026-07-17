# Plantillas de correo de Focal

Correos transaccionales con la identidad visual de Focal (acento `#b3382c`,
fondo papel, logo). Compatibles con clientes de correo (layout con tablas +
CSS en línea). Usan las variables de plantilla de Supabase (`{{ .ConfirmationURL }}`).

## Cómo aplicarlas

Supabase → **Authentication → Email Templates**. Para cada plantilla, pega el
HTML y ajusta el asunto:

| Plantilla de Supabase | Fichero | Asunto sugerido |
|-----------------------|---------|-----------------|
| Confirm signup   | [`confirm-signup.html`](confirm-signup.html)   | Confirma tu cuenta de Focal |
| Reset Password   | [`reset-password.html`](reset-password.html)   | Restablece tu contraseña de Focal |
| Magic Link       | [`magic-link.html`](magic-link.html)           | Tu enlace de acceso a Focal |

## Evitar que caigan en spam

- Usa un **remitente reconocible** (p. ej. `Focal <hola@tudominio.com>`).
- Configura **SMTP propio con [Resend](https://resend.com)** en *Project
  Settings → Auth → SMTP* con un **dominio verificado** (SPF + DKIM). El SMTP
  por defecto de Supabase tiene límites bajos y peor reputación de entrega.
- Mantén asunto y contenido coherentes con la marca (ya lo están en estas plantillas).
