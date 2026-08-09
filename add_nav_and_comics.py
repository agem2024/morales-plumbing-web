import os
import re

directory = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\corporate team"

sequence = [
    "profile_alex.html",
    "profile_jhon.html",
    "profile_david.html",
    "profile_sarah.html",
    "profile_marcus.html",
    "profile_elena.html",
    "profile_tech1.html",
    "profile_tech2.html",
    "profile_tech3.html",
    "profile_tech4.html",
    "profile_tech5.html",
    "profile_tech6.html",
    "profile_tech7.html",
    "profile_tech8.html",
    "profile_valeria.html",
    "profile_sofia.html",
    "profile_michael.html",
    "profile_telegram_ai.html",
    "profile_orion_tech.html"
]

missing_comics = {
    "profile_jhon.html": ("jhon_comic.jpg", "Jhon Espinosa Morales"),
    "profile_valeria.html": ("valeria_comic.jpg", "Valeria Cortez"),
    "profile_sofia.html": ("sofia_comic.jpg", "Sofia Lin"),
    "profile_michael.html": ("michael_comic.jpg", "Michael Davies"),
    "profile_telegram_ai.html": ("telegram_ai_comic.jpg", "Telegram AI Agents"),
    "profile_orion_tech.html": ("orion_tech_comic.jpg", "ORION Technical Department")
}

nav_template = """
        <!-- NAVIGATION STRIP -->
        <div style="display: flex; justify-content: space-between; max-width: 1000px; margin: 40px auto; padding: 0 20px; flex-wrap: wrap; gap: 15px;">
            {prev_link}
            {next_link}
        </div>
"""

comic_template = """
        <h3 class="section-title"><span data-en="IN ACTION (THE MORALES TOUCH)" data-zh="行动中（莫拉莱斯风格）" data-tl="SA AKSYON (ANG TATAK MORALES)" data-vi="HÀNH ĐỘNG (PHONG CÁCH MORALES)">EN ACCIÓN (EL TOQUE MORALES)</span></h3>
        <div style="text-align: center; margin-bottom: 40px;">
            <img src="{comic_img}" alt="{name} en Acción" style="width: 100%; max-width: 800px; border: 4px solid #000; border-radius: 8px; box-shadow: 5px 5px 0px rgba(212,175,55,0.5);">
        </div>
"""

for i, filename in enumerate(sequence):
    filepath = os.path.join(directory, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine Previous and Next
    prev_file = sequence[i-1] if i > 0 else sequence[-1]
    next_file = sequence[i+1] if i < len(sequence) - 1 else sequence[0]
    
    prev_link = f'<a href="{prev_file}" class="back-btn">&laquo; <span data-en="PREVIOUS PROFILE" data-zh="上一个配置" data-tl="NAKARAANG PROFILE" data-vi="HỒ SƠ TRƯỚC">PERFIL ANTERIOR</span></a>'
    next_link = f'<a href="{next_file}" class="back-btn"><span data-en="NEXT PROFILE" data-zh="下一个配置" data-tl="SUSUNOD NA PROFILE" data-vi="HỒ SƠ TIẾP THEO">SIGUIENTE PERFIL</span> &raquo;</a>'
    
    nav_html = nav_template.format(prev_link=prev_link, next_link=next_link)
    
    # 1. Inject Comic if missing
    if filename in missing_comics:
        comic_img, name = missing_comics[filename]
        # Only inject if "EN ACCIÓN" or "IN ACTION" is not already there
        if "IN ACTION" not in content and "EN ACCIÓN" not in content:
            comic_html = comic_template.format(comic_img=comic_img, name=name)
            # Find the end of the container div. 
            # It's usually right before </div>\n    <footer>
            content = re.sub(r'(</div>\s*<footer>)', comic_html + r'\1', content)

    # 2. Inject Navigation
    # We want to put the navigation at the very bottom of the container, before the footer.
    # We will search for <footer> and insert it before that, outside the container or just inside.
    # Usually it's `</div>\n    <footer>`. Let's put the nav outside the container right above footer.
    # Or just replace `<footer>` with the nav + `<footer>`.
    if "NAVIGATION STRIP" not in content:
        content = content.replace("<footer>", nav_html + "    <footer>")
        
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Navigation and comics added successfully.")
