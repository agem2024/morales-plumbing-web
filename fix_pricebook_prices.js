const fs = require('fs');

let html = fs.readFileSync('docs/pricebook.html', 'utf8');

const regexRender = /const services = \[\s*\{[\s\S]*?\];/;
const newServicesArray = "const services = [\n" +
    "    { id: 1, code: \"OR-DIAG-001\", nameKey: \"pb_svc_1_name\", userDescKey: \"pb_svc_1_user\", techDescKey: \"pb_svc_1_tech\", category: \"Diagnostic\", image: \"../assets/icon_plumber_ai.png\" },\n" +
    "    { id: 2, code: \"OR-ENG-002\", nameKey: \"pb_svc_2_name\", userDescKey: \"pb_svc_2_user\", techDescKey: \"pb_svc_2_tech\", category: \"Engineering\", image: \"../assets/comic_copper.png\" },\n" +
    "    { id: 3, code: \"OR-ECO-003\", nameKey: \"pb_svc_3_name\", userDescKey: \"pb_svc_3_user\", techDescKey: \"pb_svc_3_tech\", category: \"Eco\", image: \"../assets/comic_treatment.png\" },\n" +
    "    { id: 4, code: \"OR-SAFE-004\", nameKey: \"pb_svc_4_name\", userDescKey: \"pb_svc_4_user\", techDescKey: \"pb_svc_4_tech\", category: \"Safety\", image: \"../assets/icon_plumber_sat.png\" },\n" +
    "    { id: 5, code: \"OR-DIAG-005\", nameKey: \"pb_svc_5_name\", userDescKey: \"pb_svc_5_user\", techDescKey: \"pb_svc_5_tech\", category: \"Diagnostic\", image: \"../assets/comic_septic.png\" },\n" +
    "    { id: 6, code: \"OR-ENG-006\", nameKey: \"pb_svc_6_name\", userDescKey: \"pb_svc_6_user\", techDescKey: \"pb_svc_6_tech\", category: \"Engineering\", image: \"../assets/comic_construction.png\" },\n" +
    "    { id: 7, code: \"OR-ECO-007\", nameKey: \"pb_svc_7_name\", userDescKey: \"pb_svc_7_user\", techDescKey: \"pb_svc_7_tech\", category: \"Eco\", image: \"../assets/comic_heaters.png\" },\n" +
    "    { id: 8, code: \"OR-SAFE-008\", nameKey: \"pb_svc_8_name\", userDescKey: \"pb_svc_8_user\", techDescKey: \"pb_svc_8_tech\", category: \"Safety\", image: \"../assets/comic_expansion.png\" },\n" +
    "    { id: 9, code: \"OR-DIAG-009\", nameKey: \"pb_svc_9_name\", userDescKey: \"pb_svc_9_user\", techDescKey: \"pb_svc_9_tech\", category: \"Diagnostic\", image: \"../assets/icon_plumber_biz.png\" },\n" +
    "    { id: 10, code: \"OR-ENG-010\", nameKey: \"pb_svc_10_name\", userDescKey: \"pb_svc_10_user\", techDescKey: \"pb_svc_10_tech\", category: \"Engineering\", image: \"../assets/icon_plumber_eco.png\" },\n" +
    "    { id: 11, code: \"OR-ECO-011\", nameKey: \"pb_svc_11_name\", userDescKey: \"pb_svc_11_user\", techDescKey: \"pb_svc_11_tech\", category: \"Eco\", image: \"../assets/service_tankless.png\" },\n" +
    "    { id: 12, code: \"OR-SAFE-012\", nameKey: \"pb_svc_12_name\", userDescKey: \"pb_svc_12_user\", techDescKey: \"pb_svc_12_tech\", category: \"Safety\", image: \"../assets/comic_shield.png\" },\n" +
    "    { id: 13, code: \"OR-ENG-013\", nameKey: \"pb_svc_13_name\", userDescKey: \"pb_svc_13_user\", techDescKey: \"pb_svc_13_tech\", category: \"Engineering\", image: \"../assets/comic_tiers.png\" },\n" +
    "    { id: 14, code: \"OR-ECO-014\", nameKey: \"pb_svc_14_name\", userDescKey: \"pb_svc_14_user\", techDescKey: \"pb_svc_14_tech\", category: \"Eco\", image: \"../assets/comic_harvest.png\" },\n" +
    "    { id: 15, code: \"OR-SAFE-015\", nameKey: \"pb_svc_15_name\", userDescKey: \"pb_svc_15_user\", techDescKey: \"pb_svc_15_tech\", category: \"Safety\", image: \"../assets/comic_terms.png\" }\n" +
"].map(s => {\n" +
"    if (typeof PB_SERVICE_PRICES !== 'undefined' && PB_SERVICE_PRICES['svc_' + s.id]) {\n" +
"        s.price_good = \"$\" + PB_SERVICE_PRICES['svc_' + s.id].good.toLocaleString();\n" +
"        s.price_better = \"$\" + PB_SERVICE_PRICES['svc_' + s.id].better.toLocaleString();\n" +
"        s.price_best = \"$\" + PB_SERVICE_PRICES['svc_' + s.id].best.toLocaleString();\n" +
"    } else {\n" +
"        s.price_good = \"$0\"; s.price_better = \"$0\"; s.price_best = \"$0\";\n" +
"    }\n" +
"    return s;\n" +
"});";

html = html.replace(regexRender, newServicesArray);

const renderRegex = /<a href="service\.html\?id=\$\{s\.id\}"[^>]*>[^<]*<\/a>[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>)/;
const replacement = "<a href=\"service.html?id=${s.id}\" data-i18n=\"pb_btn_details\" style=\"display: inline-block; width: 100%; text-align: center; margin-top: 1.5rem; padding: 12px; background: rgba(0, 245, 255, 0.1); border: 1px solid var(--neon-cyan); color: var(--neon-cyan); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95em; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;\" onmouseover=\"this.style.background='rgba(0, 245, 255, 0.2)'; this.style.boxShadow='0 0 15px rgba(0,245,255,0.3)';\" onmouseout=\"this.style.background='rgba(0, 245, 255, 0.1)'; this.style.boxShadow='none';\">Ver Detalle Técnico y Comercial</a>\n" +
"                            <a href=\"proceso_svc_${s.id}_cliente.html\" data-i18n=\"pb_btn_comic_repipe\" style=\"display: inline-block; width: 100%; text-align: center; margin-top: 0.5rem; padding: 12px; background: rgba(255, 140, 0, 0.1); border: 1px solid var(--neon-orange); color: var(--neon-orange); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95em; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;\" onmouseover=\"this.style.background='rgba(255, 140, 0, 0.2)'; this.style.boxShadow='0 0 15px rgba(255,140,0,0.3)';\" onmouseout=\"this.style.background='rgba(255, 140, 0, 0.1)'; this.style.boxShadow='none';\">Ver Guía Ilustrada Paso a Paso</a>";

html = html.replace(renderRegex, replacement);

fs.writeFileSync('docs/pricebook.html', html);
console.log("Updated pricebook to dynamically use PB_SERVICE_PRICES and link all comics.");
