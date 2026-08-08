const fs = require('fs');

const extraSlimNavCSS = `
        /* ── CYBER NAV HEADER EXTRA SLIM ── */
        .cyber-nav {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99999;
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 0.25rem 0.5rem !important; /* Extremely thin padding */
            background: rgba(3, 7, 18, 0.95) !important;
            border-bottom: 1px solid var(--neon-cyan) !important; /* Thinner border */
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8) !important;
        }
        .cyber-nav .logo {
            font-family: 'Orbitron', sans-serif !important;
            font-size: 0.8rem !important; /* Micro logo */
            color: var(--neon-cyan) !important;
            font-weight: 900 !important;
            white-space: nowrap !important;
            margin-right: 0.5rem !important;
        }
        .cyber-nav .nav-links {
            display: flex !important;
            flex-direction: row !important;
            gap: 0.5rem !important; /* Extremely tight gap */
        }
        .cyber-nav .nav-links a {
            color: #ffffff !important;
            text-decoration: none !important;
            font-family: 'Inter', sans-serif !important;
            font-weight: 600 !important;
            font-size: 0.7rem !important; /* Micro links */
            transition: color 0.3s ease !important;
            white-space: nowrap !important;
        }
        .cyber-nav .nav-links a:hover {
            color: var(--neon-cyan) !important;
        }
        .lang-selector {
            display: flex !important;
            flex-direction: row !important;
            gap: 0.2rem !important;
        }
        .lang-selector button {
            background: rgba(255,255,255,.05) !important;
            border: 1px solid rgba(255,255,255,.15) !important;
            border-radius: 2px !important;
            padding: 0.1rem 0.3rem !important; /* Micro button padding */
            font-family: 'Inter', sans-serif !important;
            font-size: 0.6rem !important; /* Micro button font */
            font-weight: 600 !important;
            color: #ffffff !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
        }
        .lang-selector button:hover, .lang-selector button.active {
            border-color: var(--neon-cyan) !important;
            background: rgba(0,245,255,.1) !important;
            color: var(--neon-cyan) !important;
            box-shadow: 0 0 5px rgba(0,245,255,.2) !important;
        }
`;

['docs/service_water_heater.html', 'docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Remove the previous SLIM NAV CSS
    html = html.replace(/\/\* ── CYBER NAV HEADER SLIM ── \*\/[\s\S]*?\.lang-selector button\.active \{[^}]+\}/, '');
    
    // Append the new EXTRA SLIM NAV CSS before </style>
    html = html.replace('</style>', `${extraSlimNavCSS}\n    </style>`);
    
    fs.writeFileSync(file, html);
    console.log('Applied extra slim nav to ' + file);
});
