import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

replacements = [
    (r'href="/favicon\.svg"', r'href="favicon.svg"'),
    (r'href="/favicon\.png"', r'href="favicon.png"'),
    (r'href="/sitemap\.xml"', r'href="sitemap.xml"'),
    (r'assets/diy_hero_1778369346415\.png', r'assets/digital_plumber_banner.jpg'),
    (r'\.\./assets/nekon_app_card\.png', r'assets/nekon_app_card.png'),
    (r'\.\./assets/comic_termás\.png', r'../assets/termo_comic.png'),
    (r'assets/comic_termás\.webp', r'assets/termo_comic.png'),
    (r'propuesta_estrategica\.html', r'../index.html#services'),
    (r'\.\./assets/service_default\.png', r'../assets/digital_plumber_banner.jpg'),
    (r'\.\./app\.js_heatpump_5', r'../app.js'),
    (r'\.\./app\.js_swh_1', r'../app.js')
]

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            content = f.read()
        except UnicodeDecodeError:
            continue
            
    modified = False
    for old, new in replacements:
        if re.search(old, content):
            content = re.sub(old, new, content)
            modified = True
            
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {file_path}")
