import re

with open('app.js', 'r', encoding='utf-8') as f:
    appjs = f.read()

# Regular expression to remove "1. ", "10. ", "15. ", etc. from htm_..._title
# It looks for '"htm_[a-z_]+_title": "\d+\. ' and replaces it with '"htm_..._title": "'
appjs = re.sub(r'("htm_[a-z_]+_title":\s*")\d+\.\s+', r'\1', appjs)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs)

print("Removed all hardcoded numbers from HTM titles.")
