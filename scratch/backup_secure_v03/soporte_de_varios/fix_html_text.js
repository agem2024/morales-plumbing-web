const fs = require('fs');
let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Fix Tank to Tankless (tt) descriptions and list items
html = html.replace('data-i18n="promo_tt_desc">Ensure compliance with BAAQMD Regulation 9, Rule 6. Transition to ultra-efficient electric Heat Pump Water Heaters before the 2027 deadline.</p>', 'data-i18n="promo_tt_desc">Transition to a high-efficiency Navien Tankless Water Heater. Endless hot water and massive space savings.</p>');
html = html.replace('data-i18n="promo_tt_why_desc">Gas water heaters will be phased out. Heat pumps offer up to 400% efficiency, massive tax rebates, and zero emissions.</p>', 'data-i18n="promo_tt_why_desc">Tankless systems provide endless hot water on demand, lasting up to twice as long as traditional tank heaters while reducing energy bills.</p>');

// Fix Tank to Tankless (tt) GOOD tier
html = html.replace('data-i18n="promo_tt_good_li1">Rheem ProTerra 50-Gal Heat Pump Unit.</li>', 'data-i18n="promo_tt_good_li1">Navien NPE-240A2 High Efficiency Unit.</li>');
html = html.replace('data-i18n="promo_tt_good_li2">City permits & CSLB code compliance.</li>', 'data-i18n="promo_tt_good_li2">Gas line and venting modifications.</li>');
html = html.replace('data-i18n="promo_tt_good_li3">Haul-away & disposal of old unit.</li>', 'data-i18n="promo_tt_good_li3">City permits & old tank haul-away.</li>');

// Fix Tank to Tankless (tt) BETTER tier
html = html.replace('data-i18n="promo_tt_better_li2">Moen Flo Smart Leak Detection Valve.</li>', 'data-i18n="promo_tt_better_li2">NaviCirc Recirculation Valve.</li>');
html = html.replace('data-i18n="promo_tt_better_li4">Dedicated 240V wiring (up to 20ft) & WiFi.</li>', 'data-i18n="promo_tt_better_li4">Navien PeakFlow Scale Prevention System.</li>');

// Fix Tank to Tankless (tt) BEST tier
html = html.replace('data-i18n="promo_tt_best_li3">Electrical Panel Capacity Assessment.</li>', 'data-i18n="promo_tt_best_li3">Dedicated High-Capacity Gas Line.</li>');
html = html.replace('data-i18n="promo_tt_best_li4">Smart home routing.</li>', 'data-i18n="promo_tt_best_li4">NaviLink WiFi Control Module.</li>');


// Fix Tankless to Tankless (ttt) descriptions and list items
html = html.replace('data-i18n="promo_ttt_desc">Ensure compliance with BAAQMD Regulation 9, Rule 6. Transition to ultra-efficient electric Heat Pump Water Heaters before the 2027 deadline.</p>', 'data-i18n="promo_ttt_desc">Upgrade your old tankless system to the latest Navien NPE-A2 series with advanced recirculation technology.</p>');
html = html.replace('data-i18n="promo_ttt_why_desc">Gas water heaters will be phased out. Heat pumps offer up to 400% efficiency, massive tax rebates, and zero emissions.</p>', 'data-i18n="promo_ttt_why_desc">Older tankless models lose efficiency over time. The new Navien models offer ultra-high efficiency, built-in recirculation, and smart connectivity.</p>');

// Fix Tankless to Tankless (ttt) GOOD tier
html = html.replace('data-i18n="promo_ttt_good_li1">Rheem ProTerra 50-Gal Heat Pump Unit.</li>', 'data-i18n="promo_ttt_good_li1">Navien NPE-240A2 Direct Swap.</li>');
html = html.replace('data-i18n="promo_ttt_good_li2">City permits & CSLB code compliance.</li>', 'data-i18n="promo_ttt_good_li2">Reuse of existing venting and gas.</li>');
html = html.replace('data-i18n="promo_ttt_good_li3">Haul-away & disposal of old unit.</li>', 'data-i18n="promo_ttt_good_li3">City permits & old unit haul-away.</li>');

// Fix Tankless to Tankless (ttt) BETTER tier
html = html.replace('data-i18n="promo_ttt_better_li2">Moen Flo Smart Leak Detection Valve.</li>', 'data-i18n="promo_ttt_better_li2">Internal Recirculation Pump activation.</li>');
html = html.replace('data-i18n="promo_ttt_better_li4">Dedicated 240V wiring (up to 20ft) & WiFi.</li>', 'data-i18n="promo_ttt_better_li4">Navien PeakFlow Scale Prevention System.</li>');

// Fix Tankless to Tankless (ttt) BEST tier
html = html.replace('data-i18n="promo_ttt_best_li3">Electrical Panel Capacity Assessment.</li>', 'data-i18n="promo_ttt_best_li3">Halo Water Treatment System integration.</li>');
html = html.replace('data-i18n="promo_ttt_best_li4">Smart home routing.</li>', 'data-i18n="promo_ttt_best_li4">NaviLink WiFi Control Module.</li>');

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Fixed copy-paste errors in Tankless HTML descriptions.');
