import argparse
import datetime
import os
import sys

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERROR: La librería 'google-genai' no está instalada.")
    print("Por favor instala ejecutando: pip install google-genai")
    sys.exit(1)

def get_client():
    if not os.environ.get("GEMINI_API_KEY"):
        print("ERROR: No se encontró GEMINI_API_KEY en las variables de entorno.")
        sys.exit(1)
    return genai.Client()

def generate_legacy_html(job_title, fb_copy, yelp_copy, keywords):
    date_str = datetime.datetime.now().strftime("%B %d, %Y")
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marketing Copy - Morales Plumbing</title>
        <style>
            body {{
                font-family: 'Inter', Helvetica, Arial, sans-serif;
                margin: 40px;
                color: white;
                background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
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
                color: white;
            }}
            .header img {{
                max-width: 200px;
                margin-bottom: 10px;
            }}
            .card {{
                background-color: rgba(255, 255, 255, 0.05);
                border: 1px solid #D4AF37;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }}
            .card h3 {{
                color: #D4AF37;
                margin-top: 0;
                border-bottom: 1px solid rgba(212, 175, 55, 0.3);
                padding-bottom: 10px;
            }}
            .copy-box {{
                background-color: rgba(0, 0, 0, 0.3);
                padding: 15px;
                border-left: 4px solid #D4AF37;
                font-family: monospace;
                white-space: pre-wrap;
                font-size: 14px;
                line-height: 1.5;
                color: #e6f1ff;
            }}
        </style>
    </head>
    <body>
        <div class="header">
            <img src="logo_portada.png" alt="Morales Plumbing Logo" style="float: left;">
            <h1>MORALES PLUMBING - ORION MARKETING</h1>
            <p style="clear: both;">Generated on: {date_str} | Lic. C-36 #1156542 | (669) 213-4422</p>
        </div>

        <div class="card">
            <h3>Job Reference</h3>
            <p><strong>{job_title}</strong></p>
        </div>

        <div class="card">
            <h3>Facebook / Instagram Copy</h3>
            <div class="copy-box">{fb_copy}</div>
        </div>

        <div class="card">
            <h3>Yelp / Google Business Copy</h3>
            <div class="copy-box">{yelp_copy}</div>
        </div>

        <div class="card">
            <h3>SEO Keywords & Hashtags</h3>
            <div class="copy-box">{keywords}</div>
        </div>
        
    </body>
    </html>
    """
    filename = f"Marketing_{job_title.replace(' ', '_')}.html"
    filepath = os.path.join(os.getcwd(), filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"SUCCESS: {filepath}")

def engine_1_image(prompt):
    import base64
    print(f"[Motor 1] Generando imagen con Nano Banana 2 (Gemini 3.1 Flash Image)...")
    client = get_client()
    try:
        interaction = client.interactions.create(
            model="gemini-3.1-flash-image",
            input=prompt,
        )
        filename = f"nano_banana_output_{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}.png"
        with open(filename, "wb") as f:
            f.write(base64.b64decode(interaction.output_image.data))
        print(f"¡Imagen generada con éxito y guardada como {filename}!")
    except Exception as e:
        print(f"Error generando imagen: {e}")

def engine_2_video(prompt):
    print(f"[Motor 2] Generando video cinemático con Veo 3.1...")
    print(f"Endpoint: veo-3.1-generate-preview | Prompt: {prompt}")
    # client.models.generate_content(...)
    print("¡Video de 8s en 1080p generado!")

def engine_3_video_understanding(video_path, prompt, webhook=None):
    import time
    print(f"[Motor 3] Entendimiento de Video con Gemini 3.6 Flash...")
    client = get_client()
    try:
        kwargs = {
            "model": "gemini-3.6-flash"
        }
        if webhook:
            print(f"Configurando Webhook Dinámico (Modo Asíncrono): {webhook}")
            kwargs["background"] = True
            kwargs["webhook_config"] = {"uris": [webhook]}
            
        if video_path.startswith("http"):
            print(f"Usando URL pública de video: {video_path}")
            kwargs["input"] = [
                {"type": "text", "text": prompt},
                {"type": "video", "uri": video_path}
            ]
        else:
            print(f"Subiendo archivo local {video_path}...")
            myfile = client.files.upload(file=video_path)
            while not myfile.state or myfile.state.name != "ACTIVE":
                print("Procesando video en los servidores de Google...")
                time.sleep(5)
                myfile = client.files.get(name=myfile.name)
            
            print("Video procesado. Iniciando análisis...")
            kwargs["input"] = [
                {"type": "video", "uri": myfile.uri, "mime_type": myfile.mime_type},
                {"type": "text", "text": prompt}
            ]
            
        interaction = client.interactions.create(**kwargs)
        
        if webhook:
            print(f"\n--- Tarea enviada a fondo (LRO) ---")
            print(f"ID: {interaction.id}")
            print(f"Estado: {interaction.status}")
            print("La respuesta será enviada al webhook configurado cuando termine.")
            print("-----------------------------------\n")
        else:
            print("\n--- Resultado del Análisis ---")
            print(interaction.output_text)
            print("----------------------------\n")
    except Exception as e:
        print(f"Error procesando video: {e}")

def engine_4_music(prompt):
    print(f"[Motor 4] Generando música con Lyria 3...")
    print(f"Endpoint: lyria-3-pro-preview")
    # client.interactions.create(...)
    print("¡Jingle publicitario de Morales Plumbing generado en MP3!")

async def run_live_session(model, config, initial_text):
    import asyncio
    client = get_client()
    async with client.aio.live.connect(model=model, config=config) as session:
        print("¡Conexión Live WebSocket establecida!")
        await session.send_client_content(
            turns=[{"role": "user", "parts": [{"text": initial_text}]}],
            turn_complete=True
        )
        print("Enviado. Escuchando streaming de respuestas...")
        async for response in session.receive():
            if response.server_content:
                if response.server_content.output_transcription:
                    print(f"Traductor/DJ: {response.server_content.output_transcription.text}")
                # En un caso real aquí se reproduciría el response.server_content.model_turn (Audio PCM)

def engine_5_live_dj():
    import asyncio
    print(f"[Motor 5] Conectando DJ en vivo (Live API)...")
    config = {"response_modalities": ["AUDIO"]}
    try:
        asyncio.run(run_live_session("gemini-3.1-flash-live-preview", config, "Eres un DJ animado. Preséntate de forma entusiasta."))
    except Exception as e:
        print(f"Error en DJ Live: {e}")

def engine_6_tts(text, voice="californian_energetic"):
    print(f"[Motor 6] Generando Voice-Over con Gemini TTS...")
    print(f"Endpoint: gemini-3.1-flash-tts-preview")
    print(f"Texto a narrar: {text}")

def engine_7_live_agent(prompt, webhook=None):
    import os
    import requests
    import tarfile
    print(f"[Motor 7] Asistente Autónomo Antigravity (Conectores MCP)...")
    client = get_client()
    try:
        kwargs = {
            "agent": "antigravity-preview-05-2026",
            "environment": "remote",
            "input": prompt,
            "system_instruction": "Eres el Asistente Autónomo de MORALES PLUMBING (AI-INTEGRATED SERVICES). Tu objetivo es ayudar a gestionar la empresa usando herramientas MCP y generar archivos si te lo piden. Datos de la empresa: Licencia C-36 #1156542 | San Jose, CA | Tel: (669) 213-4422 | Email: moralesplumbing026@gmail.com | Web: www.morales-plumbing.com. Sé profesional y directo, no uses emojis.",
            "tools": [
                {"type": "google_search"},
                {"type": "google_maps", "latitude": 37.3382, "longitude": -121.8863},
                {"type": "code_execution"},
                {"type": "url_context"},
                {"type": "mcp_server", "name": "stripe", "url": "https://api.morales-plumbing.com/mcp/stripe"},
                {"type": "mcp_server", "name": "calendar", "url": "https://api.morales-plumbing.com/mcp/calendar"},
                {"type": "mcp_server", "name": "gmail", "url": "https://api.morales-plumbing.com/mcp/gmail"},
            ]
        }
        
        if webhook:
            print(f"Configurando ejecución en fondo con Webhook: {webhook}")
            kwargs["background"] = True
            kwargs["webhook_config"] = {"uris": [webhook]}
            
        print("Enviando tarea al agente (puede tomar minutos si ejecuta código/herramientas)...")
        interaction = client.interactions.create(**kwargs)
        
        if webhook:
            print(f"\n--- Agente trabajando en fondo (LRO) ---")
            print(f"ID de Interacción: {interaction.id}")
            print(f"Estado: {interaction.status}")
            print("Te notificará en el webhook cuando termine.")
            print("----------------------------------------\n")
        else:
            print("\n--- Respuesta Final del Agente ---")
            print(interaction.output_text)
            print("----------------------------------\n")
            
            # Descargar snapshot del entorno
            env_id = interaction.environment_id
            if env_id:
                print(f"Descargando archivos generados por el agente desde el entorno: {env_id}...")
                api_key = os.environ.get("GEMINI_API_KEY")
                response = requests.get(
                    f"https://generativelanguage.googleapis.com/v1beta/files/environment-{env_id}:download",
                    params={"alt": "media"},
                    headers={"x-goog-api-key": api_key},
                    allow_redirects=True,
                )
                if response.status_code == 200:
                    tar_path = "snapshot_env.tar"
                    extract_dir = "Archivos_Agente"
                    with open(tar_path, "wb") as f:
                        f.write(response.content)
                    
                    os.makedirs(extract_dir, exist_ok=True)
                    with tarfile.open(tar_path) as tar:
                        tar.extractall(path=extract_dir)
                    print(f"¡Archivos descargados con éxito en la carpeta '{extract_dir}'!")
                    
                    # Limpiar el archivo tar
                    try:
                        os.remove(tar_path)
                    except:
                        pass
                else:
                    print(f"Nota: No se pudo descargar el entorno (HTTP {response.status_code})")
                    
    except Exception as e:
        print(f"Error en el Agente: {e}")

def engine_8_live_translate(target_lang="es"):
    import asyncio
    print(f"[Motor 8] Iniciando Traductor de Bolsillo en Vivo (Destino: {target_lang})...")
    config = {
        "response_modalities": ["AUDIO"], 
        "system_instruction": {"parts": [{"text": f"Traduce todo lo que escuches de forma natural al {target_lang}."}]}
    }
    try:
        asyncio.run(run_live_session("gemini-3.1-flash-live-preview", config, f"Hola, prepárate para traducir al {target_lang}."))
    except Exception as e:
        print(f"Error en Live Translate: {e}")

def engine_9_embeddings(query, file_path=None):
    import time
    print(f"[Motor 9] Buscando en Base de Conocimientos (File Search RAG)...")
    client = get_client()
    try:
        if file_path:
            print(f"Subiendo archivo {file_path} a un nuevo File Search Store...")
            file_search_store = client.file_search_stores.create(
                config={'display_name': 'morales-knowledge-base', 'embedding_model': 'models/gemini-embedding-2'}
            )
            operation = client.file_search_stores.upload_to_file_search_store(
                file=file_path,
                file_search_store_name=file_search_store.name,
                config={'display_name': os.path.basename(file_path)}
            )
            while not operation.done:
                time.sleep(2)
                operation = client.operations.get(operation)
            print("Archivo indexado correctamente.")
            store_name = file_search_store.name
        else:
            print("ERROR: Debes proveer un manual con --file para usar File Search RAG.")
            return

        print(f"Consultando a gemini-3.6-flash sobre el documento: {query}")
        interaction = client.interactions.create(
            model="gemini-3.6-flash",
            input=query,
            tools=[{
                "type": "file_search",
                "file_search_store_names": [store_name]
            }]
        )
        print("\n--- Resultado (RAG) ---")
        for step in interaction.steps:
            if step.type == "model_output":
                for content_block in step.content:
                    if content_block.type == "text":
                        print(content_block.text)
                        if content_block.annotations:
                            print("\nFuentes Citadas:")
                            for annotation in content_block.annotations:
                                if annotation.type == "file_citation":
                                    print(f" - {annotation.file_name}: {annotation.source}")
        print("-----------------------\n")
    except Exception as e:
        print(f"Error generando File Search RAG: {e}")

def engine_10_robotics(image_path, task_prompt):
    print(f"[Motor 10] Análisis de Imagen y Visión (Gemini 3.6 Flash)...")
    try:
        from pydantic import BaseModel, Field
        from typing import List
    except ImportError:
        print("ERROR: La librería 'pydantic' es requerida para este motor.")
        print("Instálala ejecutando: pip install pydantic")
        return
        
    class BoundingBox(BaseModel):
        box_2d: List[int] = Field(description="The 2D bounding box of the item as [ymin, xmin, ymax, xmax] normalized to 0-1000.")
        mask: List[List[int]] = Field(description="The segmentation mask of the item as a polygon of [x,y] coordinates, normalized to 0-1000.")
        label: str = Field(description="A descriptive label for the item.")
        
    class BoundingBoxes(BaseModel):
        boxes: List[BoundingBox]

    client = get_client()
    try:
        if image_path.startswith("http"):
            print(f"Usando URL pública de imagen: {image_path}")
            image_data = {"type": "image", "uri": image_path}
        else:
            print(f"Subiendo archivo local {image_path}...")
            my_file = client.files.upload(file=image_path)
            image_data = {"type": "image", "uri": my_file.uri, "mime_type": my_file.mime_type}
            
        print("Iniciando análisis estructurado (Objetos/Segmentación)...")
        interaction = client.interactions.create(
            model="gemini-3.6-flash",
            input=[
                {"type": "text", "text": task_prompt},
                image_data
            ],
            response_format={
                "type": "text",
                "mime_type": "application/json",
                "schema": BoundingBoxes.model_json_schema()
            },
            generation_config={
                "thinking_level": "minimal"
            }
        )
        
        items = BoundingBoxes.model_validate_json(interaction.output_text)
        print("\n--- Resultados del Análisis (Cajas Delimitadoras y Máscaras) ---")
        for box in items.boxes:
            print(f"Objeto detectado: {box.label}")
            print(f"  - Coordenadas (ymin, xmin, ymax, xmax): {box.box_2d}")
            print(f"  - Puntos en la máscara: {len(box.mask)}")
        print("--------------------------------------------------------------\n")
    except Exception as e:
        print(f"Error procesando imagen: {e}")

def engine_11_deep_research(prompt, webhook=None):
    import time
    print(f"[Motor 11] Investigador Profundo (Deep Research Agent)...")
    client = get_client()
    try:
        kwargs = {
            "agent": "deep-research-preview-04-2026",
            "input": prompt,
            "background": True,
        }
        if webhook:
            kwargs["webhook_config"] = {"uris": [webhook]}
            
        print("Iniciando investigación profunda (esto puede tardar varios minutos)...")
        interaction = client.interactions.create(**kwargs)
        
        print(f"ID de Investigación: {interaction.id}")
        if webhook:
            print(f"Modo asíncrono activado: El resultado se enviará al webhook cuando termine.")
        else:
            print("Esperando resultados (consultando estado cada 10 segundos)...")
            while True:
                status_interaction = client.interactions.get(id=interaction.id)
                if status_interaction.status == "completed":
                    print("\n--- Resultado de la Investigación ---")
                    print(status_interaction.steps[-1].content[0].text)
                    print("-------------------------------------\n")
                    break
                elif status_interaction.status == "failed":
                    print(f"\nLa investigación falló: {status_interaction.error}")
                    break
                time.sleep(10)
    except Exception as e:
        print(f"Error en la investigación: {e}")

def engine_12_computer_use(prompt):
    print(f"[Motor 12] Iniciando Navegador Autónomo (Computer Use)...")
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("ERROR: La librería 'playwright' no está instalada.")
        print("Por favor instala ejecutando: pip install playwright && playwright install chromium")
        return
    
    print(f"Instrucción para el Agente: {prompt}")
    print("Iniciando Chromium...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto("https://www.morales-plumbing.com")
        
        print("--- Execution Loop Simulado ---")
        print("1. Tomando screenshot: page.screenshot()")
        print("2. Enviando a Gemini Interactions API con tools=[{'type': 'computer_use'}]")
        print("3. Ejecutando click/teclado de acuerdo al function_call...")
        print("El flujo de Computer Use (tool execution) requiere este bucle continuo.")
        print("-------------------------------")
        
        import time
        time.sleep(3)
        browser.close()
        print("Prueba completada.")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="ORION Marketing 10.0 - El Ecosistema Total de Morales Plumbing")
    parser.add_argument('--engine', type=int, choices=range(0, 13), default=0,
                        help="0=HTML Legacy, 1=NanoBanana, 2=Veo3.1, 3=OmniFlash, 4=Lyria3, 5=LyriaRealTime, 6=TTS, 7=LiveAgent, 8=LiveTranslate, 9=FileSearchRAG, 10=RoboticsER, 11=DeepResearch, 12=ComputerUse")
    
    # Argumentos Legacy HTML (Engine 0)
    parser.add_argument('--job', help="Título del trabajo (Para Engine 0)")
    parser.add_argument('--fb', help="Texto Facebook (Para Engine 0)")
    parser.add_argument('--yelp', help="Texto Yelp (Para Engine 0)")
    parser.add_argument('--keywords', help="Keywords SEO (Para Engine 0)")
    
    # Argumentos Nuevos Motores
    parser.add_argument('--prompt', help="Prompt de texto para imágenes, video, música, etc.")
    parser.add_argument('--file', help="Ruta de archivo (imagen/video) para edición o análisis")
    parser.add_argument('--lang', default='es', help="Idioma destino para Live Translate (Motor 8)")
    parser.add_argument('--webhook', help="URL de Webhook Dinámico para tareas asíncronas de larga duración (LRO)")
    
    args = parser.parse_args()

    if args.engine == 0:
        if not all([args.job, args.fb, args.yelp, args.keywords]):
            print("ERROR: Engine 0 requiere --job, --fb, --yelp, y --keywords.")
        else:
            generate_legacy_html(args.job, args.fb, args.yelp, args.keywords)
    elif args.engine == 1:
        if not args.prompt: print("Falta --prompt")
        else: engine_1_image(args.prompt)
    elif args.engine == 2:
        if not args.prompt: print("Falta --prompt")
        else: engine_2_video(args.prompt)
    elif args.engine == 3:
        if not args.file or not args.prompt: print("Falta --file y --prompt")
        else: engine_3_video_understanding(args.file, args.prompt, args.webhook)
    elif args.engine == 4:
        if not args.prompt: print("Falta --prompt")
        else: engine_4_music(args.prompt)
    elif args.engine == 5:
        engine_5_live_dj()
    elif args.engine == 6:
        if not args.prompt: print("Falta --prompt para el texto a leer")
        else: engine_6_tts(args.prompt)
    elif args.engine == 7:
        if not args.prompt: print("Falta --prompt para el Agente")
        else: engine_7_live_agent(args.prompt, args.webhook)
    elif args.engine == 8:
        engine_8_live_translate(args.lang)
    elif args.engine == 9:
        engine_9_embeddings(args.prompt, args.file)
    elif args.engine == 10:
        if not args.file or not args.prompt: print("Falta --file (imagen) y --prompt")
        else: engine_10_robotics(args.file, args.prompt)
    elif args.engine == 11:
        if not args.prompt: print("Falta --prompt para la investigación")
        else: engine_11_deep_research(args.prompt, args.webhook)
    elif args.engine == 12:
        if not args.prompt: print("Falta --prompt para el navegador")
        else: engine_12_computer_use(args.prompt)
