const fs = require('fs');
const js = fs.readFileSync('app.js', 'utf8');

const tStart = js.indexOf('const translations =');
if (tStart === -1) {
    console.log("No translations object found");
    process.exit(1);
}

// simple script to find if promo_wp_title is in each language block
const langs = ['"en":', '"es":', '"zh":', '"tl":', '"vi":'];
let positions = [];
for (let lang of langs) {
    positions.push(js.indexOf(lang, tStart));
}
positions.push(js.indexOf('};', positions[positions.length - 1]));

for (let i = 0; i < langs.length; i++) {
    const block = js.substring(positions[i], positions[i+1]);
    console.log(langs[i], 'includes promo_wp_title:', block.includes('promo_wp_title'));
}
