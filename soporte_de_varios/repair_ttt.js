const fs = require('fs');

const FILE_PATH = 'docs/promo_tankless_to_tankless.html';
let html = fs.readFileSync(FILE_PATH, 'utf8');

// --- 1. Fix the Hero Section ---
html = html.replace(
    /<p style="font-size: 1.2rem; margin-top: 1.5rem; color: #e2e8f0; line-height: 1.8;" data-i18n="promo_tt_desc">.*?<\/p>/s,
    `<p style="font-size: 1.2rem; margin-top: 1.5rem; color: #e2e8f0; line-height: 1.8;" data-i18n="promo_ttt_desc">Upgrade your old tankless system to the latest Navien NPE-A2 series with advanced recirculation technology.</p>`
);

html = html.replace(
    /<img src="\.\.\/assets\/heatpump_hero\.png" alt="Heat Pump Water Heater">/,
    `<img src="../assets/tier_ttt_good.png" alt="Navien Tankless Replacement">`
);

// --- 2. Fix the "Why Upgrade" Section ---
html = html.replace(
    /<p style="font-size: 1.1rem; color: #cbd5e1; line-height: 1.7;" data-i18n="promo_tt_why_desc">.*?<\/p>/s,
    `<p style="font-size: 1.1rem; color: #cbd5e1; line-height: 1.7;" data-i18n="promo_ttt_why_desc">Older tankless models lose efficiency over time. The new Navien models offer ultra-high efficiency, built-in recirculation, and smart connectivity.</p>`
);

// --- 3. Update the Links ---
html = html.replace(
    /<a href="ley_water_heaters\.html" class="btn btn-outline".*?>.*?<\/a>/s,
    `<a href="ley_water_heaters.html" class="btn btn-outline" style="border-color: #ffcc00; color: #ffcc00; display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px;">California Plumbing Codes & Regulations</a>`
);

// --- 4. Update the Tiers Images and features ---
html = html.replace(
    /<img src="\.\.\/assets\/plan_good_clean\.png" alt="Standard Installation".*?>/s,
    `<img src="../assets/tier_ttt_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid var(--neon-cyan);">`
);
html = html.replace(
    /<h3 data-i18n="promo_tt_good_title">GOOD \(Standard\)<\/h3>/g,
    `<h3 data-i18n="promo_ttt_good_title">GOOD (Standard)</h3>`
);
html = html.replace(
    /<p data-i18n="promo_tt_good_desc" style=".*?">Navien NPE-240A2 \(199K BTU\)\. Standard tank-to-tankless retrofit\.<\/p>/s,
    `<p data-i18n="promo_ttt_good_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2 (199K BTU). Direct swap using existing venting and gas lines.</p>`
);


html = html.replace(
    /<img src="\.\.\/assets\/diy_valve\.png" alt="Premium Installation".*?>/s,
    `<img src="../assets/tier_ttt_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #f59e0b;">`
);
html = html.replace(
    /<h3 style="color: #f59e0b;" data-i18n="promo_tt_better_title">BETTER \(Premium\)<\/h3>/g,
    `<h3 style="color: #f59e0b;" data-i18n="promo_ttt_better_title">BETTER (Premium)</h3>`
);
html = html.replace(
    /<p data-i18n="promo_tt_better_desc" style=".*?">Navien NPE-240A2\. Includes NaviCirc Recirculation and Scale Prevention Filter\.<\/p>/s,
    `<p data-i18n="promo_ttt_better_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2. Includes NaviCirc Recirculation and Scale Prevention Filter.</p>`
);


html = html.replace(
    /<img src="\.\.\/assets\/diy_gfi\.png" alt="Ultra-Premium Installation".*?>/s,
    `<img src="../assets/tier_ttt_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #8b5cf6;">`
);
html = html.replace(
    /<h3 style="color: #8b5cf6;" data-i18n="promo_tt_best_title">BEST \(Ultra-Premium\)<\/h3>/g,
    `<h3 style="color: #8b5cf6;" data-i18n="promo_ttt_best_title">BEST (Ultra-Premium)</h3>`
);
html = html.replace(
    /<p data-i18n="promo_tt_best_desc" style=".*?">Navien NPE-240A2\. Includes Dedicated Gas Line Upgrade & NaviLink WiFi Control\.<\/p>/s,
    `<p data-i18n="promo_ttt_best_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Navien NPE-240A2. Includes Dedicated Gas Line Upgrade & NaviLink WiFi Control.</p>`
);

// Fix list keys
html = html.replace(/promo_tt_good_li/g, 'promo_ttt_good_li');
html = html.replace(/promo_tt_better_li/g, 'promo_ttt_better_li');
html = html.replace(/promo_tt_best_li/g, 'promo_ttt_best_li');


