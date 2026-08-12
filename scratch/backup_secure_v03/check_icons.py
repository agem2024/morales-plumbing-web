with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

import re
matches = re.finditer(r'<span class="play-icon">(.*?)</span>', content)
for m in matches:
    print(f"Play icon char: {repr(m.group(1))}")
