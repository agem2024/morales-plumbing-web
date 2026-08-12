const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Match from <!-- Comic Narrative Section --> down to the end of the <section class="promo-comics"...> block.
// Wait, one of the sections might have <!-- Comic Narrative Section --> but with different data-i18n.
// The regex: /<!-- Comic Narrative Section -->[\s\S]*?<\/section>/g

let matchCount = 0;
html = html.replace(/<!-- Comic Narrative Section -->[\s\S]*?<\/section>/g, () => {
    matchCount++;
    if (matchCount === 1) {
        return `<div style="text-align: center; margin: 3rem 0;"><a href="req_hp.html" class="nav-btn" style="border-color: #10b981; color: #10b981;">Ver Requerimientos Técnicos y Diagrama (Heat Pump)</a></div>`;
    } else if (matchCount === 2) {
        return `<div style="text-align: center; margin: 3rem 0;"><a href="req_tt.html" class="nav-btn" style="border-color: #38bdf8; color: #38bdf8;">Ver Requerimientos Técnicos y Diagrama (Tanque a Tankless)</a></div>`;
    } else if (matchCount === 3) {
        return `<div style="text-align: center; margin: 3rem 0;"><a href="req_ttt.html" class="nav-btn" style="border-color: #38bdf8; color: #38bdf8;">Ver Requerimientos Técnicos y Diagrama (Tankless a Tankless)</a></div>`;
    }
    return '';
});

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Replaced ' + matchCount + ' comic blocks with buttons!');
