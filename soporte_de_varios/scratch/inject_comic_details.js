const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const translations = {
  en: {
    promo_wp_good_comic_1: "1. Safe removal and disposal of old gas heater.",
    promo_wp_good_comic_2: "2. Installation of standard hybrid heat pump.",
    promo_wp_good_comic_3: "3. Ensures full compliance with 2027 BAAQMD regulations.",
    promo_wp_good_comic_4: "4. System active: Eco-friendly and reliable hot water.",
    
    promo_wp_better_comic_1: "1. Premium ProTerra unit installation.",
    promo_wp_better_comic_2: "2. Tech team connects system to home WiFi.",
    promo_wp_better_comic_3: "3. Activation of integrated water leak detection sensors.",
    promo_wp_better_comic_4: "4. Client enjoys total control and alerts via mobile app.",
    
    promo_wp_best_comic_1: "1. Electrical panel assessment and required upgrades.",
    promo_wp_best_comic_2: "2. Heavy-duty 80-gallon AeroTherm placement for max capacity.",
    promo_wp_best_comic_3: "3. Dual-anode protection and ultra-quiet sound dampening active.",
    promo_wp_best_comic_4: "4. Ultimate smart home integration and maximum property value."
  },
  es: {
    promo_wp_good_comic_1: "1. Retiro seguro y desecho del antiguo calentador a gas.",
    promo_wp_good_comic_2: "2. Instalación de bomba de calor híbrida estándar.",
    promo_wp_good_comic_3: "3. Garantiza el cumplimiento de las normativas BAAQMD 2027.",
    promo_wp_good_comic_4: "4. Sistema activo: Agua caliente ecológica y confiable.",
    
    promo_wp_better_comic_1: "1. Instalación de la unidad Premium ProTerra.",
    promo_wp_better_comic_2: "2. El equipo técnico conecta el sistema al WiFi del hogar.",
    promo_wp_better_comic_3: "3. Activación de los sensores integrados de detección de fugas.",
    promo_wp_better_comic_4: "4. El cliente disfruta de control total y alertas mediante la app.",
    
    promo_wp_best_comic_1: "1. Evaluación del panel eléctrico y actualizaciones necesarias.",
    promo_wp_best_comic_2: "2. Colocación del equipo AeroTherm de 80 galones para máxima capacidad.",
    promo_wp_best_comic_3: "3. Protección de doble ánodo y tecnología de operación ultra silenciosa.",
    promo_wp_best_comic_4: "4. Máxima integración domótica y aumento del valor de la propiedad."
  },
  zh: {
    promo_wp_good_comic_1: "1. 安全拆除和处理旧燃气热水器。",
    promo_wp_good_comic_2: "2. 安装标准混合热泵。",
    promo_wp_good_comic_3: "3. 确保完全符合 2027 BAAQMD 法规。",
    promo_wp_good_comic_4: "4. 系统运行：环保且可靠的热水。",
    
    promo_wp_better_comic_1: "1. 安装高级 ProTerra 装置。",
    promo_wp_better_comic_2: "2. 技术团队将系统连接到家庭 WiFi。",
    promo_wp_better_comic_3: "3. 激活集成的漏水检测传感器。",
    promo_wp_better_comic_4: "4. 客户通过移动应用程序享受完全控制和警报。",
    
    promo_wp_best_comic_1: "1. 配电盘评估和必要的升级。",
    promo_wp_best_comic_2: "2. 安置大容量 80 加仑 AeroTherm 以获得最大容量。",
    promo_wp_best_comic_3: "3. 激活双阳极保护和超静音减震。",
    promo_wp_best_comic_4: "4. 终极智能家居集成，最大化房产价值。"
  },
  tl: {
    promo_wp_good_comic_1: "1. Ligtas na pag-alis at pagtatapon ng lumang gas heater.",
    promo_wp_good_comic_2: "2. Pag-install ng standard hybrid heat pump.",
    promo_wp_good_comic_3: "3. Tinitiyak ang buong pagsunod sa mga regulasyon ng 2027 BAAQMD.",
    promo_wp_good_comic_4: "4. Aktibo ang system: Eco-friendly at maaasahang mainit na tubig.",
    
    promo_wp_better_comic_1: "1. Pag-install ng Premium ProTerra unit.",
    promo_wp_better_comic_2: "2. Ikinokonekta ng tech team ang system sa home WiFi.",
    promo_wp_better_comic_3: "3. Pag-activate ng mga integrated water leak detection sensor.",
    promo_wp_better_comic_4: "4. Natatamasa ng kliyente ang kabuuang kontrol at mga alerto sa pamamagitan ng mobile app.",
    
    promo_wp_best_comic_1: "1. Pagsusuri ng electrical panel at mga kinakailangang pag-upgrade.",
    promo_wp_best_comic_2: "2. Paglalagay ng heavy-duty na 80-gallon na AeroTherm para sa maximum na kapasidad.",
    promo_wp_best_comic_3: "3. Proteksyon ng dual-anode at aktibo ang ultra-quiet sound dampening.",
    promo_wp_best_comic_4: "4. Ultimate smart home integration at pinakamataas na halaga ng ari-arian."
  },
  vi: {
    promo_wp_good_comic_1: "1. Tháo dỡ và xử lý an toàn máy nước nóng gas cũ.",
    promo_wp_good_comic_2: "2. Lắp đặt máy bơm nhiệt hybrid tiêu chuẩn.",
    promo_wp_good_comic_3: "3. Đảm bảo tuân thủ đầy đủ các quy định BAAQMD năm 2027.",
    promo_wp_good_comic_4: "4. Hệ thống hoạt động: Nước nóng thân thiện với môi trường và đáng tin cậy.",
    
    promo_wp_better_comic_1: "1. Lắp đặt thiết bị ProTerra cao cấp.",
    promo_wp_better_comic_2: "2. Đội ngũ kỹ thuật kết nối hệ thống với WiFi tại nhà.",
    promo_wp_better_comic_3: "3. Kích hoạt cảm biến phát hiện rò rỉ nước tích hợp.",
    promo_wp_better_comic_4: "4. Khách hàng tận hưởng quyền kiểm soát toàn bộ và cảnh báo thông qua ứng dụng di động.",
    
    promo_wp_best_comic_1: "1. Đánh giá bảng điện và các nâng cấp cần thiết.",
    promo_wp_best_comic_2: "2. Lắp đặt AeroTherm 80 gallon chịu lực nặng cho công suất tối đa.",
    promo_wp_best_comic_3: "3. Bảo vệ anode kép và kích hoạt giảm âm thanh siêu êm.",
    promo_wp_best_comic_4: "4. Tích hợp nhà thông minh tối ưu và giá trị tài sản tối đa."
  }
};

for (const [lang, dict] of Object.entries(translations)) {
    let replacements = '';
    for (const [key, val] of Object.entries(dict)) {
        replacements += `, "${key}": "${val}"`;
    }
    const regex = new RegExp("('?\\\"?" + lang + "'?\\\"?\\\\s*:\\\\s*\\\\{[^}]*)(\\\\})", "s");
    code = code.replace(regex, "$1" + replacements + "\\n$2");
}

fs.writeFileSync('app.js', code);
console.log('Added comic narrative keys to app.js');
