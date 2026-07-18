import matplotlib.pyplot as plt
import matplotlib.patches as patches

fig, ax = plt.subplots(figsize=(5,5))
ax.set_xlim(0, 100)
ax.set_ylim(0, 100)
ax.axis('off')

# Background
fig.patch.set_facecolor('#080e24')
ax.set_facecolor('#080e24')

# Washing machine box
rect = patches.Rectangle((10, 10), 40, 50, linewidth=3, edgecolor='#00f5ff', facecolor='#112244')
ax.add_patch(rect)

# Washing machine window
circle = patches.Circle((30, 35), 12, linewidth=2, edgecolor='#00f5ff', facecolor='#080e24')
ax.add_patch(circle)

# Buttons
ax.add_patch(patches.Circle((20, 55), 2, color='#ff8c00'))
ax.add_patch(patches.Circle((40, 55), 2, color='#ff8c00'))

# Hose
hose_x = [50, 60, 70, 80, 80]
hose_y = [20, 25, 15, 30, 60]
ax.plot(hose_x, hose_y, color='#ff8c00', linewidth=6, solid_capstyle='round')
ax.plot(hose_x, hose_y, color='#ffffff', linewidth=2, linestyle='dashed')

# Valve
ax.add_patch(patches.Rectangle((75, 60), 10, 10, color='#00f5ff'))
ax.add_patch(patches.Circle((80, 75), 5, color='#ff8c00'))

# Text
plt.text(50, 90, "WASHER", color='#00f5ff', fontsize=20, weight='bold', ha='center', fontfamily='sans-serif')
plt.text(50, 80, "HOSES", color='#ff8c00', fontsize=18, weight='bold', ha='center', fontfamily='sans-serif')

plt.tight_layout()
plt.savefig('assets/diy_washer_hoses.png', dpi=100, bbox_inches='tight', facecolor=fig.get_facecolor())
print("Created matplotlib washer hoses graphic")
