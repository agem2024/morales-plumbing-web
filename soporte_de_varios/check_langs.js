const fs = require('fs');
const appJs = fs.readFileSync('app.js', 'utf8');
console.log('en:', appJs.indexOf('"en": {'));
console.log('es:', appJs.indexOf('"es": {'));
console.log('zh:', appJs.indexOf('"zh": {'));
console.log('tl:', appJs.indexOf('"tl": {'));
console.log('vi:', appJs.indexOf('"vi": {'));
