const fs = require('fs');

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (!fs.existsSync(file)) continue;
    
    let html = fs.readFileSync(file, 'utf8');

    // Replace the image source back to the actual comic file: img/svc_i_comic.png
    html = html.replace(`../assets/pb_svc_${i}.png`, `../assets/img/svc_${i}_comic.png`);

    // Replace the hardcoded bilingual title with an automatically translating one
    html = html.replace('Traducción / Translation', '<span data-i18n="lbl_subtitles">Traducción de Historieta</span>');

    fs.writeFileSync(file, html);
    console.log(`Updated ${file}`);
}
