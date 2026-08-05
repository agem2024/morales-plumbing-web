with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    "misin": "misión",
    "misison": "misión", # just in case
    "Estndares": "Estándares",
    "estndares": "estándares",
    "Energtica": "Energética",
    "energtica": "energética",
    "Ttulo": "Título",
    "aprobacin": "aprobación",
    "instalacin": "instalación",
    "despus": "después",
    "requerirn": "requerirán",
    "elctricos": "eléctricos",
    "sern": "serán",
    "tecnologa": "tecnología",
    "vlvulas": "válvulas",
    "envan": "envían",
    "rpido": "rápido",
    "alldel": "allá del",
    "smosis": "ósmosis",
    "esterilizacin": "esterilización",
    "cadas": "caídas",
    "diagnstico": "diagnóstico",
    "optimizacin": "optimización",
    "presin": "presión",
    "Trminos": "Términos",
    "Poltica": "Política",
    "informacin": "información",
    "trminos": "términos",
    "poltica": "política",
    "est": "está",
    "ms": "más",
    "comunicaremos": "comunicaremos",
    "Area de la Baha": "Área de la Bahía",
    "rea de la Baha": "Área de la Bahía",
    "Area": "Área",
    "Baha": "Bahía",
    "gua": "guía",
    "plomera": "plomería"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Applied encoding fixes to app.js")
