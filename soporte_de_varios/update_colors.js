const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// BEST: Replace Purple (#8b5cf6) with Neon Orange (#ff5500)
html = html.replace(/#8b5cf6/g, '#ff5500');

// BETTER: Replace Amber (#f59e0b) with Neon Yellow (#ffcc00)
html = html.replace(/#f59e0b/g, '#ffcc00');

// GOOD: Replace Cyan (var(--neon-cyan)) with Neon Green (#39ff14) in specific elements
// We will look for elements like <img ... border: 1px solid var(--neon-cyan);> inside GOOD block.
// And <h3 data-i18n="promo_..._good_title"> which currently might just use global CSS or inline CSS.
// Let's actually add the color inline to the GOOD h3s to ensure it's green.
html = html.replace(/<h3 data-i18n="promo_wp_good_title">/g, '<h3 style="color: #39ff14;" data-i18n="promo_wp_good_title">');
html = html.replace(/<h3 data-i18n="promo_tt_good_title">/g, '<h3 style="color: #39ff14;" data-i18n="promo_tt_good_title">');
html = html.replace(/<h3 data-i18n="promo_ttt_good_title">/g, '<h3 style="color: #39ff14;" data-i18n="promo_ttt_good_title">');

// Also update the GOOD image border to green instead of var(--neon-cyan)
html = html.replace(/style="([^"]*)border: 1px solid var\(--neon-cyan\);([^"]*)"/g, 'style="$1border: 2px solid #39ff14;$2"');

// Wait, the div class="tier-card" for GOOD doesn't have inline border right now, it relies on global .tier-card.
// Let's add inline border to GOOD tier cards.
// They look like: <div class="tier-card">\n                <img src="../assets/plan_good_clean.png"
html = html.replace(/<div class="tier-card">(\s*<img src="\.\.\/assets\/(navien_)?plan_good)/g, '<div class="tier-card" style="border: 2px solid #39ff14; box-shadow: 0 0 15px rgba(57, 255, 20, 0.2);">$1');

// Let's also update the "Everything in GOOD, plus:" color for BETTER, which we just changed to #ffcc00.
// Same for BEST "Everything in BETTER, plus:" which we just changed to #ff5500.

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully updated colors to Orange, Green, and Yellow!');
