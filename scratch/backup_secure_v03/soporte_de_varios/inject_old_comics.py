import os
import re

pages = [
    { 'name': 'eng_eco.html', 'comic': 'eco_comic.png' },
    { 'name': 'eng_cobre.html', 'comic': 'cobre_comic.png' },
    { 'name': 'eng_diseno.html', 'comic': 'diseno_comic.png' },
    { 'name': 'eng_septico.html', 'comic': 'septico_comic.png' },
    { 'name': 'eng_termografia.html', 'comic': 'termo_comic.png' }
]

for p in pages:
    file_path = os.path.join('docs', p['name'])
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'Methodology Comic' in content:
        print(f"Comic already exists in {p['name']}")
        continue

    comic_html = f"""
                <div class="comic-section" style="margin-top: 50px; margin-bottom: 40px; clear: both; width: 100%;">
                    <h2 class="tech-spec-header" style="text-align: center;">Metodología (Storyboard)</h2>
                    <img src="../assets/{p['comic']}" alt="Methodology Comic" style="width: 100%; border-radius: 12px; border: 2px solid var(--neon-cyan); box-shadow: 0 0 20px rgba(0,245,255,0.3);">
                </div>
                <h2 class="tech-spec-header" data-i18n="eng_tech_details">Detalles Técnicos</h2>"""
    
    # We replace the exact match for the technical details header to insert the comic just above it.
    new_content = content.replace('<h2 class="tech-spec-header" data-i18n="eng_tech_details">Detalles Técnicos</h2>', comic_html)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Injected comic into {p['name']}")
