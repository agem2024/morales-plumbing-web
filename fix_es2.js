const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Use basic Javascript string replacement for the exact broken sequences:
html = html.replace(/PlomerÃ\xADa/g, 'Plomería');
html = html.replace(/PlomerÃ­a/g, 'Plomería');
html = html.replace(/Ã³/g, 'ó');
html = html.replace(/Ã¡/g, 'á');
html = html.replace(/Ã©/g, 'é');
html = html.replace(/Ã\xAD/g, 'í');
html = html.replace(/Ãº/g, 'ú');
html = html.replace(/Ã±/g, 'ñ');
html = html.replace(/Â¿/g, '¿');
html = html.replace(/Â¡/g, '¡');
html = html.replace(/Ã /g, 'Á');
html = html.replace(/Ã‰/g, 'É');
html = html.replace(/Ã\x8D/g, 'Í');
html = html.replace(/Ã“/g, 'Ó');
html = html.replace(/Ãš/g, 'Ú');
html = html.replace(/Ã‘/g, 'Ñ');
html = html.replace(/â€”/g, '—');
html = html.replace(/â€œ/g, '“');
html = html.replace(/â€\x9D/g, '”');
html = html.replace(/â€˜/g, '‘');
html = html.replace(/â€™/g, '’');
html = html.replace(/â€¢/g, '•');
html = html.replace(/Ã¼/g, 'ü');
html = html.replace(/Ãœ/g, 'Ü');
html = html.replace(/Ã\x8D/g, 'Í');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed simple symbols in index.html');
