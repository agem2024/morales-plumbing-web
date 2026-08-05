import re
with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

pod_match = re.search(r'<div class="podcast-list">.*?</button>\s*</div>', content, re.DOTALL)
if pod_match:
    print("Podcast list found:")
    print(pod_match.group(0)[:500])
else:
    print("No podcast list found!")

vid_match = re.search(r'MULTIMEDIA: VIDEOS Y DOCUMENTALES', content)
if vid_match:
    print("\nVideos were successfully injected.")
else:
    print("\nVideos are MISSING!")
