import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    content = f.read()
    
# Let's check for any obvious missing brackets in the replaced code
print("Checking populateDynamicLists length:", len(content.split('function populateDynamicLists(lang) {')[1]))
