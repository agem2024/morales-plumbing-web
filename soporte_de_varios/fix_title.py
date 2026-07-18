with open('app.js', 'r', encoding='utf-8') as f:
    appjs_content = f.read()

appjs_content = appjs_content.replace('"htm_title": "Hazlo Tú Mismo (DIY)",', '"htm_title": "Hazlo Tú Mismo",')
appjs_content = appjs_content.replace('"htm_title": "自己动手做 (DIY)",', '"htm_title": "自己动手做",')
appjs_content = appjs_content.replace('"htm_title": "Gawin Mo Mismo (DIY)",', '"htm_title": "Gawin Mo Mismo",')
appjs_content = appjs_content.replace('"htm_title": "Tự làm (DIY)",', '"htm_title": "Tự làm",')
appjs_content = appjs_content.replace('"htm_title": "Hazlo Tú Mismo (DIY)",', '"htm_title": "Hazlo Tú Mismo",') # for es
# for en it was "Hazlo Tú Mismo (DIY)" wait let me check what it was.
appjs_content = appjs_content.replace('"htm_title": "Hazlo Tú Mismo (DIY)",', '"htm_title": "Hazlo Tú Mismo",')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs_content)
    
print("Removed DIY from htm_title in app.js")
