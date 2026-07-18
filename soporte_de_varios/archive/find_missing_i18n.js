const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

// Simple regex to extract data-i18n keys
const i18nRegex = /data-i18n="([^"]+)"/g;
const keysInHtml = new Set();
let match;
while ((match = i18nRegex.exec(indexHtml)) !== null) {
    keysInHtml.add(match[1]);
}

// Extract translations object
const transMatch = appJs.match(/const\s+translations\s*=\s*(\{[\s\S]*?\n\});/);
let translations = {};
if (transMatch) {
    translations = eval('(' + transMatch[1] + ')');
} else {
    console.error('Could not find translations object');
    process.exit(1);
}

const langs = Object.keys(translations);
console.log(`Found languages: ${langs.join(', ')}`);

const missing = {};
for (const lang of langs) {
    missing[lang] = [];
    for (const key of keysInHtml) {
        if (!translations[lang][key]) {
            missing[lang].push(key);
        }
    }
}

for (const lang of langs) {
    console.log(`Missing in ${lang} (${missing[lang].length}):`);
    console.log(missing[lang].join(', '));
}
