import re
import os

# 1. Fix app.js (Missing v02ShowTab)
with open("app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

if "function v02ShowTab" not in app_js:
    v02_show_tab_code = """
// Tab switching for V02 Quick Services
window.v02ShowTab = function(tabId) {
    document.querySelectorAll('.v02-tab-panel').forEach(panel => panel.style.display = 'none');
    const targetPanel = document.getElementById('v02-panel-' + tabId);
    if(targetPanel) targetPanel.style.display = 'grid';
    
    const tabs = ['plumbing', 'bathroom', 'heaters', 'leaks', 'repipe', 'ai'];
    tabs.forEach(t => {
        const btn = document.getElementById('v02-tab-' + t);
        if(btn) {
            btn.style.background = 'rgba(255,255,255,0.07)';
            btn.style.color = '#a0aec0';
            btn.style.border = '1px solid rgba(255,255,255,0.15)';
        }
    });
    
    const activeBtn = document.getElementById('v02-tab-' + tabId);
    if(activeBtn) {
        activeBtn.style.background = '#D4AF37';
        activeBtn.style.color = '#0A192F';
        activeBtn.style.border = 'none';
    }
};
"""
    app_js += v02_show_tab_code
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app_js)
    print("Fixed app.js (v02ShowTab added)")

# 2. Fix index.html (Videos outside section, emojis, sizing)
with open("index.html", "r", encoding="utf-8") as f:
    idx = f.read()

# Remove emojis
idx = idx.replace('🤖', '').replace('🔥', '')

# Make infographics smaller and less translucent
old_inf1 = 'style="max-width: 400px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); background-color: #ffffff; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);"'
new_inf1 = 'style="max-width: 250px; width: 100%; border-radius: 10px; border: 2px solid #D4AF37; background-color: #ffffff; padding: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.8);"'
idx = idx.replace(old_inf1, new_inf1)

old_inf2 = 'style="max-width: 600px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); background-color: #ffffff; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);"'
new_inf2 = 'style="max-width: 400px; width: 100%; border-radius: 10px; border: 2px solid #D4AF37; background-color: #ffffff; padding: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.8);"'
idx = idx.replace(old_inf2, new_inf2)

# Fix video sizes
idx = idx.replace('style="max-width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);"', 'style="max-width: 600px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.5); margin: 0 auto; display: block;"')

# Move Video block inside multimedia section!
# It is currently right after </section> of multimedia (which is around line 956)
match = re.search(r'(</section>)\s*(<!-- MULTIMEDIA: VIDEOS Y DOCUMENTALES -->.*?</div>\s*</div>\s*</div>)', idx, re.DOTALL)
if match:
    # Swap them so the section closes AFTER the video block!
    closing_tag = match.group(1)
    video_block = match.group(2)
    new_html = video_block + "\n" + closing_tag
    idx = idx[:match.start()] + new_html + idx[match.end():]
    print("Fixed index.html (Videos moved inside multimedia section)")
else:
    print("Could not find video block outside section")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(idx)

# 3. Build the Articles correctly!
template_top = """<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | ORION Ecosystem</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../universe.css">
    <style>
        body {{ background-color: var(--dark-bg); color: #fff; overflow-x: hidden; font-family: 'Inter', sans-serif; }}
        .page-content {{ position: relative; z-index: 10; padding: 4rem 10%; max-width: 1000px; margin: 0 auto; }}
        .hero-title {{ font-family: 'Orbitron', sans-serif; font-size: 2.5rem; color: var(--neon-cyan); margin-bottom: 1rem; text-align: center; }}
        .article-content {{ background: rgba(10, 25, 47, 0.85); border: 1px solid var(--neon-cyan); box-shadow: 0 0 20px rgba(0, 245, 255, 0.15); padding: 3rem; border-radius: 12px; line-height: 1.8; color: #cbd5e1; font-size: 1.1rem; }}
        .article-content h1, .article-content h2, .article-content h3 {{ color: var(--neon-orange); font-family: 'Orbitron', sans-serif; margin-top: 2rem; margin-bottom: 1rem; }}
        .article-content p {{ margin-bottom: 1.5rem; }}
        .article-content strong {{ color: #fff; }}
        .back-nav {{ position: relative; z-index: 10; padding: 1rem 5%; background: rgba(0,0,0,0.5); border-bottom: 1px solid var(--glass-border); display: flex; justify-content: flex-start; }}
        .btn-back {{ color: var(--neon-cyan); text-decoration: none; font-family: 'Orbitron', sans-serif; font-size: 0.9rem; transition: 0.3s; }}
        .btn-back:hover {{ text-shadow: 0 0 8px var(--neon-cyan); }}
    </style>
</head>
<body>
    <!-- UNIVERSE BACKGROUND -->
    <canvas id="universe-canvas" data-universe-mode="galaxy-spin"></canvas>
    <div class="universe-overlay u-variant-service"></div>
    <script src="../universe.js"></script>

    <div class="back-nav">
        <a href="../index.html#multimedia" class="btn-back">&lt; BACK TO MULTIMEDIA</a>
    </div>

    <div class="page-content">
        <h1 class="hero-title">{title}</h1>
        <div class="article-content">
"""

template_bottom = """
        </div>
    </div>
    
    <script src="../config.js"></script>
    <script src="../app.js"></script>
</body>
</html>
"""

def generate_article(txt_path, out_file, title):
    with open(txt_path, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()
    
    # Fix encoding artifacts
    text = text.replace('A-a', 'ía').replace('A3n', 'ón').replace('A', 'á').replace('A©', 'é').replace('A-', 'í').replace('A3', 'ó').replace('Aº', 'ú')
    text = text.replace('Tarmica', 'Térmica').replace('plomera', 'plomería')
    
    # Simple markdown-like to HTML
    lines = text.split('\n')
    html_lines = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if line.isupper() or len(line) < 50 and not line.endswith('.'):
            html_lines.append(f"<h2>{line}</h2>")
        else:
            html_lines.append(f"<p>{line}</p>")
            
    final_html = template_top.format(title=title) + "\n".join(html_lines) + template_bottom
    with open(os.path.join("docs", out_file), "w", encoding="utf-8") as f:
        f.write(final_html)

txt_dir = r"C:\Users\alexp\.gemini\antigravity\brain\ae4997d2-a3cc-4cd3-aa74-bb80e7d54cf7\scratch"
generate_article(os.path.join(txt_dir, "El Futuro de la Plomería_ Guía de Introducción a la Era de la IA.txt"), "inteligencia_artificial.html", "Inteligencia Artificial y Joe AI")
generate_article(os.path.join(txt_dir, "Ver lo Invisible_ La Ciencia de la Detección Térmica de Fugas con Morales Plumbing.txt"), "deteccion_termica.html", "La Ciencia de la Detección Térmica")
print("Articles rebuilt with actual text content!")
