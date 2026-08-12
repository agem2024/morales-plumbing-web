import os
import re
import codecs

header = '''
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
'''

footer = '''
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
'''

def process_file(file):
    try:
        with codecs.open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file}: {e}")
        return

    # Clean existing
    content = re.sub(r'<!-- MORALES PLUMBING OFFICIAL HEADER -->.*?</header>', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- MORALES PLUMBING OFFICIAL FOOTER -->.*?</footer>', '', content, flags=re.DOTALL)
    
    # Insert header
    if '<body>' in content:
        content = content.replace('<body>', f'<body>\n{header}\n')
    
    # Insert footer
    if '</body>' in content:
        content = content.replace('</body>', f'\n{footer}\n\n<script src="../app.js"></script>\n</body>')
    
    try:
        with codecs.open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Error writing {file}: {e}")

target_dir = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs"
count = 0
for file in os.listdir(target_dir):
    if file.endswith('.html'):
        process_file(os.path.join(target_dir, file))
        count += 1
print(f"Processed {count} files in vo3.0.")
