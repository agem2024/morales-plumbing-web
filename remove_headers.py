import os
import glob
import re

html_files = glob.glob('*.html') + glob.glob('docs/*.html')

pattern = re.compile(r'<header>\s*<div class="logo">ORION\s*<span style="font-weight: 300;">TECH</span></div>\s*</header>', re.IGNORECASE | re.DOTALL)

fixed_count = 0

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content, count = pattern.subn('', content)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Removed legacy header from {os.path.basename(filepath)}")
        fixed_count += 1

print(f"Done. Removed from {fixed_count} files.")
