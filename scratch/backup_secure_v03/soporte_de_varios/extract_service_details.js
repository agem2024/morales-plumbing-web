const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

let esTranslations = {};
let enTranslations = {};

for (let i = 1; i <= 15; i++) {
    let svcPath = `docs/service_${i}.html`;
    if (fs.existsSync(svcPath)) {
        let svcHtml = fs.readFileSync(svcPath, 'utf8');
        
        // Extract text and add data-i18n tag
        svcHtml = svcHtml.replace(/<li class="tier-good">([\s\S]*?)<\/li>/, (m, content) => {
            let split = content.split('</strong>');
            if (split.length < 2) return m;
            let text = split[1].replace(/<br>/g, '').trim();
            esTranslations[`svc_${i}_good_desc`] = text;
            enTranslations[`svc_${i}_good_desc`] = "[EN] " + text;
            return `<li class="tier-good">${split[0]}</strong><br><span data-i18n="svc_${i}_good_desc">${text}</span></li>`;
        });

        svcHtml = svcHtml.replace(/<li class="tier-better">([\s\S]*?)<\/li>/, (m, content) => {
            let split = content.split('</strong>');
            if (split.length < 2) return m;
            let text = split[1].replace(/<br>/g, '').trim();
            esTranslations[`svc_${i}_better_desc`] = text;
            enTranslations[`svc_${i}_better_desc`] = "[EN] " + text;
            return `<li class="tier-better">${split[0]}</strong><br><span data-i18n="svc_${i}_better_desc">${text}</span></li>`;
        });

        svcHtml = svcHtml.replace(/<li class="tier-best">([\s\S]*?)<\/li>/, (m, content) => {
            let split = content.split('</strong>');
            if (split.length < 2) return m;
            let text = split[1].replace(/<br>/g, '').trim();
            esTranslations[`svc_${i}_best_desc`] = text;
            enTranslations[`svc_${i}_best_desc`] = "[EN] " + text;
            return `<li class="tier-best">${split[0]}</strong><br><span data-i18n="svc_${i}_best_desc">${text}</span></li>`;
        });
        
        fs.writeFileSync(svcPath, svcHtml);
        console.log(`Updated HTML tags for docs/service_${i}.html`);
    }
}

// Inject into app.js
let esStr = "";
for (const [key, val] of Object.entries(esTranslations)) {
    esStr += `        "${key}": "${val.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
}

let enStr = "";
for (const [key, val] of Object.entries(enTranslations)) {
    enStr += `        "${key}": "${val.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
}

appJs = appJs.replace(/"en":\s*\{([\s\S]*?)\}(?=\s*,\s*"es":)/, (m, c) => `"en": {${enStr}${c}}`);
appJs = appJs.replace(/"es":\s*\{([\s\S]*?)\}(?=\s*,\s*"zh":)/, (m, c) => `"es": {${esStr}${c}}`);
appJs = appJs.replace(/"zh":\s*\{([\s\S]*?)\}(?=\s*,\s*"tl":)/, (m, c) => `"zh": {${enStr}${c}}`);
appJs = appJs.replace(/"tl":\s*\{([\s\S]*?)\}(?=\s*,\s*"vi":)/, (m, c) => `"tl": {${enStr}${c}}`);
appJs = appJs.replace(/"vi":\s*\{([\s\S]*?)\}\s*};?$/, (m, c) => `"vi": {${enStr}${c}}};`);

fs.writeFileSync('app.js', appJs);
console.log('Injected translations into app.js');
