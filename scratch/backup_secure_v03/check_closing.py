with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()
for i in range(860, 995):
    if '</section>' in lines[i]:
        print(f"Line {i+1}: {lines[i].strip()}")
