import re
with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r'function setLangu.*?\)', text)
if match:
    print("Found:", match.group(0))
else:
    print("Not found.")
