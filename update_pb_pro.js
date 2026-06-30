const fs = require('fs');

const data = {
  1: [
    ["[Scope] Standard leak detection for up to 1 location (under 2,000 sq ft). Includes basic acoustic scanning and visible plumbing inspection. Excludes slab penetrations.", 
     "Non-toxic tracer dye, basic acoustic mapping chalk, temporary patch materials.", 
     "Standard acoustic listening discs, moisture meters, manifold gauge set.", "2-3 hrs",
     "[Alcance] Detección estándar para 1 ubicación (menos de 2,000 pies cuadrados). Incluye escaneo acústico básico e inspección de plomería visible. Excluye penetraciones de losa.", 
     "Tinte trazador no tóxico, tiza de mapeo, materiales de parche temporal.", 
     "Discos acústicos estándar, medidores de humedad, manómetros.", "2-3 hrs"],
    
    ["[Scope] Premium detection for multi-zone pressure drops. Includes isolating hot/cold manifolds, introducing inert tracer gas, and precise pinpointing under hardscapes.", 
     "Nitrogen/Hydrogen tracer gas mix (95/5), isolation caps, high-pressure test plugs.", 
     "Electronic gas sniffer (Sensit), high-gain acoustic ground microphone, pressure rig.", "3-5 hrs",
     "[Alcance] Detección premium para caídas de presión en múltiples zonas. Incluye aislamiento de colectores, inyección de gas trazador y localización precisa bajo concreto.", 
     "Mezcla de gas trazador (95% Nitrógeno / 5% Hidrógeno), tapones de prueba de alta presión.", 
     "Detector de gas electrónico, micrófono acústico de suelo de alta ganancia, equipo de presión.", "3-5 hrs"],
    
    ["[Scope] Ultra-premium structural mapping. Includes 3D thermal imaging of entire system, electronic tracing of underground utilities, and non-destructive sector isolation.", 
     "Marking flags, temporary isolation valves, epoxy spot-repair materials (if applicable).", 
     "FLIR E-Series Thermal Camera, digital utility locator (NaviTrack), acoustic correlator.", "4-6 hrs",
     "[Alcance] Mapeo estructural ultra-premium. Incluye termografía 3D, rastreo electrónico de servicios subterráneos y aislamiento de sectores sin destrucción.", 
     "Banderas de marcado, válvulas de aislamiento temporales, materiales de reparación epóxica.", 
     "Cámara térmica FLIR E-Series, localizador digital (NaviTrack), correlador acústico.", "4-6 hrs"]
  ],
  2: [
    ["[Scope] Entry-level Repipe: Up to 2 baths, 1 kitchen, laundry, 2 hose bibs. Exposed areas/attic/crawlspace only. Minimal drywall cuts. Includes standard city permits.", 
     "Up to 250ft PEX-B tubing (3/4\\\" & 1/2\\\"), standard brass crimp fittings, copper stub-outs.", 
     "PEX crimp ring tools, right-angle drills, reciprocating saws, standard hole saws.", "2-3 Days",
     "[Alcance] Repipe Básico: Hasta 2 baños, 1 cocina, lavandería, 2 llaves de manguera. Áreas expuestas/ático. Cortes mínimos en yeso. Incluye permisos estándar de la ciudad.", 
     "Hasta 250 pies de tubería PEX-B (3/4\\\" y 1/2\\\"), conexiones de anillo de compresión de latón.", 
     "Crimpeadora PEX, taladros de ángulo recto, sierras recíprocas.", "2-3 Días"],
    
    ["[Scope] Premium Repipe: Up to 3 baths, 1 kitchen (ice maker, dishwasher), laundry, 3 hose bibs. Full home Uponor expansion system. Includes firestop and drywall rough-patch.", 
     "Up to 350ft PEX-A (Uponor), ProPEX expansion rings, 1/2\\\" Type L copper stub-outs, drop-ear elbows, premium quarter-turn angle stops, fire-rated caulk.", 
     "Milwaukee M12/M18 ProPEX expansion tools, self-feed drill bits, HEPA vacuums, drop cloths.", "3-5 Days",
     "[Alcance] Repipe Premium: Hasta 3 baños, 1 cocina (ice maker, lavavajillas), lavandería, 3 llaves exteriores. Sistema de expansión Uponor completo. Incluye masilla cortafuego y parcheo rústico de yeso.", 
     "Hasta 350 pies PEX-A (Uponor), anillos ProPEX, stub-outs de cobre Tipo L de 1/2\\\", codos oreja de caída, válvulas angulares de cuarto de vuelta premium.", 
     "Expansora Milwaukee ProPEX, brocas autoalimentadas, aspiradoras HEPA, lonas de protección.", "3-5 Días"],
    
    ["[Scope] Ultra-Premium Commercial Grade: Up to 4 baths, fully sized for high flow rates (1\\\" mains). Complete Type L Copper installation with ProPress. Includes permit expediting.", 
     "Up to 400ft Type L hard copper pipe (1\\\", 3/4\\\", 1/2\\\"), Viega ProPress zero-lead fittings, acoustic pipe clamps, heavy-duty unistrut supports.", 
     "Ridgid RP 350 ProPress tool, heavy-duty copper cutters, deburring and reaming tools, laser level.", "5-7 Days",
     "[Alcance] Grado Comercial Ultra-Premium: Hasta 4 baños, dimensionado para alto flujo (línea principal de 1\\\"). Instalación completa en Cobre Tipo L con ProPress. Incluye gestión rápida de permisos.", 
     "Hasta 400 pies de tubo rígido de Cobre Tipo L (1\\\", 3/4\\\", 1/2\\\"), conexiones Viega ProPress sin plomo, abrazaderas acústicas, soportes unistrut.", 
     "Herramienta Ridgid RP 350 ProPress, cortadores de cobre industriales, herramientas de escariado.", "5-7 Días"]
  ],
  3: [
    ["[Scope] Standard water softening for homes up to 3 bedrooms (approx. 32,000 grain capacity). Install via existing loop. Excludes creating a new soft water loop.", 
     "Fleck 5600SXT digital metered valve, 1.0 cu ft high-capacity resin, standard brine tank, 2 bags of solar salt, corrugated stainless flex connectors.", 
     "Pipe threaders, teflon tape, basic multimeter, adjustable wrenches, bucket.", "3-5 hrs",
     "[Alcance] Ablandamiento estándar para casas de hasta 3 habitaciones (cap. 32,000 granos). Instalación en lazo existente. Excluye crear un nuevo lazo de agua suave.", 
     "Válvula digital Fleck 5600SXT, 1.0 pies cúbicos de resina, tanque de salmuera, 2 bolsas de sal, conectores flexibles de acero inoxidable.", 
     "Roscadoras, cinta de teflón, multímetro básico, llaves ajustables.", "3-5 hrs"],
    
    ["[Scope] Premium dual-stage whole house filtration (Carbon + Softener). Removes chlorine, VOCs, and hard water minerals. Includes custom bypass valve assembly.", 
     "Dual tank system (Upflow catalytic carbon + 48,000 grain 10% crosslink resin), premium brine tank, ProPress copper bypass manifold.", 
     "ProPress tool, water hardness testing kit, pressure gauge, soldering kit (if needed).", "5-7 hrs",
     "[Alcance] Filtración premium de doble etapa (Carbón + Ablandador). Remueve cloro, COV y minerales duros. Incluye ensamble de válvula bypass a la medida.", 
     "Sistema de doble tanque (Carbón catalítico + resina de 48,000 granos al 10%), múltiple bypass de cobre ProPress.", 
     "ProPress, kit de prueba de dureza, manómetro, kit de soldadura.", "5-7 hrs"],
    
    ["[Scope] Ultra-Premium Zero-Maintenance System (Halo 5 or equivalent). 5-stage filtration, zero wastewater, no salt required, inline UV sterilizer. Rated for 1,000,000 gallons.", 
     "Halo 5 multi-stage unit, commercial UV light sterilizer, 1\\\" Type L copper rigid piping, isolation ball valves, heavy-duty mounting brackets.", 
     "Advanced electrical testers (for UV integration), laser levels, industrial pipe cutters, Ridgid ProPress.", "1-1.5 Days",
     "[Alcance] Sistema Ultra-Premium Sin Mantenimiento (Halo 5 o similar). Filtración de 5 etapas, sin desperdicio de agua, sin sal, esterilizador UV. Para 1,000,000 de galones.", 
     "Unidad Halo 5, luz UV comercial, tubería rígida Cobre Tipo L 1\\\", válvulas de aislamiento, soportes de montaje pesado.", 
     "Probadores eléctricos (para UV), niveles láser, cortadores industriales, Ridgid ProPress.", "1-1.5 Días"]
  ],
  4: [
    ["[Scope] Standard Smart Shutoff Installation on 3/4\\\" or 1\\\" main water line. Connects to existing WiFi. Excludes electrical outlet installation.", 
     "Phyn Plus or Moen Flo smart valve unit, brass union fittings, dielectric nipples, silicone sealant.", 
     "Pipe cutters, smartphones for IoT configuration, digital calipers, standard wrenches.", "2-3 hrs",
     "[Alcance] Instalación de Válvula Inteligente Estándar en línea principal de 3/4\\\" o 1\\\". Conexión a WiFi existente. Excluye instalación de toma eléctrica.", 
     "Válvula inteligente Phyn Plus o Moen Flo, uniones de latón, niples dieléctricos, sellador de silicona.", 
     "Cortatubos, smartphone para configuración IoT, calibradores digitales, llaves estándar.", "2-3 hrs"],
    
    ["[Scope] Premium Smart Valve with custom bypass manifold. Allows manual override during power outages. Includes weatherproof enclosure if outdoors.", 
     "Moen Flo unit, 3x full-port brass ball valves (for bypass), Type L copper fittings, UV-resistant NEMA enclosure.", 
     "ProPress tool, masonry drill (for enclosure mounting), wire strippers, multimeter.", "3-5 hrs",
     "[Alcance] Válvula Inteligente Premium con múltiple bypass a medida. Permite control manual sin energía. Incluye caja resistente a la intemperie.", 
     "Unidad Moen Flo, 3x válvulas de bola de puerto completo (para bypass), accesorios de Cobre Tipo L, caja NEMA resistente a rayos UV.", 
     "ProPress, taladro de mampostería (para caja), pelacables, multímetro.", "3-5 hrs"],
    
    ["[Scope] Ultra-Premium System Integration: Multi-sensor network (up to 5 remote moisture sensors) synced with the main shutoff valve. Includes dedicated GFCI circuit integration.", 
     "Smart main valve, 5x wireless moisture pucks, electrical conduit, GFCI receptacle, commercial-grade dielectric unions.", 
     "Electrical conduit benders, voltage testers, advanced network configuration tools.", "5-7 hrs",
     "[Alcance] Integración Ultra-Premium: Red de múltiples sensores (hasta 5 remotos de humedad) sincronizados con la válvula principal. Incluye circuito GFCI dedicado.", 
     "Válvula principal inteligente, 5 discos de humedad inalámbricos, conducto eléctrico, receptáculo GFCI, uniones dieléctricas comerciales.", 
     "Dobladores de conducto eléctrico, probadores de voltaje, herramientas de configuración de red.", "5-7 hrs"]
  ],
  5: [
    ["[Scope] Standard 100ft mainline camera inspection from an accessible cleanout. Identifies basic blockages and root intrusions. Includes verbal summary.", 
     "USB drive (if physical copy requested), sanitizing wipes.", 
     "Standard 100ft push-rod inspection camera (e.g., Ridgid microDrain), basic PPE.", "1-2 hrs",
     "[Alcance] Inspección estándar de línea principal de 100 pies desde un registro accesible. Identifica bloqueos básicos y raíces. Incluye resumen verbal.", 
     "Memoria USB (si se solicita copia física), toallitas desinfectantes.", 
     "Cámara de empuje estándar de 100 pies, equipo de protección personal (PPE).", "1-2 hrs"],
    
    ["[Scope] Premium inspection with Sonar Utility Locating. Accurately maps the depth and surface location of the damaged pipe section. Includes marked ground and video link.", 
     "Surveyor marking paint (APWA colors), marking flags, cloud-storage video link.", 
     "Ridgid SeeSnake standard camera, NaviTrack Scout Locator (512 Hz Sonde receiver).", "2-3 hrs",
     "[Alcance] Inspección Premium con Rastreo por Sonar. Mapea exactamente la profundidad y ubicación en superficie del tubo dañado. Incluye marcado en piso y video en la nube.", 
     "Pintura de marcado de topógrafo, banderas, enlace de video en la nube.", 
     "Cámara Ridgid SeeSnake, localizador NaviTrack Scout (receptor de sonda de 512 Hz).", "2-3 hrs"],
    
    ["[Scope] Ultra-Premium HD Inspection + Full Diagnostics. Includes digital incline reporting, lateral branching survey, and a fully typed PACP-certified condition report for real estate or insurance.", 
     "Digital PACP report software license, high-capacity SD cards, dedicated server hosting for report.", 
     "Ridgid SeeSnake CSx TruSense con HD, sensores de inclinación, localizador digital.", "3-5 hrs",
     "[Alcance] Inspección HD Ultra-Premium + Diagnóstico Completo. Incluye reporte de inclinación digital, evaluación de ramales y reporte certificado tipo PACP para seguros/inmobiliarias.", 
     "Licencia de software para reporte PACP, tarjetas SD de alta capacidad, servidor dedicado para el reporte.", 
     "Ridgid SeeSnake CSx TruSense HD con sensores de inclinación, localizador digital.", "3-5 hrs"]
  ],
  6: [
    ["[Scope] Trenchless Epoxy Pipe Lining (CIPP) for up to 20 feet of 4\\\" sewer line. Fixes root penetrations and minor cracks without excavation. Includes pre-jetting.", 
     "Cured-in-place pipe (CIPP) felt liner, 2-part epoxy structural resin, calibration tube, high-temp curing tape.", 
     "Air inversion drum, 100 CFM air compressor, steam/hot water boiler unit for curing, hydro-jetter.", "1 Day",
     "[Alcance] Revestimiento Epóxico (CIPP) sin zanja para hasta 20 pies de tubería de 4\\\". Repara fisuras y raíces sin excavación. Incluye hidrolavado previo.", 
     "Fieltro de curado en sitio (CIPP), resina epóxica estructural de 2 partes, tubo de calibración, cinta de curado.", 
     "Tambor de inversión neumático, compresor de aire de 100 CFM, caldera de vapor/agua caliente, hidrolavadora.", "1 Día"],
    
    ["[Scope] Pipe Bursting Replacement for up to 50 feet of 4\\\" sewer line. Seamless HDPE pipe installation. Requires two small excavation pits (insertion and reception). Includes basic soil backfill.", 
     "50ft of SDR-17 Seamless High-Density Polyethylene (HDPE) pipe, bursting head, fusion welding rods.", 
     "Tric Tools hydraulic pipe bursting puller, butt-fusion welding machine, mini-excavator.", "2 Days",
     "[Alcance] Reemplazo por Rotura de Tubería para hasta 50 pies de línea de 4\\\". Instalación de tubería HDPE sin costuras. Requiere 2 fosos pequeños. Incluye relleno básico.", 
     "50 pies de tubería HDPE SDR-17 sin costuras, cabezal de rotura, varillas de fusión.", 
     "Tractor hidráulico Tric Tools, máquina soldadora de fusión a tope, mini-excavadora.", "2 Días"],
    
    ["[Scope] Ultra-Premium Trenchless Full System (up to 100 ft). Includes dual bidirectional property-line cleanouts, concrete coring/patching, full compaction, and city permits.", 
     "100ft SDR-17 HDPE, 2x 4\\\" ABS two-way cleanout assemblies, cast iron cleanout covers, Class II base rock, tracer wire.", 
     "High-tonnage hydraulic puller, hydro-excavation vacuum truck (for safe utility crossing), plate compactor, concrete saw.", "3-4 Days",
     "[Alcance] Sistema Completo Sin Zanja Ultra-Premium (hasta 100 pies). Incluye registros bidireccionales, parcheo de concreto, compactación total y permisos.", 
     "100 pies de HDPE SDR-17, 2 conjuntos de registros bidireccionales ABS de 4\\\", tapas de hierro fundido, roca base Clase II, cable trazador.", 
     "Tractor hidráulico de alto tonelaje, camión de hidroexcavación, compactadora de placa, cortadora de concreto.", "3-4 Días"]
  ],
  7: [
    ["[Scope] Standard Non-Condensing Tankless Swap (Exterior). Replaces existing tank with a 199,000 BTU unit. Connects to existing 3/4\\\" gas line. No electrical modifications.", 
     "Takagi or Rinnai non-condensing unit, dedicated tankless isolation valve kit, Category III stainless steel vent hood.", 
     "Gas sniffer (combustible gas detector), hammer drill, pipe threader.", "4-6 hrs",
     "[Alcance] Reemplazo a Sin Tanque No-Condensante (Exterior). Reemplaza tanque existente por unidad de 199k BTU. Conecta a línea de gas 3/4\\\" existente. Sin modificaciones eléctricas.", 
     "Unidad Takagi o Rinnai, kit de válvulas de aislamiento, campana de ventilación Cat III de acero inoxidable.", 
     "Detector de gas, taladro percutor, roscadora.", "4-6 hrs"],
    
    ["[Scope] Premium High-Efficiency Condensing Installation. Replaces standard tank. Includes retrofitting Schedule 40 PVC venting, acid neutralizer kit, and upgrading gas line from 1/2\\\" to 3/4\\\" (up to 10ft).", 
     "Navien NPE-A2 Condensing Unit, 2\\\" or 3\\\" Solid Core Schedule 40 PVC pipe, condensate neutralizer cartridge, Webstone isolation valves.", 
     "Testo Combustion Analyzer, ProPress, PVC cutting tools, digital manometer (for gas pressure check).", "6-8 hrs",
     "[Alcance] Instalación de Condensación de Alta Eficiencia Premium. Reemplaza tanque estándar. Incluye ventilación de PVC Cédula 40, neutralizador de ácido y actualización de línea de gas de 1/2\\\" a 3/4\\\".", 
     "Unidad Navien NPE-A2, tubería PVC sólido Cédula 40, cartucho neutralizador, válvulas Webstone.", 
     "Analizador de combustión Testo, ProPress, herramientas para PVC, manómetro digital.", "6-8 hrs"],
    
    ["[Scope] Ultra-Premium Dual-Unit Cascaded System with built-in recirculation. Endless hot water for luxury homes (4+ baths). Includes custom unistrut rack mounting and smart WiFi integration.", 
     "2x Navien NPE-240A2 units, Ready-Link cascade cable manifold kit, smart controller, heavy-gauge Unistrut, vibration isolators.", 
     "Advanced diagnostic manifold gauges, thermal imaging (for recirculation tuning), heavy-duty anchoring tools.", "2 Days",
     "[Alcance] Sistema Ultra-Premium Dual en Cascada con recirculación integrada. Agua caliente infinita para casas de lujo (4+ baños). Incluye rack de montaje personalizado y WiFi inteligente.", 
     "2 unidades Navien NPE-240A2, kit múltiple en cascada Ready-Link, controlador inteligente, Unistrut pesado, aisladores de vibración.", 
     "Manómetros de diagnóstico, termografía (para ajuste de recirculación), herramientas de anclaje pesado.", "2 Días"]
  ],
  8: [
    ["[Scope] Standard Gas Line Extension (up to 20 feet) for a new appliance (e.g., stove or dryer). Exposed indoor run. Includes pressure test.", 
     "Up to 20ft of 1/2\\\" or 3/4\\\" Black Iron Pipe, malleable iron fittings (elbows, tees), gas-rated teflon tape, pipe joint compound.", 
     "Ridgid Pipe Threader (300 Compact), large pipe wrenches, gas pressure test gauge (15 PSI).", "3-5 hrs",
     "[Alcance] Extensión Estándar de Línea de Gas (hasta 20 pies) para un aparato nuevo. Recorrido interior expuesto. Incluye prueba de presión.", 
     "Hasta 20 pies de Tubería de Hierro Negro de 1/2\\\" o 3/4\\\", conexiones de hierro maleable, teflón para gas, compuesto para juntas.", 
     "Roscadora de tubos Ridgid, llaves para tubos grandes, manómetro de prueba de presión (15 PSI).", "3-5 hrs"],
    
    ["[Scope] Premium CSST (Corrugated Stainless Steel Tubing) Installation for complex attic/crawlspace routing (up to 50 feet). Includes electrical bonding to ground system per code.", 
     "50ft Gastite/TracPipe CSST tubing, AutoFlare fittings, striker plates (nail guards), #6 AWG copper bonding wire, grounding clamps.", 
     "CSST specific tube cutters, wire strippers, multimeter (for bonding verification).", "4-6 hrs",
     "[Alcance] Instalación Premium CSST (Acero Inoxidable Corrugado) para rutas complejas en ático/espacio de rastreo (hasta 50 pies). Incluye conexión a tierra según el código.", 
     "50 pies de CSST Gastite/TracPipe, conexiones AutoFlare, placas de protección, cable de cobre #6 AWG, abrazaderas de conexión a tierra.", 
     "Cortadores específicos para CSST, pelacables, multímetro (para verificación de tierra).", "4-6 hrs"],
    
    ["[Scope] Ultra-Premium High-Capacity Underground PE Gas Line (up to 100 feet). For pool heaters or ADUs. Includes trenching (up to 24\\\" depth), anodeless risers, tracer wire, and backfill.", 
     "100ft High-Density Polyethylene (PE) Yellow Gas Pipe, anodeless risers with meter valves, tracer wire, underground warning tape.", 
     "McElroy Butt Fusion machine, trenching equipment (Ditch Witch), plate compactor.", "2 Days",
     "[Alcance] Línea de Gas Subterránea PE de Alta Capacidad (hasta 100 pies). Para calentadores de piscina o ADUs. Incluye zanjeo (24\\\" de profundidad), elevadores, cable trazador y relleno.", 
     "100 pies de Tubería PE amarilla de alta densidad, elevadores con válvulas, cable trazador, cinta de advertencia subterránea.", 
     "Máquina de fusión a tope McElroy, equipo de zanjeo (Ditch Witch), compactadora de placa.", "2 Días"]
  ],
  9: [
    ["[Scope] Standard Residential Hydro-Jetting for a secondary line (kitchen/laundry). Removes grease and sludge buildup (up to 50 feet). Up to 2,000 PSI.", 
     "Bio-enzymatic drain treatment (preventative), heavy-duty drop cloths.", 
     "Electric cart-mounted hydro-jetter (2,000 PSI / 2 GPM), standard penetrator nozzle.", "2 hrs",
     "[Alcance] Hydro-Jetting Residencial Estándar para línea secundaria (cocina/lavandería). Elimina acumulación de grasa (hasta 50 pies). Hasta 2,000 PSI.", 
     "Tratamiento enzimático (preventivo), lonas de protección.", 
     "Hidrolavadora eléctrica de carrito (2,000 PSI / 2 GPM), boquilla estándar de penetración.", "2 hrs"],
    
    ["[Scope] Premium Mainline Jetting for severe root intrusions or commercial grease lines. Up to 100 feet. 4,000 PSI high-flow clearing. Includes visual camera verification.", 
     "Root-destroying foaming chemical (RootX), degreaser agents.", 
     "Gas-powered skid-mounted jetter (4,000 PSI / 4+ GPM), Warthog rotating nozzle, inspection camera.", "3-5 hrs",
     "[Alcance] Lavado Premium de Línea Principal para intrusiones severas de raíces o grasa. Hasta 100 pies. 4,000 PSI de alto flujo. Incluye verificación con cámara.", 
     "Químico espumante destructor de raíces (RootX), agentes desengrasantes.", 
     "Jetter a gasolina (4,000 PSI / 4+ GPM), boquilla rotatoria Warthog, cámara de inspección.", "3-5 hrs"],
    
    ["[Scope] Ultra-Premium Storm Drain / Heavy Commercial Jetting (up to 300 feet). Descales cast iron pipes and removes heavy debris/rocks. High-frequency pulsation.", 
     "Industrial grade descaling agents, containment booms/mats for waste capture.", 
     "Trailer-mounted Vactor/Jetter unit (up to 4,000 PSI / 18 GPM), chain flail nozzles, heavy-duty safety gear.", "1 Day",
     "[Alcance] Lavado Ultra-Premium de Drenaje Pluvial / Comercial Pesado (hasta 300 pies). Descalcifica tubos de hierro fundido y elimina rocas. Pulsación de alta frecuencia.", 
     "Agentes descalcificadores de grado industrial, barreras de contención para desechos.", 
     "Unidad Jetter montada en remolque (hasta 4,000 PSI / 18 GPM), boquillas de cadena, equipo de seguridad pesado.", "1 Día"]
  ],
  10: [
    ["[Scope] Standard Fixture Replacement (1 Faucet or 1 Toilet). Removes existing unit, cleans surface, installs new builder-grade supplied fixture. Haul-away included.", 
     "Standard wax ring with horn, stainless steel braided supply lines, standard closet bolts, silicone caulk.", 
     "Basin wrench, adjustable wrenches, putty knife, shop vacuum.", "1-2 hrs",
     "[Alcance] Reemplazo Estándar de Accesorio (1 Grifo o 1 Inodoro). Remueve la unidad existente, limpia superficie, instala nueva. Incluye retiro del equipo viejo.", 
     "Anillo de cera estándar, líneas de suministro trenzadas, pernos estándar, masilla de silicona.", 
     "Llave de lavabo, llaves ajustables, espátula, aspiradora.", "1-2 hrs"],
    
    ["[Scope] Premium Fixture Upgrade. Installation of a high-end Touchless Faucet or Toto Drake two-piece toilet. Includes updating the shut-off valve to quarter-turn.", 
     "Premium extra-thick wax ring (Sani Seal), quarter-turn angle stops, custom escutcheons, touchless sensor battery packs.", 
     "ProPress (for new angle stops), multimeter (for touchless testing), precision level.", "2-4 hrs",
     "[Alcance] Actualización Premium. Instalación de un Grifo Sin Contacto de alta gama o inodoro Toto Drake. Incluye actualización de válvula de cierre a un cuarto de vuelta.", 
     "Anillo de cera extra grueso premium (Sani Seal), válvulas angulares de 1/4 de vuelta, escudos a medida, baterías de sensores.", 
     "ProPress (para nuevas válvulas), multímetro, nivel de precisión.", "2-4 hrs"],
    
    ["[Scope] Ultra-Premium Smart Toilet / Bidet Washlet Integration (e.g., Toto Neorest). Includes running a new dedicated 120V GFCI electrical receptacle adjacent to the toilet.", 
     "Toto Neorest / Washlet unit, heavy-duty mounting flanges, 12-2 Romex wire, GFCI receptacle, old-work electrical box.", 
     "Electrical drywall saw, voltage testers, fish tape (for wiring), advanced plumbing array.", "5-7 hrs",
     "[Alcance] Integración Ultra-Premium de Inodoro Inteligente / Bidet (ej. Toto Neorest). Incluye la instalación de un nuevo receptáculo eléctrico GFCI de 120V dedicado.", 
     "Unidad Toto Neorest / Washlet, bridas de montaje pesado, cable Romex 12-2, receptáculo GFCI, caja eléctrica.", 
     "Sierra para yeso, probadores de voltaje, cinta guía, herramientas avanzadas.", "5-7 hrs"]
  ],
  11: [
    ["[Scope] Standard Seismic Shutoff Valve installation for residential gas meters (up to 1\\\" line). Mechanical shutoff triggered by 5.4+ magnitude. Permits included.", 
     "California-approved Mechanical Seismic Valve (e.g., Little Firefighter), gas-rated Teflon tape.", 
     "14\\\" and 18\\\" Pipe wrenches, precision level (critical for calibration), pipe dope.", "2-3 hrs",
     "[Alcance] Instalación Estándar de Válvula Sísmica para medidor residencial (línea de hasta 1\\\"). Cierre mecánico por magnitud 5.4+. Incluye permisos.", 
     "Válvula Sísmica Mecánica aprobada por California (ej. Little Firefighter), cinta de Teflón para gas.", 
     "Llaves para tubos de 14\\\" y 18\\\", nivel de precisión (crítico), pasta para roscas.", "2-3 hrs"],
    
    ["[Scope] Premium Commercial-Grade Seismic Valve installation (1-1/2\\\" to 2\\\" line). Includes fabricating rigid unistrut bracing to prevent false trips from structural vibration.", 
     "Commercial-sized Seismic Valve, heavy-gauge galvanized Unistrut, structural concrete anchors, grounding clamps.", 
     "Hammer drill, torque wrench (for anchors), portable band saw (for unistrut).", "4-6 hrs",
     "[Alcance] Instalación de Válvula Sísmica Premium (Línea de 1-1/2\\\" a 2\\\"). Incluye fabricación de soportes rígidos unistrut para evitar activaciones falsas.", 
     "Válvula sísmica de tamaño comercial, Unistrut galvanizado grueso, anclajes de concreto, abrazaderas de tierra.", 
     "Taladro percutor, llave dinamométrica, sierra de banda portátil.", "4-6 hrs"],
    
    ["[Scope] Ultra-Premium Smart Gas Shutoff Integration. Seismic detection combined with explosive gas (methane/propane) and CO sensors, triggering an electronic solenoid valve.", 
     "Smart Solenoid Gas Valve, remote explosive gas/CO detectors, low-voltage control wire, battery backup unit.", 
     "Digital multimeters, low-voltage wiring tools, IoT configuration tablets.", "1 Day",
     "[Alcance] Integración Inteligente Ultra-Premium. Detección sísmica combinada con sensores de gas explosivo y CO, que activan una electroválvula.", 
     "Válvula de solenoide inteligente, detectores remotos de gas, cable de control de bajo voltaje, unidad de batería de respaldo.", 
     "Multímetros digitales, herramientas de cableado de bajo voltaje, tabletas IoT.", "1 Día"]
  ],
  12: [
    ["[Scope] Standard Residential Reduced Pressure Zone (RPZ) backflow installation for irrigation systems (up to 1\\\"). Prevents cross-contamination. Includes initial certification.", 
     "1\\\" Watts or Wilkins RPZ backflow preventer, brass union fittings, type L copper risers.", 
     "Soldering torch setup or ProPress tool, calibrated Backflow Testing Kit (Mid-West or equivalent).", "3-4 hrs",
     "[Alcance] Instalación Estándar de Válvula RPZ Residencial (hasta 1\\\") para riego. Previene contaminación cruzada. Incluye certificación inicial.", 
     "Válvula RPZ Watts o Wilkins de 1\\\", conexiones de unión de latón, elevadores de cobre Tipo L.", 
     "Equipo de soldadura o ProPress, Kit de Prueba de Antirretorno calibrado.", "3-4 hrs"],
    
    ["[Scope] Premium Commercial Backflow Installation with ASSE 1060 insulated heated enclosure. Ideal for exposed commercial outdoor applications subject to freezing.", 
     "2\\\" Commercial RPZ Valve, ASSE 1060 heated aluminum enclosure, concrete mounting pad materials, insulation tape.", 
     "Core drill (for concrete pad), multimeter (for heater wiring), calibrated test kit.", "6-8 hrs",
     "[Alcance] Instalación Comercial Premium con recinto aislado calefaccionado ASSE 1060. Ideal para exteriores comerciales expuestos a congelamiento.", 
     "Válvula RPZ Comercial de 2\\\", recinto de aluminio calefaccionado, materiales para base de concreto, cinta aislante.", 
     "Taladro sacatestigos, multímetro (cableado del calentador), kit de prueba calibrado.", "6-8 hrs"],
    
    ["[Scope] Ultra-Premium High-Capacity Industrial Double Check Detector Assembly (DCDA) for fire sprinkler systems. Flanged installation. Includes required OSHPD/Fire Marshal coordination.", 
     "4\\\" or 6\\\" Flanged DCDA valve, heavy-duty flange gaskets, Grade 8 structural bolts/nuts, bypass meter.", 
     "Chain hoists/come-alongs (for heavy lifting), large torque wrenches, alignment pins.", "2 Days",
     "[Alcance] Ensamblaje DCDA Industrial Ultra-Premium de Alta Capacidad para sistemas contra incendios. Instalación con bridas. Incluye coordinación con Bomberos.", 
     "Válvula DCDA con bridas de 4\\\" o 6\\\", juntas de brida pesadas, pernos estructurales Grado 8, medidor de derivación.", 
     "Polipastos de cadena, llaves dinamométricas grandes, pines de alineación.", "2 Días"]
  ],
  13: [
    ["[Scope] Standard Preventative Maintenance for light commercial boilers (up to 399k BTU). Includes burner cleaning, igniter check, heat exchanger flush, and combustion analysis.", 
     "OEM replacement gaskets, igniter/flame sensor replacements, system descaling chemical (e.g., Haymaker).", 
     "Combustion gas analyzer (Testo/Bacharach), digital manometer, circulation pump for flushing.", "3-5 hrs",
     "[Alcance] Mantenimiento Preventivo Estándar para calderas (hasta 399k BTU). Incluye limpieza de quemador, verificación de ignitor, lavado de intercambiador y análisis de combustión.", 
     "Juntas de repuesto OEM, sensores de llama, químico descalcificador del sistema (ej. Haymaker).", 
     "Analizador de gases de combustión, manómetro digital, bomba de circulación para lavado.", "3-5 hrs"],
    
    ["[Scope] Premium Overhaul & Pump Rebuild. Complete teardown of primary/secondary loops. Rebuild of circulation pumps (e.g., Bell & Gossett), replacement of expansion tanks.", 
     "Commercial expansion tank, cast-iron pump volute gaskets, bearing assemblies, high-temp dielectric unions.", 
     "Bearing pullers, alignment tools, heavy pipe wrenches, thermal imaging camera.", "1 Day",
     "[Alcance] Revisión Premium y Reconstrucción de Bomba. Desarme de lazos primarios/secundarios. Reconstrucción de bombas (ej. Bell & Gossett), reemplazo de tanques de expansión.", 
     "Tanque de expansión comercial, juntas de bomba de hierro fundido, ensamblajes de rodamientos, uniones dieléctricas de alta temp.", 
     "Extractores de rodamientos, herramientas de alineación, llaves para tubos pesadas, cámara térmica.", "1 Día"],
    
    ["[Scope] Ultra-Premium Complete System Modernization. Retrofit of existing controls to a modern Building Management System (BMS) with outdoor reset and smart staging control.", 
     "Tekmar or similar smart boiler control system, outdoor temperature sensors, motorized mixing valves, low-voltage wiring.", 
     "Advanced electrical diagnostic tools, laptop for BMS programming, precision calibration equipment.", "2-3 Days",
     "[Alcance] Modernización Completa del Sistema Ultra-Premium. Actualización de controles a un Sistema de Gestión de Edificios (BMS) con control inteligente por etapas.", 
     "Sistema de control inteligente Tekmar o similar, sensores de temperatura exterior, válvulas mezcladoras motorizadas, cableado de bajo voltaje.", 
     "Herramientas eléctricas avanzadas, laptop para programación BMS, equipo de calibración de precisión.", "2-3 Días"]
  ],
  14: [
    ["[Scope] Standard Primary Sump Pump Replacement. Removes failed pump, cleans pit, installs new 1/3 HP cast-iron submersible pump with vertical float switch. Up to 10ft lift.", 
     "Zoeller M53 (1/3 HP) cast-iron pump, 1-1/2\\\" quiet check valve, Schedule 40 PVC pipe & fittings, PVC primer/cement.", 
     "Wet/dry shop vac, PVC cutters, basic hand tools.", "2-3 hrs",
     "[Alcance] Reemplazo Estándar de Bomba Principal. Remueve bomba averiada, limpia el foso, instala bomba de hierro fundido de 1/3 HP. Elevación de hasta 10 pies.", 
     "Bomba Zoeller M53 (1/3 HP), válvula de retención silenciosa de 1-1/2\\\", PVC Cédula 40, pegamento para PVC.", 
     "Aspiradora de líquidos, cortadores de PVC, herramientas manuales básicas.", "2-3 hrs"],
    
    ["[Scope] Premium Pump & Battery Backup System. Installs primary 1/2 HP pump alongside a 12V DC backup pump. Ensures protection during torrential rains with power outages.", 
     "1/2 HP Primary Pump, 12V DC Backup Pump unit, 100Ah Deep Cycle AGM Marine Battery, heavy-duty dual check valve manifold.", 
     "Multimeter, wire strippers, battery terminal crimpers.", "4-6 hrs",
     "[Alcance] Sistema Premium de Bomba y Batería de Respaldo. Bomba principal de 1/2 HP junto a bomba de respaldo 12V DC. Protege durante tormentas con cortes de energía.", 
     "Bomba Principal de 1/2 HP, unidad de respaldo 12V DC, Batería AGM de Ciclo Profundo de 100Ah, colector de doble válvula.", 
     "Multímetro, pelacables, crimpeadoras de terminales de batería.", "4-6 hrs"],
    
    ["[Scope] Ultra-Premium Dual-Redundant Smart System. Two commercial-grade pumps alternating cycles, dual AGM batteries, and cellular/WiFi controller module for instant flood alerts.", 
     "Ion Technologies Dual Pump System, smart alternating controller, cellular telemetry module, 2x 100Ah AGM batteries, high-water alarms.", 
     "Network diagnostic tools, electrical conduit tools for clean wire management.", "1 Day",
     "[Alcance] Sistema Inteligente Ultra-Premium de Doble Redundancia. Dos bombas de grado comercial alternando ciclos, baterías duales y módulo celular/WiFi para alertas de inundación.", 
     "Sistema de Bomba Dual Ion Technologies, controlador alternante inteligente, módulo de telemetría celular, 2x baterías AGM de 100Ah.", 
     "Herramientas de red, conductos eléctricos para un manejo limpio de cables.", "1 Día"]
  ],
  15: [
    ["[Scope] Elite Copper Repipe (Exposed/Access Areas). Up to 2 baths. Replacement of galvanized pipes in basement, crawlspace, or attic using Type M copper. No major drywall demolition.", 
     "Type M Copper Pipe (up to 200ft), lead-free standard silver solder, water-soluble flux, copper tube straps.", 
     "Oxy-acetylene or MAPP gas torch, heavy-duty tube cutters, wire brushes, emery cloth.", "2-4 Days",
     "[Alcance] Repipe Cobre Élite (Áreas de Acceso). Hasta 2 baños. Reemplazo de tubos galvanizados en sótano o ático usando Cobre Tipo M. Sin demolición mayor de yeso.", 
     "Tubería Cobre Tipo M (hasta 200 pies), soldadura de plata sin plomo estándar, fundente, abrazaderas de cobre.", 
     "Soplete oxiacetilénico o MAPP, cortatubos pesados, cepillos de alambre, lija.", "2-4 Días"],
    
    ["[Scope] Premium Full-House Type L Copper Repipe. Up to 3 baths. Thick-walled Type L copper throughout. Premium silver brazing/soldering. Includes drywall rough-in patches and full pressure testing.", 
     "Type L Hard Copper Pipe (up to 300ft), 15% silver brazing alloy (for underground/slab) or premium lead-free solder, brass angle stops, acoustic isolation clamps.", 
     "High-heat brazing torch setup, professional tube benders (to minimize fittings), laser levels for perfect pitching.", "4-6 Days",
     "[Alcance] Repipe Premium de Casa Completa en Cobre Tipo L. Hasta 3 baños. Cobre Tipo L de pared gruesa. Soldadura de plata premium. Incluye parches rústicos de yeso.", 
     "Tubería Cobre Tipo L Rígida (hasta 300 pies), aleación de soldadura fuerte al 15% plata, abrazaderas de aislamiento acústico.", 
     "Soplete de soldadura fuerte de alto calor, dobladores de tubo profesionales, niveles láser.", "4-6 Días"],
    
    ["[Scope] Ultra-Premium Architectural Copper System with ProPress & Full Insulation. Up to 4 baths. Lifetime warranty. Zero-fire-risk installation. Every inch wrapped in fiberglass pipe insulation.", 
     "Type L Hard Copper (up to 400ft), Viega ProPress zero-lead brass fittings, 1\\\" thick fiberglass pipe insulation with ASJ jacket, commercial strut supports.", 
     "Ridgid RP 350 ProPress, heavy-duty insulation knives, structural fastening tools.", "5-7 Days",
     "[Alcance] Sistema de Cobre Arquitectónico Ultra-Premium con ProPress y Aislamiento Total. Hasta 4 baños. Garantía de por vida. Cero riesgo de incendio (sin soldadura).", 
     "Cobre Tipo L Rígido (hasta 400 pies), conexiones Viega ProPress, aislamiento de fibra de vidrio de 1\\\" con chaqueta ASJ, soportes comerciales.", 
     "Ridgid RP 350 ProPress, cuchillos para aislamiento de servicio pesado, herramientas de fijación estructural.", "5-7 Días"]
  ]
};

