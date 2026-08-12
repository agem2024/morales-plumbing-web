const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// The first section in promocion_water_heaters.html is Heat Pump.
// We need to carefully replace the comic_good/better/best in the HP section with plan_good/better/best
let sections = html.split('<!-- Tank to Tankless Upgrade -->');
if (sections.length === 1) {
    sections = html.split('<!-- Hero Section -->\n        <section class="promo-hero">'); 
    // Wait, the second promo hero is at line 375
}

// Just to be safe and precise, let's do targeted replacements.
// Heat Pump section uses Rheem ProTerra (lines 277-342).
// Tank to Tankless section uses Navien (lines 439-500).

// For Rheem (Heat Pump), the original images were plan_good.png, plan_better.png, plan_best.png.
let firstHalf = html.substring(0, html.indexOf('Tank to Tankless Upgrade'));
let secondHalf = html.substring(html.indexOf('Tank to Tankless Upgrade'));

firstHalf = firstHalf.replace(/comic_good\.png/g, 'plan_good.png');
firstHalf = firstHalf.replace(/comic_better\.png/g, 'plan_better.png');
firstHalf = firstHalf.replace(/comic_best\.png/g, 'plan_best.png');

html = firstHalf + secondHalf;

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log("Restored plan_*.png in promocion_water_heaters.html");
