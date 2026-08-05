with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Fix the cookie banner issue where it has two display properties
old_style = 'style="display:none; position:fixed; bottom:0; left:0; right:0; background:rgba(10,25,47,0.97); border-top:2px solid #D4AF37; padding:16px 24px; z-index:99999; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; font-family:\'Inter\',sans-serif; font-size:0.82rem; color:#a0aec0;"'
new_style = 'style="display:none; position:fixed; bottom:0; left:0; right:0; background:rgba(10,25,47,0.97); border-top:2px solid #D4AF37; padding:16px 24px; z-index:99999; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; font-family:\'Inter\',sans-serif; font-size:0.82rem; color:#a0aec0;"'

if old_style in content:
    content = content.replace(old_style, new_style)
    print("Fixed cookie banner style (exact match)")
else:
    # Try regex
    import re
    content = re.sub(r'display:flex;\s*align-item.s:center;', r'align-items:center;', content)
    print("Fixed cookie banner style (regex)")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
