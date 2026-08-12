import re
txt = open('docs/ceo.html','r',encoding='utf-8').read()

# Show the actual anchor buttons
buttons = re.findall(r'<a href=[^>]+id="btn-(?:cv|pb)"[^>]*>.*?</a>', txt, re.DOTALL)
for b in buttons:
    print(repr(b[:300]))
    print('---')
