import re

file_path = 'docs/hazlo_tu_mismo.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'o- CERRAR GUA?A': '✖ CERRAR GUÍA',
    'GuA-a': 'Guía',
    'botA3n': 'botón',
    'AEnciende': 'Enciende',
    'AQuAcita': 'Quita',
    'vAlvula': 'válvula',
    'lA-nea': 'línea',
    'silicA3n': 'silicón',
    'TeflA3n': 'Teflón',
    'hAmedo': 'húmedo',
    'AEnrosca': 'Enrosca',
    'AAnodo': 'ánodo',
    'frA-a': 'fría',
    'GuA-antes': 'Guantes',
    'DestapacaAos': 'Destapacaños',
    'chupA3n': 'chupón',
    'desagAe': 'desagüe',
    'JabA3n': 'Jabón',
    'cilA-ndrico': 'cilíndrico',
    'AEnjuaga': 'Enjuaga',
    'plAstico': 'plástico',
    'tapA3n': 'tapón',
    'retenciA3n': 'retención'
}

for bad, good in replacements.items():
    content = content.replace(bad, good)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed double corruption.")
