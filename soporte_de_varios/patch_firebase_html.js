const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// ── 1. Replace booking panel labels with PICO icons ──────────
const emojiReplacements = [
    // Booking panel labels
    ['📅</span>\n                <span data-i18n="booking_panel_title"', 
     '<span class="pico-icon pico-appointment"></span></span>\n                <span data-i18n="booking_panel_title"'],
    ['👤 Nombre Completo', '<span class="pico-icon pico-person"></span> Nombre Completo'],
    ['📞 Teléfono', '<span class="pico-icon pico-pipe_phone"></span> Teléfono'],
    ['📍 Dirección del Servicio', '<span class="pico-icon pico-drop_pin"></span> Dirección del Servicio'],
    ['🔧 Tipo de Servicio', '<span class="pico-icon pico-wrench"></span> Tipo de Servicio'],
    ['📆 Fecha Preferida', '<span class="pico-icon pico-pipe_date"></span> Fecha Preferida'],
    ['⏰ Hora', '<span class="pico-icon pico-pressure_gauge"></span> Hora'],
    ['📝 Notas Adicionales', '<span class="pico-icon pico-clipboard"></span> Notas Adicionales'],
    // Submit button  
    ['✅ Confirmar Cita', '<span class="pico-icon pico-valve_check"></span> Confirmar Cita'],
    // Hero button calendar
    ['<span style="font-size:18px; vertical-align:middle; margin-right:6px;">📅</span>',
     '<span class="pico-icon pico-appointment" style="width:20px;height:20px;margin-right:6px;display:inline-block;vertical-align:middle;"></span>'],
];

emojiReplacements.forEach(([from, to]) => {
    if (html.includes(from)) {
        html = html.replace(from, to);
        console.log('Replaced: ' + from.substring(0, 40) + '...');
    } else {
        console.log('NOT FOUND: ' + from.substring(0, 40));
    }
});

// ── 2. Inject Firebase SDK + PICO Icons + firebase-service before </body> ──
const FIREBASE_SCRIPTS = `
    <!-- ═══ FIREBASE SDK ═══ -->
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

    <!-- ═══ MORALES FIREBASE CONFIG ═══ -->
    <script>
    // Paste your Firebase config here after creating your project
    // at https://console.firebase.google.com
    window.MORALES_FIREBASE_CONFIG = {
        apiKey:            "TU_API_KEY",
        authDomain:        "morales-plumbing-orion.firebaseapp.com",
        projectId:         "morales-plumbing-orion",
        storageBucket:     "morales-plumbing-orion.appspot.com",
        messagingSenderId: "TU_MESSAGING_SENDER_ID",
        appId:             "TU_APP_ID"
    };
    </script>

    <!-- ═══ PICO PLUMBING ICONS ═══ -->
    <script src="pico-icons.js"></script>

    <!-- ═══ FIREBASE SERVICE ═══ -->
    <script src="firebase-service.js"></script>

`;

html = html.replace('</body>', FIREBASE_SCRIPTS + '</body>');
console.log('Injected Firebase SDK + PICO Icons + firebase-service.js');

fs.writeFileSync('index.html', html);
console.log('index.html updated.');
