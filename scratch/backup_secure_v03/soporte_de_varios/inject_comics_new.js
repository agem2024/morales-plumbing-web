const fs = require('fs');

const pages = [
    { name: 'eng_wh.html', key: 'wh', comic: 'wh_comic.png' },
    { name: 'eng_valves.html', key: 'valves', comic: 'valves_comic.png' },
    { name: 'eng_inspect.html', key: 'inspect', comic: 'inspect_comic.png' },
    { name: 'eng_training.html', key: 'training', comic: 'training_comic.png' },
    { name: 'eng_b2b.html', key: 'b2b', comic: 'b2b_comic.png' }
];

pages.forEach(p => {
    let content = fs.readFileSync('docs/' + p.name, 'utf8');
    
    const comicHtml = `
                <div style="margin-top: 30px; margin-bottom: 30px;">
                    <h2 class="tech-spec-header" data-i18n="eng_${p.key}_comic_title">Metodología (Storyboard)</h2>
                    <img src="../assets/${p.comic}" alt="Methodology Comic" style="width: 100%; border-radius: 12px; border: 2px solid var(--neon-cyan); box-shadow: 0 0 20px rgba(0,245,255,0.3);">
                </div>
                <h2 class="tech-spec-header" data-i18n="eng_tech_details">Detalles Técnicos</h2>`;
                
    if (!content.includes('Methodology Comic')) {
        content = content.replace(/<h2 class="tech-spec-header" data-i18n="eng_tech_details">Detalles Técnicos<\/h2>/, comicHtml);
        fs.writeFileSync('docs/' + p.name, content);
        console.log('Added comic to ' + p.name);
    }
});
