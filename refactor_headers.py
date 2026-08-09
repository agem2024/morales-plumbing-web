import os
import glob
import re

files = glob.glob(r'C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\*.html')
files.append(r'C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\index.html')

header_template = """<!-- MORALES PLUMBING OFFICIAL HEADER -->
<header class="mp-global-header" style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-bottom: 2px solid #D4AF37; padding: 8px 15px; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; position: fixed; top: 0; left: 0; right: 0; z-index: 999999; height: 60px; box-sizing: border-box; width: 100vw; max-width: 100%;">
    <div style="display: flex; align-items: center; gap: 10px;">
        <a href="{prefix}index.html" style="display: flex; align-items: center;">
            <img src="{prefix}assets/logo_portada.png" alt="Morales Plumbing Logo" style="height: 38px; width: auto; max-width: 140px; object-fit: contain;" onerror="this.src='{prefix}morales_logo.jpg'; this.onerror=null;">
        </a>
    </div>
    <div style="position: relative; display: flex; align-items: center; gap: 10px;">
        <div style="text-align: right; color: #fff; display: none;" class="header-contact-info">
            <h2 style="margin: 0; font-size: 0.9rem; color: #D4AF37; font-weight: bold; line-height: 1;">MORALES PLUMBING</h2>
            <p style="margin: 2px 0 0; font-size: 0.7rem; color: #aaa; line-height: 1;">Lic. C-36 #1156542</p>
        </div>
        <button onclick="document.getElementById('globalLangMenu').classList.toggle('show-lang')" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(0,245,255,0.3); cursor: pointer; padding: 4px 8px; outline: none; border-radius: 6px; display: flex; align-items: center; gap: 5px; transition: 0.2s;">
            <img src="{prefix}assets/plan_good_clean.png" alt="Language" style="height: 22px; width: auto; border-radius: 4px; box-shadow: 0 0 5px rgba(0,245,255,0.4);">
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
    @media (min-width: 480px) {{
        .header-contact-info {{ display: block !important; }}
    }}
</style>
"""

modified_count = 0

for filepath in files:
    if "faq_test.html" in filepath:
        continue
    
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    original = content
    
    # 1. Strip out old nav blocks and bloated language selectors
    content = re.sub(r'<nav class="faq-nav">.*?</nav>', '', content, flags=re.DOTALL)
    content = re.sub(r'<nav class="cyber-nav".*?</nav>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div class="lang-selector".*?</div>\s*</div>', '</div>', content, flags=re.DOTALL) # Usually inside cyber-nav or portal
    
    # In index.html, there's a portal lang selector
    content = re.sub(r'<div class="lang-selector portal-lang-selector".*?</div>', '', content, flags=re.DOTALL)
    
    # Inside old MORALES PLUMBING OFFICIAL HEADER there's often a language-switcher
    content = re.sub(r'<div class="language-switcher".*?</div>', '', content, flags=re.DOTALL)

    # 2. Determine prefix
    prefix = "" if filepath.endswith("index.html") else "../"
    header_injected = header_template.format(prefix=prefix)
    
    # 3. Replace or inject header
    if "<!-- MORALES PLUMBING OFFICIAL HEADER -->" in content:
        # Some headers end with </header> (ignoring the previous <style> blocks inside it by doing non-greedy match)
        content = re.sub(r'<!-- MORALES PLUMBING OFFICIAL HEADER -->.*?</header>', header_injected, content, flags=re.DOTALL)
    else:
        # Inject right after body
        content = re.sub(r'(<body[^>]*>)', r'\1\n' + header_injected, content, count=1, flags=re.IGNORECASE)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
        
print(f"Refactoring complete. Modified {modified_count} files.")
