const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

if (!content.includes('isJoeMuted')) {
    const speechCode = 
let isJoeMuted = false;
function toggleJoeMic() {
    isJoeMuted = !isJoeMuted;
    const btn = document.getElementById('joe-mic-btn');
    if (btn) btn.innerHTML = isJoeMuted ? '??' : '??';
    if (isJoeMuted && 'speechSynthesis' in window) window.speechSynthesis.cancel();
}

function speakJoe(text) {
    if (isJoeMuted) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        const curLang = localStorage.getItem('morales_lang') || 'es';
        const langMap = { 'en': 'en-US', 'es': 'es-MX', 'zh': 'zh-CN', 'tl': 'tl-PH', 'vi': 'vi-VN' };
        msg.lang = langMap[curLang] || 'es-MX';
        window.speechSynthesis.speak(msg);
    }
};
    
    // Replace the old speakJoe with the new one
    content = content.replace(/function speakJoe\(text\) \{[\s\S]*?window\.speechSynthesis\.speak\(msg\);\s*\}\s*\}/, speechCode);
    
    fs.writeFileSync('app.js', content);
    console.log('Fixed speakJoe');
}
