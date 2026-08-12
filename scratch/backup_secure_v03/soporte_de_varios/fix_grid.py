import os

filepath = 'index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# I need to find where <!-- Card 10 --> starts, and move it inside the diy-grid
# The structure is currently:
#                 </div> <!-- End of Card 9 diy-content -->
#             </div> <!-- End of Card 9 -->
#         </div> <!-- End of diy-grid (Oops) -->
#
#         <!-- Card 10 -->
#
# We need to remove the `</div>` that closes diy-grid before Card 10, and put it after Card 15.
# Let's locate "<!-- Card 10 -->"
parts = content.split('<!-- Card 10 -->')
if len(parts) == 2:
    # Before Card 10, there should be </div>\n            </div>\n\n
    part1 = parts[0]
    part2 = '<!-- Card 10 -->' + parts[1]
    
    # Check the end of part1
    if '</div>\n            </div>\n\n' in part1[-50:]:
        # Remove the last </div> which closed the grid
        part1 = part1.rsplit('</div>', 1)[0]
    elif '</div>\n            </div>' in part1[-50:]:
        part1 = part1.rsplit('</div>', 1)[0]
        
    # Now add the closing div for the grid at the end of the cards (before </section>)
    if '</section>' in part2:
        part2 = part2.replace('</section>', '</div>\n        </section>', 1)
        
    new_content = part1 + part2
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed layout of cards in index.html")
else:
    print("Card 10 not found or found multiple times")
