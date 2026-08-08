const fs = require('fs');

const files = [
    'docs/promocion_water_heaters.html',
    'docs/promo_tank_to_tankless.html',
    'docs/promo_tankless_to_tankless.html'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');

        // Replace the itemized breakdown and the exact total with a Starting At block
        // We will look for <table class="invoice-breakdown">...</table>
        // and <div class="invoice-total"...>...$XXXX...</div>
        
        // This regex matches the table and the invoice-total div that follows it
        const regex = /<table class="invoice-breakdown">[\s\S]*?<\/table>\s*<div class="invoice-total"[^>]*>[\s\S]*?\$([0-9,.]+)\s*<\/div>/g;
        
        html = html.replace(regex, (match, price) => {
            return `
                <div class="price-range" style="margin-top: 1.5rem; text-align: center; border-top: 2px dashed rgba(255,255,255,0.2); padding-top: 1.5rem;">
                    <span data-i18n="lbl_starting_at" style="font-size: 0.9rem; color:#ccc; display:block; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Inversión Estimada Desde:</span>
                    <div class="price-amount" style="font-size: 2.5rem; font-weight: 900; font-family: 'Orbitron', sans-serif;">$${price}</div>
                    <span data-i18n="lbl_est_range" style="font-size: 0.75rem; color:#94a3b8; display:block; margin-top: 8px; font-style: italic;">*El costo final varía según la evaluación en sitio, requerimientos del código y mejoras eléctricas o de gas.</span>
                </div>
            `;
        });
        
        fs.writeFileSync(file, html);
        console.log(`Updated pricing strategy in ${file}`);
    }
});

// Add translations to app.js
let appPath = 'app.js';
if (fs.existsSync(appPath)) {
    let appJs = fs.readFileSync(appPath, 'utf8');

    const engTrans = `
        "lbl_starting_at": "Estimated Investment Starting At:",
        "lbl_est_range": "*Final cost varies based on on-site evaluation, code requirements, and electrical/gas upgrades.",`;

    const espTrans = `
        "lbl_starting_at": "Inversión Estimada Desde:",
        "lbl_est_range": "*El costo final varía según la evaluación en sitio, requerimientos del código y mejoras eléctricas o de gas.",`;

    const zhTrans = `
        "lbl_starting_at": "预计投资起价：",
        "lbl_est_range": "*最终成本因现场评估、规范要求以及电力/燃气升级而异。",`;

    const tlTrans = `
        "lbl_starting_at": "Tinantyang Pamumuhunan Nagsisimula sa:",
        "lbl_est_range": "*Ang panghuling gastos ay nag-iiba batay sa on-site evaluation, code requirements, at electrical/gas upgrades.",`;

    const viTrans = `
        "lbl_starting_at": "Khoản đầu tư ước tính bắt đầu từ:",
        "lbl_est_range": "*Chi phí cuối cùng thay đổi tùy thuộc vào đánh giá tại chỗ, yêu cầu mã và nâng cấp điện/khí đốt.",`;

    if (!appJs.includes("lbl_starting_at")) {
        appJs = appJs.replace(/"en":\s*\{/, '"en": {' + engTrans);
        appJs = appJs.replace(/"es":\s*\{/, '"es": {' + espTrans);
        appJs = appJs.replace(/"zh":\s*\{/, '"zh": {' + zhTrans);
        appJs = appJs.replace(/"tl":\s*\{/, '"tl": {' + tlTrans);
        appJs = appJs.replace(/"vi":\s*\{/, '"vi": {' + viTrans);
        fs.writeFileSync(appPath, appJs);
        console.log('Injected translations into app.js');
    } else {
        console.log('Translations already in app.js');
    }
}
