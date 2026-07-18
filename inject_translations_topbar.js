const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const additions = {
    'en': ',\n        "topbar_emergency": "24/7 Emergency Service",\n        "topbar_book": "Book Online",\n        "topbar_call": "Call Now:"',
    'es': ',\n        "topbar_emergency": "Servicio de Emergencia 24/7",\n        "topbar_book": "Reservar Online",\n        "topbar_call": "Llamar Ahora:"',
    'zh': ',\n        "topbar_emergency": "24/7 紧急服务",\n        "topbar_book": "在线预订",\n        "topbar_call": "现在致电:"',
    'tl': ',\n        "topbar_emergency": "24/7 Emergency Service",\n        "topbar_book": "Book Online",\n        "topbar_call": "Tawagan Na:"',
    'vi': ',\n        "topbar_emergency": "Dịch vụ khẩn cấp 24/7",\n        "topbar_book": "Đặt trực tuyến",\n        "topbar_call": "Gọi Ngay:"'
};

const langs = ['en', 'es', 'zh', 'tl', 'vi'];

for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    let startIndex = code.indexOf('"' + lang + '": {');
    if (startIndex === -1) continue;
    let endIndex = i < langs.length - 1 ? code.indexOf('"' + langs[i+1] + '": {', startIndex) : code.indexOf('};', startIndex);
    
    let block = code.substring(startIndex, endIndex);
    let lastBraceIdx = block.lastIndexOf('    }');
    if (lastBraceIdx !== -1) {
        block = block.substring(0, lastBraceIdx) + additions[lang] + '\n' + block.substring(lastBraceIdx);
        code = code.substring(0, startIndex) + block + code.substring(endIndex);
    }
}

fs.writeFileSync('app.js', code);
console.log('Translations injected successfully!');
