with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'id="item-ai_sledgehammer"' in line:
        for j in range(max(0, i-5), i+15):
            print(f"{j+1}: {lines[j].rstrip()}")
        break
