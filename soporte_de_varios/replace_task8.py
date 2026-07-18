import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Replace task array item
old_task = r'\{\s*id:\s*"t8",\s*key:\s*"washer_hose",\s*img:\s*"../assets/diy_valve\.png",\s*yt:\s*"[^"]+"\s*\}'
new_task = """{
                id: "t8",
                key: "gfi",
                img: "../assets/diy_gfi.png",
                yt: "https://www.youtube.com/results?search_query=how+to+reset+gfci+outlet"
            }"""
htm_content = re.sub(old_task, new_task, htm_content)

# Replace JS details (English)
old_en = r'washer_hose:\s*\{\s*m:\s*\["Stainless Steel Hoses"\],\s*t:\s*\["Channel Locks"\],\s*s:\s*\["Turn off water valves.", "Unscrew old rubber hoses.", "Connect new hoses.", "Hand tighten, then 1/4 turn with pliers."\]\s*\}'
new_en = 'gfi: { m: ["None"], t: ["None"], s: ["Locate tripped GFI outlet.", "Unplug all appliances from it.", "Press the RESET button firmly.", "Plug in appliance and test."] }'
htm_content = re.sub(old_en, new_en, htm_content)

# Replace JS details (Spanish)
old_es = r'washer_hose:\s*\{\s*m:\s*\["Mangueras Acero Inox"\],\s*t:\s*\["Pinzas"\],\s*s:\s*\["Cierra válvulas de agua.", "Quita mangueras viejas.", "Conecta mangueras nuevas.", "Aprieta a mano y luego 1/4 con pinza."\]\s*\}'
new_es = 'gfi: { m: ["Ninguno"], t: ["Ninguno"], s: ["Localiza el tomacorriente GFI botado.", "Desconecta todos los aparatos.", "Presiona el botón RESET firmemente.", "Conecta un aparato para probar."] }'
htm_content = re.sub(old_es, new_es, htm_content)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

# Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    appjs = f.read()

trans = {
    'en': { "htm_gfi_title": "8. Reset GFI Outlet", "htm_gfi_desc": "Restore power to your bathroom safely." },
    'es': { "htm_gfi_title": "8. Reiniciar Enchufe GFI", "htm_gfi_desc": "Restaura la energía del baño seguramente." },
    'zh': { "htm_gfi_title": "8. 重置 GFI 插座", "htm_gfi_desc": "安全地恢复浴室供电。" },
    'tl': { "htm_gfi_title": "8. I-reset ang GFI Outlet", "htm_gfi_desc": "Ibalik ang kuryente sa banyo nang ligtas." },
    'vi': { "htm_gfi_title": "8. Đặt lại ổ cắm GFI", "htm_gfi_desc": "Khôi phục nguồn điện phòng tắm an toàn." }
}

for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs:
        injected_str = f'\n        "htm_gfi_title": "{trans[lang]["htm_gfi_title"]}",\n        "htm_gfi_desc": "{trans[lang]["htm_gfi_desc"]}",'
        appjs = appjs.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs)

print("Replaced washer_hose with gfi")
