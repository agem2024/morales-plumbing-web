import re, glob

# ─── REPLACEMENTS for corrupted text ───────────────────────────────────────
REPLACEMENTS = [
    # tech<ú>nical  →  technical
    (r'tech\u00fanical', 'technical', re.IGNORECASE),
    (r'Tech\u00fanical', 'Technical', 0),
    # t\u00e9c\u00fanica / t\u00e9c\u00fanicos etc
    (r'tc\u00fanica', 'técnica', re.IGNORECASE),
    (r'tc\u00fanicos', 'técnicos', re.IGNORECASE),
    # Bay \u00e1rea  →  Bay Area
    (r'Bay \u00e1rea', 'Bay Area', 0),
    # A\u00f1os  (anos without tilde on n)
    (r'\bA\u00f1os\b', 'Años', 0),
    # Misc broken accents in static content from copy-paste with wrong encoding
    # The pattern is usually a letter followed by \u00fa (ú) where it should be another letter
    # e.g. "t\u00e9c\u00fanica" should be "técnica"
    # Stray ú in "técúnica" like strings → drop the ú
    (r'([aeiou])([ú])([a-z])', lambda m: m.group(1)+m.group(3), re.IGNORECASE),
    # system<ú>s → systems (specific case)
    (r'system\u00fas\b', 'systems', re.IGNORECASE),
    # \u00e9 in translation strings that got double-encoded
    (r'\u00e9', 'é', 0),
    (r'\u00f3', 'ó', 0),
    (r'\u00e1', 'á', 0),
    (r'\u00ed', 'í', 0),
    (r'\u00fa', 'ú', 0),
    (r'\u00fc', 'ü', 0),
    (r'\u00f1', 'ñ', 0),
    (r'\u00c9', 'É', 0),
    (r'\u00c1', 'Á', 0),
    (r'\u00cd', 'Í', 0),
    (r'\u00d3', 'Ó', 0),
    (r'\u00da', 'Ú', 0),
    (r'\u00d1', 'Ñ', 0),
    (r'\u00bf', '¿', 0),
    (r'\u00a1', '¡', 0),
]

# ─── SPECIFIC fixes in ceo.html ─────────────────────────────────────────────
CEO_FIXES = [
    # broken image filenames with accent
    ('comic_term\u00fas.png', 'comic_terms.png'),
    ('comic_term\u00e9s.png', 'comic_terms.png'),
    # Fix "técúnical" → "technical" and similar
    ('tech\u00fanical', 'technical'),
    ('Bay \u00e1rea', 'Bay Area'),
    ('system\u00fas', 'systems'),
    ('\u00e9ducaci\u00f3n', 'educación'),
]

files = glob.glob('docs/*.html') + ['index.html']

modified = 0
for filepath in files:
    txt = open(filepath, 'r', encoding='utf-8', errors='replace').read()
    original = txt

    # Apply simple string replacements first (for ceo.html specific)
    for old, new in CEO_FIXES:
        txt = txt.replace(old, new)

    # Now apply regex replacements  
    for pat, repl, flags in REPLACEMENTS:
        if callable(repl):
            txt = re.sub(pat, repl, txt, flags=flags)
        else:
            if flags:
                txt = re.sub(pat, repl, txt, flags=flags)
            else:
                txt = re.sub(pat, repl, txt)

    if txt != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(txt)
        modified += 1
        print(f'Fixed: {filepath}')

print(f'\nDone. {modified} files modified.')
