import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Replace the remaining pb_svc_ placeholders that don't match the activity
htm_content = htm_content.replace('img: "../assets/pb_svc_11.png",', 'img: "../assets/comic_copper.webp",')
htm_content = htm_content.replace('img: "../assets/pb_svc_10.png",', 'img: "../assets/service_expansion_hydraulic_1778369313970.webp",')
htm_content = htm_content.replace('img: "../assets/pb_svc_14.png",', 'img: "../assets/service_water_reuse_1778369083950.webp",')
htm_content = htm_content.replace('img: "../assets/pb_svc_12.png",', 'img: "../assets/comic_treatment.webp",')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Replaced all remaining placeholder images")
