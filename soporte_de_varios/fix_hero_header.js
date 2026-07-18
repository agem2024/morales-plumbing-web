const fs = require('fs');

const originalNavCSS = `
        /* ── CYBER NAV HEADER ── */
        .cyber-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background: rgba(3, 7, 18, 0.95);
            border-bottom: 2px solid var(--neon-cyan);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
        }
        .cyber-nav .logo {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.2rem;
            color: var(--neon-cyan);
            font-weight: 900;
        }
        .cyber-nav .nav-links {
            display: flex;
            gap: 2rem;
        }
        .cyber-nav .nav-links a {
            color: #fff;
            text-decoration: none;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        .cyber-nav .nav-links a:hover {
            color: var(--neon-cyan);
        }
        .lang-selector {
            display: flex;
            gap: 0.5rem;
        }
        .lang-selector button {
            background: rgba(255,255,255,.05);
            border: 1px solid rgba(255,255,255,.15);
            border-radius: 4px;
            padding: 0.3rem 0.6rem;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .lang-selector button:hover, .lang-selector button.active {
            border-color: var(--neon-cyan);
            background: rgba(0,245,255,.1);
            color: var(--neon-cyan);
            box-shadow: 0 0 10px rgba(0,245,255,.2);
        }
`;

// 1. Process docs/service_water_heater.html
let swh = fs.readFileSync('docs/service_water_heater.html', 'utf8');

// Restore the original nav css
swh = swh.replace(/\/\* ── CYBER NAV HEADER EXTRA SLIM ── \*\/[\s\S]*?\.lang-selector button\.active \{[^}]+\}/, originalNavCSS);

// Make the HERO header less invasive and much smaller
swh = swh.replace(/\.service-header\s*\{[^}]+\}/, `
        .service-header {
            text-align: center;
            padding: 1.5rem 1rem 0.5rem; /* Drastically reduced vertical padding */
            background: transparent; /* Removed the heavy block gradient */
        }
`);

// Reduce the font sizes of the hero text
swh = swh.replace(/<h1 data-i18n="swh_title">Water Heater Services<\/h1>/, '<h1 data-i18n="swh_title" style="font-size: 1.8rem; margin-bottom: 0.2rem;">Water Heater Services</h1>');
swh = swh.replace(/<h3 style="color: #cbd5e1; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem;" data-i18n="swh_subtitle">/, '<h3 style="color: #cbd5e1; font-family: \'Rajdhani\', sans-serif; font-size: 1.1rem; margin-top:0; margin-bottom: 0.2rem;" data-i18n="swh_subtitle">');
swh = swh.replace(/<p style="color: #94a3b8; max-width: 600px; margin: 1rem auto; font-size: 1.1rem;" data-i18n="swh_intro">/, '<p style="color: #94a3b8; max-width: 700px; margin: 0.5rem auto 1rem; font-size: 0.9rem; line-height: 1.3;" data-i18n="swh_intro">');

// The header padding-top was already 100px due to previous fixes, which is needed to clear the fixed nav. 
// We will change it to padding-top: 80px (enough to clear the normal nav).
swh = swh.replace(/<header class="service-header" style="padding-top: 100px;">/, '<header class="service-header" style="padding-top: 80px;">');

fs.writeFileSync('docs/service_water_heater.html', swh);


// 2. Process the other files to restore their nav
['docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Remove the extra slim nav CSS
    html = html.replace(/\/\* ── CYBER NAV HEADER EXTRA SLIM ── \*\/[\s\S]*?\.lang-selector button\.active \{[^}]+\}/, originalNavCSS);
    
    // Put back the original inline CSS just in case
    html = html.replace(/<nav class="cyber-nav">/, '<nav class="cyber-nav" style="position:fixed; top:0; width:100%; z-index:999; display:flex; justify-content:space-between; padding:1rem 2rem; background:rgba(3,7,18,0.95); border-bottom:2px solid var(--neon-cyan);">');
    
    fs.writeFileSync(file, html);
});

console.log('Restored the original navigation bar and successfully shrank the HERO HEADER (service-header) to be much smaller and non-invasive.');
