const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const regex = /\/\/ Original speakJoe replaced\s*addMessage\(text, 'user'\);/g;
const replacement = `// Original speakJoe replaced

async function sendToJoe() {
    const input = document.getElementById('joe-query');
    const text  = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');`;

if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync('app.js', content);
    console.log("Fixed!");
} else {
    console.log("Regex not found in app.js");
}
