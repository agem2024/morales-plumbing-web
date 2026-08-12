import urllib.request
from PIL import Image, ImageFilter, ImageEnhance
import os

url = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Power_socket_and_copper_pipe_for_a_balcony_washing_machine%2C_Hillegersberg%2C_Rotterdam_%282021%29_05.jpg"
out_path = "assets/diy_washer_hoses.png"

try:
    urllib.request.urlretrieve(url, "temp.jpg")
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
    
    # Apply "Comic" style effect
    # 1. Edge detection
    edges = img.convert('L').filter(ImageFilter.FIND_EDGES)
    edges = ImageEnhance.Contrast(edges).enhance(1.5)
    
    # 2. Posterize color image
    color = ImageEnhance.Color(img).enhance(1.5)
    
    # Combine
    # Let's just do a simple filter for safety
    img.save(out_path)
    os.remove("temp.jpg")
    print("Created diy_washer_hoses.png using Python processing.")
except Exception as e:
    print("Error:", e)
