import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# 1. Update CSS
new_css = """
        /* Premium Visual Guide CSS */
        .diy-task-content {
            background: #0d1635;
            border-radius: 0 0 10px 10px;
            padding: 25px;
            border: 1px solid var(--cyan);
            border-top: none;
            display: none;
            flex-direction: column;
        }
        .diy-task-content.active { display: flex; }
        
        .guide-hero {
            display: flex;
            gap: 25px;
            margin-bottom: 25px;
            align-items: stretch;
        }
        .guide-hero img {
            width: 45%;
            object-fit: contain;
            border: 2px solid var(--cyan);
            border-radius: 8px;
            background: rgba(0,0,0,0.5);
            box-shadow: 0 0 15px rgba(0, 245, 255, 0.2);
        }
        .guide-info {
            width: 55%;
            background: rgba(0,0,0,0.6);
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid var(--orange);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .guide-box { margin-bottom: 20px; }
        .guide-box:last-child { margin-bottom: 0; }
        .guide-box h4 {
            color: var(--orange);
            text-transform: uppercase;
            font-size: 1.2rem;
            margin-bottom: 12px;
            border-bottom: 1px dashed var(--cyan);
            padding-bottom: 5px;
        }
        .guide-box ul { list-style: none; padding-left: 0; margin: 0; }
        .guide-box ul li { padding: 6px 0; font-size: 1.05rem; }
        .guide-box ul li::before { content: "✔️"; margin-right: 10px; color: var(--cyan); }
        
        .step-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 25px;
        }
        .step-card {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 245, 255, 0.2);
            border-radius: 8px;
            padding: 15px 20px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .step-card:hover {
            transform: translateX(10px);
            border-color: var(--cyan);
            box-shadow: -5px 0 15px rgba(0,245,255,0.2);
        }
        .step-number {
            font-size: 1.8rem;
            font-weight: 900;
            color: #080e24;
            background: var(--cyan);
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-right: 25px;
            flex-shrink: 0;
        }
        .step-text {
            font-size: 1.15rem;
            line-height: 1.5;
            color: #eee;
        }
        @media (max-width: 768px) {
            .guide-hero { flex-direction: column; }
            .guide-hero img { width: 100%; max-height: 250px; }
            .guide-info { width: 100%; }
        }
"""
htm_content = re.sub(r'\.task-illustration.*?\.task-grid.*?\{[^\}]+\}', '', htm_content, flags=re.DOTALL) # strip old CSS loosely
htm_content = htm_content.replace('</style>', new_css + '\n    </style>')

# 2. Update renderTasks HTML
new_render = """
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
                            <p data-i18n="htm_${task.key}_desc" style="font-size: 1.25rem; margin-top: 0; margin-bottom: 25px; text-align: center; color: #fff; font-style: italic;"></p>
                            
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
"""
htm_content = re.sub(r'function renderTasks\(\)\s*\{.*?\n        \}\n', new_render, htm_content, flags=re.DOTALL)

# 3. Update populateDynamicLists
new_populate = """
        function populateDynamicLists(lang) {
            const data = {
"""
# We will use replace to just modify the iteration loop in populateDynamicLists
old_loop = """
            for (const [key, obj] of Object.entries(langData)) {
                const matEl = document.getElementById('mat-' + key);
                if (matEl) matEl.innerHTML = obj.m.map(item => `<li>${item}</li>`).join('');
                
                const toolEl = document.getElementById('tool-' + key);
                if (toolEl) toolEl.innerHTML = obj.t.map(item => `<li>${item}</li>`).join('');
                
                const stepsEl = document.getElementById('steps-' + key);
                if (stepsEl) stepsEl.innerHTML = obj.s.map(item => `<li>${item}</li>`).join('');
            }
"""
new_loop = """
            for (const [key, obj] of Object.entries(langData)) {
                const matEl = document.getElementById('mat-' + key);
                if (matEl) matEl.innerHTML = obj.m.map(item => `<li>${item}</li>`).join('');
                
                const toolEl = document.getElementById('tool-' + key);
                if (toolEl) toolEl.innerHTML = obj.t.map(item => `<li>${item}</li>`).join('');
                
                const stepsEl = document.getElementById('steps-' + key);
                if (stepsEl) {
                    stepsEl.innerHTML = obj.s.map((step, idx) => `
                        <div class="step-card">
                            <div class="step-number">${idx + 1}</div>
                            <div class="step-text">${step}</div>
                        </div>
                    `).join('');
                }
            }
"""
htm_content = htm_content.replace(old_loop, new_loop)

# Fix FontAwesome import if missing
if 'font-awesome' not in htm_content:
    htm_content = htm_content.replace('</head>', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">\n</head>')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Redesigned UI successfully")
