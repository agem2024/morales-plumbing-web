const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

content = content.replace(
    /\/\/ Original speakJoe replaced\n\n    addMessage\(text, 'user'\);/g,
    `// Original speakJoe replaced

async function sendToJoe() {
    const input = document.getElementById('joe-query');
    const text  = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');`
);

fs.writeFileSync('app.js', content);
console.log("Fixed missing sendToJoe");
