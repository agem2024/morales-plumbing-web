with open("index.html", "r", encoding="utf-8") as f:
    idx = f.read()

def get_tag_balance(text, tag):
    return text.count(f"<{tag}") - text.count(f"</{tag}>")

print(f"Total section balance: {get_tag_balance(idx, 'section')}")
print(f"Total div balance: {get_tag_balance(idx, 'div')}")
