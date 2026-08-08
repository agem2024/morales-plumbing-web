const fs = require('fs');

function extractMainContent(filename) {
    const html = fs.readFileSync(filename, 'utf8');
    const startMatch = html.match(/<main[^>]*>/);
    const endMatch = html.match(/<\/main>/);
    if (!startMatch || !endMatch) return '';
    return html.substring(startMatch.index + startMatch[0].length, endMatch.index).trim();
}

let mainHtml = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

const ttContent = extractMainContent('docs/promo_tank_to_tankless.html');
const tttContent = extractMainContent('docs/promo_tankless_to_tankless.html');

// Create a visual separator
const separator = `
        <hr style="border: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent); margin: 6rem 0;">
`;

// Find where </main> is in the original file
const mainEndIndex = mainHtml.lastIndexOf('</main>');

// Construct the combined HTML
const combinedHtml = mainHtml.substring(0, mainEndIndex) 
                   + separator 
                   + ttContent 
                   + separator 
                   + tttContent 
                   + '\n    ' 
                   + mainHtml.substring(mainEndIndex);

fs.writeFileSync('docs/promocion_water_heaters.html', combinedHtml);
console.log('Combined all 3 promotions into promocion_water_heaters.html');
