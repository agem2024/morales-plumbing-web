const fs = require('fs');

// 1. Update HTML pages
const files = [
    'eng_wh.html', 'eng_valves.html', 'eng_inspect.html', 'eng_training.html', 'eng_b2b.html',
    'eng_eco.html', 'eng_cobre.html', 'eng_diseno.html', 'eng_septico.html', 'eng_termografia.html'
];

for (const file of files) {
    const path = 'docs/' + file;
    if (!fs.existsSync(path)) continue;
    
    let content = fs.readFileSync(path, 'utf8');
    
    // Standardize the comic title
    content = content.replace(/<h2 class="tech-spec-header" data-i18n="eng_[a-z0-9_]+_comic_title" style="text-align: center;">[^<]*<\/h2>/, '<h2 class="tech-spec-header" data-i18n="eng_comic_title" style="text-align: center;">Metodología (Storyboard)</h2>');
    
    // For the old files that didn't have data-i18n
    content = content.replace(/<h2 class="tech-spec-header" style="text-align: center;">Metodología \(Storyboard\)<\/h2>/, '<h2 class="tech-spec-header" data-i18n="eng_comic_title" style="text-align: center;">Metodología (Storyboard)</h2>');
    
    fs.writeFileSync(path, content);
}
console.log('Updated HTML files');

// 2. Update app.js
let appJs = fs.readFileSync('app.js', 'utf8');

// Insert eng_comic_title right after "en": {  or "es": { etc.
const dict = {
    'en': '"eng_comic_title": "Methodology (Storyboard)",',
    'es': '"eng_comic_title": "Metodología (Storyboard)",',
    'zh': '"eng_comic_title": "方法论 (分镜)",',
    'tl': '"eng_comic_title": "Pamamaraan (Storyboard)",',
    'vi': '"eng_comic_title": "Phương pháp luận (Storyboard)",'
};

if (!appJs.includes('"eng_comic_title"')) {
    appJs = appJs.replace(/"en":\s*\{/, '"en": {\n        ' + dict['en']);
    appJs = appJs.replace(/"es":\s*\{/, '"es": {\n        ' + dict['es']);
    appJs = appJs.replace(/"zh":\s*\{/, '"zh": {\n        ' + dict['zh']);
    appJs = appJs.replace(/"tl":\s*\{/, '"tl": {\n        ' + dict['tl']);
    appJs = appJs.replace(/"vi":\s*\{/, '"vi": {\n        ' + dict['vi']);
    fs.writeFileSync('app.js', appJs);
    console.log('Updated app.js');
} else {
    console.log('app.js already has eng_comic_title');
}
