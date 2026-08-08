import re

with open('app_clean.js', 'r', encoding='utf-16') as f:
    clean = f.read()

fallback_block = """
// Global Fallback to Ensure Translations Run
document.addEventListener('DOMContentLoaded', () => {
    if (typeof updateTranslations === 'function') {
        setTimeout(updateTranslations, 500);
    }
});
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (typeof updateTranslations === 'function') {
        setTimeout(updateTranslations, 500);
    }
}
"""

new_keys_en = """        "lbl_tecnico": "Tech on Way",
        "qs_tab_plumbing": "Plumbing",
        "qs_tab_water_heaters": "Water Heaters",
        "qs_tab_drain_cleaning": "Drain Cleaning",
        "qs_tab_more": "More...",
        "qs_btn_call": "Call Now",
"""
new_keys_es = """        "lbl_tecnico": "Técnico en Camino",
        "qs_tab_plumbing": "Plomería",
        "qs_tab_water_heaters": "Calentadores",
        "qs_tab_drain_cleaning": "Limpieza de Drenajes",
        "qs_tab_more": "Más...",
        "qs_btn_call": "Llamar Ahora",
"""

clean = re.sub(r'("en": \{.*?\n)(    \},)', r'\g<1>' + new_keys_en + r'\g<2>', clean, flags=re.DOTALL)
clean = re.sub(r'("es": \{.*?\n)(    \},)', r'\g<1>' + new_keys_es + r'\g<2>', clean, flags=re.DOTALL)

clean += fallback_block

with open('app.js', 'w', encoding='utf-16') as f:
    f.write(clean)
print('Successfully fixed app.js')
