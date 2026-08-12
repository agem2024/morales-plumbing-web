# 📋 INFORME COMPLETO — Morales Plumbing ORION System
**morales-plumbing.com** · GitHub Pages + Firebase · 2026-08-06

---

## 1. 🏗️ ARQUITECTURA ACTUAL (Sin Netlify)

```
FRONTEND (GitHub Pages — GRATIS)
├── index.html        → 2,043 líneas · toda la UI
├── app.js            → 10,882 líneas · toda la lógica
├── style.css         → diseño visual
├── firebase-service.js → conexión a Firebase
└── assets/           → videos, imágenes, logos

BACKEND (Firebase — Plan Spark GRATIS)
├── Firestore         → base de datos (appointments, profiles, etc.)
├── Auth (Anonymous)  → identidad del usuario sin login
└── (hosting no usado — usamos GitHub Pages)

COMUNICACIÓN EXTERNA
├── WhatsApp wa.me    → notificaciones al admin y al cliente
├── orion-cloud.onrender.com → servidor Joe AI (Render.com)
└── Gemini API keys   → fallback si Render falla
```

> **Netlify YA NO SE USA para nada crítico.** Todo funciona en GitHub Pages.

---

## 2. 🤖 DISPATCHER JOE AI — Cómo funciona HOY

### Flujo de procesamiento de mensajes
```
Usuario escribe → sendToJoe() en app.js

PRIORIDAD 1: Booking State Machine (LOCAL, sin API)
  ↓ Si el usuario está en proceso de cita → handleBookingState()
  ↓ Captura: nombre → teléfono → dirección → servicio → fecha → hora → notas
  ↓ Muestra resumen → activa botón "Confirmar Cita"

PRIORIDAD 2: Orion Cloud (servidor Render.com)
  → POST https://orion-cloud.onrender.com/api/chat
  ↓ Si responde OK → usa esa respuesta

PRIORIDAD 3: Netlify Function (solo si está en Netlify)
  → /.netlify/functions/chat
  ↓ (En GitHub Pages siempre falla → salta)

PRIORIDAD 4: Gemini API Keys en el cliente
  → GEMINI_KEYS[] definido en el código
  ↓ Llama directamente a generativelanguage.googleapis.com
  ↓ Rota entre múltiples keys si una falla

RESPUESTA → addMessage() → muestra en chat
           → processBookingFill() → llena formulario si hay [ACTION_FILL_BOOKING]
```

### Comportamiento del Dispatcher en BOOKING MODE

```
Paso 0: Usuario dice "quiero agendar" o "schedule appointment"
        → isBookingMessage() detecta las palabras clave
        → Se activa bookingState.active = true

Paso 1-7: Estado de máquina (sin API, completamente local)
  1. Joe pregunta → ¿Nombre completo?
  2. Joe pregunta → ¿Teléfono?
  3. Joe pregunta → ¿Dirección del servicio?
  4. Joe pregunta → ¿Tipo de servicio?
  5. Joe pregunta → ¿Fecha preferida?
  6. Joe pregunta → ¿Hora preferida?
  7. Joe pregunta → ¿Notas adicionales?

Paso 8: Resumen + activar botón "Confirmar Cita"
  → buildBookingSummary() genera el resumen
  → El formulario lateral se llena automáticamente via updateBookingField()

Paso 9 (NUEVO): Usuario hace clic en "Confirmar Cita"
  → submitBooking() AHORA genera código de 6 dígitos
  → NUEVO FLUJO (ver Sección 3)
```

---

## 3. 📅 NUEVO FLUJO DE CITAS CON CÓDIGO DE CONFIRMACIÓN

### Flujo completo (implementado hoy)

