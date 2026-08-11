import re
import codecs

with codecs.open('old_app.js', 'r', 'utf-8') as f:
    old_text = f.read()
with codecs.open('app.js', 'r', 'utf-8') as f:
    new_text = f.read()

# find the zh, tl, vi blocks in old_app and new_app and replace them!
for lang in ['zh', 'tl', 'vi']:
    pattern = r'"' + lang + r'":\s*\{.*?\n    \},'
    old_match = re.search(pattern, old_text, re.DOTALL)
    new_match = re.search(pattern, new_text, re.DOTALL)
    if old_match and new_match:
        new_text = new_text.replace(new_match.group(0), old_match.group(0))
        print(f"Restored {lang} translations")

# For Spanish, we can fix the typos in the new text
es_fixes = {
    'artesana': 'artesanía', 'mtodos': 'métodos', 'Afiliacin': 'Afiliación',
    'presin': 'presión', 'daos': 'daños', 'tuberas': 'tuberías',
    'electrodomsticos': 'electrodomésticos', 'catastrficas': 'catastróficas',
    'ao': 'año', 'aos': 'años', 'ms': 'más', 'energticamente': 'energéticamente',
    'estoxidando': 'está oxidando', 'energa': 'energía', 'S,': 'Sí,',
    'Podra': 'Podría', 'inmersin': 'inmersión', 'vlvula': 'válvula',
    'Misin': 'Misión', 'Tcnica': 'Técnica', 'tcnica': 'técnica', 'Diseo': 'Diseño'
}
for bad, good in es_fixes.items():
    new_text = re.sub(r'\b' + bad + r'\b', good, new_text)
    bad_cap = bad[0].upper() + bad[1:]
    good_cap = good[0].upper() + good[1:]
    new_text = re.sub(r'\b' + bad_cap + r'\b', good_cap, new_text)

new_text = new_text.replace('artesana C-36', 'artesanía C-36')

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(new_text)

print('Done replacing.')
