const fs = require('fs');

let html = fs.readFileSync('docs/promocion_water_heaters.html', 'utf8');

// The file has 3 occurrences of heatpump_hero.png. 
// We want to replace the second one with tt_hero.png, and the third with ttt_hero.png.

let occurrences = 0;
html = html.replace(/heatpump_hero\.png/g, (match) => {
    occurrences++;
    if (occurrences === 2) return 'tt_hero.png';
    if (occurrences === 3) return 'ttt_hero.png';
    return match;
});

// The comic images:
// Each section has 4 comic images: comic_good_clean.png, comic_better.png, comic_best.png, comic_warning.png.
// We want to replace the SECOND occurrence of each with tt_comic_X, and THIRD with ttt_comic_X.

// comic_good_clean.png
let c1 = 0;
html = html.replace(/comic_good_clean\.png/g, (m) => {
    c1++;
    if (c1 === 2) return 'tt_comic_1.png';
    if (c1 === 3) return 'ttt_comic_1.png';
    return m;
});

// comic_better.png
let c2 = 0;
html = html.replace(/comic_better\.png/g, (m) => {
    c2++;
    if (c2 === 2) return 'tt_comic_2.png';
    if (c2 === 3) return 'ttt_comic_2.png';
    return m;
});

// comic_best.png
let c3 = 0;
html = html.replace(/comic_best\.png/g, (m) => {
    c3++;
    if (c3 === 2) return 'tt_comic_3.png';
    if (c3 === 3) return 'ttt_comic_3.png';
    return m;
});

// comic_warning.png
let c4 = 0;
html = html.replace(/comic_warning\.png/g, (m) => {
    c4++;
    if (c4 === 2) return 'tt_comic_4.png';
    if (c4 === 3) return 'ttt_comic_4.png';
    return m;
});

fs.writeFileSync('docs/promocion_water_heaters.html', html);
console.log('Successfully updated the images for Tank-to-Tankless and Tankless-to-Tankless!');
