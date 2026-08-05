
        const tasks = [
            {
                id: "t1",
                key: "disposal",
                img: "../assets/diy_disposal.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+unjam+garbage+disposal+allen+wrench"
            },
            {
                id: "t2",
                key: "heater",
                img: "../assets/diy_heater.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+reset+water+heater+thermal+switch"
            },
            {
                id: "t3",
                key: "toilet",
                img: "../assets/diy_toilet.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+running+toilet+flapper"
            },
            {
                id: "t4",
                key: "sink",
                img: "../assets/diy_sink.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+unclog+sink+p-trap"
            },
            {
                id: "t5",
                key: "faucet",
                img: "../assets/diy_faucet.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+leaky+faucet+cartridge"
            },
            {
                id: "t6",
                key: "showerhead",
                img: "../assets/diy_shower.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+shower+head"
            },
            {
                id: "t7",
                key: "smell",
                img: "../assets/diy_smell.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+sewer+gas+smell+floor+drain"
            },
            {
                id: "t8",
                key: "gfi",
                img: "../assets/diy_gfi.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+reset+gfci+outlet"
            },
            {
                id: "t9",
                key: "anode",
                img: "../assets/diy_anode.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+check+water+heater+anode+rod"
            },
            {
                id: "t10",
                key: "plunge_toilet",
                img: "../assets/diy_plunger.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+plunge+a+toilet"
            },
            {
                id: "t11",
                key: "washer_hose",
                img: "../assets/diy_washer_hoses.png?v=5",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+washing+machine+hoses"
            }

        
            ,{
                id: "t12", key: "drain_heater", img: "../assets/wh_comic.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+drain+water+heater"
            },{
                id: "t13", key: "heater_temp", img: "../assets/comic_heaters.webp?v=5", yt: "https://www.youtube.com/results?search_query=how+to+adjust+water+heater+temperature"
            },{
                id: "t14", key: "dishwasher_filter", img: "../assets/diy_dishwasher_filter.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+clean+dishwasher+filter"
            },{
                id: "t15", key: "aerator", img: "../assets/diy_aerator.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+clean+faucet+aerator"
            },{
                id: "t16", key: "fill_valve", img: "../assets/valves_comic.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+replace+toilet+fill+valve"
            },{
                id: "t17", key: "caulk_tub", img: "../assets/diy_caulk_tub.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+recaulk+bathtub"
            },{
                id: "t18", key: "hvac_filter", img: "../assets/diy_hvac_filter.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+change+ac+filter"
            },{
                id: "t19", key: "house_filter", img: "../assets/diy_house_filter.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+replace+whole+house+water+filter"
            },{
                id: "t20", key: "tub_drain", img: "../assets/diy_tub_drain.png?v=5", yt: "https://www.youtube.com/results?search_query=how+to+unclog+bathtub+drain+with+snake"
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
                            <button class="close-modal-btn" onclick="toggleTask('${task.key}')">✖ CERRAR GUÍA</button>
                            <p data-i18n="htm_${task.key}_desc" style="font-size: 1.25rem; margin-top: 0; margin-bottom: 15px; text-align: center; color: #fff; font-style: italic;"></p>
                            
                            <div class="guide-hero">
                                <img src="${task.img}" alt="Illustration">
                                <div class="guide-info">
                                    <div class="guide-box">
                                        <h4 data-i18n="htm_materials"><i class="fas fa-box-open"></i> Materials Needed</h4>
                                        <ul id="mat-${task.key}"></ul>
                                    </div>
                                    <div class="guide-box">
                                        <h4 data-i18n="htm_tools"><i class="fas fa-wrench"></i> Tools Required</h4>
                                        <ul id="tool-${task.key}"></ul>
                                    </div>
                                </div>
                            </div>
                            
                            <h4 data-i18n="htm_steps" style="color: var(--cyan); font-size: 1.6rem; border-bottom: 2px solid rgba(0, 245, 255, 0.3); padding-bottom: 10px; margin-bottom: 20px; font-family: 'Orbitron', sans-serif;">Step-by-Step Guide</h4>
                            <div class="step-container" id="steps-${task.key}"></div>
                            
                            <a href="${task.yt}" target="_blank" class="youtube-btn" style="width: 100%; text-align: center; margin-top: 10px;">
                                <i class="fab fa-youtube"></i> Watch Video Tutorial
                            </a>
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
    
