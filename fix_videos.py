import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

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

# Replace the exact anchor before Services
services_tag = '<!-- SERVICES -->'
if services_tag in content:
    content = content.replace(services_tag, video_section_html + '\n        ' + services_tag)
    print("Injected videos before Services.")
else:
    print("Could not find Services tag.")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
