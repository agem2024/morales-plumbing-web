const fs = require('fs');
let html = fs.readFileSync('docs/pricebook.html', 'utf8');

// The replacement was evaluated in node, so it literally says `href="service_.html"` in the file.
// We want to replace `service_.html` with `service_${s.id}.html` (where ${s.id} is literally the string "${s.id}").
html = html.replace(/href="service_\.html"/g, 'href="service_${s.id}.html"');

fs.writeFileSync('docs/pricebook.html', html);
console.log("Fixed service links in pricebook.html");