let appJs = fs.readFileSync('app.js', 'utf8');
const tiers = ['good', 'better', 'best'];

function replaceField(lang, fieldName, newText) {
    const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"${fieldName}":\\s*")[^"]+(")`, 'g');
    appJs = appJs.replace(regex, `$1${newText}$2`);
}

for (let i = 1; i <= 15; i++) {
    for (let t = 0; t < 3; t++) {
        const tier = tiers[t];
        // EN
        replaceField('en', `pb_svc_${i}_${tier}_just`, data[i][t][0]);
        replaceField('en', `pb_svc_${i}_${tier}_mat`, data[i][t][1]);
        replaceField('en', `pb_svc_${i}_${tier}_tools`, data[i][t][2]);
        replaceField('en', `pb_svc_${i}_${tier}_time`, data[i][t][3]);
        
        // ES
        replaceField('es', `pb_svc_${i}_${tier}_just`, data[i][t][4]);
        replaceField('es', `pb_svc_${i}_${tier}_mat`, data[i][t][5]);
        replaceField('es', `pb_svc_${i}_${tier}_tools`, data[i][t][6]);
        replaceField('es', `pb_svc_${i}_${tier}_time`, data[i][t][7]);

        // ZH, TL, VI (fallback to English until professional translator)
        const langs = ['zh', 'tl', 'vi'];
        for (let lang of langs) {
            replaceField(lang, `pb_svc_${i}_${tier}_just`, data[i][t][0]);
            replaceField(lang, `pb_svc_${i}_${tier}_mat`, data[i][t][1]);
            replaceField(lang, `pb_svc_${i}_${tier}_tools`, data[i][t][2]);
            replaceField(lang, `pb_svc_${i}_${tier}_time`, data[i][t][3]);
        }
    }
}

fs.writeFileSync('app.js', appJs);
console.log('Pricebook data replaced successfully with ultra-detailed scopes.');
