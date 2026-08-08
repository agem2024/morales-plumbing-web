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
    
    # Fix EXACT encoding artifacts
    text = text.replace('PlomerA-a', 'Plomería').replace('GuA-a', 'Guía').replace('IntroducciA3n', 'Introducción')
    text = text.replace('tecnolA3gico', 'tecnológico').replace('hA-dricos', 'hídricos').replace('mAs', 'más')
    text = text.replace('atrAs', 'atrás').replace('precisiA3n', 'precisión').replace('quirArgica', 'quirúrgica')
    text = text.replace('Aclite', 'Élite').replace('tAccnica', 'técnica').replace('diseAo', 'diseño')
    text = text.replace('filosofA-a', 'filosofía').replace('innovaciA3n', 'innovación').replace('misiA3n', 'misión')
    text = text.replace('rApida', 'rápida').replace('Academia', 'Academia').replace('serA', 'será')
    text = text.replace('detecciA3n', 'detección').replace('termogrAfica', 'termográfica').replace('diagnA3stico', 'diagnóstico')
    text = text.replace('destrucciA3n', 'destrucción').replace('reparaciA3n', 'reparación').replace('soluciA3n', 'solución')
    text = text.replace('visA3n', 'visión').replace('TAccnica', 'Técnica').replace('IA', 'IA')
    text = text.replace('A', 'A').replace('A-a', 'ía') # Catchall for A
    text = text.replace('', '') # Remove stray symbols
    
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
print("Articles rebuilt correctly!")
