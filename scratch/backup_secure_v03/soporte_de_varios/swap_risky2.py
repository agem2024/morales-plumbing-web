import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Replace tasks in tasks array (handling any ?v=X cache busters)
htm_content = re.sub(
    r'key:\s*"leaky_pipe",\s*img:\s*"[^"]+"',
    'key: "aerator", img: "../assets/diy_aerator.png"',
    htm_content
)
htm_content = re.sub(
    r'key:\s*"frozen_pipes",\s*img:\s*"[^"]+"',
    'key: "hvac_filter", img: "../assets/diy_hvac_filter.png"',
    htm_content
)
htm_content = re.sub(
    r'key:\s*"house_filter",\s*img:\s*"[^"]+"',
    'key: "house_filter", img: "../assets/diy_house_filter.png"',
    htm_content
)

# Apply a new cache buster ?v=5 to all .png files to ensure they load
htm_content = re.sub(r'\?v=\d+"', '"', htm_content) # remove old ones
htm_content = re.sub(r'(img:\s*"[^"]+\.(png|webp))"', r'\1?v=5"', htm_content) # apply v=5

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Tasks replaced successfully")
