import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update .diy-task-content.active to be a full-screen modal
old_active_css = r"\.diy-task-content\.active \{ display: flex; \}"
new_active_css = """        .diy-task-content.active { 
            display: flex; 
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 99999;
            background: rgba(8,14,36,0.98);
            backdrop-filter: blur(10px);
            border-radius: 0;
            padding: 80px 10% 50px;
            overflow-y: auto;
            border: none;
            box-sizing: border-box;
        }
        .close-modal-btn {
            position: absolute;
            top: 20px;
            right: 30px;
            background: #ff0044;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 1.2rem;
            font-family: 'Orbitron';
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(255,0,68,0.5);
        }
        .close-modal-btn:hover { background: #fff; color: #ff0044; }"""
content = re.sub(old_active_css, new_active_css, content)

# 2. Add the Close Button inside the renderTasks template
old_html_template = r'<div class="diy-task-content" id="content-\$\{task\.key\}">'
new_html_template = """<div class="diy-task-content" id="content-${task.key}">
                            <button class="close-modal-btn" onclick="toggleTask('${task.key}')">✖ CERRAR GUÍA</button>"""
content = content.replace(old_html_template, new_html_template)

# 3. Update the lp-hero background and padding so the image is fully appreciated
old_hero = r"background: linear-gradient\(rgba\(8,14,36,0\.5\), rgba\(8,14,36,0\.7\)\), url\('\.\./assets/service_training\.png'\) center/cover;\s*padding: 100px 20px 20px;"
new_hero = """background: linear-gradient(rgba(8,14,36,0.1), rgba(8,14,36,0.5)), url('../assets/service_training.png') center top/cover;
            padding: 150px 20px 80px;"""
content = re.sub(old_hero, new_hero, content)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated tasks to full-screen modals and fixed hero image visibility.")
