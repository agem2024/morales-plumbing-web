const fs = require('fs');

// Fix req_hp.html
let req_hp = fs.readFileSync('docs/req_hp.html', 'utf8');
req_hp = req_hp.replace(/comic_good\.png/g, 'plan_good.png');
req_hp = req_hp.replace(/comic_better\.png/g, 'plan_better.png');
req_hp = req_hp.replace(/comic_best\.png/g, 'plan_best.png');
fs.writeFileSync('docs/req_hp.html', req_hp);

// Fix req_tt.html
let req_tt = fs.readFileSync('docs/req_tt.html', 'utf8');
req_tt = req_tt.replace(/comic_good\.png/g, 'comic_tt_good.png');
req_tt = req_tt.replace(/comic_better\.png/g, 'comic_tt_better.png');
req_tt = req_tt.replace(/comic_best\.png/g, 'comic_tt_best.png');
fs.writeFileSync('docs/req_tt.html', req_tt);

// Fix req_ttt.html
let req_ttt = fs.readFileSync('docs/req_ttt.html', 'utf8');
req_ttt = req_ttt.replace(/comic_good\.png/g, 'comic_ttt_good.png');
req_ttt = req_ttt.replace(/comic_better\.png/g, 'comic_ttt_better.png');
req_ttt = req_ttt.replace(/comic_best\.png/g, 'comic_ttt_best.png');
fs.writeFileSync('docs/req_ttt.html', req_ttt);

console.log("Fixed req_*.html files");

// Let's see diy_hub.html matches
const diy_hub = fs.readFileSync('docs/diy_hub.html', 'utf8');
const lines = diy_hub.split('\n');
lines.forEach((line, i) => {
    if (line.includes('comic_good.png') || line.includes('comic_better.png') || line.includes('comic_best.png')) {
        console.log(`diy_hub.html line ${i+1}: ${line.trim()}`);
    }
});
