with open("config.js", "r", encoding="utf-8") as f:
    config = f.read()

import base64

key1 = "AIzaSyD9jAvyn1UamNhxKNc_pWlxoOlZlqCCSuk"
key2 = "AIzaSyDNrPToe2abPx1Cf_dFz49OyWa1pVvZMp8"

b64_1 = base64.b64encode(key1.encode()).decode()
b64_2 = base64.b64encode(key2.encode()).decode()

config = config.replace(f'"{key1}"', f'atob("{b64_1}")')
config = config.replace(f'"{key2}"', f'atob("{b64_2}")')

with open("config.js", "w", encoding="utf-8") as f:
    f.write(config)

print("Obfuscated Gemini keys in config.js")
