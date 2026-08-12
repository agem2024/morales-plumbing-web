const fs = require('fs');

const missingReplacements = {
    "en": {
        "btn_ley_baaqmd": "BAAQMD 2027 Law & Codes",
        "btn_req_hp": "View Technical Requirements & Diagram (Heat Pump)",
        "btn_req_tt": "View Technical Requirements & Diagram (Tank to Tankless)",
        "btn_req_ttt": "View Technical Requirements & Diagram (Tankless to Tankless)"
    },
    "es": {
        "btn_ley_baaqmd": "Ley BAAQMD 2027 y Códigos",
        "btn_req_hp": "Ver Requerimientos Técnicos y Diagrama (Heat Pump)",
        "btn_req_tt": "Ver Requerimientos Técnicos y Diagrama (Tanque a Tankless)",
        "btn_req_ttt": "Ver Requerimientos Técnicos y Diagrama (Tankless a Tankless)"
    },
    "zh": {
        "btn_ley_baaqmd": "BAAQMD 2027 法律与法规",
        "btn_req_hp": "查看技术要求和图表（热泵）",
        "btn_req_tt": "查看技术要求和图表（有水箱到无水箱）",
        "btn_req_ttt": "查看技术要求和图表（无水箱到无水箱）"
    },
    "tl": {
        "btn_ley_baaqmd": "Batas at Kodigo ng BAAQMD 2027",
        "btn_req_hp": "Tingnan ang Teknikal na Kinakailangan at Diagram (Heat Pump)",
        "btn_req_tt": "Tingnan ang Teknikal na Kinakailangan at Diagram (Tank to Tankless)",
        "btn_req_ttt": "Tingnan ang Teknikal na Kinakailangan at Diagram (Tankless to Tankless)"
    },
    "vi": {
        "btn_ley_baaqmd": "Luật & Quy tắc BAAQMD 2027",
        "btn_req_hp": "Xem Yêu cầu Kỹ thuật & Sơ đồ (Bơm Nhiệt)",
        "btn_req_tt": "Xem Yêu cầu Kỹ thuật & Sơ đồ (Bình chứa sang Không bình chứa)",
        "btn_req_ttt": "Xem Yêu cầu Kỹ thuật & Sơ đồ (Không bình chứa sang Không bình chứa)"
    }
};

let appJs = fs.readFileSync('app.js', 'utf8');

for (const lang of ["en", "es", "zh", "tl", "vi"]) {
    let injectionStr = "";
    for (const key in missingReplacements[lang]) {
        injectionStr += `\n        "${key}": "${missingReplacements[lang][key]}",`;
    }
    
    // Safely inject right before the closing brace of the language block
    const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?)(\\n\\s*\\},?)`, 'g');
    appJs = appJs.replace(regex, `$1${injectionStr}$2`);
}

fs.writeFileSync('app.js', appJs);
console.log('Successfully injected missing button translations into app.js');

// Now update the HTML file to include these data-i18n attributes
let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Replace Ley BAAQMD button
html = html.replace(/>Ley BAAQMD 2027 y Códigos<\/a>/g, ' data-i18n="btn_ley_baaqmd">Ley BAAQMD 2027 y Códigos</a>');

// Replace Ver Requerimientos (Heat Pump)
html = html.replace(/>Ver Requerimientos Técnicos y Diagrama \(Heat Pump\)<\/a>/g, ' data-i18n="btn_req_hp">Ver Requerimientos Técnicos y Diagrama (Heat Pump)</a>');

// Replace Ver Requerimientos (Tank to Tankless)
html = html.replace(/>Ver Requerimientos Técnicos y Diagrama \(Tanque a Tankless\)<\/a>/g, ' data-i18n="btn_req_tt">Ver Requerimientos Técnicos y Diagrama (Tanque a Tankless)</a>');

// Replace Ver Requerimientos (Tankless to Tankless)
html = html.replace(/>Ver Requerimientos Técnicos y Diagrama \(Tankless a Tankless\)<\/a>/g, ' data-i18n="btn_req_ttt">Ver Requerimientos Técnicos y Diagrama (Tankless a Tankless)</a>');

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully added data-i18n attributes to promocion_water_heaters.html');
