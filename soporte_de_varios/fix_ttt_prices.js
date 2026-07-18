const fs = require('fs');

// --- Fix promo_tankless_to_tankless.html ---
let fileTTT = 'docs/promo_tankless_to_tankless.html';
let htmlTTT = fs.readFileSync(fileTTT, 'utf8');

// The user provided the EXACT features and prices for Tankless to Tankless:
// GOOD: $4,200
htmlTTT = htmlTTT.replace(
    /<div class="tier-card">([\s\S]*?)<table class="invoice-breakdown">[\s\S]*?<\/ul>\s*<\/div>/,
    `<div class="tier-card">
                <img src="../assets/tier_ttt_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid var(--neon-cyan);">
                <h3 data-i18n="promo_ttt_good_title">GOOD (Standard)</h3>
                <p data-i18n="promo_ttt_good_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2 (199K BTU). Direct swap using existing venting and gas lines.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$2,400.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$900.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$350.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$150.00</td>
                    </tr>
                </table>
                <div class="invoice-total">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $4,200.00
                </div>

                <ul class="features-list">
                    <li data-i18n="promo_ttt_good_li1">Navien NPE-240A2 Direct Swap.</li>
                    <li data-i18n="promo_ttt_good_li2">Reuse of existing venting and gas.</li>
                    <li data-i18n="promo_ttt_good_li3">City permits & old unit haul-away.</li>
                    <li data-i18n="promo_ttt_good_li4">1-Year Labor Warranty.</li>
                </ul>
            </div>`
);

// BETTER: $5,500
htmlTTT = htmlTTT.replace(
    /<div class="tier-card" style="border-color: #f59e0b;[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/ul>\s*<\/div>/,
    `<div class="tier-card" style="border-color: #f59e0b; box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);">
                <img src="../assets/tier_ttt_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #f59e0b;">
                <h3 style="color: #f59e0b;" data-i18n="promo_ttt_better_title">BETTER (Premium)</h3>
                <p data-i18n="promo_ttt_better_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2. Includes NaviCirc Recirculation and Scale Prevention Filter.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$3,600.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$1,200.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$450.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$250.00</td>
                    </tr>
                </table>
                <div class="invoice-total" style="color: #f59e0b;">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $5,500.00
                </div>

                <ul class="features-list">
                    <li data-i18n="promo_ttt_better_li1" style="font-weight: bold; color: #f59e0b;">Everything in GOOD, plus:</li>
                    <li data-i18n="promo_ttt_better_li2">Internal Recirculation Pump activation.</li>
                    <li data-i18n="promo_ttt_better_li3">Thermal Expansion Tank installation.</li>
                    <li data-i18n="promo_ttt_better_li4">Navien PeakFlow Scale Prevention System.</li>
                    <li data-i18n="promo_ttt_better_li5">3-Year Labor Warranty.</li>
                </ul>
            </div>`
);

// BEST: $7,800
htmlTTT = htmlTTT.replace(
    /<div class="tier-card" style="border-color: #8b5cf6;[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/ul>\s*<\/div>/,
    `<div class="tier-card" style="border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);">
                <img src="../assets/tier_ttt_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #8b5cf6;">
                <h3 style="color: #8b5cf6;" data-i18n="promo_ttt_best_title">BEST (Ultra-Premium)</h3>
                <p data-i18n="promo_ttt_best_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2. Includes Whole-home PRV & NaviLink WiFi Control.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$3,900.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$3,000.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$600.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$300.00</td>
                    </tr>
                </table>
                <div class="invoice-total" style="color: #8b5cf6;">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $7,800.00
                </div>

                <ul class="features-list">
                    <li data-i18n="promo_ttt_best_li1" style="font-weight: bold; color: #8b5cf6;">Everything in BETTER, plus:</li>
                    <li data-i18n="promo_ttt_best_li2">Whole-home Pressure Regulating Valve (PRV).</li>
                    <li data-i18n="promo_ttt_best_li3">Halo Water Treatment System integration.</li>
                    <li data-i18n="promo_ttt_best_li4">NaviLink WiFi Control Module.</li>
                    <li data-i18n="promo_ttt_best_li5">Lifetime Labor Warranty.</li>
                </ul>
            </div>`
);

