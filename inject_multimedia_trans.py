import re

with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

new_keys_en = """        "multi_title": "Multimedia Hub - Morales Plumbing",
        "multi_sub_title": "Join our Community",
        "multi_sub_desc": "Subscribe to the official Morales Plumbing channel for more tutorials, podcasts, and innovations.",
        "multi_sub_btn": "Subscribe on YouTube",
        "multi_info_title": "Infographics",
        "multi_video_title": "Featured Videos",
        "multi_pod_title": "Podcasts",
        "multi_v_desc1": "The future of blue-collar trades powered by AI.",
        "multi_v_desc2": "Our commitment to technology.",
        "multi_v_desc3": "Meet our vision.",
"""
new_keys_es = """        "multi_title": "Hub Multimedia - Morales Plumbing",
        "multi_sub_title": "Únete a nuestra Comunidad",
        "multi_sub_desc": "Suscríbete al canal oficial de Morales Plumbing para más tutoriales, podcasts e innovaciones.",
        "multi_sub_btn": "Suscribirse en YouTube",
        "multi_info_title": "Infografías",
        "multi_video_title": "Videos Destacados",
        "multi_pod_title": "Podcasts",
        "multi_v_desc1": "El futuro de los oficios impulsado por la IA.",
        "multi_v_desc2": "Nuestro compromiso con la tecnología.",
        "multi_v_desc3": "Conoce nuestra visión.",
"""

app_js = re.sub(r'("en": \{.*?\n)(    "stats_years_num")', r'\g<1>' + new_keys_en + r'\g<2>', app_js, flags=re.DOTALL)
app_js = re.sub(r'("es": \{.*?\n)(    "stats_years_num")', r'\g<1>' + new_keys_es + r'\g<2>', app_js, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)
print("Injected multimedia translations into app.js")
