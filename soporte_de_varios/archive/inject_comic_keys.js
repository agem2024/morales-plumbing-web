const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const regex = /(const TRANSLATIONS = \{[\s\S]*?"en": \{)/;
appJs = appJs.replace(regex, '$1\n        "pb_btn_comic_repipe": "View Illustrated Step-by-Step Guide",\n        "pb_btn_comic_coming_soon": "Illustrated Guide (Coming Soon)",');

const regexEs = /("es": \{)/;
appJs = appJs.replace(regexEs, '$1\n        "pb_btn_comic_repipe": "Ver Guía Ilustrada Paso a Paso",\n        "pb_btn_comic_coming_soon": "Guía Ilustrada (Próximamente)",');

const regexZh = /("zh": \{)/;
appJs = appJs.replace(regexZh, '$1\n        "pb_btn_comic_repipe": "查看图文并茂的逐步指南",\n        "pb_btn_comic_coming_soon": "图文指南 (即将推出)",');

const regexTl = /("tl": \{)/;
appJs = appJs.replace(regexTl, '$1\n        "pb_btn_comic_repipe": "Tingnan ang Isinalarawan na Hakbang-hakbang na Gabay",\n        "pb_btn_comic_coming_soon": "Isinalarawan na Gabay (Malapit Na)",');

const regexVi = /("vi": \{)/;
appJs = appJs.replace(regexVi, '$1\n        "pb_btn_comic_repipe": "Xem Hướng dẫn Từng bước Có Hình minh họa",\n        "pb_btn_comic_coming_soon": "Hướng dẫn Có Hình minh họa (Sắp có)",');

fs.writeFileSync('app.js', appJs);
console.log("Injected comic translation keys");
