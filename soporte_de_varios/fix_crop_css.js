const fs = require('fs');

['docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Remove the height 250px and overflow hidden from comic-img-wrapper
    html = html.replace(/\.comic-img-wrapper\s*\{[^}]+\}/g, '');
    
    // Also remove any remaining comic-img-wrapper img styles just to be safe
    html = html.replace(/\.comic-img-wrapper img\s*\{[^}]+\}/g, '');
    
    // Re-add the proper default style
    const defaultStyle = `.comic-img-wrapper img { width: 100%; border-radius: 8px; border: 3px solid #000; margin-bottom: 1.5rem; }`;
    html = html.replace('</style>', `    ${defaultStyle}\n    </style>`);
    
    fs.writeFileSync(file, html);
    console.log('Fixed CSS for ' + file);
});
