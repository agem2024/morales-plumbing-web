const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// The file has 3 <section class="comic-section"...> ... </section> blocks.
// We want to delete them.
// Note: Each comic-section block starts with <section class="comic-section" and ends with </section>.
// Since we have multiple </section> tags, we should be careful.
// Let's use a regex that matches from <section class="comic-section" to the NEXT </section>.

html = html.replace(/<section class="comic-section"[\s\S]*?<\/section>/g, '');

// Now we need to add the buttons below the tiers.
// The tiers section ends with </div> just before the comic-section.
// Wait, the easiest way is to add the button exactly where the comic-section was!
// So let's modify the regex to replace the comic-section with the button!

// Wait, there are 3 comic sections. We want to replace each with a DIFFERENT button.
// So let's read the file again and do it properly.
html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

let matchCount = 0;
html = html.replace(/<section class="comic-section"[\s\S]*?<\/section>/g, () => {
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
console.log('Removed comics and added technical requirements links!');
