const fs = require('fs');

const file = 'docs/pricebook.html';
let html = fs.readFileSync(file, 'utf8');

const newPrices = {
    1: { good: 350, better: 450, best: 550 },
    2: { good: 8500, better: 12500, best: 16000 },
    3: { good: 2200, better: 2860, best: 3520 },
    4: { good: 850, better: 1150, best: 1400 },
    5: { good: 280, better: 364, best: 448 },
    6: { good: 8500, better: 12000, best: 15000 },
    7: { good: 3200, better: 4500, best: 5800 },
    8: { good: 650, better: 845, best: 1040 },
    9: { good: 250, better: 350, best: 450 },
    10: { good: 850, better: 1200, best: 1500 },
    11: { good: 3800, better: 4800, best: 5800 },
    12: { good: 950, better: 1235, best: 1520 },
    13: { good: 550, better: 850, best: 1200 },
    14: { good: 350, better: 550, best: 750 },
    15: { good: 650, better: 850, best: 1200 }
};

const scopeData = {
    1: { 
        good: "Escaneo acústico estándar. Marcaje del área de la fuga. Ideal para fugas evidentes. Garantía de diagnóstico.",
        better: "Escaneo acústico + Termografía FLIR. Identificación precisa detrás de paredes. Incluye reporte digital PDF.",
        best: "Termografía FLIR + Prueba de caída de presión completa del sistema. Mapeo estructural e inyección de gas trazador si es necesario. Garantía de certeza absoluta."
    },
    2: { 
        good: "Sistema PEX-B con conectores engarzados (crimp). Tubería confiable y económica. Cierre de paredes NO incluido. Garantía de mano de obra 5 años.",
        better: "Sistema PEX-A (Uponor) con conectores de expansión en frío (mejor flujo, sin restricción). Válvulas de bola de cuarto de vuelta. Incluye parchado base de Drywall. Garantía 10 años.",
        best: "Sistema Mixto: PEX-A en interiores y Cobre Tipo L en exteriores/expuestos. Aislamiento térmico premium. Válvulas de aislamiento por zonas. Drywall parchado y texturizado. Garantía 25 años."
    },
    3: { 
        good: "Sistema de Filtración de Carbón Whole-House (1 Etapa). Mejora el sabor y remueve cloro. Instalación expuesta.",
        better: "Sistema Dual: Filtración de Carbón + Acondicionador sin sal (Descalcificador). Instalación con válvula bypass y cubierta protectora.",
        best: "Sistema Premium de 3 Etapas + Suavizador de agua con retro-lavado automático. Manómetros de presión In/Out integrados. Garantía de por vida en tanques."
    },
    4: { 
        good: "Instalación básica de la válvula inteligente en línea principal existente. Configuración de WiFi responsabilidad del cliente.",
        better: "Instalación de la válvula + Re-rutado menor de tuberías para accesibilidad. Nosotros realizamos la sincronización WiFi y app móvil.",
        best: "Instalación premium: Válvula + Caja protectora sellada a prueba de intemperie (NEMA 4X) + Bypass de emergencia en cobre + Capacitación presencial total."
    },
    5: { 
        good: "Inspección de cámara en línea principal por un cleanout existente. Revisión visual in-situ sin grabación.",
        better: "Inspección de cámara HD con grabación entregada en memoria USB. Incluye localización de 1 punto de conflicto bajo tierra con localizador (Sonde).",
        best: "Cámara HD con grabación en la nube + Localización de todo el trayecto de la línea + Reporte técnico detallado para el seguro/real estate."
    },
    6: { 
        good: "Reemplazo de línea mediante excavación tradicional (Trenching). Tubería ABS o PVC Schedule 40. Relleno de tierra rústico.",
        better: "Reemplazo sin zanja (Trenchless Pipe Bursting). HDPE de alta densidad sin uniones (seamless). Menos destrucción al jardín y pavimento.",
        best: "Revestimiento Epóxico Interior (Epoxy CIPP Liner) o Trenchless HDPE Premium + Instalación de un doble cleanout nuevo de 2 vías + Garantía de 50 años."
    },
    7: { 
        good: "Instalación de calentador Hybrid Heat Pump estándar. Conexión a ductos y desagües existentes. Sin modificaciones al panel eléctrico.",
        better: "Instalación de unidad premium (ej. Rheem ProTerra). Incluye vaso de expansión nuevo, mangueras trenzadas y válvula mezcladora termostática.",
        best: "ProTerra Ultra con Válvula de cierre automático (LeakGuard) + Recirculación dedicada. Actualización de breakers (hasta 15 pies) y pads anti-vibración."
    },
    8: { 
        good: "Reemplazo directo de válvula reguladora de presión (PRV). Mismo sitio, misma marca estándar.",
        better: "Instalación de PRV de alto flujo en latón sin plomo. Se agregan uniones universales para fácil mantenimiento futuro y válvula de cierre secundario.",
        best: "Sistema PRV Premium con loop de Bypass (permite dar servicio sin cortar el agua). Manómetros de presión en acero inoxidable pre y post válvula."
    },
    9: { 
        good: "Despacho inmediato. Llegada rápida, diagnóstico del problema y cierre de válvulas para detener la emergencia.",
        better: "Diagnóstico + Extracción menor de agua estancada (Wet-Vac) + Reparación temporal (parche rápido) para restaurar servicio parcialmente.",
        best: "Despacho prioritario VIP. Control total del derrame, Bypass temporal de líneas, y generación inmediata de un reporte forense fotográfico para la aseguradora."
    },
    10: { 
        good: "Levantamiento rápido en campo. Esquema a mano alzada digitalizado (As-Built básico) para uso interno.",
        better: "Planos técnicos CAD 2D del sistema. Capas separadas para drenaje y suministro de agua. Formato estándar para solicitud de permisos (City Permits).",
        best: "Mapeo Isométrico 3D (BIM/Revit). Detalle completo de caída, flujos y carga de accesorios. Entregable impreso en gran formato y archivos digitales CAD."
    },
    11: { 
        good: "Instalación de calentador Tankless estándar (solo exteriores). Líneas de agua y gas acopladas a la infraestructura existente sin modificaciones.",
        better: "Instalación de unidad de condensación de alta eficiencia (ej. Navien). Incluye re-rutado de ventilación en PVC Schedule 40 y filtro de sedimento en la línea fría.",
        best: "Unidad Navien Premium con bomba de recirculación integrada (NaviCirc). Acondicionador magnético Scale-Shield, controlador WiFi y válvulas de servicio pesado."
    },
    12: { 
        good: "Reemplazo de ensamblaje Backflow dañado. Pruebas mecánicas básicas para asegurar funcionamiento.",
        better: "Ensamblaje premium Watts o Wilkins. Incluye la Prueba y Certificación Oficial (Backflow Test) requerida por la ciudad o distrito de agua.",
        best: "Ensamblaje Premium + Certificación Oficial + Cubierta / Jaula protectora anti-congelamiento e instalación resistente a robos."
    },
    13: { 
        good: "Remoción e instalación del fixture suministrado por el cliente. Reuso de líneas de suministro existentes si están en buen estado.",
        better: "Instalación del fixture + Reemplazo preventivo de las líneas de suministro trenzadas y las válvulas angulares por modelos de latón macizo de 1/4 de vuelta.",
        best: "Instalación 'White-Glove': Sellado perimetral con silicona anti-moho de nivel marino, calibración de presión fina y limpieza premium del área de trabajo."
    },
    14: { 
        good: "Pruebas de calidad en sitio usando tiras reactivas rápidas (Dureza, pH, Cloro Libre y Total). Resultados en minutos.",
        better: "Pruebas fotométricas digitales de alta precisión. Incluye prueba de Cloraminas, Hierro disuelto y Cobre. Reporte técnico en PDF.",
        best: "Análisis de laboratorio certificado de terceros. Muestreo de Metales Pesados, VOCs, E.Coli y bacterias coliformes. Cadena de custodia y reporte sellado."
    },
    15: { 
        good: "Lavado a presión estándar de la línea para remover bloqueos blandos y lodos acumulados. Boquilla de penetración frontal.",
        better: "Jetting de alta presión. Uso de boquilla de corte rotativa (Warthog) para triturar raíces ligeras y grasa endurecida. Se restaura el diámetro completo.",
        best: "Jetting 4000 PSI + Tratamiento biológico preventivo (enzimas post-limpieza) + Descalcificación de paredes (Descaling). Garantía de no-bloqueo extendida."
    }
};

