import os
import glob

html_files = glob.glob("docs/*.html") + ["index.html"]

for file in html_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Change localStorage fallback to 'en'
    content = content.replace("localStorage.getItem('morales_lang') || 'es'", "localStorage.getItem('morales_lang') || 'en'")
    content = content.replace("localStorage.getItem('mp_lang') || 'es'", "localStorage.getItem('mp_lang') || 'en'")
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated all HTML files to use 'en' as default language.")
