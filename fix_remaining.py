import glob, re

files = glob.glob('docs/*.html') + ['index.html']
modified = 0
for filepath in files:
    txt = open(filepath, 'r', encoding='utf-8', errors='replace').read()
    original = txt

    # Fix MORALES with corrupted accented A
    txt = re.sub(r'MOR[Á\u00c1\ufffd]LES', 'MORALES', txt)
    txt = re.sub(r'Mor[á\u00e1\ufffd]les', 'Morales', txt)
    # Fix Systems with corrupt á
    txt = re.sub(r'System[á\u00e1\ufffd]s', 'Systems', txt)
    txt = re.sub(r'system[á\u00e1\ufffd]s', 'systems', txt)
    # Fix N/Á → N/A
    txt = re.sub(r'N/[Á\u00c1\ufffd]', 'N/A', txt)

    if txt != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(txt)
        modified += 1
        print(f'Fixed: {filepath}')

print(f'Done. {modified} files fixed.')
