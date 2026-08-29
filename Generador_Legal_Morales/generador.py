"""
MORALES PLUMBING — CONTRATOS LEGALES Y ACUERDOS DE SERVICIO
Cumplimiento estricto: California Business and Professions Code § 7159, CSLB C-36 #1156542
"""

import argparse
import datetime
import os
import urllib.parse

def generate_contract(client_name, service_desc, price, contract_type="residential", language="en"):
    date_str = datetime.datetime.now().strftime("%B %d, %Y" if language == "en" else "%d de %B de %Y")
    
    # Official Company Data (RULE[user_global] - Immutable)
    company_name = "MORALES PLUMBING"
    company_tag = "AI-INTEGRATED SERVICES"
    license_str = "Lic. C-36 #1156542 | San Jose, CA"
    phone_str = "(669) 213-4422"
    email_str = "moralesplumbing026@gmail.com"
    web_str = "www.morales-plumbing.com"
    
    if language == "es":
        title = "Acuerdo Legal de Servicio & Contrato"
        h_client = "Cliente:"
        h_service = "Descripción y Alcance del Trabajo:"
        h_price = "Precio Total Acordado:"
        h_terms = "Términos Legales & Cláusulas CSLB:"
        footer_sign = "Firma del Propietario / Cliente:"
        footer_date = "Fecha de Aceptación:"
        share_title = "Compartir y Descargar este Contrato:"
        
        if contract_type == "residential":
            terms_text = f"""
            <strong>1. Licencia y Fianza:</strong> Todos los trabajos son ejecutados bajo la Licencia CSLB C-36 #1156542.<br>
            <strong>2. Pago y Depósito (BPC § 7159):</strong> El depósito inicial no superará el 10% del precio total o $1,000 (el que sea menor). Saldo pagadero al finalizar satisfactoriamente.<br>
            <strong>3. Derecho de Cancelación de 3 Días (Civil Code § 1689.5):</strong> Usted tiene el derecho legal de cancelar este contrato dentro de tres (3) días hábiles posteriores a la firma.<br>
            <strong>4. Garantía:</strong> Garantía de 1 año en mano de obra y garantía oficial del fabricante en equipos y materiales.<br>
            <strong>5. Aviso de Gravamen Mecánico (Mechanics Lien Warning):</strong> Quienes suministren mano de obra o materiales no pagados tienen derecho a registrar un gravamen contra su propiedad según el Código Civil de California.
            """
        elif contract_type == "commercial":
            terms_text = f"""
            <strong>1. Acuerdo Maestro B2B:</strong> Ejecutado bajo el Código de Plomería de California (CPC) y normativas comerciales de Santa Clara County.<br>
            <strong>2. Términos de Pago:</strong> Pago Net 15 / Net 30 según calificación crediticia. Retención del 5% hasta la aprobación del inspector municipal.<br>
            <strong>3. Mora e Intereses:</strong> Facturas vencidas devengarán un recargo moratorio del 1.5% mensual (18% anual) conforme a la ley de California.<br>
            <strong>4. Indemnización y Seguros:</strong> Morales Plumbing mantiene pólizas de General Liability ($2M) y Workers' Compensation activas.
            """
        elif contract_type == "industrial":
            terms_text = f"""
            <strong>1. Normativa Industrial:</strong> Cumplimiento estricto con Cal/OSHA, ASME B31.3 y EPA para fluidos a alta presión y procesos industriales.<br>
            <strong>2. Facturación por Hitos (Schedule of Values):</strong> Pagos estructurados por avances certificados de obra y entrega de planos As-Built.<br>
            <strong>3. Ensayos y Certificaciones:</strong> Pruebas hidrostáticas y termográficas con reporte forense certificado incluido.
            """
        else: # subscription / membership
            terms_text = f"""
            <strong>1. Membresía ORION Club:</strong> Servicio recurrente con facturación mensual/anual automatizada.<br>
            <strong>2. Ajuste de Tarifas (California ARL):</strong> Morales Plumbing notificará cualquier cambio tarifario con un mínimo de 30 días de preaviso.<br>
            <strong>3. Cancelación:</strong> El cliente puede cancelar en cualquier momento desde el portal web con 15 días de anticipación al siguiente ciclo de facturación.
            """
        
        wa_text = f"Estimado/a {client_name}, aquí tiene su contrato formal de Morales Plumbing ({license_str}) por '{service_desc}' por un total de ${price}. Revise y firme el documento adjunto."
    else:
        title = "Legal Service Agreement & Contract"
        h_client = "Client / Owner:"
        h_service = "Scope of Work & Description:"
        h_price = "Total Contract Price:"
        h_terms = "Legal Terms & Mandatory CSLB Disclosures:"
        footer_sign = "Client / Property Owner Signature:"
        footer_date = "Date of Acceptance:"
        share_title = "Share and Download this Contract:"
        
        if contract_type == "residential":
            terms_text = f"""
            <strong>1. License & Bond:</strong> All plumbing work performed under CSLB License C-36 #1156542.<br>
            <strong>2. Payment & Downpayment Cap (BPC § 7159):</strong> Down payment shall not exceed 10% of the contract amount or $1,000, whichever is less. Balance due upon completion.<br>
            <strong>3. Three-Day Right to Cancel (Civil Code § 1689.5):</strong> You have the legal right to cancel this transaction within three (3) business days from the signing date.<br>
            <strong>4. Warranty:</strong> 1-Year Comprehensive Workmanship Warranty plus Manufacturer Warranty on installed equipment.<br>
            <strong>5. Mechanics Lien Warning:</strong> Anyone who provides labor or materials to improve your property and is not paid has a right to enforce a claim against your property under California Civil Code.
            """
        elif contract_type == "commercial":
            terms_text = f"""
            <strong>1. Master Commercial Agreement:</strong> Work conducted under California Plumbing Code (CPC) and ADA/Commercial standards.<br>
            <strong>2. Payment Terms:</strong> Net 15 / Net 30 upon credit approval. 5% retention released upon final municipal sign-off.<br>
            <strong>3. Late Fees & Delinquency:</strong> Overdue invoices accrue a 1.5% monthly late fee (18% per annum) pursuant to California Law.<br>
            <strong>4. Insurance:</strong> Morales Plumbing maintains active $2M Commercial General Liability and Workers' Compensation coverage.
            """
        elif contract_type == "industrial":
            terms_text = f"""
            <strong>1. Industrial Standards:</strong> Full compliance with Cal/OSHA, ASME B31.3 process piping, and EPA environmental codes.<br>
            <strong>2. Schedule of Values (SOV):</strong> Milestone-based progress billing with certified inspector verification and As-Built drawings.<br>
            <strong>3. Testing & Forensics:</strong> Hydrostatic pressure testing, thermal imaging, and certified QA/QC report included.
            """
        else: # subscription / membership
            terms_text = f"""
            <strong>1. ORION Priority Membership:</strong> Recurring service agreement with automatic monthly/annual billing.<br>
            <strong>2. Price Adjustment Notice (California ARL):</strong> Any adjustment to subscription rates will be communicated with at least 30 days prior written notice.<br>
            <strong>3. Cancellation Policy:</strong> Client may cancel at any time via the client portal with 15 days notice prior to the next billing cycle.
            """

        wa_text = f"Hello {client_name}, here is your formal service contract from Morales Plumbing ({license_str}) for '{service_desc}' totaling ${price}. Please review and sign."

    wa_encoded = urllib.parse.quote(wa_text)
    email_encoded = urllib.parse.quote(wa_text)
    tg_encoded = urllib.parse.quote(wa_text)
    sms_encoded = urllib.parse.quote(wa_text)

    html_content = f"""<!DOCTYPE html>
<html lang="{language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - {company_name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Orbitron:wght@600;800&display=swap" rel="stylesheet">
    <style>
        body {{
            font-family: 'Inter', sans-serif;
            background-color: #F8FAFC;
            color: #0A192F;
            margin: 0;
            padding: 30px 20px;
            line-height: 1.6;
        }}
        .contract-wrapper {{
            max-width: 860px;
            margin: 0 auto;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(10, 25, 47, 0.08);
            overflow: hidden;
        }}
        .header-official {{
            background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
            border-bottom: 4px solid #D4AF37;
            padding: 25px 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #FFFFFF;
        }}
        .header-left {{
            display: flex;
            align-items: center;
            gap: 15px;
        }}
        .header-left img {{
            width: 54px;
            height: 54px;
            border-radius: 50%;
            border: 2px solid #D4AF37;
            object-fit: cover;
        }}
        .header-brand h1 {{
            margin: 0;
            font-size: 1.4rem;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 1px;
            color: #FFFFFF;
        }}
        .header-brand span {{
            color: #D4AF37;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 1px;
        }}
        .header-right {{
            text-align: right;
            font-size: 0.82rem;
            color: #E2E8F0;
        }}
        .header-right strong {{
            color: #D4AF37;
        }}
        .body-content {{
            padding: 35px;
        }}
        .doc-title {{
            font-family: 'Orbitron', sans-serif;
            font-size: 1.3rem;
            color: #0A192F;
            margin-top: 0;
            margin-bottom: 5px;
            border-bottom: 2px solid #E2E8F0;
            padding-bottom: 10px;
        }}
        .meta-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
            background: #F1F5F9;
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 0.9rem;
        }}
        .meta-item strong {{
            display: block;
            color: #64748B;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}
        .meta-item span {{
            color: #0A192F;
            font-weight: 700;
        }}
        .section {{
            margin: 25px 0;
        }}
        .section h3 {{
            color: #0A192F;
            font-size: 1rem;
            margin-bottom: 8px;
            border-left: 4px solid #D4AF37;
            padding-left: 10px;
        }}
        .price-box {{
            background: #F8FAFC;
            border: 2px dashed #D4AF37;
            border-radius: 8px;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
        }}
        .price-amount {{
            font-size: 1.8rem;
            font-weight: 800;
            color: #059669;
            font-family: 'Orbitron', sans-serif;
        }}
        .terms-box {{
            background: #FAFAFA;
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            padding: 18px 20px;
            font-size: 0.85rem;
            color: #334155;
            line-height: 1.65;
        }}
        .signatures {{
            margin-top: 40px;
            padding-top: 25px;
            border-top: 2px solid #E2E8F0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }}
        .sig-box {{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }}
        .sig-line {{
            border-bottom: 1.5px solid #0A192F;
            height: 45px;
            margin-bottom: 6px;
        }}
        .sig-box p {{
            margin: 0;
            font-size: 0.82rem;
            color: #64748B;
            font-weight: 600;
        }}
        .share-actions {{
            background: #0A192F;
            padding: 20px 35px;
            text-align: center;
            border-top: 1px solid #E2E8F0;
        }}
        .share-actions p {{
            color: #D4AF37;
            font-size: 0.85rem;
            font-weight: 700;
            margin: 0 0 12px;
        }}
        .share-btns {{
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
        }}
        .share-btns a, .share-btns button {{
            padding: 8px 18px;
            border-radius: 6px;
            text-decoration: none;
            color: #FFFFFF;
            font-size: 0.82rem;
            font-weight: 700;
            cursor: pointer;
            border: none;
            transition: transform 0.15s;
        }}
        .share-btns a:hover, .share-btns button:hover {{
            transform: translateY(-2px);
        }}
        .btn-wa {{ background: #25D366; }}
        .btn-tg {{ background: #0088CC; }}
        .btn-sms {{ background: #475569; }}
        .btn-email {{ background: #D4AF37; color: #0A192F !important; }}
        .btn-print {{ background: #0284C7; }}

        @media print {{
            body {{ background: #FFFFFF; padding: 0; }}
            .contract-wrapper {{ border: none; box-shadow: none; max-width: 100%; }}
            .share-actions {{ display: none !important; }}
        }}
    </style>
</head>
<body>
    <div class="contract-wrapper">
        <div class="header-official">
            <div class="header-left">
                <img src="../assets/logo_portada.png" alt="Morales Plumbing Logo" onerror="this.src='../assets/logo_portada.png';">
                <div class="header-brand">
                    <h1>{company_name}</h1>
                    <span>{company_tag}</span>
                </div>
            </div>
            <div class="header-right">
                <strong>{license_str}</strong><br>
                {phone_str} | {email_str}<br>
                {web_str}
            </div>
        </div>

        <div class="body-content">
            <h2 class="doc-title">{title}</h2>
            
            <div class="meta-grid">
                <div class="meta-item">
                    <strong>{h_client}</strong>
                    <span>{client_name}</span>
                </div>
                <div class="meta-item">
                    <strong>{footer_date}</strong>
                    <span>{date_str}</span>
                </div>
                <div class="meta-item">
                    <strong>Contract Type / Tipo:</strong>
                    <span>{contract_type.upper()}</span>
                </div>
                <div class="meta-item">
                    <strong>CSLB License:</strong>
                    <span>C-36 #1156542</span>
                </div>
            </div>

            <div class="section">
                <h3>{h_service}</h3>
                <p style="margin: 0; color: #1E293B;">{service_desc}</p>
            </div>

            <div class="price-box">
                <div>
                    <span style="font-weight: 700; color: #0A192F; font-size: 1rem;">{h_price}</span>
                    <p style="margin: 3px 0 0; font-size: 0.78rem; color: #64748B;">Includes all labor, certified fittings, cleanup & CSLB warranty.</p>
                </div>
                <div class="price-amount">${price} USD</div>
            </div>

            <div class="section">
                <h3>{h_terms}</h3>
                <div class="terms-box">
                    {terms_text}
                </div>
            </div>

            <div class="signatures">
                <div class="sig-box">
                    <div class="sig-line"></div>
                    <p>{footer_sign}</p>
                </div>
                <div class="sig-box">
                    <div class="sig-line"></div>
                    <p>Morales Plumbing Authorized Rep. (Lic. C-36 #1156542)</p>
                </div>
            </div>
        </div>

        <div class="share-actions">
            <p>{share_title}</p>
            <div class="share-btns">
                <a href="https://wa.me/?text={wa_encoded}" class="btn-wa" target="_blank">WhatsApp</a>
                <a href="https://t.me/share/url?url=https://www.morales-plumbing.com&text={tg_encoded}" class="btn-tg" target="_blank">Telegram</a>
                <a href="sms:?&body={sms_encoded}" class="btn-sms">SMS</a>
                <a href="mailto:?subject=Morales%20Plumbing%20Service%20Agreement&body={email_encoded}" class="btn-email">Email</a>
                <button onclick="window.print()" class="btn-print">Imprimir / PDF</button>
            </div>
        </div>
    </div>
</body>
</html>"""

    filename = f"Contrato_{client_name.replace(' ', '_')}_{language}.html"
    dir_path = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(dir_path, filename)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"SUCCESS: {filepath}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Generador de Contratos Morales Plumbing")
    parser.add_argument('--cliente', required=True, help="Nombre del cliente")
    parser.add_argument('--servicio', required=True, help="Descripción del servicio")
    parser.add_argument('--precio', required=True, help="Precio total")
    parser.add_argument('--tipo', default='residential', choices=['residential', 'commercial', 'industrial', 'subscription'], help="Tipo de contrato")
    parser.add_argument('--idioma', choices=['en', 'es'], default='en', help="Idioma del contrato (en/es)")
    
    args = parser.parse_args()
    generate_contract(args.cliente, args.servicio, args.precio, args.tipo, args.idioma)
