const fs = require('fs');
const appJs = fs.readFileSync('app.js', 'utf8');

const transMatch = appJs.match(/const\s+translations\s*=\s*(\{[\s\S]*?\n\});/);
if (transMatch) {
    const translations = eval('(' + transMatch[1] + ')');
    const es = translations['es'];
    
    for (let i = 1; i <= 15; i++) {
        console.log(`\n--- SVC ${i}: ${es['pb_svc_'+i+'_title']} ---`);
        console.log(`GOOD: ${es['pb_svc_'+i+'_good']} (${es['pb_svc_'+i+'_good_just']})`);
    }
}
