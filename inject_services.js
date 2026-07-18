const fs = require('fs');
const services = [
    { id: 'blocked_drains', name: 'Blocked Drains', img: 'assets/blocked_drains_repair.png', descEn: 'Fast and efficient blocked drain cleaning using advanced hydro-jetting.', descEs: 'Limpieza rápida y eficiente de drenajes obstruidos usando hidrolavado avanzado.' },
    { id: 'burst_pipe', name: 'Burst Pipe Repairs', img: 'assets/burst_pipe_emergency.png', descEn: '24/7 emergency response for burst pipe detection and repair.', descEs: 'Respuesta de emergencia 24/7 para detección y reparación de tuberías rotas.' },
    { id: 'leaking_taps', name: 'Leaking Taps', img: 'assets/leaking_tap_repair.png', descEn: 'Precision tap repairs and cartridge replacements to stop water waste.', descEs: 'Reparación de grifos con precisión y reemplazo de cartuchos para evitar el desperdicio de agua.' },
    { id: 'leak_detection', name: 'Leak Detection', img: 'assets/leak_detection_tech.png', descEn: 'Non-invasive leak detection using acoustic and thermal imaging tech.', descEs: 'Detección de fugas no invasiva utilizando tecnología acústica y de imagen térmica.' },
    { id: 'bathroom_reno', name: 'Bathroom Renovations', img: 'assets/bathroom_renovations.png', descEn: 'Complete high-end bathroom plumbing renovations and fixture installations.', descEs: 'Renovaciones completas de plomería para baños de alta gama e instalaciones de accesorios.' },
    { id: 'gas_plumbing_svc', name: 'Gas Plumbing', img: 'assets/gas_plumbing_safety.png', descEn: 'Safe and certified gas line installations, leak tests, and repairs.', descEs: 'Instalaciones de líneas de gas seguras y certificadas, pruebas de fugas y reparaciones.' },
    { id: 'stormwater', name: 'Stormwater Drains', img: 'assets/stormwater_drains.png', descEn: 'Stormwater management, drain clearing, and preventative maintenance.', descEs: 'Gestión de aguas pluviales, limpieza de drenajes y mantenimiento preventivo.' },
    { id: 'backflow', name: 'Backflow Prevention', img: 'assets/backflow_prevention.png', descEn: 'Annual testing, certification, and installation of backflow prevention devices.', descEs: 'Pruebas anuales, certificación e instalación de dispositivos de prevención de reflujo.' },
    { id: 'pipe_relining', name: 'Pipe Relining', img: 'assets/pipe_relining_tech.png', descEn: 'Trenchless pipe relining for seamless, no-dig sewer repair solutions.', descEs: 'Revestimiento de tuberías sin zanja para soluciones de reparación de alcantarillado sin excavación.' },
    { id: 'drain_camera', name: 'Drain Camera Inspections', img: 'assets/drain_camera.png', descEn: 'High-definition drain camera inspections for accurate diagnostics.', descEs: 'Inspecciones de drenaje con cámara de alta definición para diagnósticos precisos.' },
    { id: 'cctv_pipe', name: 'CCTV Pipe Inspection', img: 'assets/cctv_pipe.png', descEn: 'Advanced CCTV pipeline mapping and structural integrity reporting.', descEs: 'Mapeo avanzado de tuberías por CCTV e informes de integridad estructural.' }
];

let html = fs.readFileSync('index.html', 'utf8');

// Inject into HTML
let newCards = services.map(s => `
                <div class="service-card glass">
                    <div class="icon">
                        <img src="${s.img}" alt="${s.name}" style="width: 80px; height: 80px; border-radius: 50%; filter: drop-shadow(0 0 10px var(--neon-cyan)); object-fit: cover;">
                    </div>
                    <h4 data-i18n="svc_${s.id}_title">${s.name}</h4>
                    <p data-i18n="svc_${s.id}_desc">${s.descEs}</p>
                    <a href="docs/svc_${s.id}.html" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>`).join('');

if (html.includes('            </div>\r\n        </section>')) {
    html = html.replace('            </div>\r\n        </section>', newCards + '\n            </div>\r\n        </section>');
} else {
    html = html.replace('            </div>\n        </section>', newCards + '\n            </div>\n        </section>');
}
fs.writeFileSync('index.html', html, 'utf8');
console.log('Cards injected to index.html!');

// Now create the subpages
const template = fs.readFileSync('docs/plumbing_general.html', 'utf8'); // Assuming plumbing_general is a good template

