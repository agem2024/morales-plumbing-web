const fs = require('fs');

const file = 'docs/promocion_water_heaters.html';
let html = fs.readFileSync(file, 'utf8');

// GOOD TIER
html = html.replace(
    /<div class="tier-card" style="border: 2px solid #39ff14;[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total">[\s\S]*?\$([0-9,.]+)\s*<\/div>/,
    `<div class="tier-card" style="border: 2px solid #39ff14; box-shadow: 0 0 15px rgba(57, 255, 20, 0.2);">
                <img src="../assets/plan_good.png" alt="Standard Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 2px solid #39ff14;">
                <h3 style="color: #39ff14;" data-i18n="promo_wp_good_title">GOOD (Standard)</h3>
                <p data-i18n="promo_wp_good_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Rheem 50-Gallon Hybrid. Standard installation. Essential compliance.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$2,300.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$1,400.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$550.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$250.00</td>
                    </tr>
                </table>
                <div class="invoice-total">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $4,500.00
                </div>`
);

// BETTER TIER
html = html.replace(
    /<div class="tier-card" style="border-color: #ffcc00;[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total" style="color: #ffcc00;">[\s\S]*?\$([0-9,.]+)\s*<\/div>/,
    `<div class="tier-card" style="border-color: #ffcc00; box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);">
                <img src="../assets/plan_better.png" alt="Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #ffcc00;">
                <h3 style="color: #ffcc00;" data-i18n="promo_wp_better_title">BETTER (Premium)</h3>
                <p data-i18n="promo_wp_better_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Rheem ProTerra 50-Gallon Hybrid. High efficiency, WiFi connectivity, integrated leak detection.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$3,200.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$2,000.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$650.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$350.00</td>
                    </tr>
                </table>
                <div class="invoice-total" style="color: #ffcc00;">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $6,200.00
                </div>`
);

// BEST TIER
html = html.replace(
    /<div class="tier-card" style="border-color: #00f5ff;[\s\S]*?<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total" style="color: #00f5ff;">[\s\S]*?\$([0-9,.]+)\s*<\/div>/,
    `<div class="tier-card" style="border-color: #00f5ff; box-shadow: 0 0 25px rgba(0, 245, 255, 0.25);">
                <img src="../assets/plan_best.png" alt="Ultra-Premium Installation" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #00f5ff;">
                <h3 style="color: #00f5ff;" data-i18n="promo_wp_best_title">BEST (Ultra-Premium)</h3>
                <p data-i18n="promo_wp_best_desc" style="font-size: 0.9rem; color: #fff; margin-bottom: 1rem;">Rheem ProTerra 50-Gallon Hybrid. Smart home integration, full electrical panel upgrade assessment.</p>
                
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$4,400.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$3,500.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$900.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$400.00</td>
                    </tr>
                </table>
                <div class="invoice-total" style="color: #00f5ff;">
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $9,200.00
                </div>`
);

fs.writeFileSync(file, html);
console.log('Fixed prices in Heat Pump page');
