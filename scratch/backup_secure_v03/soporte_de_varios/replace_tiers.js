const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// The file has 3 occurrences of plan_good_clean.png. 
// We want to replace the second and third ones with navien_plan_good.png.
let c1 = 0;
html = html.replace(/plan_good_clean\.png/g, (m) => {
    c1++;
    if (c1 === 2 || c1 === 3) return 'navien_plan_good.png';
    return m;
});

// plan_better.png
let c2 = 0;
html = html.replace(/plan_better\.png/g, (m) => {
    c2++;
    if (c2 === 2 || c2 === 3) return 'navien_plan_better.png';
    return m;
});

// plan_best.png
let c3 = 0;
html = html.replace(/plan_best\.png/g, (m) => {
    c3++;
    if (c3 === 2 || c3 === 3) return 'navien_plan_best.png';
    return m;
});

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully updated the Tier images for Navien Tankless scenarios!');
