const fs = require('fs');
let html = fs.readFileSync('docs/req_hp.html', 'utf8');
const bubbles = [...html.matchAll(/data-i18n="([^"]+)"/g)];
bubbles.forEach(b => console.log(b[1]));
