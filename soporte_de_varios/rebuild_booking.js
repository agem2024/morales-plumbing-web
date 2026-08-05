/**
 * BOOKING SYSTEM v2 — Complete Rewrite
 * - State machine (independent of AI APIs)
 * - Editable fields with autofill from saved profile
 * - Form syncs with Joe conversation
 * - Confirmation via mailto to admin + user
 */

const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');
let indexHtml = fs.readFileSync('index.html', 'utf8');

// ─────────────────────────────────────────────────────────────
// 1. FIX: Remove readonly from booking form fields in index.html
// ─────────────────────────────────────────────────────────────
indexHtml = indexHtml
    .replace(/<input type="text" id="bk-name" class="booking-input" placeholder="—" readonly>/g,
             '<input type="text" id="bk-name" class="booking-input" placeholder="Tu nombre completo..." oninput="syncBookingField(\'name\', this.value)">')
    .replace(/<input type="text" id="bk-phone" class="booking-input" placeholder="—" readonly>/g,
             '<input type="text" id="bk-phone" class="booking-input" placeholder="(669) 234-XXXX..." oninput="syncBookingField(\'phone\', this.value)">')
    .replace(/<input type="text" id="bk-address" class="booking-input" placeholder="—" readonly>/g,
             '<input type="text" id="bk-address" class="booking-input" placeholder="Dirección completa..." oninput="syncBookingField(\'address\', this.value)">')
    .replace(/<input type="text" id="bk-service" class="booking-input" placeholder="—" readonly>/g,
             '<input type="text" id="bk-service" class="booking-input" placeholder="Ej: Water heater, repipe..." oninput="syncBookingField(\'service\', this.value)">')
    .replace(/<input type="text" id="bk-date" class="booking-input" placeholder="—" readonly>/g,
             '<input type="date" id="bk-date" class="booking-input" oninput="syncBookingField(\'date\', this.value)">')
    .replace(/<input type="text" id="bk-time" class="booking-input" placeholder="—" readonly>/g,
             '<input type="time" id="bk-time" class="booking-input" oninput="syncBookingField(\'time\', this.value)">')
    .replace(/<textarea id="bk-notes" class="booking-input booking-textarea" placeholder="—" readonly><\/textarea>/g,
             '<textarea id="bk-notes" class="booking-input booking-textarea" placeholder="Cualquier detalle adicional..." oninput="syncBookingField(\'notes\', this.value)"></textarea>');

fs.writeFileSync('index.html', indexHtml);
console.log('✅ index.html: form fields made editable');

