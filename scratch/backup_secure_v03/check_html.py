with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()
import re
match = re.search(r'<div class="podcast-list">.*?</div>\s*</div>\s*<!-- Morales Plumbing \(EP\) Series -->', content, re.DOTALL)
if match:
    # Just print the first 1000 characters to see the structure
    print(match.group(0)[:1500])
