const fs = require('fs');

const data = {
  1: [
    ["[Leak Detection] Visual & basic acoustic check.", "Basic dye, markers.", "Hand tools.", "1-2 hrs",
     "[Detección] Revisión visual y acústica básica.", "Colorante básico, marcadores.", "Herramientas manuales.", "1-2 hrs"],
    ["[Leak Detection] Acoustic sensor array & pressure drop test.", "Trace gas.", "Acoustic listening device, pressure gauge.", "2-3 hrs",
     "[Detección] Sensores acústicos y prueba de caída de presión.", "Gas trazador.", "Dispositivo de escucha, manómetro.", "2-3 hrs"],
    ["[Leak Detection] FLIR Thermal imaging + full mapping.", "Capping materials.", "FLIR Camera, Acoustic ground mic, Nitrogen tank.", "3-5 hrs",
     "[Detección] Termografía FLIR + mapeo completo.", "Materiales de sellado.", "Cámara FLIR, micrófono de suelo, tanque de nitrógeno.", "3-5 hrs"]
  ],
  2: [
    ["[Repipe] PEX-B installation (exposed areas).", "PEX-B pipe, brass crimp fittings.", "PEX crimper, drill, saw.", "2-3 days",
     "[Repipe] Instalación PEX-B (áreas expuestas).", "Tubería PEX-B, conexiones de latón.", "Crimpeadora PEX, taladro, sierra.", "2-3 días"],
    ["[Repipe] PEX-A Uponor Expansion system.", "PEX-A pipe, expansion rings.", "Milwaukee ProPEX expansion tool.", "3-4 days",
     "[Repipe] Sistema de expansión PEX-A Uponor.", "Tubería PEX-A, anillos de expansión.", "Herramienta de expansión ProPEX.", "3-4 días"],
    ["[Repipe] Type L Copper with ProPress.", "Type L Copper pipe, ProPress fittings.", "Rigid ProPress tool, copper cutter.", "4-6 days",
     "[Repipe] Cobre Tipo L con ProPress.", "Tubería de Cobre Tipo L, conexiones ProPress.", "ProPress, cortador de cobre.", "4-6 días"]
  ],
  3: [
    ["[Filtration] Basic 32,000 grain salt softener.", "Fleck valve, resin/brine tank, salt.", "Pipe cutter, wrenches, multimeter.", "4-6 hrs",
     "[Filtración] Ablandador de sal de 32,000 granos.", "Válvula Fleck, tanque de resina, sal.", "Cortatubos, llaves, multímetro.", "4-6 hrs"],
    ["[Filtration] Digital on-demand softener + Carbon.", "Premium resin, dual tank, carbon.", "Plumbing tools, soldering kit.", "6-8 hrs",
     "[Filtración] Ablandador digital + Filtro de carbón.", "Resina premium, doble tanque, carbón.", "Herramientas de plomería, kit de soldadura.", "6-8 hrs"],
    ["[Filtration] Halo 5 Whole House System.", "Halo 5 unit, UV sterilizer, flex lines.", "ProPress, laser level, electrical tools.", "1-1.5 days",
     "[Filtración] Sistema Halo 5 para toda la casa.", "Unidad Halo 5, esterilizador UV, líneas flexibles.", "ProPress, nivel láser, herramientas eléctricas.", "1-1.5 días"]
  ],
  4: [
    ["[Smart Valve] Standard manual brass ball valve.", "1/4 turn brass ball valve, teflon.", "Wrenches, pipe dope.", "1-2 hrs",
     "[Válvula] Válvula de bola de latón manual.", "Válvula de latón de 1/4 de vuelta, teflón.", "Llaves, pasta para roscas.", "1-2 hrs"],
    ["[Smart Valve] Moen Flo Smart Valve.", "Moen Flo unit, spacers, power supply.", "Pipe cutter, WiFi setup tools.", "2-4 hrs",
     "[Válvula] Válvula inteligente Moen Flo.", "Unidad Moen Flo, espaciadores, fuente de poder.", "Cortatubos, herramientas WiFi.", "2-4 hrs"],
    ["[Smart Valve] Phyn Plus ultrasonic monitoring.", "Phyn Plus unit, isolation valves.", "ProPress, multimeter, tablet.", "3-5 hrs",
     "[Válvula] Monitoreo ultrasónico Phyn Plus.", "Unidad Phyn Plus, válvulas de aislamiento.", "ProPress, multímetro, tablet.", "3-5 hrs"]
  ],
  5: [
    ["[Inspection] 50ft basic camera inspection.", "USB drive for video.", "Standard push camera.", "1-2 hrs",
     "[Inspección] Inspección básica de cámara 50ft.", "Memoria USB para video.", "Cámara de empuje estándar.", "1-2 hrs"],
    ["[Inspection] SeeSnake with sonar tracking.", "Marking paint, flags.", "Ridgid SeeSnake, NaviTrack Scout locator.", "2-3 hrs",
     "[Inspección] SeeSnake con rastreo por sonar.", "Pintura para marcar, banderas.", "Ridgid SeeSnake, localizador NaviTrack.", "2-3 hrs"],
    ["[Inspection] HD Inspection + Digital Modeling.", "Cloud storage link, CIPP report.", "HD SeeSnake CSx, high-res monitor.", "3-4 hrs",
     "[Inspección] Inspección HD + Modelado Digital.", "Enlace a la nube, reporte CIPP.", "HD SeeSnake CSx, monitor de alta resolución.", "3-4 hrs"]
  ],
  6: [
    ["[Trenchless] Epoxy pipe lining (CIPP).", "Epoxy resin, liner felt, calibration tube.", "Inversion drum, air compressor.", "1 day",
     "[Sin Zanja] Revestimiento epóxico (CIPP).", "Resina epóxica, fieltro, tubo de calibración.", "Tambor de inversión, compresor de aire.", "1 día"],
    ["[Trenchless] Pipe bursting (standard).", "HDPE pipe, bursting heads.", "Hydraulic pulling machine, fusion welder.", "1-2 days",
     "[Sin Zanja] Rotura de tubería (estándar).", "Tubería HDPE, cabezales de rotura.", "Máquina de tracción hidráulica, soldadora.", "1-2 días"],
    ["[Trenchless] Full trenchless with dual cleanouts.", "Premium HDPE, ABS cleanouts, tracer wire.", "High-tonnage puller, hydro-excavator.", "2-3 days",
     "[Sin Zanja] Reemplazo completo con doble registro.", "HDPE premium, registros ABS, cable trazador.", "Tractor de alto tonelaje, hidroexcavadora.", "2-3 días"]
  ],
  7: [
    ["[Heater] Basic Non-Condensing Tankless.", "Tankless unit, Cat III venting, valves.", "Drill, gas sniffer, hole saw.", "4-6 hrs",
     "[Calentador] Calentador sin tanque básico.", "Unidad sin tanque, ventilación Cat III.", "Taladro, detector de gas, sierra.", "4-6 hrs"],
    ["[Heater] High-Efficiency Condensing Unit.", "Condensing unit, PVC venting, neutralizer.", "Combustion analyzer, ProPress.", "6-8 hrs",
     "[Calentador] Unidad de condensación de alta eficiencia.", "Unidad de condensación, ventilación PVC.", "Analizador de combustión, ProPress.", "6-8 hrs"],
    ["[Heater] Dual Condensing Setup + Recirculation.", "2x Navien units, manifold kit, smart controller.", "Advanced diagnostic tools, manifold setup.", "1-2 days",
     "[Calentador] Configuración dual con recirculación.", "2 unidades Navien, kit de múltiple, controlador inteligente.", "Herramientas avanzadas, sistema de múltiple.", "1-2 días"]
  ],
  8: [
    ["[Gas Line] Standard black iron pipe extension.", "Black iron pipe, malleable fittings.", "Pipe threader, pipe wrenches.", "3-5 hrs",
     "[Línea de Gas] Extensión estándar de hierro negro.", "Tubería de hierro negro, conexiones maleables.", "Roscadora, llaves para tubos.", "3-5 hrs"],
    ["[Gas Line] CSST (Corrugated Stainless Steel).", "CSST tubing, striker plates, fittings.", "CSST cutter, bonding clamps.", "2-4 hrs",
     "[Línea de Gas] CSST (Acero Inoxidable Corrugado).", "Tubería CSST, placas de protección, conexiones.", "Cortador CSST, abrazaderas de conexión.", "2-4 hrs"],
    ["[Gas Line] High-capacity underground PE gas line.", "Yellow PE pipe, anodeless risers, tracer wire.", "Butt fusion machine, trenching equipment.", "1-2 days",
     "[Línea de Gas] Línea subterránea de alta capacidad.", "Tubería PE amarilla, elevadores, cable trazador.", "Máquina de fusión, equipo de zanjeo.", "1-2 días"]
  ],
  9: [
    ["[Hydro Jetting] Standard residential drain jetting.", "Degreaser enzyme.", "Electric hydro-jetter, standard nozzles.", "1-2 hrs",
     "[Hydro Jetting] Lavado a presión residencial estándar.", "Enzima desengrasante.", "Hidrolavadora eléctrica, boquillas estándar.", "1-2 hrs"],
    ["[Hydro Jetting] Heavy-duty commercial jetting.", "Root-destroying foam.", "Gas-powered jetter, root ranger nozzle.", "2-4 hrs",
     "[Hydro Jetting] Lavado comercial de alta resistencia.", "Espuma destructora de raíces.", "Jetter a gasolina, boquilla para raíces.", "2-4 hrs"],
    ["[Hydro Jetting] High-frequency pulsating jetting.", "Bio-clean treatment.", "Trailer-mounted jetter, Warthog nozzle.", "3-5 hrs",
     "[Hydro Jetting] Lavado pulsante de alta frecuencia.", "Tratamiento Bio-clean.", "Jetter montado en remolque, boquilla Warthog.", "3-5 hrs"]
  ],
  10: [
    ["[Fixture] Standard builder-grade fixture replacement.", "Standard fixture, wax ring, supply lines.", "Basin wrench, standard hand tools.", "1-2 hrs",
     "[Accesorio] Reemplazo de accesorio estándar.", "Accesorio estándar, anillo de cera, líneas de suministro.", "Llave para lavabo, herramientas manuales.", "1-2 hrs"],
    ["[Fixture] High-end fixture (Touchless/Eco).", "Touchless faucet or Toto toilet, premium seals.", "Multimeter, level.", "2-3 hrs",
     "[Accesorio] Accesorio de gama alta (Sin contacto/Eco).", "Grifo sin contacto o inodoro Toto.", "Multímetro, nivel.", "2-3 hrs"],
    ["[Fixture] Smart Toilet / Bidet Integration.", "Toto Washlet, electrical receptacle, GFCI.", "Voltage tester, minor electrical tools.", "3-5 hrs",
     "[Accesorio] Integración de Inodoro Inteligente / Bidet.", "Toto Washlet, receptáculo eléctrico, GFCI.", "Probador de voltaje, herramientas eléctricas.", "3-5 hrs"]
  ],
  11: [
    ["[Seismic Valve] Basic mechanical seismic valve.", "Mechanical shutoff valve, gas tape.", "Pipe wrenches, level, threader.", "2-3 hrs",
     "[Válvula Sísmica] Válvula mecánica básica.", "Válvula de cierre mecánico, cinta para gas.", "Llaves para tubos, nivel, roscadora.", "2-3 hrs"],
    ["[Seismic Valve] Premium valve with manual reset.", "Approved seismic valve, rigid brackets.", "Precision level, bracket anchors.", "3-4 hrs",
     "[Válvula Sísmica] Válvula premium con reinicio manual.", "Válvula sísmica aprobada, soportes rígidos.", "Nivel de precisión, anclajes.", "3-4 hrs"],
    ["[Seismic Valve] Electronic Detection + Smart Shutoff.", "Electronic sensor, smart gas valve, battery.", "Electrical tools, IoT configuration app.", "4-6 hrs",
     "[Válvula Sísmica] Detección electrónica + Cierre inteligente.", "Sensor electrónico, válvula inteligente, batería.", "Herramientas eléctricas, app IoT.", "4-6 hrs"]
  ],
  12: [
    ["[Backflow] Standard RPZ Backflow Install.", "Watts/Wilkins RPZ valve, brass fittings.", "Pipe wrenches, soldering torch.", "3-4 hrs",
     "[Retorno] Instalación de válvula RPZ estándar.", "Válvula RPZ Watts/Wilkins, conexiones de latón.", "Llaves para tubos, soplete.", "3-4 hrs"],
    ["[Backflow] Commercial RPZ + Certification.", "Premium RPZ, test cocks, insulation blanket.", "Calibrated backflow test kit.", "4-6 hrs",
     "[Retorno] RPZ Comercial + Certificación.", "RPZ premium, llaves de prueba, manta aislante.", "Kit de prueba calibrado.", "4-6 hrs"],
    ["[Backflow] Large industrial backflow + Enclosure.", "Flanged backflow preventer, heated enclosure.", "Chain hoists, torque wrench, flange gaskets.", "1-2 days",
     "[Retorno] Válvula industrial grande + Recinto.", "Válvula con bridas, recinto calefaccionado.", "Polipastos, llave dinamométrica.", "1-2 días"]
  ],
  13: [
    ["[Boiler] Annual preventative maintenance.", "Gaskets, cleaning brushes, thermocouple.", "Combustion analyzer, multimeter, wrenches.", "3-5 hrs",
     "[Caldera] Mantenimiento preventivo anual.", "Juntas, cepillos de limpieza, termopar.", "Analizador de combustión, multímetro, llaves.", "3-5 hrs"],
    ["[Boiler] System descaling + pump rebuild.", "Descaling chemical, pump seals, igniter.", "Circulation pump, chemical bucket, tester.", "6-8 hrs",
     "[Caldera] Descalcificación + reconstrucción de bomba.", "Químico descalcificador, sellos de bomba.", "Bomba de circulación, probador.", "6-8 hrs"],
    ["[Boiler] Complete overhaul and BMS integration.", "Heat exchanger, smart aquastat, BMS sensors.", "Advanced diagnostics, thermal imaging.", "1-2 days",
     "[Caldera] Revisión completa e integración BMS.", "Intercambiador de calor, sensores BMS.", "Diagnósticos avanzados, termografía.", "1-2 días"]
  ],
  14: [
    ["[Sump Pump] Basic submersible pump (1/3 HP).", "Zoeller 1/3 HP pump, check valve, PVC.", "PVC cutter, primer/glue, drill.", "2-4 hrs",
     "[Bomba Sumidero] Bomba sumergible básica (1/3 HP).", "Bomba Zoeller 1/3 HP, válvula de retención, PVC.", "Cortador de PVC, pegamento, taladro.", "2-4 hrs"],
    ["[Sump Pump] Submersible pump + Battery Backup.", "Primary pump, battery backup unit, AGM battery.", "Multimeter, wire strippers.", "4-6 hrs",
     "[Bomba Sumidero] Bomba sumergible + Batería de respaldo.", "Bomba principal, unidad de respaldo, batería AGM.", "Multímetro, pelacables.", "4-6 hrs"],
    ["[Sump Pump] Dual pump + WiFi + High capacity.", "Dual redundant pumps, smart controller, dual batteries.", "Smart home integration tools, advanced kit.", "6-8 hrs",
     "[Bomba Sumidero] Bomba dual + WiFi + Alta capacidad.", "Bombas redundantes, controlador inteligente, baterías.", "Herramientas de hogar inteligente.", "6-8 hrs"]
  ],
  15: [
    ["[Elite Copper] Type M copper repipe (visible).", "Type M Copper, standard solder, flux.", "Torch, pipe cutter, emery cloth.", "2-4 days",
     "[Cobre Élite] Repipe de cobre Tipo M (visible).", "Cobre Tipo M, soldadura estándar, fundente.", "Soplete, cortatubos, lija.", "2-4 días"],
    ["[Elite Copper] Type L copper repipe (full house).", "Type L Copper, premium silver solder, heavy brackets.", "High-heat torch, tube benders.", "4-6 days",
     "[Cobre Élite] Repipe de cobre Tipo L (toda la casa).", "Cobre Tipo L, soldadura de plata, soportes pesados.", "Soplete de alto calor, dobladores de tubo.", "4-6 días"],
    ["[Elite Copper] Type L Copper with ProPress + Insulation.", "Type L Copper, ProPress fittings, fiberglass insulation.", "Rigid ProPress, laser level.", "5-7 days",
     "[Cobre Élite] Cobre Tipo L con ProPress + Aislamiento.", "Cobre Tipo L, conexiones ProPress, aislamiento.", "ProPress, nivel láser.", "5-7 días"]
  ]
};

