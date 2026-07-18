const fs = require('fs');

// 1. UPDATE req_hp.html
let reqHpPath = 'docs/req_hp.html';
if (fs.existsSync(reqHpPath)) {
    let html = fs.readFileSync(reqHpPath, 'utf8');

    // Remove old comic-panels
    html = html.replace(/<div class="comic-panel">[\s\S]*?<\/div>\s*<div class="comic-panel">[\s\S]*?<\/div>\s*<div class="comic-panel">[\s\S]*?<\/div>/, '');

    // Add new CSS and full 4-bubble layout
    const newComicSection = `
        <style>
            .comic-panel {
                background: rgba(15, 23, 42, 0.8);
                border-radius: 12px;
                padding: 2rem;
                position: relative;
                margin-bottom: 2rem;
                border: 2px solid var(--neon-cyan);
            }
            .comic-panel:nth-of-type(2) { border-color: #ffcc00; }
            .comic-panel:nth-of-type(3) { border-color: #ff5500; }
            
            .comic-img-wrapper {
                position: relative;
                width: 100%;
                border-radius: 8px;
                border: 3px solid #000;
                overflow: hidden;
            }
            .comic-img-wrapper img {
                width: 100%;
                display: block;
            }
            .comic-bubbles {
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                padding: 0; margin: 0; list-style: none;
                pointer-events: none;
            }
            .comic-bubble {
                position: absolute;
                background: #fff;
                border: 3px solid #000;
                color: #000;
                padding: 0.8rem 1.2rem;
                font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
                font-size: 0.85rem;
                font-weight: bold;
                line-height: 1.3;
                text-transform: uppercase;
                box-shadow: 4px 4px 0 #000;
                border-radius: 12px;
                max-width: 40%;
                pointer-events: auto;
            }
            
            .bubble-1 { top: 5%; left: 5%; }
            .bubble-2 { top: 25%; right: 5%; }
            .bubble-3 { bottom: 30%; left: 5%; }
            .bubble-4 { bottom: 5%; right: 5%; }
            
            .bubble-1::before { content:''; position:absolute; border-style:solid; top: 100%; left: 20px; border-width: 15px 15px 0 0; border-color: #000 transparent transparent transparent; }
            .bubble-1::after { content:''; position:absolute; border-style:solid; top: 100%; left: 23px; border-width: 10px 10px 0 0; border-color: #fff transparent transparent transparent; }
            
            .bubble-2::before { content:''; position:absolute; border-style:solid; top: 100%; right: 20px; border-width: 15px 0 0 15px; border-color: #000 transparent transparent transparent; }
            .bubble-2::after { content:''; position:absolute; border-style:solid; top: 100%; right: 23px; border-width: 10px 0 0 10px; border-color: #fff transparent transparent transparent; }
            
            .bubble-3::before { content:''; position:absolute; border-style:solid; bottom: 100%; left: 20px; border-width: 0 15px 15px 0; border-color: transparent #000 transparent transparent; }
            .bubble-3::after { content:''; position:absolute; border-style:solid; bottom: 100%; left: 23px; border-width: 0 10px 10px 0; border-color: transparent #fff transparent transparent; }

            .bubble-4::before { content:''; position:absolute; border-style:solid; bottom: 100%; right: 20px; border-width: 0 0 15px 15px; border-color: transparent transparent transparent #000; }
            .bubble-4::after { content:''; position:absolute; border-style:solid; bottom: 100%; right: 23px; border-width: 0 0 10px 10px; border-color: transparent transparent transparent #fff; }
            
            .comic-narrator {
                background: #ffeb3b;
                border-radius: 0;
            }
            .comic-narrator::before, .comic-narrator::after { display: none; }
            
            @media (max-width: 768px) {
                .comic-bubble {
                    position: static;
                    max-width: 100%;
                    margin-bottom: 1rem;
                }
                .comic-bubbles {
                    position: static;
                    display: flex;
                    flex-direction: column;
                    margin-top: 1rem;
                }
                .comic-bubble::before, .comic-bubble::after { display: none; }
            }
        </style>
        
        <div class="comic-panel">
            <h3 style="color: var(--neon-cyan); font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;" data-i18n="promo_wp_good_title">GOOD (Standard)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_good.png" alt="Step 1">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_wp_good_comic_1">1. Drenar y retirar el viejo calentador de gas.</li>
                    <li class="comic-bubble bubble-2" data-i18n="promo_wp_good_comic_2">2. Instalación de bomba de calor híbrida estándar.</li>
                    <li class="comic-bubble bubble-3" data-i18n="promo_wp_good_comic_3">3. Garantiza el cumplimiento de las normativas BAAQMD 2027.</li>
                    <li class="comic-bubble bubble-4" data-i18n="promo_wp_good_comic_4">4. Sistema activo: Agua caliente ecológica y confiable.</li>
                </ul>
            </div>
        </div>
        
        <div class="comic-panel">
            <h3 style="color: #ffcc00; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;" data-i18n="promo_wp_better_title">BETTER (Premium)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_better.png" alt="Step 2">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_wp_better_comic_1">1. Instalación de la unidad Premium ProTerra.</li>
                    <li class="comic-bubble bubble-2" data-i18n="promo_wp_better_comic_2">2. El equipo técnico conecta el sistema al WiFi del hogar.</li>
                    <li class="comic-bubble bubble-3" data-i18n="promo_wp_better_comic_3">3. Activación de los sensores integrados de detección de fugas.</li>
                    <li class="comic-bubble bubble-4" data-i18n="promo_wp_better_comic_4">4. El cliente disfruta de control total y alertas mediante la app.</li>
                </ul>
            </div>
        </div>
        
        <div class="comic-panel">
            <h3 style="color: #ff5500; font-family: 'Orbitron', sans-serif; text-align: center; margin-bottom: 1.5rem;" data-i18n="promo_wp_best_title">BEST (Ultra-Premium)</h3>
            <div class="comic-img-wrapper">
                <img src="../assets/comic_best.png" alt="Step 3">
                <ul class="comic-bubbles">
                    <li class="comic-bubble bubble-1 comic-narrator" data-i18n="promo_wp_best_comic_1">1. Evaluación del panel eléctrico y actualizaciones necesarias.</li>
                    <li class="comic-bubble bubble-2" data-i18n="promo_wp_best_comic_2">2. Colocación del equipo AeroTherm de 80 galones para máxima capacidad.</li>
                    <li class="comic-bubble bubble-3" data-i18n="promo_wp_best_comic_3">3. Protección de doble ánodo y tecnología de operación ultra silenciosa.</li>
                    <li class="comic-bubble bubble-4" data-i18n="promo_wp_best_comic_4">4. Máxima integración domótica y aumento del valor de la propiedad.</li>
                </ul>
            </div>
        </div>
    </div>`;

    html = html.replace(/<h2[^>]*>Installation Guide \(Comic Narrative\)<\/h2>/, '<h2 style="font-family:\'Orbitron\', sans-serif; text-align:center; color:#ffffff !important; margin: 4rem 0 2rem;" data-i18n="promo_comic_title">Installation Guide (Comic Narrative)</h2>' + newComicSection);
    
    fs.writeFileSync(reqHpPath, html);
    console.log('Fixed req_hp.html');
}

