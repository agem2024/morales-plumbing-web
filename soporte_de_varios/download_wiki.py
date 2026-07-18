import urllib.request
import urllib.parse
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

pages = {
    "Dishwasher": "assets/diy_dishwasher_filter.png",
    "Caulking": "assets/diy_caulk_tub.png",
    "Pipe_(fluid_conveyance)": "assets/diy_frozen_pipes.png",
    "Drain_(plumbing)": "assets/diy_tub_drain.png",
    "Washing_machine": "assets/diy_washer_hoses.png"
}

for page, filepath in pages.items():
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={page}&prop=pageimages&format=json&pithumbsize=500"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode())
            pages_data = data['query']['pages']
            for page_id in pages_data:
                image_url = pages_data[page_id]['thumbnail']['source']
                print(f"Downloading {page} from {image_url}")
                urllib.request.urlretrieve(image_url, filepath)
    except Exception as e:
        print(f"Error for {page}: {e}")

