import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix navigate
content = re.sub(
    r'(function navigate\(sectionId, pushState = true\) \{.*?if \(sections\.length === 0\) return;)',
    r'\1\n    const overlay = document.getElementById(\"mobile-nav-overlay\");\n    const navLinks = document.querySelector(\".nav-links\");\n    if (overlay) overlay.classList.remove(\"visible\");\n    if (navLinks) navLinks.classList.remove(\"open\");',
    content,
    flags=re.DOTALL
)

# Fix podcasts
content = re.sub(
    r'(audioSrc = baseAudioSrc\.replace\(''\.m4a'', _\$\{curLang\}\.m4a\);)',
    r'let finalSrc = baseAudioSrc.replace(''.m4a'', _.m4a);\n        if (window.location.pathname.includes(''/docs/'')) {\n            finalSrc = ''../'' + finalSrc;\n        }\n        audioSrc = finalSrc;',
    content
)

# Fix joeQuery crash
content = re.sub(
    r'(const joeQuery = document\.getElementById\(''joe-query''\);)',
    r'\1\n    if (joeQuery) ',
    content
)

# Fix public-contact-form crash
content = re.sub(
    r'(const form = document\.getElementById\(''public-contact-form''\);)',
    r'\1\n    if (form) ',
    content
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('app.js patched')
