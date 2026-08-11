const fs = require('fs');
const path = require('path');
const base = 'C:\\Users\\alexp\\Documentos_Locales_Backup\\Morales plumbing\\V.01 web';
const indexFiles = [
    path.join(base, 'morales-plumbing-web', 'index.html'),
    path.join(base, 'V.02', 'index.html'),
    path.join(base, 'vo3.0', 'index.html')
];

indexFiles.forEach(idxPath => {
    if (fs.existsSync(idxPath)) {
        let html = fs.readFileSync(idxPath, 'utf8');
        html = html.replace(
            '<section id="contact" class="page-section" style="padding: 0; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">',
            '<section id="contact" class="page-section" style="padding: 0; min-height: 100vh; flex-direction: column; justify-content: center;">'
        );
        fs.writeFileSync(idxPath, html);
        console.log('Fixed inline display: flex in ' + idxPath);
    }
});
