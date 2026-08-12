const fs = require('fs');
const file = 'app.js';
let appJS = fs.readFileSync(file, 'utf8');

const translationsToAdd = {
    es: {
        law_title: "Regulaciones BAAQMD & Código de Instalación",
        law_subtitle: "La guía definitiva sobre el mandato 2027 de cero emisiones (Zero-NOx) para el Área de la Bahía, los nuevos tipos de calentadores y los estrictos requisitos de instalación de CSLB y el Título 24 de California.",
        law_sec1_title: "1. El Mandato de BAAQMD 2027 (Regulación 9, Regla 6)",
        law_sec1_p1: "El Distrito de Gestión de la Calidad del Aire del Área de la Bahía (BAAQMD) ha emitido una enmienda histórica para reducir la contaminación por óxidos de nitrógeno (NOx).",
        law_sec1_p2: "<strong>¿Qué significa esto?</strong> A partir del 1 de enero de 2027, será ilegal vender o instalar nuevos calentadores de agua residenciales de gas natural que emitan NOx. Esto significa la eliminación gradual completa de los calentadores tradicionales a gas en el Área de la Bahía.",
        law_sec1_li1: "<strong>Impacto Inmediato:</strong> Los reemplazos de emergencia después de 2027 requerirán exclusivamente equipos eléctricos de cero emisiones.",
        law_sec1_li2: "<strong>Transición:</strong> Se insta a los propietarios a migrar a calentadores de bomba de calor (Heat Pump) antes del colapso de inventario de 2027.",
        law_sec2_title: "2. Tipos de Calentadores de Agua (Transición a Eléctrico)",
        law_sec2_p1: "Comprender las tecnologías aprobadas para la transición energética de California es vital para cumplir con el Título 24 (Title 24).",
        law_sec2_li1: "<strong>Bomba de Calor Híbrida (Heat Pump):</strong> Extrae calor del aire ambiental para calentar el agua, logrando eficiencias superiores al 300%. Es la opción #1 requerida por el estado y califica para los máximos reembolsos (Rebates).",
        law_sec2_li2: "<strong>Eléctricos de Tanque Estándar:</strong> Utilizan resistencias térmicas, menos eficientes y generalmente penalizados bajo cálculos estrictos del Título 24, pero permitidos.",
        law_sec2_li3: "<strong>Eléctricos Tankless (Sin Tanque):</strong> Calientan el agua al instante. Aunque no emiten NOx, requieren un amperaje masivo (a menudo paneles eléctricos de más de 200A) y rara vez son viables sin actualizaciones eléctricas costosas.",
        law_sec3_title: "3. Especificaciones del Código (CSLB y Title 24)",
        law_sec3_p1: "Instalar un calentador no es solo conectar agua. Morales Plumbing garantiza el cumplimiento estricto del Código Uniforme de Plomería (UPC) de California:",
        law_sec3_li1: "<strong>Sujeción Sísmica (Earthquake Straps):</strong> Ley de California requiere correas dobles en el tercio superior e inferior, ancladas directamente a montantes de pared para evitar el vuelco durante terremotos.",
        law_sec3_li2: "<strong>Tanque de Expansión Térmica:</strong> Obligatorio en sistemas de plomería cerrados para absorber el exceso de presión, protegiendo las tuberías del hogar y evitando explosiones de válvulas.",
        law_sec3_li3: "<strong>Bandeja de Drenaje (Drain Pan):</strong> Requerida si el calentador está en una plataforma interior, en ático o espacio donde una fuga cause daños a la estructura. La bandeja debe tener tubería que drene al exterior.",
        law_sec3_li4: "<strong>Válvula T&P (Temperature & Pressure Relief):</strong> Crítica para la seguridad, su línea de descarga debe llevar el agua caliente a un desagüe seguro, típicamente al exterior.",
        law_btn_back: "Ver Paquetes de Instalación Certificados"
    },
    en: {
        law_title: "BAAQMD Regulations & Installation Code",
        law_subtitle: "The definitive guide to the 2027 Zero-NOx mandate for the Bay Area, new water heater types, and strict CSLB and California Title 24 installation requirements.",
        law_sec1_title: "1. The 2027 BAAQMD Mandate (Regulation 9, Rule 6)",
        law_sec1_p1: "The Bay Area Air Quality Management District (BAAQMD) has issued a historic amendment to reduce nitrogen oxide (NOx) pollution.",
        law_sec1_p2: "<strong>What does this mean?</strong> Starting January 1, 2027, it will be illegal to sell or install new residential natural gas water heaters that emit NOx. This means the complete phase-out of traditional gas heaters in the Bay Area.",
        law_sec1_li1: "<strong>Immediate Impact:</strong> Emergency replacements after 2027 will exclusively require zero-emission electric equipment.",
        law_sec1_li2: "<strong>Transition:</strong> Homeowners are urged to migrate to Heat Pump water heaters before the 2027 inventory collapse.",
        law_sec2_title: "2. Types of Water Heaters (Electric Transition)",
        law_sec2_p1: "Understanding the approved technologies for California's energy transition is vital for Title 24 compliance.",
        law_sec2_li1: "<strong>Hybrid Heat Pump:</strong> Extracts heat from ambient air to heat water, achieving efficiencies over 300%. It is the #1 state-required option and qualifies for maximum rebates.",
        law_sec2_li2: "<strong>Standard Electric Tank:</strong> Use thermal elements, less efficient and generally penalized under strict Title 24 calculations, but allowed.",
        law_sec2_li3: "<strong>Electric Tankless:</strong> Heats water instantly. Although they do not emit NOx, they require massive amperage (often 200A+ panels) and are rarely viable without costly electrical upgrades.",
        law_sec3_title: "3. Code Specifications (CSLB & Title 24)",
        law_sec3_p1: "Installing a heater is not just hooking up water. Morales Plumbing guarantees strict compliance with the California Uniform Plumbing Code (UPC):",
        law_sec3_li1: "<strong>Earthquake Straps:</strong> California law requires double straps on the top and bottom third, anchored directly to wall studs to prevent tipping during earthquakes.",
        law_sec3_li2: "<strong>Thermal Expansion Tank:</strong> Mandatory in closed plumbing systems to absorb excess pressure, protecting home pipes and preventing valve explosions.",
        law_sec3_li3: "<strong>Drain Pan:</strong> Required if the heater is on an indoor platform, attic, or space where a leak causes structural damage. The pan must have a pipe draining outdoors.",
        law_sec3_li4: "<strong>T&P Valve (Temperature & Pressure Relief):</strong> Critical for safety, its discharge line must safely route hot water to a drain, typically outdoors.",
        law_btn_back: "View Certified Installation Packages"
    },
    zh: {
        law_title: "BAAQMD 法规与安装规范",
        law_subtitle: "关于湾区 2027 零氮氧化物 (Zero-NOx) 禁令、新型热水器以及严格的 CSLB 和加州 Title 24 安装要求的终极指南。",
        law_sec1_title: "1. 2027 BAAQMD 禁令 (第 9 条例，第 6 细则)",
        law_sec1_p1: "湾区空气质量管理区 (BAAQMD) 发布了一项历史性修正案，以减少氮氧化物 (NOx) 污染。",
        law_sec1_p2: "<strong>这意味着什么？</strong> 从 2027 年 1 月 1 日起，销售或安装排放 NOx 的新型住宅天然气热水器将是违法的。这意味着湾区将全面淘汰传统燃气热水器。",
        law_sec1_li1: "<strong>直接影响：</strong> 2027 年后的紧急更换将专门需要零排放的电气设备。",
        law_sec1_li2: "<strong>过渡：</strong> 敦促房主在 2027 年库存崩溃前改用热泵热水器。",
        law_sec2_title: "2. 热水器类型 (电气过渡)",
        law_sec2_p1: "了解加州能源过渡的批准技术对于 Title 24 合规至关重要。",
        law_sec2_li1: "<strong>混合热泵 (Heat Pump)：</strong> 从环境空气中提取热量来加热水，效率超过 300%。它是州规定的首选方案，并有资格获得最高回扣。",
        law_sec2_li2: "<strong>标准电热水箱：</strong> 使用热元件，效率较低，通常在严格的 Title 24 计算下受罚，但允许使用。",
        law_sec2_li3: "<strong>无水箱电热水器：</strong> 瞬间加热水。虽然不排放 NOx，但它们需要极大的电流（通常为 200A+ 面板），并且如果没有昂贵的电气升级，几乎不可行。",
        law_sec3_title: "3. 规范规格 (CSLB 和 Title 24)",
        law_sec3_p1: "安装热水器不仅仅是接水管。Morales Plumbing 保证严格遵守加州统一管道规范 (UPC)：",
        law_sec3_li1: "<strong>抗震带 (Earthquake Straps)：</strong> 加州法律要求在顶部和底部三分之一处安装双带，直接固定在墙柱上，以防地震时倾倒。",
        law_sec3_li2: "<strong>热膨胀罐：</strong> 在封闭管道系统中强制使用，以吸收过大压力，保护房屋管道并防止阀门爆炸。",
        law_sec3_li3: "<strong>排水盘 (Drain Pan)：</strong> 如果热水器位于室内平台、阁楼或漏水会导致结构损坏的空间，则是必需的。排水盘必须有通向室外的管道。",
        law_sec3_li4: "<strong>T&P 阀 (温度和压力释放)：</strong> 对安全至关重要，其排放管必须安全地将热水引至排水沟（通常在室外）。",
        law_btn_back: "查看认证安装套餐"
    },
    tl: {
        law_title: "Mga Regulasyon ng BAAQMD at Code sa Pag-install",
        law_subtitle: "Ang panghuling gabay sa 2027 Zero-NOx mandate para sa Bay Area, mga bagong uri ng water heater, at mahigpit na CSLB at California Title 24 na mga kinakailangan sa pag-install.",
        law_sec1_title: "1. Ang 2027 BAAQMD Mandate (Regulation 9, Rule 6)",
        law_sec1_p1: "Ang Bay Area Air Quality Management District (BAAQMD) ay naglabas ng isang makasaysayang amyenda upang mabawasan ang polusyon ng nitrogen oxide (NOx).",
        law_sec1_p2: "<strong>Ano ang ibig sabihin nito?</strong> Simula Enero 1, 2027, magiging ilegal na ang pagbebenta o pag-install ng mga bagong residential natural gas water heater na naglalabas ng NOx. Nangangahulugan ito ng kumpletong pag-phase-out ng mga tradisyonal na gas heater sa Bay Area.",
        law_sec1_li1: "<strong>Agarang Epekto:</strong> Ang mga emergency na pagpapalit pagkatapos ng 2027 ay mangangailangan na ng eksklusibong zero-emission na mga kagamitang elektrikal.",
        law_sec1_li2: "<strong>Transisyon:</strong> Hinihimok ang mga may-ari ng bahay na lumipat sa Heat Pump water heaters bago ang pagbagsak ng imbentaryo sa 2027.",
        law_sec2_title: "2. Mga Uri ng Water Heater (Elektrisidad na Transisyon)",
        law_sec2_p1: "Ang pag-unawa sa mga naaprubahang teknolohiya para sa pagbabago ng enerhiya sa California ay mahalaga para sa pagsunod sa Title 24.",
        law_sec2_li1: "<strong>Hybrid Heat Pump:</strong> Kumukuha ng init mula sa hanging paligid upang magpainit ng tubig, na umaabot ng higit sa 300% na kahusayan. Ito ang #1 opsyon na iniaatas ng estado at kwalipikado para sa maximum na rebates.",
        law_sec2_li2: "<strong>Standard Electric Tank:</strong> Gumagamit ng thermal elements, hindi gaanong mahusay at karaniwang pinaparusahan sa ilalim ng mahigpit na pagkalkula ng Title 24, ngunit pinapayagan.",
        law_sec2_li3: "<strong>Electric Tankless:</strong> Pinapainit ang tubig agad. Kahit na hindi sila naglalabas ng NOx, nangangailangan sila ng napakalaking amperage (kadalasan 200A+ panels) at bihirang mabuhay kung walang mamahaling electric upgrades.",
        law_sec3_title: "3. Code Specifications (CSLB & Title 24)",
        law_sec3_p1: "Ang pag-install ng heater ay hindi lamang pagkakabit ng tubig. Tinitiyak ng Morales Plumbing ang mahigpit na pagsunod sa California Uniform Plumbing Code (UPC):",
        law_sec3_li1: "<strong>Earthquake Straps:</strong> Iniaatas ng batas sa California ang dobleng strap sa itaas at ibabang ikatlo, na nakakabit nang direkta sa wall studs upang maiwasan ang pagtumba sa panahon ng lindol.",
        law_sec3_li2: "<strong>Thermal Expansion Tank:</strong> Sapilitan sa closed plumbing systems upang sipsipin ang labis na presyon, pinoprotektahan ang mga tubo ng bahay at pinipigilan ang pagsabog ng balbula.",
        law_sec3_li3: "<strong>Drain Pan:</strong> Iniaatas kung ang heater ay nasa indoor platform, attic, o espasyo kung saan magdudulot ng pinsala sa istraktura ang tulo. Dapat may pipe ang drain pan papunta sa labas.",
        law_sec3_li4: "<strong>T&P Valve (Temperature & Pressure Relief):</strong> Kritikal para sa kaligtasan, ang discharge line nito ay dapat ligtas na magdala ng mainit na tubig sa isang drain, kadalasan sa labas.",
        law_btn_back: "Tingnan ang Certified Installation Packages"
    },
    vi: {
        law_title: "Quy định BAAQMD & Mã Lắp đặt",
        law_subtitle: "Hướng dẫn tối ưu về lệnh Zero-NOx 2027 cho Khu vực Vịnh, các loại máy nước nóng mới, và các yêu cầu lắp đặt nghiêm ngặt của CSLB và Title 24 của California.",
        law_sec1_title: "1. Lệnh BAAQMD 2027 (Quy định 9, Quy tắc 6)",
        law_sec1_p1: "Quận Quản lý Chất lượng Không khí Khu vực Vịnh (BAAQMD) đã ban hành một sửa đổi lịch sử để giảm ô nhiễm nitơ oxit (NOx).",
        law_sec1_p2: "<strong>Điều này có ý nghĩa gì?</strong> Bắt đầu từ ngày 1 tháng 1 năm 2027, việc bán hoặc lắp đặt máy nước nóng dân dụng chạy bằng khí đốt tự nhiên mới phát thải NOx sẽ là bất hợp pháp. Điều này có nghĩa là loại bỏ hoàn toàn các máy nước nóng bằng khí đốt truyền thống ở Khu vực Vịnh.",
        law_sec1_li1: "<strong>Tác động Tức thì:</strong> Các thay thế khẩn cấp sau năm 2027 sẽ yêu cầu thiết bị điện không phát thải độc quyền.",
        law_sec1_li2: "<strong>Chuyển đổi:</strong> Chủ nhà được khuyến cáo nên chuyển sang máy nước nóng Bơm nhiệt (Heat Pump) trước khi cạn kiệt hàng tồn kho vào năm 2027.",
        law_sec2_title: "2. Các loại Máy nước nóng (Chuyển đổi Điện)",
        law_sec2_p1: "Việc hiểu các công nghệ được phê duyệt cho quá trình chuyển đổi năng lượng của California là rất quan trọng để tuân thủ Title 24.",
        law_sec2_li1: "<strong>Bơm nhiệt Hỗn hợp (Heat Pump):</strong> Trích xuất nhiệt từ không khí xung quanh để làm nóng nước, đạt hiệu suất trên 300%. Đây là tùy chọn số 1 theo yêu cầu của tiểu bang và đủ điều kiện nhận các khoản hoàn trả tối đa.",
        law_sec2_li2: "<strong>Bình Điện Tiêu chuẩn:</strong> Sử dụng các phần tử nhiệt, kém hiệu quả hơn và thường bị phạt theo các tính toán nghiêm ngặt của Title 24, nhưng được phép.",
        law_sec2_li3: "<strong>Điện Không bình chứa (Tankless):</strong> Làm nóng nước ngay lập tức. Mặc dù chúng không phát thải NOx, chúng cần cường độ dòng điện cực lớn (thường là bảng điều khiển 200A+) và hiếm khi khả thi nếu không nâng cấp điện tốn kém.",
        law_sec3_title: "3. Thông số kỹ thuật của Mã (CSLB & Title 24)",
        law_sec3_p1: "Lắp đặt máy nước nóng không chỉ là nối đường ống nước. Morales Plumbing đảm bảo tuân thủ nghiêm ngặt Mã Hệ thống Ống nước Thống nhất (UPC) của California:",
        law_sec3_li1: "<strong>Dây đeo chống Động đất (Earthquake Straps):</strong> Luật California yêu cầu sử dụng dây đeo đôi ở một phần ba trên và dưới, được neo trực tiếp vào đinh tán tường để tránh lật khi có động đất.",
        law_sec3_li2: "<strong>Bình Giãn nở Nhiệt:</strong> Bắt buộc đối với các hệ thống ống nước kín để hấp thụ áp suất dư thừa, bảo vệ đường ống trong nhà và ngăn ngừa nổ van.",
        law_sec3_li3: "<strong>Khay thoát nước (Drain Pan):</strong> Bắt buộc nếu máy nước nóng nằm trên nền tảng trong nhà, gác mái hoặc không gian mà sự rò rỉ có thể gây hư hại cấu trúc. Khay phải có ống dẫn nước ra ngoài trời.",
        law_sec3_li4: "<strong>Van T&P (Van xả Nhiệt độ & Áp suất):</strong> Quan trọng đối với an toàn, đường xả của nó phải dẫn nước nóng đến cống một cách an toàn, thường là ngoài trời.",
        law_btn_back: "Xem các Gói Lắp đặt được Chứng nhận"
    }
};

const languages = ['en', 'es', 'zh', 'tl', 'vi'];

languages.forEach(lang => {
    // Busca el objeto del idioma, ejemplo: en: {
    const regex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?)(\\n    },|\\n    })`);
    if (regex.test(appJS)) {
        // Formatear las nuevas llaves
        let insertStr = '';
        for (const [k, v] of Object.entries(translationsToAdd[lang])) {
            insertStr += `\n        "${k}": ${JSON.stringify(v)},`;
        }
        
        // Inyectar antes del cierre de llave del idioma
        appJS = appJS.replace(regex, `$1${insertStr}$2`);
    } else {
        console.log("No se pudo encontrar el bloque para", lang);
    }
});

fs.writeFileSync(file, appJS);
console.log('Traducciones inyectadas exitosamente.');
