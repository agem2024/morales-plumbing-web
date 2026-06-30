const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const newPrices = "const PB_SERVICE_PRICES = {\n" +
    "    \"svc_1\": { \"good\": 450, \"better\": 750, \"best\": 1250 },\n" +
    "    \"svc_2\": { \"good\": 12500, \"better\": 18500, \"best\": 28000 },\n" +
    "    \"svc_3\": { \"good\": 2800, \"better\": 4200, \"best\": 6500 },\n" +
    "    \"svc_4\": { \"good\": 950, \"better\": 1450, \"best\": 2200 },\n" +
    "    \"svc_5\": { \"good\": 350, \"better\": 550, \"best\": 850 },\n" +
    "    \"svc_6\": { \"good\": 8500, \"better\": 12000, \"best\": 18500 },\n" +
    "    \"svc_7\": { \"good\": 4800, \"better\": 6500, \"best\": 9500 },\n" +
    "    \"svc_8\": { \"good\": 1250, \"better\": 1850, \"best\": 3500 },\n" +
    "    \"svc_9\": { \"good\": 650, \"better\": 950, \"best\": 1850 },\n" +
    "    \"svc_10\": { \"good\": 550, \"better\": 950, \"best\": 1850 },\n" +
    "    \"svc_11\": { \"good\": 850, \"better\": 1250, \"best\": 1850 },\n" +
    "    \"svc_12\": { \"good\": 1250, \"better\": 2200, \"best\": 4500 },\n" +
    "    \"svc_13\": { \"good\": 1500, \"better\": 3500, \"best\": 8500 },\n" +
    "    \"svc_14\": { \"good\": 1250, \"better\": 2500, \"best\": 4500 },\n" +
    "    \"svc_15\": { \"good\": 15500, \"better\": 24500, \"best\": 38000 }\n" +
    "};";

appJs = appJs.replace(/const PB_SERVICE_PRICES = \{[\s\S]*?\};/, newPrices);

const newServices = "const PB_SERVICES = [\n" +
    "    { id: \"svc_1\", name: \"Detección Acústica y Térmica de Fugas\" },\n" +
    "    { id: \"svc_2\", name: \"Reemplazo Total de Tuberías (Full House Repipe)\" },\n" +
    "    { id: \"svc_3\", name: \"Filtración y Ablandamiento de Agua de Toda la Casa\" },\n" +
    "    { id: \"svc_4\", name: \"Válvula Inteligente y de Cierre (Smart Shutoff)\" },\n" +
    "    { id: \"svc_5\", name: \"Inspección de Drenaje por Cámara y Mapeo\" },\n" +
    "    { id: \"svc_6\", name: \"Reemplazo de Alcantarillado Sin Zanja (Trenchless)\" },\n" +
    "    { id: \"svc_7\", name: \"Instalación de Calentador de Agua Sin Tanque (Tankless)\" },\n" +
    "    { id: \"svc_8\", name: \"Instalación y Extensión de Línea de Gas\" },\n" +
    "    { id: \"svc_9\", name: \"Lavado a Alta Presión (Hydro-Jetting)\" },\n" +
    "    { id: \"svc_10\", name: \"Actualización de Accesorios (Grifería e Inodoros)\" },\n" +
    "    { id: \"svc_11\", name: \"Instalación de Válvula Sísmica de Cierre Automático\" },\n" +
    "    { id: \"svc_12\", name: \"Prueba e Instalación de Ensamblaje Antirretorno (Backflow)\" },\n" +
    "    { id: \"svc_13\", name: \"Mantenimiento y Reconstrucción de Caldera Comercial\" },\n" +
    "    { id: \"svc_14\", name: \"Instalación de Sistema de Bomba de Sumidero (Sump Pump)\" },\n" +
    "    { id: \"svc_15\", name: \"Infraestructura de Repipe de Cobre Élite\" }\n" +
    "];";

appJs = appJs.replace(/const PB_SERVICES = \[[\s\S]*?\];/, newServices);

appJs = appJs.replace(/"pb_svc_2_good_time":\s*"[^"]*",/g, '"pb_svc_2_good_time": "5-7 Días",');
appJs = appJs.replace(/"pb_svc_2_better_time":\s*"[^"]*",/g, '"pb_svc_2_better_time": "7-10 Días",');
appJs = appJs.replace(/"pb_svc_2_best_time":\s*"[^"]*",/g, '"pb_svc_2_best_time": "10-14 Días",');
appJs = appJs.replace(/"pb_svc_15_good_time":\s*"[^"]*",/g, '"pb_svc_15_good_time": "7-10 Días",');
appJs = appJs.replace(/"pb_svc_15_better_time":\s*"[^"]*",/g, '"pb_svc_15_better_time": "10-14 Días",');
appJs = appJs.replace(/"pb_svc_15_best_time":\s*"[^"]*",/g, '"pb_svc_15_best_time": "14-21 Días",');

fs.writeFileSync('app.js', appJs);
console.log("Fixed prices and services");
