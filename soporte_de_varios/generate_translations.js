const fs = require('fs');

const translations = {
    en: {
        ai: "Hello! I am Joe AI. Press the VOICE button below and tell me in detail what plumbing issue you have at home today.",
        d1: "Most common issues: Blades jammed by hard/fibrous food, or motor overheated (auto shut-off).",
        d2: "If the unit hums but won't spin, insert a 1/4\" Allen wrench into the bottom hex hole and turn to free the blades.",
        d3: "If it makes no sound, press the red RESET button on the bottom. Always use cold water when grinding to solidify grease.",
        h1: "Most common issues: Damaged thermocouple, blown pilot, or scale buildup causing 'popping' noises and low efficiency.",
        h2: "WARNING: Emissions regulations (BAAQMD / Title 24) in California will ban traditional NOx gas heaters by 2027.",
        h3: "Transitioning to Hybrid Heat Pump Water Heaters is essential for zero emissions and state rebate eligibility.",
        t1: "Most common issues: Toilet constantly running water (phantom leak) due to a chlorine-degraded flapper or broken fill valve.",
        t2: "A leaking toilet can waste up to 200 gallons of drinking water a day, skyrocketing your monthly bill.",
        t3: "Shut off the wall valve. Replace the rubber flapper in the tank or install a complete rebuild kit.",
        s1: "Most common issues: P-Trap blockage from hair buildup, soap, or solidified cooking grease.",
        s2: "Place a bucket underneath. Manually unscrew the slip nuts on the U-bend and clean the pipe directly.",
        s3: "Avoid corrosive chemicals (Drano) that destroy PVC. Use strainers and monthly bio-enzymatic cleaners.",
        sh1: "Most common issues: Low pressure due to calcification (scale) in the nozzles, or constant drip from a worn ceramic cartridge.",
        sh2: "For scale: Soak the showerhead in white vinegar for 4 hours using a plastic bag and rubber band.",
        sh3: "For drips: Requires shutting off the main house water and replacing the internal valve cartridge (e.g., Moen 1222).",
        v1: "Most common issues: Old gate valves (wheel type) get stuck or leak from the stem when trying to close them in an emergency.",
        v2: "If there is a leak, shut off the main house valve (usually at the front of the house or in the garage).",
        v3: "We recommend replacing old wheel valves with brass ball valves (1/4 turn) for quick and safe shut-off.",
        f1: "Most common issues: Constant drip from the spout or leaking at the handle base due to dry O-rings.",
        f2: "Turn off the supply stops under the sink. Remove the handle with an Allen wrench and replace the internal cartridge.",
        f3: "Install new 1.2 GPM aerators to reduce water consumption and comply with CALGreen standards.",
        g1: "Most common issues: Power loss in garbage disposals or tankless heaters. GFCI cuts power if it detects moisture.",
        g2: "Locate the GFCI outlet on the wall (usually near water). Ensure it is completely dry.",
        g3: "Firmly press the red/black 'RESET' button. If it trips again immediately, there is a dangerous short circuit.",
        sm1: "Most common issues: Rotten egg smell (sewer gas). Occurs when water in a P-trap evaporates from lack of use.",
        sm2: "Pour a bucket of water down floor drains, guest sinks, or unused tubs to restore the water seal.",
        sm3: "If the odor persists, the roof vent pipe may be blocked, requiring specialized equipment."
    },
    es: {
        ai: "¡Hola! Soy Joe AI. Presiona el botón de VOICE abajo y cuéntame detalladamente qué problema de plomería tienes en tu casa hoy.",
        d1: "Fallas más comunes: Atasco de las aspas por alimentos duros/fibrosos, o motor sobrecalentado (apagado automático).",
        d2: "Si el equipo zumba pero no gira, inserta una llave Allen de 1/4\" en el orificio hexagonal inferior y gírala para destrabar las cuchillas.",
        d3: "Si no hace ningún ruido, presiona el botón rojo de RESET en la base. Usa siempre agua fría al moler para solidificar la grasa.",
        h1: "Fallas más comunes: Termopar dañado, piloto apagado, o acumulación calcárea que provoca ruidos de 'estallido' y baja eficiencia.",
        h2: "ATENCIÓN: Regulaciones de emisiones (BAAQMD / Título 24) en California prohibirán los calentadores de gas tradicionales de NOx para 2027.",
        h3: "Es indispensable la transición a Calentadores Híbridos con Bomba de Calor (Heat Pump) para cero emisiones y aprovechar reembolsos estatales.",
        t1: "Fallas más comunes: Inodoro corriendo agua sin parar (fuga fantasma) debido a un 'flapper' degradado por cloro, o válvula de llenado rota.",
        t2: "Un inodoro con fugas puede desperdiciar hasta 200 galones de agua potable al día, disparando su factura mensual.",
        t3: "Cierre la válvula de pared. Reemplace el 'flapper' de goma en el tanque o instale un kit de reconstrucción completo.",
        s1: "Fallas más comunes: Obstrucción de la trampa P (P-Trap) por acumulación de cabello, jabón, o grasa de cocina solidificada.",
        s2: "Coloque una cubeta debajo. Desenrosque manualmente las tuercas deslizantes de la curva en U y limpie la tubería directamente.",
        s3: "Evite químicos corrosivos (Drano) que destruyen el PVC. Use coladores y limpiadores bio-enzimáticos mensuales.",
        sh1: "Fallas más comunes: Baja presión por calcificación (sarro) en los aspersores, o goteo constante por cartucho cerámico desgastado.",
        sh2: "Para el sarro: Sumerja el cabezal en vinagre blanco por 4 horas usando una bolsa plástica y liga.",
        sh3: "Para goteo: Se requiere cerrar el agua de la casa y reemplazar el cartucho interno de la válvula (ej. Moen 1222).",
        v1: "Fallas más comunes: Las válvulas de compuerta antiguas (de rueda) se atascan o gotean por el vástago al intentar cerrarlas en una emergencia.",
        v2: "Si hay fuga, cierre la válvula principal de la casa (generalmente al frente de la casa o en el garaje).",
        v3: "Recomendamos reemplazar válvulas de rueda viejas por válvulas de bola de latón (1/4 de vuelta) para un cierre rápido y seguro.",
        f1: "Fallas más comunes: Goteo constante desde la boquilla o filtración por la base de las manijas debido a O-rings secos.",
        f2: "Cierre las llaves de paso bajo el lavamanos. Retire la manija con llave Allen y reemplace el cartucho cilíndrico interno.",
        f3: "Instale aereadores nuevos de 1.2 GPM para reducir el consumo de agua y cumplir con las normas CALGreen.",
        g1: "Fallas más comunes: Pérdida de energía en trituradores de basura o calentadores de paso. El GFCI corta la luz si detecta humedad.",
        g2: "Localice el tomacorriente GFCI en la pared (generalmente cerca del agua). Asegúrese de que esté seco.",
        g3: "Presione firmemente el botón rojo/negro de 'RESET'. Si vuelve a saltar inmediatamente, hay un cortocircuito peligroso.",
        sm1: "Fallas más comunes: Olor a huevo podrido (gas de alcantarilla). Ocurre cuando el agua de una trampa P se evapora por falta de uso.",
        sm2: "Vierta una cubeta de agua en drenajes de piso, lavamanos de visitas o tinas sin uso para restaurar el sello de agua.",
        sm3: "Si el olor persiste, es posible que la tubería de ventilación en el techo esté bloqueada, requiriendo equipo especializado."
    },
    zh: {
        ai: "你好！我是 Joe AI。按下方的 VOICE 按钮，详细告诉我你今天家里遇到的管道问题。",
        d1: "最常见的问题：刀片被坚硬/纤维状食物卡住，或电机过热（自动断电）。",
        d2: "如果设备发出嗡嗡声但不转动，请将 1/4\" 内六角扳手插入底部六角孔并转动以释放刀片。",
        d3: "如果不发出任何声音，请按下底部的红色 RESET 按钮。研磨时始终使用冷水使油脂凝固。",
        h1: "最常见的问题：热电偶损坏，导火索熄灭，或水垢堆积引起'爆裂'声和效率低下。",
        h2: "警告：加州的排放法规（BAAQMD / Title 24）将于2027年禁止传统的NOx燃气热水器。",
        h3: "向混合热泵热水器过渡对于实现零排放和获得州补贴资格至关重要。",
        t1: "最常见的问题：由于氯气降解的挡板或注水阀损坏，马桶不断流水（幻影泄漏）。",
        t2: "漏水的马桶每天可浪费多达200加仑的饮用水，导致您的月账单飙升。",
        t3: "关闭墙壁阀门。更换水箱中的橡胶挡板或安装完整的重建套件。",
        s1: "最常见的问题：由于头发堆积、肥皂或凝固的烹饪油脂导致 P-Trap 堵塞。",
        s2: "在下面放一个桶。手动拧开 U 形弯头上的滑环螺母，直接清洁管道。",
        s3: "避免使用破坏 PVC 的腐蚀性化学品 (Drano)。使用过滤器和每月的生物酶清洁剂。",
        sh1: "最常见的问题：喷嘴中钙化（水垢）导致水压低，或磨损的陶瓷滤芯导致持续滴水。",
        sh2: "去水垢：使用塑料袋和橡皮筋将淋浴头浸泡在白醋中4小时。",
        sh3: "对于滴水：需要关闭房屋的主水源，并更换内部阀门滤芯（例如，Moen 1222）。",
        v1: "最常见的问题：在紧急情况下尝试关闭时，旧的闸阀（手轮式）卡住或阀杆漏水。",
        v2: "如果有泄漏，请关闭房屋的主阀门（通常在房屋前面或车库中）。",
        v3: "我们建议用黄铜球阀（1/4圈）替换旧的手轮阀，以便快速安全地关闭。",
        f1: "最常见的问题：由于O形圈干燥，喷口不断滴水或手柄底部漏水。",
        f2: "关闭水槽下的供水停止阀。用内六角扳手拆下手柄，并更换内部滤芯。",
        f3: "安装新的 1.2 GPM 曝气器以减少用水量并符合 CALGreen 标准。",
        g1: "最常见的问题：垃圾处理器或无罐热水器断电。如果检测到湿气，GFCI 会切断电源。",
        g2: "找到墙上的 GFCI 插座（通常靠近水）。确保其完全干燥。",
        g3: "用力按下红/黑“RESET”按钮。如果立即再次跳闸，则存在危险的短路。",
        sm1: "最常见的问题：臭鸡蛋味（下水道气体）。当 P-trap 中的水因未使用而蒸发时发生。",
        sm2: "将一桶水倒入地漏、客用洗手池或未使用的浴缸中以恢复水封。",
        sm3: "如果气味持续存在，屋顶通风管可能被堵塞，需要专用设备。"
    },
    tl: {
        ai: "Kamusta! Ako si Joe AI. Pindutin ang VOICE button sa ibaba at sabihin sa akin ng detalyado kung anong problema sa tubo ang meron ka sa bahay ngayon.",
        d1: "Pinaka-karaniwang isyu: Nabara ang mga blades ng matigas/mabuhok na pagkain, o nag-overheat ang motor (auto shut-off).",
        d2: "Kung ang unit ay umuugong ngunit hindi umiikot, ipasok ang 1/4\" Allen wrench sa ilalim na hex hole at iikot upang paluwagin ang mga blades.",
        d3: "Kung walang tunog, pindutin ang pulang RESET button sa ibaba. Palaging gumamit ng malamig na tubig habang naghihiwa para patigasin ang mantika.",
        h1: "Pinaka-karaniwang isyu: Sira ang thermocouple, patay ang pilot, o namumuong dumi na nagiging sanhi ng 'popping' na tunog at mababang efficiency.",
        h2: "BABALA: Ipagbabawal ng mga regulasyon sa emisyon (BAAQMD / Title 24) sa California ang tradisyunal na NOx gas heaters bago ang 2027.",
        h3: "Mahalaga ang paglipat sa Hybrid Heat Pump Water Heaters para sa zero emissions at kwalipikasyon sa state rebate.",
        t1: "Pinaka-karaniwang isyu: Patuloy na umaagos ang tubig sa inidoro (phantom leak) dahil sa sirang flapper o fill valve.",
        t2: "Ang tumutulong inidoro ay maaaring mag-aksaya ng hanggang 200 galon ng tubig bawat araw, na magpapalaki sa iyong buwanang bill.",
        t3: "Patayin ang wall valve. Palitan ang rubber flapper sa tangke o mag-install ng buong rebuild kit.",
        s1: "Pinaka-karaniwang isyu: P-Trap blockage mula sa naipong buhok, sabon, o tumigas na mantika.",
        s2: "Maglagay ng balde sa ilalim. Manwal na tanggalin ang slip nuts sa U-bend at direktang linisin ang tubo.",
        s3: "Iwasan ang matatapang na kemikal (Drano) na nakakasira sa PVC. Gumamit ng strainers at buwanang bio-enzymatic cleaners.",
        sh1: "Pinaka-karaniwang isyu: Mahinang pressure dahil sa calcification (scale) sa mga nozzle, o patuloy na pagtulo mula sa sirang ceramic cartridge.",
        sh2: "Para sa scale: Ibabad ang showerhead sa white vinegar sa loob ng 4 na oras gamit ang plastic bag at rubber band.",
        sh3: "Para sa pagtulo: Kailangang patayin ang pangunahing tubig sa bahay at palitan ang internal valve cartridge (hal. Moen 1222).",
        v1: "Pinaka-karaniwang isyu: Ang mga lumang gate valves (wheel type) ay naiipit o tumutulo mula sa stem kapag sinusubukang isara ito sa emergency.",
        v2: "Kung may tulo, isara ang pangunahing balbula ng bahay (karaniwang nasa harap ng bahay o sa garahe).",
        v3: "Inirerekomenda naming palitan ang lumang wheel valves ng brass ball valves (1/4 turn) para mabilis at ligtas na pagsasara.",
        f1: "Pinaka-karaniwang isyu: Patuloy na pagtulo mula sa spout o pag-leak sa base ng handle dahil sa tuyong O-rings.",
        f2: "Patayin ang supply stops sa ilalim ng lababo. Tanggalin ang handle gamit ang Allen wrench at palitan ang internal cartridge.",
        f3: "Maglagay ng bagong 1.2 GPM aerators para mabawasan ang pagkonsumo ng tubig at sumunod sa CALGreen standards.",
        g1: "Pinaka-karaniwang isyu: Nawalan ng kuryente sa garbage disposals o tankless heaters. Pinuputol ng GFCI ang kuryente kung may ma-detect na basa.",
        g2: "Hanapin ang GFCI outlet sa dingding (karaniwang malapit sa tubig). Siguraduhing ito ay tuyo.",
        g3: "Mariing pindutin ang pula/itim na 'RESET' button. Kung agad itong mag-trip muli, may mapanganib na short circuit.",
        sm1: "Pinaka-karaniwang isyu: Amoy bulok na itlog (sewer gas). Nangyayari kapag natutuyo ang tubig sa P-trap dahil hindi ginagamit.",
        sm2: "Magbuhos ng isang balde ng tubig sa floor drains, guest sinks, o hindi ginagamit na tubs para ibalik ang water seal.",
        sm3: "Kung hindi nawala ang amoy, maaaring nakabara ang roof vent pipe, na nangangailangan ng espesyal na kagamitan."
    },
    vi: {
        ai: "Xin chào! Tôi là Joe AI. Hãy nhấn nút VOICE bên dưới và mô tả chi tiết vấn đề hệ thống ống nước bạn đang gặp phải tại nhà hôm nay.",
        d1: "Các vấn đề phổ biến nhất: Lưỡi dao bị kẹt do thức ăn cứng/xơ, hoặc động cơ quá nóng (tự động ngắt).",
        d2: "Nếu thiết bị kêu vo vo nhưng không quay, cắm cờ lê Allen 1/4\" vào lỗ lục giác dưới đáy và xoay để nới lỏng lưỡi dao.",
        d3: "Nếu không có âm thanh, nhấn nút RESET màu đỏ ở dưới. Luôn dùng nước lạnh khi xay để làm đông mỡ.",
        h1: "Các vấn đề phổ biến nhất: Cặp nhiệt điện hỏng, đèn hoa tiêu tắt, hoặc cặn bám gây ra tiếng 'lốp bốp' và hiệu suất thấp.",
        h2: "CẢNH BÁO: Các quy định về khí thải (BAAQMD / Title 24) tại California sẽ cấm các máy nước nóng khí NOx truyền thống vào năm 2027.",
        h3: "Chuyển sang Máy Nước Nóng Bơm Nhiệt Lai là cần thiết để không phát thải và đủ điều kiện nhận trợ cấp của tiểu bang.",
        t1: "Các vấn đề phổ biến nhất: Bồn cầu liên tục chảy nước (rò rỉ ảo) do van cao su bị clo làm thoái hóa hoặc van cấp bị hỏng.",
        t2: "Bồn cầu rò rỉ có thể lãng phí tới 200 gallon nước sạch mỗi ngày, làm hóa đơn hàng tháng của bạn tăng vọt.",
        t3: "Tắt van trên tường. Thay thế van cao su trong bể hoặc lắp một bộ phụ tùng thay thế hoàn chỉnh.",
        s1: "Các vấn đề phổ biến nhất: Nghẹt P-Trap do tích tụ tóc, xà phòng, hoặc mỡ nấu ăn bị đông đặc.",
        s2: "Đặt một cái xô bên dưới. Xoay tay để mở các đai ốc trên ống chữ U và trực tiếp làm sạch đường ống.",
        s3: "Tránh các hóa chất ăn mòn (Drano) làm hỏng PVC. Sử dụng lưới lọc và chất tẩy rửa sinh học hàng tháng.",
        sh1: "Các vấn đề phổ biến nhất: Áp lực yếu do vôi hóa (cặn) trong vòi phun, hoặc nhỏ giọt liên tục từ lõi gốm bị mòn.",
        sh2: "Xử lý cặn: Ngâm đầu vòi hoa sen trong giấm trắng 4 giờ bằng túi ni lông và dây chun.",
        sh3: "Xử lý nhỏ giọt: Cần khóa nước chính của nhà và thay thế lõi van bên trong (vd: Moen 1222).",
        v1: "Các vấn đề phổ biến nhất: Van cổng cũ (loại bánh xe) bị kẹt hoặc rò rỉ từ trục khi cố gắng đóng chúng trong trường hợp khẩn cấp.",
        v2: "Nếu có rò rỉ, khóa van chính của ngôi nhà (thường ở phía trước nhà hoặc trong nhà để xe).",
        v3: "Chúng tôi khuyên nên thay van bánh xe cũ bằng van bi đồng (quay 1/4) để khóa nước nhanh và an toàn.",
        f1: "Các vấn đề phổ biến nhất: Nhỏ giọt liên tục từ vòi hoặc rò rỉ ở đế tay cầm do vòng đệm chữ O bị khô.",
        f2: "Tắt các chốt cấp nước dưới bồn rửa. Tháo tay cầm bằng cờ lê Allen và thay thế lõi bên trong.",
        f3: "Lắp đặt máy tạo bọt 1.2 GPM mới để giảm tiêu thụ nước và tuân thủ tiêu chuẩn CALGreen.",
        g1: "Các vấn đề phổ biến nhất: Mất điện ở máy xay rác hoặc máy nước nóng không bình. GFCI cắt điện nếu phát hiện hơi ẩm.",
        g2: "Tìm ổ cắm GFCI trên tường (thường gần nước). Đảm bảo nó hoàn toàn khô ráo.",
        g3: "Nhấn mạnh nút 'RESET' đỏ/đen. Nếu nó lập tức nhảy lại, có một đoạn mạch ngắn nguy hiểm.",
        sm1: "Các vấn đề phổ biến nhất: Mùi trứng thối (khí cống). Xảy ra khi nước trong P-trap bay hơi do không sử dụng.",
        sm2: "Đổ một xô nước xuống cống thoát sàn, bồn rửa khách, hoặc bồn tắm không dùng để khôi phục nút nước.",
        sm3: "Nếu mùi vẫn còn, ống thông hơi trên mái có thể bị tắc, cần thiết bị chuyên dụng."
    }
};

