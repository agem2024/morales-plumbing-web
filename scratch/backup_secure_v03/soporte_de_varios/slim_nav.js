const fs = require('fs');

const slimNavCSS = `
        /* ── CYBER NAV HEADER SLIM ── */
        .cyber-nav {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99999;
            display: flex !important;
            flex-direction: row !important; /* Never stack vertically */
            justify-content: space-between !important;
            align-items: center !important;
            padding: 0.5rem 1rem !important; /* Much thinner padding */
            background: rgba(3, 7, 18, 0.95) !important; /* Original dark background */
            border-bottom: 2px solid var(--neon-cyan) !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8) !important;
        }
        .cyber-nav .logo {
            font-family: 'Orbitron', sans-serif !important;
            font-size: 1rem !important; /* Reduced logo size */
            color: var(--neon-cyan) !important;
            font-weight: 900 !important;
            white-space: nowrap !important;
        }
        .cyber-nav .nav-links {
            display: flex !important;
            flex-direction: row !important;
            gap: 1rem !important; /* Tighter gap */
        }
        .cyber-nav .nav-links a {
            color: #ffffff !important;
            text-decoration: none !important;
            font-family: 'Inter', sans-serif !important;
            font-weight: 600 !important;
            font-size: 0.85rem !important; /* Reduced link size */
            transition: color 0.3s ease !important;
            white-space: nowrap !important;
        }
        .cyber-nav .nav-links a:hover {
            color: var(--neon-cyan) !important;
        }
        .lang-selector {
            display: flex !important;
            flex-direction: row !important;
            gap: 0.3rem !important;
        }
        .lang-selector button {
            background: rgba(255,255,255,.05) !important;
            border: 1px solid rgba(255,255,255,.15) !important;
            border-radius: 4px !important;
            padding: 0.2rem 0.4rem !important; /* Reduced button padding */
            font-family: 'Inter', sans-serif !important;
            font-size: 0.75rem !important; /* Reduced button font size */
            font-weight: 600 !important;
            color: #ffffff !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
        }
        .lang-selector button:hover, .lang-selector button.active {
            border-color: var(--neon-cyan) !important;
            background: rgba(0,245,255,.1) !important;
            color: var(--neon-cyan) !important;
            box-shadow: 0 0 10px rgba(0,245,255,.2) !important;
        }
`;

// 1. Fix docs/service_water_heater.html
let swh = fs.readFileSync('docs/service_water_heater.html', 'utf8');

// Replace everything inside /* ── CYBER NAV HEADER ── */ down to the end of the style
// Wait, to be safe, let's just append the slimNavCSS right before </style> because it uses !important
// and remove the problematic media queries we added before.
swh = swh.replace(/@media \(max-width: 768px\) \{\s*\.cyber-nav[\s\S]*?\}/, ''); // Remove mobile media query if present
swh = swh.replace(/padding-top: 2rem;/g, 'padding-top: 100px;'); // Restore 100px padding

// Insert the slimNavCSS
swh = swh.replace('</style>', `${slimNavCSS}\n    </style>`);

fs.writeFileSync('docs/service_water_heater.html', swh);

// 2. Fix the 3 requirement pages
['docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Remove inline styles from nav to prevent conflict, we will style via classes
    html = html.replace(/<nav class="cyber-nav" style="[^"]+">/, '<nav class="cyber-nav">');
    
    // Remove inline styles from a tags inside nav
    html = html.replace(/<a href="promocion_water_heaters.html" style="[^"]+">/, '<a href="promocion_water_heaters.html">');
    
    // Remove inline styles from lang buttons
    html = html.replace(/style="background:none; color:#ffffff !important; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;"/g, '');
    html = html.replace(/style="background:none; color:#fff; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;"/g, '');
    
    // Restore padding-top 100px on body
    html = html.replace(/padding-top: 0;/g, 'padding-top: 100px;');
    html = html.replace(/padding-top: 0px;/g, 'padding-top: 100px;');
    
    // Remove old mobile media query
    html = html.replace(/@media \(max-width: 768px\) \{\s*\.cyber-nav[\s\S]*?\}/, '');
    
    // Append the slimNavCSS
    html = html.replace('</style>', `${slimNavCSS}\n    </style>`);
    
    fs.writeFileSync(file, html);
});

console.log('Restored position:fixed and reduced overall size of the navigation bar.');
