import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import os

def setup_fig():
    fig, ax = plt.subplots(figsize=(5,5))
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.axis('off')
    fig.patch.set_facecolor('#080e24')
    ax.set_facecolor('#080e24')
    return fig, ax

# 1. Dishwasher Filter
fig, ax = setup_fig()
# Dishwasher tub
ax.add_patch(patches.Rectangle((10, 10), 80, 80, fill=False, edgecolor='#00f5ff', linewidth=4))
# Bottom rack rails
ax.plot([15, 85], [30, 30], color='#ff8c00', linewidth=2)
# Cylindrical filter being pulled up
ax.add_patch(patches.Rectangle((40, 20), 20, 30, edgecolor='#00f5ff', fill=False, linewidth=3, linestyle='dashed'))
ax.add_patch(patches.Circle((50, 50), 10, edgecolor='#ff8c00', fill=False, linewidth=4))
# Arrows pointing up
ax.arrow(50, 65, 0, 15, head_width=5, head_length=5, fc='#ff8c00', ec='#ff8c00', linewidth=3)
plt.text(50, 90, "DISHWASHER FILTER", color='#00f5ff', fontsize=16, weight='bold', ha='center')
plt.savefig('assets/diy_dishwasher_filter.png', dpi=100, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.close()

# 2. Caulk Tub
fig, ax = setup_fig()
# Tub corner
ax.plot([10, 50, 90], [80, 30, 30], color='#00f5ff', linewidth=4)
# Caulk gun
ax.plot([50, 70], [50, 70], color='#ff8c00', linewidth=5) # Barrel
ax.plot([70, 75], [70, 65], color='#ff8c00', linewidth=4) # Handle
ax.plot([45, 50], [45, 50], color='#ffffff', linewidth=2) # Nozzle
# Caulk line
ax.plot([20, 50], [47, 30], color='#ffffff', linewidth=6, solid_capstyle='round')
plt.text(50, 90, "RE-CAULK TUB", color='#00f5ff', fontsize=18, weight='bold', ha='center')
plt.savefig('assets/diy_caulk_tub.png', dpi=100, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.close()

# 3. Frozen Pipes
fig, ax = setup_fig()
# Pipe
ax.plot([20, 80], [40, 40], color='#00f5ff', linewidth=10, solid_capstyle='round')
# Ice crystals (stars)
ax.plot([30, 40, 70], [45, 35, 45], marker='*', color='#ffffff', markersize=15, linestyle='None')
# Hair dryer
ax.add_patch(patches.Rectangle((40, 60), 20, 15, color='#ff8c00'))
ax.plot([60, 65], [60, 50], color='#ff8c00', linewidth=6) # handle
# Heat waves
for i in range(3):
    ax.plot([45+i*5, 40+i*5], [55, 45], color='#ff0000', linewidth=2)
plt.text(50, 90, "THAW PIPES", color='#00f5ff', fontsize=18, weight='bold', ha='center')
plt.savefig('assets/diy_frozen_pipes.png', dpi=100, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.close()

# 4. Tub Drain
fig, ax = setup_fig()
# Tub basin
ax.plot([10, 40, 60, 90], [80, 20, 20, 80], color='#00f5ff', linewidth=4)
# Drain hole
ax.plot([45, 55], [20, 20], color='#080e24', linewidth=6) # gap
# Pipe going down
ax.plot([45, 45], [20, 5], color='#00f5ff', linewidth=3)
ax.plot([55, 55], [20, 5], color='#00f5ff', linewidth=3)
# Hair snake
snake_x = [70, 60, 55, 50, 50]
snake_y = [60, 40, 30, 20, 10]
ax.plot(snake_x, snake_y, color='#ff8c00', linewidth=4)
# Handle
ax.add_patch(patches.Circle((70, 60), 3, color='#ff8c00'))
# Hair clog
ax.plot([50], [10], marker='x', color='#ffffff', markersize=12, markeredgewidth=3)
plt.text(50, 90, "UNCLOG DRAIN", color='#00f5ff', fontsize=18, weight='bold', ha='center')
plt.savefig('assets/diy_tub_drain.png', dpi=100, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.close()

print("Created 4 custom images")
