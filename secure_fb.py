with open("index.html", "r", encoding="utf-8") as f:
    idx = f.read()

import base64

fb_key = "AIzaSyCesnI4-Kq5WpkGHFq-8ucb07dgd5yAKHY"
b64_fb = base64.b64encode(fb_key.encode()).decode()

idx = idx.replace(f'"{fb_key}"', f'atob("{b64_fb}")')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(idx)

print("Obfuscated Firebase API key in index.html")
