const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const swhReplacements = {
    "en": {
        "swh_title": "Water Heater Services",
        "swh_subtitle": "Installation, Replacement & Upgrades",
        "swh_intro": "Explore the different types of water heating technology available for your home and discover our professional installation process.",
        "swh_tankless_title": "Tankless Water Heaters",
        "swh_tankless_comic_1": "Endless hot water on demand.",
        "swh_tankless_comic_2": "Wall-mounted, saving valuable space.",
        "swh_tankless_comic_3": "Highly efficient, only heats when you need it.",
        "swh_gas_title": "Standard Gas Heaters",
        "swh_gas_comic_1": "Reliable and traditional tank storage.",
        "swh_gas_comic_2": "Fast recovery times for heavy usage.",
        "swh_gas_comic_3": "Note: Phasing out in 2027 under BAAQMD rules.",
        "swh_hp_title": "Hybrid Heat Pumps",
        "swh_hp_comic_1": "The future of zero-emission water heating.",
        "swh_hp_comic_2": "Extracts heat from the air, saving up to 70% energy.",
        "swh_hp_comic_3": "Qualifies for maximum government rebates.",
        "nav_hp_packages": "Heat Pump 2027 Mandate Packages",
        "nav_tt_upgrade": "Tank to Tankless Upgrade",
        "nav_ttt_replace": "Tankless to Tankless Replacement"
    },
    "es": {
        "swh_title": "Servicios de Calentadores de Agua",
        "swh_subtitle": "Instalación, Reemplazo y Mejoras",
        "swh_intro": "Explora los diferentes tipos de tecnología de calentamiento de agua disponibles para tu hogar y descubre nuestro proceso de instalación profesional.",
        "swh_tankless_title": "Calentadores sin Tanque (Tankless)",
        "swh_tankless_comic_1": "Agua caliente infinita a demanda.",
        "swh_tankless_comic_2": "Montado en la pared, ahorrando espacio valioso.",
        "swh_tankless_comic_3": "Alta eficiencia, solo calienta cuando lo necesitas.",
        "swh_gas_title": "Calentadores a Gas Estándar",
        "swh_gas_comic_1": "Almacenamiento en tanque confiable y tradicional.",
        "swh_gas_comic_2": "Tiempos de recuperación rápidos para uso intensivo.",
        "swh_gas_comic_3": "Nota: Serán eliminados en 2027 según normas BAAQMD.",
        "swh_hp_title": "Bombas de Calor Híbridas (Heat Pumps)",
        "swh_hp_comic_1": "El futuro del calentamiento de agua sin emisiones.",
        "swh_hp_comic_2": "Extrae el calor del aire, ahorrando hasta un 70% de energía.",
        "swh_hp_comic_3": "Califica para los máximos reembolsos del gobierno.",
        "nav_hp_packages": "Paquetes de Bomba de Calor 2027",
        "nav_tt_upgrade": "Actualización de Tanque a Tankless",
        "nav_ttt_replace": "Reemplazo de Tankless a Tankless"
    },
    "zh": {
        "swh_title": "热水器服务",
        "swh_subtitle": "安装、更换和升级",
        "swh_intro": "探索适合您家庭的不同类型的热水技术，并了解我们的专业安装流程。",
        "swh_tankless_title": "无水箱热水器",
        "swh_tankless_comic_1": "即需即用的无限热水。",
        "swh_tankless_comic_2": "壁挂式，节省宝贵空间。",
        "swh_tankless_comic_3": "高效，仅在需要时加热。",
        "swh_gas_title": "标准燃气热水器",
        "swh_gas_comic_1": "可靠且传统的储水箱。",
        "swh_gas_comic_2": "适合大量使用的快速恢复时间。",
        "swh_gas_comic_3": "注意：根据BAAQMD规定将于2027年逐步淘汰。",
        "swh_hp_title": "混合热泵热水器",
        "swh_hp_comic_1": "零排放热水技术的未来。",
        "swh_hp_comic_2": "从空气中提取热量，节省高达70%的能源。",
        "swh_hp_comic_3": "符合最高政府退税条件。",
        "nav_hp_packages": "2027热泵授权套餐",
        "nav_tt_upgrade": "有水箱到无水箱升级",
        "nav_ttt_replace": "无水箱到无水箱更换"
    },
    "tl": {
        "swh_title": "Mga Serbisyo ng Water Heater",
        "swh_subtitle": "Instalasyon, Pagpapalit, at Pag-upgrade",
        "swh_intro": "Galugarin ang iba't ibang uri ng teknolohiya sa pagpainit ng tubig na available para sa iyong tahanan at tuklasin ang aming propesyonal na proseso ng instalasyon.",
        "swh_tankless_title": "Tankless Water Heaters",
        "swh_tankless_comic_1": "Walang katapusang hot water on demand.",
        "swh_tankless_comic_2": "Wall-mounted, nakakatipid sa espasyo.",
        "swh_tankless_comic_3": "Mataas ang efficiency, umiinit lamang kapag kailangan.",
        "swh_gas_title": "Standard Gas Heaters",
        "swh_gas_comic_1": "Maaasahan at tradisyonal na imbakan ng tangke.",
        "swh_gas_comic_2": "Mabilis na pag-init para sa mabigat na paggamit.",
        "swh_gas_comic_3": "Tandaan: Tatanggalin sa 2027 ayon sa BAAQMD rules.",
        "swh_hp_title": "Hybrid Heat Pumps",
        "swh_hp_comic_1": "Ang hinaharap ng zero-emission water heating.",
        "swh_hp_comic_2": "Kumukuha ng init mula sa hangin, nakakatipid hanggang 70% enerhiya.",
        "swh_hp_comic_3": "Kwalipikado para sa pinakamataas na government rebates.",
        "nav_hp_packages": "Heat Pump 2027 Mandate Packages",
        "nav_tt_upgrade": "Tank to Tankless Upgrade",
        "nav_ttt_replace": "Tankless to Tankless Replacement"
    },
    "vi": {
        "swh_title": "Dịch vụ máy nước nóng",
        "swh_subtitle": "Lắp đặt, Thay thế & Nâng cấp",
        "swh_intro": "Khám phá các loại công nghệ làm nóng nước khác nhau có sẵn cho ngôi nhà của bạn và quy trình lắp đặt chuyên nghiệp của chúng tôi.",
        "swh_tankless_title": "Máy nước nóng không bình chứa",
        "swh_tankless_comic_1": "Nước nóng vô tận theo yêu cầu.",
        "swh_tankless_comic_2": "Treo tường, tiết kiệm không gian quý giá.",
        "swh_tankless_comic_3": "Hiệu suất cao, chỉ làm nóng khi bạn cần.",
        "swh_gas_title": "Máy nước nóng gas tiêu chuẩn",
        "swh_gas_comic_1": "Bình chứa truyền thống và đáng tin cậy.",
        "swh_gas_comic_2": "Thời gian phục hồi nhanh khi sử dụng nhiều.",
        "swh_gas_comic_3": "Lưu ý: Bị loại bỏ dần vào năm 2027 theo quy tắc BAAQMD.",
        "swh_hp_title": "Bơm nhiệt Hybrid",
        "swh_hp_comic_1": "Tương lai của hệ thống làm nóng nước không phát thải.",
        "swh_hp_comic_2": "Chiết xuất nhiệt từ không khí, tiết kiệm đến 70% năng lượng.",
        "swh_hp_comic_3": "Đủ điều kiện nhận mức hoàn tiền tối đa từ chính phủ.",
        "nav_hp_packages": "Các gói Bơm Nhiệt 2027",
        "nav_tt_upgrade": "Nâng cấp từ Bình chứa sang Không bình chứa",
        "nav_ttt_replace": "Thay thế Không bình chứa sang Không bình chứa"
    }
};

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
    for (const key in swhReplacements[lang]) {
        injectionStr += `\n        "${key}": "${swhReplacements[lang][key]}",`;
    }
    
    // Inject before the end of the block
    langBlock = langBlock.replace(/\s*,?\s*$/, `,${injectionStr}\n    `);
    
    newAppJs += appJs.substring(currentIdx, startIdx);
    newAppJs += langBlock;
    currentIdx = endIdx;
}
newAppJs += appJs.substring(currentIdx);
fs.writeFileSync('app.js', newAppJs);
console.log('Successfully injected swh translations into app.js');