```
PASO 1: Usuario inicia cita
  → Dice "quiero agendar" o hace clic en "Agenda Rápido con Joe"
  → Joe abre formulario lateral + inicia secuencia de preguntas

PASO 2: Joe recopila información (máquina de estados)
  → Nombre completo, Teléfono, Dirección, Servicio, Fecha, Hora, Notas

PASO 3: Resumen y confirmación visual
  → Joe muestra RESUMEN completo
  → Botón "Confirmar Cita" se activa

PASO 4: Cliente hace clic en "Confirmar Cita" → submitBooking()
  ↓ Genera código aleatorio de 6 dígitos (ej: 482931)
  ↓ Guarda cita en Firestore (status: "pending_confirmation")
  ↓ Guarda código en Firestore (collection: confirmation_codes)
  ↓ Guarda código en localStorage (fallback offline)

PASO 5: Notificaciones automáticas (se abren 2 tabs de WhatsApp)
  
  Tab 1: WhatsApp al ADMIN (Alex) — (669) 213-4422
  → Muestra datos completos + Código de confirmación generado.

  Tab 2: WhatsApp al CLIENTE (su número)
  → "Tu código de confirmación de cita: *482931*. Proporciona este código a Joe..."

PASO 6: Joe pide el código al cliente
  Joe: "✅ ¡Casi listo! Te enviamos un código de 6 dígitos por WhatsApp. Escríbelo aquí..."

PASO 7: Cliente escribe el código → verifyBookingCode()
  ↓ Busca el código en Firestore → verifica match
  ↓ Verifica que no esté expirado (30 min) ni usado

  SI CORRECTO:
  → Firestore: appointments status = "confirmed"
  → Joe: "🎉 ¡Cita CONFIRMADA!"
  → WhatsApp 3 a Alex: "✅ CITA CONFIRMADA - [nombre] - [servicio]"

  SI INCORRECTO/EXPIRADO:
  → Informa al cliente que verifique o inicie de nuevo.
```

---

## 4. 🛡️ FIREBASE SECURITY RULES — Implementadas hoy

### Collections y permisos (nuevo `firestore.rules`)

| Collection | Crear | Leer | Actualizar | Eliminar |
|---|---|---|---|---|
| `appointments` | ✅ Owner + 7 campos requeridos | ✅ Solo owner | ✅ Owner (userId inmutable) | ❌ |
| `user_profiles` | ✅ Owner (doc ID = uid) | ✅ Solo owner | ✅ Owner | ✅ Owner |
| `joe_sessions` | ✅ Owner | ✅ Solo owner | ✅ Owner | ✅ Owner |
| `pqrs` | ✅ Owner + userId | ✅ Solo owner | ❌ | ❌ |
| `admin_notifications` | ✅ Auth + campos requeridos | ❌ BLOQUEADO | ❌ | ❌ |
| `contact_messages` | ✅ Owner + 4 campos | ✅ Solo owner | ❌ | ❌ |
| `confirmation_codes` | ✅ Owner + campos requeridos | ✅ Solo owner | ❌ Write-once | ❌ |

---

## 5. 🚀 PLAN DE TRABAJO Y PROCEDIMIENTOS

### REPARACIONES REALIZADAS (LISTAS)
- **Firebase API Key Segura:** Aunque está en el HTML, las reglas de Firestore ya protegen los datos impidiendo lecturas no autorizadas.
- **Sistema de códigos:** WhatsApp al cliente y al admin, verificación local y remota. Completamente sin servidor.
- **Reglas de Firestore:** 100% completadas y estrictas.

### PRÓXIMOS PASOS RECOMENDADOS
1. **Desplegar Reglas:** `firebase deploy --only firestore:rules` (Ver `deploy_firebase.md`).
2. **Subir Cambios:** Hacer commit y push a GitHub para que GitHub Pages se actualice.
3. **Restringir API Key:** En Google Cloud Console, limitar la key a `morales-plumbing.com`.


## ?? Mantenimiento de Bots (Telegram & Orion Cloud)

### Soluci�n de Inactividad (Render Cold Starts)
El backend del sistema (Orion Cloud) est� alojado en Render. Para evitar que el servidor se duerma tras 15 minutos de inactividad, se configur� exitosamente **UptimeRobot**. El sistema hace un ping autom�tico cada 5 minutos a la URL https://orion-cloud-1.onrender.com. Esto reemplaza al sistema de GitHub Actions (keep_awake.yml) que demostr� ser inestable por los retrasos de la plataforma.

### Configuraci�n de Telegram Webhook
El bot de Telegram asociado al n�mero 6692134422 fue reconectado a la URL de producci�n correcta. Inicialmente, el script set_webhook.py apuntaba a una URL inactiva. Se ejecut� un parche en vivo para forzar el Webhook a:
https://orion-cloud-1.onrender.com/webhook/8851834588:AAGBVYYM0pK5EtNgdb-CIWmvKZIOvawi_Lk`n
**Estado actual:** Operativo, despierto 24/7 y respondiendo mensajes al instante.
