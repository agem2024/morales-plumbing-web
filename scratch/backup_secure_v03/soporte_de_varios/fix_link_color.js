const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Replace the current style of the cta-button with one that explicitly defines the text color and background color
const search = /class="cta-button" style="([^"]*)"/g;
html = html.replace(search, (match, p1) => {
    // If it doesn't already have a color defined (or if it does, let's override it to ensure it's not purple)
    // We want it to be Neon Cyan text with a dark cyan background to match the glow.
    return `class="cta-button" style="${p1} color: #00ffff; background: rgba(0, 255, 255, 0.1); border: 2px solid #00ffff; border-radius: 8px; text-decoration: none;"`;
});

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Fixed link color for cta-button!');
