const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

const newCard = `
                <!-- MP Plumbing App Free -->
                <div class="eco-card glass" data-app="mp_free">
                    <div class="eco-card-img" style="background: url('assets/mp_app_free.png') no-repeat center/cover;">
                        <!-- Using the generated image as background since it's a static image -->
                        <div style="width:100%; height:100%; background:rgba(0,0,0,0.3);"></div>
                    </div>
                    <div class="eco-card-content">
                        <h3 data-i18n="app_free_title" class="graffiti-3d-metallic">MP Plumbing App Free</h3>
                        <p data-i18n="app_free_desc">Aplicación gratuita con herramientas inteligentes para tus proyectos de plomería.</p>
                        <div class="eco-actions">
                            <a href="https://ai.studio/apps/b9a011f5-c992-4871-9dbb-8bd1e641c7e9?fullscreenApplet=true" target="_blank" class="btn-eco-link" data-i18n="btn_open_app">Open App</a>
                        </div>
                    </div>
                </div>
`;

if (!html.includes('data-app="mp_free"')) {
    // Insert after EP Plumbing card or at the end of eco-grid
    // Let's insert it right after the Orion Client Portal card to give it high visibility
    const targetSplit = '<!-- App 2: EP Plumbing -->';
    if (html.includes(targetSplit)) {
        html = html.replace(targetSplit, newCard + '\n                ' + targetSplit);
        fs.writeFileSync('index.html', html);
        console.log("Added MP Free App card to index.html");
    } else {
        console.log("Could not find insertion point.");
    }
}

// 2. Update app.js translations
let appJs = fs.readFileSync('app.js', 'utf8');

const newTranslations = {
    en: {
        app_free_title: "MP Plumbing App Free",
        app_free_desc: "Free application with smart tools for your plumbing projects."
    },
    es: {
        app_free_title: "MP Plumbing App Free",
        app_free_desc: "Aplicación gratuita con herramientas inteligentes para tus proyectos de plomería."
    },
    zh: {
        app_free_title: "MP Plumbing 免费应用",
        app_free_desc: "提供管道工程智能工具的免费应用。"
    },
    tl: {
        app_free_title: "MP Plumbing App Free",
        app_free_desc: "Libreng application na may mga matalinong tool para sa iyong mga proyekto sa pagtutubero."
    },
    vi: {
        app_free_title: "Ứng dụng MP Plumbing Miễn phí",
        app_free_desc: "Ứng dụng miễn phí cung cấp công cụ thông minh cho các dự án sửa ống nước của bạn."
    }
};

let appJsUpdated = appJs;

for (const lang of Object.keys(newTranslations)) {
    const keys = newTranslations[lang];
    let toInject = "";
    for (const [k, v] of Object.entries(keys)) {
        if (!appJsUpdated.includes('"' + k + '":')) {
            toInject += `        "${k}": "${v}",\n`;
        }
    }
    
    if (toInject) {
        const langRegex = new RegExp('"' + lang + '":\\s*\\{');
        appJsUpdated = appJsUpdated.replace(langRegex, '"' + lang + '": {\n' + toInject);
    }
}

if (appJs !== appJsUpdated) {
    fs.writeFileSync('app.js', appJsUpdated);
    console.log("Updated translations in app.js");
}
