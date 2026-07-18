const fs = require('fs');
let html = fs.readFileSync('docs/plantilla_informe_diagnostico.html', 'utf8');

const sec1Start = '<!-- Sección 1: Información -->';
const sec2Start = '<!-- Sección 2: Metodología -->';
const sec3Start = '<!-- Sección 3: Especificaciones del Sistema y Materiales -->';
const sec4Start = '<!-- Sección 4: Inventario de Equipos Comerciales / Fixtures -->';
const sec5Start = '<!-- Sección 5: Hallazgos y Diagnóstico -->';
const sec6Start = '<!-- Sección 6: Evidencia Fotográfica y Soportes -->';
const sec7Start = '<!-- Sección 7: Legalidad y Firmas -->';

const newSec1 = `<!-- Sección 1: Información Administrativa -->
            <div class="form-section">
                <h3 class="form-section-title">1. Información Administrativa y Certificación Jurídica</h3>
                <div class="grid-2">
                    <div class="form-group">
                        <label>Nombre del Cliente / Entidad Comercial</label>
                        <input type="text" placeholder="Ej. Casa en el Aire Restaurante">
                    </div>
                    <div class="form-group">
                        <label>Cronología: Fecha de Siniestro (Incendio) / Fecha Inspección</label>
                        <input type="text" placeholder="Ej. Siniestro: 12/Oct | Insp: 15/Oct">
                    </div>
                </div>
                <div class="grid-2">
                    <div class="form-group">
                        <label>Dirección Exacta de la Propiedad (Santa Clara, CA)</label>
                        <input type="text" placeholder="Calle, Ciudad, Código Postal">
                    </div>
                    <div class="form-group">
                        <label>Número de Reclamo de Seguro (Claim #) / Referencia</label>
                        <input type="text" placeholder="Opcional">
                    </div>
                </div>
                <div class="grid-2">
                    <div class="form-group">
                        <label>Técnico Inspector o Ingeniero (PE/C-36)</label>
                        <input type="text" value="Alex Morales - Lic. #1156542" readonly>
                    </div>
                    <div class="form-group">
                        <label>Tipo de Ocupación Comercial</label>
                        <select>
                            <option value="restaurante">Restaurante / Servicio de Alimentos</option>
                            <option value="oficinas">Edificio de Oficinas</option>
                            <option value="comercio">Comercio Minorista (Retail)</option>
                            <option value="industrial">Instalación Industrial</option>
                            <option value="multifamiliar">Multi-Familiar</option>
                        </select>
                    </div>
                </div>
            </div>
            `;

const newSec2 = `<!-- Sección 2: Metodología -->
            <div class="form-section">
                <h3 class="form-section-title">2. Pruebas de Diagnóstico Obligatorias y Metodología (CPC/UPC)</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">Seleccione los métodos y pruebas exigidas por el CPC aplicadas durante la evaluación técnica post-incendio.</p>
                <div class="grid-2">
                    <div class="form-group sub-cell">
                        <label>Prueba de Presión de Gas (CPC §1213.0)</label>
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Prueba de Presión con Manómetro Aprobada</label>
                            <label class="checkbox-item"><input type="checkbox"> Microfugas Detectadas por Calor en Juntas</label>
                            <label class="checkbox-item"><input type="checkbox"> Válvula de Cierre Sísmico Inspeccionada</label>
                            <label class="checkbox-item"><input type="checkbox"> Inspección de Líneas CSST/Negro</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Prueba Hidrostática de Agua (CPC §609.4)</label>
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Prueba Hidrostática Suministro (Aprobada)</label>
                            <label class="checkbox-item"><input type="checkbox"> Fugas Ocultas Detectadas Bajo Losa</label>
                            <label class="checkbox-item"><input type="checkbox"> Inspección de Deformación Térmica (PEX/Plásticos)</label>
                            <label class="checkbox-item"><input type="checkbox"> Evaluación Térmica en Cobre/Galvanizado</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Prueba del Sistema de Drenaje (CPC §712.0)</label>
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Prueba de Aire/Humo (Aprobada)</label>
                            <label class="checkbox-item"><input type="checkbox"> Fuga de Gases de Alcantarillado Detectada</label>
                            <label class="checkbox-item"><input type="checkbox"> Deformación de Ventilaciones de Techo (Roof Vents)</label>
                            <label class="checkbox-item"><input type="checkbox"> Inspección Subterránea con Cámara CCTV</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Inspección Estructural (Soportes y Fijaciones)</label>
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Pérdida de Templado en Colgadores/Soportes</label>
                            <label class="checkbox-item"><input type="checkbox"> Capacidad de Carga Comprometida por Fuego</label>
                            <label class="checkbox-item"><input type="checkbox"> Daño a Cortafuegos (Firestops) en Penetraciones</label>
                            <label class="checkbox-item"><input type="checkbox"> Cámara Térmica / Medición Láser Aplicada</label>
                        </div>
                    </div>
                </div>
            </div>
            `;

