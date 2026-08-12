import os
import re

# 1. Update index.html
index_path = 'index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

new_cards = """
                <!-- Card 10 -->
                <div class="diy-card glass">
                    <div class="diy-icon-wrapper">
                        <img src="assets/service_tankless.png" alt="Tankless Flush" loading="lazy">
                    </div>
                    <div class="diy-content">
                        <h3 data-i18n="diy_tankless_flush_title">Tankless Heater Flush</h3>
                        <p data-i18n="diy_tankless_flush_desc">Descalcifica tu calentador sin tanque para mantener la eficiencia térmica.</p>
                        <button class="btn-primary-glow" onclick="window.location.href='docs/diy_hub.html?issue=tankless_flush'" data-i18n="btn_diy_guide">Start AI Guide</button>
                    </div>
                </div>

                <!-- Card 11 -->
                <div class="diy-card glass">
                    <div class="diy-icon-wrapper">
                        <img src="assets/pb_svc_10.png" alt="Caulk Tub" loading="lazy">
                    </div>
                    <div class="diy-content">
                        <h3 data-i18n="diy_caulk_title">Re-Caulk Bathtub</h3>
                        <p data-i18n="diy_caulk_desc">Sella tu tina para prevenir daños por agua y moho dañino.</p>
                        <button class="btn-primary-glow" onclick="window.location.href='docs/diy_hub.html?issue=caulk'" data-i18n="btn_diy_guide">Start AI Guide</button>
                    </div>
                </div>

                <!-- Card 12 -->
                <div class="diy-card glass">
                    <div class="diy-icon-wrapper">
                        <img src="assets/pb_svc_11.png" alt="Clean Aerator" loading="lazy">
                    </div>
                    <div class="diy-content">
                        <h3 data-i18n="diy_aerator_title">Clean Faucet Aerator</h3>
                        <p data-i18n="diy_aerator_desc">Restaura la presión del agua limpiando el sedimento del aereador.</p>
                        <button class="btn-primary-glow" onclick="window.location.href='docs/diy_hub.html?issue=aerator'" data-i18n="btn_diy_guide">Start AI Guide</button>
                    </div>
                </div>

                <!-- Card 13 -->
                <div class="diy-card glass">
                    <div class="diy-icon-wrapper">
                        <img src="assets/pb_svc_12.png" alt="Washer Hoses" loading="lazy">
                    </div>
                    <div class="diy-content">
                        <h3 data-i18n="diy_washer_hose_title">Washer Hose Swap</h3>
                        <p data-i18n="diy_washer_hose_desc">Reemplaza mangueras viejas de lavadora para prevenir inundaciones catastróficas.</p>
                        <button class="btn-primary-glow" onclick="window.location.href='docs/diy_hub.html?issue=washer_hose'" data-i18n="btn_diy_guide">Start AI Guide</button>
                    </div>
                </div>

                <!-- Card 14 -->
                <div class="diy-card glass">
                    <div class="diy-icon-wrapper">
                        <img src="assets/pb_svc_13.png" alt="Dishwasher Clog" loading="lazy">
                    </div>
                    <div class="diy-content">
                        <h3 data-i18n="diy_dishwasher_title">Dishwasher Drain</h3>
                        <p data-i18n="diy_dishwasher_desc">Limpia la trampa de aire o manguera de la lavavajillas atascada.</p>
                        <button class="btn-primary-glow" onclick="window.location.href='docs/diy_hub.html?issue=dishwasher'" data-i18n="btn_diy_guide">Start AI Guide</button>
                    </div>
                </div>

                <!-- Card 15 -->
                <div class="diy-card glass">
                    <div class="diy-icon-wrapper">
                        <img src="assets/pb_svc_14.png" alt="Showerhead" loading="lazy">
                    </div>
                    <div class="diy-content">
                        <h3 data-i18n="diy_showerhead_title">Showerhead Upgrade</h3>
                        <p data-i18n="diy_showerhead_desc">Instala una cabeza de ducha de lluvia de forma profesional sin fugas.</p>
                        <button class="btn-primary-glow" onclick="window.location.href='docs/diy_hub.html?issue=showerhead'" data-i18n="btn_diy_guide">Start AI Guide</button>
                    </div>
                </div>
"""

