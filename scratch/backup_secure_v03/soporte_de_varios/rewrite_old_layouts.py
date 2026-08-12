import os
import re

base_style = """
        .service-detail-container { max-width: 1100px; margin: 120px auto 50px auto; padding: 40px; background: rgba(10, 15, 30, 0.65); border: 1px solid rgba(0, 245, 255, 0.2); border-radius: 24px; backdrop-filter: blur(15px); box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1); }
        .service-header { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; flex-wrap: wrap; }
        .service-title { font-size: 2.5em; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; text-shadow: 0 0 20px rgba(0, 245, 255, 0.4); margin: 0; }
        .service-code { font-family: monospace; background: rgba(0, 245, 255, 0.1); color: var(--neon-cyan); padding: 5px 12px; border-radius: 6px; font-size: 0.9em; letter-spacing: 1px; border: 1px solid rgba(0, 245, 255, 0.3); }
        .service-content-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; align-items: start; }
        .service-image { width: 100%; height: auto; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.4); border: 1px solid rgba(0, 245, 255, 0.3); object-fit: cover; }
        .service-text-block { color: #d0d0d0; font-size: 1.1em; line-height: 1.8; }
        .service-text-block p { margin-bottom: 20px; }
        .tech-spec-header { color: var(--neon-cyan); font-size: 1.5em; margin-top: 30px; margin-bottom: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-align: center; }
        .tier-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .tier-list li { background: rgba(0,0,0,0.3); border-left: 4px solid var(--neon-cyan); padding: 20px; border-radius: 0 8px 8px 0; font-size: 1em; color: #fff;}
        .tier-list li strong { color: #ffffff; display: block; margin-bottom: 5px; font-size: 1.1em; }
        .back-btn { display: inline-block; padding: 12px 30px; background: transparent; color: var(--neon-cyan); border: 1px solid var(--neon-cyan); border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; }
        .back-btn:hover { background: rgba(0, 245, 255, 0.1); box-shadow: 0 0 15px rgba(0, 245, 255, 0.3); transform: translateY(-2px); }
        @media (max-width: 900px) { .service-content-grid { grid-template-columns: 1fr; } }
"""

files = ['eng_eco.html', 'eng_cobre.html', 'eng_diseno.html', 'eng_septico.html', 'eng_termografia.html']

for filename in files:
    filepath = os.path.join('docs', filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace styles
    content = re.sub(r'<style>.*?</style>', f'<style>\n{base_style}\n    </style>', content, flags=re.DOTALL)

    # 2. Extract comic and tier list out of service-text-block
    # Currently it looks like:
    # <div class="service-text-block">
    #    <p>...</p>
    #    <p>...</p>
    #    <div class="comic-section" ...>...</div>
    #    <h2 class="tech-spec-header" ...>...</h2>
    #    <ul class="tier-list">...</ul>
    #    <a href=...>...</a>
    # </div>
    # </div> <!-- closes service-content-grid -->

    # We need to change it to:
    # <div class="service-text-block">
    #    <p>...</p>
    #    <p>...</p>
    # </div>
    # </div> <!-- closes service-content-grid -->
    # <div class="comic-section"...
    # ...
    # <div style="text-align: center; margin-top: 50px;"><a ...></a></div>

    # Find where <div class="comic-section" starts.
    comic_start = content.find('<div class="comic-section"')
    if comic_start != -1:
        # We need to insert `</div></div>` right before the comic
        # and remove the `</div></div>` that comes after the back button.
        
        # Let's do it using regex to be safe.
        # Find the <div class="service-text-block">... up to right before <div class="comic-section"
        match = re.search(r'(<div class="service-text-block">.*?)(<div class="comic-section")', content, re.DOTALL)
        if match:
            part1 = match.group(1) + "</div>\n        </div>\n        "
            part2 = match.group(2)
            content = content[:match.start()] + part1 + part2 + content[match.end():]
            
            # Now we need to remove the two </div>s after the back-btn
            back_btn_match = re.search(r'(<a href=".*?#services" class="back-btn".*?</a>)\s*</div>\s*</div>', content, re.DOTALL)
            if back_btn_match:
                btn_html = back_btn_match.group(1)
                wrapped_btn = f'<div style="text-align: center; margin-top: 50px;">\n            {btn_html}\n        </div>'
                content = content[:back_btn_match.start()] + wrapped_btn + content[back_btn_match.end():]
                
    # Center the Details header
    content = content.replace('<h2 class="tech-spec-header" data-i18n="eng_tech_details">Detalles Técnicos</h2>', 
                              '<h2 class="tech-spec-header" data-i18n="eng_tech_details" style="text-align: center;">Detalles Técnicos</h2>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated layout for {filename}")
