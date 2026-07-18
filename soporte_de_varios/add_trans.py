import json

with open('app.js', 'r', encoding='utf-8') as f:
    appjs_content = f.read()

# Instead of parsing the whole JS file which can be messy, let's use string replacement to inject at the end of each language block
# The languages are en: { ..., es: { ..., zh: { ..., tl: { ..., vi: { ...

trans = {
    'en': {
        "diy_tankless_flush_title": "Tankless Heater Flush",
        "diy_tankless_flush_desc": "Descale your tankless heater to maintain thermal efficiency.",
        "diy_caulk_title": "Re-Caulk Bathtub",
        "diy_caulk_desc": "Seal your tub to prevent water damage and harmful mold.",
        "diy_aerator_title": "Clean Faucet Aerator",
        "diy_aerator_desc": "Restore water pressure by cleaning aerator sediment.",
        "diy_washer_hose_title": "Washer Hose Swap",
        "diy_washer_hose_desc": "Replace old rubber washing machine hoses to prevent catastrophic floods.",
        "diy_dishwasher_title": "Dishwasher Drain",
        "diy_dishwasher_desc": "Clear a clogged dishwasher air gap or drain hose.",
        "diy_showerhead_title": "Showerhead Upgrade",
        "diy_showerhead_desc": "Professionally install a new showerhead without leaks.",
        "btn_diy_guide": "Start AI Guide"
    },
    'es': {
        "diy_tankless_flush_title": "Purga de Calentador",
        "diy_tankless_flush_desc": "Descalcifica tu calentador sin tanque para mantener la eficiencia térmica.",
        "diy_caulk_title": "Sellar Tina",
        "diy_caulk_desc": "Sella tu tina para prevenir daños por agua y moho dañino.",
        "diy_aerator_title": "Limpiar Aereador",
        "diy_aerator_desc": "Restaura la presión del agua limpiando el sedimento del aereador.",
        "diy_washer_hose_title": "Mangueras de Lavadora",
        "diy_washer_hose_desc": "Reemplaza mangueras viejas para prevenir inundaciones catastróficas.",
        "diy_dishwasher_title": "Drenaje de Lavavajillas",
        "diy_dishwasher_desc": "Limpia la trampa de aire o manguera de la lavavajillas atascada.",
        "diy_showerhead_title": "Mejora de Regadera",
        "diy_showerhead_desc": "Instala una regadera nueva de forma profesional sin fugas.",
        "btn_diy_guide": "Ver Guía AI"
    },
    'zh': {
        "diy_tankless_flush_title": "无水箱热水器冲洗",
        "diy_tankless_flush_desc": "除垢以保持热效率。",
        "diy_caulk_title": "浴缸重新填缝",
        "diy_caulk_desc": "密封浴缸以防止水损坏和霉菌。",
        "diy_aerator_title": "清洁水龙头起泡器",
        "diy_aerator_desc": "通过清洁沉积物来恢复水压。",
        "diy_washer_hose_title": "更换洗衣机软管",
        "diy_washer_hose_desc": "更换旧软管以防止灾难性洪水。",
        "diy_dishwasher_title": "洗碗机排水",
        "diy_dishwasher_desc": "清理堵塞的洗碗机气隙或排水软管。",
        "diy_showerhead_title": "淋浴头升级",
        "diy_showerhead_desc": "专业安装新淋浴头，不漏水。",
        "btn_diy_guide": "启动 AI 指南"
    },
    'tl': {
        "diy_tankless_flush_title": "Tankless Heater Flush",
        "diy_tankless_flush_desc": "Alisin ang kaliskis sa iyong tankless heater para mapanatili ang init.",
        "diy_caulk_title": "Re-Caulk Bathtub",
        "diy_caulk_desc": "Takpan ang iyong tub para maiwasan ang pinsala sa tubig at amag.",
        "diy_aerator_title": "Clean Faucet Aerator",
        "diy_aerator_desc": "Ibalik ang pressure ng tubig sa pamamagitan ng paglinis ng aerator.",
        "diy_washer_hose_title": "Washer Hose Swap",
        "diy_washer_hose_desc": "Palitan ang lumang washing machine hoses para maiwasan ang baha.",
        "diy_dishwasher_title": "Dishwasher Drain",
        "diy_dishwasher_desc": "Linisin ang baradong dishwasher air gap o drain hose.",
        "diy_showerhead_title": "Showerhead Upgrade",
        "diy_showerhead_desc": "Propesyonal na mag-install ng bagong showerhead nang walang tulo.",
        "btn_diy_guide": "Simulan ang AI Guide"
    },
    'vi': {
        "diy_tankless_flush_title": "Xả máy nước nóng",
        "diy_tankless_flush_desc": "Tẩy cặn máy nước nóng không bình để duy trì hiệu suất.",
        "diy_caulk_title": "Trám lại bồn tắm",
        "diy_caulk_desc": "Bịt kín bồn tắm để tránh hư hỏng do nước và nấm mốc.",
        "diy_aerator_title": "Làm sạch sục khí vòi",
        "diy_aerator_desc": "Khôi phục áp lực nước bằng cách làm sạch cặn bẩn.",
        "diy_washer_hose_title": "Thay ống máy giặt",
        "diy_washer_hose_desc": "Thay ống cũ để ngăn chặn lũ lụt nghiêm trọng.",
        "diy_dishwasher_title": "Thoát nước máy rửa bát",
        "diy_dishwasher_desc": "Làm sạch khe hở không khí hoặc ống thoát nước bị tắc.",
        "diy_showerhead_title": "Nâng cấp vòi hoa sen",
        "diy_showerhead_desc": "Lắp vòi hoa sen mới một cách chuyên nghiệp không rò rỉ.",
        "btn_diy_guide": "Bắt đầu hướng dẫn AI"
    }
}

for lang, dictionary in trans.items():
    # Find the end of the language block in app.js
    # Usually it looks like `lang: {` and then lots of keys. Let's find `eng_comic_title` which we added recently.
    # Actually, we can just replace `"about_us": "About Us",` with `"about_us": "About Us",\n` + our new keys.
    # Let's see if we can find a reliable marker.
    
    # We will format the new keys
    injected_str = ""
    for k, v in dictionary.items():
        injected_str += f'    "{k}": "{v}",\n'
    
    # Let's search for "btn_contact":
    # Wait, the languages in app.js are defined as `en: {`, `es: {`, etc.
    # We can use regex to inject right after `hero_desc: "...",` or similar, but the values change per language.
    pass

import re

# We will inject at the very beginning of each language object
for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    lang_marker = f'{lang}: {{'
    if lang_marker in appjs_content:
        injected_str = "\n"
        for k, v in trans[lang].items():
            injected_str += f'            "{k}": "{v}",\n'
        appjs_content = appjs_content.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs_content)
    
print("Added 6 new DIY guides translations to app.js!")
