const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// For app.js
appJs = appJs.replace(/"pb_svc_2_good_just":\s*"([^"]*)",/g, '"pb_svc_2_good_just": "$1 EXCLUSIONES (Nivel Básico): No incluye texturizado, pintura de acabado final, reparación de baldosas/azulejos (tile), ni mitigación de asbesto/plomo.",');

appJs = appJs.replace(/"pb_svc_2_better_just":\s*"([^"]*)",/g, '"pb_svc_2_better_just": "$1 EXCLUSIONES (Nivel Premium): No incluye pintura decorativa de color final ni modificación de gabinetes de madera a la medida.",');

appJs = appJs.replace(/"pb_svc_2_best_just":\s*"([^"]*)",/g, '"pb_svc_2_best_just": "$1 EXCLUSIONES (Nivel Ultra): Incluye parcheo rústico y capa base (primer), pero la pintura de color exacto y acabados decorativos finales no están cubiertos.",');

fs.writeFileSync('app.js', appJs);

// For analisis_de_precios_orion.html
let html = fs.readFileSync('docs/analisis_de_precios_orion.html', 'utf8');

html = html.replace(/tramites y permisos\./g, 'trámites y permisos. <strong>EXCLUSIONES:</strong> No incluye texturizado, pintura final, reparación de baldosas (tiles), ni mitigación de asbesto.');
html = html.replace(/parcheo de yeso\./g, 'parcheo de yeso. <strong>EXCLUSIONES:</strong> No incluye pintura de color final ni modificación de gabinetes.');
html = html.replace(/parcheo total\./g, 'parcheo total. <strong>EXCLUSIONES:</strong> Incluye textura base, pero excluye pintura decorativa final de igualación exacta.');

fs.writeFileSync('docs/analisis_de_precios_orion.html', html);
console.log("Updated SOW with specific exclusions");
