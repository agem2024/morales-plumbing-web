const fs = require('fs');

const servicesData = {
    1: {
        name: "Precision Leak Detection",
        user: "Pinpoint hidden leaks without destructive tearing of walls or floors.",
        tech: "Deployment of acoustic listening devices, thermal imaging, and tracer gas to locate micro-fissures in pressurized lines. Required for non-invasive repair protocols."
    },
    2: {
        name: "Eco-Retrofitting",
        user: "Upgrade your fixtures to high-efficiency, water-saving technologies.",
        tech: "Installation of WaterSense certified fixtures, pressure compensating aerators, and dual-flush mechanisms to optimize volumetric flow rates and comply with local conservation mandates."
    },
    3: {
        name: "Hydraulic Infrastructure Design",
        user: "Custom plumbing blueprints and system sizing for your property.",
        tech: "Calculations based on fixture unit (FU) demand, static pressure analysis, and friction loss equations to engineer optimal pipe diameters and material selections."
    },
    4: {
        name: "Elite Copper Renovations",
        user: "Replace old, failing pipes with premium, long-lasting copper.",
        tech: "Extraction of galvanized or defective piping, replaced with Type L copper utilizing ProPress zero-flame mechanical joining for superior joint integrity and reduced oxidation."
    },
    5: {
        name: "Advanced Septic Systems",
        user: "Comprehensive septic tank installation, repair, and biological optimization.",
        tech: "Soil percolation analysis, leach field sizing, and installation of multi-chamber bio-reactors with effluent filters to ensure optimal anaerobic decomposition."
    },
    6: {
        name: "New Construction Plumbing",
        user: "End-to-end plumbing installation for new homes and additions.",
        tech: "Underground rough-in (DWV), water distribution top-out, and final fixture setting in strict adherence to UPC and local municipal codes. Includes hydrostatic testing."
    },
    7: {
        name: "Advanced Water Heaters",
        user: "Installation of ultra-efficient Heat Pump and Hybrid water heaters.",
        tech: "Integration of compressor-driven heat pump units requiring condensate management, 240V dedicated circuits, and adherence to BAAQMD zero-NOx mandates."
    },
    8: {
        name: "Thermal Expansion Systems",
        user: "Protect your plumbing from dangerous pressure spikes.",
        tech: "Sizing and installation of hydropneumatic expansion tanks on the cold water supply of closed-loop heating systems to absorb volumetric expansion and prevent valve failure."
    },
    9: {
        name: "Smart Diagnostics",
        user: "High-tech camera inspections of your sewer and drain lines.",
        tech: "Fiber-optic endoscopic scoping of DWV systems with integrated sonde locating to map lateral runs, identify root intrusion, and pinpoint structural collapses."
    },
    10: {
        name: "Rainwater Harvesting",
        user: "Capture, filter, and reuse rainwater for irrigation and non-potable use.",
        tech: "Design of catchment surfaces, installation of primary filtration (first flush diverters), and sizing of high-density polyethylene (HDPE) cisterns with booster pumps."
    },
    11: {
        name: "Tankless Upgrades",
        user: "Endless hot water and massive space savings with a tankless heater.",
        tech: "BTU load calculations for dynamic flow demand, upgrade of gas supply lines, and installation of concentric venting systems for modulating condensing heat exchangers."
    },
    12: {
        name: "Leak Prevention (Flo)",
        user: "Smart, automated water shut-off valves that detect leaks instantly.",
        tech: "Inline installation of ultrasonic flow meters with machine learning algorithms capable of distinguishing standard flow events from micro-leaks or catastrophic bursts."
    },
    13: {
        name: "Whole-house Repipe",
        user: "Complete replacement of all water lines in your home for optimal flow.",
        tech: "Strategic abandonment of existing lines and routing of Cross-linked Polyethylene (PEX-A) utilizing expansion fittings for minimal friction loss and freeze resistance."
    },
    14: {
        name: "Greywater Systems",
        user: "Reuse water from showers and laundry to irrigate your landscape.",
        tech: "Installation of 3-way diversion valves, surge tanks, and subsurface drip irrigation lines conforming to Chapter 15 of the CPC for safe effluent discharge."
    },
    15: {
        name: "Structural Integrity Checks",
        user: "Complete assessment of your plumbing system's safety and longevity.",
        tech: "Ultrasonic thickness gauging of metallic pipes, seismic bracing validation for equipment, and comprehensive stress testing of all primary distribution manifolds."
    }
};

