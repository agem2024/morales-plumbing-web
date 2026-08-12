const fs = require('fs');
let appjs = fs.readFileSync('app.js', 'utf8');
console.log('EN has pb_svc_1_name?', appjs.substring(appjs.indexOf('"en"'), appjs.indexOf('"es"')).includes('pb_svc_1_name'));
console.log('ES has pb_svc_1_name?', appjs.substring(appjs.indexOf('"es"'), appjs.indexOf('"zh"')).includes('pb_svc_1_name'));