// --- 5. Fix the Comics (Images and Text) ---
html = html.replace(
    /<img src="\.\.\/assets\/comic_good_v2\.png" alt="Comic GOOD v2">/s,
    `<img src="../assets/comic_ttt_good.png" alt="Tankless Replacement Comic GOOD">`
);

html = html.replace(
    /<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_tt_good_comic_1">.*?<\/li>/s,
    `<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_ttt_good_comic_1">1. Retiro seguro del calentador Tankless antiguo.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-2" data-i18n="promo_tt_good_comic_2">.*?<\/li>/s,
    `<li class="comic-bubble bubble-2" data-i18n="promo_ttt_good_comic_2">2. Instalación de reemplazo directo Navien NPE-A2.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-3" data-i18n="promo_tt_good_comic_3">.*?<\/li>/s,
    `<li class="comic-bubble bubble-3" data-i18n="promo_ttt_good_comic_3">3. Reutilización segura de la ventilación existente.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-4" data-i18n="promo_tt_good_comic_4">.*?<\/li>/s,
    `<li class="comic-bubble bubble-4" data-i18n="promo_ttt_good_comic_4">4. Retorno inmediato del agua caliente a la propiedad.</li>`
);


html = html.replace(
    /<img src="\.\.\/assets\/comic_better_v2\.png" alt="Comic BETTER v2">/s,
    `<img src="../assets/comic_ttt_better.png" alt="Tankless Replacement Comic BETTER">`
);

html = html.replace(
    /<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_tt_better_comic_1">.*?<\/li>/s,
    `<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_ttt_better_comic_1">1. Instalación del reemplazo premium.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-2" data-i18n="promo_tt_better_comic_2">.*?<\/li>/s,
    `<li class="comic-bubble bubble-2" data-i18n="promo_ttt_better_comic_2">2. Activación de la válvula de recirculación interna.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-3" data-i18n="promo_tt_better_comic_3">.*?<\/li>/s,
    `<li class="comic-bubble bubble-3" data-i18n="promo_ttt_better_comic_3">3. Instalación de filtro antisarro PeakFlow.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-4" data-i18n="promo_tt_better_comic_4">.*?<\/li>/s,
    `<li class="comic-bubble bubble-4" data-i18n="promo_ttt_better_comic_4">4. Protección prolongada y agua instantánea.</li>`
);


html = html.replace(
    /<img src="\.\.\/assets\/comic_best_v2\.png" alt="Comic BEST v2">/s,
    `<img src="../assets/comic_ttt_best.png" alt="Tankless Replacement Comic BEST">`
);

html = html.replace(
    /<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_tt_best_comic_1">.*?<\/li>/s,
    `<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_ttt_best_comic_1">1. Mejora completa de la línea principal de gas.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-2" data-i18n="promo_tt_best_comic_2">.*?<\/li>/s,
    `<li class="comic-bubble bubble-2" data-i18n="promo_ttt_best_comic_2">2. Sincronización con el módulo WiFi NaviLink.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-3" data-i18n="promo_tt_best_comic_3">.*?<\/li>/s,
    `<li class="comic-bubble bubble-3" data-i18n="promo_ttt_best_comic_3">3. Control total desde el smartphone.</li>`
);
html = html.replace(
    /<li class="comic-bubble bubble-4" data-i18n="promo_tt_best_comic_4">.*?<\/li>/s,
    `<li class="comic-bubble bubble-4" data-i18n="promo_ttt_best_comic_4">4. Sistema inteligente de máxima eficiencia integrado.</li>`
);

// --- 6. Fix Legal Section ---
html = html.replace(
    /<strong style="color: #fff;" data-i18n="promo_tt_legal_mandate_title">.*?<\/strong>\s*<p.*?<\/p>/s,
    `<strong style="color: #fff;" data-i18n="promo_ttt_legal_mandate_title">1. Venting & Gas Compliance:</strong>
     <p data-i18n="promo_ttt_legal_mandate_desc" style="margin-top: 0.5rem;">Even direct replacements must comply with modern venting requirements and gas pressure standards. PVC vs Schedule 40 requirements may apply.</p>`
);

html = html.replace(
    /<strong style="color: #fff;" data-i18n="promo_tt_legal_rebates_title">.*?<\/strong>\s*<p.*?<\/p>/s,
    `<strong style="color: #fff;" data-i18n="promo_ttt_legal_rebates_title">2. Federal & Local Rebates:</strong>
     <p data-i18n="promo_ttt_legal_rebates_desc" style="margin-top: 0.5rem;">Upgrading an old tankless to an ultra-high efficiency condensing Navien NPE-A2 may qualify for tax credits and local utility rebates.</p>`
);
html = html.replace(/promo_tt_legal_apply/g, 'promo_ttt_legal_apply');
html = html.replace(/promo_tt_legal_time/g, 'promo_ttt_legal_time');

fs.writeFileSync(FILE_PATH, html);
console.log('Successfully repaired docs/promo_tankless_to_tankless.html');
