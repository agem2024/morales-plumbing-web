import re
import codecs
import os

index_path = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\index.html"
with codecs.open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

head_match = re.search(r'(<!DOCTYPE html>.*?</nav>)', index_content, flags=re.DOTALL | re.IGNORECASE)
head_str = head_match.group(1) if head_match else ""
head_str = head_str.replace('href="css/', 'href="../css/')
head_str = head_str.replace('href="assets/', 'href="../assets/')
head_str = head_str.replace('src="assets/', 'src="../assets/')
head_str = head_str.replace('href="index.html"', 'href="../index.html"')
head_str = head_str.replace('src="app.js"', 'src="../app.js"')
head_str = head_str.replace('href="#', 'href="../index.html#')

footer_match = re.search(r'(<footer.*?>.*?</footer>.*?</body>)', index_content, flags=re.DOTALL | re.IGNORECASE)
footer_str = footer_match.group(1) if footer_match else ""
footer_str = footer_str.replace('src="app.js"', 'src="../app.js"')
footer_str = footer_str.replace('src="assets/', 'src="../assets/')

def generate_library_page(title, data_script_url, data_var_name, output_path):
    body_html = f"""
    <main style="padding: 120px 20px 50px; max-width: 1200px; margin: 0 auto; min-height: 80vh;">
        <div style="display: flex; align-items: center; margin-bottom: 30px;">
            <a href="multimedia.html" style="color: var(--neon-cyan); text-decoration: none; font-size: 1.2rem; margin-right: 20px;"><i class="fas fa-arrow-left"></i> Volver</a>
            <h1 class="graffiti-3d-metallic" style="font-size: 3rem; margin: 0;">{title}</h1>
        </div>
        
        <!-- Language Filter -->
        <div style="display: flex; gap: 10px; margin-bottom: 30px; overflow-x: auto; padding-bottom: 10px;">
            <button class="lang-btn active" onclick="filterLanguage('es')">Español</button>
            <button class="lang-btn" onclick="filterLanguage('en')">English</button>
            <button class="lang-btn" onclick="filterLanguage('tl')">Tagalog</button>
            <button class="lang-btn" onclick="filterLanguage('vi')">Tiếng Việt</button>
            <button class="lang-btn" onclick="filterLanguage('zh')">中文</button>
        </div>

        <div id="gallery-container"></div>
    </main>

    <!-- Lightbox Modal -->
    <div class="lightbox" id="mediaLightbox" onclick="closeLightbox(event)">
        <div class="lightbox-content">
            <i class="fas fa-times lightbox-close" onclick="closeLightbox(event, true)"></i>
            <img src="" alt="Fullscreen Image" class="lightbox-img" id="lbImage">
        </div>
    </div>

    <script src="{data_script_url}"></script>
    <script>
        const container = document.getElementById('gallery-container');
        let currentLang = 'es';

        function renderGallery() {{
            container.innerHTML = '';
            const images = {data_var_name}[currentLang] || [];
            
            if(images.length === 0) {{
                container.innerHTML = '<p style="color: #888; text-align: center; width: 100%; font-size: 1.2rem; padding: 50px;">Aún no hay imágenes en esta categoría.</p>';
                return;
            }}

            // Create masonry layout or grid
            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
            grid.style.gap = '20px';

            images.forEach(imgData => {{
                const card = document.createElement('div');
                card.className = 'glass';
                card.style.borderRadius = '15px';
                card.style.overflow = 'hidden';
                card.style.cursor = 'pointer';
                card.style.transition = 'transform 0.3s';
                card.onmouseover = () => card.style.transform = 'scale(1.02)';
                card.onmouseout = () => card.style.transform = 'scale(1)';
                card.onclick = () => openLightbox(imgData.path);

                const img = document.createElement('img');
                img.src = imgData.path;
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.display = 'block';
                img.loading = 'lazy';
                
                card.appendChild(img);
                
                // Add title if available
                if(imgData.filename) {{
                    const titleBar = document.createElement('div');
                    titleBar.style.padding = '10px';
                    titleBar.style.background = 'rgba(0,0,0,0.5)';
                    titleBar.style.color = '#fff';
                    titleBar.style.fontSize = '0.9rem';
                    titleBar.style.textAlign = 'center';
                    titleBar.innerText = imgData.filename;
                    card.appendChild(titleBar);
                }}
                
                grid.appendChild(card);
            }});
            
            container.appendChild(grid);
        }}

        function filterLanguage(lang) {{
            currentLang = lang;
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderGallery();
        }}

        // Lightbox Logic
        const lightbox = document.getElementById('mediaLightbox');
        const lbImg = document.getElementById('lbImage');

        function openLightbox(src) {{
            lightbox.classList.add('active');
            lbImg.src = src;
            lbImg.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }}

        function closeLightbox(e, force = false) {{
            if (force || e.target === lightbox) {{
                lightbox.classList.remove('active');
                lbImg.src = '';
                document.body.style.overflow = 'auto';
            }}
        }}

        // Initial render
        document.addEventListener('DOMContentLoaded', () => {{
            // Check global app.js lang preference
            const savedLang = localStorage.getItem('selectedLanguage');
            if(savedLang) {{
                const btn = document.querySelector(`.lang-btn[onclick*="'${{savedLang}}'"]`);
                if(btn) btn.click();
            }} else {{
                renderGallery();
            }}
        }});
    </script>
    <style>
        .lang-btn {{
            background: rgba(255,255,255,0.1);
            border: 1px solid var(--neon-cyan);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: 0.3s;
            font-family: 'Orbitron', sans-serif;
            white-space: nowrap;
        }}
        .lang-btn.active, .lang-btn:hover {{
            background: var(--neon-cyan);
            color: #000;
        }}
        .lightbox {{
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            align-items: center;
            justify-content: center;
        }}
        .lightbox.active {{ display: flex; }}
        .lightbox-content {{
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }}
        .lightbox-img {{
            max-width: 100%;
            max-height: 90vh;
            border: 2px solid var(--neon-cyan);
            border-radius: 10px;
        }}
        .lightbox-close {{
            position: absolute;
            top: -40px; right: 0;
            color: white; font-size: 2rem; cursor: pointer;
        }}
    </style>
    """
    
    full_html = head_str + body_html + footer_str
    with codecs.open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"Generated {output_path}")

out_comics = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs\comics.html"
out_pub = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs\publicidad.html"

generate_library_page("Cómics Educativos", "../assets/comics/data.js", "comicsData", out_comics)
generate_library_page("Publicidad y Banners", "../assets/publicidad/data.js", "publicidadData", out_pub)
