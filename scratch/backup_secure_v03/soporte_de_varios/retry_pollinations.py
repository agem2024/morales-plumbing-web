import urllib.request
import urllib.parse
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

tasks = {
    "assets/diy_caulk_tub.png": "Highly detailed comic style illustration, neon cyan and orange colors, applying caulk sealant to a bathtub corner with a caulking gun",
    "assets/diy_washer_hoses.png": "Highly detailed comic style illustration, neon cyan and orange colors, connecting stainless steel braided hoses to a washing machine"
}

for filepath, prompt in tasks.items():
    print(f"Generating {filepath} via Pollinations.ai...")
    encoded_prompt = urllib.parse.quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=512&height=512&nologo=true"
    
    success = False
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as response:
                with open(filepath, 'wb') as f:
                    f.write(response.read())
            print(f"Success: {filepath}")
            success = True
            break
        except Exception as e:
            print(f"Attempt {attempt+1} failed: {e}")
            time.sleep(2)
