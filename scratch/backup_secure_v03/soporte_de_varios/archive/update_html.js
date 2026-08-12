const fs = require('fs');
const path = require('path');

const files = [
    {
        name: 'eng_termografia.html',
        prefix: 'eng_termo'
    },
    {
        name: 'eng_eco.html',
        prefix: 'eng_eco'
    },
    {
        name: 'eng_diseno.html',
        prefix: 'eng_diseno'
    },
    {
        name: 'eng_cobre.html',
        prefix: 'eng_cobre'
    },
    {
        name: 'eng_septico.html',
        prefix: 'eng_septico'
    }
];

files.forEach(fileInfo => {
    const filePath = path.join(__dirname, 'docs', fileInfo.name);
    let html = fs.readFileSync(filePath, 'utf8');
    const p = fileInfo.prefix;

    html = html.replace(/<h1 class="service-title">(.+?)<\/h1>/, `<h1 class="service-title" data-i18n="${p}_title">$1</h1>`);
    html = html.replace(/<span class="service-code">(.+?)<\/span>/, `<span class="service-code" data-i18n="${p}_code">$1</span>`);
    
    // Replace p1, p2
    const pMatch = html.match(/<div class="service-text-block">\s*<p>(.+?)<\/p>\s*<p>(.+?)<\/p>/);
    if (pMatch) {
        html = html.replace(pMatch[0], `<div class="service-text-block">\n                <p data-i18n="${p}_p1">${pMatch[1]}</p>\n                <p data-i18n="${p}_p2">${pMatch[2]}</p>`);
    }

    // Replace tech specs
    const techRegex = /<li>\s*<strong>(.+?)<\/strong>\s*([^<]+)\s*<\/li>/g;
    let index = 1;
    html = html.replace(techRegex, (match, title, desc) => {
        const str = `<li>
                        <strong data-i18n="${p}_tech${index}_title">${title}</strong>
                        <span data-i18n="${p}_tech${index}_desc">${desc.trim()}</span>
                    </li>`;
        index++;
        return str;
    });

    // Replace back button
    html = html.replace(/<a href="\.\.\/index\.html#services" class="back-btn">(.+?)<\/a>/, `<a href="../index.html#services" class="back-btn" data-i18n="eng_back">$1</a>`);

    // Add script tag if not exists
    if (!html.includes('app.js')) {
        const scriptTags = `\n    <script src="../app.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof setLanguage === 'function') {
                setLanguage(localStorage.getItem('morales_lang') || 'es');
            }
        });
    </script>
</body>`;
        html = html.replace(/<\/body>/, scriptTags);
    }

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Updated ${fileInfo.name}`);
});
