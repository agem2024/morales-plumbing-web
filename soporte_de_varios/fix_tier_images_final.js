const fs = require('fs');

const filesToFix = [
    'docs/promo_tank_to_tankless.html',
    'docs/promo_tankless_to_tankless.html',
    'docs/promocion_water_heaters.html',
    'docs/req_tt.html',
    'docs/req_ttt.html'
];

filesToFix.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        
        // Replace TT images
        html = html.replace(/comic_tt_good\.png/g, 'tier_tt_good.png');
        html = html.replace(/comic_tt_better\.png/g, 'tier_tt_better.png');
        html = html.replace(/comic_tt_best\.png/g, 'tier_tt_best.png');
        
        // Replace TTT images
        html = html.replace(/comic_ttt_good\.png/g, 'tier_ttt_good.png');
        html = html.replace(/comic_ttt_better\.png/g, 'tier_ttt_better.png');
        html = html.replace(/comic_ttt_best\.png/g, 'tier_ttt_best.png');
        
        fs.writeFileSync(file, html);
        console.log("Fixed", file);
    }
});
