const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const micLogic = `
// ==========================================
// JOE MICROPHONE LOGIC & ANIMATIONS
// ==========================================
let joeRecognition = null;
let isJoeMicActive = false;

function initJoeMic() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn("Speech recognition not supported in this browser.");
        return;
    }
    
    joeRecognition = new SpeechRecognition();
    joeRecognition.continuous = false;
    joeRecognition.interimResults = false;
    
    joeRecognition.onstart = function() {
        isJoeMicActive = true;
        const btn = document.getElementById('joe-mic-btn');
        if (btn) btn.classList.add('active');
        
        const trigger = document.querySelector('.joe-trigger');
        if (trigger) trigger.classList.add('listening');
        
        const avatar = document.querySelector('.joe-avatar-small');
        if (avatar) avatar.classList.add('listening');
    };
    
    joeRecognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById('joe-query');
        if (input) {
            input.value = transcript;
            sendToJoe();
        }
    };
    
    joeRecognition.onerror = function(event) {
        console.error("Joe Mic Error:", event.error);
        stopJoeMicAnim();
    };
    
    joeRecognition.onend = function() {
        stopJoeMicAnim();
    };
}

function stopJoeMicAnim() {
    isJoeMicActive = false;
    const btn = document.getElementById('joe-mic-btn');
    if (btn) btn.classList.remove('active');
    
    const trigger = document.querySelector('.joe-trigger');
    if (trigger) trigger.classList.remove('listening');
    
    const avatar = document.querySelector('.joe-avatar-small');
    if (avatar) avatar.classList.remove('listening');
}

function toggleJoeMic() {
    if (!joeRecognition) {
        initJoeMic();
    }
    
    if (!joeRecognition) {
        alert("Tu navegador no soporta entrada por voz.");
        return;
    }
    
    if (isJoeMicActive) {
        joeRecognition.stop();
    } else {
        const curLang = localStorage.getItem('morales_lang') || 'es';
        const langMap = {
            'en': 'en-US',
            'es': 'es-MX',
            'zh': 'zh-CN',
            'tl': 'tl-PH',
            'vi': 'vi-VN'
        };
        joeRecognition.lang = langMap[curLang] || 'es-MX';
        joeRecognition.start();
    }
}

// Animate Joe when he speaks
const originalSpeakJoe = speakJoe;
speakJoe = function(text) {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance(text);
        const curLang = localStorage.getItem('morales_lang') || 'es';
        const langMap = {
            'en': 'en-US',
            'es': 'es-MX',
            'zh': 'zh-CN',
            'tl': 'tl-PH',
            'vi': 'vi-VN'
        };
        msg.lang = langMap[curLang] || 'es-MX';
        
        msg.onstart = function() {
            const trigger = document.querySelector('.joe-trigger');
            if (trigger) trigger.classList.add('listening');
            const avatar = document.querySelector('.joe-avatar-small');
            if (avatar) avatar.classList.add('listening');
        };
        
        msg.onend = function() {
            const trigger = document.querySelector('.joe-trigger');
            if (trigger) trigger.classList.remove('listening');
            const avatar = document.querySelector('.joe-avatar-small');
            if (avatar) avatar.classList.remove('listening');
        };
        
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    }
};
`;

if (!appJs.includes('JOE MICROPHONE LOGIC & ANIMATIONS')) {
    // We should remove the old speakJoe function to avoid conflicts since we redefine it, 
    // or just append our logic which overrides it. We are declaring a function expression but `function speakJoe` is hoisted.
    // It's safer to comment out the old `function speakJoe(text)` and append the new one.
    
    appJs = appJs.replace(/function speakJoe\(text\) \{[\s\S]*?\}\n/g, "// Original speakJoe replaced\n");
    
    fs.writeFileSync('app.js', appJs + "\n" + micLogic);
    console.log('Appended microphone logic to app.js');
} else {
    console.log('Microphone logic already exists');
}
