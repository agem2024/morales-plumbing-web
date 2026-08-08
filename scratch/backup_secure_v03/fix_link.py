with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace('href="docs/water_heaters.html"', 'href="docs/service_water_heater.html"')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated water heaters link in index.html")
