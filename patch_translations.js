const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const enTranslations = {
    "qs_tab_plumbing": "General Plumbing",
    "qs_tab_bathroom": "Bath & Remodel",
    "qs_tab_heaters": "Water Heaters",
    "qs_tab_leaks": "Leak Detection",
    "qs_tab_repipe": "Re-Pipe",
    "qs_tab_ai": "AI Diagnosis",

    "qs_plumb_t1": "Pipe Repair",
    "qs_plumb_d1": "Professional diagnosis and repair of broken, clogged, or leaking pipes anywhere in your home.",
    "qs_btn_call": "View Details",
    "qs_plumb_t2": "24/7 Emergencies",
    "qs_plumb_d2": "Floods, burst pipes, or total loss of water. We respond in San Jose with no evaluation cost.",
    "qs_btn_emerg": "View Services",
    "qs_plumb_t3": "Plumbing Inspection",
    "qs_plumb_d3": "Complete evaluation for home purchase/sale. Detailed report with thermography included.",
    "qs_btn_insp": "Request Inspection",

    "qs_bath_t1": "Bathroom Remodeling",
    "qs_bath_d1": "Complete bathroom design and installation. Tub, shower, sink, toilet, and new plumbing.",
    "qs_btn_view": "View Details",
    "qs_bath_t2": "Drains and Sewage",
    "qs_bath_d2": "Cleaning and repair of bathroom, tub, and sink drains using hydrostatic pressure technology.",
    "qs_bath_t3": "Valves and Faucets",
    "qs_bath_d3": "Replacement of cartridges, shower valves, faucets, and mixers from brands like Moen, Delta, Kohler.",
    "qs_btn_schedule": "Schedule Review",

    "qs_heat_t1": "Tankless Water Heaters",
    "qs_heat_d1": "Installation and replacement of Navien, Rinnai, and Bradford White heaters. Save up to 30% on energy.",
    "qs_heat_t2": "Preventive Maintenance",
    "qs_heat_d2": "Annual flush, anode inspection, and temperature adjustment to extend equipment lifespan.",
    "qs_heat_t3": "Heat Pump Water Heaters",
    "qs_heat_d3": "Rebates available in California. We qualify under the TECH Clean CA state incentive program.",
    "qs_btn_rebates": "Check Rebates",

    "qs_leak_t1": "Thermography Detection",
    "qs_leak_d1": "High-resolution thermal cameras to detect hidden leaks without breaking walls. Non-invasive.",
    "qs_btn_ai": "View AI Tech",
    "qs_leak_t2": "Slab Leaks",
    "qs_leak_d2": "Specialists in detection and repair of leaks under concrete slabs. Insurance coverage applicable.",
    "qs_btn_urg": "View Details",
    "qs_leak_t3": "AI Leak Prediction",
    "qs_leak_d3": "Predictive system with IoT sensors that alerts leaks before they occur. Installation available.",
    "qs_btn_more": "More Information",

    "qs_rep_t1": "Complete Re-Pipe",
    "qs_rep_d1": "Total replacement of corroded galvanized or copper pipes. Guaranteed work with CSLB permit.",
    "qs_rep_t2": "PEX Piping",
    "qs_rep_d2": "Installation of latest generation PEX piping. Flexible, corrosion-resistant, and low cost.",
    "qs_btn_call_now": "View Details",
    "qs_rep_t3": "New Construction",
    "qs_rep_d3": "Comprehensive plumbing for residential and commercial projects from scratch. We coordinate permits.",
    "qs_btn_proj": "Consult Project",

    "qs_ai_t1": "Joe AI - Free Diagnosis",
    "qs_ai_d1": "Describe your problem to our assistant Joe. Get a preliminary diagnosis, materials, and estimated budget instantly.",
    "qs_btn_joe": "Start with Joe AI",
    "qs_ai_t2": "EP Estimator Pro",
    "qs_ai_d2": "Smart budget in seconds with materials, labor, and margins optimized by AI.",
    "qs_btn_est": "Open Estimator",
    "qs_ai_t3": "AI Thermography",
    "qs_ai_d3": "Thermal image analysis assisted by artificial intelligence to detect problems invisible to the human eye.",
    "qs_btn_tech": "View Tech"
};

