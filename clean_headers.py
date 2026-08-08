import os
import glob
import re

html_files = glob.glob('*.html') + glob.glob('docs/*.html')

header_pattern = re.compile(r'(<!--\s*Header\s*-->\s*)?<header.*?</header>', re.IGNORECASE | re.DOTALL)

fixed_count = 0

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    headers = header_pattern.finditer(content)
    
    new_content = content
    changes_made = False
    
    for match in reversed(list(headers)):
        header_text = match.group(0)
        # If it doesn't contain the specific background gradient or MORALES PLUMBING, it's a legacy one
        if "135deg, #0A192F" not in header_text and "MORALES PLUMBING OFFICIAL HEADER" not in content[max(0, match.start()-100):match.start()]:
            if "ORION" in header_text or "role=\"banner\"" in header_text or "class=\"site-header\"" in header_text:
                if filepath == "index.html":
                    continue # Keep index.html as is, or we might break the main nav
                
                # We will only remove if it's a subpage (docs/) 
                if 'docs' in filepath:
                    new_content = new_content[:match.start()] + new_content[match.end():]
                    changes_made = True

    if changes_made:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned headers in {os.path.basename(filepath)}")
        fixed_count += 1

print(f"Done. Cleaned {fixed_count} files.")
