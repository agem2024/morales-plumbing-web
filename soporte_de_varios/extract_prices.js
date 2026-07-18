const fs = require('fs');
const html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');
const regex = /<div class="price-amount"[^>]*>([^<]+)<\/div>/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(match[1]);
}
