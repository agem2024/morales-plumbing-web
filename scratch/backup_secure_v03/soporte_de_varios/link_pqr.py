import os
import re

index_path = 'index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

injection = """
                        <div style="margin-top: 30px; text-align: center; border-top: 1px dashed var(--neon-cyan); padding-top: 20px;">
                            <h4 style="color: var(--neon-cyan); font-family: 'Orbitron';" data-i18n="diy_pqr_title">¿Prefieres Repararlo Tú Mismo? / Prefer to DIY?</h4>
                            <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;" data-i18n="diy_pqr_desc">Antes de abrir un ticket de reclamo, revisa nuestras guías visuales paso a paso para reparaciones menores.</p>
                            <a href="docs/hazlo_tu_mismo.html" class="portal-btn portal-btn-primary" style="background: rgba(0, 245, 255, 0.1); border-color: var(--neon-cyan); color: var(--neon-cyan); text-decoration: none; display: inline-block; text-align: center;" data-i18n="diy_pqr_btn">Ir a las Guías DIY / Go to DIY Hub</a>
                        </div>
                    </form>
"""

index_content = index_content.replace('</form>\n                </div>\n                \n                <!-- PROFILE TAB -->', injection + '                </div>\n                \n                <!-- PROFILE TAB -->')

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Linked PQR to Hazlo Tu Mismo")
