const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const keysToAdd = {
    'en': {
        'stats_years_num': '15+',
        'stats_years_text': 'Years of Experience',
        'stats_projects_num': '500+',
        'stats_projects_text': 'Completed Projects',
        'stats_hours_num': '24/7',
        'stats_hours_text': 'Emergencies',
        'stats_lic_num': 'C-36',
        'stats_lic_text': 'CSLB Lic. #1156542',
        'qs_title': 'What service do you need?',
        'qs_desc': 'Select your need and request an instant quote.'
    },
    'es': {
        'stats_years_num': '15+',
        'stats_years_text': 'Años de Experiencia',
        'stats_projects_num': '500+',
        'stats_projects_text': 'Proyectos Completados',
        'stats_hours_num': '24/7',
        'stats_hours_text': 'Emergencias',
        'stats_lic_num': 'C-36',
        'stats_lic_text': 'CSLB Lic. #1156542',
        'qs_title': '¿Qué servicio necesitas?',
        'qs_desc': 'Selecciona tu necesidad y solicita cotización al instante.'
    },
    'zh': {
        'stats_years_num': '15+',
        'stats_years_text': '????',
        'stats_projects_num': '500+',
        'stats_projects_text': '?????',
        'stats_hours_num': '24/7',
        'stats_hours_text': '????',
        'stats_lic_num': 'C-36',
        'stats_lic_text': 'CSLB ??? #1156542',
        'qs_title': '????????',
        'qs_desc': '??????????????'
    },
    'tl': {
        'stats_years_num': '15+',
        'stats_years_text': 'Taon ng Karanasan',
        'stats_projects_num': '500+',
        'stats_projects_text': 'Natapos na mga Proyekto',
        'stats_hours_num': '24/7',
        'stats_hours_text': 'Mga Emergency',
        'stats_lic_num': 'C-36',
        'stats_lic_text': 'CSLB Lic. #1156542',
        'qs_title': 'Anong serbisyo ang kailangan mo?',
        'qs_desc': 'Piliin ang iyong pangangailangan at humiling ng agarang quote.'
    },
    'vi': {
        'stats_years_num': '15+',
        'stats_years_text': 'Nam Kinh nghi?m',
        'stats_projects_num': '500+',
        'stats_projects_text': 'D? án dã Hoàn thành',
        'stats_hours_num': '24/7',
        'stats_hours_text': 'Tru?ng h?p kh?n c?p',
        'stats_lic_num': 'C-36',
        'stats_lic_text': 'Gi?y phép CSLB #1156542',
        'qs_title': 'B?n c?n d?ch v? gì?',
        'qs_desc': 'Ch?n nhu c?u c?a b?n và yêu c?u báo giá ngay l?p t?c.'
    }
};

for (const lang in keysToAdd) {
    let strToAdd = '';
    for (const key in keysToAdd[lang]) {
        strToAdd +=         "": "",\n;
    }
    const regex = new RegExp(("": \\{\\n));
    content = content.replace(regex, $1);
}

fs.writeFileSync('app.js', content, 'utf8');
console.log('Translations added successfully.');
