import re

files = [
    r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\diy_hub.html",
    r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\hazlo_tu_mismo.html"
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    original = content
    
    # Fix 1: broken YouTube URLs - resultssearch_query -> results?search_query
    content = content.replace(
        'youtube.com/resultssearch_query=',
        'youtube.com/results?search_query='
    )
    
    # Fix 2: broken image paths with version tags - e.g. diy_aerator.pngv=5 -> diy_aerator.png
    # Pattern: .png or .webp followed by v=N
    content = re.sub(r'\.(png|webp|jpg|jpeg|gif|svg)(v=\d+)', r'.\1', content)
    
    # Also fix ?v=N appended to images
    content = re.sub(r'\.(png|webp|jpg|jpeg|gif|svg)\?v=\d+', r'.\1', content)
    
    changes = content != original
    
    if changes:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Count fixes
        yt_fixes = original.count('resultssearch_query=') 
        img_fixes = len(re.findall(r'\.(png|webp|jpg|jpeg|gif|svg)v=\d+', original))
        print(f"Fixed: {filepath.split(chr(92))[-1]}")
        print(f"  YouTube URLs fixed: {yt_fixes}")
        print(f"  Image path glitches fixed: {img_fixes}")
    else:
        print(f"No changes needed: {filepath.split(chr(92))[-1]}")
