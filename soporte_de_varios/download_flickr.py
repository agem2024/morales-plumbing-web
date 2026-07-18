import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

images = {
    "assets/diy_dishwasher_filter.png": "https://loremflickr.com/512/512/dishwasher,kitchen",
    "assets/diy_caulk_tub.png": "https://loremflickr.com/512/512/bathroom,caulk",
    "assets/diy_frozen_pipes.png": "https://loremflickr.com/512/512/frozen,pipe,plumbing",
    "assets/diy_tub_drain.png": "https://loremflickr.com/512/512/clogged,drain,bathroom",
    "assets/diy_washer_hoses.png": "https://loremflickr.com/512/512/washing,machine,hose"
}

for filepath, url in images.items():
    print(f"Downloading {filepath}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: {filepath}")
    except Exception as e:
        print(f"Error downloading {filepath}: {e}")
