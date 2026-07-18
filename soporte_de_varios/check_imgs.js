const fs = require('fs');
const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const matches = html.match(/src="[^"]+"/g);
console.log(matches);
