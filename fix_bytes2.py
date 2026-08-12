import glob

files = glob.glob('docs/*.html') + ['index.html']
modified = 0

for filepath in files:
    with open(filepath, 'rb') as f:
        raw = f.read()
    
    original_len = len(raw)
    
    # The corruption: MOR + lowercase-á (c3a1) + LES  → MORALES
    raw = raw.replace(b'MOR\xc3\xa1LES', b'MORALES')
    raw = raw.replace(b'Mor\xc3\xa1les', b'Morales')
    # System + á (c3a1) + s → Systems
    raw = raw.replace(b'System\xc3\xa1s', b'Systems')
    raw = raw.replace(b'system\xc3\xa1s', b'systems')
    # N/ + á → N/A
    raw = raw.replace(b'N/\xc3\xa1', b'N/A')

    if raw != (open(filepath, 'rb').read() if len(raw) == original_len else b''):
        with open(filepath, 'wb') as f:
            f.write(raw)
        modified += 1
        print(f'Fixed: {filepath}')

print(f'Done. {modified} files fixed.')
