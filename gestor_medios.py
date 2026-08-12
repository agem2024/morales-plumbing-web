import os
import glob
from PIL import Image
import json
import shutil

MAX_FILES = 15
DIRECTORIES = [
    r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\assets\publicidad",
    r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\assets\comics"
]
LANGUAGES = ['es', 'en', 'zh', 'vi', 'tl']

def process_directory(base_dir):
    all_data = []
    
    # Process each language folder
    for lang in LANGUAGES:
        lang_dir = os.path.join(base_dir, lang)
        if not os.path.exists(lang_dir):
            continue
            
        # Get all images in this language folder
        files = glob.glob(os.path.join(lang_dir, '*'))
        image_files = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
        
        # Sort by creation time (oldest first, or newest first?)
        # Let's sort by modification time, newest first
        image_files.sort(key=os.path.getmtime, reverse=True)
        
        # Enforce max files per language folder
        if len(image_files) > MAX_FILES:
            archive_dir = os.path.join(base_dir, 'archivo', lang)
            os.makedirs(archive_dir, exist_ok=True)
            
            # Move overflow files to archive
            for old_file in image_files[MAX_FILES:]:
                shutil.move(old_file, os.path.join(archive_dir, os.path.basename(old_file)))
                print(f"Archived {os.path.basename(old_file)} from {lang} to prevent overflow.")
            
            # Keep only the max files in our list
            image_files = image_files[:MAX_FILES]

        # Convert to WebP and add to data
        for img_path in image_files:
            filename = os.path.basename(img_path)
            
            # If not webp, convert it
            if not filename.lower().endswith('.webp'):
                new_path = os.path.splitext(img_path)[0] + '.webp'
                try:
                    with Image.open(img_path) as im:
                        im.save(new_path, 'webp')
                    os.remove(img_path) # Remove original
                    img_path = new_path
                    filename = os.path.basename(new_path)
                    print(f"Converted {filename} to WebP.")
                except Exception as e:
                    print(f"Failed to convert {filename}: {e}")
            
            # The path needs to be relative to the HTML file in docs/
            # If html is in docs/, and image is in assets/comics/es/img.webp
            # the web path is ../assets/comics/es/img.webp
            dir_name = os.path.basename(base_dir) # 'comics' or 'publicidad'
            web_path = f"../assets/{dir_name}/{lang}/{filename}"
            
            all_data.append({
                "filename": filename,
                "path": web_path,
                "lang": lang
            })
            
    # Output to data.js for local CORS-free loading
    var_name = "comicsData" if "comics" in base_dir else "publicidadData"
    js_content = f"const {var_name} = {json.dumps(all_data, indent=4)};\n"
    
    js_file = os.path.join(base_dir, "data.js")
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Generated {js_file} with {len(all_data)} items.")

if __name__ == "__main__":
    for d in DIRECTORIES:
        if os.path.exists(d):
            process_directory(d)
        else:
            print(f"Directory not found: {d}")
