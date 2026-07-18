const fs = require('fs');
let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// We have 3 sections: Heat Pump, Tank to Tankless, Tankless to Tankless
// Each has a GOOD, BETTER, BEST tier.

// Define realistic Bay Area prices
const tiers = [
    // --- Heat Pump ---
    // GOOD
    { eq: '2,400.00', lab: '2,200.00', perm: '550.00', haul: '350.00', total: '5,500.00' },
    // BETTER
    { eq: '3,200.00', lab: '2,800.00', perm: '600.00', haul: '400.00', total: '7,000.00' },
    // BEST
    { eq: '4,500.00', lab: '4,000.00', perm: '700.00', haul: '400.00', total: '9,600.00' },
    
    // --- Tank to Tankless ---
    // GOOD
    { eq: '2,200.00', lab: '2,500.00', perm: '550.00', haul: '350.00', total: '5,600.00' },
    // BETTER
    { eq: '2,800.00', lab: '2,800.00', perm: '600.00', haul: '400.00', total: '6,600.00' },
    // BEST
    { eq: '3,800.00', lab: '3,800.00', perm: '800.00', haul: '400.00', total: '8,800.00' },
    
    // --- Tankless to Tankless ---
    // GOOD
    { eq: '2,000.00', lab: '1,500.00', perm: '450.00', haul: '250.00', total: '4,200.00' },
    // BETTER
    { eq: '2,600.00', lab: '2,000.00', perm: '500.00', haul: '300.00', total: '5,400.00' },
    // BEST
    { eq: '3,600.00', lab: '2,800.00', perm: '600.00', haul: '400.00', total: '7,400.00' }
];

let currentIndex = 0;

// We will find every invoice-breakdown table and the following invoice-total div
const regex = /<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total"[^>]*>[\s\S]*?<\/div>/g;

html = html.replace(regex, (match) => {
    if (currentIndex >= tiers.length) return match;
    const t = tiers[currentIndex++];
    
    // Keep the color of the invoice-total
    let totalColorMatch = match.match(/<div class="invoice-total"([^>]*)>/);
    let totalAttrs = totalColorMatch ? totalColorMatch[1] : '';

    return `
                <table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$${t.eq}</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$${t.lab}</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$${t.perm}</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$${t.haul}</td>
                    </tr>
                </table>
                <div class="invoice-total"${totalAttrs}>
                    <span data-i18n="lbl_total" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px;">Inversión Total Estimada:</span>
                    $${t.total}
                </div>`.trim();
});

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully updated all 9 pricing tiers to reflect Bay Area realities.');
