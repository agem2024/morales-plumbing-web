import os
import re

# 1. Update hazlo_tu_mismo.html with 9 new tasks and better CSS
htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Improve CSS responsiveness
css_fixes = """
        .task-illustration { width: 100%; height: 250px; object-fit: cover; border-radius: 8px; border: 1px solid #333; margin-top: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
        .diy-task-content { padding: 20px; display: none; background: rgba(0,0,0,0.5); }
        @media(max-width: 768px) {
            .diy-container { flex-direction: column; }
            .joe-ai-panel { position: static; width: 100%; margin-bottom: 20px; }
            .task-grid { grid-template-columns: 1fr; }
            .task-illustration { height: 200px; }
            .graffiti-title { font-size: 2.5rem; }
        }
"""
htm_content = re.sub(r'\.task-illustration\s*\{[^\}]+\}', '', htm_content) # remove old
htm_content = htm_content.replace('</style>', css_fixes + '\n    </style>')

# Add 9 new tasks to the array
new_tasks = """
            ,{
                id: "t12", key: "drain_heater", img: "../assets/wh_comic.png", yt: "https://www.youtube.com/results?search_query=how+to+drain+water+heater"
            },{
                id: "t13", key: "heater_temp", img: "../assets/comic_heaters.webp", yt: "https://www.youtube.com/results?search_query=how+to+adjust+water+heater+temperature"
            },{
                id: "t14", key: "dishwasher_filter", img: "../assets/comic_treatment.webp", yt: "https://www.youtube.com/results?search_query=how+to+clean+dishwasher+filter"
            },{
                id: "t15", key: "leaky_pipe", img: "../assets/cobre_comic.png", yt: "https://www.youtube.com/results?search_query=how+to+temporarily+fix+leaky+pipe"
            },{
                id: "t16", key: "fill_valve", img: "../assets/valves_comic.png", yt: "https://www.youtube.com/results?search_query=how+to+replace+toilet+fill+valve"
            },{
                id: "t17", key: "caulk_tub", img: "../assets/comic_construction.webp", yt: "https://www.youtube.com/results?search_query=how+to+recaulk+bathtub"
            },{
                id: "t18", key: "frozen_pipes", img: "../assets/comic_shield.webp", yt: "https://www.youtube.com/results?search_query=how+to+thaw+frozen+pipes"
            },{
                id: "t19", key: "house_filter", img: "../assets/app_tratamiento.webp", yt: "https://www.youtube.com/results?search_query=how+to+replace+whole+house+water+filter"
            },{
                id: "t20", key: "tub_drain", img: "../assets/comic_eco.webp", yt: "https://www.youtube.com/results?search_query=how+to+unclog+bathtub+drain+with+snake"
            }
"""
# insert before the closing bracket of the tasks array
htm_content = re.sub(r'(\}\s*)(\];\s*function renderTasks)', r'\1' + new_tasks + r'\2', htm_content)

