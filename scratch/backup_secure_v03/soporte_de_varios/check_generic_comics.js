const fs = require('fs');
const path = require('path');

function checkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) continue;
        if (fullPath.endsWith('.html')) {
            const html = fs.readFileSync(fullPath, 'utf8');
            const matches = html.match(/comic_(good|better|best)\.png/g);
            if (matches) {
                console.log(`Found in ${fullPath}:`, matches);
            }
        }
    }
}

checkDir('.');
checkDir('docs');
