with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
# Find any definition of setLanguage
match = re.search(r'function setLanguage[\s\S]*?\}', content)
if match:
    print("setLanguage function:")
    print(match.group(0))
else:
    # try searching for .querySelectorAll('[data-i18n]')
    match2 = re.search(r'document\.querySelectorAll\(\'\[data-i18n\]\'\)[\s\S]*?\}\)', content)
    if match2:
        print("data-i18n logic:")
        print(match2.group(0))
