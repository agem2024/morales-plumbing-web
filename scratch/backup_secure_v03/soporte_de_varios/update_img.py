import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Update image paths
htm_content = htm_content.replace('img: "../assets/pb_svc_2.webp",', 'img: "../assets/diy_anode.png",')
htm_content = htm_content.replace('img: "../assets/pb_svc_4.webp",', 'img: "../assets/diy_plunger.png",')
htm_content = htm_content.replace('img: "../assets/pb_svc_3.webp",', 'img: "../assets/wh_comic.png",')
htm_content = htm_content.replace('img: "../assets/pb_svc_5.webp",', 'img: "../assets/app_tratamiento.png",')
htm_content = htm_content.replace('img: "../assets/pb_svc_6.webp",', 'img: "../assets/diy_disposal.png",')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Updated images in hazlo_tu_mismo.html")
