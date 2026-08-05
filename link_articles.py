import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

target = '<!-- NEW ECOSYSTEM MODULES (High-Fidelity) -->'
links_html = """
                <!-- ORION ARTICLES -->
                <div style="text-align: center; margin-bottom: 50px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <a href="docs/inteligencia_artificial.html" class="btn-primary-glow" style="background: rgba(0, 245, 255, 0.1); color: #00f5ff; border: 1px solid #00f5ff; border-radius: 8px; padding: 12px 24px; text-decoration: none; font-weight: bold;"><span style="margin-right:8px;">🤖</span> IA & Joe AI</a>
                    <a href="docs/deteccion_termica.html" class="btn-primary-glow" style="background: rgba(212, 175, 55, 0.1); color: #D4AF37; border: 1px solid #D4AF37; border-radius: 8px; padding: 12px 24px; text-decoration: none; font-weight: bold;"><span style="margin-right:8px;">🔥</span> Detección Térmica MSX</a>
                </div>
"""

# Insert right before the new ecosystem modules
content = content.replace(target, links_html + "\n" + target)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Injected article links into index.html")
