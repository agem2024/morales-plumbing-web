const fs = require('fs');

const replacements = {
    "en": {
        "promo_wp_better_desc": "Rheem ProTerra 50-Gallon Hybrid. High efficiency, WiFi connectivity, integrated leak detection.",
        "promo_wp_best_desc": "Rheem ProTerra 50-Gallon Hybrid. Smart home integration, full electrical panel upgrade assessment.",
        "promo_wp_good_li1": "Rheem ProTerra 50-Gal Heat Pump Unit.",
        "promo_wp_better_li1": "Everything in GOOD, plus:",
        "promo_wp_better_li2": "Moen Flo Smart Leak Detection Valve.",
        "promo_wp_better_li3": "Thermal Expansion Tank installation.",
        "promo_wp_best_li1": "Everything in BETTER, plus:",
        "promo_wp_best_li2": "Whole-home Pressure Regulating Valve (PRV).",
        "promo_wp_best_li3": "Electrical Panel Capacity Assessment.",
        "promo_wp_best_comic_2": "2. Installation of the Rheem ProTerra 50-Gal unit with premium smart routing."
    },
    "es": {
        "promo_wp_better_desc": "Rheem ProTerra Híbrido 50 Galones. Alta eficiencia, conectividad WiFi, detección de fugas.",
        "promo_wp_best_desc": "Rheem ProTerra Híbrido 50 Galones. Integración domótica, evaluación de panel eléctrico.",
        "promo_wp_good_li1": "Unidad Bomba de Calor Rheem 50-Gal.",
        "promo_wp_better_li1": "Todo lo de GOOD, más:",
        "promo_wp_better_li2": "Válvula Inteligente de Fugas Moen Flo.",
        "promo_wp_better_li3": "Instalación de Tanque de Expansión.",
        "promo_wp_best_li1": "Todo lo de BETTER, más:",
        "promo_wp_best_li2": "Válvula Reguladora de Presión (PRV) principal.",
        "promo_wp_best_li3": "Evaluación de Capacidad del Panel Eléctrico.",
        "promo_wp_best_comic_2": "2. Colocación del equipo Rheem ProTerra de 50 galones con enrutamiento inteligente."
    },
    "zh": {
        "promo_wp_better_desc": "Rheem ProTerra 50加仑混合热水器。高效、WiFi连接、集成漏水检测。",
        "promo_wp_best_desc": "Rheem ProTerra 50加仑混合热水器。智能家居集成、全面电气面板评估。",
        "promo_wp_good_li1": "Rheem 50加仑热泵热水器。",
        "promo_wp_better_li1": "包括GOOD中的所有内容，加上：",
        "promo_wp_better_li2": "Moen Flo 智能漏水检测阀。",
        "promo_wp_better_li3": "安装热膨胀罐。",
        "promo_wp_best_li1": "包括BETTER中的所有内容，加上：",
        "promo_wp_best_li2": "全屋水压调节阀（PRV）。",
        "promo_wp_best_li3": "电气面板容量评估。",
        "promo_wp_best_comic_2": "2. 安装带有高级智能路由的 Rheem ProTerra 50加仑设备。"
    },
    "tl": {
        "promo_wp_better_desc": "Rheem ProTerra 50-Gallon Hybrid. High efficiency, WiFi connectivity, integrated leak detection.",
        "promo_wp_best_desc": "Rheem ProTerra 50-Gallon Hybrid. Smart home integration, full panel upgrade assessment.",
        "promo_wp_good_li1": "Rheem 50-Gal Heat Pump Unit.",
        "promo_wp_better_li1": "Lahat ng nasa GOOD, at higit pa:",
        "promo_wp_better_li2": "Moen Flo Smart Leak Detection Valve.",
        "promo_wp_better_li3": "Instalasyon ng Thermal Expansion Tank.",
        "promo_wp_best_li1": "Lahat ng nasa BETTER, at higit pa:",
        "promo_wp_best_li2": "Whole-home Pressure Regulating Valve (PRV).",
        "promo_wp_best_li3": "Pagsusuri sa Electrical Panel Capacity.",
        "promo_wp_best_comic_2": "2. Paglagay ng Rheem ProTerra 50-Gal unit na may premium smart routing."
    },
    "vi": {
        "promo_wp_better_desc": "Rheem ProTerra Hybrid 50 Gallon. Hiệu suất cao, kết nối WiFi, phát hiện rò rỉ.",
        "promo_wp_best_desc": "Rheem ProTerra Hybrid 50 Gallon. Tích hợp nhà thông minh, đánh giá bảng điện.",
        "promo_wp_good_li1": "Máy nước nóng Heat Pump Rheem 50-Gal.",
        "promo_wp_better_li1": "Tất cả trong GOOD, cộng thêm:",
        "promo_wp_better_li2": "Van phát hiện rò rỉ thông minh Moen Flo.",
        "promo_wp_better_li3": "Lắp đặt bình giãn nở nhiệt.",
        "promo_wp_best_li1": "Tất cả trong BETTER, cộng thêm:",
        "promo_wp_best_li2": "Van điều áp nước toàn nhà (PRV).",
        "promo_wp_best_li3": "Đánh giá công suất bảng điện.",
        "promo_wp_best_comic_2": "2. Lắp đặt thiết bị Rheem ProTerra 50-Gal với định tuyến thông minh cao cấp."
    }
};

let appJs = fs.readFileSync('app.js', 'utf8');
const langs = ["en", "es", "zh", "tl", "vi"];

for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    
    // Simple string replace for keys we know are unique per language block now
    for (const key in replacements[lang]) {
        const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?)"${key}"\\s*:\\s*".*?"`, "g");
        appJs = appJs.replace(regex, `$1"${key}": "${replacements[lang][key]}"`);
    }
}
fs.writeFileSync('app.js', appJs);
console.log('Fixed unit sizes across all tiers in app.js');
