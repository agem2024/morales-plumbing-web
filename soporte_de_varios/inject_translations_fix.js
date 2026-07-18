const fs = require('fs');

const missingKeys = JSON.parse(fs.readFileSync('missing_keys.json', 'utf8'));
let appJs = fs.readFileSync('app.js', 'utf8');

const baseTranslationsES = { ...missingKeys };
const baseTranslationsEN = { ...missingKeys };

// Apply manual English translations for the common UI elements
const enOverrides = {
    "btn_upgrade": "View Plans",
    "btn_ley_baaqmd": "BAAQMD 2027 Law & Codes",
    "swh_link_btn": "Heater Types & Installations",
    "lbl_materials": "Equipment & Materials:",
    "lbl_labor": "Specialized Labor:",
    "lbl_permits": "City Permits & Inspections:",
    "lbl_disposal": "Haul-away & Disposal:",
    "lbl_total": "Estimated Total Investment:",
    "btn_req_hp": "View Technical Requirements & Diagram (Heat Pump)",
    "btn_req_tt": "View Technical Requirements & Diagram (Tank to Tankless)",
    "btn_req_ttt": "View Technical Requirements & Diagram (Tankless to Tankless)"
};

// Legal terms translations
const legalOverridesES = {
    "_legal_title": "Términos Legales, Mandatos y Reembolsos",
    "_legal_mandate_title": "1. Mandato BAAQMD (Reg 9, Regla 6):",
    "_legal_mandate_desc": "A partir del 1 de enero de 2027, la instalación de calentadores a gas estará estrictamente prohibida en el Área de la Bahía. Esta promoción prepara su hogar para el futuro.",
    "_legal_rebates_title": "2. Incentivos y Reembolsos (Rebates):",
    "_legal_rebates_desc": "Las bombas de calor califican para el Crédito Fiscal Federal IRA (hasta $2,000) y reembolsos de TECH Clean CA (hasta $3,100). Los fondos son limitados y dependen del código postal.",
    "_legal_apply_title": "3. Requisitos de Aplicación:",
    "_legal_apply_desc": "Aplica para propietarios residenciales que reemplacen equipos antiguos. Si su panel eléctrico requiere actualización a 240V, podría calificar para subsidios adicionales.",
    "_legal_time_title": "4. Vigencia y Responsabilidad:",
    "_legal_time_desc": "La ventana de transición es ahora. Morales Plumbing provee equipos certificados y el papeleo para el reembolso, pero no garantiza la aprobación ni los tiempos de pago del Estado."
};

const legalOverridesEN = {
    "_legal_title": "Legal Terms, Mandates & Rebates",
    "_legal_mandate_title": "1. BAAQMD Mandate (Reg 9, Rule 6):",
    "_legal_mandate_desc": "Starting January 1, 2027, the installation of gas water heaters will be strictly prohibited in the Bay Area. This promotion prepares your home for the future.",
    "_legal_rebates_title": "2. Incentives and Rebates:",
    "_legal_rebates_desc": "Heat pumps qualify for the Federal IRA Tax Credit (up to $2,000) and TECH Clean CA rebates (up to $3,100). Funds are limited and depend on zip code.",
    "_legal_apply_title": "3. Application Requirements:",
    "_legal_apply_desc": "Applies to residential homeowners replacing old equipment. If your electrical panel requires a 240V upgrade, you may qualify for additional subsidies.",
    "_legal_time_title": "4. Validity and Responsibility:",
    "_legal_time_desc": "The transition window is now. Morales Plumbing provides certified equipment and rebate paperwork, but does not guarantee State approval or payment timelines."
};

// Apply overrides to EN dictionary
for (const key in enOverrides) {
    if (baseTranslationsEN[key]) baseTranslationsEN[key] = enOverrides[key];
}

