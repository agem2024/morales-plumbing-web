const fs = require('fs');

// 1. Fix docs/service_water_heater.html
let swh = fs.readFileSync('docs/service_water_heater.html', 'utf8');

// Update CSS for cyber-nav to be sticky and less invasive
swh = swh.replace(/position: fixed;/g, 'position: sticky;');
swh = swh.replace(/background: rgba\(3, 7, 18, 0\.95\);/, 'background: rgba(3, 7, 18, 0.85); backdrop-filter: blur(10px);');

// Add mobile responsiveness to the nav
if (!swh.includes('@media (max-width: 768px) { .cyber-nav')) {
    const mobileNavCSS = `
        @media (max-width: 768px) {
            .cyber-nav {
                flex-direction: column;
                padding: 0.5rem 1rem;
                gap: 0.5rem;
            }
            .cyber-nav .nav-links {
                gap: 1rem;
                font-size: 0.85rem;
            }
            .lang-selector button {
                padding: 0.2rem 0.4rem;
                font-size: 0.75rem;
            }
        }
    `;
    swh = swh.replace('</style>', `${mobileNavCSS}\n    </style>`);
}

// Remove the hardcoded padding-top: 100px from the header
swh = swh.replace(/style="padding-top: 100px;"/g, 'style="padding-top: 2rem;"');

fs.writeFileSync('docs/service_water_heater.html', swh);

// 2. Fix the 3 requirement pages (req_hp.html, req_tt.html, req_ttt.html)
['docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // The nav in these pages is styled inline: 
    // <nav class="cyber-nav" style="position:fixed; top:0; width:100%; z-index:999; display:flex; justify-content:space-between; padding:1rem 2rem; background:rgba(3,7,18,0.95); border-bottom:2px solid var(--neon-cyan);">
    html = html.replace(/position:fixed;/g, 'position:sticky;');
    html = html.replace(/background:rgba\(3,7,18,0\.95\);/g, 'background:rgba(3,7,18,0.85); backdrop-filter:blur(10px);');
    
    // Also remove the padding-top: 100px from the body
    html = html.replace(/padding-top: 100px;/g, 'padding-top: 0;');
    
    // Add mobile query
    if (!html.includes('@media (max-width: 768px) { .cyber-nav')) {
        const mobileNavCSSInline = `
        @media (max-width: 768px) {
            .cyber-nav {
                flex-direction: column !important;
                padding: 0.5rem 1rem !important;
                gap: 0.5rem;
            }
            .cyber-nav .nav-links {
                font-size: 0.85rem;
            }
            .lang-selector button {
                padding: 0.2rem 0.4rem !important;
                font-size: 0.75rem !important;
            }
        }
        `;
        html = html.replace('</style>', `${mobileNavCSSInline}\n    </style>`);
    }
    
    fs.writeFileSync(file, html);
});

console.log('Fixed sticky navigation bar on all pages to be less invasive and mobile-friendly.');
