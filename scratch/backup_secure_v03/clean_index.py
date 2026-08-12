import re
with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Remove the broken stray buttons that were left behind
content = re.sub(r'<div class="pod-item" id="item-(ai_sledgehammer|ia_militar)">.*?▶</button>\s*</div>', '', content, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
