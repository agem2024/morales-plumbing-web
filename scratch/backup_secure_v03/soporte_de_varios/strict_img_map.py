import re
import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Define the precise mappings for the 15 tasks to ensure ZERO repetition and maximum relevance
mappings = {
    "disposal": "../assets/diy_disposal.png",
    "heater": "../assets/diy_heater.png",
    "toilet": "../assets/diy_toilet.png",
    "sink": "../assets/diy_sink.png",
    "aerator": "../assets/comic_wrench.png",
    "faucet": "../assets/diy_faucet.png",
    "caulk": "../assets/comic_construction.webp",
    "showerhead": "../assets/diy_shower.png",
    "smell": "../assets/diy_smell.png",
    "washer_hose": "../assets/diy_valve.png",
    "anode": "../assets/diy_anode.png",
    "drain_heater": "../assets/wh_comic.png",
    "plunge_toilet": "../assets/diy_plunger.png",
    "main_filter": "../assets/app_tratamiento.png",
    "dishwasher_filter": "../assets/comic_shield.webp"
}

# Regex to find each task block and replace the img field
for key, img_path in mappings.items():
    # Matches: key: "disposal", \n img: "ANYTHING"
    pattern = r'(key:\s*"' + key + r'",\s*img:\s*")[^"]+(")'
    htm_content = re.sub(pattern, r'\1' + img_path + r'\2', htm_content)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Tasks array images strictly mapped. No repetitions.")
