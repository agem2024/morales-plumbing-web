const fs = require('fs');

const lawTranslations = {
    en: {
        law_title: "BAAQMD Regulations & Installation Code",
        law_subtitle: "The definitive guide to the 2027 Zero-NOx mandate for the Bay Area, new water heater types, and strict CSLB & Title 24 installation requirements.",
        law_sec1_title: "1. The 2027 BAAQMD Mandate (Regulation 9, Rule 6)",
        law_sec1_p1: "The Bay Area Air Quality Management District (BAAQMD) has issued a landmark amendment to reduce nitrogen oxide (NOx) pollution.",
        law_sec1_p2: "<strong>What does this mean?</strong> Starting January 1, 2027, it will be illegal to sell or install new natural gas residential water heaters that emit NOx. This means the complete phase-out of traditional gas heaters in the Bay Area.",
        law_sec1_li1: "<strong>Immediate Impact:</strong> Emergency replacements after 2027 will strictly require zero-emission electric equipment.",
        law_sec1_li2: "<strong>Transition:</strong> Homeowners are urged to migrate to Heat Pump water heaters before the 2027 inventory collapse.",
        law_sec2_title: "2. Water Heater Types (Transition to Electric)",
        law_sec2_p1: "Understanding the approved technologies for California's energy transition is vital for Title 24 compliance.",
        law_sec2_li1: "<strong>Hybrid Heat Pump:</strong> Extracts heat from ambient air to heat water, achieving over 300% efficiency. It is the #1 state-required option and qualifies for maximum rebates.",
        law_sec2_li2: "<strong>Standard Electric Tank:</strong> Uses thermal resistance, less efficient and generally penalized under strict Title 24 calculations, but allowed.",
        law_sec2_li3: "<strong>Electric Tankless:</strong> Heats water instantly. Although they emit zero NOx, they require massive amperage (often 200A+ panels) and are rarely viable without expensive electrical upgrades.",
        law_sec3_title: "3. Code Specifications (CSLB & Title 24)",
        law_sec3_p1: "Installing a water heater isn't just hooking up water. Morales Plumbing ensures strict compliance with the California Uniform Plumbing Code (UPC):",
        law_sec3_li1: "<strong>Earthquake Straps:</strong> California law requires dual straps on the top and bottom third, anchored directly to wall studs to prevent tipping during earthquakes.",
        law_sec3_li2: "<strong>Thermal Expansion Tank:</strong> Mandatory in 'closed' plumbing systems to absorb excess pressure, protecting home pipes and preventing valve blowouts.",
        law_sec3_li3: "<strong>Drain Pan:</strong> Required if the heater is on an interior platform, attic, or space where a leak would cause structural damage. The pan must have a drain pipe leading outside.",
        law_sec3_li4: "<strong>T&P (Temperature & Pressure Relief) Valve:</strong> Critical for safety, its discharge line must route hot water to a safe drain, typically outside.",
        law_btn_back: "View Certified Installation Packages"
    },
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
    zh: {
        law_title: "BAAQMD 规定与安装规范",
        law_subtitle: "关于湾区2027年零NOx排放指令、新型热水器以及加州CSLB和Title 24严格安装要求的权威指南。",
        law_sec1_title: "1. 2027年 BAAQMD 指令 (第9条，第6款)",
        law_sec1_p1: "湾区空气质量管理区 (BAAQMD) 发布了一项具有里程碑意义的修正案，以减少氮氧化物 (NOx) 污染。",
        law_sec1_p2: "<strong>这意味着什么？</strong> 从2027年1月1日起，销售或安装排放NOx的新型天然气家用热水器将是非法的。这意味着湾区将全面淘汰传统燃气热水器。",
        law_sec1_li1: "<strong>直接影响：</strong> 2027年后的紧急更换将严格要求使用零排放的电气设备。",
        law_sec1_li2: "<strong>过渡：</strong> 强烈建议房主在2027年库存崩溃之前迁移到热泵 (Heat Pump) 热水器。",
        law_sec2_title: "2. 热水器类型 (向电气过渡)",
        law_sec2_p1: "了解加州能源过渡的批准技术对于遵守 Title 24 至关重要。",
        law_sec2_li1: "<strong>混合热泵 (Heat Pump):</strong> 从周围空气中提取热量来加热水，效率超过300%。它是州政府要求的首选选项，并有资格获得最高退款。",
        law_sec2_li2: "<strong>标准电热水器:</strong> 使用热电阻，效率较低，通常在严格的 Title 24 计算下受到惩罚，但被允许。",
        law_sec2_li3: "<strong>即热式电热水器:</strong> 瞬间加热水。虽然它们不排放NOx，但需要巨大的安培数（通常为200A+面板），如果没有昂贵的电气升级，很少可行。",
        law_sec3_title: "3. 规范要求 (CSLB & Title 24)",
        law_sec3_p1: "安装热水器不仅仅是接水管。Morales Plumbing 确保严格遵守加州统一管道规范 (UPC)：",
        law_sec3_li1: "<strong>抗震带 (Earthquake Straps):</strong> 加州法律要求在上下三分之一处使用双带，直接锚固在墙柱上，以防止在地震中倾倒。",
        law_sec3_li2: "<strong>热膨胀罐:</strong> 封闭管道系统中强制要求，以吸收过量压力，保护家庭管道并防止阀门爆裂。",
        law_sec3_li3: "<strong>排水盘 (Drain Pan):</strong> 如果热水器位于室内平台、阁楼或泄漏会导致结构损坏的空间，则必须使用。排水盘必须有通向室外的排水管。",
        law_sec3_li4: "<strong>T&P (温度和压力释放) 阀:</strong> 对安全至关重要，其排放管必须将热水引导至安全的排水管，通常在室外。",
        law_btn_back: "查看认证安装包"
    },
    tl: {
        law_title: "Mga Regulasyon ng BAAQMD & Code sa Pag-install",
        law_subtitle: "Ang kumpletong gabay sa 2027 Zero-NOx mandate para sa Bay Area, mga bagong uri ng water heater, at mahigpit na kinakailangan ng CSLB & Title 24.",
        law_sec1_title: "1. Ang 2027 BAAQMD Mandate (Regulation 9, Rule 6)",
        law_sec1_p1: "Ang Bay Area Air Quality Management District (BAAQMD) ay naglabas ng isang makasaysayang amyenda upang mabawasan ang polusyon ng nitrogen oxide (NOx).",
        law_sec1_p2: "<strong>Ano ang ibig sabihin nito?</strong> Simula Enero 1, 2027, magiging ilegal na ang pagbebenta o pag-install ng mga bagong natural gas residential water heater na naglalabas ng NOx. Nangangahulugan ito ng ganap na pag-alis ng mga tradisyunal na gas heater sa Bay Area.",
        law_sec1_li1: "<strong>Agarang Epekto:</strong> Ang mga emergency na pagpapalit pagkatapos ng 2027 ay mahigpit na mangangailangan ng zero-emission electric equipment.",
        law_sec1_li2: "<strong>Transisyon:</strong> Hinihimok ang mga may-ari ng bahay na lumipat sa Heat Pump water heaters bago ang pagbagsak ng imbentaryo sa 2027.",
        law_sec2_title: "2. Mga Uri ng Water Heater (Transisyon patungong Kuryente)",
        law_sec2_p1: "Ang pag-unawa sa mga aprubadong teknolohiya para sa energy transition ng California ay mahalaga para sa pagsunod sa Title 24.",
        law_sec2_li1: "<strong>Hybrid Heat Pump:</strong> Kumukuha ng init mula sa hangin upang initin ang tubig, nakakamit ang higit sa 300% efficiency. Ito ang #1 opsyon na kinakailangan ng estado at kwalipikado para sa pinakamalaking rebate.",
        law_sec2_li2: "<strong>Standard Electric Tank:</strong> Gumagamit ng thermal resistance, mas mababa ang efficiency at karaniwang pinaparusahan sa ilalim ng mahigpit na kalkulasyon ng Title 24, ngunit pinapayagan.",
        law_sec2_li3: "<strong>Electric Tankless:</strong> Agad na pinapainit ang tubig. Kahit walang inilalabas na NOx, nangangailangan ito ng malaking amperage (kadalasan 200A+ panels) at bihirang posible nang walang mamahaling electrical upgrades.",
        law_sec3_title: "3. Mga Espesipikasyon ng Code (CSLB & Title 24)",
        law_sec3_p1: "Ang pag-install ng water heater ay hindi lamang simpleng pagkabit ng tubig. Tinitiyak ng Morales Plumbing ang mahigpit na pagsunod sa California Uniform Plumbing Code (UPC):",
        law_sec3_li1: "<strong>Earthquake Straps:</strong> Kinakailangan ng batas ng California ang dalawang strap sa itaas at ibabang ikatlong bahagi, direktang nakaangkla sa mga wall stud upang maiwasan ang pagtumba tuwing may lindol.",
        law_sec3_li2: "<strong>Thermal Expansion Tank:</strong> Sapilitan sa mga saradong plumbing system upang sipsipin ang labis na presyon, pinoprotektahan ang mga tubo ng bahay at iniiwasan ang pagsabog ng valve.",
        law_sec3_li3: "<strong>Drain Pan:</strong> Kinakailangan kung ang heater ay nasa panloob na platform, attic, o espasyo kung saan ang tagas ay magdudulot ng pinsala. Ang pan ay dapat may drain pipe palabas.",
        law_sec3_li4: "<strong>T&P (Temperature & Pressure Relief) Valve:</strong> Kritikal para sa kaligtasan, ang discharge line nito ay dapat magdala ng mainit na tubig sa ligtas na drain, karaniwan ay sa labas.",
        law_btn_back: "Tingnan ang Certified Installation Packages"
    },
    vi: {
        law_title: "Quy định BAAQMD & Mã Lắp đặt",
        law_subtitle: "Hướng dẫn tối ưu về lệnh Zero-NOx 2027 cho Khu vực Vịnh, các loại máy nước nóng mới và các yêu cầu lắp đặt nghiêm ngặt của CSLB & Tiêu chuẩn 24.",
        law_sec1_title: "1. Lệnh BAAQMD 2027 (Quy định 9, Điều 6)",
        law_sec1_p1: "Khu Quản lý Chất lượng Không khí Vùng Vịnh (BAAQMD) đã ban hành một sửa đổi mang tính bước ngoặt nhằm giảm ô nhiễm nitơ oxit (NOx).",
        law_sec1_p2: "<strong>Điều này có ý nghĩa gì?</strong> Bắt đầu từ ngày 1 tháng 1 năm 2027, việc bán hoặc lắp đặt các máy nước nóng gia đình bằng khí tự nhiên mới thải ra NOx sẽ là bất hợp pháp. Điều này có nghĩa là loại bỏ hoàn toàn máy nước nóng bằng gas truyền thống ở Vùng Vịnh.",
        law_sec1_li1: "<strong>Tác động Ngay lập tức:</strong> Việc thay thế khẩn cấp sau năm 2027 sẽ hoàn toàn yêu cầu thiết bị điện không phát thải.",
        law_sec1_li2: "<strong>Chuyển đổi:</strong> Khuyến cáo chủ nhà nên chuyển sang máy nước nóng Bơm Nhiệt (Heat Pump) trước khi cạn kiệt hàng tồn kho vào năm 2027.",
        law_sec2_title: "2. Các Loại Máy Nước Nóng (Chuyển sang Điện)",
        law_sec2_p1: "Hiểu được các công nghệ được phê duyệt cho quá trình chuyển đổi năng lượng của California là rất quan trọng để tuân thủ Tiêu chuẩn 24.",
        law_sec2_li1: "<strong>Bơm Nhiệt Lai (Heat Pump):</strong> Trích xuất nhiệt từ không khí xung quanh để làm nóng nước, đạt hiệu suất trên 300%. Đây là tùy chọn số 1 được tiểu bang yêu cầu và đủ điều kiện nhận các khoản hoàn tiền tối đa.",
        law_sec2_li2: "<strong>Bình Điện Tiêu chuẩn:</strong> Sử dụng điện trở nhiệt, hiệu suất kém hơn và thường bị phạt theo các tính toán nghiêm ngặt của Tiêu chuẩn 24, nhưng vẫn được phép.",
        law_sec2_li3: "<strong>Điện Không Bình Chứa:</strong> Làm nóng nước ngay lập tức. Dù không phát thải NOx, chúng cần cường độ dòng điện khổng lồ (thường là bảng điện 200A+) và hiếm khi khả thi nếu không nâng cấp điện tốn kém.",
        law_sec3_title: "3. Yêu cầu Tiêu chuẩn (CSLB & Tiêu chuẩn 24)",
        law_sec3_p1: "Lắp đặt máy nước nóng không chỉ là nối ống nước. Morales Plumbing đảm bảo tuân thủ nghiêm ngặt Quy định Ống nước Thống nhất California (UPC):",
        law_sec3_li1: "<strong>Dây Đai Chống Động đất:</strong> Luật California yêu cầu hai dây đai ở một phần ba trên và dưới, được neo trực tiếp vào đinh tán tường để tránh lật khi có động đất.",
        law_sec3_li2: "<strong>Bình Giãn nở Nhiệt:</strong> Bắt buộc trong hệ thống ống nước khép kín để hấp thụ áp suất dư thừa, bảo vệ ống nước trong nhà và ngăn chặn nổ van.",
        law_sec3_li3: "<strong>Khay Thoát Nước (Drain Pan):</strong> Bắt buộc nếu máy nước nóng ở trên bệ trong nhà, gác mái hoặc không gian mà rò rỉ sẽ gây hư hỏng cấu trúc. Khay phải có ống dẫn nước ra ngoài.",
        law_sec3_li4: "<strong>Van T&P (Nhiệt độ & Áp suất):</strong> Rất quan trọng cho an toàn, đường xả của nó phải dẫn nước nóng đến một cống an toàn, thường là bên ngoài.",
        law_btn_back: "Xem Các Gói Lắp đặt Được Chứng nhận"
    }
};

let appJs = fs.readFileSync('app.js', 'utf8');

for (const lang in lawTranslations) {
    let inserts = '';
    for (const key in lawTranslations[lang]) {
        inserts += `\n        "${key}": "${lawTranslations[lang][key].replace(/"/g, '\\"')}",`;
    }
    const target = new RegExp('"' + lang + '": {');
    appJs = appJs.replace(target, '"' + lang + '": {' + inserts);
}

fs.writeFileSync('app.js', appJs);
console.log('Successfully injected law translations into app.js');
