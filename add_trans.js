const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const newEn = 
        "contact_sec_title": "Get in Touch",
        "contact_sec_desc": "Do you have an emergency or need a quick quote? Call us directly or contact us via WhatsApp. You can also leave your message.",
        "contact_form_title": "Send a Message",
        "contact_form_name": "Name",
        "contact_form_phone": "Phone",
        "contact_form_email": "Email",
        "contact_form_msg": "Message",
        "contact_form_submit": "Send Message",
;

const newEs = 
        "contact_sec_title": "Contáctanos",
        "contact_sec_desc": "¿Tienes una emergencia o necesitas una cotización rápida? Llámanos directamente o contáctanos por WhatsApp. También puedes dejar tu mensaje.",
        "contact_form_title": "Envía un Mensaje",
        "contact_form_name": "Nombre",
        "contact_form_phone": "Teléfono",
        "contact_form_email": "Correo",
        "contact_form_msg": "Mensaje",
        "contact_form_submit": "Enviar Mensaje",
;

code = code.replace(/"en": \{/, '"en": {' + '\n' + newEn);
code = code.replace(/"es": \{/, '"es": {' + '\n' + newEs);

fs.writeFileSync('app.js', code, 'utf8');
console.log('Done');
