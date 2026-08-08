import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update populateDynamicLists to use nice HTML instead of simple <li>
old_js = r"""                    matEl\.innerHTML = d\[t\.key\]\.m\.map\(x => `<li>\$\{x\}</li>`\)\.join\(''\);
                    toolEl\.innerHTML = d\[t\.key\]\.t\.map\(x => `<li>\$\{x\}</li>`\)\.join\(''\);
                    stepsEl\.innerHTML = d\[t\.key\]\.s\.map\(x => `<li>\$\{x\}</li>`\)\.join\(''\);"""

new_js = """                    matEl.innerHTML = d[t.key].m.map(x => `<li><i class="fas fa-check-circle" style="color:var(--cyan); margin-right: 10px;"></i>${x}</li>`).join('');
                    toolEl.innerHTML = d[t.key].t.map(x => `<li><i class="fas fa-wrench" style="color:var(--orange); margin-right: 10px;"></i>${x}</li>`).join('');
                    stepsEl.innerHTML = d[t.key].s.map((x, idx) => `
                        <div class="step-card">
                            <div class="step-number">${idx + 1}</div>
                            <div class="step-text">${x}</div>
                        </div>
                    `).join('');"""

content = re.sub(old_js, new_js, content)

# 2. Add a big "Volver al Inicio" button in the Hero
old_hero_btns = r'<a href="#search-section" class="lp-cta-btn" data-i18n="lp_cta1">¡Empezar a Construir y Reparar!</a>'
new_hero_btns = """<div style="margin-top: 20px;">
                <a href="../index.html" class="lp-cta-btn" style="background: transparent; border: 2px solid var(--orange); color: var(--orange); margin-right: 15px;"><i class="fas fa-home"></i> Inicio</a>
                <a href="#search-section" class="lp-cta-btn" data-i18n="lp_cta1">¡Empezar a Construir y Reparar!</a>
            </div>"""

content = content.replace(old_hero_btns, new_hero_btns)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched hazlo_tu_mismo.html UI")
