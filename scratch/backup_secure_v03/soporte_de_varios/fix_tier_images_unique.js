const fs = require('fs');
let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

const correctImages = [
    // Heat Pump
    '../assets/plan_good.png',
    '../assets/plan_better.png',
    '../assets/plan_best.png',
    
    // Tank to Tankless
    '../assets/navien_plan_good.png',
    '../assets/navien_plan_better.png',
    '../assets/navien_plan_best.png',
    
    // Tankless to Tankless
    '../assets/ttt_hero.png',
    '../assets/service_tankless.png',
    '../assets/diy_heater.png'
];

let currentIndex = 0;

// Find all images inside the tier-card divs.
const regex = /(<div class="tier-card"[^>]*>\s*<img src=")([^"]+)(")/g;

html = html.replace(regex, (match, prefix, oldSrc, suffix) => {
    if (currentIndex >= correctImages.length) return match;
    const newSrc = correctImages[currentIndex++];
    console.log(`Replacing ${oldSrc} with ${newSrc}`);
    return prefix + newSrc + suffix;
});

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully updated all 9 tier images to be visually distinct.');