let newArrayCode = 'const services = [\n';
for (let i = 1; i <= 15; i++) {
    let p = newPrices[i];
    let s = scopeData[i];
    
    let detailsStr = JSON.stringify({
        good: { 
            just: s.good,
            mat: "Materiales Estándar / Básicos (OEM)",
            tools: "Herramientas de Servicio Regulares",
            time: "Tiempo Base"
        },
        better: {
            just: s.better,
            mat: "Materiales Premium / Larga Duración",
            tools: "Herramientas Especializadas",
            time: "Tiempo Base + Ajustes de Calidad"
        },
        best: {
            just: s.best,
            mat: "Grado Comercial / Máxima Garantía",
            tools: "Diagnóstico Avanzado / Equipamiento Pesado",
            time: "Tiempo de Instalación Custom VIP"
        }
    });

    let cat = "";
    let code = "";
    let img = "";
    if([1,5,9].includes(i)) { cat = "Diagnostic"; code = "OR-DIAG-00"+i; img = "../assets/icon_plumber_ai.png"; }
    else if([2,6,10,13].includes(i)) { cat = "technical plumbing"; code = "OR-ENG-00"+i; img = "../assets/comic_copper.png"; }
    else if([3,7,11,14].includes(i)) { cat = "Eco"; code = "OR-ECO-00"+i; img = "../assets/comic_treatment.png"; }
    else { cat = "Safety"; code = "OR-SAFE-00"+i; img = "../assets/comic_shield.png"; }

    newArrayCode += `    { id: ${i}, code: "${code}", nameKey: "pb_svc_${i}_name", userDescKey: "pb_svc_${i}_user", techDescKey: "pb_svc_${i}_tech", category: "${cat}", price_good: "$${p.good.toLocaleString('en-US')}", price_better: "$${p.better.toLocaleString('en-US')}", price_best: "$${p.best.toLocaleString('en-US')}", image: "${img}", details: ${detailsStr} },\n`;
}
newArrayCode += '        ];\n';

