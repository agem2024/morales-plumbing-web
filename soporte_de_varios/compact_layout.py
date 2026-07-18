import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Reduce paddings and font sizes to make it compact
css_replacements = [
    (r'padding: 100px 20px;', r'padding: 40px 20px;'),
    (r'padding: 80px 20px;', r'padding: 30px 20px;'),
    (r'font-size: 3\.5rem;', r'font-size: 2.2rem;'),
    (r'font-size: 2\.5rem;', r'font-size: 1.8rem;'),
    (r'margin-bottom: 50px;', r'margin-bottom: 20px;'),
    (r'margin-bottom: 40px;', r'margin-bottom: 15px;'),
    (r'margin-bottom: 30px;', r'margin-bottom: 15px;'),
    (r'margin-bottom: 25px;', r'margin-bottom: 15px;'),
    (r'padding: 30px 20px;', r'padding: 15px;'),
    (r'padding: 30px;', r'padding: 15px;'),
    (r'font-size: 1\.3rem;', r'font-size: 1rem;'),
    (r'font-size: 1\.2rem;', r'font-size: 1rem;'),
    (r'font-size: 1\.1rem;', r'font-size: 0.9rem;'),
    (r'font-size: 3rem;', r'font-size: 2rem;'),
]

for old, new in css_replacements:
    htm_content = re.sub(old, new, htm_content)

# Move the search section higher up! Above Testimonials and FAQ!
# Let's extract search-section and put it right after the Hero, so people can search immediately!
# Or at least right after the Hook.

# Let's completely rework the order of the body.
# <header class="lp-hero">
# <section class="faq-hero" id="search-section"> ...
# <div class="diy-container"> ... tasks ...
# <section class="lp-hook">
# <section class="lp-features">
# <section class="lp-testimonials">
# <section class="lp-faq">

# Wait, if we move the tasks to the middle, it is much more navigable.
# Let's use regex to extract the sections.

hero_match = re.search(r'<header class="lp-hero">.*?</header>', htm_content, re.DOTALL)
hook_match = re.search(r'<section class="lp-hook">.*?</section>', htm_content, re.DOTALL)
feat_match = re.search(r'<section class="lp-features">.*?</section>', htm_content, re.DOTALL)
test_match = re.search(r'<section class="lp-testimonials">.*?</section>', htm_content, re.DOTALL)
faq_match = re.search(r'<section class="lp-faq">.*?</section>', htm_content, re.DOTALL)

# Delete them from current position
for section in [hero_match, hook_match, feat_match, test_match, faq_match]:
    if section:
        htm_content = htm_content.replace(section.group(0), '')

# Construct new body order
new_body = ""
if hero_match: new_body += hero_match.group(0) + '\n'

# Put hook and features in a compact side-by-side or just smaller layout below hero
if hook_match: new_body += hook_match.group(0) + '\n'
if feat_match: new_body += feat_match.group(0) + '\n'

# Now we insert this before search-section
htm_content = htm_content.replace('<section id="search-section" class="faq-hero"', new_body + '<section id="search-section" class="faq-hero"')

# Put Testimonials and FAQ AT THE VERY BOTTOM, before scripts
bottom_sections = ""
if test_match: bottom_sections += test_match.group(0) + '\n'
if faq_match: bottom_sections += faq_match.group(0) + '\n'

htm_content = htm_content.replace('<script>', bottom_sections + '<script>')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Compacted CSS and reordered HTML")
