import re

with open("index.html", "r", encoding="utf-8") as f:
    idx = f.read()

# The bad block is between line 530 and 540.
# It looks like:
#                    <!-- ES VERSION: Video + Infographic -->
#                    <div class="lang-es">
#                        <video src="assets/videos/morales_plumbing__innovacion.mp4" controls preload="metadata" style="max-width: 100%; border-radius: 15px; border: 1px solid rgba(0,245,255,0.3); margin-bottom: 20px;"></video>
#                        <img src="assets/images/innovacion_en_plomeria_con_ia.png" style="max-width: 600px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.5); margin: 0 auto; display: block;" alt="Innovacin IA">
#                    </div>
#
#                </div>
#
#                

# Wait, there's also an EN version? Let's check!
# Actually, I'll just use a regex to delete anything matching that video source from the #home section.

home_match = re.search(r'<section id="home".*?</section>', idx, re.DOTALL | re.IGNORECASE)
if home_match:
    home_section = home_match.group(0)
    # Remove the video block inside home
    new_home = re.sub(r'<!-- ES VERSION: Video \+ Infographic -->\s*<div class="lang-es">.*?</div>\s*</div>\s*', '</div>\n', home_section, flags=re.DOTALL)
    
    idx = idx.replace(home_section, new_home)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(idx)
    print("Cleaned up #home duplicate videos.")
else:
    print("Could not find #home section.")
