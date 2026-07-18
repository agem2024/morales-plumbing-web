import os

index_path = 'index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

index_content = index_content.replace('docs/diy_hub.html', 'docs/hazlo_tu_mismo.html')

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Updated links to hazlo_tu_mismo.html")
