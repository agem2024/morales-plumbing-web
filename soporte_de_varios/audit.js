const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const imgRegex = /src=[\'\"]([^\'\"]+)[\'\"]/gi;
const urlRegex = /url\([\'\"]?([^\'\")]+)[\'\"]?\)/gi;
const images = new Set();
let match;
while ((match = imgRegex.exec(html)) !== null) { images.add(match[1]); }
while ((match = urlRegex.exec(html)) !== null) { images.add(match[1]); }

console.log("--- Image Audit ---");
Array.from(images).sort().forEach(img => {
    if (img.startsWith('http') || img.startsWith('data:')) {
        console.log(`EXTERNAL/DATA: ${img}`);
    } else {
        const exists = fs.existsSync(img);
        console.log(`[${exists ? 'OK' : 'MISSING'}] ${img}`);
    }
});
