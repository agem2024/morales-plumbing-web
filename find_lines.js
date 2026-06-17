const fs = require('fs');
const vm = require('vm');

let content = fs.readFileSync('app.js', 'utf8');

// We only want the translations object part to avoid running DOM logic
const startIdx = content.indexOf('const translations =');
const endIdx = content.indexOf('};;', startIdx) + 2;
const transCode = content.substring(startIdx, endIdx).replace('const translations =', 'translations =');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(transCode, sandbox);
const translations = sandbox.translations;

const keysToCheck = [
    'eng_diseno_title', 'eng_diseno_code', 'eng_diseno_p1', 'eng_diseno_p2', 
    'eng_diseno_tech1_title', 'eng_diseno_tech1_desc', 'eng_diseno_tech2_title', 'eng_diseno_tech2_desc', 'eng_diseno_tech3_title', 'eng_diseno_tech3_desc',
    'eng_cobre_title', 'eng_cobre_code', 'eng_cobre_p1', 'eng_cobre_p2',
    'eng_cobre_tech1_title', 'eng_cobre_tech1_desc', 'eng_cobre_tech2_title', 'eng_cobre_tech2_desc', 'eng_cobre_tech3_title', 'eng_cobre_tech3_desc'
];

for (const k of keysToCheck) {
    console.log(`\nKey: ${k}`);
    for (const lang of ['en', 'es', 'zh', 'tl', 'vi']) {
        const val = translations[lang][k];
        console.log(`  [${lang}]: ${val ? 'YES (' + val.substring(0, 30) + ')' : 'MISSING'}`);
    }
}
