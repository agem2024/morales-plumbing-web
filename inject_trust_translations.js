const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const additions = {
    'en': ',\n        "trust_callout_fee": "Free Estimates | $0 Call Out",\n        "trust_license": "CSLB License #1156542",\n        "trust_pricing_guide": "Transparent Pricing Guide"',
    'es': ',\n        "trust_callout_fee": "Estimados Gratuitos | $0 Visita",\n        "trust_license": "Licencia CSLB #1156542",\n        "trust_pricing_guide": "Guía de Precios Transparente"',
    'zh': ',\n        "trust_callout_fee": "免费估价 | $0 上门费",\n        "trust_license": "CSLB 执照 #1156542",\n        "trust_pricing_guide": "透明价格指南"',
    'tl': ',\n        "trust_callout_fee": "Libreng Tantya | $0 Bayad sa Pagtawag",\n        "trust_license": "Lisensya ng CSLB #1156542",\n        "trust_pricing_guide": "Transparenteng Gabay sa Pagpepresyo"',
    'vi': ',\n        "trust_callout_fee": "Ước tính miễn phí | $0 Phí gọi thợ",\n        "trust_license": "Giấy phép CSLB #1156542",\n        "trust_pricing_guide": "Hướng dẫn Giá minh bạch"'
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
console.log('Trust signals translations injected successfully!');
