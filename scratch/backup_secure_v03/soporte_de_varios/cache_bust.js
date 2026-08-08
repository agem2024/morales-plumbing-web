const fs = require('fs');

['docs/promocion_water_heaters.html', 'docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(f => {
    let html = fs.readFileSync(f, 'utf8');
    const version = Date.now();
    html = html.replace(/app\.js\?v=[^"']+/g, 'app.js?v=' + version);
    fs.writeFileSync(f, html);
    console.log(`Busted cache for ${f} to v=${version}`);
});
