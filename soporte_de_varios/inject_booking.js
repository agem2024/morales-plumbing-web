const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const openBookingFn = `
// Opens Joe AI directly in appointment scheduling mode
function openBooking() {
    const container = document.getElementById('joe-container');
    const input = document.getElementById('joe-query');

    // Show Joe if hidden
    if (container.classList.contains('assistant-hidden')) {
        container.classList.remove('assistant-hidden');
    }

    // Scroll into view
    container.scrollIntoView({ behavior: 'smooth', block: 'end' });

    // Pre-fill and auto-send the booking trigger based on language
    const lang = localStorage.getItem('morales_lang') || 'es';
    const bookingMessages = {
        'en': 'I want to schedule a plumbing service appointment.',
        'es': 'Quiero agendar una cita de servicio de plomería.',
        'zh': '我想preabout管道服务预约。',
        'tl': 'Gusto kong mag-schedule ng appointment para sa plumbing service.',
        'vi': 'Toi muon dat lich hen dich vu sua ong nuoc.'
    };

    const msg = bookingMessages[lang] || bookingMessages['es'];
    input.value = msg;

    // Small delay so window animates open before sending
    setTimeout(() => {
        sendToJoe();
        input.focus();
    }, 350);

    // Greet if first time
    if (!joeHasGreeted) {
        const joeMsg = document.querySelector('.msg.bot');
        if (joeMsg && joeHistory.length === 0) {
            speakJoe(joeMsg.innerText);
        }
        joeHasGreeted = true;
    }
}
`;

// Insert after closing brace of toggleJoe
const marker = 'function toggleJoe() {';
const markerIdx = content.indexOf(marker);
// Find the closing } of toggleJoe
let depth = 0;
let insertAt = -1;
for (let i = markerIdx; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') {
        depth--;
        if (depth === 0) {
            insertAt = i + 1;
            break;
        }
    }
}

if (insertAt === -1) {
    console.error('Could not find end of toggleJoe()');
    process.exit(1);
}

content = content.slice(0, insertAt) + openBookingFn + content.slice(insertAt);
fs.writeFileSync('app.js', content);
console.log('openBooking() successfully injected into app.js at position', insertAt);
