import os
import codecs

def generate_library_page(title, script_url, var_name, out_file):
    html = f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Morales Plumbing</title>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-939YTT7Y4D"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());
      gtag('config', 'G-939YTT7Y4D');
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        :root {{
            --primary: #0a1128;
            --secondary: #1c2541;
            --cyan: #00f5ff;
            --gold: #d4af37;
            --text: #f0f0f0;
        }}

        body {{
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--primary) 0%, #000000 100%);
            color: var(--text);
            min-height: 100vh;
        }}

        /* Header overrides */
        .page-header {{
            text-align: center;
            padding: 40px 20px 20px;
        }}

        .page-title {{
            font-family: 'Orbitron', sans-serif;
            font-size: 2.5rem;
            color: var(--gold);
            margin: 0 0 10px 0;
            text-transform: uppercase;
        }}
        
        .back-link {{
            color: var(--cyan);
            text-decoration: none;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
            transition: 0.3s;
        }}
        .back-link:hover {{
            color: #fff;
        }}

        /* Language Filter Toggle */
        .lang-filter {{
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0 40px;
            flex-wrap: wrap;
        }}
        
        .lang-btn {{
            background: rgba(28, 37, 65, 0.7);
            border: 1px solid var(--cyan);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            transition: 0.3s;
            font-family: 'Orbitron', sans-serif;
        }}

        .lang-btn.active, .lang-btn:hover {{
            background: var(--cyan);
            color: var(--primary);
            box-shadow: 0 0 10px var(--cyan);
        }}

        /* Grid Layout */
        .media-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
            padding: 0 40px 60px;
            max-width: 1400px;
            margin: 0 auto;
        }}

        /* Media Cards */
        .media-card {{
            background: rgba(28, 37, 65, 0.6);
            border: 1px solid rgba(0, 245, 255, 0.2);
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
            cursor: pointer;
        }}

        .media-card:hover {{
            transform: translateY(-5px);
            border-color: var(--cyan);
            box-shadow: 0 5px 15px rgba(0, 245, 255, 0.2);
        }}

        .card-img-container {{
            width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
        }}
        
        /* If comics, maybe taller aspect ratio */
        {" .card-img-container { aspect-ratio: 2 / 3; } " if "Comics" in title else ""}

        .card-img-container img {{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s;
        }}

        .media-card:hover .card-img-container img {{
            transform: scale(1.05);
        }}

        .play-icon {{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: rgba(255,255,255,0.8);
            text-shadow: 0 0 10px rgba(0,0,0,0.5);
            transition: 0.3s;
            opacity: 0;
            pointer-events: none;
        }}

        .media-card:hover .play-icon {{
            opacity: 1;
            color: var(--cyan);
            transform: translate(-50%, -50%) scale(1.1);
        }}

        .card-content {{
            padding: 15px 20px;
        }}

        .card-content h3 {{
            margin: 0 0 5px 0;
            font-family: 'Orbitron', sans-serif;
            font-size: 1.1rem;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }}
        
        .card-content p {{
            margin: 0;
            font-size: 0.85rem;
            color: #aaa;
            text-transform: uppercase;
        }}

        /* Lightbox Modal */
        .lightbox {{
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 2000;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 0.3s ease;
        }}

        .lightbox.active {{
            display: flex;
            opacity: 1;
        }}

        .lightbox-img {{
            max-width: 95%;
            max-height: 95vh;
            border-radius: 10px;
            box-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
            object-fit: contain;
        }}

        .lightbox-close {{
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 2.5rem;
            cursor: pointer;
            transition: 0.3s;
        }}

        .lightbox-close:hover {{
            color: var(--cyan);
        }}
        
        .empty-state {{
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: var(--text);
            font-size: 1.2rem;
            background: rgba(28, 37, 65, 0.4);
            border-radius: 15px;
            border: 1px solid rgba(0, 245, 255, 0.1);
        }}

        @media (max-width: 768px) {{
            .page-title {{ font-size: 1.8rem; }}
            .media-grid {{ grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; padding: 0 20px 40px; }}
        }}
    </style>
