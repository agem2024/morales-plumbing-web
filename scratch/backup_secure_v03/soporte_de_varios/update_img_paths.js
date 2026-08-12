const fs = require('fs');

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (!fs.existsSync(file)) continue;
    
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace the old img/svc_i_comic.png path with pb_svc_i.png
    html = html.replace(`../assets/img/svc_${i}_comic.png`, `../assets/pb_svc_${i}.png`);
    
    fs.writeFileSync(file, html);
    console.log(`Updated image path in ${file}`);
}
