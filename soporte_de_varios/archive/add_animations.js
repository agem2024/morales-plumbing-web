const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Append new animations to the end of style.css
const newCSS = `

/* ========================================================= */
/* JOE AVATAR ANIMATIONS */
/* ========================================================= */
@keyframes joeBreatheIdle {
    0% { transform: scale(1) translateY(0px) rotate(0deg); filter: brightness(1) drop-shadow(0 0 5px rgba(0, 229, 255, 0.4)); }
    50% { transform: scale(1.03) translateY(-2px) rotate(1deg); filter: brightness(1.1) drop-shadow(0 0 15px rgba(0, 229, 255, 0.8)); }
    100% { transform: scale(1) translateY(0px) rotate(0deg); filter: brightness(1) drop-shadow(0 0 5px rgba(0, 229, 255, 0.4)); }
}

@keyframes joeActiveMic {
    0% { transform: scale(1) translateY(0px) skewX(0deg); box-shadow: 0 0 10px var(--neon-lime); filter: hue-rotate(0deg); }
    25% { transform: scale(1.1) translateY(-3px) skewX(2deg); box-shadow: 0 0 25px var(--neon-lime); filter: hue-rotate(-20deg); }
    50% { transform: scale(1.05) translateY(-1px) skewX(-2deg); box-shadow: 0 0 15px var(--neon-lime); filter: hue-rotate(0deg); }
    75% { transform: scale(1.1) translateY(-3px) skewX(2deg); box-shadow: 0 0 25px var(--neon-lime); filter: hue-rotate(20deg); }
    100% { transform: scale(1) translateY(0px) skewX(0deg); box-shadow: 0 0 10px var(--neon-lime); filter: hue-rotate(0deg); }
}

/* Idle animation for both small avatar and floating trigger */
.joe-trigger img, .joe-avatar-small {
    animation: joeBreatheIdle 4s infinite ease-in-out;
}

/* Listening animation applied dynamically via JS */
.joe-trigger.listening img, .joe-avatar-small.listening {
    animation: joeActiveMic 1.5s infinite ease-in-out !important;
}

/* Microphone button inside Joe Input */
.joe-mic-btn {
    background: none;
    border: none;
    color: var(--neon-cyan);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.joe-mic-btn:hover {
    color: var(--neon-lime);
    transform: scale(1.2);
}

.joe-mic-btn.active {
    color: var(--neon-lime);
    animation: joeActiveMic 1.5s infinite ease-in-out;
}

`;

if (!css.includes('JOE AVATAR ANIMATIONS')) {
    fs.appendFileSync('style.css', newCSS);
    console.log('Appended animations to style.css');
} else {
    console.log('Animations already exist in style.css');
}
