const fs = require('fs');

let indexContent = fs.readFileSync('index.html', 'utf8');

indexContent = indexContent.replace(
    /<img src="assets\/logo_portada\.png" alt="Joe" class="joe-avatar-small">/g, 
    '<img src="assets/joe_avatar.png" alt="Joe" class="joe-avatar-small">'
);

indexContent = indexContent.replace(
    /<div class="joe-trigger" onclick="toggleJoe\(\)" data-i18n-title="joe_trigger_title" title="Habla con Joe · Coordinador">\s*<img src="assets\/logo_portada\.png" alt="Joe">/g,
    '<div class="joe-trigger" onclick="toggleJoe()" data-i18n-title="joe_trigger_title" title="Habla con Joe · Coordinador">\n            <img src="assets/joe_avatar.png" alt="Joe">'
);

indexContent = indexContent.replace(
    /<img src="assets\/logo_portada\.png" alt="Joe" style="width: 50px; filter: drop-shadow\(0 0 10px var\(--neon-cyan\)\);">/g,
    '<img src="assets/icon_plumber_ai.png" alt="Joe" style="width: 50px; filter: drop-shadow(0 0 10px var(--neon-cyan));">'
);

fs.writeFileSync('index.html', indexContent);
console.log("Reverted the images in index.html to the original Joe icons");
