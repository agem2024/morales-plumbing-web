const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

// We want to match all keys and remove emojis at the beginning of the translation string.
const keysToFix = ['topbar_emergency', 'hero_fast_booking', 'nav_portal_header'];

for (const key of keysToFix) {
    const regex = new RegExp(`("${key}":\\s*")([^a-zA-Z0-9<]*)\\s*([^"]+")`, 'g');
    appJs = appJs.replace(regex, '$1$3');
}

fs.writeFileSync('app.js', appJs);
console.log('Done!');
