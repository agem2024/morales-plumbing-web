const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const keysEN = `
        // NEW SERVICES
        "service_wh_title": "Water Heaters",
        "service_wh_desc": "Maintenance, replacement, and installation.",
        "service_valves_title": "Valves & Cartridges",
        "service_valves_desc": "Replacement of shower, tub, and sink valves.",
        "service_inspect_title": "Inspections",
        "service_inspect_desc": "Consulting for new/used homes and expansions.",
        "service_training_title": "Staff Training",
        "service_training_desc": "Training for associated company staff.",
        "service_b2b_title": "B2B Specialized Work",
        "service_b2b_desc": "Partnerships with trade companies for complex projects.",

        "eng_wh_title": "Water Heater Maintenance & Installation",
        "eng_wh_desc": "Comprehensive water heater services from routine maintenance to full system replacements.",
        "eng_wh_p1": "Our experts ensure your water heater operates efficiently. We provide flushing, anode rod replacement, and precise installation of tankless or standard systems.",
        "eng_wh_p2": "We comply with all local codes and BAAQMD standards for maximum safety and performance.",
        "eng_wh_li1": "Professional flushing and descaling.",
        "eng_wh_li2": "Tankless conversion and retrofitting.",
        "eng_wh_li3": "Code-compliant installation and testing.",

        "eng_valves_title": "Cartridge & Valve Replacement",
        "eng_valves_desc": "Precision replacement of faulty shower, tub, and sink valves.",
        "eng_valves_p1": "A leaking shower or sink valve not only wastes water but can cause internal wall damage. We quickly replace worn cartridges and install new high-quality pressure-balancing valves.",
        "eng_valves_p2": "Our service covers all major brands and includes calibration of water temperature to prevent scalding.",
        "eng_valves_li1": "Shower and tub valve replacement.",
        "eng_valves_li2": "Sink and lavatory cartridge repairs.",
        "eng_valves_li3": "Temperature limit stops adjustment.",

        "eng_inspect_title": "Home Inspection Consulting",
        "eng_inspect_desc": "Expert plumbing inspections for new and used homes.",
        "eng_inspect_p1": "Before buying or remodeling a home, our comprehensive plumbing inspection reveals hidden issues in sewer lines, water pressure, and fixtures.",
        "eng_inspect_p2": "We provide detailed reports and consulting for home expansions, ensuring new additions meet strict building codes.",
        "eng_inspect_li1": "Real estate transaction inspections.",
        "eng_inspect_li2": "Consulting for home additions and ADUs.",
        "eng_inspect_li3": "Detailed structural and system reports.",

        "eng_training_title": "Corporate Staff Training",
        "eng_training_desc": "Professional training programs for partner plumbing and trade companies.",
        "eng_training_p1": "We offer specialized training sessions for associated companies, teaching modern plumbing techniques, code compliance, and safety protocols.",
        "eng_training_p2": "Our curriculum bridges the gap between traditional plumbing and modern eco-friendly, AI-assisted installations.",
        "eng_training_li1": "Hands-on installation training.",
        "eng_training_li2": "Code compliance and safety standards.",
        "eng_training_li3": "Modern diagnostic tools usage.",

        "eng_b2b_title": "B2B Trade Partnerships",
        "eng_b2b_desc": "Specialized collaborative work with other contractors and trades.",
        "eng_b2b_p1": "Morales Plumbing partners with HVAC, electrical, and general contractors to provide specialized plumbing support for complex, large-scale projects.",
        "eng_b2b_p2": "Our B2B services ensure seamless integration of plumbing systems within multi-trade construction environments.",
        "eng_b2b_li1": "Subcontracting for complex installations.",
        "eng_b2b_li2": "Cross-trade system integration.",
        "eng_b2b_li3": "Dedicated project management support.",
`;

