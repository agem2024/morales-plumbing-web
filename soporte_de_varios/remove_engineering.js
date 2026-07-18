const fs = require('fs');
const path = require('path');

const replacements = [
    { regex: /Certificación de Ingeniería Ambiental/gi, replacement: "Certificación C-36 en Sistemas Sostenibles" },
    { regex: /Ingeniero Ambiental/gi, replacement: "Especialista C-36" },
    { regex: /Ingeniería Ambiental/gi, replacement: "Plomería Técnica Sostenible" },
    { regex: /Ingeniería Séptica/gi, replacement: "Sistemas Sépticos" },
    { regex: /Servicios de Ingeniería Central/gi, replacement: "Servicios Técnicos Especializados" },
    { regex: /Ingeniería Central/gi, replacement: "Especialidad C-36" },
    { regex: /Servicios de Ingeniería/gi, replacement: "Servicios Técnicos Especializados" },
    { regex: /Ingeniería de Plomería/gi, replacement: "Plomería Técnica Avanzada" },
    { regex: /Detalle Técnico \(Ingeniería\)/gi, replacement: "Detalle Técnico (C-36)" },
    { regex: /re-ingeniería/gi, replacement: "reestructuración" },
    { regex: /Diseño de Infraestructura Hidráulica/gi, replacement: "Diseño de Sistemas de Tuberías" },
    // Catch remaining standalone "Ingeniería" ensuring we don't break HTML tags, assuming it's usually capitalized or part of a phrase
    { regex: /\bIngeniería\b(?!\s*Ambiental|\s*Séptica|\s*Central|\s*de\s*Plomería)/gi, replacement: "Plomería Técnica" },
    { regex: /\bIngenieria\b/gi, replacement: "Plomería Técnica" }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !fullPath.includes('.git') && !fullPath.includes('node_modules')) {
            processDirectory(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.xml'))) {
            // Exclude our own script to avoid replacing its contents
            if (fullPath.includes('remove_engineering.js')) continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const r of replacements) {
                content = content.replace(r.regex, r.replacement);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory(__dirname);
console.log("Engineering terminology removal complete.");
