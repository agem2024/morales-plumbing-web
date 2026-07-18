const fs = require('fs');

const glob = fs.readdirSync('docs');
glob.forEach(f => {
  if (f.endsWith('.html') && !f.includes('analisis')) {
    const filePath = 'docs/' + f;
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Replace "— $X,XXX" with "— Desde $X,XXX"
    const originalHtml = html;
    html = html.replace(/—\s*\$([0-9,]+)/g, '— Desde $$$1');
    
    if (html !== originalHtml) {
        fs.writeFileSync(filePath, html);
        console.log('Updated hardcoded static ranges in: ' + filePath);
    }
  }
});
