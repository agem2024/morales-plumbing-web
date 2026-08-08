const fs = require('fs');
const html = fs.readFileSync('docs/promo_tankless_to_tankless.html', 'utf8');
const matches = html.match(/src="[^"]+"/g);
console.log(matches);