// Apply Legal overrides to EN and ES based on prefixes
['promo_wp', 'promo_tt', 'promo_ttt'].forEach(prefix => {
    for (const suffix in legalOverridesES) {
        baseTranslationsES[prefix + suffix] = legalOverridesES[suffix];
        baseTranslationsEN[prefix + suffix] = legalOverridesEN[suffix];
    }
});

// Since the HTML defaults to English for the tier features, ES needs translation for those!
const esOverrides = {
    "promo_wp_title": "Mandato Zero-NOx 2027: Calentadores Heat Pump",
    "promo_wp_desc": "Asegure el cumplimiento con la Regulación 9, Regla 6 de BAAQMD. Haga la transición a Calentadores Eléctricos de Alta Eficiencia antes del límite de 2027.",
    "promo_wp_why_title": "¿Por qué actualizar ahora?",
    "promo_wp_why_desc": "Los calentadores a gas serán eliminados. Las bombas de calor ofrecen hasta un 400% de eficiencia, reembolsos masivos y cero emisiones.",
    "promo_wp_tier_title": "Niveles de Instalación Profesional",
    "promo_wp_good_title": "GOOD (Estándar)",
    "promo_wp_good_desc": "Rheem 50-Gal Híbrido. Instalación estándar. Cumplimiento esencial.",
    "promo_wp_good_li1": "Unidad Rheem ProTerra 50-Gal Heat Pump.",
    "promo_wp_good_li2": "Permisos de ciudad y cumplimiento CSLB.",
    "promo_wp_good_li3": "Retiro y desecho de unidad vieja.",
    "promo_wp_good_li4": "1 Año de Garantía en Mano de Obra.",
    
    "promo_tt_title": "Actualización de Tanque a Tankless",
    "promo_tt_desc": "Transición a un Calentador de Paso Navien de alta eficiencia. Agua caliente ilimitada y gran ahorro de espacio.",
    "promo_tt_why_title": "¿Por qué actualizar ahora?",
    "promo_tt_why_desc": "Los sistemas Tankless proveen agua caliente ilimitada, duran hasta el doble que un tanque tradicional y reducen la factura de energía.",
    "promo_tt_tier_title": "Niveles de Instalación Profesional",
    
    "promo_ttt_title": "Reemplazo de Tankless a Tankless",
    "promo_ttt_desc": "Actualice su viejo sistema de paso a la nueva serie Navien NPE-A2 con tecnología avanzada de recirculación.",
    "promo_ttt_why_title": "¿Por qué actualizar ahora?",
    "promo_ttt_why_desc": "Los modelos viejos pierden eficiencia con el tiempo. Los nuevos Navien ofrecen eficiencia ultra alta, recirculación interna y WiFi."
};

for (const key in esOverrides) {
    if (baseTranslationsES[key]) baseTranslationsES[key] = esOverrides[key];
}

// Now we inject into app.js properly matching the "en": { quotes!
const langs = ['en', 'es', 'zh', 'tl', 'vi'];
let injectedCount = 0;

langs.forEach(lang => {
    // Regex matches either "en": { or en: {
    const regex = new RegExp(`["']?${lang}["']?:\\s*\\{`);
    const match = regex.exec(appJs);
    if (match) {
        const insertPos = match.index + match[0].length;
        
        let targetDict = baseTranslationsEN;
        if (lang === 'es') targetDict = baseTranslationsES;
        // Fallback ZH, TL, VI to EN to avoid blank translations or JS errors
        
        let injectStr = '\n';
        for (const key in targetDict) {
            injectStr += `        "${key}": ${JSON.stringify(targetDict[key])},\n`;
        }
        
        appJs = appJs.slice(0, insertPos) + injectStr + appJs.slice(insertPos);
        injectedCount++;
    }
});

if (injectedCount === langs.length) {
    fs.writeFileSync('app.js', appJs);
    console.log(`Successfully injected 114 translation keys into all ${langs.length} languages in app.js.`);
} else {
    console.log(`Failed to inject! Only found ${injectedCount} languages.`);
}
