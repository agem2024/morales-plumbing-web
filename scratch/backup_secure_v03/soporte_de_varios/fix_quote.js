const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// The issue is an unescaped double quote in 3/4"
// Let's replace '3/4"' with '3/4 inch' in the text.
appJs = appJs.replace(/3\/4" or larger/g, '3/4 inch or larger');

fs.writeFileSync('app.js', appJs);
console.log('Fixed syntax error in app.js caused by unescaped quote');