const keysES = `
        // NEW SERVICES
        "service_wh_title": "Water Heaters",
        "service_wh_desc": "Mantenimiento, cambio e instalación.",
        "service_valves_title": "Válvulas y Cartuchos",
        "service_valves_desc": "Cambio de válvulas para duchas, tinas y lavabos.",
        "service_inspect_title": "Inspecciones",
        "service_inspect_desc": "Asesoría para viviendas nuevas, usadas y ampliaciones.",
        "service_training_title": "Capacitaciones",
        "service_training_desc": "Formación de personal para empresas asociadas.",
        "service_b2b_title": "Trabajos Especializados B2B",
        "service_b2b_desc": "Alianzas con empresas del trade para proyectos complejos.",

        "eng_wh_title": "Mantenimiento e Instalación de Water Heaters",
        "eng_wh_desc": "Servicios integrales de calentadores de agua, desde mantenimiento de rutina hasta reemplazos completos del sistema.",
        "eng_wh_p1": "Nuestros expertos aseguran que su calentador funcione de manera eficiente. Realizamos purgas, reemplazo de varillas de ánodo e instalaciones precisas de sistemas sin tanque o estándar.",
        "eng_wh_p2": "Cumplimos con todos los códigos locales y los estándares BAAQMD para máxima seguridad y rendimiento.",
        "eng_wh_li1": "Purgas y descalcificación profesional.",
        "eng_wh_li2": "Conversión y actualización a sistemas sin tanque.",
        "eng_wh_li3": "Instalación y pruebas que cumplen con el código.",

        "eng_valves_title": "Reemplazo de Cartuchos y Válvulas",
        "eng_valves_desc": "Reemplazo preciso de válvulas defectuosas de duchas, tinas y lavabos.",
        "eng_valves_p1": "Una válvula de ducha o lavabo con fugas no solo desperdicia agua, sino que puede causar daños internos en la pared. Reemplazamos rápidamente cartuchos desgastados e instalamos nuevas válvulas de alta calidad que equilibran la presión.",
        "eng_valves_p2": "Nuestro servicio cubre todas las marcas principales e incluye la calibración de la temperatura del agua para evitar quemaduras.",
        "eng_valves_li1": "Reemplazo de válvulas de ducha y tina.",
        "eng_valves_li2": "Reparaciones de cartuchos de lavabos.",
        "eng_valves_li3": "Ajuste de límites de temperatura.",

        "eng_inspect_title": "Consultoría e Inspección de Viviendas",
        "eng_inspect_desc": "Inspecciones expertas de plomería para viviendas nuevas y usadas.",
        "eng_inspect_p1": "Antes de comprar o remodelar una casa, nuestra exhaustiva inspección de plomería revela problemas ocultos en líneas de alcantarillado, presión de agua y accesorios.",
        "eng_inspect_p2": "Proporcionamos informes detallados y consultoría para ampliaciones de viviendas, asegurando que las nuevas adiciones cumplan con los estrictos códigos de construcción.",
        "eng_inspect_li1": "Inspecciones para transacciones inmobiliarias.",
        "eng_inspect_li2": "Consultoría para adiciones de viviendas y ADUs.",
        "eng_inspect_li3": "Informes detallados estructurales y de sistemas.",

        "eng_training_title": "Capacitación de Personal Corporativo",
        "eng_training_desc": "Programas de formación profesional para empresas asociadas.",
        "eng_training_p1": "Ofrecemos sesiones de capacitación especializadas para empresas asociadas, enseñando técnicas modernas de plomería, cumplimiento de códigos y protocolos de seguridad.",
        "eng_training_p2": "Nuestro plan de estudios cierra la brecha entre la plomería tradicional y las instalaciones ecológicas y asistidas por IA modernas.",
        "eng_training_li1": "Capacitación práctica en instalación.",
        "eng_training_li2": "Cumplimiento de códigos y estándares de seguridad.",
        "eng_training_li3": "Uso de herramientas de diagnóstico modernas.",

        "eng_b2b_title": "Alianzas Comerciales Especializadas B2B",
        "eng_b2b_desc": "Trabajo colaborativo especializado con otros contratistas y oficios.",
        "eng_b2b_p1": "Morales Plumbing se asocia con contratistas de HVAC, electricidad y generales para proporcionar soporte especializado en plomería para proyectos complejos a gran escala.",
        "eng_b2b_p2": "Nuestros servicios B2B aseguran la integración perfecta de los sistemas de plomería dentro de entornos de construcción de múltiples oficios.",
        "eng_b2b_li1": "Subcontratación para instalaciones complejas.",
        "eng_b2b_li2": "Integración de sistemas entre diferentes oficios.",
        "eng_b2b_li3": "Soporte dedicado en la gestión de proyectos.",
`;

