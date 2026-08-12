const fs = require('fs');

const reqReplacements = {
    "en": {
        "req_hp_title": "Hybrid Heat Pump: Technical Requirements",
        "req_hp_elec": "Electrical & Spatial Requirements",
        "req_hp_1": "Dedicated 240V / 30-Amp electrical circuit (for most 50-80 gallon models).",
        "req_hp_2": "Minimum of 700 cubic feet of surrounding air space (unobstructed) for optimal heat exchange.",
        "req_hp_3": "Condensate drain line routed to a suitable drain or condensate pump.",
        "req_hp_4": "Clearance of at least 6 inches from the top of the unit for the air filter.",
        "req_hp_5": "Seismic strapping in upper and lower 1/3 of the tank.",
        "req_hp_6": "Thermal expansion tank installed on the cold water inlet.",
        "req_hp_7": "BAAQMD Rule 9-6 zero-emission standard compliance automatically met.",
        "req_code": "Code Compliance & Safety",
        "req_tt_title": "Tank to Tankless: Technical Requirements",
        "req_tt_gas": "Gas & Venting Infrastructure",
        "req_tt_1": "Requires a dedicated gas line capable of delivering 199,000 BTU/h (usually 3/4\" or larger).",
        "req_tt_2": "New Category III/IV stainless steel or Schedule 40 PVC venting directly through the roof or exterior wall.",
        "req_tt_3": "Standard 120V electrical outlet for the unit's digital panel and electronic ignition.",
        "req_tt_4": "Dedicated isolation valves for annual flushing and maintenance.",
        "req_tt_5": "Condensate neutralizer kit (if discharging into cast iron or public sewer).",
        "req_ttt_title": "Tankless to Tankless: Technical Requirements",
        "req_ttt_plumb": "Plumbing & Retrofit Considerations",
        "req_ttt_1": "Reuse of existing gas line assuming it currently meets 199,000 BTU/h demand.",
        "req_ttt_2": "Adapting existing PVC or concentric venting to match the new unit's exhaust collar.",
        "req_ttt_3": "Upgrading isolation valves if the old ones are heavily calcified or leaking.",
        "req_ttt_4": "Installation of a scale prevention filter to protect the new dual stainless steel heat exchangers.",
        "req_ttt_5": "Pressure regulating valve (PRV) testing to ensure house pressure doesn't exceed 80 PSI."
    },
    "es": {
        "req_hp_title": "Bomba de Calor Híbrida: Requerimientos Técnicos",
        "req_hp_elec": "Requisitos Eléctricos y de Espacio",
        "req_hp_1": "Circuito eléctrico dedicado de 240V / 30-Amp (para la mayoría de modelos de 50-80 galones).",
        "req_hp_2": "Mínimo de 700 pies cúbicos de espacio aéreo circundante para un óptimo intercambio de calor.",
        "req_hp_3": "Línea de drenaje de condensado dirigida a un desagüe adecuado o bomba de condensado.",
        "req_hp_4": "Espacio libre de al menos 6 pulgadas en la parte superior para el filtro de aire.",
        "req_hp_5": "Correas sísmicas en el tercio superior e inferior del tanque.",
        "req_hp_6": "Tanque de expansión térmica instalado en la entrada de agua fría.",
        "req_hp_7": "Cumplimiento automático del estándar de cero emisiones BAAQMD Regla 9-6.",
        "req_code": "Cumplimiento de Código y Seguridad",
        "req_tt_title": "Tanque a Tankless: Requerimientos Técnicos",
        "req_tt_gas": "Infraestructura de Gas y Ventilación",
        "req_tt_1": "Requiere una línea de gas dedicada capaz de entregar 199,000 BTU/h (generalmente 3/4\" o mayor).",
        "req_tt_2": "Nueva ventilación de acero inoxidable Categoría III/IV o PVC Cédula 40 directamente a través del techo o pared exterior.",
        "req_tt_3": "Tomacorriente estándar de 120V para el panel digital y encendido electrónico.",
        "req_tt_4": "Válvulas de aislamiento dedicadas para lavado anual y mantenimiento.",
        "req_tt_5": "Kit neutralizador de condensado (si descarga en hierro fundido o alcantarillado público).",
        "req_ttt_title": "Tankless a Tankless: Requerimientos Técnicos",
        "req_ttt_plumb": "Consideraciones de Plomería y Reequipamiento",
        "req_ttt_1": "Reutilización de la línea de gas existente asumiendo que cumple con la demanda de 199,000 BTU/h.",
        "req_ttt_2": "Adaptación de la ventilación PVC o concéntrica existente al collar de escape de la nueva unidad.",
        "req_ttt_3": "Actualización de válvulas de aislamiento si las antiguas están muy calcificadas o presentan fugas.",
        "req_ttt_4": "Instalación de un filtro anticalcáreo para proteger los nuevos intercambiadores de acero inoxidable duales.",
        "req_ttt_5": "Prueba de Válvula Reguladora de Presión (PRV) para asegurar que la presión de la casa no exceda los 80 PSI."
    },
    "zh": {
        "req_hp_title": "混合热泵：技术要求",
        "req_hp_elec": "电气和空间要求",
        "req_hp_1": "专用的240V / 30安培电路（适用于大多数50-80加仑型号）。",
        "req_hp_2": "至少700立方英尺的周围空气空间（无障碍物）以实现最佳热交换。",
        "req_hp_3": "冷凝水排放管连接到合适的排水管或冷凝泵。",
        "req_hp_4": "设备顶部至少留有6英寸的间隙以用于空气过滤器。",
        "req_hp_5": "水箱上部和下部1/3处的抗震绑带。",
        "req_hp_6": "冷水入口处安装的热膨胀罐。",
        "req_hp_7": "自动符合 BAAQMD 规则 9-6 零排放标准。",
        "req_code": "代码合规与安全",
        "req_tt_title": "有水箱到无水箱：技术要求",
        "req_tt_gas": "燃气和通风基础设施",
        "req_tt_1": "需要一条能够提供 199,000 BTU/h 的专用燃气管线（通常为 3/4\" 或更大）。",
        "req_tt_2": "直接穿过屋顶或外墙的新型 III/IV 类不锈钢或 Schedule 40 PVC 通风管。",
        "req_tt_3": "用于设备数字面板和电子点火的标准 120V 电源插座。",
        "req_tt_4": "用于年度冲洗和维护的专用隔离阀。",
        "req_tt_5": "冷凝水中和套件（如果排放到铸铁管或公共下水道中）。",
        "req_ttt_title": "无水箱到无水箱：技术要求",
        "req_ttt_plumb": "管道和改造注意事项",
        "req_ttt_1": "重新使用现有的燃气管线，假设其目前满足 199,000 BTU/h 的需求。",
        "req_ttt_2": "调整现有的 PVC 或同轴通风管以匹配新设备的排气口。",
        "req_ttt_3": "如果旧隔离阀严重钙化或漏水，则对其进行升级。",
        "req_ttt_4": "安装防垢过滤器以保护新的双不锈钢热交换器。",
        "req_ttt_5": "减压阀 (PRV) 测试以确保房屋水压不超过 80 PSI。"
    },
    "tl": {
        "req_hp_title": "Hybrid Heat Pump: Teknikal na Kinakailangan",
        "req_hp_elec": "Electrical at Spatial na Kinakailangan",
        "req_hp_1": "Nakalaang 240V / 30-Amp electrical circuit (para sa karamihan ng 50-80 galon models).",
        "req_hp_2": "Minimum na 700 cubic feet ng nakapaligid na air space para sa optimal na heat exchange.",
        "req_hp_3": "Condensate drain line na nakakonekta sa angkop na drain o condensate pump.",
        "req_hp_4": "Clearance na hindi bababa sa 6 na pulgada mula sa itaas para sa air filter.",
        "req_hp_5": "Seismic strapping sa itaas at ibabang 1/3 ng tanke.",
        "req_hp_6": "Thermal expansion tank na naka-install sa cold water inlet.",
        "req_hp_7": "Awtomatikong nakakatugon sa BAAQMD Rule 9-6 zero-emission standard.",
        "req_code": "Code Compliance at Kaligtasan",
        "req_tt_title": "Tank to Tankless: Teknikal na Kinakailangan",
        "req_tt_gas": "Gas at Venting Infrastructure",
        "req_tt_1": "Nangangailangan ng nakalaang linya ng gas na kayang maghatid ng 199,000 BTU/h.",
        "req_tt_2": "Bagong Category III/IV stainless steel o Schedule 40 PVC venting direkta sa bubong o pader.",
        "req_tt_3": "Standard 120V electrical outlet para sa digital panel ng unit at electronic ignition.",
        "req_tt_4": "Nakalaang isolation valves para sa taunang flushing at maintenance.",
        "req_tt_5": "Condensate neutralizer kit (kung ididiskarga sa cast iron o pampublikong imburnal).",
        "req_ttt_title": "Tankless to Tankless: Teknikal na Kinakailangan",
        "req_ttt_plumb": "Plumbing at Retrofit Considerations",
        "req_ttt_1": "Muling paggamit ng umiiral na gas line kung natutugunan nito ang 199,000 BTU/h demand.",
        "req_ttt_2": "Pag-angkop ng umiiral na PVC o concentric venting sa bagong unit.",
        "req_ttt_3": "Pag-upgrade ng isolation valves kung ang mga luma ay sobrang na-calcify o tumutulo.",
        "req_ttt_4": "Pag-install ng scale prevention filter upang maprotektahan ang bagong heat exchangers.",
        "req_ttt_5": "Pressure regulating valve (PRV) testing para matiyak na ang water pressure ay hindi lalampas sa 80 PSI."
    },
    "vi": {
        "req_hp_title": "Bơm nhiệt Hybrid: Yêu cầu kỹ thuật",
        "req_hp_elec": "Yêu cầu về Điện và Không gian",
        "req_hp_1": "Mạch điện 240V / 30-Amp chuyên dụng (đối với hầu hết các mẫu 50-80 gallon).",
        "req_hp_2": "Không gian không khí xung quanh tối thiểu 700 feet khối để trao đổi nhiệt tối ưu.",
        "req_hp_3": "Đường ống xả nước ngưng tụ được dẫn đến cống thoát nước hoặc máy bơm phù hợp.",
        "req_hp_4": "Khoảng trống ít nhất 6 inch ở phía trên thiết bị cho bộ lọc không khí.",
        "req_hp_5": "Dây đeo chống động đất ở 1/3 phía trên và dưới của bình chứa.",
        "req_hp_6": "Bình giãn nở nhiệt được lắp đặt ở đầu vào nước lạnh.",
        "req_hp_7": "Tự động đáp ứng tiêu chuẩn không phát thải BAAQMD Quy tắc 9-6.",
        "req_code": "Tuân thủ Quy tắc & An toàn",
        "req_tt_title": "Tank to Tankless: Yêu cầu kỹ thuật",
        "req_tt_gas": "Cơ sở hạ tầng Khí đốt & Thông hơi",
        "req_tt_1": "Yêu cầu đường ống gas chuyên dụng có khả năng cung cấp 199.000 BTU/h.",
        "req_tt_2": "Ống thông hơi bằng thép không gỉ loại III/IV mới hoặc ống PVC Schedule 40 trực tiếp qua mái hoặc tường.",
        "req_tt_3": "Ổ cắm điện 120V tiêu chuẩn cho bảng điều khiển kỹ thuật số và đánh lửa điện tử.",
        "req_tt_4": "Van cách ly chuyên dụng để xả và bảo trì hàng năm.",
        "req_tt_5": "Bộ trung hòa nước ngưng (nếu xả vào gang hoặc cống công cộng).",
        "req_ttt_title": "Tankless to Tankless: Yêu cầu kỹ thuật",
        "req_ttt_plumb": "Cân nhắc Hệ thống nước & Cải tạo",
        "req_ttt_1": "Tái sử dụng đường ống gas hiện có với giả định đáp ứng đủ 199.000 BTU/h.",
        "req_ttt_2": "Điều chỉnh ống thông hơi PVC hiện có để phù hợp với cổ xả của thiết bị mới.",
        "req_ttt_3": "Nâng cấp các van cách ly nếu các van cũ bị đóng cặn nghiêm trọng hoặc rò rỉ.",
        "req_ttt_4": "Lắp đặt bộ lọc chống đóng cặn để bảo vệ bộ trao đổi nhiệt mới.",
        "req_ttt_5": "Kiểm tra van điều áp (PRV) để đảm bảo áp suất nhà không vượt quá 80 PSI."
    }
};

let appJs = fs.readFileSync('app.js', 'utf8');
const langs = ["en", "es", "zh", "tl", "vi"];
let newAppJs = "";
let currentIdx = 0;

for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    const searchString = `"${lang}": {`;
    const startIdx = appJs.indexOf(searchString, currentIdx);
    
    let endIdx = appJs.indexOf('};', startIdx + 1);
    
    let langBlock = appJs.substring(startIdx, endIdx);
    
    let injectionStr = "";
    for (const key in reqReplacements[lang]) {
        injectionStr += `\n        "${key}": "${reqReplacements[lang][key]}",`;
    }
    
    // Inject before the end of the block
    langBlock = langBlock.replace(/\s*,?\s*$/, `,${injectionStr}\n    `);
    
    newAppJs += appJs.substring(currentIdx, startIdx);
    newAppJs += langBlock;
    currentIdx = endIdx;
}
newAppJs += appJs.substring(currentIdx);
fs.writeFileSync('app.js', newAppJs);
console.log('Successfully injected requirement strings into app.js');
