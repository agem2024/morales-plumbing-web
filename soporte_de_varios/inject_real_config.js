const fs = require('fs');

const REAL_CONFIG = {
    apiKey:            "AIzaSyCesnI4-Kq5WpkGHFq-8ucb07dgd5yAKHY",
    authDomain:        "mp-plumbing-ai.firebaseapp.com",
    projectId:         "mp-plumbing-ai",
    storageBucket:     "mp-plumbing-ai.firebasestorage.app",
    messagingSenderId: "970139834631",
    appId:             "1:970139834631:web:440cd54aa418611daa8da2"
};

const newConfigBlock = `window.MORALES_FIREBASE_CONFIG = {
        apiKey:            "${REAL_CONFIG.apiKey}",
        authDomain:        "${REAL_CONFIG.authDomain}",
        projectId:         "${REAL_CONFIG.projectId}",
        storageBucket:     "${REAL_CONFIG.storageBucket}",
        messagingSenderId: "${REAL_CONFIG.messagingSenderId}",
        appId:             "${REAL_CONFIG.appId}"
    };`;

let html = fs.readFileSync('index.html', 'utf8');

// Replace the placeholder config block
const oldPattern = /window\.MORALES_FIREBASE_CONFIG\s*=\s*\{[\s\S]*?\};/;
if (oldPattern.test(html)) {
    html = html.replace(oldPattern, newConfigBlock);
    console.log('Config replaced successfully.');
} else {
    console.error('Config placeholder not found in index.html!');
    process.exit(1);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated with real Firebase config for project: mp-plumbing-ai');
console.log('Config summary:');
Object.entries(REAL_CONFIG).forEach(([k, v]) => console.log(' ', k + ':', v));
