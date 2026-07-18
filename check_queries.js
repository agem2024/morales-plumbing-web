const fs = require('fs');
const js = fs.readFileSync('app.js', 'utf8');

const queries = [
    '.cyber-nav a',
    '.ecosystem-nav-btn',
    '.ai-toggle input',
    '#voiceBtn',
    '#emergencyBtn',
    '#closeDiyBtn',
    '#services'
];

for (const q of queries) {
    if (js.includes(`querySelector('${q}')`) || js.includes(`querySelectorAll('${q}')`)) {
        console.log(`Queries for: ${q}`);
    }
}
