import os

app_js_path = 'app.js'
with open(app_js_path, 'r', encoding='utf-8') as f:
    app_js = f.read()

replacements = {
    '"eng_wh_p1": "Our experts ensure your water heater operates efficiently. We provide flushing, anode rod replacement, and precise installation of tankless or standard systems."': 
    '"eng_wh_p1": "Silicon Valley\'s notoriously hard water (high calcium/magnesium) destroys standard water heaters within 6-8 years. We specialize in hard-water mitigation, professional descaling, and high-tech tankless retrofits designed specifically for San Jose and Santa Clara County water profiles."',
    
    '"eng_wh_p2": "We comply with all local codes and BAAQMD standards for maximum safety and performance."': 
    '"eng_wh_p2": "All installations strictly comply with BAAQMD (Bay Area Air Quality Management District) ultra-low NOx emission mandates and California Title 24 Energy Efficiency Standards. We guarantee city permit approval on every installation."',
    
    '"eng_wh_li1": "Professional flushing and descaling."': 
    '"eng_wh_li1": "Descaling & Anode Optimization: Extending unit life despite San Jose hard water."',
    
    '"eng_wh_li2": "Tankless conversion and retrofitting."': 
    '"eng_wh_li2": "BAAQMD-Compliant Tankless Upgrades: Zero-NOx emissions and endless hot water."',
    
    '"eng_wh_li3": "Code-compliant installation and testing."': 
    '"eng_wh_li3": "Title 24 Compliance & City Permits: Full structural and seismic bracing validation."',
    
    '"eng_valves_p1": "A leaking shower or sink valve not only wastes water but can cause internal wall damage. We quickly replace worn cartridges and install new high-quality pressure-balancing valves."': 
    '"eng_valves_p1": "High municipal water pressure in Bay Area cities often leads to blown cartridges and micro-leaks behind shower walls, causing devastating mold and dry rot. We utilize FLIR thermal imaging to detect hidden leaks before tearing down your expensive tile."',
    
    '"eng_valves_p2": "Our service covers all major brands and includes calibration of water temperature to prevent scalding."': 
    '"eng_valves_p2": "We replace failing builder-grade valves with commercial-grade, pressure-balancing brass manifolds (Moen, Kohler, Delta). Every installation includes anti-scald calibration conforming to the California Plumbing Code (CPC)."',
    
    '"eng_valves_li1": "Shower and tub valve replacement."': 
    '"eng_valves_li1": "Thermal Leak Detection: Finding the exact failure point without destroying your bathroom."',
    
    '"eng_valves_li2": "Sink and lavatory cartridge repairs."': 
    '"eng_valves_li2": "Commercial-Grade Brass Retrofits: Replacing cheap plastic cartridges with solid brass."',
    
    '"eng_valves_li3": "Temperature limit stops adjustment."': 
    '"eng_valves_li3": "CPC Anti-Scald Calibration: Exact temperature limit setting for family safety."',
    
    '"eng_inspect_p1": "Before buying or remodeling a home, our comprehensive plumbing inspection reveals hidden issues in sewer lines, water pressure, and fixtures."': 
    '"eng_inspect_p1": "The Bay Area housing market moves fast. Many homes built between 1950-1970 in Santa Clara County still rely on failing cast-iron or Orangeburg sewer laterals. Our robotic fiber-optic inspections uncover root intrusions and structural collapses before you close escrow."',
    
    '"eng_inspect_p2": "We provide detailed reports and consulting for home expansions, ensuring new additions meet strict building codes."': 
    '"eng_inspect_p2": "Planning an ADU (Accessory Dwelling Unit) or a major tech-worker remodel? We provide 3D BIM consulting, sewer lateral capacity calculations, and full blueprint reviews to guarantee your project passes Santa Clara County municipal inspections on the first try."',
    
    '"eng_inspect_li1": "Real estate transaction inspections."': 
    '"eng_inspect_li1": "Pre-Purchase Fiber-Optic Sewer Audits: Protect your real estate investment."',
    
    '"eng_inspect_li2": "Consulting for home additions and ADUs."': 
    '"eng_inspect_li2": "ADU Capacity Calculations: Ensuring your main lateral can handle the extra load."',
    
    '"eng_inspect_li3": "Detailed structural and system reports."': 
    '"eng_inspect_li3": "Permit Approval Consulting: Blueprint review against current California building codes."',
    
    '"eng_training_p1": "We offer specialized training sessions for associated companies, teaching modern plumbing techniques, code compliance, and safety protocols."': 
    '"eng_training_p1": "The plumbing industry is rapidly evolving towards high-tech solutions. Morales Plumbing offers hands-on, master-level training for facility managers, property management maintenance crews, and partner HVAC technicians across Silicon Valley."',
    
    '"eng_training_p2": "Our curriculum bridges the gap between traditional plumbing and modern eco-friendly, AI-assisted installations."': 
    '"eng_training_p2": "Our curriculum covers advanced ProPress copper fusion, MegaPress gas piping, thermal diagnostics, and CalGreen compliance. We turn your basic maintenance staff into code-compliant, highly capable technical operators."',
    
    '"eng_training_li1": "Hands-on installation training."': 
    '"eng_training_li1": "Advanced Joining Tech: ProPress, MegaPress, and PEX-A expansion certification."',
    
    '"eng_training_li2": "Code compliance and safety standards."': 
    '"eng_training_li2": "CalGreen & Title 24 Mastery: Navigating complex California water conservation laws."',
    
    '"eng_training_li3": "Modern diagnostic tools usage."': 
    '"eng_training_li3": "Smart Diagnostics: Training your crew on thermal cameras and robotic sewer scopes."',
    
    '"eng_b2b_p1": "Morales Plumbing partners with HVAC, electrical, and general contractors to provide specialized plumbing support for complex, large-scale projects."': 
    '"eng_b2b_p1": "Morales Plumbing is the premier C-36 subcontracting partner for Silicon Valley General Contractors and Tech Campus developers. We handle the complex hydraulic infrastructure while you focus on the primary build."',
    
    '"eng_b2b_p2": "Our B2B services ensure seamless integration of plumbing systems within multi-trade construction environments."': 
    '"eng_b2b_p2": "From commercial manifold systems to high-volume gas lines for industrial HVAC rooftop units, we integrate seamlessly into your project timeline. Fully licensed, bonded, and insured for high-liability commercial environments."',
    
    '"eng_b2b_li1": "Subcontracting for complex installations."': 
    '"eng_b2b_li1": "C-36 Commercial Subcontracting: Elite plumbing support for General Contractors."',
    
    '"eng_b2b_li2": "Cross-trade system integration."': 
    '"eng_b2b_li2": "HVAC & Electrical Integration: Gas lines, condensate drains, and hybrid unit setups."',
    
    '"eng_b2b_li3": "Dedicated project management support."': 
    '"eng_b2b_li3": "Corporate Liability & Compliance: Fully insured, W-9 ready, and OSHA compliant."',

    '"eng_wh_title": "Water Heater Maintenance & Installation"': '"eng_wh_comic_title": "Methodology: The Smart Retrofit",\n        "eng_wh_title": "Water Heater Maintenance & Installation"',
    '"eng_valves_title": "Cartridge & Valve Replacement"': '"eng_valves_comic_title": "Methodology: Precision Leak Resolution",\n        "eng_valves_title": "Cartridge & Valve Replacement"',
    '"eng_inspect_title": "Home Inspection Consulting"': '"eng_inspect_comic_title": "Methodology: High-Tech Diagnostics",\n        "eng_inspect_title": "Home Inspection Consulting"',
    '"eng_training_title": "Corporate Staff Training"': '"eng_training_comic_title": "Methodology: Empowering the Workforce",\n        "eng_training_title": "Corporate Staff Training"',
    '"eng_b2b_title": "B2B Trade Partnerships"': '"eng_b2b_comic_title": "Methodology: Synergy in Construction",\n        "eng_b2b_title": "B2B Trade Partnerships"',


    # SPANISH EQUIVALENTS
    '"eng_wh_p1": "Nuestros expertos aseguran que su calentador funcione de manera eficiente. Realizamos purgas, reemplazo de varillas de ánodo e instalaciones precisas de sistemas sin tanque o estándar."': 
    '"eng_wh_p1": "El agua extremadamente dura de Silicon Valley destruye los calentadores estándar en 6 a 8 años. Nos especializamos en mitigación de sarro, descalcificación profesional y retrofits de sistemas sin tanque de alta tecnología, diseñados específicamente para el perfil del agua en San José y el Condado de Santa Clara."',
    
    '"eng_wh_p2": "Cumplimos con todos los códigos locales y los estándares BAAQMD para máxima seguridad y rendimiento."': 
    '"eng_wh_p2": "Todas nuestras instalaciones cumplen estrictamente con los mandatos de emisiones ultra-bajas (zero-NOx) de BAAQMD y los Estándares de Eficiencia Energética Título 24 de California. Garantizamos la aprobación de los permisos de la ciudad en cada instalación."',
    
    '"eng_wh_li1": "Purgas y descalcificación profesional."': 
    '"eng_wh_li1": "Descalcificación y Optimización: Extendiendo la vida útil a pesar del agua dura de San José."',
    
    '"eng_wh_li2": "Conversión y actualización a sistemas sin tanque."': 
    '"eng_wh_li2": "Actualizaciones Tankless BAAQMD: Cero emisiones NOx y agua caliente ilimitada."',
    
    '"eng_wh_li3": "Instalación y pruebas que cumplen con el código."': 
    '"eng_wh_li3": "Cumplimiento del Título 24: Validación de permisos y refuerzos sísmicos estructurales."',
    
    '"eng_valves_p1": "Una válvula de ducha o lavabo con fugas no solo desperdicia agua, sino que puede causar daños internos en la pared. Reemplazamos rápidamente cartuchos desgastados e instalamos nuevas válvulas de alta calidad que equilibran la presión."': 
    '"eng_valves_p1": "La alta presión del agua municipal en el Área de la Bahía suele reventar cartuchos y causar micro-fugas detrás de las paredes de la ducha, provocando moho devastador. Utilizamos tecnología térmica FLIR para detectar la fuga oculta antes de demoler su costosa cerámica."',
    
    '"eng_valves_p2": "Nuestro servicio cubre todas las marcas principales e incluye la calibración de la temperatura del agua para evitar quemaduras."': 
    '"eng_valves_p2": "Reemplazamos válvulas plásticas básicas por manifolds de bronce de grado comercial (Moen, Kohler, Delta). Cada instalación incluye calibración anti-quemaduras conforme al Código de Plomería de California (CPC)."',
    
    '"eng_valves_li1": "Reemplazo de válvulas de ducha y tina."': 
    '"eng_valves_li1": "Detección Térmica de Fugas: Encontramos el punto de falla exacto sin destruir su baño."',
    
    '"eng_valves_li2": "Reparaciones de cartuchos de lavabos."': 
    '"eng_valves_li2": "Retrofits de Bronce Comercial: Reemplazo de cartuchos plásticos económicos por bronce sólido."',
    
    '"eng_valves_li3": "Ajuste de límites de temperatura."': 
    '"eng_valves_li3": "Calibración Anti-Quemaduras CPC: Ajuste exacto del límite de temperatura para seguridad familiar."',

    '"eng_inspect_p1": "Antes de comprar o remodelar una casa, nuestra exhaustiva inspección de plomería revela problemas ocultos en líneas de alcantarillado, presión de agua y accesorios."': 
    '"eng_inspect_p1": "El mercado inmobiliario en el Área de la Bahía se mueve rápido. Muchas casas de 1950-1970 en el Condado de Santa Clara aún dependen de alcantarillados de hierro fundido a punto de fallar. Nuestras inspecciones robóticas con fibra óptica revelan intrusiones de raíces y colapsos estructurales antes del cierre del escrow."',
    
    '"eng_inspect_p2": "Proporcionamos informes detallados y consultoría para ampliaciones de viviendas, asegurando que las nuevas adiciones cumplan con los estrictos códigos de construcción."': 
    '"eng_inspect_p2": "¿Planea un ADU (Accesory Dwelling Unit) o una remodelación mayor? Proveemos consultoría BIM 3D, cálculos de capacidad del alcantarillado lateral y revisiones de planos para garantizar que su proyecto pase las inspecciones municipales a la primera."',
    
    '"eng_inspect_li1": "Inspecciones para transacciones inmobiliarias."': 
    '"eng_inspect_li1": "Auditorías de Alcantarillado con Fibra Óptica: Proteja su inversión inmobiliaria."',
    
    '"eng_inspect_li2": "Consultoría para adiciones de viviendas y ADUs."': 
    '"eng_inspect_li2": "Cálculos de Capacidad para ADUs: Asegurando que su línea principal soporte la nueva carga."',
    
    '"eng_inspect_li3": "Informes detallados estructurales y de sistemas."': 
    '"eng_inspect_li3": "Consultoría para Aprobación de Permisos: Revisión de planos contra el código de California."',

    '"eng_training_p1": "Ofrecemos sesiones de capacitación especializadas para empresas asociadas, enseñando técnicas modernas de plomería, cumplimiento de códigos y protocolos de seguridad."': 
    '"eng_training_p1": "La industria de la plomería evoluciona rápidamente hacia soluciones tecnológicas. Morales Plumbing ofrece capacitaciones prácticas de nivel maestro para administradores de edificios, equipos de mantenimiento y técnicos HVAC en todo Silicon Valley."',
    
    '"eng_training_p2": "Nuestro plan de estudios cierra la brecha entre la plomería tradicional y las instalaciones ecológicas y asistidas por IA modernas."': 
    '"eng_training_p2": "Nuestro currículo cubre fusión de cobre ProPress, tuberías de gas MegaPress, diagnósticos térmicos y cumplimiento de CalGreen. Convertimos a su personal básico de mantenimiento en operadores técnicos altamente capacitados."',
    
    '"eng_training_li1": "Capacitación práctica en instalación."': 
    '"eng_training_li1": "Tecnología Avanzada de Unión: Certificación en expansión PEX-A, ProPress y MegaPress."',
    
    '"eng_training_li2": "Cumplimiento de códigos y estándares de seguridad."': 
    '"eng_training_li2": "Dominio de CalGreen y Título 24: Navegando las complejas leyes de conservación de California."',
    
    '"eng_training_li3": "Uso de herramientas de diagnóstico modernas."': 
    '"eng_training_li3": "Diagnósticos Inteligentes: Capacitando a su equipo con cámaras térmicas y robóticas."',

    '"eng_b2b_p1": "Morales Plumbing se asocia con contratistas de HVAC, electricidad y generales para proporcionar soporte especializado en plomería para proyectos complejos a gran escala."': 
    '"eng_b2b_p1": "Morales Plumbing es el subcontratista C-36 principal para General Contractors y desarrolladores de campus tecnológicos en Silicon Valley. Manejamos la infraestructura hidráulica compleja mientras usted se enfoca en la construcción principal."',
    
    '"eng_b2b_p2": "Nuestros servicios B2B aseguran la integración perfecta de los sistemas de plomería dentro de entornos de construcción de múltiples oficios."': 
    '"eng_b2b_p2": "Desde sistemas comerciales de manifolds hasta líneas de gas de alto volumen para unidades HVAC industriales en techos, nos integramos sin problemas en el cronograma de su proyecto. Completamente licenciados, con fianzas (bonded) y asegurados."',
    
    '"eng_b2b_li1": "Subcontratación para instalaciones complejas."': 
    '"eng_b2b_li1": "Subcontratación Comercial C-36: Soporte de plomería de élite para Contratistas Generales."',
    
    '"eng_b2b_li2": "Integración de sistemas entre diferentes oficios."': 
    '"eng_b2b_li2": "Integración con HVAC y Electricidad: Líneas de gas, drenajes de condensado y sistemas híbridos."',
    
    '"eng_b2b_li3": "Soporte dedicado en la gestión de proyectos."': 
    '"eng_b2b_li3": "Responsabilidad Corporativa: Seguros completos, formularios W-9 listos y cumplimiento OSHA."',

    '"eng_wh_title": "Mantenimiento e Instalación de Water Heaters"': '"eng_wh_comic_title": "Metodología: El Retrofit Inteligente",\n        "eng_wh_title": "Mantenimiento e Instalación de Water Heaters"',
    '"eng_valves_title": "Reemplazo de Cartuchos y Válvulas"': '"eng_valves_comic_title": "Metodología: Resolución Precisa de Fugas",\n        "eng_valves_title": "Reemplazo de Cartuchos y Válvulas"',
    '"eng_inspect_title": "Consultoría e Inspección de Viviendas"': '"eng_inspect_comic_title": "Metodología: Diagnóstico de Alta Tecnología",\n        "eng_inspect_title": "Consultoría e Inspección de Viviendas"',
    '"eng_training_title": "Capacitación de Personal Corporativo"': '"eng_training_comic_title": "Metodología: Empoderando a la Fuerza Laboral",\n        "eng_training_title": "Capacitación de Personal Corporativo"',
    '"eng_b2b_title": "Alianzas Comerciales Especializadas B2B"': '"eng_b2b_comic_title": "Metodología: Sinergia en la Construcción",\n        "eng_b2b_title": "Alianzas Comerciales Especializadas B2B"'
}

for k, v in replacements.items():
    app_js = app_js.replace(k, v)

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(app_js)

print("Replaced successfully!")
