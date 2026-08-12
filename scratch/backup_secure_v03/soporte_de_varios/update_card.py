import os
import re

file_path = "tarjeta_presentacion.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Make it full screen
css_replacements = {
    r"\.card-container \{[^}]*max-width: 400px;[^}]*\}": """
        .card-container {
            width: 100vw;
            min-height: 100vh;
            background: var(--card-bg);
            border: none;
            border-radius: 0;
            overflow-x: hidden;
            overflow-y: auto;
            position: relative;
            display: flex;
            flex-direction: column;
        }
    """,
    r"\.video-header \{[^}]*height: 220px;[^}]*\}": """
        .video-header {
            width: 100%;
            height: 35vh;
            min-height: 250px;
            position: relative;
            overflow: hidden;
            border-bottom: 2px solid var(--neon-cyan);
            flex-shrink: 0;
        }
    """,
    r"\.card-body \{[^}]*padding: 30px 20px;[^}]*\}": """
        .card-body {
            padding: 40px 10%;
            text-align: center;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    """,
    r"\.contact-info \{[^}]*gap: 15px;[^}]*\}": """
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
    """
}

for old, new in css_replacements.items():
    content = re.sub(old, new, content, flags=re.MULTILINE|re.DOTALL)

# Add a top sticky nav bar for better navigability back to the site
nav_html = """
    <div style="position: absolute; top: 15px; left: 15px; z-index: 20;">
        <a href="index.html" style="text-decoration:none; color: var(--neon-cyan); font-family: 'Orbitron'; background: rgba(0,0,0,0.7); padding: 8px 15px; border-radius: 20px; border: 1px solid var(--neon-cyan); font-weight:bold;">
            <i class="fas fa-arrow-left"></i> <span id="t_back">INICIO</span>
        </a>
    </div>
"""

# inject right after <div class="card-container">
content = content.replace('<div class="card-container">', '<div class="card-container">\n' + nav_html)

# update translations to include back button
content = content.replace('slogan: "Un Plomero En Tu Bolsillo",', 'slogan: "Un Plomero En Tu Bolsillo", back: "INICIO",')
content = content.replace('slogan: "A Plumber In Your Pocket",', 'slogan: "A Plumber In Your Pocket", back: "HOME",')
content = content.replace('slogan: "你口袋里的水管工",', 'slogan: "你口袋里的水管工", back: "主页",')
content = content.replace('slogan: "Tubero Sa Iyong Bulsa",', 'slogan: "Tubero Sa Iyong Bulsa", back: "BAHAY",')
content = content.replace('slogan: "Thợ Sửa Ống Nước Trong Túi Bạn",', 'slogan: "Thợ Sửa Ống Nước Trong Túi Bạn", back: "TRANG CHỦ",')

js_inject = "document.getElementById('t_back').innerText = translations[lang].back;"
content = content.replace("document.getElementById('t_slogan').innerText = translations[lang].slogan;", js_inject + "\n        document.getElementById('t_slogan').innerText = translations[lang].slogan;")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated tarjeta_presentacion.html to full screen and better navigation")
