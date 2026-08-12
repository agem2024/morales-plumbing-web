const fs = require('fs');

// 1. Update app.js
let appJs = fs.readFileSync('app.js', 'utf8');

const goodDesc = '[Scope] Entry-level Repipe (Horizontal y Vertical): Up to 2 baths, 1 kitchen, laundry, 2 hose bibs. Reemplazo de lineas de distribucion principales (horizontal) y tuberias de subida en paredes hasta las valvulas angulares (vertical). Minimal drywall cuts. Includes standard city permits.';
appJs = appJs.replace(/"pb_svc_2_good_just":\s*"[^"]*",/g, '"pb_svc_2_good_just": "' + goodDesc + '",');

const betterDesc = '[Scope] Premium Repipe (Horizontal y Vertical): Up to 3 baths, 1 kitchen (ice maker, dishwasher), laundry, 3 hose bibs. Reemplazo total de la casa (lineas de rastreo y montantes de pared). Full home Uponor expansion system. Includes firestop and drywall rough-patch.';
appJs = appJs.replace(/"pb_svc_2_better_just":\s*"[^"]*",/g, '"pb_svc_2_better_just": "' + betterDesc + '",');

const bestDesc = '[Scope] Ultra-Premium Commercial Grade (Horizontal y Vertical): Up to 4 baths, fully sized for high flow rates (1 inch mains). Reemplazo de 100% de la infraestructura desde el medidor hasta cada accesorio en la casa. Complete Type L Copper installation with ProPress. Includes permit expediting.';
appJs = appJs.replace(/"pb_svc_2_best_just":\s*"[^"]*",/g, '"pb_svc_2_best_just": "' + bestDesc + '",');

fs.writeFileSync('app.js', appJs);

// 2. Update analisis_de_precios_orion.html
let html = fs.readFileSync('docs/analisis_de_precios_orion.html', 'utf8');

const htmlGood = 'Repipe Basico (Horizontal y Vertical): Hasta 2 banos, 1 cocina, lavanderia. Reemplazo completo de lineas de distribucion (atico/crawlspace) y los montantes verticales (risers) en las paredes hasta las valvulas angulares. Cortes minimos en yeso. Incluye tramites y permisos.';
html = html.replace(/Repipe Básico:[^"]+/, htmlGood);

const htmlBetter = 'Repipe Premium (Horizontal y Vertical): Hasta 3 banos, 1 cocina, lavanderia. Cobertura 100% de la casa (desde las lineas horizontales principales hasta las caidas verticales en cada pared). Sistema PEX-A. Incluye masilla cortafuego (firestop) y parcheo de yeso.';
html = html.replace(/Repipe Premium:[^"]+/, htmlBetter);

const htmlBest = 'Grado Comercial Ultra-Premium (Horizontal y Vertical): Hasta 4 banos. Reemplazo del 100% de la infraestructura de la propiedad desde el medidor hasta cada fixture de la casa, utilizando Cobre Tipo L sin soldadura (ProPress). Incluye gestion rapida de permisos y parcheo total.';
html = html.replace(/Grado Comercial Ultra-Premium:[^"]+/, htmlBest);

fs.writeFileSync('docs/analisis_de_precios_orion.html', html);

console.log("Updated SOW to explicitly include Horizontal and Vertical repiping.");
