const fs = require('fs');
const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');

const regex = /data-i18n=\"([^\"]+)\"/g;
let match;
let keys = new Set();
while ((match = regex.exec(html)) !== null) {
    keys.add(match[1]);
}

const missing = [];
for (const key of keys) {
    if (!js.includes('"' + key + '"')) {
        missing.push(key);
    }
}

console.log('All keys:', Array.from(keys).join(', '));
console.log('Missing in app.js:', missing.join(', '));