// ─────────────────────────────────────────────────────────────
// 2. Replace the entire booking system JS with v2
// ─────────────────────────────────────────────────────────────
const BOOKING_JS_V2 = `

// ═══════════════════════════════════════════════════════════════
// BOOKING SYSTEM v2 — State Machine + Autofill + Confirmation
// ═══════════════════════════════════════════════════════════════
const ADMIN_EMAIL = 'moralesplumbing026@gmail.com';

let bookingData = { name: '', phone: '', address: '', service: '', date: '', time: '', notes: '' };
const BOOKING_FIELDS = ['name', 'phone', 'address', 'service', 'date', 'time'];

// Booking conversation state machine
let bookingState = {
    active: false,
    step: 0,  // 0=idle, 1=name, 2=phone, 3=address, 4=service, 5=date, 6=time, 7=notes, 8=confirm
    lang: 'es'
};

const BOOKING_STEPS = {
    es: [
        null, // 0 = idle
        '¡Perfecto! Voy a ayudarte a agendar tu cita. 📅\n\n¿Cuál es tu **nombre completo**?',
        '✅ Anotado. ¿Cuál es tu **número de teléfono** de contacto?',
        '✅ Perfecto. ¿Cuál es la **dirección donde necesitas el servicio**?',
        '✅ Entendido. ¿Qué **tipo de servicio** necesitas? (Ej: Water heater, detección de fugas, repipe, drain cleaning...)',
        '✅ Excelente. ¿Cuál es tu **fecha preferida** para la visita? (Ej: Martes 15 de julio, esta semana, lo antes posible...)',
        '✅ Anotado. ¿Tienes preferencia de **horario**? (Ej: Mañana 9am-12pm, tarde 2pm-5pm...)',
        '✅ Casi listo. ¿Tienes algún **detalle adicional** que debamos saber? (Urgencia, acceso, tipo de problema específico...)\n\nO escribe "listo" si no hay nada más.',
        null // 8 = confirm (handled by button)
    ],
    en: [
        null,
        'Perfect! Let me help you schedule your appointment. 📅\n\nWhat is your **full name**?',
        '✅ Got it. What is your **contact phone number**?',
        '✅ Great. What is the **service address**?',
        '✅ Understood. What **type of service** do you need? (e.g., Water heater, leak detection, repipe, drain cleaning...)',
        '✅ Excellent. What is your **preferred date** for the visit? (e.g., Tuesday July 15, this week, as soon as possible...)',
        '✅ Noted. Do you have a preferred **time**? (e.g., Morning 9am-12pm, afternoon 2pm-5pm...)',
        '✅ Almost done. Any **additional details** we should know? (Urgency, access, specific problem...)\n\nOr type "done" if nothing else.',
        null
    ]
};

const BOOKING_FIELD_KEYS = [null, 'name', 'phone', 'address', 'service', 'date', 'time', 'notes'];

// Called when user manually edits a form field — syncs bookingData without interrupting Joe
function syncBookingField(fieldId, value) {
    bookingData[fieldId] = value;
    const input = document.getElementById('bk-' + fieldId);
    if (input) {
        input.classList.toggle('field-filled', value.trim().length > 0);
    }
    updateBookingProgress();
}

function openBookingPanel() {
    const panel = document.getElementById('booking-panel');
    if (panel) panel.classList.remove('booking-panel-hidden');
    autofillFromProfile();
}

function closeBookingPanel() {
    const panel = document.getElementById('booking-panel');
    if (panel) panel.classList.add('booking-panel-hidden');
}

// Autofill from saved profile in localStorage
function autofillFromProfile() {
    const saved = JSON.parse(localStorage.getItem('morales_user_profile') || '{}');
    if (saved.name)    setBookingField('name',    saved.name);
    if (saved.phone)   setBookingField('phone',   saved.phone);
    if (saved.address) setBookingField('address', saved.address);
    if (saved.email)   setBookingField('email',   saved.email);
}

function setBookingField(fieldId, value) {
    if (!value || !value.trim()) return;
    bookingData[fieldId] = value;
    const input = document.getElementById('bk-' + fieldId);
    if (!input) return;
    input.value = value;
    input.classList.add('field-filled');
    updateBookingProgress();
}

function updateBookingField(fieldId, value) {
    if (!value || !value.trim()) return;
    const input = document.getElementById('bk-' + fieldId);
    if (!input) return;

    input.classList.remove('field-filled');
    input.classList.add('field-filling');
    setTimeout(() => {
        input.value = value;
        bookingData[fieldId] = value;
        input.classList.remove('field-filling');
        input.classList.add('field-filled');
        updateBookingProgress();
    }, 200);
}

function updateBookingProgress() {
    const filled = BOOKING_FIELDS.filter(f => bookingData[f] && bookingData[f].trim().length > 0).length;
    const pct = Math.round((filled / BOOKING_FIELDS.length) * 100);

    const bar   = document.getElementById('booking-progress-bar');
    const count = document.getElementById('booking-filled-count');
    const btn   = document.getElementById('booking-submit-btn');
    const status = document.getElementById('booking-status-text');

    if (bar)   bar.style.width = pct + '%';
    if (count) count.textContent = filled;

    if (filled >= BOOKING_FIELDS.length) {
        if (btn) { btn.disabled = false; btn.removeAttribute('disabled'); }
        if (status) {
            const lang = localStorage.getItem('morales_lang') || 'es';
            status.textContent = lang === 'es' ? '✅ ¡Formulario completo!' : '✅ Form complete!';
        }
    }
}

// ─── BOOKING STATE MACHINE ──────────────────────────────────
// Intercepts sendToJoe when booking mode is active
function isBookingMessage(text) {
    const t = text.toLowerCase();
    return t.match(/agend|cita|schedule|appointment|reserv|book/);
}

// Called by sendToJoe BEFORE hitting the API — returns true if handled locally
function handleBookingState(userText) {
    if (!bookingState.active && !isBookingMessage(userText)) return false;

    const lang = localStorage.getItem('morales_lang') || 'es';
    bookingState.lang = lang;
    const steps = BOOKING_STEPS[lang] || BOOKING_STEPS['es'];

    // First activation
    if (!bookingState.active) {
        bookingState.active = true;
        bookingState.step = 1;
        openBookingPanel();
        addMessage(steps[1], 'bot');
        joeHistory.push({ role: 'assistant', content: steps[1] });
        return true;
    }

    // Capture field value from user input
    const fieldKey = BOOKING_FIELD_KEYS[bookingState.step];
    if (fieldKey && userText.trim()) {
        let value = userText.trim();
        
        // For 'notes': accept "listo" / "done" as skip
        if (fieldKey === 'notes' && (value.toLowerCase() === 'listo' || value.toLowerCase() === 'done')) {
            value = '—';
        }
        
        updateBookingField(fieldKey, value);
        bookingData[fieldKey] = value;

        // Save to profile if name, phone, address
        if (['name','phone','address','email'].includes(fieldKey)) {
            const profile = JSON.parse(localStorage.getItem('morales_user_profile') || '{}');
            profile[fieldKey] = value;
            localStorage.setItem('morales_user_profile', JSON.stringify(profile));
        }
    }

    // Advance step
    bookingState.step++;

    if (bookingState.step < steps.length && steps[bookingState.step]) {
        addMessage(steps[bookingState.step], 'bot');
        joeHistory.push({ role: 'assistant', content: steps[bookingState.step] });
    } else {
        // All steps done — show summary
        bookingState.step = 8;
        const summary = buildBookingSummary(lang);
        addMessage(summary, 'bot');
        joeHistory.push({ role: 'assistant', content: summary });
        updateBookingProgress(); // force re-check
    }

    return true;
}

function buildBookingSummary(lang) {
    const d = bookingData;
    if (lang === 'es') {
        return \`📋 **Resumen de tu cita:**
👤 Nombre: \${d.name || '—'}
📞 Teléfono: \${d.phone || '—'}
📍 Dirección: \${d.address || '—'}
🔧 Servicio: \${d.service || '—'}
📆 Fecha: \${d.date || '—'}
⏰ Hora: \${d.time || '—'}
📝 Notas: \${d.notes || '—'}

Todo se ve correcto? Haz clic en **✅ Confirmar Cita** en el formulario para enviar. Si quieres cambiar algo, edita directamente el campo en el formulario.\`;
    }
    return \`📋 **Appointment Summary:**
👤 Name: \${d.name || '—'}
📞 Phone: \${d.phone || '—'}
📍 Address: \${d.address || '—'}
🔧 Service: \${d.service || '—'}
📆 Date: \${d.date || '—'}
⏰ Time: \${d.time || '—'}
📝 Notes: \${d.notes || '—'}

Does everything look correct? Click **✅ Confirm Appointment** in the form to submit. Edit any field directly in the form if needed.\`;
}

// ─── SUBMIT: send confirmation to admin + user ───────────────
function submitBooking() {
    const lang = localStorage.getItem('morales_lang') || 'es';
    const d = bookingData;

    // Save appointment to localStorage
    const appointments = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
    const appt = { id: Date.now(), ...d, created: new Date().toISOString(), status: 'pending' };
    appointments.push(appt);
    localStorage.setItem('morales_appointments', JSON.stringify(appointments));

    // ── ADMIN CONFIRMATION via mailto ────────────────────────
    const adminSubject = encodeURIComponent(\`[MORALES PLUMBING] Nueva Cita — \${d.name} — \${d.date}\`);
    const adminBody = encodeURIComponent(
\`NUEVA CITA DE SERVICIO — MORALES PLUMBING ORION PORTAL

Cliente: \${d.name}
Teléfono: \${d.phone}
Dirección: \${d.address}
Servicio: \${d.service}
Fecha: \${d.date}
Hora: \${d.time}
Notas: \${d.notes || 'N/A'}

Agendado: \${new Date().toLocaleString()}
ID: \${appt.id}

---
Este mensaje fue generado automáticamente por el Portal ORION de Morales Plumbing.
\`);
    const adminMailto = \`mailto:\${ADMIN_EMAIL}?subject=\${adminSubject}&body=\${adminBody}\`;

    // ── USER CONFIRMATION ────────────────────────────────────
    const userEmail = JSON.parse(localStorage.getItem('morales_user_profile') || '{}').email || '';
    let userMailto = '';
    if (userEmail) {
        const userSubject = encodeURIComponent(\`Confirmación de Cita — Morales Plumbing\`);
        const userBody = encodeURIComponent(
\`Hola \${d.name},

Tu cita con Morales Plumbing ha sido recibida:

🔧 Servicio: \${d.service}
📍 Dirección: \${d.address}
📆 Fecha: \${d.date}
⏰ Hora: \${d.time}

Te confirmaremos por teléfono al \${d.phone}.

Gracias por confiar en Morales Plumbing — CSLB C-36 #1156542
📞 (669) 234-2444 | moralesplumbing026@gmail.com
\`);
        userMailto = \`mailto:\${userEmail}?subject=\${userSubject}&body=\${userBody}\`;
    }

    // Open admin email immediately
    window.open(adminMailto, '_blank');

    // Open user email after 800ms if available
    if (userMailto) {
        setTimeout(() => window.open(userMailto, '_blank'), 800);
    }

    // Joe confirmation message
    const confirmMsg = lang === 'es'
        ? \`✅ ¡Cita enviada exitosamente! \n\n📧 Se ha abierto tu cliente de correo para notificar al equipo de Morales Plumbing.\${userMailto ? '\\nTambién se envió confirmación a tu correo.' : ''}\n\nNos comunicaremos contigo al \${d.phone} para confirmar. ¡Gracias, \${d.name}! 🎉\`
        : \`✅ Appointment submitted successfully!\n\n📧 Your email client has opened to notify the Morales Plumbing team.\${userMailto ? '\\nA confirmation was also sent to your email.' : ''}\n\nWe will contact you at \${d.phone} to confirm. Thank you, \${d.name}! 🎉\`;

    addMessage(confirmMsg, 'bot');

    // Update UI
    const statusText = document.getElementById('booking-status-text');
    if (statusText) statusText.textContent = lang === 'es' ? '🎉 ¡Cita enviada!' : '🎉 Appointment Sent!';

    const btn = document.getElementById('booking-submit-btn');
    if (btn) {
        btn.disabled = true;
        btn.textContent = lang === 'es' ? '✅ Cita Enviada' : '✅ Appointment Sent';
    }

    // Reset booking state
    bookingState.active = false;
    bookingState.step = 0;
    bookingData = { name: '', phone: '', address: '', service: '', date: '', time: '', notes: '' };
}

// Parse [ACTION_FILL_BOOKING] tags from AI responses
function processBookingFill(responseText) {
    const match = responseText.match(/\\[ACTION_FILL_BOOKING\\]\\s*(\\{[\\s\\S]*?\\})/);
    if (match) {
        try {
            const data = JSON.parse(match[1]);
            openBookingPanel();
            const fieldMap = { name:'name', phone:'phone', address:'address', service:'service', date:'date', time:'time', notes:'notes' };
            let delay = 0;
            for (const [key, domId] of Object.entries(fieldMap)) {
                if (data[key]) {
                    setTimeout(() => updateBookingField(domId, data[key]), delay);
                    delay += 200;
                }
            }
        } catch(e) { console.warn('ACTION_FILL_BOOKING parse error:', e.message); }
    }
}
`;

