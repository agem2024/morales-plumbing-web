import os

trans = {
    'en': {
        "lp_h1": "Become a Home Expert",
        "lp_sub": "The ultimate step-by-step guide to repair and improve your home without spending hundreds of dollars on service calls or complex tools.",
        "lp_cta1": "Start Building & Fixing!",
        "lp_hook_title": "Afraid of DIY Repairs?",
        "lp_hook_desc": "Plumbing emergencies are stressful, but 80% of common problems can be solved by anyone in under 30 minutes. Save money and lose the fear of failure: our visual guides are designed specifically for absolute beginners.",
        "lp_feat_title": "What's in Our Visual Hub?",
        "lp_f1": "Exact List", "lp_f1_d": "Know exactly what cheap materials to buy at your local hardware store.",
        "lp_f2": "100% Visual", "lp_f2_d": "Interactive card design and detailed technical illustrations by AI.",
        "lp_f3": "Zero Risk", "lp_f3_d": "PRO tips and clear safety instructions to avoid disasters or flooding.",
        "lp_f4": "Fast", "lp_f4_d": "Most of these 20 master repairs take less than an hour to complete.",
        "lp_test_title": "Success Stories from Our Community",
        "lp_t1_d": '"I didn\'t think it would be so easy. I changed the toilet valve following the 4 graphical steps in 15 minutes and saved $150 USD. Excellent guide!"',
        "lp_t1_n": "- Maria G., Los Angeles",
        "lp_t2_d": '"Changing the main house filter sounded scary, but with ORION\'s visual step-by-step and material calculator, I did it without spilling a drop."',
        "lp_t2_n": "- Carlos V., San Diego",
        "lp_t3_d": '"My sink smelled awful. Thanks to the aerator and vinegar trick, I didn\'t have to spend on expensive chemical cleaners. It worked perfectly!"',
        "lp_t3_n": "- Elena R., San Francisco",
        "lp_cta2": "Explore the 20 Master Guides",
        "lp_faq_title": "DIY Frequently Asked Questions",
        "lp_q1": "Do I need previous experience with tools?",
        "lp_a1": "Absolutely not. All the guides in this portal were curated assuming you've never touched pliers in your life. We start from the very basics.",
        "lp_q2": "Approximately how much money will I spend on materials?",
        "lp_a2": "The vast majority of the repairs listed here use supplies that cost less than $20 dollars, or even things you already have at home like Vinegar or Soap.",
        "lp_q3": "What if I make a mistake and break something?",
        "lp_a3": "All guides begin with the most important safety step (like turning off the water valve). If something goes wrong, your home is safe. Plus, our assistant Joe AI is available to help."
    },
    'es': {
        "lp_h1": "Transfórmate en un Experto en Casa",
        "lp_sub": "La guía definitiva paso a paso para reparar y mejorar tu hogar sin gastar cientos de dólares en visitas técnicas ni herramientas complejas.",
        "lp_cta1": "¡Empezar a Construir y Reparar!",
        "lp_hook_title": "¿Miedo a Repararlo Tú Mismo?",
        "lp_hook_desc": "Las emergencias de plomería son estresantes, pero el 80% de los problemas comunes pueden ser resueltos por cualquier persona en menos de 30 minutos. Ahorra dinero y pierde el miedo al fracaso: nuestras guías visuales están diseñadas específicamente para principiantes absolutos.",
        "lp_feat_title": "¿Qué Incluye Nuestro Hub Visual?",
        "lp_f1": "Lista Exacta", "lp_f1_d": "Conoce exactamente qué materiales económicos comprar en tu ferretería local.",
        "lp_f2": "100% Visual", "lp_f2_d": "Diseño en tarjetas interactivas e ilustraciones técnicas detalladas por Inteligencia Artificial.",
        "lp_f3": "Cero Riesgos", "lp_f3_d": "Trucos PRO e indicaciones claras de seguridad para evitar desastres o inundaciones.",
        "lp_f4": "Rápido", "lp_f4_d": "La mayoría de estas 20 reparaciones maestras toman menos de una hora en completarse.",
        "lp_test_title": "Historias de Éxito de Nuestra Comunidad",
        "lp_t1_d": '"No pensé que fuera tan fácil. Cambié la válvula del inodoro siguiendo los 4 pasos gráficos en 15 minutos y me ahorré $150 USD de un fontanero. ¡Excelente guía!"',
        "lp_t1_n": "- Maria G., Los Angeles",
        "lp_t2_d": '"Cambiar el filtro principal de la casa sonaba aterrador, pero con el paso a paso visual y la calculadora de materiales de ORION lo hice sin derramar una gota."',
        "lp_t2_n": "- Carlos V., San Diego",
        "lp_t3_d": '"Mi lavabo olía fatal. Gracias al truco del aereador y el vinagre, no tuve que gastar en limpiadores químicos costosos. ¡Funcionó perfecto!"',
        "lp_t3_n": "- Elena R., San Francisco",
        "lp_cta2": "Explorar las 20 Guías Maestras",
        "lp_faq_title": "Preguntas Frecuentes del DIY",
        "lp_q1": "¿Necesito experiencia previa con herramientas?",
        "lp_a1": "Absolutamente no. Todas las guías de este portal fueron curadas asumiendo que nunca has tocado una pinza en tu vida. Empezamos desde lo más básico.",
        "lp_q2": "¿Cuánto dinero aproximado gastaré en materiales?",
        "lp_a2": "La gran mayoría de las reparaciones aquí listadas utilizan insumos que cuestan menos de $20 dólares, o incluso cosas que ya tienes en casa como Vinagre o Jabón.",
        "lp_q3": "¿Y si cometo un error y rompo algo?",
        "lp_a3": "Todas las guías inician con el paso de seguridad más importante (como cerrar la llave de paso). Si algo sale mal, tu casa está segura. Además, nuestro asistente Joe AI está disponible para ayudarte."
    }
}

with open('app.js', 'r', encoding='utf-8') as f:
    appjs = f.read()

for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs:
        source_lang = lang if lang in trans else 'en'
        injected_str = "\n"
        for k, v in trans[source_lang].items():
            injected_str += f'        "{k}": "{v}",\n'
        appjs = appjs.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs)

print("Translations applied to app.js")
