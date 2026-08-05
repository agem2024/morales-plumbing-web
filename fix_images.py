with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Fix image styles for infographics
old_style1 = 'style="max-width: 48%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);"'
new_style1 = 'style="max-width: 400px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); background-color: #ffffff; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);"'
content = content.replace(old_style1, new_style1)

old_style2 = 'style="max-width: 900px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);"'
new_style2 = 'style="max-width: 600px; width: 100%; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); background-color: #ffffff; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);"'
content = content.replace(old_style2, new_style2)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed infographic images in index.html")
