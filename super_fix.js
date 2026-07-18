const fs = require('fs');

const utf8Fixes = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã ': 'Á',
    'Ã‰': 'É',
    'Ã\x8D': 'Í',  // Ã + soft hyphen (Windows-1252 to UTF-8 parsing)
    'Ã\xAD': 'í',  // Sometimes it's this
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Ã‘': 'Ñ',
    'Â¿': '¿',
    'Â¡': '¡',
    'â€”': '—',
    'â€œ': '“',
    'â€\x9D': '”',
    'â€˜': '‘',
    'â€™': '’',
    'â€¢': '•',
    'Ã¼': 'ü',
    'Ãœ': 'Ü',
    'Ã¯': 'ï',
    'PlomerA-a': 'Plomería',
    'ACA3mo': '¿Cómo',
    'imAgenes': 'imágenes',
    'tecnologA-a': 'tecnología'
};

function fixFile(path) {
    let text = fs.readFileSync(path, 'utf8');
    let original = text;

    for (const [bad, good] of Object.entries(utf8Fixes)) {
        text = text.split(bad).join(good);
    }
    
    // Catch-all for any remaining A-something
    text = text.replace(/PlomerÃ-a/g, 'Plomería');
    text = text.replace(/PlomerÃ\xADa/g, 'Plomería');
    text = text.replace(/PlomerÃa/g, 'Plomería');

    if (text !== original) {
        fs.writeFileSync(path, text, 'utf8');
        console.log('Fixed', path);
    } else {
        console.log('No issues in', path);
    }
}

fixFile('index.html');
