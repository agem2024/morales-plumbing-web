const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const injectionPoint = '<div class="hero-container">';
const jingleHtml = `
                    <!-- ══ JINGLE AUDIO & TOGGLE ══ -->
                    <div style="text-align: center; margin-bottom: 15px;">
                        <audio id="corporate-jingle" loop autoplay>
                            <source id="jingle-source" src="assets/media/morales_jingle_es.mp4" type="audio/mp4">
                        </audio>
                        <button id="jingle-toggle-btn" onclick="toggleJingle()" style="width: 44px; height: 44px; border-radius: 50%; background: rgba(212,175,55,0.15); border: 2px solid #D4AF37; color: #D4AF37; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease; box-shadow: 0 0 15px rgba(212,175,55,0.4);" aria-label="Play/Pause Jingle" title="Corporate Jingle">
                            <!-- Play Icon (hidden by default since it autoplays) -->
                            <svg id="jingle-icon-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><path d="M8 5v14l11-7z"/></svg>
                            <!-- Pause/Mute Icon -->
                            <svg id="jingle-icon-pause" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="display: block;">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                            </svg>
                        </button>
                    </div>
`;

if (html.includes(injectionPoint) && !html.includes('corporate-jingle')) {
    html = html.replace(injectionPoint, injectionPoint + jingleHtml);
}

// Now inject the JavaScript
const jsInjectionPoint = '</body>';
const jingleJs = `
<script>
    // ══ JINGLE CONTROLLER ══
    const jingleAudio = document.getElementById('corporate-jingle');
    const jingleBtn = document.getElementById('jingle-toggle-btn');
    const jinglePlayIcon = document.getElementById('jingle-icon-play');
    const jinglePauseIcon = document.getElementById('jingle-icon-pause');
    const jingleSource = document.getElementById('jingle-source');

    let jingleIsPlaying = false; // browsers block autoplay mostly, but let's assume it might start

    function updateJingleUI(playing) {
        if (playing) {
            jinglePlayIcon.style.display = 'none';
            jinglePauseIcon.style.display = 'block';
            jingleBtn.style.boxShadow = '0 0 15px rgba(212,175,55,0.6)';
            jingleBtn.style.background = 'rgba(212,175,55,0.25)';
        } else {
            jinglePlayIcon.style.display = 'block';
            jinglePauseIcon.style.display = 'none';
            jingleBtn.style.boxShadow = '0 0 5px rgba(212,175,55,0.2)';
            jingleBtn.style.background = 'rgba(212,175,55,0.05)';
        }
    }

    function toggleJingle() {
        if (!jingleAudio) return;
        if (jingleAudio.paused) {
            jingleAudio.play().then(() => {
                jingleIsPlaying = true;
                updateJingleUI(true);
            }).catch(e => {
                console.warn('Jingle play blocked:', e);
            });
        } else {
            jingleAudio.pause();
            jingleIsPlaying = false;
            updateJingleUI(false);
        }
    }

    // Attempt autoplay on load
    window.addEventListener('DOMContentLoaded', () => {
        if (jingleAudio) {
            jingleAudio.play().then(() => {
                jingleIsPlaying = true;
                updateJingleUI(true);
            }).catch(e => {
                // Autoplay blocked by browser
                jingleIsPlaying = false;
                updateJingleUI(false);
            });
            // Lower volume slightly so it's not too loud
            jingleAudio.volume = 0.5;
        }
    });

    // Hook into setLanguage to switch audio track
    const originalSetLanguage = window.setLanguage;
    if (typeof originalSetLanguage === 'function') {
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            if (jingleSource && jingleAudio) {
                const wasPlaying = !jingleAudio.paused;
                const time = jingleAudio.currentTime;
                
                if (lang === 'en') {
                    jingleSource.src = 'assets/media/morales_jingle_en.mp4';
                } else {
                    // Default to ES for anything else
                    jingleSource.src = 'assets/media/morales_jingle_es.mp4';
                }
                
                jingleAudio.load();
                jingleAudio.currentTime = time; // attempt to keep sync
                if (wasPlaying) {
                    jingleAudio.play().catch(e => updateJingleUI(false));
                }
            }
        };
    }
</script>
`;

if (html.includes(jsInjectionPoint) && !html.includes('// ══ JINGLE CONTROLLER ══')) {
    html = html.replace(jsInjectionPoint, jingleJs + '\n' + jsInjectionPoint);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("Jingle injected successfully.");
