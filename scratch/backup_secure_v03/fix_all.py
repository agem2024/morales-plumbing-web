import re

# 1. Restore translations from V.01
with open(r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\morales-plumbing-web\app.js", "r", encoding="utf-8") as f:
    v01_content = f.read()

v01_translations_match = re.search(r'const translations = \{[\s\S]*?^};', v01_content, re.MULTILINE)
if not v01_translations_match:
    print("Failed to find V01 translations")
    exit(1)
v01_translations = v01_translations_match.group(0)

with open("app.js", "r", encoding="utf-8") as f:
    app_js_content = f.read()

current_translations_match = re.search(r'const translations = \{[\s\S]*?^};', app_js_content, re.MULTILINE)
if current_translations_match:
    app_js_content = app_js_content.replace(current_translations_match.group(0), v01_translations)
    print("Restored original translations block.")
else:
    print("Failed to find current translations block")

# 2. Fix Spanish with word boundaries!
replacements = {
    r"\bmisin\b": "misión",
    r"\bmisison\b": "misión",
    r"\bEstndares\b": "Estándares",
    r"\bestndares\b": "estándares",
    r"\bEnergtica\b": "Energética",
    r"\benergtica\b": "energética",
    r"\bTtulo\b": "Título",
    r"\baprobacin\b": "aprobación",
    r"\binstalacin\b": "instalación",
    r"\bdespus\b": "después",
    r"\brequerirn\b": "requerirán",
    r"\belctricos\b": "eléctricos",
    r"\bsern\b": "serán",
    r"\btecnologa\b": "tecnología",
    r"\bvlvulas\b": "válvulas",
    r"\benvan\b": "envían",
    r"\brpido\b": "rápido",
    r"\balldel\b": "allá del",
    r"\bsmosis\b": "ósmosis",
    r"\besterilizacin\b": "esterilización",
    r"\bcadas\b": "caídas",
    r"\bdiagnstico\b": "diagnóstico",
    r"\boptimizacin\b": "optimización",
    r"\bpresin\b": "presión",
    r"\bTrminos\b": "Términos",
    r"\bPoltica\b": "Política",
    r"\binformacin\b": "información",
    r"\btrminos\b": "términos",
    r"\bpoltica\b": "política",
    r"\best\b": "está",
    r"\bms\b": "más",
    r"\bgua\b": "guía",
    r"\bplomera\b": "plomería"
}

for old, new in replacements.items():
    app_js_content = re.sub(old, new, app_js_content)

# Fix Area de la Baha separately as it has spaces
app_js_content = app_js_content.replace("Area de la Baha", "Área de la Bahía")
app_js_content = app_js_content.replace("rea de la Baha", "Área de la Bahía")

# 3. Fix scroll issue in navigate()
# Find window.scrollTo({ top: 0, behavior: 'instant' }); and remove or change it
scroll_code = "window.scrollTo({ top: 0, behavior: 'instant' });"
better_scroll_code = """// Only scroll to top if not navigating to a specific sub-section natively
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }"""
app_js_content = app_js_content.replace(scroll_code, better_scroll_code)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app_js_content)
print("app.js fixed (translations & scroll)")

# 4. Fix podcast HTML in index.html
with open("index.html", "r", encoding="utf-8") as f:
    idx_content = f.read()

# Bad HTML from my injection:
bad_pod1 = """<button class="btn-play-pod" onclick="playPodcast('assets/podcasts/ai_replaces_the_plumber_s_sledgehammer.m4a', 'item-ai_sledgehammer')">"""
bad_pod2 = """<button class="btn-play-pod" onclick="playPodcast('assets/podcasts/fontaneros_con_ia_y_tecnologia_militar.m4a', 'item-ia_militar')">"""

# Good HTML using the correct attributes for playPodcast(this)
good_pod1 = """<button class="pod-link pod-play-btn" data-audio="assets/podcasts/ai_replaces_the_plumber_s_sledgehammer.m4a" data-id="item-ai_sledgehammer" data-title-key="ai_sledgehammer_title" data-badge-key="pod_type_deep_dive" data-lang="EN" data-series="MP" onclick="playPodcast(this)">"""
good_pod2 = """<button class="pod-link pod-play-btn" data-audio="assets/podcasts/fontaneros_con_ia_y_tecnologia_militar.m4a" data-id="item-ia_militar" data-title-key="ia_militar_title" data-badge-key="pod_type_deep_dive" data-lang="ES" data-series="MP" onclick="playPodcast(this)">"""

idx_content = idx_content.replace(bad_pod1, good_pod1)
idx_content = idx_content.replace(bad_pod2, good_pod2)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(idx_content)
print("index.html fixed (podcasts HTML)")
