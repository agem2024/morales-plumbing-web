import re
import os

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
        .page-content {{ padding: 4rem 10%; max-width: 1000px; margin: 0 auto; }}
        .hero-title {{ font-family: 'Orbitron', sans-serif; font-size: 2.5rem; color: var(--neon-cyan); margin-bottom: 1rem; text-align: center; }}
        .article-content {{ background: rgba(10, 25, 47, 0.8); border: 1px solid var(--neon-cyan); box-shadow: 0 0 20px rgba(0, 245, 255, 0.1); padding: 3rem; border-radius: 12px; line-height: 1.8; color: #cbd5e1; }}
        .article-content h1, .article-content h2, .article-content h3 {{ color: var(--neon-orange); font-family: 'Orbitron', sans-serif; margin-top: 2rem; margin-bottom: 1rem; }}
        .article-content p {{ margin-bottom: 1.5rem; }}
        .article-content strong {{ color: #fff; }}
        .back-nav {{ padding: 1rem 5%; background: rgba(0,0,0,0.5); border-bottom: 1px solid var(--glass-border); display: flex; justify-content: flex-start; }}
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
        <a href="../index.html#multimedia" class="btn-back">< BACK TO MULTIMEDIA</a>
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

def process_file(filename, title):
    filepath = os.path.join("docs", filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract body content (very basic extraction)
    body_match = re.search(r'<body.*?>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
    if body_match:
        inner_html = body_match.group(1).strip()
    else:
        # If no body tag, just take it all
        inner_html = content
        
    # Remove basic style tags that might conflict
    inner_html = re.sub(r'<style>.*?</style>', '', inner_html, flags=re.DOTALL)
    
    # Also clean up weird encoding issues
    inner_html = inner_html.replace('PlomerA-a', 'Plomería').replace('TransformaciA3n', 'Transformación').replace('DetecciA3n', 'Detección').replace('Tarmica', 'Térmica')

    final_html = template_top.format(title=title) + inner_html + template_bottom
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(final_html)
    print(f"Processed {filename}")

process_file("inteligencia_artificial.html", "Inteligencia Artificial y Joe AI")
process_file("deteccion_termica.html", "La Ciencia de la Detección Térmica")
