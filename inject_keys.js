const fs = require('fs');
const jsPath = 'c:/Users/alexp/Documentos_Locales_Backup/Morales plumbing/morales-plumbing-web/app.js';
const htmlPath = 'c:/Users/alexp/Documentos_Locales_Backup/Morales plumbing/morales-plumbing-web/docs/promocion_water_heaters.html';

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

const regex = /data-i18n="([^"]+)"[^>]*>([^<]+)</g;
let match;
let missingKeys = {};

while ((match = regex.exec(html)) !== null) {
    const key = match[1];
    const val = match[2].trim();
    if (!js.includes('"' + key + '"')) {
        missingKeys[key] = val;
    }
}

if (Object.keys(missingKeys).length === 0) {
    console.log("No missing keys found.");
    process.exit(0);
}

console.log("Missing keys:", Object.keys(missingKeys).length);

// We need to inject these keys into each language object in app.js
// The translations object looks like: const translations = { "en": { ... }, "es": { ... }, "zh": { ... }, "tl": { ... }, "vi": { ... } };
// Find the end of each language block.

let newJs = js;

const langs = ['en', 'es', 'zh', 'tl', 'vi'];

// A quick and dirty way is to just find `"services_subtitle": "..."` and inject after it.
for (const lang of langs) {
    // find `"services_subtitle":` in this lang block
    const langStart = newJs.indexOf(`"${lang}": {`);
    if (langStart === -1) continue;
    
    const targetKeyIndex = newJs.indexOf('"services_subtitle":', langStart);
    if (targetKeyIndex === -1) continue;
    
    // Find the end of this line
    const eol = newJs.indexOf('\n', targetKeyIndex);
    
    let injected = '';
    for (const [k, v] of Object.entries(missingKeys)) {
        // we just use the English text for now, or prefix with [LANG]
        injected += `\n        "${k}": ${JSON.stringify(v)},`;
    }
    
    newJs = newJs.substring(0, eol) + injected + newJs.substring(eol);
}

fs.writeFileSync(jsPath, newJs, 'utf8');
console.log("app.js updated successfully with missing keys.");
