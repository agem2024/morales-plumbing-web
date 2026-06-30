const fs = require('fs');
let html = fs.readFileSync('docs/analisis_de_precios_orion.html', 'utf8');

// Prices and Times
html = html.replace(/price: "\$8,500"/g, 'price: "$12,500"');
html = html.replace(/price: "\$12,500"/g, 'price: "$18,500"');
html = html.replace(/price: "\$16,000"/g, 'price: "$28,000"');

html = html.replace(/time: "2-3 Días"/g, 'time: "5-7 Días"');
html = html.replace(/time: "3-5 Días"/g, 'time: "7-10 Días"');
html = html.replace(/time: "5-7 Días"/g, 'time: "10-14 Días"');

// For Service 2 Breakdown Fixes
html = html.replace(/labor: "\$3,500", overhead: "\$1,500", matCost: "\$2,000", profit: "\$1,500"/g, 'labor: "$6,500", overhead: "$2,000", matCost: "$2,500", profit: "$1,500"');
html = html.replace(/labor: "\$4,500", overhead: "\$2,000", matCost: "\$3,500", profit: "\$2,500"/g, 'labor: "$8,500", overhead: "$3,000", matCost: "$4,500", profit: "$2,500"');
html = html.replace(/labor: "\$6,500", overhead: "\$2,500", matCost: "\$4,000", profit: "\$3,000"/g, 'labor: "$12,500", overhead: "$4,500", matCost: "$7,000", profit: "$4,000"');

fs.writeFileSync('docs/analisis_de_precios_orion.html', html);
console.log("Updated HTML report prices");
