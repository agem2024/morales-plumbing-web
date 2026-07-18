const fs = require('fs');

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (!fs.existsSync(file)) continue;
    
    let html = fs.readFileSync(file, 'utf8');

    const singleImageWithSubtitles = `
        <div class="comic-container" style="text-align: center; max-width: 900px; margin: 0 auto;">
            <!-- Single full comic page for the service -->
            <img src="../assets/pb_svc_${i}.png" alt="Comic Service ${i}" style="width: 100%; border-radius: 12px; box-shadow: 0 0 20px rgba(0, 245, 255, 0.3); border: 2px solid var(--neon-cyan);">
            
            <!-- Multilingual Subtitles Reference -->
            <div class="comic-subtitles" style="margin-top: 25px; background: rgba(10, 15, 30, 0.8); padding: 25px; border-radius: 12px; border-left: 5px solid var(--neon-cyan); text-align: left; box-shadow: inset 0 0 15px rgba(0, 245, 255, 0.1);">
                <h3 style="color: var(--neon-cyan); margin-bottom: 15px; font-family: 'Orbitron', sans-serif; font-size: 1.2rem; display: flex; align-items: center; gap: 10px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    Traducción / Translation
                </h3>
                <ul style="color: #e2e8f0; line-height: 2; margin-left: 20px; font-size: 1.05rem;">
                    <li><strong style="color: #ffaa00;">1:</strong> <span data-i18n="svc_${i}_step_1">Step 1</span></li>
                    <li><strong style="color: #ffaa00;">2:</strong> <span data-i18n="svc_${i}_step_2">Step 2</span></li>
                    <li><strong style="color: #ffaa00;">3:</strong> <span data-i18n="svc_${i}_step_3">Step 3</span></li>
                    <li><strong style="color: #ffaa00;">4:</strong> <span data-i18n="svc_${i}_step_4">Step 4</span></li>
                </ul>
            </div>
        </div>
`;

    // We can use a regex to replace everything between <div class="header"> (the first one) and <div class="header" style="margin-top: 40px;">
    // Let's find those markers.
    const startMarker = /<\/div>\s*(<div class="comic-container">[\s\S]*?)<div class="header" style="margin-top: 40px;">/;
    
    if (html.match(startMarker)) {
        html = html.replace(startMarker, '</div>\n' + singleImageWithSubtitles + '\n        <div class="header" style="margin-top: 40px;">');
        fs.writeFileSync(file, html);
        console.log("Updated " + file);
    } else {
        console.log("Could not find markers in " + file);
    }
}