// Remove old booking system block and replace with v2
const oldBlockStart = '\n// ═══════════════════════════════════════════════════════\n// BOOKING PANEL — Smart form that Joe fills in real-time\n// ═══════════════════════════════════════════════════════';
const oldBlockEnd_marker = 'function processBookingFill(responseText) {';

const startIdx = appJs.indexOf(oldBlockStart);
if (startIdx !== -1) {
    // Find the end of the old block (end of processBookingFill function)
    let endIdx = appJs.indexOf(oldBlockEnd_marker, startIdx);
    // Find the closing } of processBookingFill
    let depth = 0;
    let inside = false;
    let i = endIdx;
    for (; i < appJs.length; i++) {
        if (appJs[i] === '{') { depth++; inside = true; }
        if (appJs[i] === '}') { depth--; if (inside && depth === 0) { i++; break; } }
    }
    appJs = appJs.slice(0, startIdx) + BOOKING_JS_V2 + appJs.slice(i);
    console.log('✅ Replaced old booking system with v2');
} else {
    // Just append
    appJs += BOOKING_JS_V2;
    console.log('✅ Appended booking system v2 (old block not found)');
}

// ─────────────────────────────────────────────────────────────
// 3. Patch sendToJoe to intercept booking state BEFORE API calls
// ─────────────────────────────────────────────────────────────
const SEND_JOE_INTERCEPT_OLD = `    addMessage(text, 'user');\r\n    input.value = '';\r\n\r\n    // Show typing indicator\r\n    const typingId = addTypingIndicator();`;
const SEND_JOE_INTERCEPT_NEW = `    addMessage(text, 'user');\r\n    input.value = '';\r\n\r\n    // Handle booking state machine FIRST (independent of AI)\r\n    if (typeof handleBookingState === 'function' && handleBookingState(text)) return;\r\n\r\n    // Show typing indicator\r\n    const typingId = addTypingIndicator();`;

