import re
c = open('index.html', encoding='utf-8', errors='ignore').read()
c = re.sub(
    r'<a href="https://www\.youtube\.com/@moralesplumbing".*?>&gt; YOUTUBE.*?</a>',
    r'<a href="https://www.youtube.com/@moralesplumbing" target="_blank" class="t-link subscribe-btn" style="color: white; background: #ff0000; padding: 5px 10px; border-radius: 5px; display: inline-block; margin-top: 10px; font-weight: bold; border: 1px solid #cc0000; text-decoration: none;">&gt; YOUTUBE: ¡Suscríbete a Morales Plumbing!</a>',
    c, flags=re.IGNORECASE
)
open('index.html', 'w', encoding='utf-8').write(c)