</head>
<body>

    <!-- MORALES PLUMBING OFFICIAL HEADER -->
    <header style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-bottom: 4px solid #D4AF37; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; position: relative; z-index: 1000;">
        <div style="display: flex; align-items: center;">
            <a href="../index.html">
                <img src="../assets/logo_portada.png" alt="Morales Plumbing Logo" style="height: 60px; width: auto;" onerror="this.src='../assets/logo_portada.webp'; this.onerror=null;">
            </a>
        </div>
        <div style="text-align: right; color: #fff;">
            <h2 style="margin: 0; font-size: 1.2rem; color: #D4AF37; font-weight: bold;">MORALES PLUMBING</h2>
            <p style="margin: 3px 0 0; font-size: 0.9rem;">AI-INTEGRATED SERVICES</p>
            <p style="margin: 3px 0 0; font-size: 0.8rem; color: #aaa;">Lic. C-36 #1156542 | San Jose, CA</p>
        </div>
    </header>


    <div class="page-header">
        <a href="multimedia.html" class="back-link"><i class="fas fa-arrow-left"></i> Volver a Multimedia</a>
        <h1 class="page-title">{title}</h1>
    </div>
    
    <div class="lang-filter">
        <button class="lang-btn active" onclick="filterLanguage('all')">Todos</button>
        <button class="lang-btn" onclick="filterLanguage('es')">Español</button>
        <button class="lang-btn" onclick="filterLanguage('en')">English</button>
        <button class="lang-btn" onclick="filterLanguage('zh')">Mandarin</button>
        <button class="lang-btn" onclick="filterLanguage('vi')">Vietnamese</button>
        <button class="lang-btn" onclick="filterLanguage('tl')">Tagalog</button>
    </div>

    <div class="media-grid" id="gallery">
        <!-- JS Injects Here -->
    </div>

    <div class="lightbox" id="mediaLightbox" onclick="closeLightbox(event)">
        <i class="fas fa-times lightbox-close" onclick="closeLightbox(event, true)"></i>
        <img src="" alt="Fullscreen" class="lightbox-img" id="lbImage">
    </div>

    <!-- Cargar Data Local sin CORS -->
    <script src="{script_url}"></script>
    <script>
        let allData = [];
        if (typeof {var_name} !== 'undefined') {{
            allData = {var_name};
        }}
        
        function loadMedia() {{
            if (allData.length === 0) {{
                document.getElementById('gallery').innerHTML = "<div class='empty-state'><i class='fas fa-box-open' style='font-size:3rem;margin-bottom:15px;display:block;'></i>Aún no hay contenido subido. Agrega imágenes a las carpetas de idiomas.</div>";
            }} else {{
                filterLanguage('all');
            }}
        }}
        
        function filterLanguage(lang) {{
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            
            const filtered = allData.filter(item => lang === 'all' || item.lang === lang);
            
            if(filtered.length === 0) {{
                gallery.innerHTML = "<div class='empty-state'>No hay contenido para este idioma aún.</div>";
                return;
            }}
            
            filtered.forEach(item => {{
                const titleFormat = item.filename.replace('.webp', '').replace(/_/g, ' ');
                const langLabel = item.lang.toUpperCase();
                
                const card = document.createElement('div');
                card.className = 'media-card';
                card.onclick = () => openLightbox(item.path);
                
                card.innerHTML = `
                    <div class="card-img-container">
                        <img src="${{item.path}}" alt="${{titleFormat}}" loading="lazy">
                        <i class="fas fa-search-plus play-icon"></i>
                    </div>
                    <div class="card-content">
                        <h3>${{titleFormat}}</h3>
                        <p>${{langLabel}}</p>
                    </div>
                `;
                gallery.appendChild(card);
            }});
        }}
        
        // Lightbox
        const lightbox = document.getElementById('mediaLightbox');
        const lbImg = document.getElementById('lbImage');

        function openLightbox(src) {{
            lbImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }}

        function closeLightbox(e, force = false) {{
            if (force || e.target === lightbox) {{
                lightbox.classList.remove('active');
                setTimeout(() => lbImg.src = '', 300);
                document.body.style.overflow = '';
            }}
        }}

        // Init
        document.addEventListener('DOMContentLoaded', loadMedia);
    </script>
    
    <!-- MORALES PLUMBING OFFICIAL FOOTER -->
    <footer style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-top: 4px solid #D4AF37; padding: 30px 20px; text-align: center; font-family: 'Inter', sans-serif; color: #fff; margin-top: 50px;">
        <div style="max-width: 800px; margin: 0 auto;">
            <h3 style="color: #D4AF37; margin-bottom: 15px; font-weight: bold;">MORALES PLUMBING</h3>
            <p style="margin: 5px 0; font-size: 0.9rem;">San Jose, CA | Lic. C-36 #1156542</p>
            <p style="margin: 5px 0; font-size: 0.9rem;">
                <a href="tel:+16692134422" style="color: #00f5ff; text-decoration: none;">(669) 213-4422</a> | 
                <a href="mailto:moralesplumbing026@gmail.com" style="color: #00f5ff; text-decoration: none;">moralesplumbing026@gmail.com</a>
            </p>
            <p style="margin: 20px 0 0; font-size: 0.8rem; color: #888;">
                &copy; 2026 Morales Plumbing. Todos los derechos reservados.
            </p>
        </div>
    </footer>
    
    <script src="../app.js"></script>
</body>
</html>
'''
    with codecs.open(out_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {out_file}")

out_comics = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs\comics.html"
out_pub = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs\publicidad.html"

generate_library_page("Cómics Originales", "../assets/comics/data.js", "comicsData", out_comics)
generate_library_page("Publicidad y Banners", "../assets/publicidad/data.js", "publicidadData", out_pub)
