const fs = require('fs');
const js = fs.readFileSync('app.js', 'utf8');

const esStart = js.indexOf('"es": {');
const zhStart = js.indexOf('"zh": {');
const esBlock = js.substring(esStart, zhStart);
console.log('es includes promo_wp_title: ' + esBlock.includes('promo_wp_title'));
console.log('es includes promo_wp_best_title: ' + esBlock.includes('promo_wp_best_title'));
