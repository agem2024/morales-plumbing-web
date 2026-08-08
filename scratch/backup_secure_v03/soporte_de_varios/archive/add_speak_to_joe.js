const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

const target = "addMessage(reply, 'bot');";
const replacement = "addMessage(reply, 'bot');\n    speakJoe(reply);";

if (content.includes(target) && !content.includes(replacement)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('app.js', content);
    console.log("Added speakJoe to sendToJoe");
} else {
    console.log("Already added or target not found");
}
