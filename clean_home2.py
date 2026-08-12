with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Delete lines 530 to 540 (indices 529 to 539)
# Actually let's just find the exact index dynamically to be safe
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "<!-- ES VERSION: Video + Infographic -->" in line:
        # Check if we are in #home (before #services)
        if i < 700:
            start_idx = i
            break

if start_idx != -1:
    for i in range(start_idx, len(lines)):
        if "</div>" in lines[i] and "</div>" in lines[i-1]:
            # Found the end of the block?
            pass
        if "<!-- NEW ECOSYSTEM MODULES (High-Fidelity) -->" in lines[i]:
            end_idx = i - 1
            break
            
    print(f"Deleting from {start_idx} to {end_idx}")
    del lines[start_idx:end_idx]
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.writelines(lines)
    print("Deleted.")
else:
    print("Not found.")
