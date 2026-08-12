const fs = require('fs');

function replaceInFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // In index.html
    content = content.replace(/· <span class="neon-name">Alex G\. Espinosa<\/span> ·/g, '·');
    content = content.replace(/MORALES PLUMBING · Alex G\. Espinosa ·/g, 'MORALES PLUMBING ·');
    
    // In app.js
    content = content.replace(/· <span class=\\"neon-name\\">Alex G\. Espinosa<\/span> ·/g, '·');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}

replaceInFile('index.html');
replaceInFile('app.js');
