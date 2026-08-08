import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Add cache buster ?v=2 to all .png and .webp in the tasks array
import re
htm_content = re.sub(r'(img:\s*"[^"]+\.(png|webp))"', r'\1?v=2"', htm_content)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Appended cache busters")
