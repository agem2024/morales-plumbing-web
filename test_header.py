import re

with open(r'C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\faq.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove faq-nav
content = re.sub(r'<nav class="faq-nav">.*?</nav>', '', content, flags=re.DOTALL)

# 2. Replace official header
header_template = """<!-- MORALES PLUMBING OFFICIAL HEADER -->
<header class="mp-global-header" style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-bottom: 2px solid #D4AF37; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; position: fixed; top: 0; left: 0; right: 0; z-index: 10000; height: 60px; box-sizing: border-box;">
    <div style="display: flex; align-items: center;">
        <a href="../index.html">
            <img src="../assets/logo_portada.png" alt="Morales Plumbing Logo" style="height: 40px; width: auto;" onerror="this.src='../morales_logo.jpg'; this.onerror=null;">
        </a>
    </div>
    <div style="position: relative;">
        <button onclick="document.getElementById('globalLangMenu').classList.toggle('show-lang')" style="background: transparent; border: none; cursor: pointer; padding: 5px; outline: none;">
            <img src="../assets/plan_good_clean.png" alt="Language" style="height: 35px; width: auto; border-radius: 6px; box-shadow: 0 0 10px rgba(0,245,255,0.4);">
        </button>
        <div id="globalLangMenu" style="display: none; position: absolute; right: 0; top: 50px; background: rgba(3, 7, 18, 0.98); border: 1px solid #D4AF37; border-radius: 8px; flex-direction: column; min-width: 140px; overflow: hidden; box-shadow: 0 5px 25px rgba(0,0,0,0.9);">
            <button onclick="setLanguage('en'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">EN - English</button>
            <button onclick="setLanguage('es'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">ES - Español</button>
            <button onclick="setLanguage('zh'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">ZH - 中文</button>
            <button onclick="setLanguage('tl'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-size: 14px;">TL - Tagalog</button>
            <button onclick="setLanguage('vi'); document.getElementById('globalLangMenu').classList.remove('show-lang')" style="padding: 12px 15px; background: transparent; border: none; color: #fff; text-align: left; width: 100%; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 14px;">VI - Tiếng Việt</button>
        </div>
    </div>
</header>
<style>
    body { padding-top: 60px !important; }
    .show-lang { display: flex !important; }
    #globalLangMenu button:hover { background: rgba(0, 245, 255, 0.15) !important; color: #00f5ff !important; }
</style>
"""

content = re.sub(r'<!-- MORALES PLUMBING OFFICIAL HEADER -->.*?</header>', header_template, content, flags=re.DOTALL)

with open(r'C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\faq_test.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Test completed")
