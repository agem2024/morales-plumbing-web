const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// Replace all occurrences of 3/4" with 3/4 inch or similar
appJs = appJs.replace(/3\/4" o mayor/g, '3/4 de pulgada o mayor');
appJs = appJs.replace(/3\/4" 或更大/g, '3/4英寸或更大');

fs.writeFileSync('app.js', appJs);
console.log('Fixed syntax error in app.js caused by unescaped quote in ES and ZH');
