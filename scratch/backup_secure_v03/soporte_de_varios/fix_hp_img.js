const fs = require('fs');

let hp = fs.readFileSync('docs/req_hp.html', 'utf8');
hp = hp.replace(/<img src="\.\.\/assets\/comic_good_clean\.png" alt="Step 1">/, '<img src="../assets/comic_good.png" alt="Step 1">');
fs.writeFileSync('docs/req_hp.html', hp);
console.log('Fixed broken image link in req_hp.html');