// Fix comic narrative in TTT:
htmlTTT = htmlTTT.replace(
    /2\. Instalación de bomba de calor híbrida estándar\./,
    '2. Reemplazo directo con Navien NPE-A2 de alta capacidad.'
);
htmlTTT = htmlTTT.replace(
    /1\. Instalación de la unidad Premium ProTerra\./,
    '1. Instalación de la unidad Premium Navien con sistema NaviCirc.'
);
htmlTTT = htmlTTT.replace(
    /2\. Colocación del equipo AeroTherm de 80 galones para máxima capacidad\./,
    '2. Integración de Válvula PRV y Sistema de Tratamiento Halo.'
);
htmlTTT = htmlTTT.replace(
    /Las bombas de calor califican para el Crédito Fiscal Federal/,
    'Los calentadores Tankless de alta eficiencia califican para créditos fiscales'
);

fs.writeFileSync(fileTTT, htmlTTT);
console.log('Fixed texts and prices in TTT');

// --- Fix promo_tank_to_tankless.html (Tank to Tankless) ---
// For Tank to Tankless, the prices should be higher due to gas line & venting upgrades.
// GOOD: $5,200 / BETTER: $6,500 / BEST: $8,800
let fileTT = 'docs/promo_tank_to_tankless.html';
let htmlTT = fs.readFileSync(fileTT, 'utf8');

htmlTT = htmlTT.replace(
    /<div class="tier-card">([\s\S]*?)<table class="invoice-breakdown">[\s\S]*?<\/ul>\s*<\/div>/,
    `<div class="tier-card">
                <img src="../assets/tier_tt_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid var(--neon-cyan);">
                <h3 data-i18n="promo_tt_good_title">GOOD (Standard)</h3>
                <p data-i18n="promo_tt_good_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2 (199K BTU). Standard tank-to-tankless retrofit.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$2,800.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$1,800.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$400.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$200.00</td>
                    </tr>
                </table>
                <div class="invoice-total">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $5,200.00
                </div>

                <ul class="features-list">
                    <li data-i18n="promo_tt_good_li1">Navien NPE-240A2 Retrofit.</li>
                    <li data-i18n="promo_tt_good_li2">PVC Schedule 40 venting & Gas line upsize.</li>
                    <li data-i18n="promo_tt_good_li3">City permits & old tank haul-away.</li>
                    <li data-i18n="promo_tt_good_li4">1-Year Labor Warranty.</li>
                </ul>
            </div>`
);

htmlTT = htmlTT.replace(
    /<div class="tier-card premium-tier"[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/ul>\s*<\/div>/,
    `<div class="tier-card premium-tier" style="border-color: #f59e0b; box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);">
                <img src="../assets/tier_tt_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #f59e0b;">
                <h3 style="color: #f59e0b;" data-i18n="promo_tt_better_title">BETTER (Premium)</h3>
                <p data-i18n="promo_tt_better_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2. Advanced retrofit with NaviCirc & Scale Filter.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$3,200.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$2,300.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$600.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$400.00</td>
                    </tr>
                </table>
                <div class="invoice-total" style="color: #f59e0b;">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $6,500.00
                </div>

                <ul class="features-list">
                    <li data-i18n="promo_tt_better_li1" style="font-weight: bold; color: #f59e0b;">Everything in GOOD, plus:</li>
                    <li data-i18n="promo_tt_better_li2">Internal Recirculation Pump activation.</li>
                    <li data-i18n="promo_tt_better_li3">Navien PeakFlow Scale Prevention System.</li>
                    <li data-i18n="promo_tt_better_li4">3-Year Labor Warranty.</li>
                </ul>
            </div>`
);

htmlTT = htmlTT.replace(
    /<div class="tier-card"[\s\S]*?Ultra-Premium[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/ul>\s*<\/div>/,
    `<div class="tier-card" style="border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);">
                <img src="../assets/tier_tt_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #8b5cf6;">
                <h3 style="color: #8b5cf6;" data-i18n="promo_tt_best_title">BEST (Ultra-Premium)</h3>
                <p data-i18n="promo_tt_best_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Dual Navien Cascaded System with WiFi Control.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$4,500.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$3,200.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$700.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$400.00</td>
                    </tr>
                </table>
                <div class="invoice-total" style="color: #8b5cf6;">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $8,800.00
                </div>

                <ul class="features-list">
                    <li data-i18n="promo_tt_best_li1" style="font-weight: bold; color: #8b5cf6;">Everything in BETTER, plus:</li>
                    <li data-i18n="promo_tt_best_li2">Custom Unistrut mounting rack.</li>
                    <li data-i18n="promo_tt_best_li3">Whole-home PRV & Halo Water System.</li>
                    <li data-i18n="promo_tt_best_li4">NaviLink WiFi Control Module.</li>
                    <li data-i18n="promo_tt_best_li5">Lifetime Labor Warranty.</li>
                </ul>
            </div>`
);

fs.writeFileSync(fileTT, htmlTT);
console.log('Fixed texts and prices in TT');

