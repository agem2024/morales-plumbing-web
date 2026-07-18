const fs = require('fs');
const js = fs.readFileSync('app.js', 'utf8').split('\n');

for (let i = 0; i < js.length; i++) {
    if (js[i].includes('promo_ttt_better_desc')) {
        console.log(`Line ${i + 1}: ${js[i].trim()}`);
    }
}
