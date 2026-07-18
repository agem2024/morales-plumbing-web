import os
import re

app_js_path = 'app.js'
with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We look for lines that look like:
# "lp_t1_d": ""Some string here"",
# And replace with:
# "lp_t1_d": "\"Some string here\"",

def replace_quotes(match):
    key = match.group(1)
    inner_text = match.group(2)
    # Re-escape the inner text so we don't break JSON
    inner_text = inner_text.replace('"', '\\"')
    return f'"{key}": "{inner_text}",'

content = re.sub(r'"(lp_t[123]_d)": ""(.*?)"",', replace_quotes, content)

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed all quote syntax errors in app.js")
