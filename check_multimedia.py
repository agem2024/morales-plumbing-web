with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

start = content.find('<section id="multimedia"')
if start != -1:
    end = content.find('<section id="testimonials"', start)
    with open("multimedia_section_dump.txt", "w", encoding="utf-8") as out:
        out.write(content[start:end])
else:
    with open("multimedia_section_dump.txt", "w", encoding="utf-8") as out:
        out.write("Could not find multimedia section")