for (const s of services) {
    let subpageHtml = template.replace(/data-i18n="[^"]+"/g, (match) => {
        // Just remove data-i18n for simple page setup, or map to dynamic translation
        return '';
    });
    // Very basic subpage generation
    subpageHtml = subpageHtml.replace(/<title>.*?<\/title>/, `<title>${s.name} - Morales Plumbing</title>`);
    subpageHtml = subpageHtml.replace(/<h1.*?>.*?<\/h1>/, `<h1 class="graffiti-3d-metallic" style="font-size: 3.5rem; margin-bottom: 20px;">${s.name}</h1>`);
    subpageHtml = subpageHtml.replace(/<p class="hero-desc".*?>.*?<\/p>/, `<p class="hero-desc" style="font-size: 1.2rem; color: #cbd5e1; max-width: 800px; margin: 0 auto; line-height: 1.6;">${s.descEs}</p>`);
    
    // Inject the specific image
    const imgTag = `<img src="../${s.img}" alt="${s.name}" style="width: 100%; max-width: 600px; margin: 2rem auto; display: block; border-radius: 12px; box-shadow: 0 0 20px rgba(0,245,255,0.3);">`;
    subpageHtml = subpageHtml.replace(/<\/header>/, `</header>\n${imgTag}`);

    // Some fake content
    const content = `
    <section class="page-section" style="padding: 4rem 2rem;">
        <div class="glass" style="max-width: 1000px; margin: 0 auto; padding: 2rem;">
            <h2 style="color: var(--neon-cyan); margin-bottom: 1rem;">¿Por qué ocurre este problema?</h2>
            <p style="color: #cbd5e1; margin-bottom: 2rem;">${s.name} es un servicio crucial. Los problemas relacionados ocurren debido al envejecimiento de los materiales, la presión inadecuada, el desgaste natural y los factores ambientales. Es fundamental abordar estas situaciones rápidamente para evitar daños mayores a la infraestructura.</p>
            
            <h2 style="color: var(--neon-orange); margin-bottom: 1rem;">Metodología de Trabajo</h2>
            <ul style="color: #cbd5e1; list-style-type: disc; padding-left: 2rem; margin-bottom: 2rem;">
                <li>Inspección y Diagnóstico de alta precisión usando tecnología no invasiva.</li>
                <li>Presupuesto transparente y detallado.</li>
                <li>Ejecución del servicio con herramientas de grado industrial.</li>
                <li>Pruebas de control de calidad y garantía de satisfacción.</li>
            </ul>

            <h2 style="color: var(--neon-lime); margin-bottom: 1rem;">¿Qué debe hacer el cliente?</h2>
            <p style="color: #cbd5e1; margin-bottom: 2rem;">Si experimenta problemas relacionados con <strong>${s.name}</strong>, cierre la válvula de paso principal si hay fuga de agua o gas, y contáctenos inmediatamente. No intente reparaciones si no tiene el entrenamiento adecuado.</p>
            
            <div style="text-align: center; margin-top: 3rem;">
                <button onclick="window.location.href='../index.html'" class="btn-outline" style="border-color: var(--neon-purple); color: var(--neon-purple);">← Volver a Servicios</button>
                <button onclick="window.parent.openBooking()" class="btn-primary-glow" style="margin-left: 1rem;">Agendar Servicio Ahora</button>
            </div>
        </div>
    </section>`;
    
    // Replace the main tag
    subpageHtml = subpageHtml.replace(/<main>[\s\S]*?<\/main>/, `<main>${content}</main>`);

    fs.writeFileSync(`docs/svc_${s.id}.html`, subpageHtml, 'utf8');
}
console.log('Subpages generated!');

// Update app.js
let appJs = fs.readFileSync('app.js', 'utf8');

// We need to inject into the 'en' block and 'es' block
const injectTranslations = (blockName, langCode) => {
    const blockStart = appJs.indexOf(`${blockName}: {`);
    if (blockStart === -1) return;
    const blockEnd = appJs.indexOf('},', blockStart);
    
    let injectedKeys = '';
    for (const s of services) {
        injectedKeys += `\n        "svc_${s.id}_title": "${langCode === 'en' ? s.name : s.name}",`;
        injectedKeys += `\n        "svc_${s.id}_desc": "${langCode === 'en' ? s.descEn : s.descEs}",`;
    }
    
    appJs = appJs.substring(0, blockStart + blockName.length + 3) + injectedKeys + appJs.substring(blockStart + blockName.length + 3);
};

injectTranslations('en', 'en');
injectTranslations('es', 'es');

fs.writeFileSync('app.js', appJs, 'utf8');
console.log('app.js updated!');