let startIdx = html.indexOf('const services = [');
let endIdx = html.indexOf('let activeCategory = \'all\';');

if (startIdx !== -1 && endIdx !== -1) {
    html = html.substring(0, startIdx) + newArrayCode + "        " + html.substring(endIdx);
    
    // Inject the video after regenerating
    let searchStr = `<p class="pb-service-tech" data-i18n="svc_\${s.id}_p2" style="font-size: 0.9em; line-height: 1.4; color: #b0c4de;"></p>
                            </div>`;

    let injectStr = searchStr + `

                            \${s.id === 15 ? \`<div class="pb-video-container" style="margin-bottom: 1.2rem; padding: 0.5rem; background: rgba(0,245,255,0.05); border: 1px solid rgba(0,245,255,0.3); border-radius: 8px; box-shadow: 0 0 15px rgba(0,245,255,0.1);">
                                <h4 style="color: var(--neon-cyan); margin-bottom: 0.5rem; text-align: center; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px;"><i class="fas fa-video"></i> Limpieza Hydro-Jetting (4000 PSI)</h4>
                                <video width="100%" height="200" autoplay loop muted playsinline style="border-radius: 6px; border: 1px solid #111; object-fit: cover;">
                                    <source src="../assets/hydro_jetting_ai.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>\` : ''}`;

    html = html.replace(searchStr, injectStr);

    fs.writeFileSync(file, html);
    console.log("Services detailed scope properly fixed and Video Injected!");
} else {
    console.log("Could not find start or end index");
}
