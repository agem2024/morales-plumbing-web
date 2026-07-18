import urllib.request
import urllib.parse
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

tasks = {
    "assets/diy_dishwasher_filter.png": "Highly detailed comic style illustration, neon cyan and orange colors, close up of removing a cylindrical filter from a dishwasher",
    "assets/diy_caulk_tub.png": "Highly detailed comic style illustration, neon cyan and orange colors, applying caulk sealant to a bathtub corner with a caulking gun",
    "assets/diy_frozen_pipes.png": "Highly detailed comic style illustration, neon cyan and orange colors, frozen pipes covered in ice with a hair dryer blowing hot air on them",
    "assets/diy_tub_drain.png": "Highly detailed comic style illustration, neon cyan and orange colors, unclogging a bathtub drain using a plastic hair snake tool",
    "assets/diy_washer_hoses.png": "Highly detailed comic style illustration, neon cyan and orange colors, connecting stainless steel braided hoses to a washing machine"
}

for filepath, prompt in tasks.items():
    print(f"Generating {filepath} via Pollinations.ai...")
    encoded_prompt = urllib.parse.quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=512&height=512&nologo=true"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        print(f"Success: {filepath}")
    except Exception as e:
        print(f"Error: {e}")
