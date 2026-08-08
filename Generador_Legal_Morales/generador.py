import argparse
import datetime
import os
import urllib.parse

def generate_contract(client_name, service_desc, price, language):
    date_str = datetime.datetime.now().strftime("%B %d, %Y" if language == "en" else "%d de %B de %Y")
    
    # Textos según idioma
    if language == "es":
        title = "Acuerdo de Servicio / Cotización"
        h_client = "Cliente:"
        h_service = "Descripción del Servicio:"
        h_price = "Precio Total:"
        h_terms = "Términos y Condiciones:"
        terms_text = "El pago se requiere al finalizar el trabajo. Todos los trabajos están garantizados por 30 días, a menos que se especifique lo contrario."
        footer_sign = "Firma del Cliente:"
        footer_date = "Fecha:"
        share_title = "Compartir esta Cotización:"
        wa_text = f"Hola {client_name}, aquí está la cotización de Morales Plumbing por el servicio de '{service_desc}' con un total de . Por favor revisa el documento adjunto."
    else:
        title = "Service Agreement / Estimate"
        h_client = "Client:"
        h_service = "Service Description:"
        h_price = "Total Price:"
        h_terms = "Terms & Conditions:"
        terms_text = "Payment is due upon completion of work. All work is guaranteed for 30 days unless otherwise specified."
        footer_sign = "Client Signature:"
        footer_date = "Date:"
        share_title = "Share this Estimate:"
        wa_text = f"Hello {client_name}, here is the estimate from Morales Plumbing for '{service_desc}' totaling . Please review the attached document."

    wa_encoded = urllib.parse.quote(wa_text)
    email_encoded = urllib.parse.quote(wa_text)
    tg_encoded = urllib.parse.quote(wa_text)
    sms_encoded = urllib.parse.quote(wa_text)

    html_content = f"""
    <!DOCTYPE html>
    <html lang="{language}">
    <head>
        <meta charset="UTF-8">
        <title>{title} - Morales Plumbing</title>
        <style>
            body {{
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                margin: 40px;
                color: #0A192F;
            }}
            .header {{
                text-align: center;
                border-bottom: 4px solid #D4AF37;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }}
            .header h1 {{
                margin: 0;
                font-size: 28px;
                color: #0A192F;
            }}
            .header p {{
                margin: 5px 0;
                color: #666;
            }}
            .section {{
                margin-bottom: 25px;
            }}
            .section h3 {{
                color: #D4AF37;
                border-bottom: 1px solid #eee;
                padding-bottom: 5px;
            }}
            .price {{
                font-size: 24px;
                font-weight: bold;
                color: #27ae60;
            }}
            .footer {{
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
            }}
            .signature-line {{
                width: 250px;
                border-bottom: 1px solid #000;
                margin-bottom: 5px;
            }}
            .share-buttons {{
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px dashed #ccc;
                text-align: center;
            }}
            .share-buttons a {{
                display: inline-block;
                margin: 0 10px;
                padding: 10px 20px;
                text-decoration: none;
                color: white;
                border-radius: 5px;
                font-weight: bold;
            }}
            .btn-wa {{ background-color: #25D366; }}
            .btn-tg {{ background-color: #0088cc; }}
            .btn-email {{ background-color: #D4AF37; }}
            .btn-sms {{ background-color: #333333; }}
            
            @media print {{
                .share-buttons {{ display: none !important; }}
            }}
        </style>
    </head>
    <body>
        <div class="header">
            <h1>MORALES PLUMBING</h1>
            <p>Lic. C-36 #1156542 | San Jose, CA</p>
            <p>(669) 213-4422 | moralesplumbing026@gmail.com | www.moralesplumbing.com</p>
        </div>

        <div style="text-align: right; margin-bottom: 20px;">
            <strong>{footer_date}</strong> {date_str}
        </div>

        <div class="section">
            <h3>{h_client}</h3>
            <p>{client_name}</p>
        </div>

        <div class="section">
            <h3>{h_service}</h3>
            <p>{service_desc}</p>
        </div>

        <div class="section">
            <h3>{h_price}</h3>
            <p class="price"></p>
        </div>

        <div class="section">
            <h3>{h_terms}</h3>
            <p>{terms_text}</p>
        </div>

        <div class="footer">
            <div>
                <div class="signature-line"></div>
                <p>{footer_sign}</p>
            </div>
            <div>
                <div class="signature-line"></div>
                <p>Morales Plumbing Rep.</p>
            </div>
        </div>
        
        <!-- Botones de compartir (Se ocultan al imprimir en PDF) -->
        <div class="share-buttons">
            <p>{share_title}</p>
            <a href="https://wa.me/?text={wa_encoded}" class="btn-wa" target="_blank">WhatsApp</a>
            <a href="https://t.me/share/url?url=https://www.moralesplumbing.com&text={tg_encoded}" class="btn-tg" target="_blank">Telegram</a>
            <a href="sms:?&body={sms_encoded}" class="btn-sms">SMS</a>
            <a href="mailto:?subject=Morales Plumbing Estimate&body={email_encoded}" class="btn-email">Email</a>
        </div>
    </body>
    </html>
    """

    filename = f"Contrato_{client_name.replace(' ', '_')}_{language}.html"
    filepath = os.path.join(os.getcwd(), filename)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"SUCCESS: {filepath}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Generador de Contratos Morales Plumbing")
    parser.add_argument('--cliente', required=True, help="Nombre del cliente")
    parser.add_argument('--servicio', required=True, help="Descripción del servicio")
    parser.add_argument('--precio', required=True, help="Precio total")
    parser.add_argument('--idioma', choices=['en', 'es'], default='en', help="Idioma del contrato (en/es)")
    
    args = parser.parse_args()
    generate_contract(args.cliente, args.servicio, args.precio, args.idioma)
