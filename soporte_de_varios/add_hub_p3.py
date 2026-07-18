import os

filepath = os.path.join('docs', 'diy_hub.html')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject diagData
diag_data = """
                tankless_flush: { name: "Tankless Flush / Descale", cpc: "CPC 507.0", cslb: "C-36 Class", materials: ["Submersible Pump", "Flow-Aide Descaler", "Washing Machine Hoses"], supplier: "The Home Depot Pro", labor: "1.5 hours", options: ["Option A: DIY Flush - $45", "Option B: Pro Flush & Service - $295"] },
                caulk: { name: "Bathtub Re-Caulking", cpc: "General Maintenance", cslb: "N/A", materials: ["100% Silicone Caulk", "Caulk Removal Tool", "Denatured Alcohol"], supplier: "Local Hardware", labor: "1.0 hours", options: ["Option A: DIY Caulk - $15", "Option B: Professional Seal - $150"] },
                aerator: { name: "Faucet Aerator Clean", cpc: "CPC 417.0", cslb: "N/A", materials: ["White Vinegar", "Aerator Key / Pliers", "Thread Seal Tape"], supplier: "Household", labor: "0.5 hours", options: ["Option A: Soak & Clean - $0", "Option B: Replace Aerator - $10"] },
                washer_hose: { name: "Washer Hoses Replacement", cpc: "CPC 606.0", cslb: "C-36 Class", materials: ["Stainless Steel Braided Hoses", "Channel Locks"], supplier: "Ferguson Enterprises", labor: "0.5 hours", options: ["Option A: Replace Hoses - $35", "Option B: Pro Install & Valve Test - $120"] },
                dishwasher: { name: "Dishwasher Drain Clog", cpc: "CPC 414.0", cslb: "C-36 Class", materials: ["Shop-Vac", "Air Gap Cleaning Brush"], supplier: "Morales Internal Stock", labor: "1.0 hours", options: ["Option A: Clear Air Gap - $0", "Option B: Replace Drain Hose - $185"] },
                showerhead: { name: "Showerhead Replacement", cpc: "CPC 408.0", cslb: "N/A", materials: ["New Showerhead", "Teflon Tape", "Adjustable Wrench"], supplier: "Kohler Direct", labor: "0.5 hours", options: ["Option A: Swap Head - $40", "Option B: Pro Install & Pressure Check - $125"] }
"""
if 'tankless_flush: {' not in content:
    # Find "smell: { name:" and inject after it
    marker = 'smell: { name: "Sewer Gas Odor Detection"'
    parts = content.split(marker)
    if len(parts) == 2:
        end_brace = parts[1].find('}') + 1
        part1 = parts[0] + marker + parts[1][:end_brace]
        part2 = parts[1][end_brace:]
        content = part1 + ",\n" + diag_data + part2

# 2. Inject diyTrans EN
trans_en = """
        "tf1": "Most common issues: Scale buildup in the heat exchanger causes error codes or low hot water flow.",
        "tf2": "Turn off power and gas. Connect a submersible pump and hoses to the isolation valves.",
        "tf3": "Circulate white vinegar or Flow-Aide for 45 minutes, then flush with cold water.",
        "ck1": "Most common issues: Old caulk cracks and molds, allowing water to seep behind walls.",
        "ck2": "Scrape away ALL old caulk using a special tool or razor, and clean with alcohol.",
        "ck3": "Apply a smooth bead of 100% silicone and smooth it out with a wet finger.",
        "ae1": "Most common issues: Calcium/sediment from hard water clogs the aerator, dropping pressure.",
        "ae2": "Unscrew the tip of the faucet (use an aerator key or pliers with a rag).",
        "ae3": "Soak the pieces in vinegar and scrub with an old toothbrush, then reassemble.",
        "wh1": "Most common issues: Old rubber washing machine hoses burst under pressure, flooding homes.",
        "wh2": "Turn off the hot and cold wall valves. Disconnect the old rubber hoses with channel locks.",
        "wh3": "Install new stainless steel braided burst-proof hoses. Hand tighten, then 1/4 turn with wrench.",
        "dw1": "Most common issues: Food debris clogs the sink air gap or the dishwasher corrugated drain hose.",
        "dw2": "Pop off the silver air gap cover on the sink and clear any gunk with a bottle brush.",
        "dw3": "If it still won't drain, check the connection where the hose meets the garbage disposal.",
        "shw1": "Most common issues: Upgrading to a more efficient or larger rain showerhead.",
        "shw2": "Unscrew the old head. Clean the pipe threads completely removing old tape.",
        "shw3": "Wrap new Teflon tape clockwise 3-4 times. Screw on the new head and tighten gently.",
"""
if '"tf1":' not in content:
    marker2 = '"sm3": "If the odor persists, the roof vent pipe may be blocked, requiring specialized equipment."'
    content = content.replace(marker2, marker2 + ",\n" + trans_en.rstrip(','))

