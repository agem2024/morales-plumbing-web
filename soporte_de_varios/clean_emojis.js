const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');
const keysToClean = [
    'tab_dashboard', 'tab_schedule', 'tab_pqr', 'tab_profile', 'tab_policies', 'tab_manual',
    'dash_active_appointments', 'dash_active_pqrs', 'lbl_send_feedback', 'maint_title'
];
keysToClean.forEach(k => {
    // A simple regex to match the key, then any emojis or special chars at the start of the string
    const regex = new RegExp('("' + k + '":\\s*")[\\s\\p{Emoji}]+', 'gu');
    js = js.replace(regex, '$1');
});
fs.writeFileSync('app.js', js, 'utf8');
console.log('Cleaned emojis successfully!');
