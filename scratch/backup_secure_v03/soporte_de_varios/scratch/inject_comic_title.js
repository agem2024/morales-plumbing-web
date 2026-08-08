const fs = require('fs');

const appJsPath = './app.js';
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const newKeys = {
  en: { "promo_wp_comic_title": "Installation Guide (Narrative Comic)" },
  es: { "promo_wp_comic_title": "Guía de Instalación (Cómic Narrativo)" },
  zh: { "promo_wp_comic_title": "安装指南（叙事漫画）" },
  tl: { "promo_wp_comic_title": "Gabay sa Pag-install (Komiks na Pasalaysay)" },
  vi: { "promo_wp_comic_title": "Hướng dẫn Lắp đặt (Truyện tranh Kể chuyện)" }
};

let modified = false;
for (const lang of Object.keys(newKeys)) {
    const langPattern = new RegExp(`("${lang}"\\s*:\\s*\\{)`);
    if (langPattern.test(appJsContent)) {
        let injectString = `\n        "promo_wp_comic_title": "${newKeys[lang]["promo_wp_comic_title"]}",`;
        appJsContent = appJsContent.replace(langPattern, `$1${injectString}`);
        modified = true;
    }
}

if (modified) {
    fs.writeFileSync(appJsPath, appJsContent, 'utf8');
}
