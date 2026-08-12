import os
import glob
import re

html_files = glob.glob('*.html') + glob.glob('docs/*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    heads = len(re.findall(r'<head\b', content, re.IGNORECASE))
    headers = len(re.findall(r'<header\b', content, re.IGNORECASE))
    scripts = len(re.findall(r'<script.*app\.js', content, re.IGNORECASE))
    
    if heads > 1 or headers > 1 or scripts == 0:
        print(f"{filepath}: heads={heads}, headers={headers}, app.js_scripts={scripts}")
