const fs = require('fs');

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return '';
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        const json = await response.json();
        // The result is an array where the first element contains the translated segments
        let translated = '';
        if (json && json[0]) {
            json[0].forEach(segment => {
                translated += segment[0];
            });
        }
        return translated || text;
    } catch (e) {
        console.error(`Error translating to ${targetLang}:`, e.message);
        return text; // fallback
    }
}

async function run() {
    console.log("Iniciando motor de traducción IA...");
    const htmlFile = 'docs/pricebook.html';
    let html = fs.readFileSync(htmlFile, 'utf8');

    // Extract the services array
    const arrayMatch = html.match(/const services = (\[[\s\S]*?\]);\s*let activeCategory/);
    if (!arrayMatch) {
        console.log("No se pudo encontrar el array de servicios en pricebook.html");
        return;
    }

    let servicesString = arrayMatch[1];
    let services;
    try {
        services = eval(servicesString);
    } catch(e) {
        console.log("Error al hacer eval del array:", e);
        return;
    }

    // Languages mapping to Google Translate codes
    const langs = {
        'en': 'en',
        'zh': 'zh-CN',
        'tl': 'tl',
        'vi': 'vi'
    };

    const newTranslations = {
        'en': {},
        'es': {},
        'zh': {},
        'tl': {},
        'vi': {}
    };

    console.log(`Extrayendo ${services.length} servicios para traducción. Esto puede tomar un par de minutos...`);

    for (let i = 0; i < services.length; i++) {
        let s = services[i];
        
        // Save original Spanish text directly
        const extractAndTranslate = async (tier, field) => {
            let esText = s.details[tier][field];
            let key = `pb_svc_${s.id}_${tier}_${field}`;
            
            // Spanish base
            newTranslations['es'][key] = esText;

            // Translate to others
            for (let langKey of Object.keys(langs)) {
                let tlCode = langs[langKey];
                let translated = await translateText(esText, tlCode);
                newTranslations[langKey][key] = translated.replace(/"/g, '\\"'); // escape quotes for app.js
                // Add a small delay to avoid Google API rate limits (HTTP 429 Too Many Requests)
                await new Promise(r => setTimeout(r, 100)); 
            }
        };

        await extractAndTranslate('good', 'just');
        await extractAndTranslate('good', 'mat');
        await extractAndTranslate('good', 'tools');
        await extractAndTranslate('good', 'time');

        await extractAndTranslate('better', 'just');
        await extractAndTranslate('better', 'mat');
        await extractAndTranslate('better', 'tools');
        await extractAndTranslate('better', 'time');

        await extractAndTranslate('best', 'just');
        await extractAndTranslate('best', 'mat');
        await extractAndTranslate('best', 'tools');
        await extractAndTranslate('best', 'time');
        
        console.log(`Traducido Servicio: ${s.id}`);
    }

    console.log("Traducciones completadas. Inyectando en app.js...");

    let appJs = fs.readFileSync('app.js', 'utf8');

    for (const lang of Object.keys(newTranslations)) {
        let insertStr = '';
        for (const [k, v] of Object.entries(newTranslations[lang])) {
            // Remove literal newlines that might break JS objects if not escaped
            let cleanV = v.replace(/\n/g, ' ').replace(/\r/g, '');
            insertStr += `\n        "${k}": "${cleanV}",`;
        }
        
        let regexLangStart = new RegExp(`("${lang}"\\s*:\\s*\\{)`);
        appJs = appJs.replace(regexLangStart, `$1${insertStr}`);
    }

    fs.writeFileSync('app.js', appJs);
    
    console.log("Modificando pricebook.html para utilizar las nuevas llaves dinámicas...");
    
    // Now replace the hardcoded s.details variables in pricebook.html rendering logic
    // We want to replace `<span class="dyn-val">\${s.details.good.just}</span>` 
    // with `<span class="dyn-val" data-i18n="pb_svc_\${s.id}_good_just"></span>`
    
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.good\.just\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_good_just"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.good\.mat\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_good_mat"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.good\.tools\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_good_tools"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.good\.time\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_good_time"></span>');

    html = html.replace(/<span class="dyn-val">\$\{s\.details\.better\.just\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_better_just"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.better\.mat\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_better_mat"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.better\.tools\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_better_tools"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.better\.time\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_better_time"></span>');

    html = html.replace(/<span class="dyn-val">\$\{s\.details\.best\.just\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_best_just"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.best\.mat\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_best_mat"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.best\.tools\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_best_tools"></span>');
    html = html.replace(/<span class="dyn-val">\$\{s\.details\.best\.time\}<\/span>/g, '<span class="dyn-val" data-i18n="pb_svc_${s.id}_best_time"></span>');
    
    // Ensure the function calls updateContent() after rendering
    if(!html.includes("if(typeof updateContent === 'function') setTimeout(updateContent, 50);")) {
        html = html.replace('renderServices(filtered);', "renderServices(filtered);\n            if(typeof updateContent === 'function') setTimeout(updateContent, 50);");
    }

    fs.writeFileSync(htmlFile, html);
    console.log("Misión Cumplida. Catálogo 100% multilingüe.");
}

run();