const newSec4 = `<!-- Sección 4: Inventario de Equipos Comerciales / Fixtures -->
            <div class="form-section">
                <h3 class="form-section-title">4. Evaluación Estado por Estado del Sistema (Post-Incendio)</h3>
                <div class="grid-2">
                    <div class="form-group sub-cell">
                        <label>Suministro de Agua Potable (CPC Capítulo 6)</label>
                        <input type="text" placeholder="Material Principal (Cobre/PEX/CPVC)" style="margin-bottom:0.5rem;">
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Tubería Plástica Degradada Estructuralmente</label>
                            <label class="checkbox-item"><input type="checkbox"> Daño por Calor Extremo en Conexiones PEX</label>
                            <label class="checkbox-item"><input type="checkbox"> Tubería Metálica Comprometida</label>
                            <label class="checkbox-item"><input type="checkbox"> Aislamiento Térmico Destruido</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Dispositivos de Prevención de Reflujo (Backflow)</label>
                        <input type="text" placeholder="Tipo/Ubicación/Requisito Santa Clara" style="margin-bottom:0.5rem;">
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Sellos de Goma Internos Dañados por Calor</label>
                            <label class="checkbox-item"><input type="checkbox"> Componentes Mecánicos Comprometidos</label>
                            <label class="checkbox-item"><input type="checkbox"> Requiere Recertificación Obligatoria</label>
                            <label class="checkbox-item"><input type="checkbox"> Falla en Prueba de Presión Diferencial</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Sistema de Gas Combustible (CPC Capítulo 12)</label>
                        <input type="text" placeholder="Ubicación Medidor / Material (CSST/Negro)" style="margin-bottom:0.5rem;">
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Válvula de Cierre Sísmico Activada / Dañada</label>
                            <label class="checkbox-item"><input type="checkbox"> Tubería CSST con Daño en Cubierta (Arcing)</label>
                            <label class="checkbox-item"><input type="checkbox"> Reguladores de Presión Afectados por Fuego</label>
                            <label class="checkbox-item"><input type="checkbox"> Requiere Etiqueta Verde (Green Tag) de PG&E</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Drenaje, Desechos y Ventilación (DWV) (Cap. 7 y 9)</label>
                        <input type="text" placeholder="Material (ABS/Hierro Fundido/PVC)" style="margin-bottom:0.5rem;">
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Deformación Crítica en Tuberías ABS/PVC</label>
                            <label class="checkbox-item"><input type="checkbox"> Gases de Incendio Afectaron Ventilaciones</label>
                            <label class="checkbox-item"><input type="checkbox"> Falla en Uniones con Bandas de Neopreno (No-Hub)</label>
                            <label class="checkbox-item"><input type="checkbox"> Líneas Colgadas Colapsadas por Falla de Soportes</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Artefactos Comerciales (CPC Capítulos 4, 5 y 10)</label>
                        <input type="text" placeholder="Calentador / Trampa de Grasa" style="margin-bottom:0.5rem;">
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Termostato de Boiler Dañado por Calor</label>
                            <label class="checkbox-item"><input type="checkbox"> Válvula T&P (Alivio de Presión) Defectuosa</label>
                            <label class="checkbox-item"><input type="checkbox"> Daño Estructural en Interceptor de Grasa</label>
                            <label class="checkbox-item"><input type="checkbox"> Falla en Sistema de Ventilación de Combustión</label>
                        </div>
                    </div>
                    <div class="form-group sub-cell">
                        <label>Cumplimiento CALGreen (Título 24, Parte 11)</label>
                        <input type="text" placeholder="Artefactos a Reemplazar" style="margin-bottom:0.5rem;">
                        <div class="checkbox-group compact">
                            <label class="checkbox-item"><input type="checkbox"> Nuevos Fixtures Requieren Flujo Eficiente (<0.5 gpm)</label>
                            <label class="checkbox-item"><input type="checkbox"> Inodoros Comerciales deben ser Alta Eficiencia</label>
                            <label class="checkbox-item"><input type="checkbox"> Aislamiento de Tuberías Requerido por Título 24</label>
                            <label class="checkbox-item"><input type="checkbox"> Cumple con Código Municipal Título 15 de Santa Clara</label>
                        </div>
                    </div>
                </div>
            </div>
            `;

