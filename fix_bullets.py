import glob
import re

files = glob.glob(r'C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\req_*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    # We replace the corrupted CSS content property with a unicode triangle \25B6
    # Pattern looks for .req-list li::before { content: 'something';
    original = content
    content = re.sub(r"(\.req-list\s+li::before\s*\{\s*content:\s*)'[^']*'", r"\1'\\25B6'", content)
    
    # Also just in case they used double quotes
    content = re.sub(r'(\.req-list\s+li::before\s*\{\s*content:\s*)"[^"]*"', r'\1"\\25B6"', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {filepath}")
    else:
        print(f"No changes: {filepath}")
