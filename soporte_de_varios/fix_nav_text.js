const fs = require('fs');

['docs/service_water_heater.html', 'docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Remove backdrop-filter which causes text rendering glitches on some mobile browsers
    html = html.replace(/backdrop-filter:\s*blur\([^)]+\);/g, '');
    html = html.replace(/backdrop-filter:blur\([^)]+\);/g, '');
    
    // Change background to a safe, highly visible dark color without transparency issues
    html = html.replace(/background:\s*rgba\(3,\s*7,\s*18,\s*0\.85\)/g, 'background: #030712');
    html = html.replace(/background:rgba\(3,7,18,0\.85\)/g, 'background:#030712');

    // Ensure links are explicitly white with !important to prevent any accidental inheritance hiding them
    html = html.replace(/\.cyber-nav \.nav-links a \{([^}]+)color:\s*#fff;/g, '.cyber-nav .nav-links a {$1color: #ffffff !important;');
    
    // For inline styles on req_ pages
    html = html.replace(/color:#fff;/g, 'color:#ffffff !important;');
    
    // Make sure the lang selector buttons are also explicitly visible
    if (html.includes('.lang-selector button {')) {
        html = html.replace(/\.lang-selector button \{([^}]+)color:\s*#fff;/g, '.lang-selector button {$1color: #ffffff !important;');
    }
    
    fs.writeFileSync(file, html);
    console.log('Fixed rendering issue on ' + file);
});
