import os
from PIL import Image

assets_dir = 'assets/images'
png_files = [
    'morales_plumbing_ai_technology_infographic.png',
    'innovacion_en_plomeria_con_ia.png',
    'morales_plumbing_aiintegrated_services.png'
]

for filename in png_files:
    filepath = os.path.join(assets_dir, filename)
    if os.path.exists(filepath):
        print(f'Converting {filename} to WebP...')
        img = Image.open(filepath)
        # Convert to RGB if RGBA, webp supports alpha but saving as RGB reduces size more if transparency isn't needed. 
        # But infographics might need transparency, so we will preserve RGBA.
        webp_path = os.path.join(assets_dir, filename.replace('.png', '.webp'))
        img.save(webp_path, 'webp', quality=85)
        print(f'Saved {webp_path}')
        
        # We can also resize if the image is too large. 
        # But the user asked for "formatos web para evitar el peso", WebP usually takes care of that.
        
        # Get sizes
        original_size = os.path.getsize(filepath) / (1024*1024)
        new_size = os.path.getsize(webp_path) / (1024*1024)
        print(f'Size reduced from {original_size:.2f} MB to {new_size:.2f} MB')
