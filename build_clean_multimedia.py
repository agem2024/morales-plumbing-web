import re
import codecs
import os

index_path = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\index.html"
with codecs.open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract head
head_match = re.search(r'(<!DOCTYPE html>.*?</nav>)', index_content, flags=re.DOTALL | re.IGNORECASE)
head_str = head_match.group(1) if head_match else ""
head_str = head_str.replace('href="css/', 'href="../css/')
head_str = head_str.replace('href="assets/', 'href="../assets/')
head_str = head_str.replace('src="assets/', 'src="../assets/')
head_str = head_str.replace('href="index.html"', 'href="../index.html"')
head_str = head_str.replace('src="app.js"', 'src="../app.js"')
# We also need to fix internal links that are now relative
head_str = head_str.replace('href="#', 'href="../index.html#')

# Extract footer
footer_match = re.search(r'(<footer.*?>.*?</footer>.*?</body>)', index_content, flags=re.DOTALL | re.IGNORECASE)
footer_str = footer_match.group(1) if footer_match else ""
footer_str = footer_str.replace('src="app.js"', 'src="../app.js"')
footer_str = footer_str.replace('src="assets/', 'src="../assets/')

# Extract multimedia section
section_match = re.search(r'(<section id="multimedia" class="page-section">.*?)</section>', index_content, flags=re.DOTALL)
multi_section = section_match.group(1) + "\n</section>" if section_match else ""

multi_section = multi_section.replace('src="assets/', 'src="../assets/')
multi_section = multi_section.replace('data-audio="assets/', 'data-audio="../assets/')
multi_section = multi_section.replace("'assets/", "'../assets/")

galleries_html = """
            <div class="podcast-grid" style="margin-bottom: 40px;">
                <div class="podcast-group glass">
                    <div class="group-header">
                        <i class="fas fa-images" style="font-size: 2rem; color: var(--neon-cyan); margin-right: 15px;"></i>
                        <h3 data-i18n="galleries_title">Galerías Visuales (Subcarpetas)</h3>
                    </div>
                    <div class="podcast-list">
                        <div class="pod-item" onclick="window.location.href='comics.html'" style="cursor: pointer;">
                            <div class="pod-info">
                                <span class="pod-badge deep-dive" style="background: var(--neon-orange);">CÓMICS</span>
                                <h4>Cómics Educativos</h4>
                                <p style="font-size: 0.8rem; color: #ccc;">Historias visuales de Morales Plumbing</p>
                            </div>
                            <button class="btn-play-pod"><i class="fas fa-arrow-right"></i></button>
                        </div>
                        <div class="pod-item" onclick="window.location.href='publicidad.html'" style="cursor: pointer;">
                            <div class="pod-info">
                                <span class="pod-badge" style="background: var(--neon-blue);">PUBLICIDAD</span>
                                <h4>Publicidad y Banners</h4>
                                <p style="font-size: 0.8rem; color: #ccc;">Campañas y promociones</p>
                            </div>
                            <button class="btn-play-pod"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
"""

multi_section = re.sub(r'(<div class="section-title">.*?</div>)', r'\1\n' + galleries_html, multi_section, flags=re.DOTALL)

final_html = head_str + "\n<main style='padding-top: 100px;'>\n" + multi_section + "\n</main>\n" + footer_str

script_block = """
<script>
    function playPodcast(btnOrUrl, id) {
        let url = typeof btnOrUrl === 'string' ? btnOrUrl : btnOrUrl.getAttribute('data-audio');
        let player = document.getElementById('global-player');
        if(!player) {
            player = document.createElement('audio');
            player.id = 'global-player';
            player.controls = true;
            player.style.position = 'fixed';
            player.style.bottom = '20px';
            player.style.left = '50%';
            player.style.transform = 'translateX(-50%)';
            player.style.zIndex = '9999';
            player.style.boxShadow = '0 0 20px var(--neon-cyan)';
            document.body.appendChild(player);
        }
        player.src = url;
        player.play();
    }
</script>
"""
final_html = final_html.replace('</body>', script_block + '\n</body>')

output_path = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs\multimedia.html"
with codecs.open(output_path, 'w', encoding='utf-8') as f:
    f.write(final_html)

print("multimedia.html rebuilt with clean encoding")