# 3. Inject diyTrans ES
trans_es = """
        "tf1": "Fallas comunes: El sarro en el intercambiador causa códigos de error o baja presión de agua caliente.",
        "tf2": "Apaga gas y luz. Conecta una bomba sumergible y mangueras a las válvulas de servicio.",
        "tf3": "Circula vinagre blanco por 45 minutos, luego purga con agua limpia.",
        "ck1": "Fallas comunes: Silicona vieja se agrieta y forma moho, filtrando agua al muro.",
        "ck2": "Raspa TODA la silicona vieja y limpia profundamente con alcohol.",
        "ck3": "Aplica una línea uniforme de silicón 100% y alísala con un dedo húmedo.",
        "ae1": "Fallas comunes: Sedimentos tapan la malla del aereador, bajando la presión.",
        "ae2": "Desenrosca la punta de la llave. Usa un trapo para no rayar el metal.",
        "ae3": "Remoja las piezas en vinagre, cepilla y vuelve a armar.",
        "wh1": "Fallas comunes: Las mangueras de goma viejas de lavadora explotan, inundando casas.",
        "wh2": "Cierra las válvulas de la pared. Desconecta las mangueras viejas de goma.",
        "wh3": "Instala mangueras nuevas trenzadas de acero inoxidable (anti-explosión).",
        "dw1": "Fallas comunes: Comida tapa la trampa de aire o la manguera de drenaje de la lavavajillas.",
        "dw2": "Quita la tapa del 'air gap' en el lavamanos y límpialo con un cepillo.",
        "dw3": "Si sigue sin drenar, revisa la conexión con el triturador de basura.",
        "shw1": "Fallas comunes: Querer actualizar a una regadera más grande o eficiente.",
        "shw2": "Desenrosca la regadera vieja. Limpia la rosca del tubo completamente.",
        "shw3": "Aplica cinta teflón en sentido horario 3-4 vueltas y enrosca la nueva regadera.",
"""
if '"tf1": "Fallas comunes:' not in content:
    marker3 = '"sm3": "Si el olor persiste, es posible que la tubería de ventilación en el techo esté bloqueada, requiriendo equipo especializado."'
    content = content.replace(marker3, marker3 + ",\n" + trans_es.rstrip(','))

