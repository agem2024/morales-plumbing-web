const fs = require('fs');

const comicCss = `
        <style>
            .comic-panel {
                background: rgba(15, 23, 42, 0.8);
                border-radius: 12px;
                padding: 2rem;
                position: relative;
                margin-bottom: 2rem;
                border: 2px solid var(--neon-cyan);
            }
            .comic-panel:nth-of-type(2) { border-color: #ffcc00; }
            .comic-panel:nth-of-type(3) { border-color: #ff5500; }
            
            .comic-img-wrapper {
                position: relative;
                width: 100%;
                border-radius: 8px;
                border: 3px solid #000;
                overflow: hidden;
            }
            .comic-img-wrapper img { width: 100%; display: block; }
            .comic-bubbles {
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                padding: 0; margin: 0; list-style: none; pointer-events: none;
            }
            .comic-bubble {
                position: absolute; background: #fff; border: 3px solid #000; color: #000;
                padding: 0.8rem 1.2rem; font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
                font-size: 0.85rem; font-weight: bold; line-height: 1.3; text-transform: uppercase;
                box-shadow: 4px 4px 0 #000; border-radius: 12px; max-width: 40%; pointer-events: auto;
            }
            
            .bubble-1 { top: 5%; left: 5%; }
            .bubble-2 { top: 25%; right: 5%; }
            .bubble-3 { bottom: 30%; left: 5%; }
            .bubble-4 { bottom: 5%; right: 5%; }
            
            .bubble-1::before { content:''; position:absolute; border-style:solid; top: 100%; left: 20px; border-width: 15px 15px 0 0; border-color: #000 transparent transparent transparent; }
            .bubble-1::after { content:''; position:absolute; border-style:solid; top: 100%; left: 23px; border-width: 10px 10px 0 0; border-color: #fff transparent transparent transparent; }
            
            .bubble-2::before { content:''; position:absolute; border-style:solid; top: 100%; right: 20px; border-width: 15px 0 0 15px; border-color: #000 transparent transparent transparent; }
            .bubble-2::after { content:''; position:absolute; border-style:solid; top: 100%; right: 23px; border-width: 10px 0 0 10px; border-color: #fff transparent transparent transparent; }
            
            .bubble-3::before { content:''; position:absolute; border-style:solid; bottom: 100%; left: 20px; border-width: 0 15px 15px 0; border-color: transparent #000 transparent transparent; }
            .bubble-3::after { content:''; position:absolute; border-style:solid; bottom: 100%; left: 23px; border-width: 0 10px 10px 0; border-color: transparent #fff transparent transparent; }

            .bubble-4::before { content:''; position:absolute; border-style:solid; bottom: 100%; right: 20px; border-width: 0 0 15px 15px; border-color: transparent transparent transparent #000; }
            .bubble-4::after { content:''; position:absolute; border-style:solid; bottom: 100%; right: 23px; border-width: 0 0 10px 10px; border-color: transparent transparent transparent #fff; }
            
            .comic-narrator { background: #ffeb3b; border-radius: 0; }
            .comic-narrator::before, .comic-narrator::after { display: none; }
            
            @media (max-width: 768px) {
                .comic-bubble { position: static; max-width: 100%; margin-bottom: 1rem; }
                .comic-bubbles { position: static; display: flex; flex-direction: column; margin-top: 1rem; }
                .comic-bubble::before, .comic-bubble::after { display: none; }
            }
        </style>
`;

