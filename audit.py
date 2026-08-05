import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

html_files = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

broken_links = []
broken_assets = []
corrupted_chars = []

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            content = f.read()
        except UnicodeDecodeError:
            continue

    if re.search(r'botA3n|vAlvula|lA-nea|silicA3n', content):
        corrupted_chars.append(file_path)

    hrefs = re.findall(r'href=["\'](.*?)["\']', content)
    for href in hrefs:
        if href.startswith('http') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('#') or href.startswith('javascript:'):
            continue
        
        href_clean = href.split('?')[0].split('#')[0]
        if not href_clean:
            continue
            
        target = os.path.normpath(os.path.join(os.path.dirname(file_path), href_clean))
        if target.endswith(os.sep):
            target = os.path.join(target, 'index.html')
            
        if '${' in target:
            continue
            
        if not os.path.exists(target):
            broken_links.append((file_path, href))

    srcs = re.findall(r'src=["\'](.*?)["\']', content)
    for src in srcs:
        if src.startswith('http') or src.startswith('data:'):
            continue
            
        src_clean = src.split('?')[0].split('#')[0]
        if not src_clean:
            continue
            
        target = os.path.normpath(os.path.join(os.path.dirname(file_path), src_clean))
        
        if '${' in target:
            continue
            
        if not os.path.exists(target):
            broken_assets.append((file_path, src))

print("BROKEN LINKS:")
for bl in broken_links:
    print(f"In {bl[0]}: {bl[1]}")

print("\nBROKEN ASSETS:")
for ba in broken_assets:
    print(f"In {ba[0]}: {ba[1]}")

print("\nCORRUPTED FILES:")
for c in set(corrupted_chars):
    print(c)