appJs = appJs.replace(SEND_JOE_INTERCEPT_OLD, SEND_JOE_INTERCEPT_NEW);
console.log('✅ Patched sendToJoe with booking state intercept');

// ─────────────────────────────────────────────────────────────
// 4. Patch openBooking() to use bookingState + openBookingPanel
// ─────────────────────────────────────────────────────────────
const OLD_OPEN_BOOKING_PRELOAD = `    // Open booking panel simultaneously\r\n    openBookingPanel();\r\n\r\n    // Small delay so window animates open before sending\r\n    setTimeout(() => {\r\n        sendToJoe();\r\n        input.focus();\r\n    }, 350);`;
const NEW_OPEN_BOOKING_PRELOAD = `    // Open booking panel simultaneously\r\n    openBookingPanel();\r\n\r\n    // Reset booking state for fresh start\r\n    bookingState = { active: false, step: 0, lang: localStorage.getItem('morales_lang') || 'es' };\r\n\r\n    // Small delay so window animates open before sending\r\n    setTimeout(() => {\r\n        sendToJoe();\r\n        input.focus();\r\n    }, 350);`;
appJs = appJs.replace(OLD_OPEN_BOOKING_PRELOAD, NEW_OPEN_BOOKING_PRELOAD);
console.log('✅ Patched openBooking() with state reset');

fs.writeFileSync('app.js', appJs);
console.log('\n✅ ALL PATCHES APPLIED. Booking System v2 is live.');
