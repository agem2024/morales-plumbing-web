const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const regex = /(const TRANSLATIONS = \{[\s\S]*?"en": \{)/;
appJs = appJs.replace(regex, '$1\n        "nav_back_pb": "← Back to Pricebook",');

const regexEs = /("es": \{)/;
appJs = appJs.replace(regexEs, '$1\n        "nav_back_pb": "← Volver al Catálogo",');

const regexZh = /("zh": \{)/;
appJs = appJs.replace(regexZh, '$1\n        "nav_back_pb": "← 返回价格表",');

const regexTl = /("tl": \{)/;
appJs = appJs.replace(regexTl, '$1\n        "nav_back_pb": "← Bumalik sa Pricebook",');

const regexVi = /("vi": \{)/;
appJs = appJs.replace(regexVi, '$1\n        "nav_back_pb": "← Quay lại Bảng giá",');

fs.writeFileSync('app.js', appJs);
console.log("Injected nav_back_pb keys");
