import re, glob

# ─── 1. Fix comic_terms image path in ceo.html (the static HTML version)
for filepath in ['docs/ceo.html', 'docs/cv.html', 'docs/team.html']:
    txt = open(filepath, 'r', encoding='utf-8').read()
    original = txt

    # Fix broken icon img refs with accented characters
    txt = txt.replace('comic_termás.png', 'comic_terms.png')
    txt = txt.replace('comic_terms.png', 'comic_terms.png')  # idempotent
    txt = txt.replace('comic_term\u00e1s.png', 'comic_terms.png')
    txt = txt.replace('comic_term\u00e9s.png', 'comic_terms.png')
    # system\u00e1s / Systems
    txt = txt.replace('Systemás', 'Systems')
    txt = txt.replace('system\u00e1s', 'systems')
    txt = txt.replace('MOR\u00c1LES', 'MORALES')
    txt = txt.replace('Mor\u00e1les', 'Morales')
    # "N/Á" → "N/A"
    txt = txt.replace('N/\u00c1', 'N/A')
    txt = txt.replace('N/á', 'N/A')
    # GENERÁNDO → GENERANDO, ÁSISTENCIÁ → ASISTENCIA
    txt = txt.replace('GENERándo', 'GENERANDO')
    txt = txt.replace('GENERÁNDO', 'GENERANDO')
    txt = txt.replace('ÁSISTENCIÁ', 'ASISTENCIA')
    txt = txt.replace('EMERGENCIá', 'EMERGENCIA')

    if txt != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(txt)
        print(f'Fixed static content: {filepath}')

# ─── 2. Fix diy_hub.html and hazlo_tu_mismo.html 
for filepath in ['docs/diy_hub.html', 'docs/hazlo_tu_mismo.html']:
    txt = open(filepath, 'r', encoding='utf-8').read()
    original = txt

    txt = txt.replace('N/\u00c1', 'N/A')
    txt = txt.replace('N/á', 'N/A')
    txt = txt.replace('GENERándo', 'GENERANDO')
    txt = txt.replace('ÁSISTENCIÁ', 'ASISTENCIA')
    txt = txt.replace('EMERGENCIá', 'EMERGENCIA')
    txt = txt.replace('ábsolutamente', 'Absolutamente')
    txt = txt.replace('\u00c1SISTENCI\u00c1', 'ASISTENCIA')
    txt = txt.replace('\u00e1ct\u00faa', 'actúa')
    txt = txt.replace('ct\u00faa', 'ctúa')

    if txt != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(txt)
        print(f'Fixed: {filepath}')

# ─── 3. Remove OLD top-nav from ceo.html (keep only the injected global header)
txt = open('docs/ceo.html', 'r', encoding='utf-8').read()
original = txt

# Remove old top-nav if present
txt = re.sub(r'<nav class="top-nav"[^>]*>.*?</nav>', '', txt, flags=re.DOTALL)

if txt != original:
    with open('docs/ceo.html', 'w', encoding='utf-8') as f:
        f.write(txt)
    print('Removed old top-nav from ceo.html')

# ─── 4. Inject globalLangMenu in missing pages (quick_services.html, trust_bar.html)
HEADER = '''<!-- MORALES PLUMBING OFFICIAL HEADER -->
<header class="mp-global-header" style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-bottom: 2px solid #D4AF37; padding: 8px 15px; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; position: fixed; top: 0; left: 0; right: 0; z-index: 999999; height: 60px; box-sizing: border-box; width: 100vw; max-width: 100%;">
    <div style="display: flex; align-items: center; gap: 10px;">
        <a href="../index.html" style="display: flex; align-items: center;">
            <img src="../assets/logo_portada.png" alt="Morales Plumbing Logo" style="height: 38px; width: auto; max-width: 140px; object-fit: contain;" onerror="this.src='../morales_logo.jpg'; this.onerror=null;">
        </a>
    </div>
    <div style="position: relative; display: flex; align-items: center; gap: 10px;">
        <button onclick="document.getElementById('globalLangMenu').classList.toggle('show-lang')" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(0,245,255,0.3); cursor: pointer; padding: 4px 8px; outline: none; border-radius: 6px; display: flex; align-items: center; gap: 5px; transition: 0.2s;">
            <img src="../assets/plan_good_clean.png" alt="Language" style="height: 22px; width: auto; border-radius: 4px; box-shadow: 0 0 5px rgba(0,245,255,0.4);">
            <span style="color: #00f5ff; font-family: 'Orbitron', sans-serif; font-size: 11px; font-weight: bold; letter-spacing: 0.5px;">LANG</span>
        </button>
        <div id="globalLangMenu" style="display: none; position: absolute; right: 0; top: 45px; background: rgba(3, 7, 18, 0.98); border: 1px solid #D4AF37; border-radius: 8px; flex-direction: column; min-width: 140px; overflow: hidden; box-shadow: 0 5px 25px rgba(0,0,0,0.9); z-index: 1000000;">
            <button onclick="if(typeof setLanguage === 'function') setLanguage('en'); else if(typeof switchLang === 'function') switchLang('en'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">EN - English</button>
            <button onclick="if(typeof setLanguage === 'function') setLanguage('es'); else if(typeof switchLang === 'function') switchLang('es'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">ES - Español</button>
            <button onclick="if(typeof setLanguage === 'function') setLanguage('zh'); else if(typeof switchLang === 'function') switchLang('zh'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">ZH - 中文</button>
            <button onclick="if(typeof setLanguage === 'function') setLanguage('tl'); else if(typeof switchLang === 'function') switchLang('tl'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">TL - Tagalog</button>
            <button onclick="if(typeof setLanguage === 'function') setLanguage('vi'); else if(typeof switchLang === 'function') switchLang('vi'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 14px;">VI - Tiếng Việt</button>
        </div>
    </div>
</header>
<style>
    body {{ padding-top: 60px !important; }}
    .show-lang {{ display: flex !important; }}
    #globalLangMenu button:hover {{ background: rgba(0, 245, 255, 0.15) !important; color: #00f5ff !important; }}
</style>
'''

for filepath in ['docs/quick_services.html', 'docs/trust_bar.html']:
    txt = open(filepath, 'r', encoding='utf-8').read()
    if 'globalLangMenu' not in txt:
        txt = re.sub(r'(<body[^>]*>)', r'\1\n' + HEADER, txt, count=1, flags=re.IGNORECASE)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(txt)
        print(f'Injected header into: {filepath}')

print('All done!')