const esTranslations = {
    "qs_tab_plumbing": "Plomer\u00eda General",
    "qs_tab_bathroom": "Ba\u00f1os y Remodelaci\u00f3n",
    "qs_tab_heaters": "Water Heaters",
    "qs_tab_leaks": "Detecci\u00f3n de Fugas",
    "qs_tab_repipe": "Re-Pipe",
    "qs_tab_ai": "AI Diagnosis",

    "qs_plumb_t1": "Reparaci\u00f3n de Tuber\u00edas",
    "qs_plumb_d1": "Diagn\u00f3stico y reparaci\u00f3n profesional de tuber\u00edas rotas, obstruidas o filtradas en cualquier parte del hogar.",
    "qs_btn_call": "Ver Detalles",
    "qs_plumb_t2": "Emergencias 24/7",
    "qs_plumb_d2": "Inundaciones, tuber\u00edas reventadas o p\u00e9rdida total de agua. Respondemos en San Jose sin costo de evaluaci\u00f3n.",
    "qs_btn_emerg": "Ver Servicios",
    "qs_plumb_t3": "Inspecci\u00f3n de Plomer\u00eda",
    "qs_plumb_d3": "Evaluaci\u00f3n completa para compra/venta de vivienda. Reporte detallado con termograf\u00eda incluida.",
    "qs_btn_insp": "Solicitar Inspecci\u00f3n",

    "qs_bath_t1": "Remodelaci\u00f3n de Ba\u00f1os",
    "qs_bath_d1": "Dise\u00f1o e instalaci\u00f3n completa de ba\u00f1os. Tina, ducha, lavabo, inodoro y plomer\u00eda nueva.",
    "qs_btn_view": "Ver Detalles",
    "qs_bath_t2": "Drenajes y Desag\u00fce",
    "qs_bath_d2": "Limpieza y reparaci\u00f3n de drenajes de ba\u00f1o, tina y lavabo con tecnolog\u00eda de presi\u00f3n hidrost\u00e1tica.",
    "qs_bath_t3": "V\u00e1lvulas y Grifer\u00eda",
    "qs_bath_d3": "Cambio de cartuchos, v\u00e1lvulas de ducha, llaves y mezcladores de marcas Moen, Delta, Kohler.",
    "qs_btn_schedule": "Agendar Revisi\u00f3n",

    "qs_heat_t1": "Tankless Water Heaters",
    "qs_heat_d1": "Instalaci\u00f3n y reemplazo de calentadores Navien, Rinnai y Bradford White. Ahorro de hasta 30% en energ\u00eda.",
    "qs_heat_t2": "Mantenimiento Preventivo",
    "qs_heat_d2": "Flush anual, revisi\u00f3n de \u00e1nodo y ajuste de temperatura para alargar la vida \u00fatil del equipo.",
    "qs_heat_t3": "Heat Pump Water Heaters",
    "qs_heat_d3": "Rebates disponibles en California. Calificamos bajo el programa de incentivos estatales TECH Clean CA.",
    "qs_btn_rebates": "Consultar Rebates",

    "qs_leak_t1": "Detecci\u00f3n por Termograf\u00eda",
    "qs_leak_d1": "C\u00e1maras t\u00e9rmicas de alta resoluci\u00f3n para detectar fugas ocultas sin romper paredes. No invasivo.",
    "qs_btn_ai": "Ver Tecnolog\u00eda AI",
    "qs_leak_t2": "Fugas en Slab",
    "qs_leak_d2": "Especialistas en detecci\u00f3n y reparaci\u00f3n de fugas bajo la losa de concreto. Cobertura de seguro aplicable.",
    "qs_btn_urg": "Ver Detalles",
    "qs_leak_t3": "AI Leak Prediction",
    "qs_leak_d3": "Sistema predictivo con sensores IoT que alerta fugas antes de que ocurran. Instalaci\u00f3n disponible.",
    "qs_btn_more": "M\u00e1s Informaci\u00f3n",

    "qs_rep_t1": "Re-Pipe Completo",
    "qs_rep_d1": "Reemplazo total de tuber\u00edas galvanizadas o de cobre corro\u00eddas. Trabajo garantizado con permiso CSLB.",
    "qs_rep_t2": "PEX Piping",
    "qs_rep_d2": "Instalaci\u00f3n de tuber\u00edas PEX de \u00faltima generaci\u00f3n. Flexible, resistente a la corrosi\u00f3n y de bajo costo.",
    "qs_btn_call_now": "Ver Detalles",
    "qs_rep_t3": "Nueva Construcci\u00f3n",
    "qs_rep_d3": "Plomer\u00eda integral para proyectos residenciales y comerciales desde cero. Coordinamos permisos.",
    "qs_btn_proj": "Consultar Proyecto",

    "qs_ai_t1": "Joe AI - Diagn\u00f3stico Gratis",
    "qs_ai_d1": "Describe tu problema a nuestro asistente Joe. Obt\u00e9n diagn\u00f3stico preliminar, materiales y presupuesto estimado al instante.",
    "qs_btn_joe": "Iniciar con Joe AI",
    "qs_ai_t2": "EP Estimator Pro",
    "qs_ai_d2": "Presupuesto inteligente en segundos con materiales, mano de obra y m\u00e1rgenes optimizados por IA.",
    "qs_btn_est": "Abrir Estimator",
    "qs_ai_t3": "Termograf\u00eda con IA",
    "qs_ai_d3": "An\u00e1lisis de im\u00e1genes t\u00e9rmicas asistido por inteligencia artificial para detectar problemas invisibles al ojo humano.",
    "qs_btn_tech": "Ver Tecnolog\u00eda"
};

function injectTranslations(html, objName, translationsObj) {
    const searchString = "if(" + objName + ") Object.assign(" + objName + ", {";
    const idx = html.indexOf(searchString);
    if (idx === -1) {
        console.error("Could not find", searchString);
        return html;
    }
    
    // Format the translations to inject
    let injectStr = "";
    for (const [k, v] of Object.entries(translationsObj)) {
        // Only inject if not already present to avoid duplicates
        if (!html.includes('"' + k + '":')) {
            injectStr += "\n                \"" + k + "\": \"" + v + "\",";
        }
    }
    
    if (injectStr === "") return html; // Nothing to inject
    
    const insertIdx = idx + searchString.length;
    return html.substring(0, insertIdx) + injectStr + html.substring(insertIdx);
}

html = injectTranslations(html, "translations.en", enTranslations);
html = injectTranslations(html, "translations.es", esTranslations);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Successfully injected translations!");
