const fs = require('fs');

const replacements = {
    "en": {
        "promo_wp_good_li1": "Rheem ProTerra 50-Gal Heat Pump Unit.",
        "promo_wp_good_li2": "City permits & CSLB code compliance.",
        "promo_wp_good_li3": "Haul-away & disposal of old unit.",
        "promo_wp_good_li4": "1-Year Labor Warranty.",
        "promo_wp_better_li1": "Everything in GOOD, plus:",
        "promo_wp_better_li2": "Moen Flo Smart Leak Detection Valve.",
        "promo_wp_better_li3": "Thermal Expansion Tank installation.",
        "promo_wp_better_li4": "Dedicated 240V wiring (up to 20ft) & WiFi.",
        "promo_wp_better_li5": "3-Year Labor Warranty.",
        "promo_wp_best_li1": "Everything in BETTER, plus:",
        "promo_wp_best_li2": "Bradford White AeroTherm 80-Gal Unit.",
        "promo_wp_best_li3": "Whole-home Pressure Regulating Valve (PRV).",
        "promo_wp_best_li4": "Electrical Panel Capacity Assessment.",
        "promo_wp_best_li5": "Lifetime Labor Warranty."
    },
    "es": {
        "promo_wp_good_li1": "Unidad Bomba de Calor Rheem 50-Gal.",
        "promo_wp_good_li2": "Permisos y cumplimiento del código CSLB.",
        "promo_wp_good_li3": "Retiro y desecho del calentador viejo.",
        "promo_wp_good_li4": "1 Año de Garantía en Mano de Obra.",
        "promo_wp_better_li1": "Todo lo de GOOD, más:",
        "promo_wp_better_li2": "Válvula Inteligente de Fugas Moen Flo.",
        "promo_wp_better_li3": "Instalación de Tanque de Expansión.",
        "promo_wp_better_li4": "Cableado 240V (hasta 20 pies) y WiFi.",
        "promo_wp_better_li5": "3 Años de Garantía en Mano de Obra.",
        "promo_wp_best_li1": "Todo lo de BETTER, más:",
        "promo_wp_best_li2": "Unidad Bradford White AeroTherm 80-Gal.",
        "promo_wp_best_li3": "Válvula Reguladora de Presión (PRV) principal.",
        "promo_wp_best_li4": "Evaluación de Capacidad del Panel Eléctrico.",
        "promo_wp_best_li5": "Garantía de por Vida en Mano de Obra."
    },
    "zh": {
        "promo_wp_good_li1": "Rheem 50加仑热泵热水器。",
        "promo_wp_good_li2": "城市许可证和 CSLB 代码合规。",
        "promo_wp_good_li3": "运走并处理旧设备。",
        "promo_wp_good_li4": "1年人工保修。",
        "promo_wp_better_li1": "包括GOOD中的所有内容，加上：",
        "promo_wp_better_li2": "Moen Flo 智能漏水检测阀。",
        "promo_wp_better_li3": "安装热膨胀罐。",
        "promo_wp_better_li4": "专用 240V 布线（最长20英尺）和 WiFi。",
        "promo_wp_better_li5": "3年人工保修。",
        "promo_wp_best_li1": "包括BETTER中的所有内容，加上：",
        "promo_wp_best_li2": "Bradford White AeroTherm 80加仑热水器。",
        "promo_wp_best_li3": "全屋水压调节阀（PRV）。",
        "promo_wp_best_li4": "电气面板容量评估。",
        "promo_wp_best_li5": "终身人工保修。"
    },
    "tl": {
        "promo_wp_good_li1": "Rheem 50-Gal Heat Pump Unit.",
        "promo_wp_good_li2": "Mga permit ng lungsod at CSLB compliance.",
        "promo_wp_good_li3": "Paghakot at pagtapon ng lumang unit.",
        "promo_wp_good_li4": "1 Taong Warranty sa Labor.",
        "promo_wp_better_li1": "Lahat ng nasa GOOD, at higit pa:",
        "promo_wp_better_li2": "Moen Flo Smart Leak Detection Valve.",
        "promo_wp_better_li3": "Instalasyon ng Thermal Expansion Tank.",
        "promo_wp_better_li4": "Dedicated 240V wiring (hanggang 20ft) & WiFi.",
        "promo_wp_better_li5": "3 Taong Warranty sa Labor.",
        "promo_wp_best_li1": "Lahat ng nasa BETTER, at higit pa:",
        "promo_wp_best_li2": "Bradford White AeroTherm 80-Gal Unit.",
        "promo_wp_best_li3": "Whole-home Pressure Regulating Valve (PRV).",
        "promo_wp_best_li4": "Pagsusuri sa Electrical Panel Capacity.",
        "promo_wp_best_li5": "Lifetime Labor Warranty."
    },
    "vi": {
        "promo_wp_good_li1": "Máy nước nóng Heat Pump Rheem 50-Gal.",
        "promo_wp_good_li2": "Giấy phép thành phố và chuẩn mã CSLB.",
        "promo_wp_good_li3": "Dọn đi và vứt bỏ máy cũ.",
        "promo_wp_good_li4": "Bảo hành nhân công 1 năm.",
        "promo_wp_better_li1": "Tất cả trong GOOD, cộng thêm:",
        "promo_wp_better_li2": "Van phát hiện rò rỉ thông minh Moen Flo.",
        "promo_wp_better_li3": "Lắp đặt bình giãn nở nhiệt.",
        "promo_wp_better_li4": "Đường dây 240V riêng (dài tới 20ft) & WiFi.",
        "promo_wp_better_li5": "Bảo hành nhân công 3 năm.",
        "promo_wp_best_li1": "Tất cả trong BETTER, cộng thêm:",
        "promo_wp_best_li2": "Máy Bradford White AeroTherm 80-Gal.",
        "promo_wp_best_li3": "Van điều áp nước toàn nhà (PRV).",
        "promo_wp_best_li4": "Đánh giá công suất bảng điện.",
        "promo_wp_best_li5": "Bảo hành nhân công trọn đời."
    }
};

let appJs = fs.readFileSync('app.js', 'utf8');
const langs = ["en", "es", "zh", "tl", "vi"];

let newAppJs = "";
let currentIdx = 0;

for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    const searchString = `"${lang}": {`;
    const startIdx = appJs.indexOf(searchString, currentIdx);
    if (startIdx === -1) {
        console.error("Could not find start for lang", lang);
        continue;
    }
    
    // Find the end of this block
    let endIdx = -1;
    if (i < langs.length - 1) {
        endIdx = appJs.indexOf(`"${langs[i+1]}": {`, startIdx + 1);
    } else {
        // Last block, search for '};' or end
        endIdx = appJs.lastIndexOf('};');
    }

    let langBlock = appJs.substring(startIdx, endIdx);
    
    // Inject the new keys directly after "promo_wp_best_desc": "..."
    let injectionStr = "";
    for (const key in replacements[lang]) {
        injectionStr += `\n        "${key}": "${replacements[lang][key]}",`;
    }
    
    // find "promo_wp_best_desc": ".*?"
    const regex = /("promo_wp_best_desc"\s*:\s*".*?")/g;
    langBlock = langBlock.replace(regex, `$1,${injectionStr}`);

    newAppJs += appJs.substring(currentIdx, startIdx);
    newAppJs += langBlock;
    currentIdx = endIdx;
}

newAppJs += appJs.substring(currentIdx);
fs.writeFileSync('app.js', newAppJs);
console.log('Successfully injected pricing details into app.js.');
