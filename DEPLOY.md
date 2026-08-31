# Morales Plumbing — Guía de Deploy a Netlify

## Variables de Entorno Requeridías

Configurar en **Netlify Dashboard → Site Settings → Environment Variables**:

| Variable | Descripción | Dónde obtenerla |
|---|---|---|
| `GEMINI_API_KEY` | Key de Google AI Studio para el chat de Joe | [aistudio.google.com](https://aistudio.google.com) |
| `OPENAI_API_KEY` | Key de OpenAI (fallback del chat) | [platform.openai.com](https://platform.openai.com) |
| `RESEND_API_KEY` | Key de Resend para emails de booking | [resend.com](https://resend.com) — Free tier: 3,000/mes |
| `NOTIFY_EMAIL` | Email donde llegan las citas | `moralesplumbing026@gmail.com` |

> **Nota:** `OPENAI_API_KEY` es opcional si usas solo Gemini.  
> **Nota:** `RESEND_API_KEY` es requerida para que las notificaciones de citas lleguen al email.

---

## Netlify Functions incluidías

| Función | Ruta | Descripción |
|---|---|---|
| `chat.js` | `/.netlify/functions/chat` | Chat IA de Joe (Gemini / OpenAI) |
| `sendBooking.js` | `/.netlify/functions/sendBooking` | Procesa citas y envía email vía Resend |

---

## Pasos de Deploy

1. **Conectar repo** en [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
2. **Build settings:**
   - Build command: *(dejar vacío — sitio estático)*
   - Publish directory: `.`
3. **Configurar env vars** (ver tabla arriba)
4. **Deploy** — Netlify detecta automáticamente `netlify.toml`

---

## Comportamiento del Chat sin Keys

Si las env vars de AI no están configuradías, el chat de Joe usa respuestas locales predefinidías (`getJoeLocalFallback`) — **la app NO se rompe**, solo el chat responde con respuestas genéricas.

---

## Repositorio Oficial y Notificaciones

El proyecto se despliega desde GitHub: `https://github.com/agem2024/morales-plumbing-web.git`
Notificaciones configuradías a: `moralesplumbing026@gmail.com`
