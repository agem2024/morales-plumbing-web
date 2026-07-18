const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

let issuesFound = false;
$('[data-i18n]').each((i, el) => {
    if ($(el).find('img').length > 0 || $(el).find('video').length > 0) {
        console.log(`WARNING: Element with data-i18n="${$(el).attr('data-i18n')}" contains an img/video tag!`);
        issuesFound = true;
    }
});

if (!issuesFound) {
    console.log("All data-i18n elements are clean (no nested images/videos).");
}