const newSec5 = `<!-- Sección 5: Hallazgos y Diagnóstico -->
            <div class="form-section">
                <h3 class="form-section-title">5. Matriz de Daños, Conclusiones y Remediación</h3>
                <div class="form-group">
                    <label>Matriz de Daños (Impacto de Calor, Humo, Hollín, Agua)</label>
                    <textarea placeholder="Liste los componentes que PASARON la inspección vs. los que requieren REPARACIÓN/REEMPLAZO inmediato."></textarea>
                </div>
                <div class="form-group">
                    <label>Requerimiento de Permisos (Ciudad de Santa Clara / PG&E)</label>
                    <textarea placeholder="Especifique si las reparaciones requerirán un Permiso de Plomería del Depto. de Desarrollo Comunitario o Green Tag de PG&E."></textarea>
                </div>
                <div class="grid-2">
                    <div class="form-group">
                        <label>Declaración Formal de Seguridad</label>
                        <select>
                            <option value="inseguro">INSEGURO - Sistema No Apto para Reocupación</option>
                            <option value="parcial">PARCIALMENTE SEGURO - Con Restricciones de Uso</option>
                            <option value="seguro">SEGURO - Sistema Pasa Pruebas y Código</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Costo Estimado de Inspección/Remediación</label>
                        <input type="text" placeholder="$ USD (Opcional)">
                    </div>
                </div>
            </div>
            `;

const newSec7 = `<!-- Sección 7: Legalidad y Firmas -->
            <div class="form-section" style="margin-bottom: 0;">
                <h3 class="form-section-title">7. Declaración Legal, Código Municipal y Firmas</h3>
                
                <div class="legal-box">
                    <strong>CERTIFICACIÓN CSLB Y CÓDIGO MUNICIPAL DE SANTA CLARA:</strong>
                    Este documento constituye un Informe de Inspección Diagnóstica Técnica emitido por un Contratista con Licencia C-36 válida en California bajo los estándares de honestidad y competencia técnica de la CSLB. El técnico certifica que la evaluación cumple con la edición del California Plumbing Code (CPC) actualmente adoptada por el Título 15 del Código Municipal de la Ciudad de Santa Clara, incluyendo regulaciones del Lathrop Manteca Fire District / Santa Clara Fire Department.
                    <br><br>
                    <strong>Alcance (Scope of Work):</strong> Este documento NO es un contrato de construcción. NO incluye reparaciones físicas. Cualquier reparación, remediación o modificación recomendada requerirá un <em>Home/Commercial Improvement Contract</em> separado, sujeto a leyes de la CSLB, límites de anticipo (10% o $1,000 máximo) y advertencias de gravamen (Mechanic's Lien). Este reporte puede servir como base técnica para solicitar la etiqueta verde (green tag) ante PG&E o solicitar permisos de construcción, pero no garantiza aprobaciones de terceros.
                </div>

                <div class="grid-2" style="margin-top: 3rem;">
                    <div class="form-group">
                        <label>Firma del Contratista/Ingeniero (C-36/PE)</label>
                        <div style="border-bottom: 1px solid #555; height: 40px; margin-top: 10px;"></div>
                        <p style="font-size: 0.8rem; color: #777; margin-top: 5px;">Alex Morales - Lic. #1156542</p>
                    </div>
                    <div class="form-group">
                        <label>Firma de Recibido (Propietario / Aseguradora)</label>
                        <div style="border-bottom: 1px solid #555; height: 40px; margin-top: 10px;"></div>
                        <p style="font-size: 0.8rem; color: #777; margin-top: 5px;">Representante Autorizado</p>
                    </div>
                </div>
            </div>
            `;

