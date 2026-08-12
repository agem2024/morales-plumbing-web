import os
import shutil

root_dir = "."
target_dir = "soporte_de_varios"

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

# Define core files that MUST remain in the root directory for the website to function
core_files = {
    "index.html",
    "tarjeta_presentacion.html",
    "app.js",
    "universe.js",
    "config.js",
    "pico-icons.js",
    "firebase-service.js",
    "firebase-config.js",
    "style.css",
    "universe.css",
    "contact_info.json",
    "sitemap.xml",
    "firebase.json",
    "firestore.indexes.json",
    "firestore.rules",
    "package.json",
    "package-lock.json",
    ".firebaserc",
    ".gitignore",
    ".git"
}

core_dirs = {
    "docs",
    "assets",
    "node_modules",
    "soporte_de_varios",
    ".git"
}

moved_files = []
moved_dirs = []

for item in os.listdir(root_dir):
    # skip target dir itself
    if item == target_dir:
        continue
    
    item_path = os.path.join(root_dir, item)
    
    if os.path.isfile(item_path):
        # Move all .py, .ps1, .png (like screenshot), and any .js that is NOT in core_files
        if item not in core_files:
            # We move it
            shutil.move(item_path, os.path.join(target_dir, item))
            moved_files.append(item)
    elif os.path.isdir(item_path):
        # Move any directories that are not core
        if item not in core_dirs:
            shutil.move(item_path, os.path.join(target_dir, item))
            moved_dirs.append(item)

print(f"Moved {len(moved_files)} files and {len(moved_dirs)} directories to {target_dir}.")
