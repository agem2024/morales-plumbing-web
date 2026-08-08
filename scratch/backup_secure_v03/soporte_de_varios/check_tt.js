const fs = require('fs');
const html = fs.readFileSync('docs/promo_tank_to_tankless.html', 'utf8');
const matches = html.match(/src="[^"]+"/g);
console.log(matches);
