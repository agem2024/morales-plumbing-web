import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# 1. Inject CSS
lp_css = """
        /* --- LANDING PAGE CSS --- */
        .lp-hero {
            background: linear-gradient(rgba(8,14,36,0.85), rgba(8,14,36,0.95)), url('../assets/service_training.png') center/cover;
            padding: 100px 20px;
            text-align: center;
            border-bottom: 3px solid var(--cyan);
        }
        .lp-hero h1 { font-size: 3.5rem; color: #fff; text-shadow: 0 0 15px var(--cyan); font-family: 'Orbitron', sans-serif; margin-bottom: 20px; }
        .lp-hero p { font-size: 1.3rem; color: #ccc; max-width: 800px; margin: 0 auto 40px; line-height: 1.6; }
        .lp-cta-btn { display: inline-block; padding: 15px 40px; background: var(--orange); color: #080e24; font-size: 1.3rem; font-weight: bold; border-radius: 8px; text-decoration: none; text-transform: uppercase; transition: transform 0.2s; box-shadow: 0 0 20px rgba(255,140,0,0.5); font-family: 'Orbitron'; }
        .lp-cta-btn:hover { transform: scale(1.05); }

        .lp-hook { padding: 80px 20px; text-align: center; background: #0a1128; }
        .lp-hook h2 { color: var(--cyan); font-size: 2.5rem; font-family: 'Orbitron'; margin-bottom: 25px; }
        .lp-hook p { font-size: 1.2rem; color: #eee; max-width: 700px; margin: auto; line-height: 1.6; }

        .lp-features { padding: 80px 20px; background: #080e24; }
        .lp-features h2 { text-align: center; color: #fff; font-size: 2.5rem; font-family: 'Orbitron'; margin-bottom: 50px; }
        .lp-feat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; max-width: 1000px; margin: auto; }
        .lp-feat-card { text-align: center; padding: 30px 20px; background: rgba(0,245,255,0.05); border: 1px solid rgba(0,245,255,0.2); border-radius: 10px; transition: transform 0.3s; }
        .lp-feat-card:hover { transform: translateY(-10px); border-color: var(--cyan); }
        .lp-feat-card i { font-size: 3rem; color: var(--cyan); margin-bottom: 20px; text-shadow: 0 0 10px var(--cyan); }
        .lp-feat-card h4 { color: var(--orange); font-size: 1.3rem; margin-bottom: 15px; }
        .lp-feat-card p { color: #ccc; line-height: 1.5; }

        .lp-testimonials { padding: 80px 20px; background: #0a1128; text-align: center; }
        .lp-testimonials h2 { color: var(--cyan); font-size: 2.5rem; font-family: 'Orbitron'; margin-bottom: 50px; }
        .lp-test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1000px; margin: auto; }
        .lp-test-card { background: rgba(255,255,255,0.05); padding: 30px; border-radius: 10px; border-left: 5px solid var(--orange); text-align: left; font-style: italic; }
        .lp-test-card p { font-size: 1.1rem; color: #ddd; line-height: 1.6; }
        .lp-test-card h4 { margin-top: 20px; color: var(--cyan); text-align: right; }

        .lp-faq { padding: 80px 20px; background: #080e24; max-width: 800px; margin: auto; }
        .lp-faq h2 { text-align: center; color: #fff; font-size: 2.5rem; font-family: 'Orbitron'; margin-bottom: 50px; }
        .lp-faq-item { margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
        .lp-faq-item h4 { color: var(--orange); font-size: 1.3rem; margin-bottom: 15px; }
        .lp-faq-item p { color: #ccc; line-height: 1.6; font-size: 1.1rem; }
        
        @media (max-width: 768px) {
            .lp-hero h1 { font-size: 2.2rem; }
            .lp-hero p { font-size: 1.1rem; }
            .lp-hook h2, .lp-features h2, .lp-testimonials h2, .lp-faq h2 { font-size: 2rem; }
        }
"""
htm_content = htm_content.replace('</style>', lp_css + '\n    </style>')

