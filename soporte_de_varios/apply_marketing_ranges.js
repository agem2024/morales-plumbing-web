const fs = require('fs');

function calculateMaxPrice(priceStr) {
    let base = parseInt(priceStr.replace(/,/g, ''), 10);
    let max = 0;
    if (base < 1000) {
        max = Math.ceil((base * 1.5) / 50) * 50;
    } else if (base < 3000) {
        max = Math.ceil((base + 800) / 100) * 100;
    } else if (base < 5000) {
        max = Math.ceil((base + 1500) / 100) * 100;
    } else {
        max = Math.ceil((base + 2500) / 100) * 100;
    }
    return max.toLocaleString('en-US');
}

// 1. Process app.js
let appPath = 'app.js';
if (fs.existsSync(appPath)) {
    let appJs = fs.readFileSync(appPath, 'utf8');

    // Regex for each language
    const patterns = [
        /Starting at\s*\\?\$([0-9,]+)/g, // English
        /Desde\s*\\?\$([0-9,]+)/g,       // Spanish
        /起价\s*\\?\$([0-9,]+)/g,         // Chinese
        /Nagsisimula sa\s*\\?\$([0-9,]+)/g, // Tagalog
        /Bắt đầu từ\s*\\?\$([0-9,]+)/g     // Vietnamese
    ];

    patterns.forEach(regex => {
        appJs = appJs.replace(regex, (match, price) => {
            let maxPrice = calculateMaxPrice(price);
            return `\$${price} - \$${maxPrice}`;
        });
    });

    fs.writeFileSync(appPath, appJs);
    console.log('Successfully updated app.js to use price frames (ranges).');
}

// 2. Process all service HTML files
const glob = fs.readdirSync('docs');
glob.forEach(f => {
  if (f.endsWith('.html') && !f.includes('analisis')) {
    const filePath = 'docs/' + f;
    let html = fs.readFileSync(filePath, 'utf8');
    
    const originalHtml = html;
    
    // In the HTML files, we changed it to "Desde $X,XXX" previously
    html = html.replace(/Desde\s*\$([0-9,]+)/g, (match, price) => {
        let maxPrice = calculateMaxPrice(price);
        return `\$${price} - \$${maxPrice}`;
    });
    
    if (html !== originalHtml) {
        fs.writeFileSync(filePath, html);
        console.log('Updated hardcoded ranges in: ' + filePath);
    }
  }
});
