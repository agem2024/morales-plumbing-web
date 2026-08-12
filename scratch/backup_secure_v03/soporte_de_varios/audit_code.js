const fs = require('fs');
const path = require('path');

const problemPatterns = [
    { label: 'XSS: innerHTML with variable', regex: /innerHTML\s*=\s*`/g },
    { label: 'eval() usage', regex: /\beval\s*\(/g },
    { label: 'document.write usage', regex: /document\.write\s*\(/g },
    { label: 'Hardcoded API key', regex: /api[_-]?key\s*[:=]\s*["'][a-zA-Z0-9]{20,}/gi },
];

const cslbViolations = [
    'Licensed Engineer',
    'Certified Engineer',
    'Environmental Engineer',
    'Environmental Engineering',
    'Chief Technical Officer\\b(?! Plumbing)',
    'ENVIRONMENTAL ENGINEERING',
    'Sustainable Plumbing Systems\\b.*\\bdegree'
];

let issues = {};

function scan(dir) {
    fs.readdirSync(dir).forEach(file => {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat.isDirectory() && !full.includes('.git') && !full.includes('node_modules') && !full.includes('archive')) {
            scan(full);
        } else if (file.endsWith('.html') || file.endsWith('.js')) {
            const content = fs.readFileSync(full, 'utf8');
            const shortPath = full.replace(process.cwd(), '');
            
            // Check generic patterns
            problemPatterns.forEach(p => {
                const matches = [...content.matchAll(p.regex)];
                if (matches.length > 0) {
                    if (!issues[p.label]) issues[p.label] = [];
                    issues[p.label].push({ file: shortPath, count: matches.length });
                }
            });
            
            // Check CSLB violations
            cslbViolations.forEach(v => {
                const regex = new RegExp(v, 'gi');
                const matches = [...content.matchAll(regex)];
                if (matches.length > 0) {
                    const label = 'CSLB Violation: ' + v;
                    if (!issues[label]) issues[label] = [];
                    // Get line numbers
                    const lines = content.split('\n');
                    const lineNums = [];
                    lines.forEach((line, i) => {
                        if (regex.test(line)) lineNums.push(i + 1);
                        regex.lastIndex = 0;
                    });
                    issues[label].push({ file: shortPath, count: matches.length, lines: lineNums });
                }
            });
        }
    });
}

scan(process.cwd());

if (Object.keys(issues).length === 0) {
    console.log('NO ISSUES FOUND - Code is clean!');
} else {
    console.log(JSON.stringify(issues, null, 2));
}
