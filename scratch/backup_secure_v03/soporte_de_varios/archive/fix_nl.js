const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');
js = js.replace(/\\n/g, '\n');
fs.writeFileSync('app.js', js);
console.log('Fixed app.js newlines');