# 2. Inject HTML
lp_html = """
    <!-- LANDING PAGE HERO -->
    <header class="lp-hero">
        <div class="lp-hero-content">
            <h1 data-i18n="lp_h1">Transfórmate en un Experto en Casa</h1>
            <p data-i18n="lp_sub">La guía definitiva paso a paso para reparar y mejorar tu hogar sin gastar cientos de dólares en visitas técnicas ni herramientas complejas.</p>
            <a href="#search-section" class="lp-cta-btn" data-i18n="lp_cta1">¡Empezar a Construir y Reparar!</a>
        </div>
    </header>

    <!-- EL GANCHO -->
    <section class="lp-hook">
        <h2 data-i18n="lp_hook_title">¿Miedo a Repararlo Tú Mismo?</h2>
        <p data-i18n="lp_hook_desc">Las emergencias de plomería son estresantes, pero el 80% de los problemas comunes pueden ser resueltos por cualquier persona en menos de 30 minutos. Ahorra dinero y pierde el miedo al fracaso: nuestras guías visuales están diseñadas específicamente para principiantes absolutos.</p>
    </section>

    <!-- CARACTERÍSTICAS -->
    <section class="lp-features">
        <h2 data-i18n="lp_feat_title">¿Qué Incluye Nuestro Hub Visual?</h2>
        <div class="lp-feat-grid">
            <div class="lp-feat-card">
                <i class="fas fa-list-check"></i>
                <h4 data-i18n="lp_f1">Lista Exacta</h4>
                <p data-i18n="lp_f1_d">Conoce exactamente qué materiales económicos comprar en tu ferretería local.</p>
            </div>
            <div class="lp-feat-card">
                <i class="fas fa-camera"></i>
                <h4 data-i18n="lp_f2">100% Visual</h4>
                <p data-i18n="lp_f2_d">Diseño en tarjetas interactivas e ilustraciones técnicas detalladas por Inteligencia Artificial.</p>
            </div>
            <div class="lp-feat-card">
                <i class="fas fa-shield-halved"></i>
                <h4 data-i18n="lp_f3">Cero Riesgos</h4>
                <p data-i18n="lp_f3_d">Trucos PRO e indicaciones claras de seguridad para evitar desastres o inundaciones.</p>
            </div>
            <div class="lp-feat-card">
                <i class="fas fa-stopwatch"></i>
                <h4 data-i18n="lp_f4">Rápido</h4>
                <p data-i18n="lp_f4_d">La mayoría de estas 20 reparaciones maestras toman menos de una hora en completarse.</p>
            </div>
        </div>
    </section>

    <!-- TESTIMONIOS -->
    <section class="lp-testimonials">
        <h2 data-i18n="lp_test_title">Historias de Éxito de Nuestra Comunidad</h2>
        <div class="lp-test-grid">
            <div class="lp-test-card">
                <p data-i18n="lp_t1_d">"No pensé que fuera tan fácil. Cambié la válvula del inodoro siguiendo los 4 pasos gráficos en 15 minutos y me ahorré $150 USD de un fontanero. ¡Excelente guía!"</p>
                <h4 data-i18n="lp_t1_n">- Maria G., Los Angeles</h4>
            </div>
            <div class="lp-test-card">
                <p data-i18n="lp_t2_d">"Cambiar el filtro principal de la casa sonaba aterrador, pero con el paso a paso visual y la calculadora de materiales de ORION lo hice sin derramar una gota."</p>
                <h4 data-i18n="lp_t2_n">- Carlos V., San Diego</h4>
            </div>
            <div class="lp-test-card">
                <p data-i18n="lp_t3_d">"Mi lavabo olía fatal. Gracias al truco del aereador y el vinagre, no tuve que gastar en limpiadores químicos costosos. ¡Funcionó perfecto!"</p>
                <h4 data-i18n="lp_t3_n">- Elena R., San Francisco</h4>
            </div>
        </div>
        <a href="#search-section" class="lp-cta-btn" style="margin-top: 50px;" data-i18n="lp_cta2">Explorar las 20 Guías Maestras</a>
    </section>

    <!-- FAQ DIY -->
    <section class="lp-faq">
        <h2 data-i18n="lp_faq_title">Preguntas Frecuentes del DIY</h2>
        <div class="lp-faq-item">
            <h4 data-i18n="lp_q1">¿Necesito experiencia previa con herramientas?</h4>
            <p data-i18n="lp_a1">Absolutamente no. Todas las guías de este portal fueron curadas asumiendo que nunca has tocado una pinza en tu vida. Empezamos desde lo más básico.</p>
        </div>
        <div class="lp-faq-item">
            <h4 data-i18n="lp_q2">¿Cuánto dinero aproximado gastaré en materiales?</h4>
            <p data-i18n="lp_a2">La gran mayoría de las reparaciones aquí listadas utilizan insumos que cuestan menos de $20 dólares, o incluso cosas que ya tienes en casa como Vinagre o Jabón.</p>
        </div>
        <div class="lp-faq-item">
            <h4 data-i18n="lp_q3">¿Y si cometo un error y rompo algo?</h4>
            <p data-i18n="lp_a3">Todas las guías inician con el paso de seguridad más importante (como cerrar la llave de paso). Si algo sale mal, tu casa está segura. Además, nuestro asistente Joe AI está disponible para ayudarte.</p>
        </div>
    </section>

"""

# Inject before faq-hero
htm_content = htm_content.replace('<section class="faq-hero">', lp_html + '\n    <section id="search-section" class="faq-hero" style="border-top: 3px solid var(--orange);">')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Landing page structure injected successfully.")
