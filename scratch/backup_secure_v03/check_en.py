with open(r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\morales-plumbing-web\app.js", "r", encoding="utf-8") as f:
    content = f.read()
import re
match = re.search(r'en:\s*\{.*?\},', content, re.DOTALL)
if match:
    print("Found 'en' block in V.01 backup")
else:
    print("Not found")
