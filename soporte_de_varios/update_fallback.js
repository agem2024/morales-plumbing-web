const fs = require('fs');

// Read app.js to extract the Spanish dictionary
const appJs = fs.readFileSync('app.js', 'utf8');

// We can just extract the 'es' object roughly by evaluating it or parsing it.
// Since it's a JS file, let's just find the matches using regex or by loading it in node.
// To load it in node, we'd need to mock the DOM, but let's just parse it.

let esDict = {};
try {
    // Super hacky way to extract the dictionary:
    const esMatch = appJs.match(/"es":\s*({[\s\S]*?})[,}]/);
    if (esMatch) {
        // Evaluate the object string
        esDict = eval('(' + esMatch[1] + ')');
    }
} catch (e) {
    console.log("Failed to parse app.js dictionary");
}

for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        
        const titleKey = `pb_svc_${i}_name`;
        const descKey = `pb_svc_${i}_user`;
        const techKey = `pb_svc_${i}_tech`;
        
        const titleText = esDict[titleKey] || `Servicio ${i}`;
        const descText = esDict[descKey] || `Descripción del servicio ${i}.`;
        const techText = esDict[techKey] || `Especificaciones técnicas ${i}.`;

        html = html.replace(new RegExp(`>Servicio ${i}</h1>`), `>${titleText}</h1>`);
        html = html.replace(new RegExp(`>Descripción del servicio.?</p>`), `>${descText}</p>`);
        
        fs.writeFileSync(file, html);
    }
}
console.log("Updated fallback text in proceso_svc_X_cliente.html");
