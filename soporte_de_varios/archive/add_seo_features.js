const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('style.css', 'utf8');
let appJs = fs.readFileSync('app.js', 'utf8');

// 1. Update index.html
const emergencyBar = `
    <!-- EMERGENCY TOP BAR -->
    <div id="emergency-topbar" class="emergency-topbar">
        <div class="emergency-content">
            <span class="emergency-text" data-i18n="topbar_emergency">🚨 Servicio de Emergencia 24/7</span>
            <a href="tel:+16692342444" class="emergency-call">
                <span data-i18n="topbar_call">Llamar Ahora:</span> <span class="phone-number">(669) 234-2444</span>
            </a>
        </div>
    </div>
`;

if (!html.includes('id="emergency-topbar"')) {
    html = html.replace('<body>', '<body>\n' + emergencyBar);
}

const trustAndMap = `
                    <!-- TRUST SIGNALS -->
                    <div class="trust-signals">
                        <div class="trust-badge">
                            <span class="icon">📜</span>
                            <span data-i18n="trust_license">Licencia C-36 #1156542</span>
                        </div>
                        <div class="trust-badge">
                            <span class="icon">⭐⭐⭐⭐⭐</span>
                            <span data-i18n="trust_reviews">Excelentes Reseñas</span>
                        </div>
                        <div class="trust-badge">
                            <span class="icon">🛡️</span>
                            <span data-i18n="trust_insurance">Asegurados & Afianzados</span>
                        </div>
                    </div>
                    
                    <!-- SERVICE AREA -->
                    <div class="service-area-badge">
                        <span class="icon">📍</span>
                        <span data-i18n="area_desc">Sirviendo San Jose y toda la Bahía (Bay Area)</span>
                    </div>
`;

if (!html.includes('class="trust-signals"')) {
    html = html.replace('<div class="hero-actions">', trustAndMap + '\n                    <div class="hero-actions">');
}

// Modify Hero Actions to include Fast Booking with Joe
html = html.replace(
    '<button onclick="openClientPortal(); switchPortalTab(\'profile\'); return false;" class="btn-primary-glow portal-hero-btn" data-i18n="nav_portal_register_btn"',
    '<button onclick="toggleJoe();" class="btn-primary-glow portal-hero-btn" data-i18n="hero_fast_booking" style="background: rgba(0, 245, 255, 0.15); border: 1px solid var(--neon-cyan); color: #fff; box-shadow: 0 0 15px rgba(0, 245, 255, 0.25);">'
);

fs.writeFileSync('index.html', html);

// 2. Update style.css
const newStyles = `

/* ========================================================= */
/* SEO & TRUST ELEMENTS */
/* ========================================================= */
.emergency-topbar {
    background: linear-gradient(90deg, #b30000, #ff0000, #b30000);
    color: white;
    text-align: center;
    padding: 8px 15px;
    font-family: 'Inter', sans-serif;
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(255, 0, 0, 0.3);
    font-weight: 600;
}
.emergency-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
.emergency-call {
    color: white;
    text-decoration: none;
    background: #000;
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}
.emergency-call:hover {
    background: white;
    color: #b30000;
    transform: scale(1.05);
}
.phone-number {
    font-size: 1.1rem;
    font-weight: 800;
}

.trust-signals {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
    flex-wrap: wrap;
}
.trust-badge {
    background: rgba(0, 255, 204, 0.1);
    border: 1px solid rgba(0, 255, 204, 0.3);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #e0fbfc;
    display: flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(5px);
}

.service-area-badge {
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 0.95rem;
    color: #b0e0e6;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
`;

if (!css.includes('SEO & TRUST ELEMENTS')) {
    fs.appendFileSync('style.css', newStyles);
}

// 3. Update app.js Translations
const newTranslations = {
    en: {
        topbar_emergency: "🚨 24/7 Emergency Service",
        topbar_call: "Call Now:",
        trust_license: "C-36 License #1156542",
        trust_reviews: "5-Star Ratings",
        trust_insurance: "Licensed, Bonded & Insured",
        area_desc: "Serving San Jose and the Greater Bay Area",
        hero_fast_booking: "⚡ Book Fast with Joe"
    },
    es: {
        topbar_emergency: "🚨 Servicio de Emergencia 24/7",
        topbar_call: "Llamar Ahora:",
        trust_license: "Licencia C-36 #1156542",
        trust_reviews: "Reseñas de 5 Estrellas",
        trust_insurance: "Asegurados y Afianzados",
        area_desc: "Sirviendo a San Jose y toda el Área de la Bahía",
        hero_fast_booking: "⚡ Agenda Rápido con Joe"
    },
    zh: {
        topbar_emergency: "🚨 24/7 紧急服务",
        topbar_call: "立即致电:",
        trust_license: "C-36 许可证 #1156542",
        trust_reviews: "五星好评",
        trust_insurance: "完全保险与保函",
        area_desc: "服务圣何塞及整个湾区",
        hero_fast_booking: "⚡ 与 Joe 快速预订"
    },
    tl: {
        topbar_emergency: "🚨 24/7 Emergency Service",
        topbar_call: "Tumawag Ngayon:",
        trust_license: "C-36 Lisensya #1156542",
        trust_reviews: "5-Star na Pagsusuri",
        trust_insurance: "Licensed, Bonded at Insured",
        area_desc: "Naglilingkod sa San Jose at buong Bay Area",
        hero_fast_booking: "⚡ Mabilis na Booking kay Joe"
    },
    vi: {
        topbar_emergency: "🚨 Dịch vụ khẩn cấp 24/7",
        topbar_call: "Gọi Ngay:",
        trust_license: "Giấy phép C-36 #1156542",
        trust_reviews: "Đánh giá 5 sao",
        trust_insurance: "Được cấp phép & Bảo hiểm",
        area_desc: "Phục vụ San Jose và Vùng Vịnh",
        hero_fast_booking: "⚡ Đặt lịch nhanh với Joe"
    }
};

let appJsUpdated = appJs;

for (const lang of Object.keys(newTranslations)) {
    const keys = newTranslations[lang];
    let toInject = "";
    for (const [k, v] of Object.entries(keys)) {
        if (!appJsUpdated.includes('"' + k + '":')) {
            toInject += `        "${k}": "${v}",\n`;
        }
    }
    
    if (toInject) {
        // Find the language block
        const langRegex = new RegExp('"' + lang + '":\\s*\\{');
        appJsUpdated = appJsUpdated.replace(langRegex, '"' + lang + '": {\n' + toInject);
    }
}

if (appJs !== appJsUpdated) {
    fs.writeFileSync('app.js', appJsUpdated);
    console.log("Updated app.js with new translations.");
} else {
    console.log("Translations already present.");
}
