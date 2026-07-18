const fs = require('fs');

// The new, ultra-visible sci-fi style for the HTML dialogues
const newBubbleStyle = `
        .comic-bubble { 
            background: rgba(0, 0, 0, 0.9); 
            border: 2px solid var(--neon-cyan); 
            color: #ffcc00; /* Bright Neon Yellow Text */
            padding: 1.2rem; 
            font-family: 'Orbitron', sans-serif; 
            font-size: 1.1rem; 
            font-weight: bold; 
            border-radius: 12px; 
            position: relative; 
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.4); 
            text-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
            margin-top: -20px; /* Pull it slightly over the image for cohesion */
            z-index: 10;
        }
`;

function processFile(file, originalImages) {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Replace the bubble CSS
    html = html.replace(/\.comic-bubble\s*\{[^}]+\}/, newBubbleStyle.trim());

    // 2. Restore images based on the specific page
    // We look for any img tag inside a comic-img-wrapper and replace it with the original array
    // Wait, let's just do a manual targeted replace to be safe.
    
    fs.writeFileSync(file, html);
    console.log('Updated CSS for ' + file);
}

// 1. Update req_hp.html
processFile('docs/req_hp.html');
let hp = fs.readFileSync('docs/req_hp.html', 'utf8');
hp = hp.replace(/<img src="\.\.\/assets\/icon_plumber_eco\.png" alt="Step 1">/, '<img src="../assets/comic_good_clean.png" alt="Step 1">');
hp = hp.replace(/<img src="\.\.\/assets\/icon_plumber_biz\.png" alt="Step 2">/, '<img src="../assets/comic_better.png" alt="Step 2">');
hp = hp.replace(/<img src="\.\.\/assets\/icon_plumber_sat\.png" alt="Step 3">/, '<img src="../assets/comic_best.png" alt="Step 3">');
fs.writeFileSync('docs/req_hp.html', hp);

// 2. Update req_tt.html
processFile('docs/req_tt.html');
let tt = fs.readFileSync('docs/req_tt.html', 'utf8');
tt = tt.replace(/<img src="\.\.\/assets\/diy_disposal\.png" alt="Step 1">/, '<img src="../assets/tt_comic_1.png" alt="Step 1">');
tt = tt.replace(/<img src="\.\.\/assets\/navien_plan_good\.png" alt="Step 2">/, '<img src="../assets/tt_comic_2.png" alt="Step 2">');
tt = tt.replace(/<img src="\.\.\/assets\/diy_valve\.png" alt="Step 3">/, '<img src="../assets/tt_comic_3.png" alt="Step 3">');
tt = tt.replace(/<img src="\.\.\/assets\/icon_plumber_sat\.png" alt="Step 4">/, '<img src="../assets/tt_comic_4.png" alt="Step 4">');
fs.writeFileSync('docs/req_tt.html', tt);

// 3. Update req_ttt.html
processFile('docs/req_ttt.html');
let ttt = fs.readFileSync('docs/req_ttt.html', 'utf8');
ttt = ttt.replace(/<img src="\.\.\/assets\/icon_plumber_biz\.png" alt="Step 1">/, '<img src="../assets/ttt_comic_1.png" alt="Step 1">');
ttt = ttt.replace(/<img src="\.\.\/assets\/navien_plan_better\.png" alt="Step 2">/, '<img src="../assets/ttt_comic_2.png" alt="Step 2">');
ttt = ttt.replace(/<img src="\.\.\/assets\/diy_valve\.png" alt="Step 3">/, '<img src="../assets/ttt_comic_3.png" alt="Step 3">');
ttt = ttt.replace(/<img src="\.\.\/assets\/navien_plan_best\.png" alt="Step 4">/, '<img src="../assets/ttt_comic_4.png" alt="Step 4">');
fs.writeFileSync('docs/req_ttt.html', ttt);

console.log('Restored comic images and applied ultra-visible neon text style.');
