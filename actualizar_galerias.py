import os
import glob
import json
import shutil
import time

# Configuracion de rutas
ORIGEN_COMICS = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\comics"
ORIGEN_PUB = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\pubklicidadad"

DESTINO_ASSETS = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web\vo3.0\assets"
DESTINO_COMICS = os.path.join(DESTINO_ASSETS, "comics")
DESTINO_PUB = os.path.join(DESTINO_ASSETS, "publicidad")

IDIOMAS = ['es', 'en', 'tl', 'vi', 'zh']
MAX_IMAGES = 15

# Crear estructura inicial de idiomas si no existe
for base_origen in [ORIGEN_COMICS, ORIGEN_PUB]:
    if not os.path.exists(base_origen):
        os.makedirs(base_origen, exist_ok=True)
    for lang in IDIOMAS:
        os.makedirs(os.path.join(base_origen, lang), exist_ok=True)
        # Crear carpeta de archivo para desbordamiento
        os.makedirs(os.path.join(base_origen, lang, "archivo"), exist_ok=True)

for base_destino in [DESTINO_COMICS, DESTINO_PUB]:
    for lang in IDIOMAS:
        os.makedirs(os.path.join(base_destino, lang), exist_ok=True)

def parsear_carpeta(ruta_origen, ruta_destino_assets, sufijo_web, js_var_name, js_out_path):
    datos_completos = {lang: [] for lang in IDIOMAS}
    archivos_procesados = 0
    archivos_archivados = 0
    
    for lang in IDIOMAS:
        lang_origen = os.path.join(ruta_origen, lang)
        lang_archivo = os.path.join(lang_origen, "archivo")
        lang_destino = os.path.join(ruta_destino_assets, lang)
        
        # Buscar imagenes soportadas (ignorando carpeta archivo)
        imagenes = []
        for ext in ('*.png', '*.jpg', '*.jpeg', '*.webp', '*.gif'):
            imagenes.extend(glob.glob(os.path.join(lang_origen, ext)))
        
        # Ordenar por fecha de creacion, mas nuevas primero
        imagenes.sort(key=os.path.getctime, reverse=True)
        
        # Sistema de Límite (Auto-Archiving)
        if len(imagenes) > MAX_IMAGES:
            exceso = imagenes[MAX_IMAGES:]
            imagenes = imagenes[:MAX_IMAGES]
            for img_vieja in exceso:
                nombre = os.path.basename(img_vieja)
                shutil.move(img_vieja, os.path.join(lang_archivo, nombre))
                archivos_archivados += 1
                
        # Copiar las imagenes permitidas al destino web
        # (Para que funcionen siempre en la web y al subir al servidor)
        # Limpiar destino antes de copiar para asegurar sincro exacta
        for f in glob.glob(os.path.join(lang_destino, "*.*")):
            os.remove(f)
            
        for img in imagenes:
            nombre = os.path.basename(img)
            dest = os.path.join(lang_destino, nombre)
            shutil.copy2(img, dest)
            
            # Guardar la ruta relativa para usar en la web
            ruta_relativa = f"../assets/{sufijo_web}/{lang}/{nombre}"
            datos_completos[lang].append({
                "filename": nombre,
                "path": ruta_relativa
            })
            archivos_procesados += 1
            
    # Escribir el data.js
    with open(js_out_path, 'w', encoding='utf-8') as f:
        f.write(f"const {js_var_name} = {json.dumps(datos_completos, indent=4, ensure_ascii=False)};")
        
    return archivos_procesados, archivos_archivados

if __name__ == "__main__":
    print("Iniciando actualizacion de galerias de Morales Plumbing...")
    
    # Procesar Comics
    js_comics = os.path.join(DESTINO_COMICS, "data.js")
    proc_c, arch_c = parsear_carpeta(ORIGEN_COMICS, DESTINO_COMICS, "comics", "comicsData", js_comics)
    print(f"COMICS: Procesadas {proc_c} imagenes activas. ({arch_c} enviadas al archivo).")
    
    # Procesar Publicidad
    js_pub = os.path.join(DESTINO_PUB, "data.js")
    proc_p, arch_p = parsear_carpeta(ORIGEN_PUB, DESTINO_PUB, "publicidad", "publicidadData", js_pub)
    print(f"PUBLICIDAD: Procesadas {proc_p} imagenes activas. ({arch_p} enviadas al archivo).")
    
    print("=========================================")
    print("¡Exito! Las galerias locales han sido actualizadas y el codigo esta sincronizado.")
    print("El limite maximo es de 15 por carpeta. El resto se va automaticamente a 'archivo/'.")
