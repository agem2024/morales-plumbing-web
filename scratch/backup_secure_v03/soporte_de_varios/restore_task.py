import re
import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Add washer_hose to tasks array
new_task = """
            {
                id: "t11",
                key: "washer_hose",
                img: "../assets/diy_washer_hoses.png",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+washing+machine+hoses"
            }
"""
htm_content = htm_content.replace('key: "plunge_toilet",\n                img: "../assets/diy_plunger.png",\n                yt: "https://www.youtube.com/results?search_query=how+to+plunge+a+toilet"\n            }', 
'key: "plunge_toilet",\n                img: "../assets/diy_plunger.png",\n                yt: "https://www.youtube.com/results?search_query=how+to+plunge+a+toilet"\n            },' + new_task)

# Add washer_hose JS details back
en_details = 'washer_hose: { m: ["Stainless Steel Hoses"], t: ["Channel Locks"], s: ["Turn off water valves.", "Unscrew old rubber hoses.", "Connect new hoses.", "Hand tighten, then 1/4 turn with pliers."] },'
es_details = 'washer_hose: { m: ["Mangueras Acero Inox"], t: ["Pinzas"], s: ["Cierra válvulas de agua.", "Quita mangueras viejas.", "Conecta mangueras nuevas.", "Aprieta a mano y luego 1/4 con pinza."] },'

# We'll inject them into the JS arrays
htm_content = htm_content.replace('gfi: { m: ["None"]', en_details + '\n                    gfi: { m: ["None"]')
htm_content = htm_content.replace('gfi: { m: ["Ninguno"]', es_details + '\n                    gfi: { m: ["Ninguno"]')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Restored Washer Hoses task")
