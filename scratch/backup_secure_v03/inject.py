import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Load the saved snippets
scratch_dir = r"C:\Users\alexp\.gemini\antigravity\brain\ae4997d2-a3cc-4cd3-aa74-bb80e7d54cf7\scratch\v02_backup"
with open(f"{scratch_dir}\\trust_bar.html", "r", encoding="utf-8") as f:
    trust_bar = f.read()
with open(f"{scratch_dir}\\quick_services.html", "r", encoding="utf-8") as f:
    quick_services = f.read()

# Find the end of the home section
# In V.01, the home section ends right before <section id="ecosystem"
pattern = r'(        </section>\s*<!-- ORION ECOSYSTEM -->\s*<section id="ecosystem" class="page-section">)'
match = re.search(pattern, content)

if match:
    # We want to put the snippets BEFORE the closing </section> of home
    replacement = trust_bar + "\n\n" + quick_services + "\n\n" + match.group(1)
    content = content[:match.start()] + replacement + content[match.end():]
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("Injected V02 HTML snippets into index.html")
else:
    print("Could not find the insertion point!")
