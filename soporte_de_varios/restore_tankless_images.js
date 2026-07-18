const fs = require('fs');

// Fix promo_tankless_to_tankless.html (TTT)
let ttt_html = fs.readFileSync('docs/promo_tankless_to_tankless.html', 'utf8');

// Replace Hero Image
ttt_html = ttt_html.replace('src="../assets/tier_ttt_good.png"', 'src="../assets/ttt_hero.png"');

// Replace Comic Images
ttt_html = ttt_html.replace('src="../assets/comic_good.png"', 'src="../assets/comic_ttt_good.png"');
ttt_html = ttt_html.replace('src="../assets/comic_better.png"', 'src="../assets/comic_ttt_better.png"');
ttt_html = ttt_html.replace('src="../assets/comic_best.png"', 'src="../assets/comic_ttt_best.png"');

fs.writeFileSync('docs/promo_tankless_to_tankless.html', ttt_html);

// Fix promo_tank_to_tankless.html (TT)
let tt_html = fs.readFileSync('docs/promo_tank_to_tankless.html', 'utf8');

// Replace Hero Image
tt_html = tt_html.replace('src="../assets/tier_tt_good.png"', 'src="../assets/tt_hero.png"');

// Replace Comic Images
tt_html = tt_html.replace('src="../assets/comic_good.png"', 'src="../assets/comic_tt_good.png"');
tt_html = tt_html.replace('src="../assets/comic_better.png"', 'src="../assets/comic_tt_better.png"');
tt_html = tt_html.replace('src="../assets/comic_best.png"', 'src="../assets/comic_tt_best.png"');

fs.writeFileSync('docs/promo_tank_to_tankless.html', tt_html);

console.log("Restored original images to TTT and TT pages");
