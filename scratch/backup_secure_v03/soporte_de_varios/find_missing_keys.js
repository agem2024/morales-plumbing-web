const fs = require('fs');
let appjs = fs.readFileSync('app.js', 'utf8');

// We need to parse `translations` object from app.js
// Since it's not a module, we can use eval or Function
const translationsMatch = appjs.match(/const translations = (\{[\s\S]*?\n\});/);
if (translationsMatch) {
    let translations;
    eval('translations = ' + translationsMatch[1]);
    
    const baseLang = 'en';
    const langs = ['es', 'zh', 'tl', 'vi'];
    const missing = {};
    
    for (const lang of langs) {
        missing[lang] = [];
        for (const key of Object.keys(translations[baseLang])) {
            if (!translations[lang] || !translations[lang][key]) {
                missing[lang].push(key);
            }
        }
    }
    
    fs.writeFileSync('missing_keys.json', JSON.stringify(missing, null, 2));
    console.log('Missing keys written to missing_keys.json');
} else {
    console.log('Could not find translations object.');
}
