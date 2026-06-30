const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const missingTranslations = {
    en: {
        "nav_portal_header": "Portal",
    },
    es: {
        "topbar_emergency": "Servicio de Emergencia 24/7",
        "topbar_call": "Llamar Ahora:",
        "nav_portal_header": "Portal",
        "hero_fast_booking": "Agenda Rápido con Joe",
    },
    zh: {
        "topbar_emergency": "24/7 紧急服务",
        "topbar_call": "立即致电:",
        "nav_portal_header": "门户网站",
        "hero_fast_booking": "与乔快速预约",
    },
    tl: {
        "topbar_emergency": "24/7 Serbisyo ng Emergency",
        "topbar_call": "Tumawag Ngayon:",
        "nav_portal_header": "Portal",
        "hero_fast_booking": "Mabilis na Pag-book kay Joe",
    },
    vi: {
        "topbar_emergency": "Dịch vụ khẩn cấp 24/7",
        "topbar_call": "Gọi ngay:",
        "nav_portal_header": "Cổng thông tin",
        "hero_fast_booking": "Đặt chỗ nhanh với Joe",
    }
};

for (const lang in missingTranslations) {
    const keys = missingTranslations[lang];
    for (const key in keys) {
        // Find where the language block starts
        const langRegex = new RegExp(`"${lang}":\\s*\\{`);
        appJs = appJs.replace(langRegex, `"${lang}": {\n        "${key}": "${keys[key]}",`);
    }
}

fs.writeFileSync('app.js', appJs);
console.log('Injected missing CTA translations.');
