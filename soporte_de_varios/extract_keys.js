const fs = require('fs');

const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const regex = /data-i18n="([^"]+)"[^>]*>([^<]+)</g;
let match;
const enDict = {};

while ((match = regex.exec(html)) !== null) {
    const key = match[1];
    let val = match[2].trim();
    if (val && !enDict[key]) {
        enDict[key] = val;
    }
}

fs.writeFileSync('missing_keys.json', JSON.stringify(enDict, null, 2));
console.log('Extracted keys to missing_keys.json: ' + Object.keys(enDict).length);
