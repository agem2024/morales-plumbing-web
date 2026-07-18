const fs = require('fs');

const files = [
    'docs/promo_tank_to_tankless.html',
    'docs/promo_tankless_to_tankless.html'
];

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');

    // Regex to match the entire invoice breakdown block for each tier
    // GOOD TIER
    html = html.replace(
        /<div class="tier-card">([\s\S]*?)<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total">\s*(?:<span data-i18n="lbl_total">.*?<\/span>\s*<br>)?\s*\$([0-9,.]+)\s*<\/div>/,
        `<div class="tier-card">$1<table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$2,400.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$900.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$350.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$150.00</td>
                    </tr>
                </table>
                <div class="invoice-total">
                    <span data-i18n="lbl_total">Estimated Total Investment:</span><br>
                    $4,200.00
                </div>`
    );

    // BETTER TIER
    html = html.replace(
        /<div class="tier-card premium-tier">([\s\S]*?)<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total">\s*(?:<span data-i18n="lbl_total">.*?<\/span>\s*<br>)?\s*\$([0-9,.]+)\s*<\/div>/,
        `<div class="tier-card premium-tier">$1<table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$3,600.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$1,200.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$450.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$250.00</td>
                    </tr>
                </table>
                <div class="invoice-total">
                    <span data-i18n="lbl_total">Estimated Total Investment:</span><br>
                    $5,500.00
                </div>`
    );

    // BEST TIER
    html = html.replace(
        /<div class="tier-card">([\s\S]*?Ultra-Premium[\s\S]*?)<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total">\s*(?:<span data-i18n="lbl_total">.*?<\/span>\s*<br>)?\s*\$([0-9,.]+)\s*<\/div>/,
        `<div class="tier-card">$1<table class="invoice-breakdown">
                    <tr>
                        <td data-i18n="lbl_materials">Equipos y Materiales:</td>
                        <td>$3,900.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_labor">Mano de Obra Especializada:</td>
                        <td>$3,000.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_permits">Permisos de la Ciudad e Inspecciones:</td>
                        <td>$600.00</td>
                    </tr>
                    <tr>
                        <td data-i18n="lbl_disposal">Desecho y Retiro de Residuos:</td>
                        <td>$300.00</td>
                    </tr>
                </table>
                <div class="invoice-total">
                    <span data-i18n="lbl_total">Estimated Total Investment:</span><br>
                    $7,800.00
                </div>`
    );

    fs.writeFileSync(file, html);
    console.log('Fixed new requested prices in ' + file);
});
