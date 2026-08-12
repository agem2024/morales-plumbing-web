import os
import re

htm_path = os.path.join('docs', 'hazlo_tu_mismo.html')
with open(htm_path, 'r', encoding='utf-8') as f:
    htm_content = f.read()

# 1. Remove duplicate old diy-task-content and syntax errors
bad_css = """        .diy-task-content { padding: 20px; display: none; }
        .diy-task-content.active { display: block; }
        
        .task-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .task-box { background: rgba(0,0,0,0.4); padding: 15px; border: 1px solid #333; border-radius: 8px; }
        .task-box h4 { color: var(--orange); margin-top: 0; font-family: 'Orbitron'; }
        .task-box ul { padding-left: 20px; margin: 0; }
        .task-box li { margin-bottom: 5px; }
        
        
        .youtube-btn { display: inline-block; padding: 10px 15px; background: #ff0000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px; }
        
        .calc-input { width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 6px; border: 1px solid var(--cyan); background: rgba(0,0,0,0.8); color: #fff; }
        .calc-btn { width: 100%; padding: 10px; background: var(--cyan); color: #000; border: none; font-weight: bold; cursor: pointer; font-family: 'Orbitron'; }
        
        @media(max-width: 768px) {
            .diy-container { flex-direction: column; }
            .joe-ai-panel { position: static; width: 100%; }
            .task-grid { grid-template-columns: 1fr; }
        }
    
        
            .task-illustration { max-height: 220px; }
            .graffiti-title { font-size: 1.8rem; }
        }"""

# Replace it with just the essentials
good_css = """
        .calc-input { width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 6px; border: 1px solid var(--cyan); background: rgba(0,0,0,0.8); color: #fff; }
        .calc-btn { width: 100%; padding: 10px; background: var(--cyan); color: #000; border: none; font-weight: bold; cursor: pointer; font-family: 'Orbitron'; }
        
        .graffiti-title { font-size: 1.8rem; }
        
        @media(max-width: 768px) {
            .diy-container { flex-direction: column; }
            .joe-ai-panel { position: static; width: 100%; }
        }
"""
htm_content = htm_content.replace(bad_css, good_css)

with open(htm_path, 'w', encoding='utf-8') as f:
    f.write(htm_content)

print("Cleaned up CSS")
