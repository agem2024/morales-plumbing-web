const fs = require('fs');
const appJsPath = './app.js';
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const newKeys = {
  en: {
    "swh_title": "Water Heater Services",
    "swh_subtitle": "Installation, Replacement & Upgrades",
    "swh_intro": "Explore the different types of water heating technology available for your home and discover our professional installation process.",
    "swh_tankless_title": "Tankless Water Heaters",
    "swh_tankless_comic_1": "Endless hot water on demand.",
    "swh_tankless_comic_2": "Wall-mounted, saving valuable garage space.",
    "swh_tankless_comic_3": "Highly energy efficient, only heats when needed.",
    "swh_gas_title": "Standard Gas Heaters",
    "swh_gas_comic_1": "Reliable and traditional tank storage.",
    "swh_gas_comic_2": "Fast recovery times for heavy household usage.",
    "swh_gas_comic_3": "Note: Phasing out in 2027 under BAAQMD rules.",
    "swh_hp_title": "Hybrid Heat Pumps",
    "swh_hp_comic_1": "The ultimate future of zero-emission water heating.",
    "swh_hp_comic_2": "Extracts heat from ambient air, saving up to 70% energy.",
    "swh_hp_comic_3": "Qualifies for maximum government rebates.",
    "swh_process_title": "The Morales Installation Process",
    "swh_link_btn": "Types of Water Heaters & Installations"
  },
  es: {
    "swh_title": "Servicios de Calentadores de Agua",
    "swh_subtitle": "Instalación, Reemplazo y Actualizaciones",
    "swh_intro": "Explore los diferentes tipos de tecnología de calentamiento de agua disponibles para su hogar y descubra nuestro proceso de instalación.",
    "swh_tankless_title": "Calentadores sin Tanque (Tankless)",
    "swh_tankless_comic_1": "Agua caliente infinita a demanda.",
    "swh_tankless_comic_2": "Montaje en pared, ahorrando valioso espacio.",
    "swh_tankless_comic_3": "Alta eficiencia energética, calienta solo al usarse.",
    "swh_gas_title": "Calentadores de Gas Estándar",
    "swh_gas_comic_1": "Almacenamiento tradicional y confiable.",
    "swh_gas_comic_2": "Tiempos rápidos de recuperación de temperatura.",
    "swh_gas_comic_3": "Nota: Prohibición de venta en 2027 (Ley BAAQMD).",
    "swh_hp_title": "Bombas de Calor Híbridas",
    "swh_hp_comic_1": "El futuro definitivo de calentamiento sin emisiones.",
    "swh_hp_comic_2": "Extrae calor del aire, ahorrando hasta 70% de energía.",
    "swh_hp_comic_3": "Califica para los máximos reembolsos del gobierno.",
    "swh_process_title": "El Proceso de Instalación Morales",
    "swh_link_btn": "Tipos de Calentadores e Instalaciones"
  },
  zh: {
    "swh_title": "热水器服务",
    "swh_subtitle": "安装、更换和升级",
    "swh_intro": "探索适用于您家中的不同类型的热水技术，并了解我们的专业安装流程。",
    "swh_tankless_title": "无罐热水器",
    "swh_tankless_comic_1": "随时提供无限热水。",
    "swh_tankless_comic_2": "壁挂式，节省宝贵的车库空间。",
    "swh_tankless_comic_3": "高效节能，仅在使用时加热。",
    "swh_gas_title": "标准燃气热水器",
    "swh_gas_comic_1": "可靠的传统水箱储水。",
    "swh_gas_comic_2": "大量用水的快速恢复时间。",
    "swh_gas_comic_3": "注意：根据 BAAQMD 规定，2027 年将被淘汰。",
    "swh_hp_title": "混合热泵",
    "swh_hp_comic_1": "零排放热水技术的终极未来。",
    "swh_hp_comic_2": "从空气中提取热量，最高节省 70% 能源。",
    "swh_hp_comic_3": "有资格获得最高的政府补贴。",
    "swh_process_title": "Morales 安装流程",
    "swh_link_btn": "热水器及安装类型"
  },
  tl: {
    "swh_title": "Mga Serbisyo sa Water Heater",
    "swh_subtitle": "Pag-install, Pagpapalit at Pag-upgrade",
    "swh_intro": "Tuklasin ang iba't ibang uri ng teknolohiya ng water heater para sa iyong tahanan at alamin ang aming propesyonal na proseso ng pag-install.",
    "swh_tankless_title": "Tankless Water Heaters",
    "swh_tankless_comic_1": "Walang katapusang mainit na tubig kapag kailangan.",
    "swh_tankless_comic_2": "Naka-mount sa dingding, nakakatipid sa espasyo.",
    "swh_tankless_comic_3": "Mataas ang energy efficiency, umiinit lang kapag ginagamit.",
    "swh_gas_title": "Mga Standard Gas Heaters",
    "swh_gas_comic_1": "Maaasahang tradisyonal na tangke ng imbakan.",
    "swh_gas_comic_2": "Mabilis na pag-init para sa madalas na paggamit.",
    "swh_gas_comic_3": "Tandaan: Tatanggalin sa 2027 sa ilalim ng mga batas ng BAAQMD.",
    "swh_hp_title": "Hybrid Heat Pumps",
    "swh_hp_comic_1": "Ang hinaharap ng zero-emission na water heating.",
    "swh_hp_comic_2": "Kumukuha ng init mula sa hangin, nakakatipid ng 70% na enerhiya.",
    "swh_hp_comic_3": "Kwalipikado para sa pinakamataas na rebate ng gobyerno.",
    "swh_process_title": "Ang Proseso ng Pag-install ng Morales",
    "swh_link_btn": "Mga Uri ng Water Heater at Pag-install"
  },
  vi: {
    "swh_title": "Dịch vụ Máy Nước Nóng",
    "swh_subtitle": "Lắp đặt, Thay thế & Nâng cấp",
    "swh_intro": "Khám phá các loại công nghệ làm nóng nước khác nhau cho ngôi nhà của bạn và tìm hiểu quy trình lắp đặt chuyên nghiệp của chúng tôi.",
    "swh_tankless_title": "Máy Nước Nóng Không Bình Chứa (Tankless)",
    "swh_tankless_comic_1": "Nước nóng vô tận theo yêu cầu.",
    "swh_tankless_comic_2": "Treo tường, tiết kiệm không gian nhà để xe.",
    "swh_tankless_comic_3": "Tiết kiệm năng lượng cao, chỉ làm nóng khi cần.",
    "swh_gas_title": "Máy Nước Nóng Gas Tiêu Chuẩn",
    "swh_gas_comic_1": "Bình chứa nước truyền thống và đáng tin cậy.",
    "swh_gas_comic_2": "Thời gian phục hồi nhanh chóng cho gia đình đông người.",
    "swh_gas_comic_3": "Lưu ý: Bị loại bỏ dần vào năm 2027 theo luật BAAQMD.",
    "swh_hp_title": "Bơm Nhiệt Lai (Hybrid Heat Pump)",
    "swh_hp_comic_1": "Tương lai tối thượng của hệ thống làm nóng nước không phát thải.",
    "swh_hp_comic_2": "Hút nhiệt từ không khí, tiết kiệm lên đến 70% năng lượng.",
    "swh_hp_comic_3": "Đủ điều kiện nhận trợ cấp cao nhất của chính phủ.",
    "swh_process_title": "Quy Trình Lắp Đặt Của Morales",
    "swh_link_btn": "Các Loại Máy Nước Nóng & Lắp Đặt"
  }
};

let modified = false;
for (const lang of Object.keys(newKeys)) {
    const langPattern = new RegExp(`("${lang}"\\s*:\\s*\\{)`);
    if (langPattern.test(appJsContent)) {
        let injectString = '';
        for (const [key, value] of Object.entries(newKeys[lang])) {
            injectString += `\n        "${key}": "${value.replace(/"/g, '\\"')}",`;
        }
        appJsContent = appJsContent.replace(langPattern, `$1${injectString}`);
        modified = true;
    }
}

if (modified) {
    fs.writeFileSync(appJsPath, appJsContent, 'utf8');
}
