import json

with open('app.js', 'r', encoding='utf-8') as f:
    appjs_content = f.read()

# We need to find the "en": { ... block and replace the first "htm_title" inside it
import re

def replace_nth(string, sub, wanted, n):
    where = [m.start() for m in re.finditer(re.escape(sub), string)][n-1]
    before = string[:where]
    after = string[where:]
    after = after.replace(sub, wanted, 1)
    return before + after

# The first occurrence is in the 'en' section.
appjs_content = replace_nth(appjs_content, '"htm_title": "Hazlo Tú Mismo",', '"htm_title": "Do It Yourself (DIY)",', 1)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs_content)
    
print("Fixed English title")
