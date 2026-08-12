const fs = require('fs');
let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Heat Pump
html = html.replace('>$4,500.00<', '>$3,500 - $5,500<');
html = html.replace('>$6,200.00<', '>$6,000 - $8,500<');
html = html.replace('>$9,600.00<', '>$9,000 - $12,500<');

// Tank to Tankless
html = html.replace('>$5,600.00<', '>$5,500 - $7,500<');
html = html.replace('>$6,600.00<', '>$6,500 - $8,500<');
html = html.replace('>$8,800.00<', '>$8,500 - $12,500<');

// Tankless to Tankless
html = html.replace('>$4,200.00<', '>$4,000 - $5,500<');
html = html.replace('>$5,400.00<', '>$5,500 - $7,500<');
html = html.replace('>$7,400.00<', '>$7,500 - $10,500<');

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Prices updated to ranges.');
