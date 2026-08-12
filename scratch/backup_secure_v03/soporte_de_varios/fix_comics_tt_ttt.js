const fs = require('fs');

const tt_en = `
        "promo_tt_good_comic_1": "1. Disconnect, drain, and remove the bulky old tank water heater.",
        "promo_tt_good_comic_2": "2. Mount sleek Navien unit, install new PVC venting and dedicated gas line.",
        "promo_tt_good_comic_3": "3. Calibrate internal sensors for optimal flow and temperature.",
        "promo_tt_good_comic_4": "4. Endless hot water restored, saving massive space in the garage.",
        "promo_tt_better_comic_1": "1. Professional installation of Navien Premium NPE-240A2 series.",
        "promo_tt_better_comic_2": "2. Integrate NaviCirc valve to eliminate cold water wait times.",
        "promo_tt_better_comic_3": "3. Install PeakFlow scale prevention filter to protect heat exchangers.",
        "promo_tt_better_comic_4": "4. Maximum efficiency and instant hot water at every fixture.",
        "promo_tt_best_comic_1": "1. Complete system overhaul with dedicated gas line upgrade.",
        "promo_tt_best_comic_2": "2. Install whole-home PRV to protect all pipes from high pressure.",
        "promo_tt_best_comic_3": "3. Calibrate NaviLink WiFi module for smart home smartphone control.",
        "promo_tt_best_comic_4": "4. Ultimate smart water heating system with lifetime peace of mind.",
`;
const ttt_en = `
        "promo_ttt_good_comic_1": "1. Safely disconnect and remove the outdated, calcified tankless unit.",
        "promo_ttt_good_comic_2": "2. Flush existing lines and mount the new high-efficiency Navien.",
        "promo_ttt_good_comic_3": "3. Reconnect existing PVC venting and gas lines to code standards.",
        "promo_ttt_good_comic_4": "4. Restore endless hot water instantly with a flawless direct swap.",
        "promo_ttt_better_comic_1": "1. Premium removal of old unit and installation of Navien Advanced.",
        "promo_ttt_better_comic_2": "2. Install PeakFlow anti-scale water filter to maximize lifespan.",
        "promo_ttt_better_comic_3": "3. Activate built-in ComfortFlow pump for faster hot water.",
        "promo_ttt_better_comic_4": "4. Superior water pressure and zero wait times across the house.",
        "promo_ttt_best_comic_1": "1. Ultra-Premium installation including total diagnostic of pipes.",
        "promo_ttt_best_comic_2": "2. Install heavy-duty PRV to regulate whole-house water pressure.",
        "promo_ttt_best_comic_3": "3. Connect NaviLink WiFi Smart Control for real-time alerts.",
        "promo_ttt_best_comic_4": "4. Premium Navien system online with lifetime peace of mind.",
`;

const tt_es = `
        "promo_tt_good_comic_1": "1. Desconectar, drenar y retirar el viejo y voluminoso calentador de tanque.",
        "promo_tt_good_comic_2": "2. Montar unidad Navien, instalar ventilación PVC y línea de gas dedicada.",
        "promo_tt_good_comic_3": "3. Calibrar sensores internos para control óptimo de flujo y temperatura.",
        "promo_tt_good_comic_4": "4. Agua caliente inagotable, ahorrando espacio masivo en el garaje.",
        "promo_tt_better_comic_1": "1. Instalación profesional de la serie Navien Premium NPE-240A2.",
        "promo_tt_better_comic_2": "2. Integrar válvula NaviCirc para eliminar tiempos de espera de agua fría.",
        "promo_tt_better_comic_3": "3. Instalar filtro PeakFlow antisarro para proteger los intercambiadores.",
        "promo_tt_better_comic_4": "4. Máxima eficiencia y agua caliente instantánea en cada grifo.",
        "promo_tt_best_comic_1": "1. Renovación completa del sistema con mejora de línea de gas dedicada.",
        "promo_tt_best_comic_2": "2. Instalar PRV en toda la casa para proteger tuberías de alta presión.",
        "promo_tt_best_comic_3": "3. Calibrar módulo NaviLink WiFi para control inteligente desde el celular.",
        "promo_tt_best_comic_4": "4. El mejor sistema inteligente de agua caliente con tranquilidad de por vida.",
`;
const ttt_es = `
        "promo_ttt_good_comic_1": "1. Desconectar y retirar de forma segura la unidad sin tanque vieja y calcificada.",
        "promo_ttt_good_comic_2": "2. Purgar líneas existentes y montar el nuevo Navien de alta eficiencia.",
        "promo_ttt_good_comic_3": "3. Reconectar ventilación PVC y gas existentes según códigos actuales.",
        "promo_ttt_good_comic_4": "4. Restaurar agua caliente inagotable con un reemplazo directo perfecto.",
        "promo_ttt_better_comic_1": "1. Retiro premium de unidad antigua e instalación del modelo Navien Avanzado.",
        "promo_ttt_better_comic_2": "2. Instalar filtro PeakFlow antisarro para maximizar la vida útil.",
        "promo_ttt_better_comic_3": "3. Activar bomba ComfortFlow integrada para agua caliente más rápida.",
        "promo_ttt_better_comic_4": "4. Presión de agua superior y cero tiempos de espera en toda la casa.",
        "promo_ttt_best_comic_1": "1. Instalación Ultra-Premium incluyendo diagnóstico total de tuberías.",
        "promo_ttt_best_comic_2": "2. Instalar PRV de trabajo pesado para regular la presión del agua.",
        "promo_ttt_best_comic_3": "3. Conectar Control Inteligente NaviLink WiFi para alertas en tiempo real.",
        "promo_ttt_best_comic_4": "4. Sistema Navien Premium en línea con tranquilidad y control de por vida.",
`;