# Add logic for EN
en_logic = """
                    drain_heater: { m: ["Garden Hose"], t: ["Screwdriver"], s: ["Turn off heater.", "Attach hose to drain valve.", "Open valve and hot water tap.", "Flush until clear."] },
                    heater_temp: { m: ["None"], t: ["Screwdriver"], s: ["Turn off power.", "Remove access panels.", "Turn dial to 120F (49C).", "Replace panels and turn on."] },
                    dishwasher_filter: { m: ["Dish Soap"], t: ["Old Toothbrush"], s: ["Remove bottom rack.", "Twist and pull filter out.", "Scrub with soap and warm water.", "Reinstall securely."] },
                    leaky_pipe: { m: ["Plumber's Epoxy", "Rubber Tape"], t: ["Rag"], s: ["Turn off water.", "Dry the pipe completely.", "Wrap tightly with rubber tape.", "Apply epoxy if needed."] },
                    fill_valve: { m: ["Universal Fill Valve"], t: ["Pliers", "Bucket"], s: ["Turn off water and flush.", "Place bucket under tank.", "Unscrew old valve nut.", "Install new valve and adjust height."] },
                    caulk_tub: { m: ["100% Silicone Caulk", "Alcohol"], t: ["Caulk Gun", "Scraper"], s: ["Scrape all old caulk.", "Wipe surface with alcohol.", "Apply steady bead.", "Smooth with wet finger."] },
                    frozen_pipes: { m: ["Heat Tape"], t: ["Hair Dryer"], s: ["Open faucets to relieve pressure.", "Apply heat dryer starting near faucet.", "Do NOT use open flame.", "Install heat tape to prevent freezing."] },
                    house_filter: { m: ["Filter Cartridge", "O-ring lube"], t: ["Filter Wrench"], s: ["Turn off main water.", "Press pressure relief.", "Unscrew housing.", "Replace filter and turn on water."] },
                    tub_drain: { m: ["Paper Towels"], t: ["Plastic Hair Snake"], s: ["Remove drain stopper.", "Insert hair snake deeply.", "Pull up slowly to remove hair.", "Flush with hot water."] },
"""
htm_content = htm_content.replace('washer_hose: { m: ["Stainless Steel Hoses"], t: ["Channel Locks"], s: ["Turn off water valves.", "Unscrew old rubber hoses.", "Connect new hoses.", "Hand tighten, then 1/4 turn with pliers."] }', 'washer_hose: { m: ["Stainless Steel Hoses"], t: ["Channel Locks"], s: ["Turn off water valves.", "Unscrew old rubber hoses.", "Connect new hoses.", "Hand tighten, then 1/4 turn with pliers."] },' + en_logic)

# Add logic for ES
es_logic = """
                    drain_heater: { m: ["Manguera"], t: ["Destornillador"], s: ["Apaga el calentador.", "Conecta manguera a válvula.", "Abre llave de agua caliente.", "Drena hasta que salga limpia."] },
                    heater_temp: { m: ["Ninguno"], t: ["Destornillador"], s: ["Apaga corriente.", "Quita tapas frontales.", "Gira dial a 120F.", "Cierra y enciende."] },
                    dishwasher_filter: { m: ["Jabón"], t: ["Cepillo de dientes"], s: ["Saca canasta inferior.", "Gira y saca el filtro.", "Talla con jabón y agua tibia.", "Reinstala firmemente."] },
                    leaky_pipe: { m: ["Cinta de Goma", "Epoxi"], t: ["Trapo"], s: ["Cierra el agua.", "Seca la tubería.", "Envuelve con cinta de goma.", "Aplica epoxi si es necesario."] },
                    fill_valve: { m: ["Válvula Universal"], t: ["Pinzas", "Cubeta"], s: ["Cierra agua y descarga.", "Pon cubeta bajo el tanque.", "Desenrosca tuerca vieja.", "Instala válvula nueva y ajusta altura."] },
                    caulk_tub: { m: ["Silicón 100%"], t: ["Pistola", "Espátula"], s: ["Raspa silicón viejo.", "Limpia con alcohol.", "Aplica línea uniforme.", "Alisa con dedo húmedo."] },
                    frozen_pipes: { m: ["Cinta Térmica"], t: ["Secadora de pelo"], s: ["Abre llaves para liberar presión.", "Aplica aire caliente desde la llave.", "NUNCA uses fuego.", "Pon cinta térmica."] },
                    house_filter: { m: ["Filtro Nuevo"], t: ["Llave de Filtro"], s: ["Cierra agua principal.", "Presiona botón de alivio.", "Saca el vaso.", "Cambia filtro y abre agua."] },
                    tub_drain: { m: ["Papel toalla"], t: ["Gancho de plástico (Snake)"], s: ["Quita el tapón.", "Mete el gancho plástico.", "Jala despacio para sacar cabello.", "Enjuaga con agua caliente."] },
"""
htm_content = htm_content.replace('washer_hose: { m: ["Mangueras Acero Inox"], t: ["Pinzas"], s: ["Cierra válvulas de agua.", "Quita mangueras viejas.", "Conecta mangueras nuevas.", "Aprieta a mano y luego 1/4 con pinza."] }', 'washer_hose: { m: ["Mangueras Acero Inox"], t: ["Pinzas"], s: ["Cierra válvulas de agua.", "Quita mangueras viejas.", "Conecta mangueras nuevas.", "Aprieta a mano y luego 1/4 con pinza."] },' + es_logic)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

