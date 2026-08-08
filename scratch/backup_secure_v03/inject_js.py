import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# We look for document.addEventListener('DOMContentLoaded', () => {
pattern = r'(document\.addEventListener\([''"]DOMContentLoaded[''"],\s*.*?\(\)\s*=>\s*\{)'
match = re.search(pattern, content)

if match:
    inject_code = """
    // FORCE LOAD HOME FIRST TO PREVENT WEIRD HASH ISSUES
    if(window.location.hash !== '#home' && window.location.hash !== '') {
        window.history.replaceState(null, null, 'index.html#home');
        window.location.hash = '#home';
    }
"""
    content = content[:match.end()] + inject_code + content[match.end():]
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Injected JS routing fix")
else:
    print("Could not find DOMContentLoaded")
