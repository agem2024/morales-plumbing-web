const fs = require('fs');

const ttt_en = `
        "promo_ttt_title": "Tankless to Tankless Replacement",
        "promo_ttt_desc": "Upgrade your outdated tankless unit to a high-efficiency Navien. Direct swap, massive savings.",
        "promo_ttt_why_title": "Why Upgrade Now?",
        "promo_ttt_why_desc": "Old tankless systems lose efficiency and scale up. New Navien units offer better flow, instant hot water, and WiFi control.",
        "promo_ttt_tier_title": "Professional Installation Tiers",
        "promo_ttt_good_title": "GOOD (Standard)",
        "promo_ttt_good_desc": "Navien NPE-240A2 (199K BTU). Direct swap using existing venting and gas lines.",
        "promo_ttt_good_li1": "Navien NPE-240A2 Direct Swap.",
        "promo_ttt_good_li2": "Reuse of existing venting and gas.",
        "promo_ttt_good_li3": "City permits & old unit haul-away.",
        "promo_ttt_good_li4": "1-Year Labor Warranty.",
        "promo_ttt_better_title": "BETTER (Premium)",
        "promo_ttt_better_desc": "Navien NPE-240A2. Includes NaviCirc Recirculation and Scale Prevention Filter.",
        "promo_ttt_better_li1": "Everything in GOOD, plus:",
        "promo_ttt_better_li2": "Internal Recirculation Pump activation.",
        "promo_ttt_better_li3": "Thermal Expansion Tank installation.",
        "promo_ttt_better_li4": "Navien PeakFlow Scale Prevention System.",
        "promo_ttt_better_li5": "3-Year Labor Warranty.",
        "promo_ttt_best_title": "BEST (Ultra-Premium)",
        "promo_ttt_best_desc": "Navien NPE-240A2. Includes Whole-home PRV & NaviLink WiFi Control.",
        "promo_ttt_best_li1": "Everything in BETTER, plus:",
        "promo_ttt_best_li2": "Whole-home Pressure Regulating Valve (PRV).",
        "promo_ttt_best_li3": "Halo Water Treatment System integration.",
        "promo_ttt_best_li4": "NaviLink WiFi Control Module.",
        "promo_ttt_best_li5": "Lifetime Labor Warranty.",
        "promo_ttt_comic_title": "Installation Guide (Comic Narrative)",
        "promo_ttt_legal_title": "Legal Terms, Mandates & Rebates",
        "promo_ttt_legal_mandate_title": "1. BAAQMD Mandate (Reg 9, Rule 6):",
        "promo_ttt_legal_mandate_desc": "Starting January 1, 2027, the installation of gas water heaters will be strictly prohibited in the Bay Area. This promotion prepares your home for the future.",
        "promo_ttt_legal_rebates_title": "2. Incentives and Rebates:",
        "promo_ttt_legal_rebates_desc": "Tankless systems may qualify for utility rebates. Funds are limited and depend on zip code.",
        "promo_ttt_legal_apply_title": "3. Application Requirements:",
        "promo_ttt_legal_apply_desc": "Applies to residential homeowners replacing old equipment.",
        "promo_ttt_legal_time_title": "4. Validity and Responsibility:",
        "promo_ttt_legal_time_desc": "The transition window is now. Morales Plumbing provides certified equipment and rebate paperwork, but does not guarantee State approval or payment timelines.",
`;

