import urllib.request
import urllib.parse
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

tasks = {
    "assets/diy_aerator.png": "Highly detailed comic style illustration, neon cyan and orange colors, hands unscrewing a small faucet aerator tip from a bathroom sink",
    "assets/diy_hvac_filter.png": "Highly detailed comic style illustration, neon cyan and orange colors, person replacing a square white air conditioner HVAC filter in a wall grille",
    "assets/diy_house_filter.png": "Highly detailed comic style illustration, neon cyan and orange colors, plumber changing a large cylindrical blue whole house water filter housing"
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
