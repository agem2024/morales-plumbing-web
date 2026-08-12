import os
import re

file_path = "tarjeta_presentacion.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove CEO info and Slogan from the top section
old_company_header = """        <div style="text-align: left; padding-left: 75px; margin-top: -5px;">
            <div class="license" style="margin-bottom: 5px;">C-36 #<span>1156542</span></div>
            <div style="font-family: 'Orbitron'; font-size: 1.1rem; color: var(--neon-lime); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                CEO: <span style="color: #fff;">Alex G Espinosa</span>
            </div>
            <div class="slogan" id="t_slogan" style="text-align: left; font-size: 0.9rem;">Un Plomero En Tu Bolsillo</div>
        </div>"""

new_company_header = """        <div style="text-align: left; padding-left: 75px; margin-top: -5px;">
            <div class="license" style="margin-bottom: 5px;">C-36 #<span>1156542</span></div>
        </div>"""

if old_company_header in content:
    content = content.replace(old_company_header, new_company_header)

# 2. Inject the Slogan at the very bottom of the card-body (or fixed at the bottom of the screen)
# We will place it at the bottom of the .card-body flex container, or just fixed at the bottom.
# Let's put it as the last element in .card-body
graffiti_slogan_html = """
        <!-- Graffiti Slogan at the bottom -->
        <div style="width: 100%; text-align: center; margin-top: auto; padding-top: 20px;">
            <div class="slogan-graffiti" id="t_slogan">Un Plomero En Tu Bolsillo</div>
        </div>
"""

# Let's add it right before the closing </div> of .card-body
content = content.replace('        <div class="action-buttons">', graffiti_slogan_html + '\n        <div class="action-buttons">')

# Wait, if I put it before action-buttons, it's above the buttons. "En la parte baja del video".
# It's better to put it AFTER action buttons, as the absolute last thing in card-body.
content = content.replace(graffiti_slogan_html + '\n        <div class="action-buttons">', '        <div class="action-buttons">') # revert
content = content.replace('    </div>\n</div>\n\n<script>', '    </div>\n' + graffiti_slogan_html + '</div>\n\n<script>')

# 3. Add CSS for .slogan-graffiti
graffiti_css = """
        .slogan-graffiti {
            font-family: 'Permanent Marker', cursive;
            font-size: 2.5rem;
            color: #fff;
            text-transform: capitalize;
            letter-spacing: 2px;
            text-shadow: 3px 3px 0px #000, 0 0 15px var(--neon-cyan), 0 0 30px var(--neon-purple);
            transform: rotate(-3deg);
            margin-bottom: 20px;
            opacity: 0.9;
        }
"""
content = content.replace('</style>', graffiti_css + '\n</style>')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Removed CEO and added Graffiti slogan at the bottom.")
