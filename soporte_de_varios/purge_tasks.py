import re
import os

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# Replace the entire tasks array with exactly 10 tasks that have perfectly matching diy_ images.
perfect_tasks = """const tasks = [
            {
                id: "t1",
                key: "disposal",
                img: "../assets/diy_disposal.png",
                yt: "https://www.youtube.com/results?search_query=how+to+unjam+garbage+disposal+allen+wrench"
            },
            {
                id: "t2",
                key: "heater",
                img: "../assets/diy_heater.png",
                yt: "https://www.youtube.com/results?search_query=how+to+reset+water+heater+thermal+switch"
            },
            {
                id: "t3",
                key: "toilet",
                img: "../assets/diy_toilet.png",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+running+toilet+flapper"
            },
            {
                id: "t4",
                key: "sink",
                img: "../assets/diy_sink.png",
                yt: "https://www.youtube.com/results?search_query=how+to+unclog+sink+p-trap"
            },
            {
                id: "t5",
                key: "faucet",
                img: "../assets/diy_faucet.png",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+leaky+faucet+cartridge"
            },
            {
                id: "t6",
                key: "showerhead",
                img: "../assets/diy_shower.png",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+shower+head"
            },
            {
                id: "t7",
                key: "smell",
                img: "../assets/diy_smell.png",
                yt: "https://www.youtube.com/results?search_query=how+to+fix+sewer+gas+smell+floor+drain"
            },
            {
                id: "t8",
                key: "washer_hose",
                img: "../assets/diy_valve.png",
                yt: "https://www.youtube.com/results?search_query=how+to+replace+washing+machine+hoses"
            },
            {
                id: "t9",
                key: "anode",
                img: "../assets/diy_anode.png",
                yt: "https://www.youtube.com/results?search_query=how+to+check+water+heater+anode+rod"
            },
            {
                id: "t10",
                key: "plunge_toilet",
                img: "../assets/diy_plunger.png",
                yt: "https://www.youtube.com/results?search_query=how+to+plunge+a+toilet"
            }
        ];"""

htm_content = re.sub(r'const tasks = \[\s*\{.*?\}\s*\];', perfect_tasks, htm_content, flags=re.DOTALL)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Tasks array purged and replaced with 10 exact matches.")
