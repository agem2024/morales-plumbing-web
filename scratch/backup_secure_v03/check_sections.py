with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if 'id="multimedia"' in line:
        print(f"Line {i+1}: {line.strip()}")
    if 'id="services"' in line:
        print(f"Line {i+1}: {line.strip()}")
    if '<!-- SERVICES -->' in line:
        print(f"Line {i+1}: {line.strip()}")