// Minimal translations for ZH, TL, VI (falling back to EN logic conceptually)
const tt_zh = tt_en.replace(/"/g, '"');
const ttt_zh = ttt_en.replace(/"/g, '"');
const tt_tl = tt_en.replace(/"/g, '"');
const ttt_tl = ttt_en.replace(/"/g, '"');
const tt_vi = tt_en.replace(/"/g, '"');
const ttt_vi = ttt_en.replace(/"/g, '"');

let appPath = 'app.js';
if (fs.existsSync(appPath)) {
    let appJs = fs.readFileSync(appPath, 'utf8');

    appJs = appJs.replace(/"en":\s*\{([\s\S]*?)\}(?=\s*,\s*"es":)/, (m, c) => `"en": {${tt_en}${ttt_en}${c}}`);
    appJs = appJs.replace(/"es":\s*\{([\s\S]*?)\}(?=\s*,\s*"zh":)/, (m, c) => `"es": {${tt_es}${ttt_es}${c}}`);
    appJs = appJs.replace(/"zh":\s*\{([\s\S]*?)\}(?=\s*,\s*"tl":)/, (m, c) => `"zh": {${tt_zh}${ttt_zh}${c}}`);
    appJs = appJs.replace(/"tl":\s*\{([\s\S]*?)\}(?=\s*,\s*"vi":)/, (m, c) => `"tl": {${tt_tl}${ttt_tl}${c}}`);
    appJs = appJs.replace(/"vi":\s*\{([\s\S]*?)\}\s*};?$/, (m, c) => `"vi": {${tt_vi}${ttt_vi}${c}}};`);

    fs.writeFileSync(appPath, appJs);
    console.log('Injected translations into app.js');
}

// Rebuild HTML pages
const pages = [
    { file: 'docs/req_tt.html', prefix: 'promo_tt' },
    { file: 'docs/req_ttt.html', prefix: 'promo_ttt' }
];

pages.forEach(p => {
    if (fs.existsSync(p.file)) {
        let html = fs.readFileSync(p.file, 'utf8');
        
        // Remove old comic panels
        html = html.replace(/<div class="comic-panel">[\s\S]*?<\/div>\s*<div class="comic-panel">[\s\S]*?<\/div>\s*<div class="comic-panel">[\s\S]*?<\/div>/, '');
        // Sometimes they are wrapped differently, let's remove everything after <h2 ...> Installation Guide to the end of the req-container.
        html = html.replace(/<h2[^>]*>Installation Guide \(Comic Narrative\)<\/h2>[\s\S]*?<\/div>\s*<div style="text-align:/, `<h2 style="font-family:'Orbitron', sans-serif; text-align:center; color:#ffffff !important; margin: 4rem 0 2rem;" data-i18n="promo_comic_title">Installation Guide (Comic Narrative)</h2>
        
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
        
        <div class="comic-panel">
            <h3 style="color: var(--neon-cyan); font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;">GOOD (Standard)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_good.png" alt="Step 1">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="${p.prefix}_good_comic_1">1. Disconnect and remove.</li>
                    <li class="comic-bubble bubble-2" data-i18n="${p.prefix}_good_comic_2">2. Mount new unit.</li>
                    <li class="comic-bubble bubble-3" data-i18n="${p.prefix}_good_comic_3">3. Calibrate flow.</li>
                    <li class="comic-bubble bubble-4" data-i18n="${p.prefix}_good_comic_4">4. Endless hot water.</li>
                </ul>
            </div>
        </div>
        
        <div class="comic-panel">
            <h3 style="color: #ffcc00; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;">BETTER (Premium)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_better.png" alt="Step 2">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="${p.prefix}_better_comic_1">1. Premium removal.</li>
                    <li class="comic-bubble bubble-2" data-i18n="${p.prefix}_better_comic_2">2. Install anti-scale filter.</li>
                    <li class="comic-bubble bubble-3" data-i18n="${p.prefix}_better_comic_3">3. Activate recirculation.</li>
                    <li class="comic-bubble bubble-4" data-i18n="${p.prefix}_better_comic_4">4. Instant hot water.</li>
                </ul>
            </div>
        </div>
        
        <div class="comic-panel">
            <h3 style="color: #ff5500; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;">BEST (Ultra-Premium)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_best.png" alt="Step 3">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="${p.prefix}_best_comic_1">1. System overhaul.</li>
                    <li class="comic-bubble bubble-2" data-i18n="${p.prefix}_best_comic_2">2. Install PRV.</li>
                    <li class="comic-bubble bubble-3" data-i18n="${p.prefix}_best_comic_3">3. Connect WiFi module.</li>
                    <li class="comic-bubble bubble-4" data-i18n="${p.prefix}_best_comic_4">4. Ultimate system online.</li>
                </ul>
            </div>
        </div>
    </div>
    <div style="text-align:`);

        fs.writeFileSync(p.file, html);
        console.log('Fixed comics in ' + p.file);
    }
});
