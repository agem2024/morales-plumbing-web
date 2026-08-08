import codecs

html_content = '''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multimedia - Morales Plumbing</title>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-939YTT7Y4D"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-939YTT7Y4D');
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        :root {
            --bg-dark: #050505;
            --surface-color: #121212;
            --surface-hover: #1e1e1e;
            --cyan: #00f5ff;
            --gold: #d4af37;
            --text-main: #ffffff;
            --text-muted: #aaaaaa;
        }

        body {
            margin: 0; padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-main);
        }

        /* Library Header */
        .hero-section {
            padding: 60px 40px;
            background: linear-gradient(180deg, rgba(10,25,47,0.9) 0%, var(--bg-dark) 100%);
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .hero-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 3.5rem;
            margin: 0;
            background: linear-gradient(90deg, #fff, var(--cyan));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
            font-size: 1.2rem;
            color: var(--text-muted);
            margin-top: 10px;
            max-width: 600px;
        }

        /* Shelves / Rows */
        .shelf {
            padding: 40px;
        }
        
        .shelf-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.8rem;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .shelf-title i { color: var(--gold); }

        .media-row {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
        }

        /* Cards */
        .lib-card {
            background: var(--surface-color);
            border-radius: 12px;
            overflow: hidden;
            text-decoration: none;
            color: var(--text-main);
            transition: all 0.3s ease;
            display: block;
            position: relative;
            box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }

        .lib-card:hover {
            transform: translateY(-8px);
            background: var(--surface-hover);
            box-shadow: 0 12px 30px rgba(0,245,255,0.15);
        }

        .lib-card-img {
            width: 100%;
            aspect-ratio: 16/9;
            object-fit: cover;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            transition: transform 0.5s;
        }

        .lib-card.square .lib-card-img {
            aspect-ratio: 1/1; /* Music Album style */
        }
        .lib-card.portrait .lib-card-img {
            aspect-ratio: 2/3; /* Comic book style */
        }

        .lib-card:hover .lib-card-img {
            transform: scale(1.05);
        }

        .lib-card-content {
            padding: 20px;
            position: relative;
            z-index: 2;
            background: var(--surface-color);
        }

        .lib-card:hover .lib-card-content {
            background: var(--surface-hover);
        }

        .lib-card h3 {
            margin: 0 0 8px 0;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .lib-card p {
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .play-btn {
            position: absolute;
            bottom: 25px;
            right: 20px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: var(--cyan);
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 5px 15px rgba(0,245,255,0.4);
            z-index: 3;
        }

        .lib-card:hover .play-btn {
            opacity: 1;
            transform: translateY(0);
        }

        @media (max-width: 768px) {
            .hero-section { padding: 40px 20px; }
            .hero-title { font-size: 2.5rem; }
            .shelf { padding: 30px 20px; }
            .media-row { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; }
            .play-btn { display: none; }
        }
    </style>
</head>
<body>

    <!-- Header will be injected here by fix_docs_safe.py -->

    <div class="hero-section">
        <h1 class="hero-title">Multimedia Hub</h1>
        <p class="hero-subtitle">Descubre nuestro contenido visual, cómics interactivos y galerías de plomería técnica. Todo diseñado para ayudarte a entender mejor tu sistema.</p>
    </div>

    <!-- MAIN COLLECTIONS -->
    <div class="shelf">
        <h2 class="shelf-title"><i class="fas fa-layer-group"></i> Colecciones Principales</h2>
        <div class="media-row">
            
            <a href="comics.html" class="lib-card portrait">
                <img src="../assets/comics/comic_prueba.webp" class="lib-card-img" alt="Cómics" onerror="this.src='../assets/logo_portada.webp'">
                <div class="lib-card-content">
                    <h3>Cómics Educativos</h3>
                    <p>Historias interactivas por idioma.</p>
                </div>
                <div class="play-btn"><i class="fas fa-play"></i></div>
            </a>

            <a href="publicidad.html" class="lib-card square">
                <img src="../assets/publicidad/pomelli_creative_image_9_16_0722.webp" class="lib-card-img" alt="Banners" onerror="this.src='../assets/logo_portada.webp'">
                <div class="lib-card-content">
                    <h3>Publicidad y Promos</h3>
                    <p>Catálogo visual de servicios.</p>
                </div>
                <div class="play-btn"><i class="fas fa-play"></i></div>
            </a>
            
        </div>
    </div>

    <!-- INFOGRAPHICS -->
    <div class="shelf" style="background-color: rgba(255,255,255,0.02);">
        <h2 class="shelf-title"><i class="fas fa-chart-pie"></i> Infografías Técnicas</h2>
        <div class="media-row">
            <a href="#" class="lib-card">
                <img src="../assets/images/Morales_Plumbing__Plomería_con_IA.webp" class="lib-card-img" alt="IA en Plomería" onerror="this.src='../assets/logo_portada.webp'">
                <div class="lib-card-content">
                    <h3>IA en Plomería</h3>
                    <p>Cómo usamos la Inteligencia Artificial.</p>
                </div>
                <div class="play-btn"><i class="fas fa-search-plus"></i></div>
            </a>
            
            <a href="#" class="lib-card">
                <img src="../assets/images/Future_of_AI_Technical_Plumbing.webp" class="lib-card-img" alt="Futuro Técnico" onerror="this.src='../assets/logo_portada.webp'">
                <div class="lib-card-content">
                    <h3>Futuro Técnico</h3>
                    <p>Análisis forense y diagnóstico.</p>
                </div>
                <div class="play-btn"><i class="fas fa-search-plus"></i></div>
            </a>
        </div>
    </div>

    <!-- PODCAST / AUDIO -->
    <div class="shelf">
        <h2 class="shelf-title"><i class="fas fa-podcast"></i> Podcast & Audio</h2>
        <div class="media-row">
            <a href="#" class="lib-card square">
                <div style="width: 100%; aspect-ratio: 1/1; background: linear-gradient(45deg, #1c2541, #0a1128); display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-headphones" style="font-size: 4rem; color: var(--gold);"></i>
                </div>
                <div class="lib-card-content">
                    <h3>Tech Plumbing Podcast</h3>
                    <p>Episodio 1: Diagnósticos con Sensores.</p>
                </div>
                <div class="play-btn"><i class="fas fa-play"></i></div>
            </a>
        </div>
    </div>

</body>
</html>
'''

with codecs.open('C:/Users/alexp/Documentos_Locales_Backup/Morales plumbing/V.01 web/vo3.0/docs/multimedia.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
    print("multimedia.html rewritten in Library style in vo3.0")
