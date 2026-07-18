const fs = require('fs');
let html = fs.readFileSync('docs/promo_tankless_to_tankless.html', 'utf8');

// Replace standard texts in HTML to match the new Tankless to Tankless breakdown

// Replace Good Prices
html = html.replace('>$5,200<', '>$3,800<');
html = html.replace('>$2,800.00<', '>$2,400.00<'); // Good Materials
html = html.replace('>$1,800.00<', '>$900.00<');   // Good Labor
html = html.replace('>$400.00<', '>$350.00<');     // Good Permits
html = html.replace('>$200.00<', '>$150.00<');     // Good Disposal
html = html.replace('>$5,200.00', '>$3,800.00');

// Replace Better Prices
html = html.replace('>$6,800<', '>$4,900<');
html = html.replace('>$3,500.00<', '>$3,000.00<'); // Better Materials
html = html.replace('>$2,500.00<', '>$1,200.00<'); // Better Labor
html = html.replace('>$500.00<', '>$450.00<');     // Better Permits 
html = html.replace('>$300.00<', '>$250.00<');     // Better Disposal 
html = html.replace('>$6,800.00', '>$4,900.00');

// Replace Best Prices
html = html.replace('>$8,500<', '>$6,500<');
html = html.replace('>$4,500.00<', '>$3,800.00<'); // Best Materials
html = html.replace('>$3,000.00<', '>$1,800.00<'); // Best Labor
html = html.replace('>$700.00<', '>$600.00<');     // Best Permits
// Best disposal is $300 which is fine
html = html.replace('>$8,500.00', '>$6,500.00');

// Fix fallback texts to match the keys
html = html.replace(/Navien NPE-240A2 \(199K BTU\). Standard tank-to-tankless retrofit.<\/p>/g, 'Navien NPE-240A2 (199K BTU). Direct swap using existing venting and gas lines.</p>');
html = html.replace(/Navien NPE-240A2. Includes NaviCirc Recirculation and Scale Prevention Filter.<\/p>/, 'Navien NPE-240A2. Includes NaviCirc Recirculation and Scale Prevention Filter.</p>'); // no change
html = html.replace(/Navien NPE-240A2. Includes Dedicated Gas Line Upgrade & NaviLink WiFi Control.<\/p>/, 'Navien NPE-240A2. Includes Whole-home PRV & NaviLink WiFi Control.</p>');

html = html.replace('Tank to Tankless Upgrade', 'Tankless to Tankless Replacement');
html = html.replace('Upgrade from your old traditional tank to an endless hot water Navien Tankless system. Save space and cut your gas bill.', 'Swap out your aging tankless unit with the latest high-efficiency Navien NPE-A2 series.');

fs.writeFileSync('docs/promo_tankless_to_tankless.html', html);
console.log('Fixed prices and fallback text in promo_tankless_to_tankless.html');
