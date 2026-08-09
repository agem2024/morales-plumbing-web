
# Diagnose the exact bytes around MOR?LES
with open('docs/cv.html', 'rb') as f:
    raw = f.read()

idx = raw.find(b'MOR')
while idx != -1:
    chunk = raw[idx:idx+8]
    print(f'At {idx}: {chunk} = {chunk.hex()}')
    idx = raw.find(b'MOR', idx+1)
    if idx > 50000:  # stop after reasonable scan
        break
