const fs = require('fs');
const file = 'docs/pricebook.html';
let html = fs.readFileSync(file, 'utf8');

// The replacement logic
// We are looking to inject a video player specifically for Hydro-Jetting (id=15) and Sewer (id=6)
// Inside the map loop, after pb-tech-detail

let searchStr = `                            <div class="pb-tech-detail" style="margin-bottom: 1.2rem; padding: 1rem; background: rgba(0,0,0,0.3); border-radius: 8px; border-left: 3px solid var(--neon-orange);">
                                <h4 style="color: var(--neon-orange); margin-bottom: 0.5rem;"><i class="fas fa-tools"></i> Detalle Técnico (Ingeniería)</h4>
                                <p class="pb-service-tech" data-i18n="svc_\${s.id}_p2" style="font-size: 0.9em; line-height: 1.4; color: #b0c4de;"></p>
                            </div>`;

let injectStr = searchStr + `

                            \${s.id === 15 ? \`<div class="pb-video-container" style="margin-bottom: 1.2rem; padding: 0.5rem; background: rgba(0,245,255,0.1); border: 1px solid rgba(0,245,255,0.3); border-radius: 8px; box-shadow: 0 0 10px rgba(0,245,255,0.2);">
                                <h4 style="color: var(--neon-cyan); margin-bottom: 0.5rem; text-align: center; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px;"><i class="fas fa-video"></i> 4000 PSI Hydro-Jetting Action</h4>
                                <video width="100%" height="180" autoplay loop muted playsinline style="border-radius: 6px; border: 1px solid #111; object-fit: cover;">
                                    <source src="../assets/hydro_jetting_ai.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>\` : ''}`;

if (html.includes(searchStr) && !html.includes('hydro_jetting_ai.mp4')) {
    html = html.replace(searchStr, injectStr);
    fs.writeFileSync(file, html);
    console.log("Video player injected perfectly into docs/pricebook.html");
} else {
    console.log("Could not find the injection point or already injected.");
}
