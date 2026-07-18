const fs = require('fs');

const js = fs.readFileSync('app.js', 'utf8');

const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const regex = /data-i18n=\"([^\"]+)\"/g;
let match;
let keys = new Set();
while ((match = regex.exec(html)) !== null) {
    keys.add(match[1]);
}

// Very simple heuristic: search for the key 5 times? No, search for '"' + key + '"'.
// Let's actually parse the translations object or just count occurrences.
for (const key of keys) {
    let count = 0;
    let pos = 0;
    while(true) {
        let idx = js.indexOf('"' + key + '"', pos);
        if (idx === -1) break;
        count++;
        pos = idx + 1;
    }
    if (count < 5) {
        console.log(`Key ${key} has only ${count} occurrences.`);
    }
}
