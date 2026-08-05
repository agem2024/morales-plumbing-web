import re

file_path = 'docs/hazlo_tu_mismo.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'lnea': 'línea',
    'silicn': 'silicón',
    'hmedo': 'húmedo',
    'Tefln': 'Teflón',
    'tefln': 'teflón',
    'destapacaos': 'destapacaños',
    'Jabn': 'Jabón',
    'jabn': 'jabón',
    'botn': 'botón',
    'nodo': 'ánodo',
    'fra': 'fría',
    'vlvula': 'válvula',
    'Vlvula': 'Válvula',
    'chupn': 'chupón',
    'desage': 'desagüe',
    'cilndrico': 'cilíndrico',
    'Quita': 'Quita',
    'Gua': 'Guía',
    'Diagnstico': 'Diagnóstico',
    'tapn': 'tapón',
    'tcnica': 'técnica',
    'Plomera': 'Plomería',
    'Mdulo': 'Módulo',
    'revolucin': 'revolución',
    'hdrica': 'hídrica',
    'hidrulicas': 'hidráulicas',
    'hidrulicos': 'hidráulicos',
    'precisin': 'precisión',
    'ecolgica': 'ecológica',
    'Tcnico': 'Técnico',
    'Reparacin': 'Reparación',
    'reutilizacin': 'reutilización',
    'estratgica': 'estratégica',
    'estratgico': 'estratégico',
    'Expansin': 'Expansión',
    'Instalacin': 'Instalación',
    'cotizacin': 'cotización',
    'Hola': '¡Hola',
    'En': '¡En',
    'Hasta': '¡Hasta',
    'Algo': '¿Algo',
    'Puedes': '¿Puedes'
}

for bad, good in replacements.items():
    content = content.replace(bad, good)

# Add smooth scroll logic
scroll_logic = '''
<script>
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
        }
    }
});
</script>
</body>
'''
content = content.replace('</body>', scroll_logic)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed encoding and added scroll.")
