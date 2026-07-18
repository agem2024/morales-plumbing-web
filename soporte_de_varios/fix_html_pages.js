const fs = require('fs');

const baseHtml = fs.readFileSync('docs/eng_eco.html', 'utf8');

const pages = [
    { name: 'eng_wh.html', key: 'wh', icon: 'service_wh.png' },
    { name: 'eng_valves.html', key: 'valves', icon: 'service_valves.png' },
    { name: 'eng_inspect.html', key: 'inspect', icon: 'service_inspect.png' },
    { name: 'eng_training.html', key: 'training', icon: 'service_training.png' },
    { name: 'eng_b2b.html', key: 'b2b', icon: 'service_b2b.png' }
];

pages.forEach(p => {
    let pContent = baseHtml;
    // Replace keys correctly
    pContent = pContent.replace(/eng_eco_title/g, 'eng_' + p.key + '_title');
    pContent = pContent.replace(/eng_eco_p1/g, 'eng_' + p.key + '_p1');
    pContent = pContent.replace(/eng_eco_p2/g, 'eng_' + p.key + '_p2');
    
    // Eco specific tech specs
    pContent = pContent.replace(/eng_eco_tech1_title/g, 'eng_' + p.key + '_li1');
    pContent = pContent.replace(/eng_eco_tech1_desc/g, ''); // we will combine title and desc into one key for li
    pContent = pContent.replace(/eng_eco_tech2_title/g, 'eng_' + p.key + '_li2');
    pContent = pContent.replace(/eng_eco_tech2_desc/g, ''); 
    pContent = pContent.replace(/eng_eco_tech3_title/g, 'eng_' + p.key + '_li3');
    pContent = pContent.replace(/eng_eco_tech3_desc/g, ''); 
    
    // Replace image
    pContent = pContent.replace(/assets\/images\/eng_eco\.png/g, 'assets/' + p.icon);
    
    fs.writeFileSync('docs/' + p.name, pContent);
    console.log('Created docs/' + p.name);
});
