import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

htm_content = htm_content.replace('yt: "https://www.youtube.com/results?search_query=how+to+temporarily+fix+leaky+pipe"', 'yt: "https://www.youtube.com/results?search_query=how+to+clean+faucet+aerator"')
htm_content = htm_content.replace('yt: "https://www.youtube.com/results?search_query=how+to+thaw+frozen+pipes"', 'yt: "https://www.youtube.com/results?search_query=how+to+change+ac+filter"')

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("YouTube links fixed")
