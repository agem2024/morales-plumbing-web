const fs = require('fs');
const path = require('path');

const replacements = [
    { regex: /Environmental Engineering/gi, replacement: "Sustainable Plumbing Systems" },
    { regex: /Environmental Engineer/gi, replacement: "C-36 Specialist" },
    { regex: /Septic Engineering/gi, replacement: "Septic Systems" },
    { regex: /Chief Engineer/gi, replacement: "Chief Technical Officer" },
    { regex: /Pro Engineering/gi, replacement: "Pro Services" },
    { regex: /Professional Engineering/gi, replacement: "Professional Plumbing" },
    { regex: /Plumbing Engineering/gi, replacement: "Advanced Plumbing" },
    { regex: /Engineering Appointment/gi, replacement: "Service Appointment" },
    { regex: /engineering/gi, replacement: "technical plumbing" },
    { regex: /Engineering/g, replacement: "Technical Plumbing" },
    { regex: /engineers/gi, replacement: "technicians" },
    { regex: /Engineers/g, replacement: "Technicians" },
    { regex: /engineer\b/gi, replacement: "technician" },
    { regex: /Engineer\b/g, replacement: "Technician" }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !fullPath.includes('.git') && !fullPath.includes('node_modules')) {
            processDirectory(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.xml') || fullPath.endsWith('.json'))) {
            // Exclude our own script
            if (fullPath.includes('remove_eng_en.js') || fullPath.includes('remove_engineering.js')) continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const r of replacements) {
                content = content.replace(r.regex, r.replacement);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated EN terms: ${fullPath}`);
            }
        }
    }
}

processDirectory(__dirname);
console.log("English engineering terminology removal complete.");
