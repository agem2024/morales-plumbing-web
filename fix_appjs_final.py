import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    '"lp_f2_d": "Diseo en tarjetas interactivas e ilustraciones tcnicas detalladas por Inteligencia Artificial."': '"lp_f2_d": "Diseño en tarjetas interactivas e ilustraciones técnicas detalladas por Inteligencia Artificial."',
    '"lp_f2_d": "Diseo en tarjetas interactivas e ilustraciones tcnicas detalladas por Inteligencia Artificial."': '"lp_f2_d": "Diseño en tarjetas interactivas e ilustraciones técnicas detalladas por Inteligencia Artificial."',
    '"lp_t1_d": "\\"No pensque fuera tan fcil. Cambila vlvula del inodoro siguiendo los 4 pasos grficos en 15 minutos y me ahorr$150 USD de un fontanero. Excelente gua!\\""': '"lp_t1_d": "\\"No pensé que fuera tan fácil. Cambié la válvula del inodoro siguiendo los 4 pasos gráficos en 15 minutos y me ahorré $150 USD de un fontanero. ¡Excelente guía!\\""',
    '"lp_t1_d": "\\"No pensque fuera tan fcil. Cambila vlvula del inodoro siguiendo los 4 pasos grficos en 15 minutos y me ahorr$150 USD de un fontanero. Excelente gua!\\""': '"lp_t1_d": "\\"No pensé que fuera tan fácil. Cambié la válvula del inodoro siguiendo los 4 pasos gráficos en 15 minutos y me ahorré $150 USD de un fontanero. ¡Excelente guía!\\""',
    '"lp_a1": "Absolutamente no. Todas las guas de este portal fueron curadas asumiendo que nunca has tocado una pinza en tu vida. Empezamos desde lo ms bsico."': '"lp_a1": "Absolutamente no. Todas las guías de este portal fueron curadas asumiendo que nunca has tocado una pinza en tu vida. Empezamos desde lo más básico."',
    '"lp_a2": "La gran mayora de las reparaciones aqulistadas utilizan insumos que cuestan menos de $20 dlares, o incluso cosas que ya tienes en casa como Vinagre o Jabn."': '"lp_a2": "La gran mayoría de las reparaciones aquí listadas utilizan insumos que cuestan menos de $20 dólares, o incluso cosas que ya tienes en casa como Vinagre o Jabón."',
    '"lp_a3": "Todas las guas inician con el paso de seguridad ms importante (como cerrar la llave de paso). Si algo sale mal, tu casa estsegura. Adems, nuestro asistente Joe AI estdisponible para ayudarte."': '"lp_a3": "Todas las guías inician con el paso de seguridad más importante (como cerrar la llave de paso). Si algo sale mal, tu casa está segura. Además, nuestro asistente Joe AI está disponible para ayudarte."',
    '"lp_a3": "Todas las guas inician con el paso de seguridad ms importante (como cerrar la llave de paso). Si algo sale mal, tu casa estsegura. Adems, nuestro asistente Joe AI estdisponible para ayudarte."': '"lp_a3": "Todas las guías inician con el paso de seguridad más importante (como cerrar la llave de paso). Si algo sale mal, tu casa está segura. Además, nuestro asistente Joe AI está disponible para ayudarte."',
    '"lp_f1_d": "Conoce exactamente qumateriales econmicos comprar en tu ferretera local."': '"lp_f1_d": "Conoce exactamente qué materiales económicos comprar en tu ferretería local."',
    '"lp_f4": "Rpido"': '"lp_f4": "Rápido"',
    '"lp_f4_d": "La mayora de estas 20 reparaciones maestras toman menos de una hora en completarse."': '"lp_f4_d": "La mayoría de estas 20 reparaciones maestras toman menos de una hora en completarse."',
    '"lp_t3_d": "\\"Mi lavabo ola fatal. Gracias al truco del aereador y el vinagre, no tuve que gastar en limpiadores qumicos costosos. Funcionperfecto!\\""': '"lp_t3_d": "\\"Mi lavabo olía fatal. Gracias al truco del aereador y el vinagre, no tuve que gastar en limpiadores químicos costosos. ¡Funcionó perfecto!\\""',
    '"lp_q2": "Cunto dinero aproximado gastaren materiales?"': '"lp_q2": "¿Cuánto dinero aproximado gastaré en materiales?"',
    '"lp_q3": "Y si cometo un error y rompo algo?"': '"lp_q3": "¿Y si cometo un error y rompo algo?"'
}

count = 0
for old, new in replacements.items():
    if old in content:
        content = content.replace(old, new)
        count += 1

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Done fixing {count} corrupted strings in app.js")
