const fs = require('fs');
let appjs = fs.readFileSync('app.js', 'utf8');
console.log('ZH:', appjs.includes('"zh"'));
console.log('ES:', appjs.includes('"es"'));