let html = fs.readFileSync('docs/diy_hub.html', 'utf8');

const tJSON = JSON.stringify(translations, null, 4);

let functionString = `
        const diyTrans = ${tJSON};
        function getIssuesData() {
            const lang = localStorage.getItem('morales_lang') || 'es';
            const t = diyTrans[lang] || diyTrans['es'];
            return {
                custom: {
                    target: "TARGET: AI SENSOR ANALYSIS",
                    bg: "url('../assets/comic_ai.webp')",
                    panels: [{ cap: "Joe AI:", img: "../assets/joe_avatar.png", text: t.ai }]
                },
                disposal: {
                    target: "KNOWLEDGE BASE: GARBAGE DISPOSAL",
                    bg: "url('../assets/diy_disposal.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_wrench.png", text: t.d1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/disp_step2.png", text: t.d2 },
                        { cap: "PREVENTION:", img: "../assets/disp_step1.png", text: t.d3 }
                    ]
                },
                heater: {
                    target: "KNOWLEDGE BASE: WATER HEATERS",
                    bg: "url('../assets/diy_heater.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_heaters.png", text: t.h1 },
                        { cap: "WARNING / AVISO:", img: "../assets/comic_warning.png", text: t.h2 },
                        { cap: "SOLUTION:", img: "../assets/comic_best.png", text: t.h3 }
                    ]
                },
                toilet: {
                    target: "KNOWLEDGE BASE: TOILET SYSTEMS",
                    bg: "url('../assets/diy_toilet.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_eco.webp", text: t.t1 },
                        { cap: "IMPACT:", img: "../assets/comic_good.png", text: t.t2 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_best_v2.png", text: t.t3 }
                    ]
                },
                sink: {
                    target: "KNOWLEDGE BASE: SINK DRAINAGE",
                    bg: "url('../assets/diy_sink.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_catalog.png", text: t.s1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_wrench.png", text: t.s2 },
                        { cap: "PREVENTION:", img: "../assets/comic_good_v2.png", text: t.s3 }
                    ]
                },
                shower: {
                    target: "KNOWLEDGE BASE: SHOWER FIXTURES",
                    bg: "url('../assets/diy_shower.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_treatment.png", text: t.sh1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_eco.png", text: t.sh2 },
                        { cap: "ADVANCED:", img: "../assets/comic_shield.png", text: t.sh3 }
                    ]
                },
                valve: {
                    target: "KNOWLEDGE BASE: SHUT-OFF VALVES",
                    bg: "url('../assets/diy_valve.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_warning.png", text: t.v1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_expansion.png", text: t.v2 },
                        { cap: "UPGRADE:", img: "../assets/comic_terms.png", text: t.v3 }
                    ]
                },
                faucet: {
                    target: "KNOWLEDGE BASE: FAUCETS",
                    bg: "url('../assets/diy_faucet.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_copper.png", text: t.f1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_wrench.png", text: t.f2 },
                        { cap: "EFFICIENCY:", img: "../assets/comic_good.png", text: t.f3 }
                    ]
                },
                gfi: {
                    target: "KNOWLEDGE BASE: ELECTRICAL GFI",
                    bg: "url('../assets/diy_gfi.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_shield.png", text: t.g1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_warning.png", text: t.g2 },
                        { cap: "PREVENTION:", img: "../assets/comic_best.png", text: t.g3 }
                    ]
                },
                smell: {
                    target: "KNOWLEDGE BASE: SEWER GAS ODOR",
                    bg: "url('../assets/diy_smell.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/comic_septic.png", text: t.sm1 },
                        { cap: "HOW-TO / CÓMO:", img: "../assets/comic_treatment.png", text: t.sm2 },
                        { cap: "PREVENTION:", img: "../assets/comic_eco.png", text: t.sm3 }
                    ]
                }
            };
        }
`;

html = html.replace(/const issuesData = \{[\s\S]*?\n        \};\n/, functionString);
html = html.replace(/issuesData\[/g, "getIssuesData()[");

// In window.onload we also need to respond to language changes if the user goes back or if we poll it.
// Actually, the user changes the language on index.html, not inside diy_hub.html.
// So reading localStorage on load is PERFECT because they must exit diy_hub to change language anyway!

fs.writeFileSync('docs/diy_hub.html', html);
console.log("Translations successfully generated and injected into diy_hub.html.");
