import os
import glob
import re

header_html = '''
    <!-- MORALES PLUMBING OFFICIAL HEADER -->
    <header style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-bottom: 4px solid #D4AF37; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; position: relative; z-index: 1000;">
        <div style="display: flex; align-items: center;">
            <a href="../index.html">
                <img src="../logo_portada.png" alt="Morales Plumbing Logo" style="height: 60px; width: auto;" onerror="this.src='../morales_logo.jpg'; this.onerror=null;">
            </a>
        </div>
        <div style="text-align: right; color: #fff;">
            <h2 style="margin: 0; font-size: 1.2rem; color: #D4AF37; font-weight: bold;">MORALES PLUMBING</h2>
            <p style="margin: 3px 0 0; font-size: 0.9rem;">AI-INTEGRATED SERVICES</p>
            <p style="margin: 3px 0 0; font-size: 0.8rem; color: #aaa;">Lic. C-36 #1156542 | San Jose, CA</p>
        </div>
    </header>
'''

footer_html = '''
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
                © 2026 Morales Plumbing. Todos los derechos reservados.
            </p>
        </div>
    </footer>
'''

docs_path = 'docs/*.html'
files = glob.glob(docs_path)

for file in files:
    with open(file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    modified = False

    # 1. Inject Header if missing logo
    if 'logo_portada.png' not in content and 'morales_logo' not in content:
        # Insert right after opening <body>
        content = re.sub(r'(<body[^>]*>)', r'\1\n' + header_html, content, count=1)
        modified = True

    # 2. Inject Footer if missing
    if 'Todos los derechos reservados' not in content and 'All rights reserved' not in content and 'footer-copyright' not in content:
        # Insert right before </body>
        content = content.replace('</body>', footer_html + '\n</body>')
        modified = True

    # 3. Inject app.js if missing
    if 'app.js' not in content:
        script_tag = '\n<script src="../app.js"></script>\n'
        content = content.replace('</body>', script_tag + '</body>')
        modified = True

    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print(f"Processed {len(files)} files.")