const ttt_es = `
        "promo_ttt_title": "Reemplazo de Sin Tanque a Sin Tanque",
        "promo_ttt_desc": "Actualice su vieja unidad sin tanque por un Navien de alta eficiencia. Cambio directo, ahorros masivos.",
        "promo_ttt_why_title": "¿Por qué actualizar ahora?",
        "promo_ttt_why_desc": "Los sistemas viejos pierden eficiencia y acumulan sarro. Las nuevas unidades Navien ofrecen mejor flujo, agua caliente instantánea y control WiFi.",
        "promo_ttt_tier_title": "Niveles de Instalación Profesional",
        "promo_ttt_good_title": "GOOD (Estándar)",
        "promo_ttt_good_desc": "Navien NPE-240A2 (199K BTU). Reemplazo directo usando ventilación y líneas de gas existentes.",
        "promo_ttt_good_li1": "Reemplazo Directo Navien NPE-240A2.",
        "promo_ttt_good_li2": "Reutilización de ventilación y gas existentes.",
        "promo_ttt_good_li3": "Permisos de ciudad y retiro de unidad vieja.",
        "promo_ttt_good_li4": "Garantía de mano de obra de 1 año.",
        "promo_ttt_better_title": "BETTER (Premium)",
        "promo_ttt_better_desc": "Navien NPE-240A2. Incluye recirculación NaviCirc y filtro antisarro.",
        "promo_ttt_better_li1": "Todo en GOOD, más:",
        "promo_ttt_better_li2": "Activación de bomba de recirculación interna.",
        "promo_ttt_better_li3": "Instalación de tanque de expansión térmica.",
        "promo_ttt_better_li4": "Sistema de prevención de sarro Navien PeakFlow.",
        "promo_ttt_better_li5": "Garantía de mano de obra de 3 años.",
        "promo_ttt_best_title": "BEST (Ultra-Premium)",
        "promo_ttt_best_desc": "Navien NPE-240A2. Incluye válvula reguladora de presión (PRV) para toda la casa y control WiFi NaviLink.",
        "promo_ttt_best_li1": "Todo en BETTER, más:",
        "promo_ttt_best_li2": "Válvula Reguladora de Presión (PRV) para toda la casa.",
        "promo_ttt_best_li3": "Integración del Sistema de Tratamiento de Agua Halo.",
        "promo_ttt_best_li4": "Módulo de Control WiFi NaviLink.",
        "promo_ttt_best_li5": "Garantía de mano de obra de por vida.",
        "promo_ttt_comic_title": "Guía de Instalación (Cómic Narrativo)",
        "promo_ttt_legal_title": "Términos Legales, Mandatos y Reembolsos",
        "promo_ttt_legal_mandate_title": "1. Mandato BAAQMD (Reg 9, Regla 6):",
        "promo_ttt_legal_mandate_desc": "A partir del 1 de enero de 2027, estará estrictamente prohibida la instalación de calentadores de gas en el Área de la Bahía. Esta promoción prepara su hogar para el futuro.",
        "promo_ttt_legal_rebates_title": "2. Incentivos y Reembolsos:",
        "promo_ttt_legal_rebates_desc": "Los sistemas sin tanque pueden calificar para reembolsos de servicios públicos. Los fondos son limitados y dependen del código postal.",
        "promo_ttt_legal_apply_title": "3. Requisitos de Aplicación:",
        "promo_ttt_legal_apply_desc": "Aplica a propietarios residenciales que reemplazan equipos viejos.",
        "promo_ttt_legal_time_title": "4. Validez y Responsabilidad:",
        "promo_ttt_legal_time_desc": "La ventana de transición es ahora. Morales Plumbing provee el equipo certificado y el papeleo de reembolso, pero no garantiza la aprobación del Estado.",
`;

const ttt_zh = ttt_en;
const ttt_tl = ttt_en;
const ttt_vi = ttt_en;

let appPath = 'app.js';
if (fs.existsSync(appPath)) {
    let appJs = fs.readFileSync(appPath, 'utf8');

    appJs = appJs.replace(/"en":\s*\{([\s\S]*?)\}(?=\s*,\s*"es":)/, (m, c) => `"en": {${ttt_en}${c}}`);
    appJs = appJs.replace(/"es":\s*\{([\s\S]*?)\}(?=\s*,\s*"zh":)/, (m, c) => `"es": {${ttt_es}${c}}`);
    appJs = appJs.replace(/"zh":\s*\{([\s\S]*?)\}(?=\s*,\s*"tl":)/, (m, c) => `"zh": {${ttt_zh}${c}}`);
    appJs = appJs.replace(/"tl":\s*\{([\s\S]*?)\}(?=\s*,\s*"vi":)/, (m, c) => `"tl": {${ttt_tl}${c}}`);
    appJs = appJs.replace(/"vi":\s*\{([\s\S]*?)\}\s*};?$/, (m, c) => `"vi": {${ttt_vi}${c}}};`);

    fs.writeFileSync(appPath, appJs);
    console.log('Injected missing TTT feature and title translations into app.js');
}
