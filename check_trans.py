with open(r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\morales-plumbing-web\app.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
match = re.search(r'const translations = \{.*?\} // END TRANSLATIONS', content, re.DOTALL)
if match:
    print("Found translations block in V.01")
else:
    match2 = re.search(r'const translations = \{[\s\S]*?^};', content, re.MULTILINE)
    if match2:
        print("Found translations block with regex 2")
    else:
        print("Not found")
