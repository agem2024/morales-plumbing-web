const fs = require('fs');
let appjs = fs.readFileSync('app.js', 'utf8');
const zhIndex = appjs.indexOf('"zh"');
const tlIndex = appjs.indexOf('"tl"');
console.log('ZH has pb_svc_1_name?', appjs.substring(zhIndex, tlIndex).includes('pb_svc_1_name'));
