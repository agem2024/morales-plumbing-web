
# The issue is the replacement char \ufffd is already in memory but not being matched properly.
# Let's read as bytes and manually replace the sequence.
import glob

files = glob.glob('docs/*.html') + ['index.html']
modified = 0

for filepath in files:
    with open(filepath, 'rb') as f:
        raw = f.read()
    
    original = raw

    # In UTF-8, Á = \xc3\x81, á = \xc3\xa1, ú = \xc3\xba
    # MORALES in UTF-8 would be: M O R Á L E S = 4d 4f 52 c3 81 4c 45 53
    raw = raw.replace(b'MOR\xc3\x81LES', b'MORALES')
    raw = raw.replace(b'Mor\xc3\xa1les', b'Morales')
    raw = raw.replace(b'System\xc3\xa1s', b'Systems')
    raw = raw.replace(b'system\xc3\xa1s', b'systems')
    # Also the replacement char U+FFFD = EF BF BD
    raw = raw.replace(b'MOR\xef\xbf\xbdLES', b'MORALES')
    raw = raw.replace(b'System\xef\xbf\xbds', b'Systems')

    if raw != original:
        with open(filepath, 'wb') as f:
            f.write(raw)
        modified += 1
        print(f'Fixed bytes: {filepath}')

print(f'Done. {modified} files fixed.')