function getComicHtml(prefix) {
    return `<h2 style="font-family:'Orbitron', sans-serif; text-align:center; color:#ffffff !important; margin: 4rem 0 2rem;" data-i18n="${prefix}_comic_title">Installation Guide (Comic Narrative)</h2>
        ${comicCss}
        <div class="comic-panel">
            <h3 style="color: var(--neon-cyan); font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;">GOOD (Standard)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_good.png" alt="Step 1">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="${prefix}_good_comic_1">1. Disconnect and remove.</li>
                    <li class="comic-bubble bubble-2" data-i18n="${prefix}_good_comic_2">2. Mount new unit.</li>
                    <li class="comic-bubble bubble-3" data-i18n="${prefix}_good_comic_3">3. Calibrate flow.</li>
                    <li class="comic-bubble bubble-4" data-i18n="${prefix}_good_comic_4">4. Endless hot water.</li>
                </ul>
            </div>
        </div>
        
        <div class="comic-panel">
            <h3 style="color: #ffcc00; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;">BETTER (Premium)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_better.png" alt="Step 2">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="${prefix}_better_comic_1">1. Premium removal.</li>
                    <li class="comic-bubble bubble-2" data-i18n="${prefix}_better_comic_2">2. Install anti-scale filter.</li>
                    <li class="comic-bubble bubble-3" data-i18n="${prefix}_better_comic_3">3. Activate recirculation.</li>
                    <li class="comic-bubble bubble-4" data-i18n="${prefix}_better_comic_4">4. Instant hot water.</li>
                </ul>
            </div>
        </div>
        
        <div class="comic-panel">
            <h3 style="color: #ff5500; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;">BEST (Ultra-Premium)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_best.png" alt="Step 3">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="${prefix}_best_comic_1">1. System overhaul.</li>
                    <li class="comic-bubble bubble-2" data-i18n="${prefix}_best_comic_2">2. Install PRV.</li>
                    <li class="comic-bubble bubble-3" data-i18n="${prefix}_best_comic_3">3. Connect WiFi module.</li>
                    <li class="comic-bubble bubble-4" data-i18n="${prefix}_best_comic_4">4. Ultimate system online.</li>
                </ul>
            </div>
        </div>
    </div>`; // Note the closing </div> for req-container or promo-container
}

['docs/req_tt.html', 'docs/req_ttt.html'].forEach(f => {
    let html = fs.readFileSync(f, 'utf8');
    const prefix = f.includes('ttt') ? 'promo_ttt' : 'promo_tt';
    
    // Snip off everything from the Installation Guide heading to the end of the container
    let snipIndex = html.indexOf('<h2 style="font-family:\'Orbitron\'');
    if (snipIndex === -1) snipIndex = html.indexOf('<h2');
    
    // But wait, there might be other h2s. Let's find "Comic Narrative".
    snipIndex = html.indexOf('Comic Narrative');
    if (snipIndex !== -1) {
        snipIndex = html.lastIndexOf('<h2', snipIndex);
        
        // Find the end of the container by looking for <script src="../app.js
        const scriptIndex = html.indexOf('<script src="../app.js', snipIndex);
        const htmlBefore = html.substring(0, snipIndex);
        const htmlAfter = html.substring(scriptIndex);
        
        const newHtml = htmlBefore + getComicHtml(prefix) + '\n\n    ' + htmlAfter;
        fs.writeFileSync(f, newHtml);
        console.log('Repaired ' + f);
    }
});

// Also need to fix promo_tank_to_tankless.html and promo_tankless_to_tankless.html
['docs/promo_tank_to_tankless.html', 'docs/promo_tankless_to_tankless.html'].forEach(f => {
    let html = fs.readFileSync(f, 'utf8');
    const prefix = f.includes('tankless_to_tankless') ? 'promo_ttt' : 'promo_tt';
    
    let snipIndex = html.indexOf('Comic Narrative');
    if (snipIndex !== -1) {
        snipIndex = html.lastIndexOf('<h2', snipIndex);
        
        // Find the legal section
        const legalIndex = html.indexOf('<section class="promo-legal"', snipIndex);
        if (legalIndex !== -1) {
            const htmlBefore = html.substring(0, snipIndex);
            const htmlAfter = html.substring(legalIndex);
            
            // Note: in promo pages, it doesn't need to close the req-container. It just needs to close nothing or a section.
            let comicSection = getComicHtml(prefix);
            // Remove the trailing </div> because it's not a req-container
            comicSection = comicSection.replace(/<\/div>$/, '');
            
            const newHtml = htmlBefore + comicSection + '\n\n        ' + htmlAfter;
            fs.writeFileSync(f, newHtml);
            console.log('Repaired promo ' + f);
        }
    }
});
