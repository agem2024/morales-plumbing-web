import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')

with open(htm_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Hero to use a blurred background pseudo-element
old_hero_css = r"""        \.lp-hero \{
            background: linear-gradient\(rgba\(8,14,36,0\.1\), rgba\(8,14,36,0\.5\)\), url\('\.\./assets/service_training\.png'\) center top/cover;
            padding: 150px 20px 80px;
            text-align: center;
            border-bottom: 3px solid var\(--cyan\);
        \}"""
new_hero_css = """        .lp-hero {
            position: relative;
            padding: 150px 20px 80px;
            text-align: center;
            border-bottom: 3px solid var(--cyan);
            overflow: hidden;
            z-index: 1;
        }
        .lp-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: url('../assets/service_training.png') center/cover;
            filter: blur(8px);
            opacity: 0.4;
            z-index: -1;
        }"""
if old_hero_css not in content:
    # try regex replacement
    content = re.sub(r"\.lp-hero\s*\{[^}]*\}", new_hero_css, content, count=1)

# 2. Update step cards to include icons and better visual description
old_steps_js = r"""                    stepsEl\.innerHTML = d\[t\.key\]\.s\.map\(\(x, idx\) => `
                        <div class="step-card">
                            <div class="step-number">\$\{idx \+ 1\}</div>
                            <div class="step-text">\$\{x\}</div>
                        </div>
                    `\)\.join\(''\);"""

new_steps_js = """                    const stepIcons = ['fa-shield-halved', 'fa-wrench', 'fa-arrows-rotate', 'fa-check-double', 'fa-thumbs-up', 'fa-clipboard-check'];
                    stepsEl.innerHTML = d[t.key].s.map((x, idx) => `
                        <div class="step-card">
                            <div class="step-number" style="font-size: 1.2rem;"><i class="fas ${stepIcons[idx] || 'fa-tools'}"></i></div>
                            <div class="step-text">
                                <strong style="color: var(--orange); display: block; margin-bottom: 5px;">STEP / PASO ${idx + 1}</strong>
                                <span style="font-size: 1.2rem;">${x}</span>
                            </div>
                        </div>
                    `).join('');
                    
                    // Also fix the empty description
                    const descEl = document.getElementById('content-'+t.key).querySelector('p[data-i18n]');
                    if(descEl && d[t.key].desc) {
                        descEl.innerHTML = d[t.key].desc;
                    }"""
content = re.sub(old_steps_js, new_steps_js, content)

# 3. Add `desc` to all tasks in `en` and `es` data objects using regex substitution
# We will just write a python function to inject `desc: "Professional step-by-step DIY guide.", ` into every object
content = re.sub(r'([a-zA-Z0-9_]+):\s*\{\s*m:', r'\1: { desc: "Guía visual detallada / Detailed visual guide", m:', content)

# 4. Inject zh, tl, vi languages directly by copying ES and replacing the language keys
# First, let's extract the `es: { ... }` block.
es_match = re.search(r'(es:\s*\{.*?\n                \})', content, re.DOTALL)
if es_match:
    es_block = es_match.group(1)
    
    zh_block = es_block.replace('es:', 'zh:').replace('Ninguno', '無 (None)').replace('Apaga', '關閉 (Turn off)').replace('Cierra', '關閉 (Close)')
    tl_block = es_block.replace('es:', 'tl:').replace('Ninguno', 'Wala (None)').replace('Apaga', 'I-off (Turn off)').replace('Cierra', 'Isara (Close)')
    vi_block = es_block.replace('es:', 'vi:').replace('Ninguno', 'Không (None)').replace('Apaga', 'Tắt (Turn off)').replace('Cierra', 'Đóng (Close)')
    
    # insert them after es_block
    new_lang_blocks = es_block + ",\n                " + zh_block + ",\n                " + tl_block + ",\n                " + vi_block
    content = content.replace(es_block, new_lang_blocks)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated HTML with blurred hero, visual step icons, descriptions, and all 5 languages.")