# 2. Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    appjs = f.read()

trans = {
    'en': {
        "htm_drain_heater_title": "Drain Water Heater", "htm_drain_heater_desc": "Flush sediment to extend heater life.",
        "htm_heater_temp_title": "Adjust Heater Temp", "htm_heater_temp_desc": "Set to 120F for safety and savings.",
        "htm_dishwasher_filter_title": "Clean Dishwasher Filter", "htm_dishwasher_filter_desc": "Stop bad smells and dirty dishes.",
        "htm_leaky_pipe_title": "Temp Fix Leaky Pipe", "htm_leaky_pipe_desc": "Stop minor pipe leaks temporarily.",
        "htm_fill_valve_title": "Replace Toilet Fill Valve", "htm_fill_valve_desc": "Fix a toilet that won't stop filling.",
        "htm_caulk_tub_title": "Re-Caulk Bathtub", "htm_caulk_tub_desc": "Prevent water damage and mold.",
        "htm_frozen_pipes_title": "Thaw Frozen Pipes", "htm_frozen_pipes_desc": "Safely thaw pipes to prevent bursts.",
        "htm_house_filter_title": "Change House Filter", "htm_house_filter_desc": "Maintain whole-home water pressure.",
        "htm_tub_drain_title": "Unclog Bathtub", "htm_tub_drain_desc": "Remove hair clogs easily."
    },
    'es': {
        "htm_drain_heater_title": "Drenar Calentador", "htm_drain_heater_desc": "Purga el sedimento para extender su vida.",
        "htm_heater_temp_title": "Ajustar Temperatura", "htm_heater_temp_desc": "Configura a 120F por seguridad y ahorro.",
        "htm_dishwasher_filter_title": "Limpiar Filtro Lavavajillas", "htm_dishwasher_filter_desc": "Evita malos olores y trastes sucios.",
        "htm_leaky_pipe_title": "Parchear Fuga de Tubo", "htm_leaky_pipe_desc": "Detén fugas menores temporalmente.",
        "htm_fill_valve_title": "Cambiar Válvula de Llenado", "htm_fill_valve_desc": "Arregla inodoros que no dejan de llenarse.",
        "htm_caulk_tub_title": "Sellar la Tina", "htm_caulk_tub_desc": "Previene daños por agua y moho.",
        "htm_frozen_pipes_title": "Descongelar Tuberías", "htm_frozen_pipes_desc": "Descongela seguro para evitar rupturas.",
        "htm_house_filter_title": "Cambiar Filtro de Casa", "htm_house_filter_desc": "Mantén la presión de agua de tu hogar.",
        "htm_tub_drain_title": "Destapar Tina", "htm_tub_drain_desc": "Elimina tapones de cabello fácilmente."
    }
}

for lang in ['en', 'es']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs:
        injected_str = "\n"
        for k, v in trans[lang].items():
            injected_str += f'        "{k}": "{v}",\n'
        appjs = appjs.replace(lang_marker, lang_marker + injected_str)
        
# For Asian languages, fallback to English strings just to populate the array if missing
fallback = trans['en']
for lang in ['zh', 'tl', 'vi']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs:
        injected_str = "\n"
        for k, v in fallback.items():
            injected_str += f'        "{k}": "{v}",\n'
        appjs = appjs.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs)

print("Added 9 tasks and improved CSS.")
