import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add link to Portal Documental in the navbar
nav_item = '<li><a href="docs/portal_documental.html" data-i18n="nav_docs">Documentos</a></li>\n                '
content = content.replace('<li><a href="#services"', nav_item + '<li><a href="#services"')

# 2. Add Podcast episodes
podcast_html = """
                        <div class="pod-item" id="item-ai_sledgehammer">
                            <div class="pod-info">
                                <span class="pod-ep">Ep Especial (EN)</span>
                                <span class="pod-title">AI Replaces the Plumber's Sledgehammer</span>
                            </div>
                            <button class="btn-play-pod" onclick="playPodcast('assets/podcasts/ai_replaces_the_plumber_s_sledgehammer.m4a', 'item-ai_sledgehammer')">▶</button>
                        </div>
                        <div class="pod-item" id="item-ia_militar">
                            <div class="pod-info">
                                <span class="pod-ep">Ep Especial (ES)</span>
                                <span class="pod-title">Fontaneros con IA y Tecnología Militar</span>
                            </div>
                            <button class="btn-play-pod" onclick="playPodcast('assets/podcasts/fontaneros_con_ia_y_tecnologia_militar.m4a', 'item-ia_militar')">▶</button>
                        </div>
"""
# Find where the podcasts are listed
if '<div class="podcast-list">' in content:
    content = content.replace('<div class="podcast-list">', '<div class="podcast-list">\n' + podcast_html)

# 3. Add Tech Hub / ORION Ecosystem Infographics and Videos
# The Orion ecosystem section has eco-cards. We can add a full-width banner at the start of #ecosystem
ecosystem_media = """
                <!-- MULTIMEDIA SHOWCASE -->
                <div style="margin-bottom: 50px; text-align: center;">
                    
                    <!-- EN VERSION: Video + Infographics -->
                    <div class="lang-en" style="display: none;">
                        <video src="assets/videos/ai_in_bluecollar_trades.mp4" controls preload="metadata" style="max-width: 100%; border-radius: 15px; border: 1px solid rgba(0,245,255,0.3); margin-bottom: 20px;"></video>
                        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                            <img src="assets/images/morales_plumbing_ai_technology_infographic.png" style="max-width: 48%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);" alt="AI Technology">
                            <img src="assets/images/morales_plumbing_aiintegrated_services.png" style="max-width: 48%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);" alt="AI Services">
                        </div>
                    </div>

                    <!-- ES VERSION: Video + Infographic -->
                    <div class="lang-es">
                        <video src="assets/videos/morales_plumbing__innovacion.mp4" controls preload="metadata" style="max-width: 100%; border-radius: 15px; border: 1px solid rgba(0,245,255,0.3); margin-bottom: 20px;"></video>
                        <img src="assets/images/innovacion_en_plomeria_con_ia.png" style="max-width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);" alt="Innovación IA">
                    </div>

                </div>
"""
content = content.replace('<!-- NEW ECOSYSTEM MODULES (High-Fidelity) -->', ecosystem_media + '<!-- NEW ECOSYSTEM MODULES (High-Fidelity) -->')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated index.html")
