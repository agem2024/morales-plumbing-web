with open("index.html", "r", encoding="utf-8") as f:
    idx = f.read()

def get_div_balance(text):
    return text.count("<div") - text.count("</div>")

print(f"Total div balance: {get_div_balance(idx)}")
