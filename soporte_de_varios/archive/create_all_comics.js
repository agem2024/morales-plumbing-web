const fs = require('fs');

const template = "<!DOCTYPE html>\n" +
"<html lang=\"es\">\n" +
"<head>\n" +
"    <meta charset=\"UTF-8\">\n" +
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"    <title>Proceso de Obra - Guía para Clientes</title>\n" +
"    <link href=\"https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;500;600;700&display=swap\" rel=\"stylesheet\">\n" +
"    <style>\n" +
"        :root {\n" +
"            --primary: #002b5e;\n" +
"            --secondary: #00f5ff;\n" +
"            --text-light: #f4f6f8;\n" +
"            --bg-dark: #121212;\n" +
"            --panel-bg: rgba(255, 255, 255, 0.05);\n" +
"        }\n" +
"        body {\n" +
"            font-family: 'Rajdhani', sans-serif;\n" +
"            background-color: var(--bg-dark);\n" +
"            color: var(--text-light);\n" +
"            margin: 0;\n" +
"            padding: 0;\n" +
"            line-height: 1.6;\n" +
"        }\n" +
"        .container {\n" +
"            max-width: 1000px;\n" +
"            margin: 0 auto;\n" +
"            padding: 40px 20px;\n" +
"        }\n" +
"        .header {\n" +
"            text-align: center;\n" +
"            margin-bottom: 50px;\n" +
"            position: relative;\n" +
"        }\n" +
"        .back-btn {\n" +
"            position: absolute;\n" +
"            top: 0;\n" +
"            left: 0;\n" +
"            background: rgba(255,255,255,0.1);\n" +
"            color: white;\n" +
"            text-decoration: none;\n" +
"            padding: 8px 16px;\n" +
"            border-radius: 4px;\n" +
"            font-family: 'Orbitron', sans-serif;\n" +
"            font-size: 14px;\n" +
"            border: 1px solid rgba(255,255,255,0.2);\n" +
"            transition: 0.3s;\n" +
"        }\n" +
"        .back-btn:hover {\n" +
"            background: rgba(0,245,255,0.2);\n" +
"            border-color: var(--secondary);\n" +
"            color: var(--secondary);\n" +
"        }\n" +
"        .header h1 {\n" +
"            font-family: 'Orbitron', sans-serif;\n" +
"            font-size: 36px;\n" +
"            color: var(--secondary);\n" +
"            margin-bottom: 10px;\n" +
"            text-transform: uppercase;\n" +
"            margin-top: 40px;\n" +
"        }\n" +
"        .header p {\n" +
"            font-size: 18px;\n" +
"            color: #aaa;\n" +
"            max-width: 700px;\n" +
"            margin: 0 auto;\n" +
"        }\n" +
"        .comic-container {\n" +
"            background: var(--panel-bg);\n" +
"            border: 2px solid var(--secondary);\n" +
"            border-radius: 12px;\n" +
"            padding: 20px;\n" +
"            margin-bottom: 50px;\n" +
"            box-shadow: 0 0 30px rgba(0, 245, 255, 0.1);\n" +
"        }\n" +
"        .comic-img {\n" +
"            width: 100%;\n" +
"            height: auto;\n" +
"            border-radius: 8px;\n" +
"            display: block;\n" +
"        }\n" +
"    </style>\n" +
"</head>\n" +
"<body>\n" +
"\n" +
"    <div class=\"container\">\n" +
"        <div class=\"header\">\n" +
"            <a href=\"pricebook.html\" class=\"back-btn\" data-i18n=\"nav_back_pb\">← Volver al Catálogo</a>\n" +
"            <h1 data-i18n=\"pb_svc_{ID}_name\">Servicio {ID}</h1>\n" +
"            <p data-i18n=\"pb_svc_{ID}_user\">Descripción del servicio.</p>\n" +
"        </div>\n" +
"\n" +
"        <div class=\"comic-container\">\n" +
"            <!-- Placeholder logic for non-generated comics -->\n" +
"            <img src=\"../assets/img/svc_{ID}_comic.png\" onerror=\"this.src='../assets/img/repipe_comic.png'\" alt=\"Proceso en Cómic\" class=\"comic-img\">\n" +
"        </div>\n" +
"\n" +
"        <div class=\"header\" style=\"margin-top: 40px;\">\n" +
"            <p style=\"color: #ffaa00; font-size: 1.2rem; font-family: 'Orbitron';\"><span data-i18n=\"lbl_tecnico\">Detalle Técnico (C-36)</span></p>\n" +
"            <p data-i18n=\"pb_svc_{ID}_tech\" style=\"color: #bbb; max-width: 800px; margin: 10px auto; font-size: 16px;\"></p>\n" +
"        </div>\n" +
"    </div>\n" +
"\n" +
"    <script src=\"../app.js\"></script>\n" +
"    <script>\n" +
"        document.addEventListener(\"DOMContentLoaded\", () => {\n" +
"            const currentLang = localStorage.getItem('morales_lang') || 'es';\n" +
"            if(window.setLanguage) window.setLanguage(currentLang);\n" +
"        });\n" +
"    </script>\n" +
"</body>\n" +
"</html>";

for (let i = 1; i <= 15; i++) {
    const content = template.replace(/{ID}/g, i);
    fs.writeFileSync('docs/proceso_svc_' + i + '_cliente.html', content);
}
console.log("Created 15 comic HTML templates with multilingual support and Back buttons.");
