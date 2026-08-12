with open("tarjeta_presentacion.html", "r", encoding="utf-8") as f:
    html = f.read()

# Add pointer-events: none; to .btn-video
old_css = """
            .btn-video {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                object-fit: cover;
                z-index: -1;
                opacity: 0.5;
            }
"""
new_css = """
            .btn-video {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                object-fit: cover;
                z-index: -1;
                opacity: 0.5;
                pointer-events: none;
            }
"""

if old_css.strip() in html:
    html = html.replace(old_css.strip(), new_css.strip())
    with open("tarjeta_presentacion.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Fixed pointer-events on .btn-video")
else:
    # Try more robust replacement
    if ".btn-video {" in html:
        html = html.replace("z-index: -1;", "z-index: -1;\n                pointer-events: none;")
        with open("tarjeta_presentacion.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("Fixed pointer-events on .btn-video (fallback method)")
    else:
        print("Could not find .btn-video CSS block.")
