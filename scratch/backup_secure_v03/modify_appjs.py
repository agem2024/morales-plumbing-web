import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# We need to add logic to setLanguage to toggle .lang-en and .lang-es
pattern = r'(function setLanguage\(lang\) \{.*?localStorage\.setItem\(''morales_lang'', lang\);)'
match = re.search(pattern, content, re.DOTALL)

if match:
    inject_code = """
    // Toggle language specific media blocks
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
    document.querySelectorAll('.lang-es').forEach(el => el.style.display = lang === 'es' ? 'block' : 'none');
"""
    content = content[:match.end()] + inject_code + content[match.end():]
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Injected language toggle logic into setLanguage")
else:
    print("Could not find setLanguage")
