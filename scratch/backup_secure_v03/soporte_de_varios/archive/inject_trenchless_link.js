const fs = require('fs');

let html = fs.readFileSync('docs/pricebook.html', 'utf8');

// The line we injected previously was:
// ... ? `<a href="proceso_repipe_cliente.html" ...>` : `<a href="#" onclick="alert('Guía ilustrada en desarrollo para este servicio'); return false;" ...>Guía Ilustrada (Próximamente)</a>`}
// Now we want to update the condition so that s.id === 6 goes to proceso_trenchless_cliente.html
const oldCode = '`<a href="#" onclick="alert(\\\'Guía ilustrada en desarrollo para este servicio\\\'); return false;" data-i18n="pb_btn_comic_coming_soon"';
const newCode = 's.id === 6 ? `<a href="proceso_trenchless_cliente.html" data-i18n="pb_btn_comic_repipe" style="display: inline-block; width: 100%; text-align: center; margin-top: 0.5rem; padding: 12px; background: rgba(0, 255, 136, 0.1); border: 1px solid var(--neon-cyan); color: var(--neon-cyan); border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95em; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;" onmouseover="this.style.background=\\\'rgba(0, 255, 136, 0.2)\\\'; this.style.boxShadow=\\\'0 0 15px rgba(0,255,136,0.3)\\\';" onmouseout="this.style.background=\\\'rgba(0, 255, 136, 0.1)\\\'; this.style.boxShadow=\\\'none\\\';">Ver Guía Ilustrada Paso a Paso</a>` : `<a href="#" onclick="alert(\\\'Guía ilustrada en desarrollo para este servicio\\\'); return false;" data-i18n="pb_btn_comic_coming_soon"';

html = html.replace(oldCode, newCode);
fs.writeFileSync('docs/pricebook.html', html);
console.log("Injected trenchless comic link");