# Insert before </div> <!-- End of diy-grid -->
# Find <div class="diy-grid"> and the matching closing div is where we inject, but it's simpler to just replace the last card.
# The last card is Card 9 (smell)
match_smell_card = re.search(r'<!-- Card 9 -->.*?</div>\s*</div>\s*</div>', index_content, re.DOTALL)
if match_smell_card:
    index_content = index_content[:match_smell_card.end()] + "\n" + new_cards + index_content[match_smell_card.end():]
else:
    print("Could not find Card 9 to append new cards.")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_content)
print("index.html updated")

# 2. Update app.js (translations for the index cards)
appjs_path = 'app.js'
with open(appjs_path, 'r', encoding='utf-8') as f:
    appjs_content = f.read()

new_trans_en = """
        "diy_tankless_flush_title": "Tankless Flush",
        "diy_tankless_flush_desc": "Descale your tankless heater to maintain thermal efficiency.",
        "diy_caulk_title": "Re-Caulk Bathtub",
        "diy_caulk_desc": "Seal your tub to prevent water damage and mold.",
        "diy_aerator_title": "Clean Faucet Aerator",
        "diy_aerator_desc": "Restore water pressure by cleaning aerator sediment.",
        "diy_washer_hose_title": "Washer Hose Swap",
        "diy_washer_hose_desc": "Replace old washing machine hoses to prevent floods.",
        "diy_dishwasher_title": "Dishwasher Drain",
        "diy_dishwasher_desc": "Clear a clogged dishwasher air gap or drain hose.",
        "diy_showerhead_title": "Showerhead Upgrade",
        "diy_showerhead_desc": "Professionally install a new showerhead without leaks.",
"""

new_trans_es = """
        "diy_tankless_flush_title": "Flush de Tankless",
        "diy_tankless_flush_desc": "Descalcifica tu calentador sin tanque para mantener la eficiencia térmica.",
        "diy_caulk_title": "Resellar Tina",
        "diy_caulk_desc": "Sella tu tina para prevenir daños por agua y moho dañino.",
        "diy_aerator_title": "Limpiar Aereador",
        "diy_aerator_desc": "Restaura la presión del agua limpiando el sedimento del aereador.",
        "diy_washer_hose_title": "Mangueras Lavadora",
        "diy_washer_hose_desc": "Reemplaza mangueras viejas de lavadora para prevenir inundaciones catastróficas.",
        "diy_dishwasher_title": "Drenaje Lavavajillas",
        "diy_dishwasher_desc": "Limpia la trampa de aire o manguera de la lavavajillas atascada.",
        "diy_showerhead_title": "Cambiar Regadera",
        "diy_showerhead_desc": "Instala una cabeza de ducha de forma profesional sin fugas.",
"""

# Just doing EN and ES for app.js for now or replicating
new_trans_zh = new_trans_en
new_trans_tl = new_trans_en
new_trans_vi = new_trans_en

if '"diy_tankless_flush_title"' not in appjs_content:
    appjs_content = appjs_content.replace(r'"diy_smell_desc": "Identify and block sewer gas odors returning from dry floor drains.",', r'"diy_smell_desc": "Identify and block sewer gas odors returning from dry floor drains.",' + new_trans_en)
    appjs_content = appjs_content.replace(r'"diy_smell_desc": "Identifica y bloquea olores a gas de alcantarilla de drenajes secos.",', r'"diy_smell_desc": "Identifica y bloquea olores a gas de alcantarilla de drenajes secos.",' + new_trans_es)
    # the rest are same as EN for brevity since it's just index
    with open(appjs_path, 'w', encoding='utf-8') as f:
        f.write(appjs_content)
    print("app.js updated")

