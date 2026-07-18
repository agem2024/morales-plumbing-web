import os

html_content = """<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hazlo Tú Mismo | Morales Plumbing</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=Black+Ops+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../universe.css">
    <style>
        :root { --cyan: #00f5ff; --orange: #ff8c00; --dark: #030712; --card: rgba(8, 14, 36, 0.45); --border: #000000; --text: #d9e8f0; }
        body { background-color: var(--dark); color: var(--text); font-family: 'Inter', sans-serif; min-height: 100vh; }
        .faq-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; background: rgba(3, 7, 18, 0.9); backdrop-filter: blur(14px); border-bottom: 3px solid #000; }
        .faq-nav a { color: var(--orange); text-decoration: none; font-family: 'Orbitron'; font-weight: 700; }
        .faq-hero { padding: 120px 20px 40px; text-align: center; }
        .graffiti-title { font-family: 'Black Ops One', cursive; font-size: 3.5rem; text-transform: uppercase; background: linear-gradient(to bottom, #ffffff, #00f5ff, #ff8c00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(2px 2px 0px #000); margin: 0; }
        .search-container { max-width: 600px; margin: 30px auto; position: relative; }
        .faq-search { width: 100%; padding: 15px 25px; border-radius: 30px; border: 3px solid #000; background: rgba(0, 245, 255, 0.1); color: #fff; font-size: 1.1rem; outline: none; transition: 0.3s; box-shadow: 4px 4px 0px #000; }
        .faq-search:focus { border-color: var(--cyan); box-shadow: 6px 6px 0px var(--cyan); background: rgba(0,0,0,0.8); }
        .nav-right { display: flex; gap: 10px; }
        .lang-btn { background: transparent; border: 2px solid var(--orange); color: var(--orange); padding: 5px 10px; cursor: pointer; border-radius: 8px; font-weight: bold; }
        .lang-btn:hover { background: var(--orange); color: #000; }
        
        .diy-container { max-width: 1200px; margin: 0 auto 100px; padding: 0 20px; display: flex; gap: 30px; align-items: flex-start; }
        .diy-list { flex: 2; display: flex; flex-direction: column; gap: 20px; }
        .joe-ai-panel { flex: 1; position: sticky; top: 100px; background: rgba(0,0,0,0.6); border: 2px solid var(--cyan); padding: 20px; border-radius: 12px; box-shadow: 0 0 15px rgba(0, 255, 170, 0.2); }
        
        .diy-task { background: var(--card); border: 2px solid #000; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; transition: 0.3s; }
        .diy-task:hover { border-color: var(--orange); box-shadow: 4px 4px 0px var(--orange); }
        .diy-task-header { padding: 15px 20px; background: rgba(0,0,0,0.8); border-bottom: 2px solid #000; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .diy-task-header h3 { margin: 0; color: var(--cyan); font-family: 'Orbitron'; font-size: 1.2rem; }
        .diy-task-content { padding: 20px; display: none; }
        .diy-task-content.active { display: block; }
        
        .task-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .task-box { background: rgba(0,0,0,0.4); padding: 15px; border: 1px solid #333; border-radius: 8px; }
        .task-box h4 { color: var(--orange); margin-top: 0; font-family: 'Orbitron'; }
        .task-box ul { padding-left: 20px; margin: 0; }
        .task-box li { margin-bottom: 5px; }
        
        .task-illustration { width: 100%; max-height: 200px; object-fit: contain; border-radius: 8px; border: 1px solid #333; margin-top: 15px; }
        .youtube-btn { display: inline-block; padding: 10px 15px; background: #ff0000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px; }
        
        .calc-input { width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 6px; border: 1px solid var(--cyan); background: rgba(0,0,0,0.8); color: #fff; }
        .calc-btn { width: 100%; padding: 10px; background: var(--cyan); color: #000; border: none; font-weight: bold; cursor: pointer; font-family: 'Orbitron'; }
        
        @media(max-width: 768px) {
            .diy-container { flex-direction: column; }
            .joe-ai-panel { position: static; width: 100%; }
            .task-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <nav class="faq-nav">
        <a href="../index.html" data-i18n="nav_back">← BACK</a>
        <div class="nav-right">
            <button class="lang-btn" onclick="setLanguage('en')">EN</button>
            <button class="lang-btn" onclick="setLanguage('es')">ES</button>
            <button class="lang-btn" onclick="setLanguage('zh')">ZH</button>
            <button class="lang-btn" onclick="setLanguage('tl')">TL</button>
            <button class="lang-btn" onclick="setLanguage('vi')">VI</button>
        </div>
    </nav>

    <section class="faq-hero">
        <h1 class="graffiti-title" data-i18n="htm_title">Hazlo Tú Mismo</h1>
        <p style="color: #aaa; margin-top: 10px; font-family: 'Orbitron'; letter-spacing: 1px;" data-i18n="htm_subtitle">Top 10 Easy Home Repairs from FAQ 100</p>
        <div class="search-container">
            <input type="text" id="searchInput" class="faq-search" placeholder="Buscar reparación / Search repair..." onkeyup="filterTasks()">
        </div>
    </section>

    <div class="diy-container">
        <!-- DIY LIST -->
        <div class="diy-list" id="taskList">
            <!-- Tasks will be injected here by JS -->
        </div>

        <!-- JOE AI PANEL -->
        <div class="joe-ai-panel">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                <img src="../assets/joe_avatar.webp" style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid var(--cyan);">
                <h3 style="margin: 0; color: var(--cyan); font-family: 'Orbitron';" data-i18n="htm_joe_title">Joe AI Assistant</h3>
            </div>
            <p data-i18n="htm_joe_desc" style="font-size: 0.9rem; color: #ccc;">Select a task to get material calculations, or ask me to navigate.</p>
            
            <div id="calculatorBox" style="display:none; margin-top: 20px; border-top: 1px dashed var(--cyan); padding-top: 20px;">
                <h4 style="color: var(--orange); margin-top: 0;" id="calcTitle">Calculator</h4>
                <label style="font-size: 0.8rem; color: #aaa;" id="calcLabel">Measurement:</label>
                <input type="number" id="calcInput" class="calc-input" placeholder="e.g. 10">
                <button class="calc-btn" onclick="calculateMaterials()" data-i18n="htm_calc_btn">Calculate Materials</button>
                <p id="calcResult" style="margin-top: 15px; font-weight: bold; color: var(--cyan);"></p>
            </div>
        </div>
    </div>

    <script>
        const tasks = [
            {
                id: "t1",
                key: "disposal",
                img: "../assets/diy_disposal.png",
                yt: "https://www.youtube.com/results?search_query=how+to+unjam+garbage+disposal+allen+wrench"
            },
            {
                id: "t2",
                key: "heater",
                img: "../assets/diy_heater.png",
                yt: "https://www.youtube.com/results?search_query=how+to+reset+water+heater+thermal+switch"
            },
            {
                id: "t3",
                key: "toilet",
                img: "../assets/diy_toilet.png",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+running+toilet+flapper"
            },
            {
                id: "t4",
                key: "sink",
                img: "../assets/diy_sink.png",
                yt: "https://www.youtube.com/results?search_query=how+to+unclog+sink+p-trap"
            },
            {
                id: "t5",
                key: "aerator",
                img: "../assets/pb_svc_11.png",
                yt: "https://www.youtube.com/results?search_query=how+to+clean+faucet+aerator"
            },
            {
                id: "t6",
                key: "faucet",
                img: "../assets/diy_faucet.png",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+leaky+faucet+cartridge"
            },
            {
                id: "t7",
                key: "caulk",
                img: "../assets/pb_svc_10.png",
                yt: "https://www.youtube.com/results?search_query=how+to+caulk+a+bathtub"
            },
            {
                id: "t8",
                key: "showerhead",
                img: "../assets/pb_svc_14.png",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+shower+head"
            },
            {
                id: "t9",
                key: "smell",
                img: "../assets/diy_smell.png",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+sewer+gas+smell+floor+drain"
            },
            {
                id: "t10",
                key: "washer_hose",
                img: "../assets/pb_svc_12.png",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+washing+machine+hoses"
            }
        ];

        function renderTasks() {
            const list = document.getElementById('taskList');
            list.innerHTML = '';
            
            tasks.forEach((task, index) => {
                const html = `
                    <div class="diy-task" id="task-${task.key}">
                        <div class="diy-task-header" onclick="toggleTask('${task.key}')">
                            <h3 data-i18n="htm_${task.key}_title">#${index+1} Task Title</h3>
                            <span style="color: var(--cyan); font-weight: bold; font-size: 1.5rem;" id="icon-${task.key}">+</span>
                        </div>
                        <div class="diy-task-content" id="content-${task.key}">
                            <p data-i18n="htm_${task.key}_desc" style="margin-top:0;">Task description.</p>
                            
                            <div class="task-grid">
                                <div class="task-box">
                                    <h4 data-i18n="htm_materials">Materials Needed</h4>
                                    <ul id="mat-${task.key}"></ul>
                                </div>
                                <div class="task-box">
                                    <h4 data-i18n="htm_tools">Tools Required</h4>
                                    <ul id="tool-${task.key}"></ul>
                                </div>
                            </div>
                            
                            <div class="task-box" style="margin-bottom: 20px;">
                                <h4 data-i18n="htm_steps">Step-by-Step</h4>
                                <ol id="steps-${task.key}" style="padding-left: 20px;"></ol>
                            </div>
                            
                            <img src="${task.img}" class="task-illustration" alt="Illustration">
                            
                            <a href="${task.yt}" target="_blank" class="youtube-btn">▶ Watch on YouTube</a>
                        </div>
                    </div>
                `;
                list.innerHTML += html;
            });
        }

        let currentActive = null;
        function toggleTask(key) {
            if (currentActive && currentActive !== key) {
                document.getElementById('content-'+currentActive).classList.remove('active');
                document.getElementById('icon-'+currentActive).innerText = '+';
            }
            
            const content = document.getElementById('content-'+key);
            const icon = document.getElementById('icon-'+key);
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon.innerText = '+';
                currentActive = null;
                document.getElementById('calculatorBox').style.display = 'none';
            } else {
                content.classList.add('active');
                icon.innerText = '-';
                currentActive = key;
                setupCalculator(key);
            }
        }

        function filterTasks() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            tasks.forEach(task => {
                const el = document.getElementById('task-'+task.key);
                const title = el.innerText.toLowerCase();
                if (title.includes(query)) {
                    el.style.display = 'flex';
                } else {
                    el.style.display = 'none';
                }
            });
        }

        function setupCalculator(key) {
            const box = document.getElementById('calculatorBox');
            const title = document.getElementById('calcTitle');
            const label = document.getElementById('calcLabel');
            const result = document.getElementById('calcResult');
            const input = document.getElementById('calcInput');
            
            result.innerText = '';
            input.value = '';
            
            if (key === 'caulk') {
                box.style.display = 'block';
                title.innerText = 'Caulk Calculator';
                label.innerText = 'Linear feet of tub (ft):';
                window.currentCalc = 'caulk';
            } else if (key === 'washer_hose') {
                box.style.display = 'block';
                title.innerText = 'Hose Length Estimator';
                label.innerText = 'Distance from wall to washer (ft):';
                window.currentCalc = 'hose';
            } else {
                box.style.display = 'none';
            }
        }

        function calculateMaterials() {
            const val = parseFloat(document.getElementById('calcInput').value);
            const res = document.getElementById('calcResult');
            if (!val || isNaN(val)) {
                res.innerText = "Please enter a valid number.";
                return;
            }
            
            if (window.currentCalc === 'caulk') {
                const tubes = Math.ceil(val / 10);
                res.innerText = `Joe AI says: You need ${tubes} tube(s) of 10oz 100% Silicone Caulk for ${val} ft.`;
            } else if (window.currentCalc === 'hose') {
                const length = val + 2; 
                res.innerText = `Joe AI says: Buy hoses at least ${length} ft long to allow moving the washer safely.`;
            }
        }

        // We will call setLanguage manually at the end of window.onload after rendering tasks
    </script>
    <script src="../app.js"></script>
    <script>
        window.onload = () => {
            renderTasks();
            setTimeout(() => {
                const lang = localStorage.getItem('morales_lang') || 'es';
                setLanguage(lang);
                populateDynamicLists(lang);
            }, 100);
        };
        
        function populateDynamicLists(lang) {
            // Because materials/tools/steps are complex arrays, we populate them via JS based on language
            const data = {
                en: {
                    disposal: { m: ["None"], t: ["1/4 inch Allen Wrench"], s: ["Turn off power.", "Insert wrench into bottom center hole.", "Crank back and forth until loose.", "Press red reset button.", "Turn on power and test."] },
                    heater: { m: ["None"], t: ["Screwdriver"], s: ["Turn off power to heater.", "Remove upper access panel.", "Press red reset button firmly.", "Replace panel and restore power."] },
                    toilet: { m: ["Universal Flapper"], t: ["None"], s: ["Turn off wall valve.", "Flush to drain tank.", "Unhook old flapper chain.", "Install new flapper and connect chain.", "Turn on water."] },
                    sink: { m: ["Bucket", "Towel"], t: ["Channel Locks (optional)"], s: ["Place bucket under P-trap.", "Unscrew the two slip nuts by hand.", "Empty trap and clean inside.", "Reassemble and hand tighten."] },
                    aerator: { m: ["White Vinegar"], t: ["Pliers", "Rag"], s: ["Wrap rag around aerator.", "Unscrew with pliers.", "Soak in vinegar for 15 mins.", "Rinse and screw back on."] },
                    faucet: { m: ["Replacement Cartridge"], t: ["Allen Wrench", "Adjustable Wrench"], s: ["Turn off water valves.", "Remove handle with Allen wrench.", "Unscrew retaining nut.", "Pull out cartridge and insert new one."] },
                    caulk: { m: ["100% Silicone Caulk", "Alcohol"], t: ["Caulk Gun", "Scraper Tool"], s: ["Scrape off all old caulk.", "Wipe surface with alcohol.", "Apply steady bead of caulk.", "Smooth with wet finger."] },
                    showerhead: { m: ["Teflon Tape", "New Showerhead"], t: ["Adjustable Wrench"], s: ["Unscrew old showerhead.", "Clean threads on pipe.", "Wrap Teflon tape clockwise 3 times.", "Screw on new head."] },
                    smell: { m: ["Water", "Bleach (Optional)"], t: ["None"], s: ["Locate dry floor drain or unused tub.", "Pour 1 gallon of water down drain.", "This fills the P-trap, blocking gas."] },
                    washer_hose: { m: ["Stainless Steel Hoses"], t: ["Channel Locks"], s: ["Turn off water valves.", "Unscrew old rubber hoses.", "Connect new hoses.", "Hand tighten, then 1/4 turn with pliers."] }
                },
                es: {
                    disposal: { m: ["Ninguno"], t: ["Llave Allen 1/4\""], s: ["Apaga la corriente.", "Inserta llave en orificio inferior.", "Gira de lado a lado hasta aflojar.", "Presiona botón rojo de reinicio.", "Enciende y prueba."] },
                    heater: { m: ["Ninguno"], t: ["Destornillador"], s: ["Apaga el calentador.", "Quita el panel superior.", "Presiona el botón rojo de reinicio.", "Coloca panel y enciende."] },
                    toilet: { m: ["Flapper Universal"], t: ["Ninguna"], s: ["Cierra válvula de pared.", "Tira cadena para vaciar tanque.", "Desengancha flapper viejo.", "Instala el nuevo y conecta cadena.", "Abre el agua."] },
                    sink: { m: ["Cubeta", "Toalla"], t: ["Pinzas (Opcional)"], s: ["Pon cubeta bajo trampa P.", "Desenrosca tuercas a mano.", "Limpia el interior de la trampa.", "Vuelve a armar y aprieta a mano."] },
                    aerator: { m: ["Vinagre Blanco"], t: ["Pinzas", "Trapo"], s: ["Envuelve el trapo en aereador.", "Desenrosca con pinzas.", "Remoja en vinagre 15 min.", "Enjuaga y vuelve a enroscar."] },
                    faucet: { m: ["Cartucho de repuesto"], t: ["Llave Allen", "Llave Inglesa"], s: ["Cierra el agua.", "Quita manija con llave Allen.", "Desenrosca tuerca de retención.", "Saca el cartucho y pon el nuevo."] },
                    caulk: { m: ["Silicón 100%", "Alcohol"], t: ["Pistola", "Espátula"], s: ["Raspa todo el silicón viejo.", "Limpia con alcohol.", "Aplica línea uniforme de silicón.", "Alisa con un dedo húmedo."] },
                    showerhead: { m: ["Cinta Teflón", "Regadera Nueva"], t: ["Llave Inglesa"], s: ["Desenrosca regadera vieja.", "Limpia rosca del tubo.", "Aplica teflón 3 vueltas horario.", "Enrosca regadera nueva."] },
                    smell: { m: ["Agua"], t: ["Ninguna"], s: ["Busca el drenaje de piso seco.", "Vierte 1 galón de agua.", "Esto sella la trampa P bloqueando gas."] },
                    washer_hose: { m: ["Mangueras Acero Inox"], t: ["Pinzas"], s: ["Cierra válvulas de agua.", "Quita mangueras viejas.", "Conecta mangueras nuevas.", "Aprieta a mano y luego 1/4 con pinza."] }
                }
            };
            
            // Fallback to ES if language not in data (since we only hardcoded EN and ES for brevity)
            const d = data[lang] || data['es'];
            
            tasks.forEach(t => {
                const matEl = document.getElementById('mat-'+t.key);
                const toolEl = document.getElementById('tool-'+t.key);
                const stepsEl = document.getElementById('steps-'+t.key);
                
                if(d[t.key]) {
                    matEl.innerHTML = d[t.key].m.map(x => `<li>${x}</li>`).join('');
                    toolEl.innerHTML = d[t.key].t.map(x => `<li>${x}</li>`).join('');
                    stepsEl.innerHTML = d[t.key].s.map(x => `<li>${x}</li>`).join('');
                }
            });
        }
        
        // Override setLanguage to also call populateDynamicLists
        const oldSetLanguage = setLanguage;
        window.setLanguage = function(lang) {
            oldSetLanguage(lang);
            populateDynamicLists(lang);
        };
    </script>
</body>
</html>
"""

filepath = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Created hazlo_tu_mismo.html successfully!")
