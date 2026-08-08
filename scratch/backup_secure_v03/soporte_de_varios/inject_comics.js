const fs = require('fs');

const comicReplacements = {
    "en": {
        "promo_tt_good_comic_1": "1. Disconnect, drain, and remove the bulky old tank water heater.",
        "promo_tt_good_comic_2": "2. Mount sleek Navien unit, install new PVC venting and dedicated 199K BTU gas line.",
        "promo_tt_good_comic_3": "3. Calibrate internal sensors for optimal flow and temperature control.",
        "promo_tt_good_comic_4": "4. Endless hot water restored, saving massive space in the garage.",
        "promo_ttt_better_comic_1": "1. Safely remove the outdated, calcified tankless unit.",
        "promo_ttt_better_comic_2": "2. Install anti-scale water filter to protect the new dual heat exchangers.",
        "promo_ttt_best_comic_1": "3. Install heavy-duty PRV to regulate whole-house water pressure.",
        "promo_ttt_best_comic_4": "4. Premium Navien system online with Smart WiFi control and lifetime peace of mind."
    },
    "es": {
        "promo_tt_good_comic_1": "1. Desconectar, drenar y retirar el voluminoso calentador de tanque viejo.",
        "promo_tt_good_comic_2": "2. Montar unidad Navien, instalar nueva ventilación PVC y línea de gas dedicada de 199K BTU.",
        "promo_tt_good_comic_3": "3. Calibrar sensores internos para control óptimo de flujo y temperatura.",
        "promo_tt_good_comic_4": "4. Agua caliente infinita restaurada, ahorrando espacio masivo en el garaje.",
        "promo_ttt_better_comic_1": "1. Retirar de forma segura la unidad tankless obsoleta y calcificada.",
        "promo_ttt_better_comic_2": "2. Instalar filtro de agua anti-sarro para proteger los nuevos intercambiadores de calor duales.",
        "promo_ttt_best_comic_1": "3. Instalar válvula PRV de trabajo pesado para regular la presión del agua en toda la casa.",
        "promo_ttt_best_comic_4": "4. Sistema Navien Premium en línea con control Smart WiFi y tranquilidad de por vida."
    },
    "zh": {
        "promo_tt_good_comic_1": "1. 断开、排空并拆除笨重的旧水箱式热水器。",
        "promo_tt_good_comic_2": "2. 安装时尚的 Navien 装置，安装新的 PVC 通风管和专用的 199K BTU 燃气管线。",
        "promo_tt_good_comic_3": "3. 校准内部传感器以实现最佳流量和温度控制。",
        "promo_tt_good_comic_4": "4. 恢复源源不断的无限热水，节省车库大量空间。",
        "promo_ttt_better_comic_1": "1. 安全拆除过时、钙化的旧无水箱装置。",
        "promo_ttt_better_comic_2": "2. 安装防垢滤水器以保护新的双热交换器。",
        "promo_ttt_best_comic_1": "3. 安装重型 PRV（减压阀）以调节全屋水压。",
        "promo_ttt_best_comic_4": "4. Navien 优质系统上线，配备智能 WiFi 控制，让您终身无忧。"
    },
    "tl": {
        "promo_tt_good_comic_1": "1. Idiskonekta, i-drain, at tanggalin ang lumang bulky tank water heater.",
        "promo_tt_good_comic_2": "2. I-mount ang bagong Navien unit, magkabit ng bagong PVC venting at dedicated 199K BTU gas line.",
        "promo_tt_good_comic_3": "3. I-calibrate ang internal sensors para sa pinakamainam na flow at temperature control.",
        "promo_tt_good_comic_4": "4. Naibalik ang walang katapusang hot water, nakatipid ng malaking espasyo sa garahe.",
        "promo_ttt_better_comic_1": "1. Ligtas na tanggalin ang luma at kalkipikadong tankless unit.",
        "promo_ttt_better_comic_2": "2. Mag-install ng anti-scale water filter upang maprotektahan ang mga bagong dual heat exchangers.",
        "promo_ttt_best_comic_1": "3. Mag-install ng heavy-duty PRV para makontrol ang water pressure ng buong bahay.",
        "promo_ttt_best_comic_4": "4. Premium Navien system online kasama ang Smart WiFi control para sa habambuhay na kapanatagan."
    },
    "vi": {
        "promo_tt_good_comic_1": "1. Ngắt kết nối, xả nước và tháo dỡ máy nước nóng có bình chứa cũ cồng kềnh.",
        "promo_tt_good_comic_2": "2. Gắn thiết bị Navien, lắp đặt ống thông hơi PVC mới và đường ống gas 199K BTU chuyên dụng.",
        "promo_tt_good_comic_3": "3. Hiệu chỉnh các cảm biến bên trong để kiểm soát lưu lượng và nhiệt độ tối ưu.",
        "promo_tt_good_comic_4": "4. Phục hồi hệ thống nước nóng vô tận, tiết kiệm không gian lớn trong nhà để xe.",
        "promo_ttt_better_comic_1": "1. Tháo dỡ an toàn thiết bị không bình chứa đã cũ kỹ và đóng cặn.",
        "promo_ttt_better_comic_2": "2. Lắp đặt bộ lọc nước chống cặn để bảo vệ bộ trao đổi nhiệt kép mới.",
        "promo_ttt_best_comic_1": "3. Lắp đặt van điều áp (PRV) hạng nặng để điều chỉnh áp suất nước toàn bộ ngôi nhà.",
        "promo_ttt_best_comic_4": "4. Hệ thống Navien Cao cấp đã trực tuyến với điều khiển WiFi Thông minh và sự an tâm trọn đời."
    }
};

let appJs = fs.readFileSync('app.js', 'utf8');

for (const lang of ["en", "es", "zh", "tl", "vi"]) {
    let injectionStr = "";
    for (const key in comicReplacements[lang]) {
        injectionStr += `\n        "${key}": "${comicReplacements[lang][key]}",`;
    }
    
    // Safely inject right before the closing brace of the language block
    const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?)(\\n\\s*\\},?)`, 'g');
    appJs = appJs.replace(regex, `$1${injectionStr}$2`);
}

fs.writeFileSync('app.js', appJs);
console.log('Successfully injected comic translations into app.js');
