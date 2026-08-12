const fs = require('fs');

const bookingJS = `

// ═══════════════════════════════════════════════════════
// BOOKING PANEL — Smart form that Joe fills in real-time
// ═══════════════════════════════════════════════════════
let bookingData = { name: '', phone: '', address: '', service: '', date: '', time: '', notes: '' };
const BOOKING_FIELDS = ['name', 'phone', 'address', 'service', 'date', 'time'];

function openBookingPanel() {
    const panel = document.getElementById('booking-panel');
    if (panel) {
        panel.classList.remove('booking-panel-hidden');
    }
}

function closeBookingPanel() {
    const panel = document.getElementById('booking-panel');
    if (panel) panel.classList.add('booking-panel-hidden');
}

function updateBookingField(fieldId, value) {
    const input = document.getElementById('bk-' + fieldId);
    if (!input || !value) return;

    // Animate fill
    input.classList.remove('field-filled');
    input.classList.add('field-filling');
    
    setTimeout(() => {
        input.value = value;
        input.classList.remove('field-filling');
        input.classList.add('field-filled');
        bookingData[fieldId] = value;
        updateBookingProgress();
    }, 300);
}

function updateBookingProgress() {
    const filled = BOOKING_FIELDS.filter(f => bookingData[f] && bookingData[f].trim().length > 0).length;
    const pct = Math.round((filled / BOOKING_FIELDS.length) * 100);
    
    const bar = document.getElementById('booking-progress-bar');
    const count = document.getElementById('booking-filled-count');
    const submitBtn = document.getElementById('booking-submit-btn');
    const statusText = document.getElementById('booking-status-text');
    
    if (bar) bar.style.width = pct + '%';
    if (count) count.textContent = filled;
    
    if (filled >= BOOKING_FIELDS.length) {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.removeAttribute('disabled');
        }
        if (statusText) {
            const lang = localStorage.getItem('morales_lang') || 'es';
            statusText.textContent = lang === 'es' ? '✅ ¡Formulario completo!' : '✅ Form complete!';
        }
    }
}

function submitBooking() {
    const lang = localStorage.getItem('morales_lang') || 'es';
    
    // Save to localStorage
    const appointments = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
    const newAppt = {
        id: Date.now(),
        ...bookingData,
        created: new Date().toISOString(),
        status: 'pending'
    };
    appointments.push(newAppt);
    localStorage.setItem('morales_appointments', JSON.stringify(appointments));

    // Notify Joe
    const confirmMsg = lang === 'es'
        ? '📅 ¡Cita confirmada exitosamente! Hemos guardado tu cita para el ' + bookingData.date + ' a las ' + bookingData.time + '. Te contactaremos al ' + bookingData.phone + ' para confirmar. ¡Gracias, ' + bookingData.name + '!'
        : '📅 Appointment confirmed! We have booked your appointment for ' + bookingData.date + ' at ' + bookingData.time + '. We will contact you at ' + bookingData.phone + ' to confirm. Thank you, ' + bookingData.name + '!';
    
    addMessage(confirmMsg, 'bot');

    // Update status
    const statusText = document.getElementById('booking-status-text');
    if (statusText) statusText.textContent = lang === 'es' ? '🎉 ¡Cita confirmada!' : '🎉 Appointment Confirmed!';

    // Disable submit
    const btn = document.getElementById('booking-submit-btn');
    if (btn) {
        btn.disabled = true;
        btn.textContent = lang === 'es' ? '✅ Cita Enviada' : '✅ Appointment Sent';
    }

    // Reset data after 5 seconds
    setTimeout(() => {
        bookingData = { name: '', phone: '', address: '', service: '', date: '', time: '', notes: '' };
    }, 5000);
}

// Parse [ACTION_FILL_BOOKING] tags from Joe's responses
function processBookingFill(responseText) {
    const match = responseText.match(/\\[ACTION_FILL_BOOKING\\]\\s*(\\{[\\s\\S]*?\\})/);
    if (match) {
        try {
            const data = JSON.parse(match[1]);
            // Open the panel if it is not open
            openBookingPanel();
            // Fill each field with a cascade delay
            let delay = 0;
            const fieldMap = {
                name: 'name', phone: 'phone', address: 'address',
                service: 'service', date: 'date', time: 'time', notes: 'notes'
            };
            for (const [key, domId] of Object.entries(fieldMap)) {
                if (data[key]) {
                    setTimeout(() => updateBookingField(domId, data[key]), delay);
                    delay += 250;
                }
            }
        } catch (e) {
            console.warn('Could not parse ACTION_FILL_BOOKING:', e.message);
        }
    }
}
`;

let appJs = fs.readFileSync('app.js', 'utf8');

// Inject at the end of the file
appJs += bookingJS;
fs.writeFileSync('app.js', appJs);
console.log('Booking JS logic injected into app.js (' + appJs.length + ' bytes)');
