import os
import glob
import json
import shutil
from PIL import Image

# Configuración
LIMIT_IMAGES = 15
DIRS = {
    'comics': {
        'active': 'assets/comics',
        'archive': 'assets/archivo/comics'
    },
    'publicidad': {
        'active': 'assets/publicidad',
        'archive': 'assets/archivo/publicidad'
    }
}

def get_language(filename):
    name = filename.lower()
    if '_en' in name or 'english' in name:
        return 'en'
    return 'es' # Default a español para todo lo demás

def process_directory(category):
    active_dir = DIRS[category]['active']
    archive_dir = DIRS[category]['archive']
    
    print(f"Procesando {active_dir}...")
    
    # 1. Convertir imagenes nuevas a WebP
    raw_files = []
    for ext in ['*.png', '*.jpg', '*.jpeg']:
        raw_files.extend(glob.glob(os.path.join(active_dir, ext)))
        
    for raw_file in raw_files:
        filename = os.path.basename(raw_file)
        webp_filename = os.path.splitext(filename)[0] + '.webp'
        webp_path = os.path.join(active_dir, webp_filename)
        
        try:
            print(f"Convirtiendo {filename} a WebP...")
            img = Image.open(raw_file)
            img.save(webp_path, 'webp', quality=80)
            os.remove(raw_file) # Eliminar el original pesado
        except Exception as e:
            print(f"Error procesando {raw_file}: {e}")
            
    # 2. Obtener la lista actual de WebP
    webp_files = glob.glob(os.path.join(active_dir, '*.webp'))
    
    # Ordenar por fecha de creacion/modificacion (mas viejo primero)
    webp_files.sort(key=lambda x: os.path.getmtime(x))
    
    # 3. Archivar exceso
    if len(webp_files) > LIMIT_IMAGES:
        excess = len(webp_files) - LIMIT_IMAGES
        print(f"Límite excedido por {excess} archivos. Archivando los más antiguos...")
        for i in range(excess):
            file_to_archive = webp_files[i]
            filename = os.path.basename(file_to_archive)
            dest = os.path.join(archive_dir, filename)
            print(f"Archivando {filename}")
            shutil.move(file_to_archive, dest)
            
    # 4. Generar data.json con los que quedaron
    # Volvemos a listar y esta vez ordenamos más nuevo primero
    current_files = glob.glob(os.path.join(active_dir, '*.webp'))
    current_files.sort(key=lambda x: os.path.getmtime(x), reverse=True)
    
    data = []
    for f in current_files:
        filename = os.path.basename(f)
        lang = get_language(filename)
        data.append({
            'filename': filename,
            'path': f"../{active_dir}/{filename}",
            'lang': lang
        })
        
    # Guardar json en la carpeta
    json_path = os.path.join(active_dir, 'data.json')
    with open(json_path, 'w', encoding='utf-8') as jf:
        json.dump(data, jf, indent=4, ensure_ascii=False)
        
    print(f"¡{category.capitalize()} procesado exitosamente! {len(data)} items activos.")
    print("-" * 40)

if __name__ == '__main__':
    for cat in DIRS.keys():
        process_directory(cat)
    print("Gestión de medios finalizada. Ya puedes actualizar la página web.")
