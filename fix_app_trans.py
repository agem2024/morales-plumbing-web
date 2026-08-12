import json

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

en_additions = '''
        "lbl_tecnico": "Technical Specialist",
        "qs_tab_plumbing": "General Plumbing",
        "qs_tab_bathroom": "Baths & Remodeling",
        "qs_tab_heaters": "Water Heaters",
        "qs_tab_leaks": "Leak Detection",
        "qs_tab_repipe": "Re-Pipe",
        "qs_tab_ai": "AI Diagnosis",
        "qs_plumb_t1": "Pipe Repair",
        "qs_plumb_d1": "Professional diagnosis and repair of broken, clogged or leaking pipes.",
        "qs_btn_call": "Call:",
        "qs_plumb_t2": "24/7 Emergencies",
        "qs_plumb_d2": "Flooding, burst pipes or total loss of water. We respond without evaluation cost.",
        "qs_btn_emerg": "Emergency Now",
        "qs_plumb_t3": "Plumbing Inspection",
        "qs_plumb_d3": "Complete evaluation for home purchase/sale. Detailed report with thermography.",
        "qs_btn_insp": "Request Inspection",
'''

es_additions = '''
        "lbl_tecnico": "Especialista Técnico",
        "qs_tab_plumbing": "Plomería General",
        "qs_tab_bathroom": "Baños y Remodelación",
        "qs_tab_heaters": "Water Heaters",
        "qs_tab_leaks": "Detección de Fugas",
        "qs_tab_repipe": "Re-Pipe",
        "qs_tab_ai": "AI Diagnosis",
        "qs_plumb_t1": "Reparación de Tuberías",
        "qs_plumb_d1": "Diagnóstico y reparación profesional de tuberías rotas, obstruidas o filtradas en cualquier parte del hogar.",
        "qs_btn_call": "Llamar:",
        "qs_plumb_t2": "Emergencias 24/7",
        "qs_plumb_d2": "Inundaciones, tuberías reventadas o pérdida total de agua. Respondemos en San José sin costo de evaluación.",
        "qs_btn_emerg": "Emergencia Ahora",
        "qs_plumb_t3": "Inspección de Plomería",
        "qs_plumb_d3": "Evaluación completa para compra/venta de vivienda. Reporte detallado con termografía incluida.",
        "qs_btn_insp": "Solicitar Inspección",
'''

# Find the start of English and Spanish blocks and inject
content = content.replace('"en": {', '"en": {' + en_additions)
content = content.replace('"es": {', '"es": {' + es_additions)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Translations added to app.js")
