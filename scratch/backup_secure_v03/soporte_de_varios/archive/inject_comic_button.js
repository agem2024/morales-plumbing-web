const fs = require('fs');

let html = fs.readFileSync('docs/pricebook.html', 'utf8');

const regex = /<a href="service\.html\?id=\$\{s\.id\}"[^>]*>[^<]*<\/a>/;

if(regex.test(html)) {
    const replacement = '<a href="service.html?id=${s.id}" data-i18n="pb_btn_details" style="display: inline-block; width: 100%; text-align: center; margin-top: 1.5rem; padding: 12px; background: rgba(0, 245, 255, 0.1); border: 1px solid var(--neon-cyan); color: var(--neon-cyan); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95em; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.background=\\\'rgba(0, 245, 255, 0.2)\\\'; this.style.boxShadow=\\\'0 0 15px rgba(0,245,255,0.3)\\\';" onmouseout="this.style.background=\\\'rgba(0, 245, 255, 0.1)\\\'; this.style.boxShadow=\\\'none\\\';">Ver Detalle Técnico y Comercial</a>\\n                            ${s.id === 2 ? `<a href="proceso_repipe_cliente.html" data-i18n="pb_btn_comic_repipe" style="display: inline-block; width: 100%; text-align: center; margin-top: 0.5rem; padding: 12px; background: rgba(255, 140, 0, 0.1); border: 1px solid var(--neon-orange); color: var(--neon-orange); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95em; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.background=\\\'rgba(255, 140, 0, 0.2)\\\'; this.style.boxShadow=\\\'0 0 15px rgba(255,140,0,0.3)\\\';" onmouseout="this.style.background=\\\'rgba(255, 140, 0, 0.1)\\\'; this.style.boxShadow=\\\'none\\\';">Ver Guía Ilustrada Paso a Paso</a>` : `<a href="#" onclick="alert(\\\'Guía ilustrada en desarrollo para este servicio\\\'); return false;" data-i18n="pb_btn_comic_coming_soon" style="display: inline-block; width: 100%; text-align: center; margin-top: 0.5rem; padding: 12px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255,255,255,0.2); color: #888; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9em; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">Guía Ilustrada (Próximamente)</a>`}';
    
    html = html.replace(regex, replacement);
    fs.writeFileSync('docs/pricebook.html', html);
    console.log("Injected comic button using regex");
} else {
    console.log("Regex did not match.");
}