html = html.substring(0, html.indexOf(sec1Start)) + newSec1 + 
       newSec2 + 
       html.substring(html.indexOf(sec3Start), html.indexOf(sec4Start)) + 
       newSec4 + 
       newSec5 + 
       html.substring(html.indexOf(sec6Start), html.indexOf(sec7Start)) + 
       newSec7 + 
       html.substring(html.indexOf('<button type="button" class="btn-print"'));

const newTerms = {
    "1. Información Administrativa y Certificación Jurídica": "1. Administrative Information and Legal Certification",
    "Nombre del Cliente / Entidad Comercial": "Client Name / Commercial Entity",
    "Cronología: Fecha de Siniestro (Incendio) / Fecha Inspección": "Chronology: Date of Loss (Fire) / Inspection Date",
    "Ej. Siniestro: 12/Oct | Insp: 15/Oct": "E.g. Fire: Oct 12 | Insp: Oct 15",
    "Dirección Exacta de la Propiedad (Santa Clara, CA)": "Exact Property Address (Santa Clara, CA)",
    "Técnico Inspector o Ingeniero (PE/C-36)": "Inspector Technician or Engineer (PE/C-36)",
    "Tipo de Ocupación Comercial": "Commercial Occupancy Type",
    "Restaurante / Servicio de Alimentos": "Restaurant / Food Service",
    "Edificio de Oficinas": "Office Building",
    "Comercio Minorista (Retail)": "Retail Business",
    "Instalación Industrial": "Industrial Facility",
    "2. Pruebas de Diagnóstico Obligatorias y Metodología (CPC/UPC)": "2. Mandatory Diagnostic Tests & Methodology (CPC/UPC)",
    "Seleccione los métodos y pruebas exigidas por el CPC aplicadas durante la evaluación técnica post-incendio.": "Select the methods and tests required by CPC applied during post-fire technical evaluation.",
    "Prueba de Presión de Gas (CPC §1213.0)": "Gas Pressure Test (CPC §1213.0)",
    "Prueba de Presión con Manómetro Aprobada": "Pressure Test with Gauge Passed",
    "Microfugas Detectadas por Calor en Juntas": "Micro-leaks Detected due to Heat in Joints",
    "Válvula de Cierre Sísmico Inspeccionada": "Seismic Shut-off Valve Inspected",
    "Inspección de Líneas CSST/Negro": "CSST/Black Iron Lines Inspection",
    "Prueba Hidrostática de Agua (CPC §609.4)": "Water Hydrostatic Test (CPC §609.4)",
    "Prueba Hidrostática Suministro (Aprobada)": "Supply Hydrostatic Test (Passed)",
    "Fugas Ocultas Detectadas Bajo Losa": "Hidden Leaks Detected Under Slab",
    "Inspección de Deformación Térmica (PEX/Plásticos)": "Thermal Deformation Inspection (PEX/Plastics)",
    "Evaluación Térmica en Cobre/Galvanizado": "Thermal Evaluation on Copper/Galvanized",
    "Prueba del Sistema de Drenaje (CPC §712.0)": "Drainage System Test (CPC §712.0)",
    "Prueba de Aire/Humo (Aprobada)": "Air/Smoke Test (Passed)",
    "Fuga de Gases de Alcantarillado Detectada": "Sewer Gas Leak Detected",
    "Deformación de Ventilaciones de Techo (Roof Vents)": "Deformation of Roof Vents",
    "Inspección Subterránea con Cámara CCTV": "Underground CCTV Camera Inspection",
    "Inspección Estructural (Soportes y Fijaciones)": "Structural Inspection (Supports and Hangers)",
    "Pérdida de Templado en Colgadores/Soportes": "Loss of Temper in Hangers/Supports",
    "Capacidad de Carga Comprometida por Fuego": "Load Capacity Compromised by Fire",
    "Daño a Cortafuegos (Firestops) en Penetraciones": "Damage to Firestops at Penetrations",
    "Cámara Térmica / Medición Láser Aplicada": "Thermal Camera / Laser Measurement Applied",
    "4. Evaluación Estado por Estado del Sistema (Post-Incendio)": "4. System State-by-State Evaluation (Post-Fire)",
    "Suministro de Agua Potable (CPC Capítulo 6)": "Potable Water Supply (CPC Chapter 6)",
    "Material Principal (Cobre/PEX/CPVC)": "Main Material (Copper/PEX/CPVC)",
    "Tubería Plástica Degradada Estructuralmente": "Structurally Degraded Plastic Piping",
    "Daño por Calor Extremo en Conexiones PEX": "Extreme Heat Damage on PEX Connections",
    "Tubería Metálica Comprometida": "Compromised Metallic Piping",
    "Aislamiento Térmico Destruido": "Thermal Insulation Destroyed",
    "Dispositivos de Prevención de Reflujo (Backflow)": "Backflow Prevention Devices",
    "Tipo/Ubicación/Requisito Santa Clara": "Type/Loc./Santa Clara Requirement",
    "Sellos de Goma Internos Dañados por Calor": "Internal Rubber Seals Heat Damaged",
    "Componentes Mecánicos Comprometidos": "Compromised Mechanical Components",
    "Requiere Recertificación Obligatoria": "Mandatory Recertification Required",
    "Falla en Prueba de Presión Diferencial": "Failed Differential Pressure Test",
    "Sistema de Gas Combustible (CPC Capítulo 12)": "Fuel Gas System (CPC Chapter 12)",
    "Ubicación Medidor / Material (CSST/Negro)": "Meter Location / Material (CSST/Black)",
    "Válvula de Cierre Sísmico Activada / Dañada": "Seismic Shut-off Valve Activated/Damaged",
    "Tubería CSST con Daño en Cubierta (Arcing)": "CSST Pipe with Cover Damage (Arcing)",
    "Reguladores de Presión Afectados por Fuego": "Pressure Regulators Affected by Fire",
    "Requiere Etiqueta Verde (Green Tag) de PG&E": "Requires PG&E Green Tag",
    "Drenaje, Desechos y Ventilación (DWV) (Cap. 7 y 9)": "Drain, Waste and Vent (DWV) (Chap. 7 & 9)",
    "Material (ABS/Hierro Fundido/PVC)": "Material (ABS/Cast Iron/PVC)",
    "Deformación Crítica en Tuberías ABS/PVC": "Critical Deformation in ABS/PVC Pipes",
    "Gases de Incendio Afectaron Ventilaciones": "Fire Gases Affected Vents",
    "Falla en Uniones con Bandas de Neopreno (No-Hub)": "Failure in Neoprene Band Joints (No-Hub)",
    "Líneas Colgadas Colapsadas por Falla de Soportes": "Hanging Lines Collapsed due to Support Failure",
    "Artefactos Comerciales (CPC Capítulos 4, 5 y 10)": "Commercial Appliances (CPC Chap. 4, 5, 10)",
    "Calentador / Trampa de Grasa": "Heater / Grease Trap",
    "Termostato de Boiler Dañado por Calor": "Heat Damaged Boiler Thermostat",
    "Válvula T&P (Alivio de Presión) Defectuosa": "Defective T&P (Pressure Relief) Valve",
    "Daño Estructural en Interceptor de Grasa": "Structural Damage in Grease Interceptor",
    "Falla en Sistema de Ventilación de Combustión": "Failure in Combustion Venting System",
    "Cumplimiento CALGreen (Título 24, Parte 11)": "CALGreen Compliance (Title 24, Part 11)",
    "Artefactos a Reemplazar": "Appliances to Replace",
    "Nuevos Fixtures Requieren Flujo Eficiente (<0.5 gpm)": "New Fixtures Require Efficient Flow (<0.5 gpm)",
    "Inodoros Comerciales deben ser Alta Eficiencia": "Commercial Toilets must be High Efficiency",
    "Aislamiento de Tuberías Requerido por Título 24": "Pipe Insulation Required by Title 24",
    "Cumple con Código Municipal Título 15 de Santa Clara": "Complies with Santa Clara Municipal Code Title 15",
    "5. Matriz de Daños, Conclusiones y Remediación": "5. Damage Matrix, Conclusions and Remediation",
    "Matriz de Daños (Impacto de Calor, Humo, Hollín, Agua)": "Damage Matrix (Impact of Heat, Smoke, Soot, Water)",
    "Liste los componentes que PASARON la inspección vs. los que requieren REPARACIÓN/REEMPLAZO inmediato.": "List components that PASSED inspection vs. those requiring immediate REPAIR/REPLACEMENT.",
    "Requerimiento de Permisos (Ciudad de Santa Clara / PG&E)": "Permit Requirements (City of Santa Clara / PG&E)",
    "Especifique si las reparaciones requerirán un Permiso de Plomería del Depto. de Desarrollo Comunitario o Green Tag de PG&E.": "Specify if repairs will require a Plumbing Permit from Community Development Dept or PG&E Green Tag.",
    "Declaración Formal de Seguridad": "Formal Safety Declaration",
    "INSEGURO - Sistema No Apto para Reocupación": "UNSAFE - System Unfit for Reoccupation",
    "PARCIALMENTE SEGURO - Con Restricciones de Uso": "PARTIALLY SAFE - With Usage Restrictions",
    "SEGURO - Sistema Pasa Pruebas y Código": "SAFE - System Passes Tests and Code",
    "Costo Estimado de Inspección/Remediación": "Estimated Inspection/Remediation Cost",
    "$ USD (Opcional)": "$ USD (Optional)",
    "7. Declaración Legal, Código Municipal y Firmas": "7. Legal Declaration, Municipal Code and Signatures",
    "CERTIFICACIÓN CSLB Y CÓDIGO MUNICIPAL DE SANTA CLARA:": "CSLB CERTIFICATION & SANTA CLARA MUNICIPAL CODE:",
    "Este documento constituye un Informe de Inspección Diagnóstica Técnica emitido por un Contratista con Licencia C-36 válida en California bajo los estándares de honestidad y competencia técnica de la CSLB. El técnico certifica que la evaluación cumple con la edición del California Plumbing Code (CPC) actualmente adoptada por el Título 15 del Código Municipal de la Ciudad de Santa Clara, incluyendo regulaciones del Lathrop Manteca Fire District / Santa Clara Fire Department.": "This document constitutes a Technical Diagnostic Inspection Report issued by a valid C-36 Licensed Contractor in California under CSLB standards of honesty and technical competence. The technician certifies that the evaluation complies with the California Plumbing Code (CPC) edition currently adopted by Title 15 of the Santa Clara Municipal Code, including Lathrop Manteca Fire District / Santa Clara Fire Department regulations.",
    "Firma del Contratista/Ingeniero (C-36/PE)": "Contractor/Engineer Signature (C-36/PE)",
    "Firma de Recibido (Propietario / Aseguradora)": "Received Signature (Owner / Insurance)",
    "Este documento NO es un contrato de construcción. NO incluye reparaciones físicas. Cualquier reparación, remediación o modificación recomendada requerirá un": "This document is NOT a construction contract. It does NOT include physical repairs. Any recommended repair, remediation, or modification will require a separate",
    "separado, sujeto a leyes de la CSLB, límites de anticipo (10% o $1,000 máximo) y advertencias de gravamen (Mechanic's Lien). Este reporte puede servir como base técnica para solicitar la etiqueta verde (green tag) ante PG&E o solicitar permisos de construcción, pero no garantiza aprobaciones de terceros.": "subject to CSLB laws, down payment limits (10% or $1,000 max), and Mechanic's Lien warnings. This report may serve as technical basis to request a PG&E green tag or construction permits, but does not guarantee third-party approvals."
};

const dictStart = 'const dict = {';
const dictEndStr = '};\\n\\n        let currentLang';

let dictBlock = html.substring(html.indexOf(dictStart), html.indexOf(dictEndStr) + 1);
let existingDictStr = '{' + dictBlock.substring('const dict = {'.length);
let existingDict = eval('(' + existingDictStr + ')');
let combined = Object.assign({}, existingDict, newTerms);

let newDictBlock = 'const dict = ' + JSON.stringify(combined, null, 12);
html = html.substring(0, html.indexOf(dictStart)) + newDictBlock + html.substring(html.indexOf(dictEndStr) + 1);

fs.writeFileSync('docs/plantilla_informe_diagnostico.html', html);
console.log('Update complete');
