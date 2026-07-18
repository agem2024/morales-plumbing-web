const fs = require('fs');

let appContent = fs.readFileSync('app.js', 'utf8');
appContent = appContent.replace(/Joe AI/g, "Joe");
fs.writeFileSync('app.js', appContent);

let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/Joe AI/g, "Joe");
fs.writeFileSync('index.html', indexContent);

console.log("Replaced remaining 'Joe AI' with 'Joe' in app.js and index.html");
