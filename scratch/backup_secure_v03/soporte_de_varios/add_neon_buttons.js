const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// Replace Button 1 (Ley BAAQMD)
const btn1Search = /<a href="ley_water_heaters\.html"[^>]*>Ley BAAQMD 2027 y Códigos<\/a>/g;
const btn1Replace = `<a href="ley_water_heaters.html" class="btn btn-outline" style="border-color: #ffcc00; color: #ffcc00; display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px; box-shadow: 0 0 15px rgba(255, 204, 0, 0.6), inset 0 0 10px rgba(255, 204, 0, 0.3); text-shadow: 0 0 5px rgba(255, 204, 0, 0.8); background: rgba(255, 204, 0, 0.05); transition: all 0.3s ease;">Ley BAAQMD 2027 y Códigos</a>`;

// Replace Button 2 (Tipos de Calentadores)
const btn2Search = /<a href="service_water_heater\.html"[^>]*>Tipos de Calentadores e Instalaciones<\/a>/g;
const btn2Replace = `<a href="service_water_heater.html" class="cta-button" style="display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), inset 0 0 10px rgba(0, 255, 255, 0.3); text-shadow: 0 0 5px rgba(0, 255, 255, 0.8); transition: all 0.3s ease;" data-i18n="swh_link_btn">Tipos de Calentadores e Instalaciones</a>`;

html = html.replace(btn1Search, btn1Replace);
html = html.replace(btn2Search, btn2Replace);

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully added neon reflection effect to the buttons!');
