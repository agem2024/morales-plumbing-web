import os
import re

# Add Backgrounds to faq_100.html
faq_path = os.path.join('docs', 'faq_100.html')
with open(faq_path, 'r', encoding='utf-8') as f:
    faq_content = f.read()

faq_content = faq_content.replace('Hazlo Tú Mismo (DIY)', 'Hazlo Tú Mismo')
if 'background-image:' not in faq_content:
    faq_content = faq_content.replace('body { background-color: var(--dark);', 
        "body { background-color: var(--dark); background-image: url('../assets/service_faq_hub_1778369361208.webp'); background-size: cover; background-position: center; background-attachment: fixed; background-blend-mode: overlay;")

with open(faq_path, 'w', encoding='utf-8') as f:
    f.write(faq_content)

# Modify hazlo_tu_mismo.html
htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

if 'background-image:' not in htm_content:
    htm_content = htm_content.replace('body { background-color: var(--dark);', 
        "body { background-color: var(--dark); background-image: url('../assets/service_smart_repair_1778369346415.webp'); background-size: cover; background-position: center; background-attachment: fixed; background-blend-mode: overlay;")

# We need to add 5 more tasks to the JSON array in the script tag
more_tasks_js = """
            {
                id: "t11",
                key: "anode",
                img: "../assets/pb_svc_2.webp",
                yt: "https://www.youtube.com/results?search_query=how+to+check+water+heater+anode+rod"
            },
            {
                id: "t12",
                key: "drain_heater",
                img: "../assets/pb_svc_3.webp",
                yt: "https://www.youtube.com/results?search_query=how+to+drain+water+heater"
            },
            {
                id: "t13",
                key: "plunge_toilet",
                img: "../assets/pb_svc_4.webp",
                yt: "https://www.youtube.com/results?search_query=how+to+plunge+a+toilet"
            },
            {
                id: "t14",
                key: "main_filter",
                img: "../assets/pb_svc_5.webp",
                yt: "https://www.youtube.com/results?search_query=how+to+change+whole+house+water+filter"
            },
            {
                id: "t15",
                key: "dishwasher_filter",
                img: "../assets/pb_svc_6.webp",
                yt: "https://www.youtube.com/results?search_query=how+to+clean+dishwasher+filter"
            }
"""

if 'id: "t11"' not in htm_content:
    htm_content = htm_content.replace('id: "t10",\n                key: "washer_hose",\n                img: "../assets/pb_svc_12.png",\n                yt: "https://www.youtube.com/results?search_query=how+to+replace+washing+machine+hoses"\n            }',
    'id: "t10",\n                key: "washer_hose",\n                img: "../assets/pb_svc_12.png",\n                yt: "https://www.youtube.com/results?search_query=how+to+replace+washing+machine+hoses"\n            },' + more_tasks_js)
    
    # Also inject the new task details in JS
    new_en_details = """
                    anode: { m: ["Teflon Tape"], t: ["Socket Wrench 1-1/16\\""], s: ["Turn off water and heater.", "Drain a few gallons.", "Unscrew anode rod with socket.", "Inspect: if wire is showing, replace.", "Tape threads and reinstall."] },
                    drain_heater: { m: ["Garden Hose"], t: ["Screwdriver"], s: ["Turn off heater and cold water.", "Attach hose to drain valve.", "Open hot water tap in house.", "Open drain valve and let flush.", "Close valve and refill."] },
                    plunge_toilet: { m: ["Rubber Gloves"], t: ["Flange Plunger"], s: ["Ensure water covers plunger cup.", "Form tight seal over drain.", "Push down gently, pull up sharply.", "Repeat 5-10 times.", "Flush to test."] },
                    main_filter: { m: ["New Filter Cartridge", "O-ring lube"], t: ["Filter Wrench"], s: ["Turn off main water valve.", "Press pressure relief button.", "Unscrew housing with wrench.", "Replace filter and lube O-ring.", "Tighten and turn on water."] },
                    dishwasher_filter: { m: ["Dish Soap", "Old Toothbrush"], t: ["None"], s: ["Remove bottom rack.", "Twist and pull out cylinder filter.", "Wash under warm water with soap.", "Scrub mesh with toothbrush.", "Lock back into place."] },
    """
    
    new_es_details = """
                    anode: { m: ["Cinta Teflón"], t: ["Dado 1-1/16\\""], s: ["Apaga agua y calentador.", "Drena un poco de agua.", "Desenrosca el ánodo con dado.", "Inspecciona: si se ve alambre, cambia.", "Pon teflón y reinstala."] },
                    drain_heater: { m: ["Manguera de jardín"], t: ["Destornillador"], s: ["Apaga calentador y agua fría.", "Conecta manguera a válvula.", "Abre una llave de agua caliente.", "Abre válvula y drena.", "Cierra válvula y llena."] },
                    plunge_toilet: { m: ["Guantes"], t: ["Destapacaños (Plunger)"], s: ["Asegura que agua cubra el chupón.", "Sella bien el desagüe.", "Empuja suave, jala fuerte.", "Repite 5-10 veces.", "Descarga para probar."] },
                    main_filter: { m: ["Filtro Nuevo", "Lubricante O-ring"], t: ["Llave de Filtro"], s: ["Cierra válvula principal.", "Presiona botón de alivio.", "Desenrosca vaso con la llave.", "Cambia filtro y lubrica O-ring.", "Aprieta y abre el agua."] },
                    dishwasher_filter: { m: ["Jabón", "Cepillo viejo"], t: ["Ninguna"], s: ["Saca la canasta inferior.", "Gira y saca el filtro cilíndrico.", "Lava con agua tibia y jabón.", "Talla con cepillo de dientes.", "Vuelve a colocar y asegurar."] },
    """
    
    htm_content = htm_content.replace('washer_hose: { m: ["Stainless Steel Hoses"]', new_en_details.strip() + '\n                    washer_hose: { m: ["Stainless Steel Hoses"]')
    htm_content = htm_content.replace('washer_hose: { m: ["Mangueras Acero Inox"]', new_es_details.strip() + '\n                    washer_hose: { m: ["Mangueras Acero Inox"]')
    
    with open(htm_path, 'w', encoding='utf-8') as f:
        f.write(htm_content)

# Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    appjs_content = f.read()

trans_more = {
    'en': {
        "htm_anode_title": "11. Check Anode Rod",
        "htm_anode_desc": "Extend the life of your water heater.",
        "htm_drain_heater_title": "12. Drain Water Heater",
        "htm_drain_heater_desc": "Flush sediment from your tank.",
        "htm_plunge_toilet_title": "13. Unclog Toilet",
        "htm_plunge_toilet_desc": "Clear a blocked toilet with a plunger.",
        "htm_main_filter_title": "14. Replace House Filter",
        "htm_main_filter_desc": "Keep your whole-home water clean.",
        "htm_dishwasher_filter_title": "15. Clean Dishwasher Filter",
        "htm_dishwasher_filter_desc": "Stop smelly dishes and poor cleaning."
    },
    'es': {
        "htm_anode_title": "11. Revisar Varilla de Ánodo",
        "htm_anode_desc": "Extiende la vida de tu calentador.",
        "htm_drain_heater_title": "12. Drenar Calentador",
        "htm_drain_heater_desc": "Purga el sedimento del tanque.",
        "htm_plunge_toilet_title": "13. Destapar Inodoro",
        "htm_plunge_toilet_desc": "Desbloquea el inodoro con chupón.",
        "htm_main_filter_title": "14. Cambiar Filtro Principal",
        "htm_main_filter_desc": "Mantén el agua de toda tu casa limpia.",
        "htm_dishwasher_filter_title": "15. Limpiar Filtro Lavavajillas",
        "htm_dishwasher_filter_desc": "Evita malos olores y mala limpieza."
    },
    'zh': {
        "htm_anode_title": "11. 检查阳极棒",
        "htm_anode_desc": "延长热水器的使用寿命。",
        "htm_drain_heater_title": "12. 排空热水器",
        "htm_drain_heater_desc": "冲洗水箱中的沉淀物。",
        "htm_plunge_toilet_title": "13. 疏通马桶",
        "htm_plunge_toilet_desc": "用柱塞清理堵塞的马桶。",
        "htm_main_filter_title": "14. 更换全屋净水滤芯",
        "htm_main_filter_desc": "保持全屋水质清洁。",
        "htm_dishwasher_filter_title": "15. 清洁洗碗机过滤器",
        "htm_dishwasher_filter_desc": "解决洗碗机异味和洗不干净的问题。"
    },
    'tl': {
        "htm_anode_title": "11. Suriin ang Anode Rod",
        "htm_anode_desc": "Pahabain ang buhay ng iyong water heater.",
        "htm_drain_heater_title": "12. I-drain ang Water Heater",
        "htm_drain_heater_desc": "Alisin ang kaliskis sa iyong tangke.",
        "htm_plunge_toilet_title": "13. Alisin ang Bara ng Toilet",
        "htm_plunge_toilet_desc": "Linisin ang baradong inidoro gamit ang plunger.",
        "htm_main_filter_title": "14. Palitan ang Main Filter",
        "htm_main_filter_desc": "Panatilihing malinis ang tubig sa buong bahay.",
        "htm_dishwasher_filter_title": "15. Linisin ang Dishwasher Filter",
        "htm_dishwasher_filter_desc": "Pigilan ang mabahong amoy at hindi malinis na pinggan."
    },
    'vi': {
        "htm_anode_title": "11. Kiểm tra thanh Anode",
        "htm_anode_desc": "Kéo dài tuổi thọ của máy nước nóng.",
        "htm_drain_heater_title": "12. Xả máy nước nóng",
        "htm_drain_heater_desc": "Xả cặn từ bình chứa của bạn.",
        "htm_plunge_toilet_title": "13. Thông tắc bồn cầu",
        "htm_plunge_toilet_desc": "Thông bồn cầu bị tắc bằng ống thụt.",
        "htm_main_filter_title": "14. Thay thế bộ lọc chính",
        "htm_main_filter_desc": "Giữ cho nguồn nước toàn bộ ngôi nhà của bạn sạch sẽ.",
        "htm_dishwasher_filter_title": "15. Làm sạch bộ lọc máy rửa bát",
        "htm_dishwasher_filter_desc": "Ngăn ngừa mùi hôi và làm sạch kém."
    }
}

for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs_content:
        injected_str = "\n"
        for k, v in trans_more[lang].items():
            injected_str += f'        "{k}": "{v}",\n'
        appjs_content = appjs_content.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs_content)

print("Updated everything successfully!")
