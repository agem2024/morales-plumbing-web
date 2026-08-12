import re

with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace any weird characters inside setLanguage
text = re.sub(r'setLangu.*?age', 'setLanguage', text)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Fixed setLanguage function name.")
