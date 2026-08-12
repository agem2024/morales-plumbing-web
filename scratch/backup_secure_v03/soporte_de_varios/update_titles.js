const fs = require('fs');

const updates = [
    { file: 'docs/eng_wh.html', title: 'Water Heaters' },
    { file: 'docs/eng_valves.html', title: 'Válvulas y Cartuchos' },
    { file: 'docs/eng_inspect.html', title: 'Inspecciones y Consultoría' },
    { file: 'docs/eng_training.html', title: 'Capacitación B2B' },
    { file: 'docs/eng_b2b.html', title: 'Trabajos Especializados B2B' }
];

updates.forEach(u => {
    let content = fs.readFileSync(u.file, 'utf8');
    content = content.replace(/<title>.*?<\/title>/, `<title>Especialidad C-36 - \${u.title}</title>`);
    fs.writeFileSync(u.file, content);
    console.log('Updated title for ' + u.file);
});
