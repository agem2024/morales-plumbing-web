import os
import re

file_path = "tarjeta_presentacion.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Move video from header to full-screen background
# Right now we have:
#     <div class="video-header">
#         <div class="lang-switcher">...</div>
#         <video autoplay loop muted playsinline>
#             <source src="assets/morales_logo_video.mp4" type="video/mp4">
#         </video>
#         <div class="video-overlay">
#             <div class="slogan" id="t_slogan">Un Plomero En Tu Bolsillo</div>
#         </div>
#     </div>

# Let's extract the lang-switcher, the video, and the slogan and restructure the HTML.
# But instead of parsing HTML with regex which is brittle, let's just do targeted string replacements.

old_html_video_header = """    <div class="video-header">
        <div class="lang-switcher">
            <button class="lang-btn active" onclick="setLang('es', this)">ES</button>
            <button class="lang-btn" onclick="setLang('en', this)">EN</button>
            <button class="lang-btn" onclick="setLang('zh', this)">ZH</button>
            <button class="lang-btn" onclick="setLang('tl', this)">TL</button>
            <button class="lang-btn" onclick="setLang('vi', this)">VI</button>
        </div>
        <video autoplay loop muted playsinline>
            <source src="assets/morales_logo_video.mp4" type="video/mp4">
        </video>
        <div class="video-overlay">
            <div class="slogan" id="t_slogan">Un Plomero En Tu Bolsillo</div>
        </div>
    </div>"""

new_html_structure = """    <!-- FULL SCREEN VIDEO BACKGROUND -->
    <div class="video-bg-container">
        <video autoplay loop muted playsinline class="video-bg">
            <source src="assets/morales_logo_video.mp4" type="video/mp4">
        </video>
        <div class="video-bg-overlay"></div>
    </div>

    <div class="lang-switcher">
        <button class="lang-btn active" onclick="setLang('es', this)">ES</button>
        <button class="lang-btn" onclick="setLang('en', this)">EN</button>
        <button class="lang-btn" onclick="setLang('zh', this)">ZH</button>
        <button class="lang-btn" onclick="setLang('tl', this)">TL</button>
        <button class="lang-btn" onclick="setLang('vi', this)">VI</button>
    </div>
"""
if old_html_video_header in content:
    content = content.replace(old_html_video_header, new_html_structure)

# In the card-body, we need to add the slogan that we removed from the header
old_company_header = """        <div class="company-header">
            <img src="assets/logo_portada.png" alt="Morales Logo" class="logo-static">
            <div>
                <h1 class="company-name">MORALES<br>PLUMBING</h1>
            </div>
        </div>
        <div class="license" style="text-align: left; padding-left: 75px; margin-top: -5px;">C-36 #<span>1156542</span></div>"""

new_company_header = """        <div class="company-header">
            <img src="assets/logo_portada.png" alt="Morales Logo" class="logo-static">
            <div>
                <h1 class="company-name">MORALES<br>PLUMBING</h1>
            </div>
        </div>
        <div style="text-align: left; padding-left: 75px; margin-top: -5px;">
            <div class="license" style="margin-bottom: 5px;">C-36 #<span>1156542</span></div>
            <div style="font-family: 'Orbitron'; font-size: 1.1rem; color: var(--neon-lime); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                CEO: <span style="color: #fff;">Alex G Espinosa</span>
            </div>
            <div class="slogan" id="t_slogan" style="text-align: left; font-size: 0.9rem;">Un Plomero En Tu Bolsillo</div>
        </div>"""

if old_company_header in content:
    content = content.replace(old_company_header, new_company_header)

# Now fix the CSS
# Remove video-header css and add video-bg-container CSS
css_to_remove = r"""        \.video-header \{
            width: 100%;
            height: 35vh;
            min-height: 250px;
            position: relative;
            overflow: hidden;
            border-bottom: 2px solid var\(--neon-cyan\);
            flex-shrink: 0;
        \}
        \.video-header video \{
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0\.6;
        \}
        \.video-overlay \{
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient\(to bottom, rgba\(0,0,0,0\.1\) 0%, rgba\(0,0,0,0\.9\) 100%\);
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding-bottom: 20px;
        \}"""

new_css = """        .video-bg-container {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            z-index: -2;
            overflow: hidden;
        }
        .video-bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: blur(8px);
            transform: scale(1.1); /* Prevents blur bleeding edges */
        }
        .video-bg-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(5, 5, 5, 0.7); /* Dark overlay to make text readable */
            z-index: -1;
        }
        .card-container {
            background: transparent !important; /* Make container transparent to see video */
        }"""

content = re.sub(css_to_remove, new_css, content, flags=re.MULTILINE|re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated video to full screen blurred background and added CEO info.")
