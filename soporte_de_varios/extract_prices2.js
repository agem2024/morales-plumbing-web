const fs = require('fs');
const files = [
    'docs/promo_tank_to_tankless.html', 
    'docs/promo_tankless_to_tankless.html'
];
const regex = /<div class="price-amount"[^>]*>([^<]+)<\/div>/g;
files.forEach(file => {
    if(fs.existsSync(file)) {
        const html = fs.readFileSync(file, 'utf8');
        let match;
        console.log(`--- ${file} ---`);
        while ((match = regex.exec(html)) !== null) {
            console.log(match[1]);
        }
    }
});
