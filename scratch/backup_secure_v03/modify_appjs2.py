with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

target = "localStorage.setItem('morales_lang', lang);"
inject_code = """
    // Toggle language specific media blocks
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
    document.querySelectorAll('.lang-es').forEach(el => el.style.display = lang === 'es' ? 'block' : 'none');
"""

content = content.replace(target, target + "\n" + inject_code)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Injected language toggle logic into setLanguage")