const keysZH = `
        // NEW SERVICES
        "service_wh_title": "热水器",
        "service_wh_desc": "维护、更换和安装。",
        "service_valves_title": "阀门和滤芯",
        "service_valves_desc": "更换淋浴、浴缸和水槽的阀门。",
        "service_inspect_title": "检查",
        "service_inspect_desc": "新建/二手房及扩建咨询。",
        "service_training_title": "员工培训",
        "service_training_desc": "为合作企业员工提供培训。",
        "service_b2b_title": "B2B专业合作",
        "service_b2b_desc": "与同业公司合作完成复杂项目。",

        "eng_wh_title": "热水器维护与安装",
        "eng_wh_desc": "提供从日常维护到全系统更换的全方位热水器服务。",
        "eng_wh_p1": "我们的专家确保您的热水器高效运行。我们提供冲洗、更换镁棒以及无水箱或标准系统的精确安装。",
        "eng_wh_p2": "我们遵守所有当地建筑规范和BAAQMD标准，以实现最大的安全性和性能。",
        "eng_wh_li1": "专业冲洗和除垢。",
        "eng_wh_li2": "无水箱转换与改造。",
        "eng_wh_li3": "符合规范的安装和测试。",

        "eng_valves_title": "滤芯和阀门更换",
        "eng_valves_desc": "精确更换损坏的淋浴、浴缸和水槽阀门。",
        "eng_valves_p1": "淋浴或水槽阀门漏水不仅浪费水，还可能对内墙造成破坏。我们能快速更换磨损的滤芯，并安装高质量的压力平衡阀。",
        "eng_valves_p2": "我们的服务涵盖所有主要品牌，并包含水温校准以防止烫伤。",
        "eng_valves_li1": "淋浴和浴缸阀门更换。",
        "eng_valves_li2": "水槽和洗脸盆滤芯维修。",
        "eng_valves_li3": "温度限制停止器调整。",

        "eng_inspect_title": "房屋检查咨询",
        "eng_inspect_desc": "为新房和二手房提供专业的管道检查。",
        "eng_inspect_p1": "在购买或改造房屋之前，我们全面的管道检查可以发现下水道、水压和配件中的隐藏问题。",
        "eng_inspect_p2": "我们为房屋扩建提供详细的报告和咨询，确保新增建筑符合严格的建筑规范。",
        "eng_inspect_li1": "房地产交易检查。",
        "eng_inspect_li2": "房屋扩建和附属住宅单元（ADU）咨询。",
        "eng_inspect_li3": "详细的结构和系统报告。",

        "eng_training_title": "企业员工培训",
        "eng_training_desc": "为合作伙伴企业提供专业培训计划。",
        "eng_training_p1": "我们为合作企业提供专业的培训课程，教授现代管道技术、规范合规性以及安全规程。",
        "eng_training_p2": "我们的课程填补了传统管道工程与现代环保、人工智能辅助安装之间的空白。",
        "eng_training_li1": "实用的安装培训。",
        "eng_training_li2": "规范合规与安全标准。",
        "eng_training_li3": "现代诊断工具的使用。",

        "eng_b2b_title": "B2B专业合作项目",
        "eng_b2b_desc": "与其他承包商及行业进行的专业合作。",
        "eng_b2b_p1": "Morales Plumbing与暖通空调、电气及总承包商合作，为大型复杂项目提供专业的管道工程支持。",
        "eng_b2b_p2": "我们的B2B服务确保在多行业交叉的施工环境中，管道系统能够无缝集成。",
        "eng_b2b_li1": "复杂安装项目的分包。",
        "eng_b2b_li2": "跨行业的系统集成。",
        "eng_b2b_li3": "专属的项目管理支持。",
`;

