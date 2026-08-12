import os
import glob
import re
import codecs

# Scan videos
videos_dir = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\assets\videos"
video_files = glob.glob(os.path.join(videos_dir, "*.mp4"))
video_html = ""
for v in video_files:
    fname = os.path.basename(v)
    title = fname.replace(".mp4", "").replace("_", " ").title()
    video_html += f'''
        <div class="media-card" onclick="openLightbox('../assets/videos/{fname}', 'video')">
            <div class="card-img-container">
                <video src="../assets/videos/{fname}" muted preload="metadata"></video>
                <i class="fas fa-play-circle play-icon"></i>
            </div>
            <div class="card-content">
                <h3>{title}</h3>
                <p>Video de Morales Plumbing</p>
            </div>
        </div>'''

# Scan podcasts
podcasts_dir = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\assets\podcasts"
# only get base podcasts or all of them? The user has _es, _en, etc.
# Just list all of them, or try to group them. Let's list all .m4a
podcast_files = glob.glob(os.path.join(podcasts_dir, "*.m4a"))
podcast_html = ""
for p in podcast_files:
    fname = os.path.basename(p)
    title = fname.replace(".m4a", "").replace("_", " ").title()
    podcast_html += f'''
        <div class="media-card" style="cursor: default;">
            <div class="card-content">
                <h3 style="font-size: 1rem; margin-bottom: 5px;"><i class="fas fa-podcast" style="color:var(--cyan); margin-right:10px;"></i>{title}</h3>
                <audio class="audio-player" controls preload="none">
                    <source src="../assets/podcasts/{fname}" type="audio/mp4">
                    Tu navegador no soporta el elemento de audio.
                </audio>
            </div>
        </div>'''

# Read multimedia.html
html_path = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\docs\multimedia.html"
with codecs.open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace video section
video_pattern = r'(<h2 class="section-title" data-i18n="multi_video_title">Videos Destacados</h2>\s*<div class="media-grid">).*?(</div>\s*<h2 class="section-title" data-i18n="multi_pod_title">Podcasts</h2>)'
content = re.sub(video_pattern, r'\1' + video_html + r'\n    \2', content, flags=re.DOTALL)

# Replace podcast section
podcast_pattern = r'(<h2 class="section-title" data-i18n="multi_pod_title">Podcasts</h2>\s*<div class="media-grid">).*?(</div>\s*<!-- Lightbox Modal -->)'
content = re.sub(podcast_pattern, r'\1' + podcast_html + r'\n    \2', content, flags=re.DOTALL)

with codecs.open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated multimedia.html with all videos and podcasts.")
