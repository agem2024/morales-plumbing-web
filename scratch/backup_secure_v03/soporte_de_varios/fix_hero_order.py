import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Fix CSS for lp-hero so it doesn't swallow image and clears nav
bad_hero_css = r"background: linear-gradient\(rgba\(8,14,36,0\.85\), rgba\(8,14,36,0\.95\)\), url\('\.\./assets/service_training\.png'\) center/cover;\s*padding: 40px 20px;\s*text-align: center;\s*border-bottom: 3px solid var\(--cyan\);"
good_hero_css = """background: linear-gradient(rgba(8,14,36,0.5), rgba(8,14,36,0.7)), url('../assets/service_training.png') center/cover;
            padding: 100px 20px 20px;
            text-align: center;
            border-bottom: 3px solid var(--cyan);"""
htm_content = re.sub(bad_hero_css, good_hero_css, htm_content)

# Now, completely reconstruct the body to ensure correct order
# 1. Extract pieces
hero_match = re.search(r'<header class="lp-hero">.*?</header>', htm_content, re.DOTALL)
hook_match = re.search(r'<section class="lp-hook">.*?</section>', htm_content, re.DOTALL)
feat_match = re.search(r'<section class="lp-features">.*?</section>', htm_content, re.DOTALL)
search_match = re.search(r'<section id="search-section" class="faq-hero" style="border-top: 3px solid var\(--orange\);">.*?</section>', htm_content, re.DOTALL)
diy_match = re.search(r'<div class="diy-container">.*?</div>\s*</div>\s*</div>', htm_content, re.DOTALL) # Match until end of diy-container
test_match = re.search(r'<section class="lp-testimonials">.*?</section>', htm_content, re.DOTALL)
faq_match = re.search(r'<section class="lp-faq">.*?</section>', htm_content, re.DOTALL)

# Let's just use string slicing to reorder the body.
# Find the start of the <header class="lp-hero">
start_idx = htm_content.find('<header class="lp-hero">')
# Find the start of <script>
end_idx = htm_content.find('<script>')

if start_idx != -1 and end_idx != -1:
    body_content = htm_content[start_idx:end_idx]
    
    # We will build a new body content from the extracted sections
    # Extract them reliably
    def extract_section(regex, content):
        m = re.search(regex, content, re.DOTALL)
        return m.group(0) if m else ""

    hero_html = extract_section(r'<header class="lp-hero">.*?</header>', body_content)
    hook_html = extract_section(r'<section class="lp-hook">.*?</section>', body_content)
    feat_html = extract_section(r'<section class="lp-features">.*?</section>', body_content)
    search_html = extract_section(r'<section id="search-section".*?</section>', body_content)
    
    # The diy_container extraction is tricky because it has nested divs. 
    # Let's extract everything from <div class="diy-container"> to before <section class="lp-testimonials">
    diy_start = body_content.find('<div class="diy-container">')
    test_start = body_content.find('<section class="lp-testimonials">')
    if test_start == -1: test_start = body_content.find('<section class="lp-faq">')
    if test_start == -1: test_start = len(body_content)
    diy_html = body_content[diy_start:test_start]

    test_html = extract_section(r'<section class="lp-testimonials">.*?</section>', body_content)
    faq_html = extract_section(r'<section class="lp-faq">.*?</section>', body_content)

    new_body = f"""
{hero_html}
{search_html}
{diy_html}
{hook_html}
{feat_html}
{test_html}
{faq_html}
"""
    htm_content = htm_content[:start_idx] + new_body + htm_content[end_idx:]

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Hazlo Tu Mismo Reordered and CSS Fixed")
