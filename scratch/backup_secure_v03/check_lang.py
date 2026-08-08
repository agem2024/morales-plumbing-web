with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
match = re.search(r'function setLanguage\(.*?\).*?\{.*?\}', content, re.DOTALL)
if match:
    print(match.group(0))
else:
    print("setLanguage function not found")
