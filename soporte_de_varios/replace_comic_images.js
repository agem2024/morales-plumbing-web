const fs = require('fs');

// 1. Update req_hp.html
let hp = fs.readFileSync('docs/req_hp.html', 'utf8');
// Remove crop CSS
hp = hp.replace(/\.comic-img-wrapper img \{[^}]+\}/, '.comic-img-wrapper img { width: 100%; border-radius: 8px; border: 3px solid #000; margin-bottom: 1.5rem; }');
hp = hp.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/comic_good_clean\.png" alt="Step 1"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/icon_plumber_eco.png" alt="Step 1"></div>');
hp = hp.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/comic_better\.png" alt="Step 2"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/icon_plumber_biz.png" alt="Step 2"></div>');
hp = hp.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/comic_best\.png" alt="Step 3"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/icon_plumber_sat.png" alt="Step 3"></div>');
fs.writeFileSync('docs/req_hp.html', hp);

// 2. Update req_tt.html
let tt = fs.readFileSync('docs/req_tt.html', 'utf8');
// Remove crop CSS
tt = tt.replace(/\.comic-img-wrapper img \{[^}]+\}/, '.comic-img-wrapper img { width: 100%; border-radius: 8px; border: 3px solid #000; margin-bottom: 1.5rem; }');
tt = tt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/tt_comic_1\.png" alt="Step 1"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/diy_disposal.png" alt="Step 1"></div>');
tt = tt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/tt_comic_2\.png" alt="Step 2"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/navien_plan_good.png" alt="Step 2"></div>');
tt = tt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/tt_comic_3\.png" alt="Step 3"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/diy_valve.png" alt="Step 3"></div>');
tt = tt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/tt_comic_4\.png" alt="Step 4"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/icon_plumber_sat.png" alt="Step 4"></div>');
fs.writeFileSync('docs/req_tt.html', tt);

// 3. Update req_ttt.html
let ttt = fs.readFileSync('docs/req_ttt.html', 'utf8');
// Remove crop CSS
ttt = ttt.replace(/\.comic-img-wrapper img \{[^}]+\}/, '.comic-img-wrapper img { width: 100%; border-radius: 8px; border: 3px solid #000; margin-bottom: 1.5rem; }');
ttt = ttt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/ttt_comic_1\.png" alt="Step 1"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/icon_plumber_biz.png" alt="Step 1"></div>');
ttt = ttt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/ttt_comic_2\.png" alt="Step 2"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/navien_plan_better.png" alt="Step 2"></div>');
ttt = ttt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/ttt_comic_3\.png" alt="Step 3"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/diy_valve.png" alt="Step 3"></div>');
ttt = ttt.replace(/<div class="comic-img-wrapper"><img src="\.\.\/assets\/ttt_comic_4\.png" alt="Step 4"><\/div>/, '<div class="comic-img-wrapper"><img src="../assets/navien_plan_best.png" alt="Step 4"></div>');
fs.writeFileSync('docs/req_ttt.html', ttt);

console.log('Replaced all comic images with clean existing assets.');
