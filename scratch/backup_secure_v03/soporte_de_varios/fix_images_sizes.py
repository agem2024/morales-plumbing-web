import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Fix CSS sizes (object-fit: contain instead of cover, height: auto)
css_old = r'\.task-illustration \{ width: 100%; height: 250px; object-fit: cover; border-radius: 8px; border: 1px solid #333; margin-top: 15px; box-shadow: 0 4px 10px rgba\(0,0,0,0\.5\); \}'
css_new = '.task-illustration { width: 100%; max-height: 280px; object-fit: contain; margin-top: 15px; }'
htm_content = re.sub(css_old, css_new, htm_content)

css_mobile_old = r'\.task-illustration \{ height: 200px; \}'
css_mobile_new = '.task-illustration { max-height: 220px; }'
htm_content = re.sub(css_mobile_old, css_mobile_new, htm_content)

# Fix mismatched images (t14, t17, t18, t20)
replacements = {
    'id: "t14", key: "dishwasher_filter", img: "../assets/comic_treatment.webp"': 'id: "t14", key: "dishwasher_filter", img: "../assets/diy_ar_disposal.png"',
    'id: "t17", key: "caulk_tub", img: "../assets/comic_construction.webp"': 'id: "t17", key: "caulk_tub", img: "../assets/service_water_reuse_1778369083950.webp"',
    'id: "t18", key: "frozen_pipes", img: "../assets/comic_shield.webp"': 'id: "t18", key: "frozen_pipes", img: "../assets/service_expansion_hydraulic_1778369313970.webp"',
    'id: "t20", key: "tub_drain", img: "../assets/comic_eco.webp"': 'id: "t20", key: "tub_drain", img: "../assets/septico_comic.png"'
}

for old_str, new_str in replacements.items():
    htm_content = htm_content.replace(old_str, new_str)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Fixed images and sizes")
