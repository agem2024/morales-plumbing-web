const fs = require('fs');

const pages = [
    { name: 'eng_wh.html', key: 'wh', code: 'ENG-CENT-006' },
    { name: 'eng_valves.html', key: 'valves', code: 'ENG-CENT-007' },
    { name: 'eng_inspect.html', key: 'inspect', code: 'ENG-CENT-008' },
    { name: 'eng_training.html', key: 'training', code: 'ENG-CENT-009' },
    { name: 'eng_b2b.html', key: 'b2b', code: 'ENG-CENT-010' }
];

pages.forEach(p => {
    let content = fs.readFileSync('docs/' + p.name, 'utf8');
    
    // Fix code
    content = content.replace(/<span class="service-code" data-i18n="eng_eco_code">[^<]*<\/span>/, '<span class="service-code">' + p.code + '</span>');
    
    // Fix paragraphs
    content = content.replace(/<p data-i18n="eng_\\w+_p1">.*?<\/p>/, '<p data-i18n="eng_' + p.key + '_p1"></p>');
    content = content.replace(/<p data-i18n="eng_\\w+_p2">.*?<\/p>/, '<p data-i18n="eng_' + p.key + '_p2"></p>');
    
    // Replace the entire ul.tier-list with a clean one
    const newUl = '<ul class="tier-list">\\n' +
                  '    <li><span data-i18n="eng_' + p.key + '_li1"></span></li>\\n' +
                  '    <li><span data-i18n="eng_' + p.key + '_li2"></span></li>\\n' +
                  '    <li><span data-i18n="eng_' + p.key + '_li3"></span></li>\\n' +
                  '</ul>';
                
    content = content.replace(/<ul class="tier-list">[\\s\\S]*?<\/ul>/, newUl);
    
    // Remove the hardcoded text in title
    content = content.replace(new RegExp('<h1 class="service-title" data-i18n="eng_' + p.key + '_title">.*?<\\/h1>'), '<h1 class="service-title" data-i18n="eng_' + p.key + '_title"></h1>');
    
    fs.writeFileSync('docs/' + p.name, content);
    console.log('Cleaned ' + p.name);
});
