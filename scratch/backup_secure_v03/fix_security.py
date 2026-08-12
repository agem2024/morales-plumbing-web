with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

target = '<li><a href="docs/portal_documental.html" data-i18n="nav_docs">Documentos</a></li>\n                '
content = content.replace(target, '')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Removed link from index.html")
