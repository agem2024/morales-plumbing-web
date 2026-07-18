const fs = require('fs');
const html = fs.readFileSync('docs/pricebook.html', 'utf8');
const links = html.match(/href="([^"]+)"/g);
console.log(links);
