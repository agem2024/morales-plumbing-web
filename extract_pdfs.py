import os
import sys

def extract_pdf(pdf_path, txt_path):
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted with PyMuPDF: {os.path.basename(pdf_path)}")
        return True
    except ImportError:
        pass
        
    try:
        import PyPDF2
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted with PyPDF2: {os.path.basename(pdf_path)}")
        return True
    except ImportError:
        pass
        
    print(f"FAILED (No library): {os.path.basename(pdf_path)}")
    return False

# Find the PDFs
backup_dir = r"C:\Users\alexp\Documentos_Locales_Backup\Morales plumbing\V.01 web"
scratch_dir = r"C:\Users\alexp\.gemini\antigravity\brain\ae4997d2-a3cc-4cd3-aa74-bb80e7d54cf7\scratch"

pdfs = [
    "Directiva de Propiedad Intelectual_ Protocolo de Identidad Visual y Protección Legal de Morales Plumbing.pdf",
    "El Futuro de la Plomería_ Guía de Introducción a la Era de la IA.pdf",
    "Morales_AI_Plumbing.pdf",
    "Plan Estratégico Operativo_ Transformación Digital Morales Plumbing mediante el Ecosistema Orion Tech.pdf",
    "Ver lo Invisible_ La Ciencia de la Detección Térmica de Fugas con Morales Plumbing.pdf"
]

for p in pdfs:
    pdf_path = os.path.join(backup_dir, p)
    if os.path.exists(pdf_path):
        txt_path = os.path.join(scratch_dir, p.replace(".pdf", ".txt"))
        extract_pdf(pdf_path, txt_path)
    else:
        print(f"Not found: {p}")