let appJs = fs.readFileSync('app.js', 'utf8');

const tiers = ['good', 'better', 'best'];
const fields = ['just', 'mat', 'tools', 'time'];
const langs = ['en', 'es', 'zh', 'tl', 'vi'];

// A helper to replace content inside app.js for a specific language
function replaceField(lang, fieldName, newText) {
    const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"${fieldName}":\\s*")[^"]+(")`, 'g');
    appJs = appJs.replace(regex, `$1${newText}$2`);
}

for (let i = 1; i <= 15; i++) {
    for (let t = 0; t < 3; t++) { // good, better, best
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

        // ZH (Use EN for now to replace the filler)
        replaceField('zh', `pb_svc_${i}_${tier}_just`, data[i][t][0]);
        replaceField('zh', `pb_svc_${i}_${tier}_mat`, data[i][t][1]);
        replaceField('zh', `pb_svc_${i}_${tier}_tools`, data[i][t][2]);
        replaceField('zh', `pb_svc_${i}_${tier}_time`, data[i][t][3]);

        // TL
        replaceField('tl', `pb_svc_${i}_${tier}_just`, data[i][t][0]);
        replaceField('tl', `pb_svc_${i}_${tier}_mat`, data[i][t][1]);
        replaceField('tl', `pb_svc_${i}_${tier}_tools`, data[i][t][2]);
        replaceField('tl', `pb_svc_${i}_${tier}_time`, data[i][t][3]);

        // VI
        replaceField('vi', `pb_svc_${i}_${tier}_just`, data[i][t][0]);
        replaceField('vi', `pb_svc_${i}_${tier}_mat`, data[i][t][1]);
        replaceField('vi', `pb_svc_${i}_${tier}_tools`, data[i][t][2]);
        replaceField('vi', `pb_svc_${i}_${tier}_time`, data[i][t][3]);
    }
}

fs.writeFileSync('app.js', appJs);
console.log('Pricebook data replaced successfully.');
