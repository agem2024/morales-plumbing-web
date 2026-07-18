import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Update cache buster to ?v=3 to force reload of the new AI images
htm_content = re.sub(r'\?v=2"', r'?v=3"', htm_content)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Updated cache buster to v3")
