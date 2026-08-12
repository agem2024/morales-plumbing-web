import glob

replacements = [
    ("PlomerA-a", "Plomería"),
    ("GuA-a", "Guía"),
    ("IntroducciA3n", "Introducción"),
    ("tecnolA3gico", "tecnológico"),
    ("mAs", "más"),
    ("hA-dricos", "hídricos"),
    ("atrAs", "atrás"),
    ("precisiA3n", "precisión"),
    ("quirArgica", "quirúrgica"),
    ("Aclite", "Élite"),
    ("tAccnica", "técnica"),
    ("diseAo", "diseño"),
    ("filosofA-a", "filosofía"),
    ("innovaciA3n", "innovación"),
    ("misiA3n", "misión"),
    ("IA", "IA"),
    ("rApida", "rápida"),
    ("?", ""),
    ("Academia", "Academia"),
    ("serA", "será"),
    ("A3", "ó"),
    ("A-", "í"),
    ("A", "á"),
    ("Acc", "éc"),
    ("A©", "é")
]

for file in glob.glob("docs/*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    for old, new in replacements:
        content = content.replace(old, new)
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
print("Encoding artifacts fixed in docs HTML files.")
