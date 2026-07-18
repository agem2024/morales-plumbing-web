const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const replacements = {
    "en": {
        "lbl_materials": "Equipment & Materials:",
        "lbl_labor": "Specialized Labor:",
        "lbl_permits": "City Permits & Inspections:",
        "lbl_disposal": "Waste Disposal & Haul-away:",
        "lbl_total": "Total Estimated Investment:"
    },
    "es": {
        "lbl_materials": "Equipos y Materiales:",
        "lbl_labor": "Mano de Obra Especializada:",
        "lbl_permits": "Permisos de la Ciudad e Inspecciones:",
        "lbl_disposal": "Desecho y Retiro de Residuos:",
        "lbl_total": "Inversión Total Estimada:"
    },
    "zh": {
        "lbl_materials": "设备及材料:",
        "lbl_labor": "专业人工:",
        "lbl_permits": "城市许可证和检查:",
        "lbl_disposal": "废物处理和清理:",
        "lbl_total": "总预估投资:"
    },
    "tl": {
        "lbl_materials": "Kagamitan at Materyales:",
        "lbl_labor": "Espesyalistang Paggawa:",
        "lbl_permits": "City Permits at Inspeksyon:",
        "lbl_disposal": "Pagtapon at Paghakot ng Basura:",
        "lbl_total": "Kabuuang Tinantyang Puhunan:"
    },
    "vi": {
        "lbl_materials": "Thiết bị & Vật liệu:",
        "lbl_labor": "Nhân công chuyên môn:",
        "lbl_permits": "Giấy phép thành phố & Kiểm tra:",
        "lbl_disposal": "Xử lý & Dọn rác thải:",
        "lbl_total": "Tổng mức đầu tư ước tính:"
    }
};

const langs = ["en", "es", "zh", "tl", "vi"];
let newAppJs = "";
let currentIdx = 0;

for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    const searchString = `"${lang}": {`;
    const startIdx = appJs.indexOf(searchString, currentIdx);
    
    let endIdx = -1;
    if (i < langs.length - 1) {
        endIdx = appJs.indexOf(`"${langs[i+1]}": {`, startIdx + 1);
    } else {
        endIdx = appJs.lastIndexOf('};');
    }

    let langBlock = appJs.substring(startIdx, endIdx);
    
    let injectionStr = "";
    for (const key in replacements[lang]) {
        injectionStr += `\n        "${key}": "${replacements[lang][key]}",`;
    }
    
    // find "promo_wp_best_li5": ".*?"
    const regex = /("promo_wp_best_li5"\s*:\s*".*?")/g;
    langBlock = langBlock.replace(regex, `$1,${injectionStr}`);

    newAppJs += appJs.substring(currentIdx, startIdx);
    newAppJs += langBlock;
    currentIdx = endIdx;
}
newAppJs += appJs.substring(currentIdx);
fs.writeFileSync('app.js', newAppJs);
console.log('Successfully injected breakdown labels into app.js');
