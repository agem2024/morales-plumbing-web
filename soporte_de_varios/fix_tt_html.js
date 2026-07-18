const fs = require('fs');
let html = fs.readFileSync('docs/promo_tank_to_tankless.html', 'utf8');

// Replace standard texts in HTML to match the new Tankless breakdown
// Replace Good Prices
html = html.replace('>$4,200<', '>$5,200<');
html = html.replace('>$2,100.00<', '>$2,800.00<'); // Good Materials
html = html.replace('>$1,400.00<', '>$1,800.00<'); // Good Labor
html = html.replace('>$450.00<', '>$400.00<');     // Good Permits
html = html.replace('>$250.00<', '>$200.00<');     // Good Disposal
html = html.replace('>$4,200.00', '>$5,200.00');

// Replace Better Prices
html = html.replace('>$5,500<', '>$6,800<');
html = html.replace('>$2,650.00<', '>$3,500.00<'); // Better Materials
html = html.replace('>$2,050.00<', '>$2,500.00<'); // Better Labor
html = html.replace('>$500.00<', '>$500.00<');     // Better Permits (unchanged value but good to ensure)
html = html.replace('>$300.00<', '>$300.00<');     // Better Disposal (unchanged value)
html = html.replace('>$5,500.00', '>$6,800.00');

// Replace Best Prices
html = html.replace('>$7,800<', '>$8,500<');
html = html.replace('>$3,600.00<', '>$4,500.00<'); // Best Materials
html = html.replace('>$3,300.00<', '>$3,000.00<'); // Best Labor
html = html.replace('>$600.00<', '>$700.00<');     // Best Permits
// Best disposal is $300 which is fine
html = html.replace('>$7,800.00', '>$8,500.00');

// Fix fallback texts to match the keys
html = html.replace(/Rheem 50-Gallon Hybrid.*?<\/p>/g, 'Navien NPE-240A2 (199K BTU). Standard tank-to-tankless retrofit.</p>');
html = html.replace(/Rheem ProTerra 50-Gallon Hybrid.*?<\/p>/, 'Navien NPE-240A2. Includes NaviCirc Recirculation and Scale Prevention Filter.</p>');
html = html.replace(/Rheem ProTerra 50-Gallon Hybrid.*?<\/p>/, 'Navien NPE-240A2. Includes Dedicated Gas Line Upgrade & NaviLink WiFi Control.</p>');

html = html.replace('2027 Zero-NOx Mandate: Heat Pump Water Heaters', 'Tank to Tankless Upgrade');
html = html.replace('Ensure compliance with BAAQMD Regulation 9, Rule 6...', 'Upgrade from your old traditional tank to an endless hot water Navien Tankless system. Save space and cut your gas bill.');

// Fix URL from ley_water_heaters.html back to index if needed or keep it. I'll keep it for now.
// I will also write it to the file.

fs.writeFileSync('docs/promo_tank_to_tankless.html', html);
console.log('Fixed prices and fallback text in promo_tank_to_tankless.html');
