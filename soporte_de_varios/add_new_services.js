const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const newCards = `
                <div class="service-card glass">
                    <div class="icon">
                        <img src="assets/service_wh.png" alt="Water Heaters" style="width: 80px; height: 80px; border-radius: 50%; filter: drop-shadow(0 0 10px var(--neon-cyan)); object-fit: cover;">
                    </div>
                    <h4 data-i18n="service_wh_title">Water Heaters</h4>
                    <p data-i18n="service_wh_desc">Mantenimiento, cambio e instalación.</p>
                    <a href="docs/eng_wh.html" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>
                <div class="service-card glass">
                    <div class="icon">
                        <img src="assets/service_valves.png" alt="Valves and Cartridges" style="width: 80px; height: 80px; border-radius: 50%; filter: drop-shadow(0 0 10px var(--neon-lime)); object-fit: cover;">
                    </div>
                    <h4 data-i18n="service_valves_title">Válvulas y Cartuchos</h4>
                    <p data-i18n="service_valves_desc">Cambio de válvulas para duchas, tinas y lavabos.</p>
                    <a href="docs/eng_valves.html" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>
                <div class="service-card glass">
                    <div class="icon">
                        <img src="assets/service_inspect.png" alt="Inspections" style="width: 80px; height: 80px; border-radius: 50%; filter: drop-shadow(0 0 10px var(--neon-blue)); object-fit: cover;">
                    </div>
                    <h4 data-i18n="service_inspect_title">Inspecciones</h4>
                    <p data-i18n="service_inspect_desc">Asesoría para viviendas nuevas, usadas y ampliaciones.</p>
                    <a href="docs/eng_inspect.html" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>
                <div class="service-card glass">
                    <div class="icon">
                        <img src="assets/service_training.png" alt="Training" style="width: 80px; height: 80px; border-radius: 50%; filter: drop-shadow(0 0 10px var(--neon-orange)); object-fit: cover;">
                    </div>
                    <h4 data-i18n="service_training_title">Capacitaciones</h4>
                    <p data-i18n="service_training_desc">Formación de personal para empresas asociadas.</p>
                    <a href="docs/eng_training.html" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>
                <div class="service-card glass">
                    <div class="icon">
                        <img src="assets/service_b2b.png" alt="B2B Partnerships" style="width: 80px; height: 80px; border-radius: 50%; filter: drop-shadow(0 0 10px var(--neon-purple)); object-fit: cover;">
                    </div>
                    <h4 data-i18n="service_b2b_title">Trabajos Especializados B2B</h4>
                    <p data-i18n="service_b2b_desc">Alianzas con empresas del trade para proyectos complejos.</p>
                    <a href="docs/eng_b2b.html" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>
            </div>`;

if (!html.includes('service_b2b.png')) {
    html = html.replace('</div>\r\n        </section>\r\n\r\n        <!-- ABOUT -->', newCards + '\r\n        </section>\r\n\r\n        <!-- ABOUT -->');
    html = html.replace('</div>\n        </section>\n\n        <!-- ABOUT -->', newCards + '\n        </section>\n\n        <!-- ABOUT -->');
    fs.writeFileSync('index.html', html);
    console.log('Updated index.html with 5 new cards.');
}

// 2. Create docs pages
const baseHtml = fs.readFileSync('docs/eng_eco.html', 'utf8');

const pages = [
    { name: 'eng_wh.html', key: 'wh', icon: 'service_wh.png' },
    { name: 'eng_valves.html', key: 'valves', icon: 'service_valves.png' },
    { name: 'eng_inspect.html', key: 'inspect', icon: 'service_inspect.png' },
    { name: 'eng_training.html', key: 'training', icon: 'service_training.png' },
    { name: 'eng_b2b.html', key: 'b2b', icon: 'service_b2b.png' }
];

pages.forEach(p => {
    let pContent = baseHtml;
    // Replace keys
    pContent = pContent.replace(/eng_eco_title/g, 'eng_' + p.key + '_title');
    pContent = pContent.replace(/eng_eco_desc/g, 'eng_' + p.key + '_desc');
    pContent = pContent.replace(/eng_eco_p1/g, 'eng_' + p.key + '_p1');
    pContent = pContent.replace(/eng_eco_p2/g, 'eng_' + p.key + '_p2');
    pContent = pContent.replace(/eng_eco_li1/g, 'eng_' + p.key + '_li1');
    pContent = pContent.replace(/eng_eco_li2/g, 'eng_' + p.key + '_li2');
    pContent = pContent.replace(/eng_eco_li3/g, 'eng_' + p.key + '_li3');
    
    // Replace image
    pContent = pContent.replace(/comic_eco\.png/g, p.icon);
    
    fs.writeFileSync('docs/' + p.name, pContent);
    console.log('Created docs/' + p.name);
});