# 4. Inject getIssuesData panels
panels_data = """
                tankless_flush: {
                    target: "KNOWLEDGE BASE: TANKLESS FLUSH",
                    bg: "url('../assets/service_tankless.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/wh_comic.png", text: t.tf1 },
                        { cap: "HOW-TO:", img: "../assets/pb_svc_2.png", text: t.tf2 },
                        { cap: "SOLUTION:", img: "../assets/plan_best.png", text: t.tf3 }
                    ]
                },
                caulk: {
                    target: "KNOWLEDGE BASE: TUB CAULKING",
                    bg: "url('../assets/pb_svc_10.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/pb_svc_3.png", text: t.ck1 },
                        { cap: "HOW-TO:", img: "../assets/plan_good.png", text: t.ck2 },
                        { cap: "SOLUTION:", img: "../assets/pb_svc_4.png", text: t.ck3 }
                    ]
                },
                aerator: {
                    target: "KNOWLEDGE BASE: FAUCET AERATOR",
                    bg: "url('../assets/pb_svc_11.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/pb_svc_5.png", text: t.ae1 },
                        { cap: "HOW-TO:", img: "../assets/plan_better.png", text: t.ae2 },
                        { cap: "SOLUTION:", img: "../assets/pb_svc_6.png", text: t.ae3 }
                    ]
                },
                washer_hose: {
                    target: "KNOWLEDGE BASE: WASHER HOSES",
                    bg: "url('../assets/pb_svc_12.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/pb_svc_7.png", text: t.wh1 },
                        { cap: "HOW-TO:", img: "../assets/pb_svc_8.png", text: t.wh2 },
                        { cap: "SOLUTION:", img: "../assets/pb_svc_9.png", text: t.wh3 }
                    ]
                },
                dishwasher: {
                    target: "KNOWLEDGE BASE: DISHWASHER DRAIN",
                    bg: "url('../assets/pb_svc_13.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/valves_comic.png", text: t.dw1 },
                        { cap: "HOW-TO:", img: "../assets/pb_svc_1.png", text: t.dw2 },
                        { cap: "SOLUTION:", img: "../assets/pb_svc_15.png", text: t.dw3 }
                    ]
                },
                showerhead: {
                    target: "KNOWLEDGE BASE: SHOWERHEAD",
                    bg: "url('../assets/pb_svc_14.png')",
                    panels: [
                        { cap: "INFO:", img: "../assets/inspect_comic.png", text: t.shw1 },
                        { cap: "HOW-TO:", img: "../assets/training_comic.png", text: t.shw2 },
                        { cap: "SOLUTION:", img: "../assets/termo_comic.png", text: t.shw3 }
                    ]
                }
"""
if 'tankless_flush: {' not in content: # Just checking again although we did diagData
    pass

if 'tankless_flush:' not in content.split('getIssuesData() {')[1]:
    # Need to inject after smell: { ... } inside getIssuesData
    marker4 = 'smell: {'
    parts = content.split('getIssuesData() {')[1].split(marker4)
    if len(parts) == 2:
        # We need to find the matching closing brace of smell: {
        # panels: [ ... ] }
        end_brace = parts[1].find(']')
        end_brace = parts[1].find('}', end_brace) + 1
        
        part1 = content.split('getIssuesData() {')[0] + 'getIssuesData() {' + parts[0] + marker4 + parts[1][:end_brace]
        part2 = parts[1][end_brace:]
        content = part1 + ",\n" + panels_data + part2

# 5. Inject issuesLinks
links_data = """
            tankless_flush: [
                { text: "YouTube: How to flush a tankless water heater", url: "https://www.youtube.com/results?search_query=how+to+flush+tankless+water+heater" }
            ],
            caulk: [
                { text: "YouTube: How to caulk a bathtub", url: "https://www.youtube.com/results?search_query=how+to+caulk+a+bathtub" }
            ],
            aerator: [
                { text: "YouTube: Clean a faucet aerator", url: "https://www.youtube.com/results?search_query=how+to+clean+faucet+aerator" }
            ],
            washer_hose: [
                { text: "YouTube: Replace washing machine hoses", url: "https://www.youtube.com/results?search_query=replace+washing+machine+hoses" }
            ],
            dishwasher: [
                { text: "YouTube: Unclog dishwasher air gap", url: "https://www.youtube.com/results?search_query=unclog+dishwasher+air+gap" }
            ],
            showerhead: [
                { text: "YouTube: Replace a shower head", url: "https://www.youtube.com/results?search_query=replace+shower+head" }
            ]
"""
if 'tankless_flush:' not in content.split('const issuesLinks = {')[1]:
    marker5 = 'smell: ['
    parts = content.split('const issuesLinks = {')[1].split(marker5)
    if len(parts) == 2:
        end_bracket = parts[1].find(']') + 1
        part1 = content.split('const issuesLinks = {')[0] + 'const issuesLinks = {' + parts[0] + marker5 + parts[1][:end_bracket]
        part2 = parts[1][end_bracket:]
        content = part1 + ",\n" + links_data + part2

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully injected all new data into diy_hub.html")
