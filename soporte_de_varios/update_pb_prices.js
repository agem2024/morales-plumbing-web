const fs = require('fs');
let appjs = fs.readFileSync('app.js', 'utf8');

const regex = /PB_SERVICE_PRICES = \{[\s\S]*?\};/;

const newPrices = `PB_SERVICE_PRICES = {
    "svc_1": { "good": "450 - 700", "better": "585 - 900", "best": "720 - 1,100" },
    "svc_2": { "good": "8,000 - 12,000", "better": "12,000 - 18,000", "best": "18,000 - 28,000" },
    "svc_3": { "good": "2,500 - 3,500", "better": "4,000 - 5,500", "best": "6,000 - 8,500" },
    "svc_4": { "good": "750 - 1,200", "better": "1,300 - 1,800", "best": "2,000 - 3,500" },
    "svc_5": { "good": "250 - 450", "better": "500 - 800", "best": "850 - 1,500" },
    "svc_6": { "good": "6,500 - 9,500", "better": "10,000 - 15,000", "best": "16,000 - 25,000" },
    "svc_7": { "good": "3,500 - 5,500", "better": "6,000 - 8,500", "best": "9,000 - 12,500" },
    "svc_8": { "good": "950 - 1,500", "better": "1,600 - 2,200", "best": "2,500 - 3,800" },
    "svc_9": { "good": "450 - 850", "better": "950 - 1,500", "best": "2,000 - 3,500" },
    "svc_10": { "good": "850 - 1,500", "better": "2,000 - 3,500", "best": "4,000 - 7,500" },
    "svc_11": { "good": "4,500 - 6,500", "better": "7,000 - 9,500", "best": "10,000 - 14,500" },
    "svc_12": { "good": "850 - 1,500", "better": "1,800 - 2,800", "best": "3,000 - 5,500" },
    "svc_13": { "good": "450 - 850", "better": "950 - 1,500", "best": "1,800 - 2,800" },
    "svc_14": { "good": "150 - 350", "better": "450 - 850", "best": "950 - 1,800" },
    "svc_15": { "good": "350 - 650", "better": "850 - 1,500", "best": "1,800 - 3,500" }
};`;

appjs = appjs.replace(regex, newPrices);
fs.writeFileSync('app.js', appjs);
console.log('Updated PB_SERVICE_PRICES with ranges.');
