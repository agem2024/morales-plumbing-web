const fs = require('fs');

const comicImages = [
    '../assets/comic_ai.png',
    '../assets/comic_wrench.png',
    '../assets/comic_best_v2.png',
    '../assets/comic_eco.webp',
    '../assets/comic_copper.png',
    '../assets/comic_construction.png',
    '../assets/comic_shield.png',
    '../assets/comic_warning.png',
    '../assets/comic_treatment.png',
    '../assets/comic_septic.png',
    '../assets/comic_harvest.png',
    '../assets/comic_heaters.png',
    '../assets/comic_expansion.png',
    '../assets/comic_sales.png',
    '../assets/icon_plumber_ai.png',
    '../assets/icon_plumber_eco.png',
    '../assets/icon_plumber_sat.png',
    '../assets/icon_plumber_biz.png',
    '../assets/disp_step1.png',
    '../assets/disp_step2.png'
];

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (!fs.existsSync(file)) continue;
    
    let html = fs.readFileSync(file, 'utf8');
    
    // Pick 4 images unique-ish to this service ID
    const img1 = comicImages[(i * 1) % comicImages.length];
    const img2 = comicImages[(i * 3 + 1) % comicImages.length];
    const img3 = comicImages[(i * 5 + 2) % comicImages.length];
    const img4 = comicImages[(i * 7 + 3) % comicImages.length];

    // The HTML snippet for the dynamic comic
    const dynamicComicHTML = `
        <style>
            .dynamic-comic {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 20px;
            }
            .d-panel {
                background: rgba(0, 0, 0, 0.5);
                border: 2px solid var(--secondary);
                border-radius: 8px;
                padding: 15px;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .d-panel-img {
                object-fit: cover;
                padding: 5px;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 2px solid var(--secondary);
                margin-bottom: 15px;
                background: #111;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
            }
            .d-panel-bubble {
                background: #fff;
                color: #000;
                padding: 10px;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: bold;
                font-size: 0.9rem;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                border: 2px solid #000;
            }
            .d-panel-bubble::after {
                content: '';
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-width: 0 10px 10px 10px;
                border-style: solid;
                border-color: transparent transparent #fff transparent;
            }
            .d-panel-bubble::before {
                content: '';
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-width: 0 12px 12px 12px;
                border-style: solid;
                border-color: transparent transparent #000 transparent;
                z-index: -1;
            }
            .d-panel-num {
                position: absolute;
                top: -10px;
                left: -10px;
                background: var(--secondary);
                color: #000;
                font-family: 'Orbitron', sans-serif;
                font-weight: bold;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 2px solid #000;
            }
        </style>

        <div class="dynamic-comic">
            <div class="d-panel">
                <div class="d-panel-num">1</div>
                <img src="${img1}" class="d-panel-img" alt="Step 1">
                <div class="d-panel-bubble" data-i18n="svc_${i}_step_1">Paso 1 del servicio ${i}.</div>
            </div>
            <div class="d-panel">
                <div class="d-panel-num">2</div>
                <img src="${img2}" class="d-panel-img" alt="Step 2">
                <div class="d-panel-bubble" data-i18n="svc_${i}_step_2">Paso 2 del servicio ${i}.</div>
            </div>
            <div class="d-panel">
                <div class="d-panel-num">3</div>
                <img src="${img3}" class="d-panel-img" alt="Step 3">
                <div class="d-panel-bubble" data-i18n="svc_${i}_step_3">Paso 3 del servicio ${i}.</div>
            </div>
            <div class="d-panel">
                <div class="d-panel-num">4</div>
                <img src="${img4}" class="d-panel-img" alt="Step 4">
                <div class="d-panel-bubble" data-i18n="svc_${i}_step_4">Paso 4 del servicio ${i}.</div>
            </div>
        </div>
        </div>
        `;

    // Target the old flat image setup
    const regexOld = /<img src="\.\.\/assets\/(?:pb_svc_[0-9]+|img\/svc_[0-9]+_comic)\.png"[\s\S]*?(?=<\/div>\s*<div class="header" style="margin-top: 40px;">)/;
    
    if (html.match(regexOld)) {
        html = html.replace(regexOld, dynamicComicHTML);
    } else {
        // Fallback replacement if regex fails
        const fallbackRegex = /<!-- Placeholder logic for non-generated comics -->[\s\S]*?(?=<\/div>\s*<div class="header" style="margin-top: 40px;">)/;
        html = html.replace(fallbackRegex, dynamicComicHTML);
    }

    fs.writeFileSync(file, html);
    console.log(`Injected HTML comic into ${file}`);
}
