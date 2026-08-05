import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Clean up bad podcast items
bad_pod_html = r'<div class="pod-item" id="item-ai_sledgehammer">.*?</div>\s*<div class="pod-item" id="item-ia_militar">.*?</div>'
content = re.sub(bad_pod_html, '', content, flags=re.DOTALL)

# 2. Prepare the correct podcast items
good_pod_html = """
                        <!-- New V02 Podcasts -->
                        <div class="pod-item" id="item-ai_sledgehammer">
                            <div class="pod-info">
                                <span class="pod-badge deep-dive" data-i18n="pod_type_deep_dive">Deep Dive</span>
                                <span class="pod-lang">EN</span>
                                <h4 data-i18n="ai_sledgehammer_title">AI Replaces the Plumber's Sledgehammer</h4>
                            </div>
                            <button class="btn-play-pod" onclick="playPodcast('assets/podcasts/ai_replaces_the_plumber_s_sledgehammer.m4a', 'item-ai_sledgehammer')">
                                <span class="play-icon">▶</span> <span data-i18n="btn_listen">Listen Now</span>
                            </button>
                        </div>
                        <div class="pod-item" id="item-ia_militar">
                            <div class="pod-info">
                                <span class="pod-badge deep-dive" data-i18n="pod_type_deep_dive">Deep Dive</span>
                                <span class="pod-lang">ES</span>
                                <h4 data-i18n="ia_militar_title">Fontaneros con IA y Tecnología Militar</h4>
                            </div>
                            <button class="btn-play-pod" onclick="playPodcast('assets/podcasts/fontaneros_con_ia_y_tecnologia_militar.m4a', 'item-ia_militar')">
                                <span class="play-icon">▶</span> <span data-i18n="btn_listen">Listen Now</span>
                            </button>
                        </div>
"""
# Insert them ONLY into the first podcast list (MP Series)
content = content.replace('<div class="podcast-list">', '<div class="podcast-list">\n' + good_pod_html, 1)

# 3. Move the videos to the Multimedia section
# First remove them from Ecosystem
ecosystem_media_pattern = r'<!-- MULTIMEDIA SHOWCASE -->\s*<div style="margin-bottom: 50px; text-align: center;">.*?</div>\s*</div>'
content = re.sub(ecosystem_media_pattern, '', content, flags=re.DOTALL)

# Also remove the ORION ARTICLES buttons from Ecosystem so we can place them better
article_links_pattern = r'<!-- ORION ARTICLES -->\s*<div style="text-align: center; margin-bottom: 50px;.*?</div>'
content = re.sub(article_links_pattern, '', content, flags=re.DOTALL)

# Create a proper Video section inside Multimedia
video_section_html = """
            <!-- MULTIMEDIA: VIDEOS Y DOCUMENTALES -->
            <div class="section-title" style="margin-top: 60px;">
                <h2 data-i18n="video_title" class="graffiti-3d-metallic" style="font-size: 4rem;">Video Series & Docs</h2>
                <p data-i18n="video_subtitle">Vea nuestra tecnología en acción y descargue material técnico.</p>
            </div>
            
            <div style="text-align: center; margin-bottom: 50px;">
                <!-- EN VERSION: Video + Infographics -->
                <div class="lang-en" style="display: none;">
                    <video src="assets/videos/ai_in_bluecollar_trades.mp4" controls preload="metadata" style="width: 100%; max-width: 900px; border-radius: 15px; border: 1px solid rgba(0,245,255,0.3); margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></video>
                    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
                        <img src="assets/images/morales_plumbing_ai_technology_infographic.png" style="max-width: 48%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);" alt="AI Technology">
                        <img src="assets/images/morales_plumbing_aiintegrated_services.png" style="max-width: 48%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);" alt="AI Services">
                    </div>
                </div>

                <!-- ES VERSION: Video + Infographic -->
                <div class="lang-es">
                    <video src="assets/videos/morales_plumbing__innovacion.mp4" controls preload="metadata" style="width: 100%; max-width: 900px; border-radius: 15px; border: 1px solid rgba(0,245,255,0.3); margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></video>
                    <div style="margin-top: 20px;">
                        <img src="assets/images/innovacion_en_plomeria_con_ia.png" style="max-width: 900px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);" alt="Innovación IA">
                    </div>
                </div>
            </div>

            <!-- ORION ARTICLES BUTTONS -->
            <div style="text-align: center; margin-bottom: 50px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <a href="docs/inteligencia_artificial.html" class="btn-primary-glow" style="background: rgba(0, 245, 255, 0.1); color: #00f5ff; border: 1px solid #00f5ff; border-radius: 8px; padding: 12px 24px; text-decoration: none; font-weight: bold; transition: 0.3s;"><span style="margin-right:8px;">🤖</span> IA & Joe AI Article</a>
                <a href="docs/deteccion_termica.html" class="btn-primary-glow" style="background: rgba(212, 175, 55, 0.1); color: #D4AF37; border: 1px solid #D4AF37; border-radius: 8px; padding: 12px 24px; text-decoration: none; font-weight: bold; transition: 0.3s;"><span style="margin-right:8px;">🔥</span> Thermal Detection MSX</a>
            </div>
"""

# Find where the multimedia section ends, which is before <section id="testimonials" class="page-section">
testimonials_tag = '<section id="testimonials"'
if testimonials_tag in content:
    content = content.replace(testimonials_tag, video_section_html + '\n        ' + testimonials_tag)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed podcasts and moved videos to Multimedia section.")
