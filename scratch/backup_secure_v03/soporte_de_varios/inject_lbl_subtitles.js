const fs = require('fs');

let appjs = fs.readFileSync('app.js', 'utf8');

const translations = {
    'en': 'Comic Reference',
    'es': 'Traducción de Historieta',
    'zh': '漫画参考翻译',
    'tl': 'Pagsasalin ng Komiks',
    'vi': 'Bản dịch Truyện tranh'
};

for (const lang of Object.keys(translations)) {
    const marker = '"' + lang + '": {';
    const insertion = `        "lbl_subtitles": "${translations[lang]}",\n`;
    
    appjs = appjs.replace(marker, marker + '\n' + insertion);
}

fs.writeFileSync('app.js', appjs);
console.log("Injected lbl_subtitles into app.js");
