const fs = require('fs');
let html = fs.readFileSync('docs/pricebook.html', 'utf8');

const oldCode = `        s.price_good = "$" + PB_SERVICE_PRICES['svc_' + s.id].good.toLocaleString();
        s.price_better = "$" + PB_SERVICE_PRICES['svc_' + s.id].better.toLocaleString();
        s.price_best = "$" + PB_SERVICE_PRICES['svc_' + s.id].best.toLocaleString();`;

const newCode = `        const formatP = p => typeof p === 'string' && p.includes('-') ? '$' + p.split('-').map(x=>x.trim()).join(' - $') : '$' + p.toLocaleString();
        s.price_good = formatP(PB_SERVICE_PRICES['svc_' + s.id].good);
        s.price_better = formatP(PB_SERVICE_PRICES['svc_' + s.id].better);
        s.price_best = formatP(PB_SERVICE_PRICES['svc_' + s.id].best);`;

if (html.includes(oldCode)) {
    html = html.replace(oldCode, newCode);
    fs.writeFileSync('docs/pricebook.html', html);
    console.log("pricebook.html updated for range formatting!");
} else {
    console.log("Could not find the old code block in pricebook.html");
}