const keysTL = `
        // NEW SERVICES
        "service_wh_title": "Water Heaters",
        "service_wh_desc": "Pagpapanatili, pagpapalit, at pag-install.",
        "service_valves_title": "Valves & Cartridges",
        "service_valves_desc": "Pagpapalit ng valves sa shower, tub, at lababo.",
        "service_inspect_title": "Inspeksyon",
        "service_inspect_desc": "Pagkonsulta para sa mga bago/lumang bahay at pagpapalawak.",
        "service_training_title": "Pagsasanay ng Tauhan",
        "service_training_desc": "Pagsasanay para sa mga tauhan ng katuwang na kumpanya.",
        "service_b2b_title": "B2B Espesyal na Trabaho",
        "service_b2b_desc": "Pakikipagtulungan sa mga trade companies para sa mga kumplikadong proyekto.",

        "eng_wh_title": "Pagpapanatili at Pag-install ng Water Heater",
        "eng_wh_desc": "Komprehensibong serbisyo para sa water heater mula sa regular na pagpapanatili hanggang sa buong pagpapalit ng sistema.",
        "eng_wh_p1": "Tinitiyak ng aming mga eksperto na epektibo ang paggana ng iyong water heater. Nagbibigay kami ng pag-flush, pagpapalit ng anode rod, at tumpak na pag-install ng tankless o karaniwang sistema.",
        "eng_wh_p2": "Sumusunod kami sa lahat ng lokal na code at pamantayan ng BAAQMD para sa pinakamataas na kaligtasan at pagganap.",
        "eng_wh_li1": "Propesyonal na pag-flush at pag-alis ng kaliskis.",
        "eng_wh_li2": "Tankless conversion at retrofitting.",
        "eng_wh_li3": "Code-compliant na pag-install at pagsubok.",

        "eng_valves_title": "Pagpapalit ng Cartridge at Valve",
        "eng_valves_desc": "Tumpak na pagpapalit ng mga sirang valves sa shower, tub, at lababo.",
        "eng_valves_p1": "Ang tumutulong shower o sink valve ay hindi lamang nag-aaksaya ng tubig kundi maaari ring maging sanhi ng pinsala sa loob ng dingding. Mabilis naming pinapalitan ang mga sirang cartridge at naglalagay ng mga bagong de-kalidad na pressure-balancing valve.",
        "eng_valves_p2": "Saklaw ng aming serbisyo ang lahat ng pangunahing tatak at kasama ang kalibrasyon ng temperatura ng tubig upang maiwasan ang pagkapaso.",
        "eng_valves_li1": "Pagpapalit ng valve sa shower at tub.",
        "eng_valves_li2": "Pag-aayos ng cartridge sa lababo.",
        "eng_valves_li3": "Pagsasaayos ng mga temperature limit stop.",

        "eng_inspect_title": "Konsultasyon at Inspeksyon ng Bahay",
        "eng_inspect_desc": "Ekspertong inspeksyon ng tubo para sa mga bago at lumang bahay.",
        "eng_inspect_p1": "Bago bumili o mag-ayos ng bahay, ibinubunyag ng aming komprehensibong inspeksyon ng tubo ang mga nakatagong isyu sa mga linya ng alkantarilya, presyon ng tubig, at mga kabit.",
        "eng_inspect_p2": "Nagbibigay kami ng detalyadong ulat at pagkonsulta para sa pagpapalawak ng bahay, tinitiyak na ang mga bagong karagdagan ay sumusunod sa mga mahigpit na code sa gusali.",
        "eng_inspect_li1": "Inspeksyon para sa transaksyon sa real estate.",
        "eng_inspect_li2": "Konsultasyon para sa mga karagdagan sa bahay at ADUs.",
        "eng_inspect_li3": "Detalyadong istruktural at sistematikong ulat.",

        "eng_training_title": "Pagsasanay ng Tauhan ng Kumpanya",
        "eng_training_desc": "Propesyonal na mga programa sa pagsasanay para sa mga katuwang na kumpanya.",
        "eng_training_p1": "Nag-aalok kami ng mga espesyal na sesyon ng pagsasanay para sa mga katuwang na kumpanya, nagtuturo ng makabagong teknika sa pagtutubero, pagsunod sa code, at mga protocol ng kaligtasan.",
        "eng_training_p2": "Tinutulay ng aming kurikulum ang agwat sa pagitan ng tradisyonal na pagtutubero at mga makabagong pag-install na pangkalikasan at suportado ng AI.",
        "eng_training_li1": "Praktikal na pagsasanay sa pag-install.",
        "eng_training_li2": "Pagsunod sa code at mga pamantayan ng kaligtasan.",
        "eng_training_li3": "Paggamit ng mga makabagong tool sa pagsusuri.",

        "eng_b2b_title": "Mga B2B Trade Partnership",
        "eng_b2b_desc": "Espesyal na pakikipagtulungan sa iba pang kontratista at kalakalan.",
        "eng_b2b_p1": "Nakikipagtulungan ang Morales Plumbing sa mga HVAC, electrical, at general contractor upang magbigay ng espesyal na suporta sa pagtutubero para sa kumplikado at malalaking proyekto.",
        "eng_b2b_p2": "Tinitiyak ng aming mga serbisyong B2B ang maayos na pagsasama ng mga sistema ng tubo sa loob ng mga kapaligiran ng konstruksyon na maraming trade.",
        "eng_b2b_li1": "Subcontracting para sa mga kumplikadong pag-install.",
        "eng_b2b_li2": "Cross-trade system integration.",
        "eng_b2b_li3": "Dedikadong suporta sa pamamahala ng proyekto.",
`;

