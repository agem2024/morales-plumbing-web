const fs = require('fs');

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (!fs.existsSync(file)) continue;
    
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace the dynamic comic block with the original img tag
    const regex = /<style>\s*\.dynamic-comic[\s\S]*?<\/style>\s*<div class="dynamic-comic">[\s\S]*?<\/div>\s*<\/div>/;
    
    const replacement = `<img src="../assets/pb_svc_${i}.png" class="comic-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">\n            <div style="display:none; text-align:center; padding: 40px;">\n                <h2 style="color: var(--secondary);">[ ILUSTRACIÓN EN PROCESO ]</h2>\n                <p>Nuestros ingenieros de diseño están renderizando la historieta paso a paso para este servicio.</p>\n            </div>`;
    
    html = html.replace(regex, replacement);
    
    // If the regex didn't match (maybe spacing issues), try a broader replace
    if (!html.includes(`pb_svc_${i}.png`)) {
        const fallbackRegex = /<div class="comic-container">[\s\S]*?<div class="header" style="margin-top: 40px;">/;
        const fallbackReplacement = `<div class="comic-container">\n            ${replacement}\n        </div>\n\n        <div class="header" style="margin-top: 40px;">`;
        html = html.replace(fallbackRegex, fallbackReplacement);
    }
    
    fs.writeFileSync(file, html);
    console.log(`Restored images in ${file}`);
}
