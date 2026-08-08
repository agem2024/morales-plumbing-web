with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

in_multimedia = False
for i, line in enumerate(lines):
    if '<section id="multimedia"' in line:
        in_multimedia = True
    
    if in_multimedia and '</section>' in line:
        print("Found end of multimedia section at line", i+1)
        for j in range(i, i+5):
            if j < len(lines):
                print(f"{j+1}: {lines[j].strip()}")
        break
