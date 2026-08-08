const fs = require('fs');
const path = require('path');

const replacements = [
    { regex: /Arquitecto de Soluciones de IA/gi, replacement: "Especialista en Soluciones de IA" },
    { regex: /AI Solutions Architect/gi, replacement: "AI Solutions Specialist" },
    { regex: /AI Architect/gi, replacement: "AI Specialist" },
    { regex: /arquitectos del agua/gi, replacement: "especialistas del agua" },
    // "architects of water" if present
    { regex: /architects of water/gi, replacement: "water specialists" }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !fullPath.includes('.git') && !fullPath.includes('node_modules')) {
            processDirectory(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.xml') || fullPath.endsWith('.json'))) {
            if (fullPath.includes('remove_arch.js')) continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const r of replacements) {
                content = content.replace(r.regex, r.replacement);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated Architecture terms: ${fullPath}`);
            }
        }
    }
}

processDirectory(__dirname);
console.log("Architecture terminology removal complete.");
