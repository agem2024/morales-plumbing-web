import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Replace tasks in tasks array
htm_content = htm_content.replace('key: "leaky_pipe", img: "../assets/cobre_comic.png"', 'key: "aerator", img: "../assets/diy_aerator.png"')
htm_content = htm_content.replace('key: "frozen_pipes", img: "../assets/diy_frozen_pipes.png"', 'key: "hvac_filter", img: "../assets/diy_hvac_filter.png"')
htm_content = htm_content.replace('key: "house_filter", img: "../assets/app_tratamiento.webp"', 'key: "house_filter", img: "../assets/diy_house_filter.png"')

# Replace JS logic for EN
htm_content = htm_content.replace(
    'leaky_pipe: { m: ["Plumber\'s Epoxy", "Rubber Tape"], t: ["Rag"], s: ["Turn off water.", "Dry the pipe completely.", "Wrap tightly with rubber tape.", "Apply epoxy if needed."] }',
    'aerator: { m: ["White Vinegar"], t: ["Pliers", "Rag"], s: ["Wrap rag around aerator.", "Unscrew with pliers.", "Soak in vinegar for 15 mins.", "Rinse and screw back on."] }'
)
htm_content = htm_content.replace(
    'frozen_pipes: { m: ["Heat Tape"], t: ["Hair Dryer"], s: ["Open faucets to relieve pressure.", "Apply heat dryer starting near faucet.", "Do NOT use open flame.", "Install heat tape to prevent freezing."] }',
    'hvac_filter: { m: ["New A/C Filter"], t: ["None"], s: ["Turn off AC unit.", "Open return grille on wall.", "Remove old dirty filter.", "Insert new filter (arrow towards unit)."] }'
)

# Replace JS logic for ES
htm_content = htm_content.replace(
    'leaky_pipe: { m: ["Cinta de Goma", "Epoxi"], t: ["Trapo"], s: ["Cierra el agua.", "Seca la tubería.", "Envuelve con cinta de goma.", "Aplica epoxi si es necesario."] }',
    'aerator: { m: ["Vinagre Blanco"], t: ["Pinzas", "Trapo"], s: ["Envuelve el trapo en aereador.", "Desenrosca con pinzas.", "Remoja en vinagre 15 min.", "Enjuaga y vuelve a enroscar."] }'
)
htm_content = htm_content.replace(
    'frozen_pipes: { m: ["Cinta Térmica"], t: ["Secadora de pelo"], s: ["Abre llaves para liberar presión.", "Aplica aire caliente desde la llave.", "NUNCA uses fuego.", "Pon cinta térmica."] }',
    'hvac_filter: { m: ["Filtro Nuevo"], t: ["Ninguna"], s: ["Apaga el aire acondicionado.", "Abre la rejilla de la pared.", "Saca el filtro sucio.", "Mete el nuevo (flecha hacia adentro)."] }'
)

# Add cache buster ?v=4 to all .png files
htm_content = re.sub(r'\?v=3"', r'?v=4"', htm_content)
htm_content = re.sub(r'(\.png|\.webp)"', r'\1?v=4"', htm_content)
htm_content = re.sub(r'\?v=4\?v=4', r'?v=4', htm_content)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

# Update app.js for hvac_filter
with open('app.js', 'r', encoding='utf-8') as f:
    appjs = f.read()

trans = {
    'en': { "htm_hvac_filter_title": "Change A/C Filter", "htm_hvac_filter_desc": "Improve air quality and AC efficiency." },
    'es': { "htm_hvac_filter_title": "Cambiar Filtro A/C", "htm_hvac_filter_desc": "Mejora el aire y eficiencia del aire acondicionado." },
    'zh': { "htm_hvac_filter_title": "更换空调滤网", "htm_hvac_filter_desc": "改善空气质量和空调效率。" },
    'tl': { "htm_hvac_filter_title": "Palitan ang A/C Filter", "htm_hvac_filter_desc": "Pagandahin ang hangin at efficiency ng AC." },
    'vi': { "htm_hvac_filter_title": "Thay bộ lọc máy lạnh", "htm_hvac_filter_desc": "Cải thiện chất lượng không khí và hiệu suất máy lạnh." }
}

for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs:
        injected_str = f'\n        "htm_hvac_filter_title": "{trans[lang]["htm_hvac_filter_title"]}",\n        "htm_hvac_filter_desc": "{trans[lang]["htm_hvac_filter_desc"]}",'
        appjs = appjs.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs)

print("Tasks and HTML/JS updated")