const keysVI = `
        // NEW SERVICES
        "service_wh_title": "Máy nước nóng",
        "service_wh_desc": "Bảo trì, thay thế và lắp đặt.",
        "service_valves_title": "Van & Lõi lọc",
        "service_valves_desc": "Thay van cho vòi hoa sen, bồn tắm và bồn rửa.",
        "service_inspect_title": "Kiểm tra",
        "service_inspect_desc": "Tư vấn cho nhà mới/cũ và nhà mở rộng.",
        "service_training_title": "Đào tạo nhân sự",
        "service_training_desc": "Đào tạo cho nhân viên công ty đối tác.",
        "service_b2b_title": "Hợp tác B2B chuyên nghiệp",
        "service_b2b_desc": "Hợp tác với các công ty trong ngành cho các dự án phức tạp.",

        "eng_wh_title": "Bảo trì và lắp đặt máy nước nóng",
        "eng_wh_desc": "Dịch vụ máy nước nóng toàn diện từ bảo trì định kỳ đến thay thế toàn bộ hệ thống.",
        "eng_wh_p1": "Các chuyên gia của chúng tôi đảm bảo máy nước nóng của bạn hoạt động hiệu quả. Chúng tôi cung cấp dịch vụ súc rửa, thay thế thanh anode và lắp đặt chính xác các hệ thống không bình chứa hoặc tiêu chuẩn.",
        "eng_wh_p2": "Chúng tôi tuân thủ tất cả các quy định địa phương và tiêu chuẩn BAAQMD để đạt được sự an toàn và hiệu suất tối đa.",
        "eng_wh_li1": "Súc rửa và tẩy cặn chuyên nghiệp.",
        "eng_wh_li2": "Chuyển đổi và nâng cấp hệ thống không bình chứa.",
        "eng_wh_li3": "Lắp đặt và thử nghiệm tuân thủ quy định.",

        "eng_valves_title": "Thay thế Lõi lọc & Van",
        "eng_valves_desc": "Thay thế chính xác các van bị lỗi của vòi hoa sen, bồn tắm và bồn rửa.",
        "eng_valves_p1": "Một van vòi hoa sen hoặc bồn rửa bị rò rỉ không chỉ lãng phí nước mà còn có thể gây hỏng hóc bên trong tường. Chúng tôi nhanh chóng thay thế các lõi lọc bị mòn và lắp đặt các van cân bằng áp suất chất lượng cao mới.",
        "eng_valves_p2": "Dịch vụ của chúng tôi bao gồm tất cả các thương hiệu lớn và bao gồm hiệu chuẩn nhiệt độ nước để ngăn ngừa bỏng.",
        "eng_valves_li1": "Thay van vòi hoa sen và bồn tắm.",
        "eng_valves_li2": "Sửa chữa lõi lọc bồn rửa mặt.",
        "eng_valves_li3": "Điều chỉnh giới hạn nhiệt độ.",

        "eng_inspect_title": "Tư vấn & Kiểm tra Nhà",
        "eng_inspect_desc": "Kiểm tra hệ thống ống nước chuyên nghiệp cho nhà mới và cũ.",
        "eng_inspect_p1": "Trước khi mua hoặc sửa chữa nhà, việc kiểm tra hệ thống ống nước toàn diện của chúng tôi sẽ tiết lộ những vấn đề tiềm ẩn trong đường ống cống, áp suất nước và các thiết bị.",
        "eng_inspect_p2": "Chúng tôi cung cấp báo cáo chi tiết và tư vấn cho việc mở rộng nhà ở, đảm bảo các phần xây thêm đáp ứng các quy định xây dựng nghiêm ngặt.",
        "eng_inspect_li1": "Kiểm tra cho giao dịch bất động sản.",
        "eng_inspect_li2": "Tư vấn cho việc mở rộng nhà và ADU.",
        "eng_inspect_li3": "Báo cáo cấu trúc và hệ thống chi tiết.",

        "eng_training_title": "Đào tạo nhân sự doanh nghiệp",
        "eng_training_desc": "Các chương trình đào tạo chuyên nghiệp cho các công ty đối tác.",
        "eng_training_p1": "Chúng tôi cung cấp các khóa đào tạo chuyên sâu cho các công ty đối tác, giảng dạy các kỹ thuật hệ thống ống nước hiện đại, tuân thủ quy định và các giao thức an toàn.",
        "eng_training_p2": "Chương trình giảng dạy của chúng tôi thu hẹp khoảng cách giữa hệ thống ống nước truyền thống và các công trình lắp đặt thân thiện với môi trường, được hỗ trợ bởi AI hiện đại.",
        "eng_training_li1": "Đào tạo thực hành lắp đặt.",
        "eng_training_li2": "Tuân thủ quy định và tiêu chuẩn an toàn.",
        "eng_training_li3": "Sử dụng các công cụ chẩn đoán hiện đại.",

        "eng_b2b_title": "Hợp tác Thương mại B2B",
        "eng_b2b_desc": "Hợp tác chuyên môn với các nhà thầu và ngành nghề khác.",
        "eng_b2b_p1": "Morales Plumbing hợp tác với các nhà thầu HVAC, điện và nhà thầu chung để cung cấp hỗ trợ chuyên môn về hệ thống ống nước cho các dự án quy mô lớn, phức tạp.",
        "eng_b2b_p2": "Các dịch vụ B2B của chúng tôi đảm bảo tích hợp liền mạch các hệ thống ống nước trong môi trường xây dựng đa ngành nghề.",
        "eng_b2b_li1": "Ký hợp đồng phụ cho các công trình lắp đặt phức tạp.",
        "eng_b2b_li2": "Tích hợp hệ thống chéo ngành.",
        "eng_b2b_li3": "Hỗ trợ quản lý dự án chuyên dụng.",
`;

if (!appJs.includes('"service_wh_title"')) {
    appJs = appJs.replace(/"en":\s*{/, '"en": {\n' + keysEN);
    appJs = appJs.replace(/"es":\s*{/, '"es": {\n' + keysES);
    appJs = appJs.replace(/"zh":\s*{/, '"zh": {\n' + keysZH);
    appJs = appJs.replace(/"tl":\s*{/, '"tl": {\n' + keysTL);
    appJs = appJs.replace(/"vi":\s*{/, '"vi": {\n' + keysVI);
    fs.writeFileSync('app.js', appJs);
    console.log('Injected translations into app.js');
} else {
    console.log('Translations already exist in app.js');
}
