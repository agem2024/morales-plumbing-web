const fs = require('fs');
const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const m = html.match(/class="comic-img-wrapper"[^>]*>\s*<img src="([^"]+)"/g);
console.log(m);
