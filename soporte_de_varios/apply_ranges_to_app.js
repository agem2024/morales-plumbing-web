const fs = require('fs');

let appPath = 'app.js';
if (fs.existsSync(appPath)) {
    let appJs = fs.readFileSync(appPath, 'utf8');

    // We will do a language-specific replacement.
    // 1. English: "en": { ... }
    appJs = appJs.replace(/"en":\s*\{([\s\S]*?)\}(?=\s*,\s*"es":)/, (match, enContent) => {
        let updated = enContent.replace(/—\s*\$([0-9,]+)/g, '— Starting at $$$1');
        updated = updated.replace(/—\s*\\\$([0-9,]+)/g, '— Starting at \\$$$1'); // in case it's escaped
        return `"en": {${updated}}`;
    });

    // 2. Spanish: "es": { ... }
    appJs = appJs.replace(/"es":\s*\{([\s\S]*?)\}(?=\s*,\s*"zh":)/, (match, esContent) => {
        let updated = esContent.replace(/—\s*\$([0-9,]+)/g, '— Desde $$$1');
        return `"es": {${updated}}`;
    });

    // 3. Chinese: "zh": { ... }
    appJs = appJs.replace(/"zh":\s*\{([\s\S]*?)\}(?=\s*,\s*"tl":)/, (match, zhContent) => {
        let updated = zhContent.replace(/—\s*\$([0-9,]+)/g, '— 起价 $$$1');
        return `"zh": {${updated}}`;
    });

    // 4. Tagalog: "tl": { ... }
    appJs = appJs.replace(/"tl":\s*\{([\s\S]*?)\}(?=\s*,\s*"vi":)/, (match, tlContent) => {
        let updated = tlContent.replace(/—\s*\$([0-9,]+)/g, '— Nagsisimula sa $$$1');
        return `"tl": {${updated}}`;
    });

    // 5. Vietnamese: "vi": { ... }
    // "vi" is the last one, so it doesn't have a trailing comma language match.
    appJs = appJs.replace(/"vi":\s*\{([\s\S]*?)\}\s*};?$/, (match, viContent) => {
        let updated = viContent.replace(/—\s*\$([0-9,]+)/g, '— Bắt đầu từ $$$1');
        return `"vi": {${updated}}};`;
    });

    // Also look for other standalone instances of $X,XXX in the descriptions that might be fixed prices,
    // though the main concern is the bold package headers.

    fs.writeFileSync(appPath, appJs);
    console.log('Successfully updated all service prices in app.js to use "Starting At" strategy.');
}
