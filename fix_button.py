import re

files = [
    r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\index.html",
    r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\docs\quick_services.html"
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    original = content
    
    # We want to replace navigate('contact') with openClientPortal() & switchPortalTab('schedule') 
    # but ONLY on the button that has data-i18n="qs_btn_insp" (Solicitar Inspeccion)
    
    pattern = r"onclick=\"navigate\('contact'\);\s*return false;\"(.*?data-i18n=\"qs_btn_insp\")"
    replacement = r"onclick=\"if(typeof openClientPortal === 'function'){openClientPortal(); switchPortalTab('schedule');} else {window.location.href='../index.html#contact';} return false;\"\1"
    
    # For index.html, it's just openClientPortal(), for docs/quick_services.html it might need window.parent if it's an iframe, or just link back to index.
    # Wait, the portal is rendered in index.html. If quick_services.html doesn't have the portal, calling openClientPortal() won't work.
    
    if "index.html" in filepath:
        content = re.sub(pattern, r"onclick=\"openClientPortal(); switchPortalTab('schedule'); return false;\"\1", content)
    else:
        # For quick_services, redirect to index.html with a query param or hash?
        # A simpler way: if the portal is included in the page (it is not in quick_services), it works.
        # Actually in quick_services it says href="#contact" onclick="navigate('contact')". Quick services might be embedded or a standalone page.
        # Just safely checking if the function exists.
        content = re.sub(pattern, r"onclick=\"if(typeof openClientPortal === 'function'){openClientPortal(); switchPortalTab('schedule');} else {window.location.href='../index.html?portal=schedule';} return false;\"\1", content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {filepath}")
    else:
        print(f"No changes: {filepath}")
