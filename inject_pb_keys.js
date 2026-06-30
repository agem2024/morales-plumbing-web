const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const tiers = ['good', 'better', 'best'];
const langs = ['en', 'es', 'zh', 'tl', 'vi'];

let newFields = {};
langs.forEach(lang => {
    newFields[lang] = '';
    for(let i=1; i<=15; i++) {
        newFields[lang] += `\n        "pb_svc_${i}_title": "Service ${i}",`;
        for(let tier of tiers) {
            newFields[lang] += `\n        "pb_svc_${i}_${tier}_just": "Justification",`;
            newFields[lang] += `\n        "pb_svc_${i}_${tier}_mat": "Materials",`;
            newFields[lang] += `\n        "pb_svc_${i}_${tier}_tools": "Tools",`;
            newFields[lang] += `\n        "pb_svc_${i}_${tier}_time": "Time",`;
        }
    }
});

for (let lang of langs) {
    // Find the start of the language object, e.g., "en": {
    const regex = new RegExp(`("${lang}":\\s*\\{)`);
    appJs = appJs.replace(regex, `$1${newFields[lang]}`);
}

fs.writeFileSync('app.js', appJs);
console.log('Appended basic pb_svc keys.');
