import os
import glob
import re
import json

docs_path = 'docs/*.html'
files = glob.glob(docs_path)

audit_results = {}

with open('app.js', 'r', encoding='utf-8') as f:
    app_js_content = f.read()

# Extract keys from app.js (naive approach, extracting anything in quotes before a colon)
keys = set(re.findall(r'"([^"]+)"\s*:', app_js_content))

for file in files:
    with open(file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    has_logo = 'logo_portada.png' in content or 'morales_logo' in content or 'logo.png' in content
    has_copyright = 'Todos los derechos reservados' in content or 'All rights reserved' in content or 'footer-copyright' in content
    has_app_js = 'app.js' in content
    
    # Check for translation tags
    i18n_tags = re.findall(r'data-i18n="([^"]+)"', content)
    missing_keys = [k for k in i18n_tags if k not in keys]
    
    # Check for missing ternaries (e.g., condition 'string' instead of ? 'string' : 'other_string')
    missing_ternaries = False
    if '<script' in content:
        scripts = re.findall(r'<script.*?>([\s\S]*?)</script>', content)
        for s in scripts:
            if '?' not in s and ':' in s and '=>' in s: # rough heuristic
                pass
                
    audit_results[os.path.basename(file)] = {
        'has_logo': has_logo,
        'has_copyright': has_copyright,
        'has_app_js': has_app_js,
        'missing_translation_keys': missing_keys
    }

print(json.dumps(audit_results, indent=2))
