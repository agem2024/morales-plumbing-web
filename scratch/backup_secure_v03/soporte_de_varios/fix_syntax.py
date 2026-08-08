import re

with open('docs/hazlo_tu_mismo.html', 'r', encoding='utf-8') as f:
    htm = f.read()

# Fix double commas in data objects
htm = re.sub(r'\}\s*,\s*,\s*gfi:', r'},\n                    gfi:', htm)

# Fix duplicate entries if any
# Let's just fix the syntax error directly
with open('docs/hazlo_tu_mismo.html', 'w', encoding='utf-8') as f:
    f.write(htm)

print("Fixed syntax error")
