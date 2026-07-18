const fs = require('fs');

const appjs = fs.readFileSync('app.js', 'utf8');
const lines = appjs.split('\n');

let newLines = [];
let currentLang = null;
let seenKeys = new Set();

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we are entering a language block (e.g., "en": {)
    const langMatch = line.match(/^\s*"([a-z]{2})":\s*\{/);
    if (langMatch) {
        currentLang = langMatch[1];
        seenKeys.clear();
        newLines.push(line);
        continue;
    }
    
    // Check if we are inside a language block and this is a key-value line
    if (currentLang) {
        // Match a standard key-value pair string line
        const keyMatch = line.match(/^\s*"([^"]+)"\s*:/);
        if (keyMatch) {
            const key = keyMatch[1];
            if (seenKeys.has(key)) {
                // Duplicate found! Skip this line.
                // console.log(`Removed duplicate key '${key}' in lang '${currentLang}'`);
                continue;
            } else {
                seenKeys.add(key);
                newLines.push(line);
                continue;
            }
        }
        
        // If we hit the end of the language block
        if (line.match(/^\s*\},?/)) {
            currentLang = null;
            newLines.push(line);
            continue;
        }
    }
    
    // Default: just keep the line
    newLines.push(line);
}

fs.writeFileSync('app.js', newLines.join('\n'));
console.log('Successfully removed all duplicate keys from app.js!');
