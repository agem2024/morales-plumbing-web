import os
import re

index_path = 'index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

# Let's insert a DIY Hub card into the ORION Ecosystem grid
diy_card_html = """
                <!-- Fix-It Hub Card (DIY) -->
                <div class="eco-card glass highlight-card" data-app="diy" style="border: 2px solid var(--neon-lime);">
                    <div class="eco-card-img">
                        <img src="assets/diy_hero_1778369346415.png" alt="Hazlo Tu Mismo Hub" onerror="this.src='assets/comic_ai.png'">
                    </div>
                    <div class="eco-card-content">
                        <h3 data-i18n="eco_diy_title" style="color: var(--neon-lime);">Hazlo Tú Mismo (DIY)</h3>
                        <p data-i18n="eco_diy_desc">Guías visuales paso a paso y calculadora de materiales. Aprende a reparar tu hogar con IA.</p>
                        <div class="eco-actions">
                            <a href="docs/hazlo_tu_mismo.html" class="btn-eco-link" data-i18n="btn_open_diy" style="background: rgba(57, 255, 20, 0.1); border-color: var(--neon-lime); color: var(--neon-lime);">Ir al Fix-It Hub</a>
                        </div>
                    </div>
                </div>
"""

# Find the end of the eco-grid to insert the card
# The FAQ Hub is the last card in the eco-grid right now.
faq_card = r'<!-- FAQ / Technical Hub Card -->.*?</div>\s*</div>\s*</div>'
faq_match = re.search(faq_card, index_content, re.DOTALL)
if faq_match:
    index_content = index_content.replace(faq_match.group(0), faq_match.group(0) + '\n' + diy_card_html)
else:
    print("Could not find FAQ card to insert after")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Injected DIY card into index.html")
