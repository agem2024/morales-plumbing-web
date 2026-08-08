import os

files = ['C:/Users/alexp/.gemini/antigravity/scratch/morales-repo-3/docs/cv.html', 
         'C:/Users/alexp/.gemini/antigravity/scratch/morales-repo-3/docs/ceo.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Fix the typographic/encoding artifacts specifically
    content = content.replace('áLEX', 'ALEX')
    content = content.replace('ESPINOSá', 'ESPINOSA')
    content = content.replace('álex', 'Alex')
    content = content.replace('Â·', '·')
    content = content.replace('â€”', '—')
    content = content.replace('úúnica', 'única')
    content = content.replace('áI', 'AI')
    content = content.replace('árchitect', 'Architect')
    content = content.replace('NáV', 'NAV')
    content = content.replace('Ã rea', 'Área')
    content = content.replace('áBS', 'ABS')
    content = content.replace('Whatsápp', 'WhatsApp')
    content = content.replace('automatización de intake', 'automatización de Intake')
    content = content.replace('áutomatización', 'Automatización')
    content = content.replace('ábrir', 'Abrir')
    content = content.replace('áños', 'Años')
    content = content.replace('Técúnica', 'Técnica')
    
    # Let's make the name formatting professional (Title Case rather than all caps)
    content = content.replace('ALEX G. ESPINOSA', 'Alex G. Espinosa')
    content = content.replace('ALEX ESPINOSA MORALES', 'Alex Espinosa Morales')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print('Applied exact typo fixes to cv.html and ceo.html')