// 2. INJECT INTO app.js
let appPath = 'app.js';
if (fs.existsSync(appPath)) {
    let appJs = fs.readFileSync(appPath, 'utf8');

    const engTrans = `
        "promo_wp_good_comic_1": "1. Drain and remove old gas water heater.",
        "promo_wp_good_comic_2": "2. Installation of standard hybrid heat pump.",
        "promo_wp_good_comic_3": "3. Ensures compliance with 2027 BAAQMD regulations.",
        "promo_wp_good_comic_4": "4. Active system: Reliable and eco-friendly hot water.",
        "promo_wp_better_comic_1": "1. Installation of Premium ProTerra unit.",
        "promo_wp_better_comic_2": "2. Technical team connects system to home WiFi.",
        "promo_wp_better_comic_3": "3. Activation of integrated leak detection sensors.",
        "promo_wp_better_comic_4": "4. Customer enjoys total control and alerts via app.",
        "promo_wp_best_comic_1": "1. Electrical panel evaluation and necessary upgrades.",
        "promo_wp_best_comic_2": "2. Placement of 80-gallon AeroTherm for maximum capacity.",
        "promo_wp_best_comic_3": "3. Dual anode protection and ultra-quiet operation technology.",
        "promo_wp_best_comic_4": "4. Maximum smart home integration and property value increase.",`;

    const espTrans = `
        "promo_wp_good_comic_1": "1. Drenar y retirar el viejo calentador de gas.",
        "promo_wp_good_comic_2": "2. Instalación de bomba de calor híbrida estándar.",
        "promo_wp_good_comic_3": "3. Garantiza el cumplimiento de las normativas BAAQMD 2027.",
        "promo_wp_good_comic_4": "4. Sistema activo: Agua caliente ecológica y confiable.",
        "promo_wp_better_comic_1": "1. Instalación de la unidad Premium ProTerra.",
        "promo_wp_better_comic_2": "2. El equipo técnico conecta el sistema al WiFi del hogar.",
        "promo_wp_better_comic_3": "3. Activación de los sensores integrados de detección de fugas.",
        "promo_wp_better_comic_4": "4. El cliente disfruta de control total y alertas mediante la app.",
        "promo_wp_best_comic_1": "1. Evaluación del panel eléctrico y actualizaciones necesarias.",
        "promo_wp_best_comic_2": "2. Colocación del equipo AeroTherm de 80 galones para máxima capacidad.",
        "promo_wp_best_comic_3": "3. Protección de doble ánodo y tecnología de operación ultra silenciosa.",
        "promo_wp_best_comic_4": "4. Máxima integración domótica y aumento del valor de la propiedad.",`;

    const zhTrans = `
        "promo_wp_good_comic_1": "1. 排空并拆除旧的燃气热水器。",
        "promo_wp_good_comic_2": "2. 安装标准混合热泵。",
        "promo_wp_good_comic_3": "3. 确保符合 2027 BAAQMD 法规。",
        "promo_wp_good_comic_4": "4. 活跃系统：可靠环保的热水。",
        "promo_wp_better_comic_1": "1. 安装高级 ProTerra 装置。",
        "promo_wp_better_comic_2": "2. 技术团队将系统连接到家庭 WiFi。",
        "promo_wp_better_comic_3": "3. 激活集成漏水检测传感器。",
        "promo_wp_better_comic_4": "4. 客户可通过应用程序享受全面控制和警报。",
        "promo_wp_best_comic_1": "1. 电气面板评估和必要的升级。",
        "promo_wp_best_comic_2": "2. 放置 80 加仑 AeroTherm 以获得最大容量。",
        "promo_wp_best_comic_3": "3. 双阳极保护和超静音操作技术。",
        "promo_wp_best_comic_4": "4. 最大的智能家居集成和房产增值。",`;

    const tlTrans = `
        "promo_wp_good_comic_1": "1. Ubusin ang tubig at alisin ang lumang gas heater.",
        "promo_wp_good_comic_2": "2. Pag-install ng standard hybrid heat pump.",
        "promo_wp_good_comic_3": "3. Sinisiguro ang pagsunod sa 2027 BAAQMD regulations.",
        "promo_wp_good_comic_4": "4. Aktibong sistema: Maaasahan at eco-friendly na mainit na tubig.",
        "promo_wp_better_comic_1": "1. Pag-install ng Premium ProTerra unit.",
        "promo_wp_better_comic_2": "2. Ikinokonekta ng technical team ang sistema sa WiFi ng bahay.",
        "promo_wp_better_comic_3": "3. Pag-activate ng mga integrated leak detection sensor.",
        "promo_wp_better_comic_4": "4. Masisiyahan ang customer sa buong kontrol at mga alerto gamit ang app.",
        "promo_wp_best_comic_1": "1. Pagsusuri sa electrical panel at kinakailangang pag-upgrade.",
        "promo_wp_best_comic_2": "2. Paglalagay ng 80-gallon AeroTherm para sa maximum capacity.",
        "promo_wp_best_comic_3": "3. Dual anode protection at ultra-quiet operation technology.",
        "promo_wp_best_comic_4": "4. Pinakamataas na smart home integration at pagtaas ng halaga ng ari-arian.",`;

    const viTrans = `
        "promo_wp_good_comic_1": "1. Xả và tháo bình nóng lạnh gas cũ.",
        "promo_wp_good_comic_2": "2. Lắp đặt bơm nhiệt hybrid tiêu chuẩn.",
        "promo_wp_good_comic_3": "3. Đảm bảo tuân thủ các quy định BAAQMD 2027.",
        "promo_wp_good_comic_4": "4. Hệ thống hoạt động: Nước nóng đáng tin cậy và thân thiện với môi trường.",
        "promo_wp_better_comic_1": "1. Lắp đặt thiết bị ProTerra Cao cấp.",
        "promo_wp_better_comic_2": "2. Đội ngũ kỹ thuật kết nối hệ thống với WiFi tại nhà.",
        "promo_wp_better_comic_3": "3. Kích hoạt cảm biến phát hiện rò rỉ tích hợp.",
        "promo_wp_better_comic_4": "4. Khách hàng tận hưởng quyền kiểm soát toàn bộ và cảnh báo qua ứng dụng.",
        "promo_wp_best_comic_1": "1. Đánh giá bảng điện và các nâng cấp cần thiết.",
        "promo_wp_best_comic_2": "2. Đặt AeroTherm 80 gallon để đạt công suất tối đa.",
        "promo_wp_best_comic_3": "3. Bảo vệ anốt kép và công nghệ hoạt động cực êm.",
        "promo_wp_best_comic_4": "4. Tích hợp nhà thông minh tối đa và tăng giá trị tài sản.",`;

    // Only inject if not already there
    if (!appJs.includes("promo_wp_good_comic_1")) {
        appJs = appJs.replace(/en:\s*\{/, "en: {" + engTrans);
        appJs = appJs.replace(/es:\s*\{/, "es: {" + espTrans);
        appJs = appJs.replace(/zh:\s*\{/, "zh: {" + zhTrans);
        appJs = appJs.replace(/tl:\s*\{/, "tl: {" + tlTrans);
        appJs = appJs.replace(/vi:\s*\{/, "vi: {" + viTrans);
        fs.writeFileSync(appPath, appJs);
        console.log('Injected translations into app.js');
    } else {
        console.log('Translations already in app.js');
    }
}
