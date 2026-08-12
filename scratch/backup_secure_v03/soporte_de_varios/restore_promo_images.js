const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Replace Heat Pump (Rheem) images
html = html.replace(/<img src="\.\.\/assets\/plan_good\.png"[^>]+>/, '<img src="../assets/comic_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 2px solid #39ff14;">');
html = html.replace(/<img src="\.\.\/assets\/plan_better\.png"[^>]+>/, '<img src="../assets/comic_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ffcc00;">');
html = html.replace(/<img src="\.\.\/assets\/plan_best\.png"[^>]+>/, '<img src="../assets/comic_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ff5500;">');

// Replace Tank to Tankless (Navien) images
html = html.replace(/<img src="\.\.\/assets\/navien_plan_good\.png"[^>]+>/, '<img src="../assets/comic_tt_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 2px solid #39ff14;">');
html = html.replace(/<img src="\.\.\/assets\/navien_plan_better\.png"[^>]+>/, '<img src="../assets/comic_tt_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ffcc00;">');
html = html.replace(/<img src="\.\.\/assets\/navien_plan_best\.png"[^>]+>/, '<img src="../assets/comic_tt_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ff5500;">');

// Replace Tankless to Tankless images
html = html.replace(/<img src="\.\.\/assets\/comic_heaters\.png"[^>]+>/, '<img src="../assets/comic_ttt_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 2px solid #39ff14;">');
html = html.replace(/<img src="\.\.\/assets\/pb_svc_12\.png"[^>]+>/, '<img src="../assets/comic_ttt_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ffcc00;">');
html = html.replace(/<img src="\.\.\/assets\/pb_svc_14\.png"[^>]+>/, '<img src="../assets/comic_ttt_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ff5500;">');

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log("Updated images in docs/promocion_water_heaters.html");
