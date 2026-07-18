const fs = require('fs');
const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const matches = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
console.log(matches.slice(0, 30));
