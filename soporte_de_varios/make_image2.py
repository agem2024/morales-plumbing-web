import urllib.request
from PIL import Image, ImageFilter, ImageEnhance
import os
import ssl

url = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Power_socket_and_copper_pipe_for_a_balcony_washing_machine%2C_Hillegersberg%2C_Rotterdam_%282021%29_05.jpg"
out_path = "assets/diy_washer_hoses.png"

try:
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, context=ctx) as response, open("temp.jpg", 'wb') as out_file:
        data = response.read()
        out_file.write(data)
    
    img = Image.open("temp.jpg")
    
    # Crop to a square-ish aspect ratio
    width, height = img.size
    min_dim = min(width, height)
    left = (width - min_dim)/2
    top = (height - min_dim)/2
    right = (width + min_dim)/2
    bottom = (height + min_dim)/2
    img = img.crop((left, top, right, bottom))
    img = img.resize((512, 512))
    
    # Save
    img.save(out_path)
    os.remove("temp.jpg")
    print("Created diy_washer_hoses.png")
except Exception as e:
    print("Error:", e)
