const fs = require('fs');
const appJs = fs.readFileSync('app.js', 'utf8');

// Parse the file to check if it's completely valid JSON (wait, it's a JS object, not JSON).
// Let's use eval or new Function to verify it evaluates properly.
try {
    const fn = new Function(appJs + '; return translations;');
    const t = fn();
    console.log('Translations object loaded successfully. Keys:', Object.keys(t));
} catch (e) {
    console.error('FAILED TO EVALUATE APP.JS:', e.message);
    // Print the context of the error
    const match = e.stack.match(/<anonymous>:(\d+):/);
    if (match) {
        const lineNum = parseInt(match[1]);
        const lines = appJs.split('\n');
        console.log('Error around line', lineNum);
        for(let i = Math.max(0, lineNum - 5); i < Math.min(lines.length, lineNum + 5); i++) {
            console.log(i + 1 + ':', lines[i]);
        }
    }
}
