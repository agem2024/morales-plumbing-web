import re

# Extract faq100 Q&A from app.js (all 5 languages)
with open(r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\app.js", encoding='utf-8', errors='replace') as f:
    content = f.read()

# Read the faq_100.html to understand structure
with open(r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\faq_100.html", encoding='utf-8', errors='replace') as f:
    faq100 = f.read()

# Extract all Q&A for all languages
# app.js has objects like: { "en": {...}, "es": {...}, "zh": {...}, "tl": {...}, "vi": {...} }
# We want all 5 languages for each question

all_langs = {}
for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    # Find the section for this language
    pattern = rf'"{lang}"\s*:\s*\{{(.*?)(?=\n\s*\}}\s*,\s*"(?:en|es|zh|tl|vi)|\n\s*\}}\s*;)'
    match = re.search(pattern, content, re.DOTALL)
    
    qs = {}
    ans = {}
    
    if match:
        section = match.group(1)
        q_found = re.findall(r'"faq100_q_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', section)
        a_found = re.findall(r'"faq100_a_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', section)
        
        for num, text in q_found:
            qs[int(num)] = text.replace('\\"', '"').replace('\\n', ' ')
        for num, text in a_found:
            ans[int(num)] = text.replace('\\"', '"').replace('\\n', ' ')
    
    # Global fallback
    if len(qs) < 10:
        q_global = re.findall(r'"faq100_q_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', content)
        a_global = re.findall(r'"faq100_a_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', content)
        for num, text in q_global:
            n = int(num)
            if n not in qs:
                qs[n] = text.replace('\\"', '"').replace('\\n', ' ')
        for num, text in a_global:
            n = int(num)
            if n not in ans:
                ans[n] = text.replace('\\"', '"').replace('\\n', ' ')
    
    all_langs[lang] = {'q': qs, 'a': ans}
    print(f"{lang}: {len(qs)} questions, {len(ans)} answers")

# Use EN as primary language (most complete)
q = all_langs['en']['q']
a = all_langs['en']['a']

# Build accordion items
accordion_items = []
for i in range(1, 101):
    question = q.get(i, f"Question {i}")
    answer = a.get(i, f"Answer {i}")
    
    item = f'''<div class="accordion-item search-item" id="faq-item-{i}">
    <button class="accordion-header" onclick="toggleAccordion(this)">
        <span><span style="color:var(--orange);">#{i}</span> {question}</span>
        <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
        <p>{answer}</p>
    </div>
</div>'''
    accordion_items.append(item)

accordion_html = '\n'.join(accordion_items)

# Build multilingual data for JS
multilang_js_parts = []
for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    ql = all_langs[lang]['q']
    al = all_langs[lang]['a']
    entries = []
    for i in range(1, 101):
        qi = ql.get(i, q.get(i, f'Question {i}')).replace("'", "\\'")
        ai = al.get(i, a.get(i, f'Answer {i}')).replace("'", "\\'")
        entries.append(f"  {i}: {{ q: '{qi}', a: '{ai}' }}")
    multilang_js_parts.append(f"  '{lang}': {{\n" + ',\n'.join(entries) + "\n  }")

multilang_js = 'const FAQ_DATA = {\n' + ',\n'.join(multilang_js_parts) + '\n};'

# Write final HTML
html = f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>100 Preguntas | Q&A Technical Hub | Morales Plumbing</title>
    <meta name="description" content="100 preguntas frecuentes sobre plomería técnica C-36, calentadores de agua, eco-plomería y tecnología ORION. Morales Plumbing, San Jose, CA.">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=Black+Ops+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../universe.css">
    <style>
        :root {{ --cyan: #00f5ff; --orange: #ff8c00; --dark: #030712; --card: rgba(8,14,36,0.45); --text: #d9e8f0; }}
        body {{ background-color: var(--dark); background-image: url('../assets/service_faq_hub_1778369361208.webp'); background-size: cover; background-position: center; background-attachment: fixed; background-blend-mode: overlay; color: var(--text); font-family: 'Inter', sans-serif; min-height: 100vh; }}
        .faq-nav {{ position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: .8rem 2rem; background: rgba(3,7,18,0.95); backdrop-filter: blur(14px); border-bottom: 3px solid #000; box-shadow: 0 2px 20px rgba(0,0,0,0.5); }}
        .faq-nav a {{ color: var(--orange); text-decoration: none; font-family: 'Orbitron'; font-weight: 700; font-size: 0.85rem; }}
        .nav-right {{ display: flex; gap: 8px; align-items: center; }}
        .lang-btn {{ background: transparent; border: 2px solid var(--orange); color: var(--orange); padding: 4px 10px; cursor: pointer; border-radius: 8px; font-weight: bold; font-size: 0.85rem; transition: 0.2s; }}
        .lang-btn:hover, .lang-btn.active {{ background: var(--orange); color: #000; }}
        .faq-hero {{ padding: 130px 20px 30px; text-align: center; }}
        .graffiti-title {{ font-family: 'Black Ops One', cursive; font-size: 3.5rem; text-transform: uppercase; background: linear-gradient(to bottom, #ffffff, #00f5ff, #ff8c00); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(2px 2px 0px #000); margin: 0; }}
        .search-container {{ max-width: 600px; margin: 20px auto; }}
        .faq-search {{ width: 100%; padding: 14px 22px; border-radius: 30px; border: 3px solid #000; background: rgba(0,245,255,0.08); color: #fff; font-size: 1rem; outline: none; transition: 0.3s; box-shadow: 4px 4px 0px #000; box-sizing: border-box; }}
        .faq-search:focus {{ border-color: var(--cyan); box-shadow: 6px 6px 0px var(--cyan); }}
        .faq-counter {{ text-align: center; margin: 10px 0; color: var(--cyan); font-family: 'Orbitron'; font-size: 0.85rem; letter-spacing: 1px; }}
        .faq-container {{ max-width: 1000px; margin: 0 auto 100px; padding: 0 20px; }}
        .accordion-item {{ margin-bottom: 12px; border: 3px solid #000; border-radius: 12px; background: var(--card); box-shadow: 4px 4px 0px #000; overflow: hidden; transition: 0.2s; }}
        .accordion-item:hover {{ transform: translate(-2px,-2px); box-shadow: 6px 6px 0px var(--orange); }}
        .accordion-item.hidden {{ display: none; }}
        .accordion-header {{ width: 100%; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; background: transparent; border: none; color: #fff; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; font-family: 'Inter'; gap: 10px; }}
        .accordion-header.active {{ color: var(--cyan); }}
        .accordion-icon {{ font-size: 1.4rem; color: var(--orange); transition: transform 0.3s; font-weight: 900; flex-shrink: 0; }}
        .accordion-header.active .accordion-icon {{ transform: rotate(45deg); color: var(--cyan); }}
        .accordion-content {{ padding: 0 20px; max-height: 0; overflow: hidden; transition: max-height 0.35s ease-out; background: rgba(0,0,0,0.4); }}
        .accordion-content p {{ padding: 18px 0; color: #e2eff5; line-height: 1.7; margin: 0; border-top: 1px dashed rgba(255,255,255,0.1); font-size: 1rem; }}
        .no-results {{ display: none; text-align: center; padding: 40px; color: var(--orange); font-family: 'Orbitron'; font-size: 1.3rem; }}
        .category-badge {{ display: inline-block; font-size: 0.75rem; font-family: 'Orbitron'; padding: 2px 8px; border-radius: 4px; background: rgba(0,245,255,0.15); border: 1px solid var(--cyan); color: var(--cyan); margin-bottom: 15px; letter-spacing: 1px; }}
    </style>
</head>
<body>

    <!-- MORALES PLUMBING OFFICIAL HEADER -->
    <header style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-bottom: 4px solid #D4AF37; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; position: relative; z-index: 1000;">
        <div style="display: flex; align-items: center;">
            <a href="../index.html">
                <img src="../assets/logo_portada.png" alt="Morales Plumbing Logo" style="height: 60px; width: auto;" onerror="this.src='../morales_logo.jpg'; this.onerror=null;">
            </a>
        </div>
        <div style="text-align: right; color: #fff;">
            <h2 style="margin: 0; font-size: 1.2rem; color: #D4AF37; font-weight: bold;">MORALES PLUMBING</h2>
            <p style="margin: 3px 0 0; font-size: 0.9rem;">AI-INTEGRATED SERVICES</p>
            <p style="margin: 3px 0 0; font-size: 0.8rem; color: #aaa;">Lic. C-36 #1156542 | San Jose, CA</p>
        </div>
    </header>

    <!-- UNIVERSE BACKGROUND -->
    <canvas id="universe-canvas" data-universe-mode="matrix-stars"></canvas>
    <div class="universe-overlay u-variant-info"></div>
    <script src="../universe.js"></script>

    <nav class="faq-nav">
        <a href="../index.html">&#8592; HOME</a>
        <div class="nav-right">
            <button class="lang-btn active" data-lang="en" onclick="switchLang('en')">EN</button>
            <button class="lang-btn" data-lang="es" onclick="switchLang('es')">ES</button>
            <button class="lang-btn" data-lang="zh" onclick="switchLang('zh')">ZH</button>
            <button class="lang-btn" data-lang="tl" onclick="switchLang('tl')">TL</button>
            <button class="lang-btn" data-lang="vi" onclick="switchLang('vi')">VI</button>
        </div>
    </nav>

    <section class="faq-hero">
        <h1 class="graffiti-title">Q&amp;A <span style="color:var(--cyan);">100</span></h1>
        <p style="color:#aaa; margin-top:10px; font-family:'Orbitron'; letter-spacing:1px; font-size:0.9rem;">MORALES PLUMBING · TECHNICAL HUB · C-36 CERTIFIED</p>
        <div style="margin: 15px 0;">
            <a href="../index.html#contact" style="display:inline-block; padding:10px 22px; background:rgba(212,175,55,0.15); border:2px solid #D4AF37; color:#D4AF37; font-family:'Orbitron'; text-decoration:none; border-radius:8px; font-weight:bold; margin-right:10px; font-size:0.8rem; transition:0.3s;" onmouseover="this.style.background='#D4AF37'; this.style.color='#000';" onmouseout="this.style.background='rgba(212,175,55,0.15)'; this.style.color='#D4AF37';">&#128222; (669) 213-4422</a>
            <a href="hazlo_tu_mismo.html" style="display:inline-block; padding:10px 22px; background:rgba(0,245,255,0.1); border:2px solid var(--cyan); color:var(--cyan); font-family:'Orbitron'; text-decoration:none; border-radius:8px; font-weight:bold; font-size:0.8rem; transition:0.3s;" onmouseover="this.style.background='var(--cyan)'; this.style.color='#000';" onmouseout="this.style.background='rgba(0,245,255,0.1)'; this.style.color='var(--cyan)';">DIY HUB &#8594;</a>
        </div>
        <div class="search-container">
            <input type="text" id="searchInput" class="faq-search" placeholder="&#128269; Search 100 FAQs..." oninput="filterFaqs()">
        </div>
        <div class="faq-counter" id="faqCounter">Showing 100 of 100 questions</div>
    </section>

    <div class="faq-container" id="faqContainer">
        <div class="no-results" id="noResults">&#128269; No results found. Try different keywords.</div>
        {accordion_html}
    </div>

    <!-- FOOTER -->
    <footer style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); border-top: 4px solid #D4AF37; padding: 30px 20px; text-align: center; font-family: 'Inter', sans-serif; color: #fff; margin-top: 50px;">
        <div style="max-width: 800px; margin: 0 auto;">
            <h3 style="color: #D4AF37; margin-bottom: 15px; font-weight: bold;">MORALES PLUMBING</h3>
            <p style="margin: 5px 0; font-size: 0.9rem;">San Jose, CA | Lic. C-36 #1156542</p>
            <p style="margin: 5px 0; font-size: 0.9rem;">
                <a href="tel:+16692134422" style="color: #00f5ff; text-decoration: none;">(669) 213-4422</a> | 
                <a href="mailto:moralesplumbing026@gmail.com" style="color: #00f5ff; text-decoration: none;">moralesplumbing026@gmail.com</a>
            </p>
            <p style="margin: 20px 0 0; font-size: 0.8rem; color: #888;">&copy; 2026 Morales Plumbing. All Rights Reserved. CSLB C-36 #1156542</p>
        </div>
    </footer>

    <script>
    {multilang_js}

    let currentLang = localStorage.getItem('morales_lang') || 'en';

    function switchLang(lang) {{
        currentLang = lang;
        localStorage.setItem('morales_lang', lang);

        // Update nav buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {{
            btn.classList.toggle('active', btn.dataset.lang === lang);
        }});

        // Update all accordion items
        const data = FAQ_DATA[lang] || FAQ_DATA['en'];
        for (let i = 1; i <= 100; i++) {{
            const item = document.getElementById('faq-item-' + i);
            if (!item || !data[i]) continue;
            const header = item.querySelector('.accordion-header span:first-child');
            const numSpan = header.querySelector('span');
            const textNode = data[i].q;
            header.innerHTML = `<span style="color:var(--orange);">#${{i}}</span> ${{textNode}}`;
            item.querySelector('.accordion-content p').textContent = data[i].a;
        }}

        // Re-run filter to update visible counter
        filterFaqs();
    }}

    function toggleAccordion(btn) {{
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {{
            content.style.maxHeight = '0px';
        }} else {{
            content.style.maxHeight = content.scrollHeight + 'px';
        }}
    }}

    function filterFaqs() {{
        const query = document.getElementById('searchInput').value.toLowerCase().trim();
        const items = document.querySelectorAll('.accordion-item.search-item');
        let visible = 0;

        items.forEach(item => {{
            const text = item.textContent.toLowerCase();
            if (!query || text.includes(query)) {{
                item.classList.remove('hidden');
                visible++;
            }} else {{
                item.classList.add('hidden');
            }}
        }});

        document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
        document.getElementById('faqCounter').textContent = `Showing ${{visible}} of 100 questions`;
    }}

    // Init language on load
    document.addEventListener('DOMContentLoaded', () => {{
        switchLang(currentLang);
    }});
    </script>
</body>
</html>'''

# Write to faq.html (the main one)
with open(r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\faq.html", 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Written faq.html with {len(q)} questions embedded directly in HTML.")
print(f"File size: {len(html):,} bytes")
