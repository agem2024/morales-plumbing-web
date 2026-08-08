const fs = require('fs');

let html = fs.readFileSync('docs/diy_hub.html', 'utf8');

const replacements = {
    'comic_heaters.png': 'comic_heaters.webp',
    'comic_eco.webp': 'comic_eco.webp', // already webp in code? Let's check
    'comic_eco.png': 'comic_eco.webp',
    'comic_catalog.png': 'comic_catalog.webp',
    'comic_treatment.png': 'comic_treatment.webp',
    'comic_expansion.png': 'comic_expansion.webp',
    'comic_copper.png': 'comic_copper.webp',
    'comic_shield.png': 'comic_shield.webp',
    'comic_septic.png': 'comic_septic.webp',
    'comic_terms.png': 'comic_terms.webp',
    'diy_disposal.png': 'diy_disposal.png', 
    'diy_heater.png': 'diy_heater.png',
    'joe_avatar.png': 'joe_avatar.webp',
    'comic_wrench.png': 'comic_wrench.png',
    'disp_step1.png': 'disp_step1.png',
    'disp_step2.png': 'disp_step2.png'
};

for (const [png, webp] of Object.entries(replacements)) {
    if (fs.existsSync(`assets/${webp}`)) {
        html = html.replace(new RegExp(png, 'g'), webp);
    }
}

fs.writeFileSync('docs/diy_hub.html', html);
console.log('Fixed image extensions in diy_hub.html');
