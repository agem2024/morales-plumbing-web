import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

replacements = {
    'img: "../assets/diy_ar_disposal.png"': 'img: "../assets/diy_dishwasher_filter.png"',
    'img: "../assets/service_water_reuse_1778369083950.webp"': 'img: "../assets/diy_caulk_tub.png"',
    'img: "../assets/service_expansion_hydraulic_1778369313970.webp"': 'img: "../assets/diy_frozen_pipes.png"',
    'img: "../assets/septico_comic.png"': 'img: "../assets/diy_tub_drain.png"'
}

for old, new in replacements.items():
    htm_content = htm_content.replace(old, new)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("HTML updated with 4 brand new custom drawn images.")