const translations = {
    'en': servicesData,
    'es': {
        1: { name: "Detección de Fugas de Precisión", user: "Encuentre fugas ocultas sin romper paredes o pisos.", tech: "Despliegue de dispositivos acústicos, imágenes térmicas y gas trazador para localizar microfisuras en líneas presurizadas. Requerido para protocolos de reparación no invasivos." },
        2: { name: "Retrofit Ecológico", user: "Actualice sus accesorios a tecnologías de alta eficiencia que ahorran agua.", tech: "Instalación de accesorios certificados WaterSense, aireadores compensadores de presión y mecanismos de doble descarga para optimizar caudales volumétricos." },
        3: { name: "Diseño de Infraestructura Hidráulica", user: "Planos de plomería personalizados y dimensionamiento de sistemas.", tech: "Cálculos basados en demanda de unidades (FU), análisis de presión estática y ecuaciones de pérdida por fricción para diseñar diámetros de tubería óptimos." },
        4: { name: "Renovaciones en Cobre Elite", user: "Reemplace tuberías viejas con cobre premium de larga duración.", tech: "Extracción de tuberías galvanizadas, reemplazadas con cobre Tipo L utilizando unión mecánica ProPress cero llamas para una integridad superior." },
        5: { name: "Sistemas Sépticos Avanzados", user: "Instalación, reparación y optimización biológica de tanques sépticos.", tech: "Análisis de percolación de suelos, dimensionamiento de campo de lixiviación e instalación de biorreactores de múltiples cámaras con filtros de efluentes." },
        6: { name: "Plomería para Construcción Nueva", user: "Instalación completa de plomería para casas nuevas y adiciones.", tech: "Instalación subterránea (DWV), distribución de agua superior y colocación de accesorios en estricto cumplimiento con UPC y códigos municipales." },
        7: { name: "Calentadores de Agua Avanzados", user: "Instalación de calentadores ultra eficientes Heat Pump e Híbridos.", tech: "Integración de unidades de bomba de calor con compresor que requieren manejo de condensado, circuitos dedicados de 240V y cumplimiento BAAQMD." },
        8: { name: "Sistemas de Expansión Térmica", user: "Proteja su plomería de picos de presión peligrosos.", tech: "Dimensionamiento e instalación de tanques de expansión hidroneumáticos en el suministro de agua fría para absorber la expansión volumétrica." },
        9: { name: "Diagnósticos Inteligentes", user: "Inspecciones de alta tecnología con cámara en líneas de drenaje.", tech: "Endoscopia de fibra óptica de sistemas DWV con localización por sonda integrada para mapear tramos laterales e identificar colapsos estructurales." },
        10: { name: "Recolección de Agua de Lluvia", user: "Capture, filtre y reutilice el agua de lluvia para riego.", tech: "Diseño de superficies de captación, filtración primaria y dimensionamiento de cisternas de polietileno (HDPE) con bombas de refuerzo." },
        11: { name: "Actualizaciones a Tankless", user: "Agua caliente infinita y gran ahorro de espacio con calentadores de paso.", tech: "Cálculos de carga BTU para demanda de flujo dinámico, actualización de líneas de gas e instalación de sistemas de ventilación concéntrica." },
        12: { name: "Prevención de Fugas (Flo)", user: "Válvulas automáticas inteligentes que detectan fugas al instante.", tech: "Instalación en línea de medidores de flujo ultrasónicos con algoritmos de aprendizaje automático capaces de distinguir eventos de flujo de micro-fugas." },
        13: { name: "Repipe (Remplazo) de Toda la Casa", user: "Reemplazo completo de todas las líneas de agua de su hogar.", tech: "Abandono estratégico de líneas existentes y enrutamiento de polietileno reticulado (PEX-A) utilizando accesorios de expansión para mínima fricción." },
        14: { name: "Sistemas de Aguas Grises", user: "Reutilice el agua de duchas para regar su jardín.", tech: "Instalación de válvulas de desviación de 3 vías, tanques de compensación y líneas de riego por goteo subsuperficial conforme al Capítulo 15 del CPC." },
        15: { name: "Chequeos de Integridad Estructural", user: "Evaluación completa de la seguridad y longevidad de su sistema.", tech: "Medición ultrasónica de espesor de tuberías metálicas, validación de refuerzo sísmico y pruebas de estrés de todos los colectores primarios." }
    },
    'zh': {}, 'tl': {}, 'vi': {}
};

// Fallback logic for Asian/Tagalog languages - map back to English
['zh', 'tl', 'vi'].forEach(lang => {
    for (let i = 1; i <= 15; i++) {
        translations[lang][i] = {
            name: `[${lang.toUpperCase()}] ` + servicesData[i].name,
            user: `[${lang.toUpperCase()}] ` + servicesData[i].user,
            tech: `[${lang.toUpperCase()}] ` + servicesData[i].tech
        };
    }
});

let appjs = fs.readFileSync('app.js', 'utf8');

const langs = ['en', 'es', 'zh', 'tl', 'vi'];

for (const lang of langs) {
    const marker = '"' + lang + '": {';
    let insertion = "";
    
    for (let i = 1; i <= 15; i++) {
        insertion += `        "pb_svc_${i}_name": "${translations[lang][i].name}",\n`;
        insertion += `        "pb_svc_${i}_user": "${translations[lang][i].user}",\n`;
        insertion += `        "pb_svc_${i}_tech": "${translations[lang][i].tech}",\n`;
    }
    
    appjs = appjs.replace(marker, marker + '\n' + insertion);
}

fs.writeFileSync('app.js', appjs);
console.log("Injected service titles and descriptions into app.js");
