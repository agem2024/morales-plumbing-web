const fs = require('fs');

const FILE_PATH = 'docs/promo_tank_to_tankless.html';
let html = fs.readFileSync(FILE_PATH, 'utf8');

// --- 1. Fix the Hero Section ---
html = html.replace(
    /<p style="font-size: 1.2rem; margin-top: 1.5rem; color: #e2e8f0; line-height: 1.8;" data-i18n="promo_tt_desc">.*?<\/p>/s,
    `<p style="font-size: 1.2rem; margin-top: 1.5rem; color: #e2e8f0; line-height: 1.8;" data-i18n="promo_tt_desc">Upgrade from an old, inefficient tank to an endless supply of hot water with a high-efficiency Navien Tankless Water Heater. Save space, save energy, and never run out of hot water again.</p>`
);

html = html.replace(
    /<img src="\.\.\/assets\/heatpump_hero\.png" alt="Heat Pump Water Heater">/,
    `<img src="../assets/tier_tt_good.png" alt="Navien Tankless Water Heater">`
);

// --- 2. Fix the "Why Upgrade" Section ---
html = html.replace(
    /<p style="font-size: 1.1rem; color: #cbd5e1; line-height: 1.7;" data-i18n="promo_tt_why_desc">.*?<\/p>/s,
    `<p style="font-size: 1.1rem; color: #cbd5e1; line-height: 1.7;" data-i18n="promo_tt_why_desc">Traditional tanks waste energy heating water 24/7. Tankless systems only heat water when you need it, lasting up to twice as long and virtually eliminating the risk of catastrophic tank bursts.</p>`
);

// --- 3. Update the Links ---
html = html.replace(
    /<a href="ley_water_heaters\.html" class="btn btn-outline".*?>.*?<\/a>/s,
    `<a href="ley_water_heaters.html" class="btn btn-outline" style="border-color: #ffcc00; color: #ffcc00; display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px;">California Plumbing Codes & Regulations</a>`
);

// --- 4. Update the Tiers Images and some features to match Tankless ---
html = html.replace(
    /<img src="\.\.\/assets\/plan_good_clean\.png" alt="Standard Installation".*?>/s,
    `<img src="../assets/tier_tt_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid var(--neon-cyan);">`
);

html = html.replace(
    /<li data-i18n="promo_tt_good_li1">Rheem ProTerra 50-Gal Heat Pump Unit\.<\/li>/s,
    `<li data-i18n="promo_tt_good_li1">Navien NPE-240A2 Tankless Unit.</li>`
);

html = html.replace(
    /<img src="\.\.\/assets\/diy_valve\.png" alt="Premium Installation".*?>/s,
    `<img src="../assets/tier_tt_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #f59e0b;">`
);

html = html.replace(
    /<img src="\.\.\/assets\/diy_gfi\.png" alt="Ultra-Premium Installation".*?>/s,
    `<img src="../assets/tier_tt_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #8b5cf6;">`
);

// --- 5. Fix the Comics (Images and Text) ---
html = html.replace(
    /<img src="\.\.\/assets\/comic_good_v2\.png" alt="Comic GOOD v2">/s,
    `<img src="../assets/comic_tt_good.png" alt="Tankless Comic GOOD">`
);

html = html.replace(
    /<li class="comic-bubble bubble-2" data-i18n="promo_tt_good_comic_2">.*?<\/li>/s,
    `<li class="comic-bubble bubble-2" data-i18n="promo_tt_good_comic_2">2. Instalación de calentador Tankless de alta eficiencia.</li>`
);

html = html.replace(
    /<li class="comic-bubble bubble-3" data-i18n="promo_tt_good_comic_3">.*?<\/li>/s,
    `<li class="comic-bubble bubble-3" data-i18n="promo_tt_good_comic_3">3. Ahorro masivo de espacio y agua caliente infinita.</li>`
);

html = html.replace(
    /<img src="\.\.\/assets\/comic_better_v2\.png" alt="Comic BETTER v2">/s,
    `<img src="../assets/comic_tt_better.png" alt="Tankless Comic BETTER">`
);

html = html.replace(
    /<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_tt_better_comic_1">.*?<\/li>/s,
    `<li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_tt_better_comic_1">1. Instalación de la unidad Premium Navien con filtro integrado.</li>`
);

html = html.replace(
    /<img src="\.\.\/assets\/comic_best_v2\.png" alt="Comic BEST v2">/s,
    `<img src="../assets/comic_tt_best.png" alt="Tankless Comic BEST">`
);

html = html.replace(
    /<li class="comic-bubble bubble-2" data-i18n="promo_tt_best_comic_2">.*?<\/li>/s,
    `<li class="comic-bubble bubble-2" data-i18n="promo_tt_best_comic_2">2. Instalación del Moen Flo Smart Valve y PRV.</li>`
);

// --- 6. Fix Legal Section ---
html = html.replace(
    /<strong style="color: #fff;" data-i18n="promo_tt_legal_mandate_title">.*?<\/strong>\s*<p.*?<\/p>/s,
    `<strong style="color: #fff;" data-i18n="promo_tt_legal_mandate_title">1. Gas Line Upgrades:</strong>
     <p data-i18n="promo_tt_legal_mandate_desc" style="margin-top: 0.5rem;">Tankless systems require 199,000 BTU, meaning gas lines often need upgrading to 3/4" or 1" to meet California Plumbing Code requirements.</p>`
);

html = html.replace(
    /<strong style="color: #fff;" data-i18n="promo_tt_legal_rebates_title">.*?<\/strong>\s*<p.*?<\/p>/s,
    `<strong style="color: #fff;" data-i18n="promo_tt_legal_rebates_title">2. SoCalGas Rebates:</strong>
     <p data-i18n="promo_tt_legal_rebates_desc" style="margin-top: 0.5rem;">High-efficiency Tankless models may qualify for rebates from your local gas provider. Ask our technicians for required documentation.</p>`
);

fs.writeFileSync(FILE_PATH, html);
console.log('Successfully repaired docs/promo_tank_to_tankless.html');
