const fs = require('fs');

const comicFiles = [
    'docs/promo_tank_to_tankless.html',
    'docs/promo_tankless_to_tankless.html',
    'docs/req_tt.html',
    'docs/req_ttt.html'
];

comicFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        
        // These pages should use the COMIC images, NOT the package tiers
        html = html.replace(/tier_tt_good\.png/g, 'comic_tt_good.png');
        html = html.replace(/tier_tt_better\.png/g, 'comic_tt_better.png');
        html = html.replace(/tier_tt_best\.png/g, 'comic_tt_best.png');
        
        html = html.replace(/tier_ttt_good\.png/g, 'comic_ttt_good.png');
        html = html.replace(/tier_ttt_better\.png/g, 'comic_ttt_better.png');
        html = html.replace(/tier_ttt_best\.png/g, 'comic_ttt_best.png');
        
        // Also for Heat Pump if present in req_hp (it should be comic_good.png, not plan_good.png)
        html = html.replace(/plan_good\.png/g, 'comic_good.png');
        html = html.replace(/plan_better\.png/g, 'comic_better.png');
        html = html.replace(/plan_best\.png/g, 'comic_best.png');
        
        fs.writeFileSync(file, html);
        console.log("Restored comic images in", file);
    }
});

// For req_hp.html as well
if (fs.existsSync('docs/req_hp.html')) {
    let html = fs.readFileSync('docs/req_hp.html', 'utf8');
    html = html.replace(/plan_good\.png/g, 'comic_good.png');
    html = html.replace(/plan_better\.png/g, 'comic_better.png');
    html = html.replace(/plan_best\.png/g, 'comic_best.png');
    fs.writeFileSync('docs/req_hp.html', html);
    console.log("Restored comic images in docs/req_hp.html");
}

