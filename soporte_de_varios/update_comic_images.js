const fs = require('fs');

const images = [
    '../assets/comic_ai.png',     // Step 1
    '../assets/comic_wrench.png', // Step 2
    '../assets/comic_best_v2.png',// Step 3
    '../assets/comic_eco.webp'    // Step 4
];

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (!fs.existsSync(file)) continue;
    
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace emojis with images
    html = html.replace(/<div class="d-panel-img">.*?<\/div>/g, (match, offset, string) => {
        // Determine which step this is based on its position
        // This is a bit tricky, let's just use a counter for each file
        return match; 
    });
    
    // Let's do it manually with a counter
    let step = 0;
    html = html.replace(/<div class="d-panel-img">.*?<\/div>/g, () => {
        const img = images[step % 4];
        step++;
        return `<img src="${img}" class="d-panel-img" style="object-fit: cover;" alt="Step Image">`;
    });
    
    // Fix CSS so img fits
    html = html.replace('.d-panel-img {', '.d-panel-img {\n                object-fit: cover;\n                padding: 5px;');
    
    fs.writeFileSync(file, html);
    console.log(`Updated ${file}`);
}
