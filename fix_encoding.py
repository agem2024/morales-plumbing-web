import os
import glob

replacements = {
    'BÃ¡Ã¡QMD': 'BAAQMD',
    '200Ã¡': '200A',
    'IRÃ¡': 'IRA',
    'CÃ¡': 'CA',
    'Ã¡ire': 'Aire',
    'Ã¡gua': 'agua',
    'Ã¡tico': 'ático',
    'Ã¡ partir': 'a partir',
    'Ã¡[': 'A[',
    '--> Ã¡': '--> A',
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã ': 'Á',
    'Ã‰': 'É',
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Â¿': '¿',
    'Â¡': '¡',
    'Ã¼': 'ü',
    'Ã‘': 'Ñ'
}

docs_dir = os.path.join(os.getcwd(), 'docs')
html_files = glob.glob(os.path.join(docs_dir, '*.html'))

fixed_count = 0

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for bad, good in replacements.items():
        new_content = new_content.replace(bad, good)
        
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed encoding in {os.path.basename(file_path)}")
        fixed_count += 1

print(f"Done. Fixed {fixed_count} files.")
