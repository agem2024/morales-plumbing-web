const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const translations = {
    'en': '⚡ Eco Water Heater Systems',
    'es': '⚡ Sistemas Eco de Calentadores',
    'zh': '⚡ 环保热水器系统',
    'tl': '⚡ Eco Water Heater Systems',
    'vi': '⚡ Hệ thống máy nước nóng Eco'
};

let injectedCount = 0;

for (const lang in translations) {
    const regex = new RegExp(`["']?${lang}["']?:\\s*\\{`);
    const match = regex.exec(appJs);
    if (match) {
        const insertPos = match.index + match[0].length;
        const injectStr = `\n        "btn_eco_systems": "${translations[lang]}",`;
        appJs = appJs.slice(0, insertPos) + injectStr + appJs.slice(insertPos);
        injectedCount++;
    }
}

if (injectedCount === 5) {
    fs.writeFileSync('app.js', appJs);
    console.log('Successfully injected btn_eco_systems into all 5 languages in app.js.');
} else {
    console.log(`Failed! Only found ${injectedCount} languages.`);
}
