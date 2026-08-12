/**
 * Custom plumbing-themed SVG icons to replace Unicode emojis
 * Used inline in the booking panel, Joe chat, and throughout the site
 */

/* Usage: <span class="pico pico-appointment"></span> */

const PICO_ICONS = {
  appointment: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="6" width="26" height="23" rx="3" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5"/>
    <rect x="3" y="6" width="26" height="7" rx="2" fill="rgba(0,245,255,0.15)"/>
    <line x1="10" y1="3" x2="10" y2="9" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="22" y1="3" x2="22" y2="9" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
    <rect x="8" y="17" width="5" height="4" rx="1" fill="#00f5ff" opacity="0.7"/>
    <!-- wrench overlay -->
    <path d="M19 16 Q23 14 24 18 L21 19 L19 16Z" fill="#ff8c00"/>
    <line x1="18" y1="17" x2="22" y2="21" stroke="#ff8c00" stroke-width="1.5"/>
  </svg>`,

  person: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Plumber helmet -->
    <path d="M10 13 Q10 7 16 7 Q22 7 22 13Z" fill="#ff8c00" stroke="#ff8c00" stroke-width="0.5"/>
    <rect x="8" y="13" width="16" height="2" rx="1" fill="#e07000"/>
    <!-- Face -->
    <circle cx="16" cy="11" r="4" fill="#ffd89b" stroke="none"/>
    <!-- Body with overalls -->
    <path d="M10 20 Q10 17 16 17 Q22 17 22 20 L23 28 H9 Z" fill="#1a3a6b"/>
    <rect x="13" y="17" width="6" height="3" rx="1" fill="#ff8c00"/>
  </svg>`,

  pipe_phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Copper pipe shaped like phone handset -->
    <path d="M8 6 Q6 6 6 8 L6 12 Q6 14 8 14 L10 14 Q10 18 22 18 L22 20 Q22 22 24 22 L28 22 Q30 22 30 20 L30 26 Q30 28 28 28 L24 28 Q22 28 22 26 L22 22" 
          stroke="#b87333" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M8 6 L12 6 Q14 6 14 8 L14 10 Q14 12 12 12 L8 12" stroke="#d4944a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- Fittings -->
    <circle cx="8" cy="9" r="2.5" fill="#ff8c00" stroke="#b87333" stroke-width="1"/>
    <circle cx="26" cy="25" r="2.5" fill="#ff8c00" stroke="#b87333" stroke-width="1"/>
    <!-- Water drops to indicate active call -->
    <circle cx="19" cy="12" r="1.5" fill="#00f5ff" opacity="0.8"/>
    <circle cx="23" cy="10" r="1" fill="#00f5ff" opacity="0.5"/>
  </svg>`,

  drop_pin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Water drop pin -->
    <path d="M16 4 Q16 4 8 14 Q8 20 16 22 Q24 20 24 14 Q24 4 16 4Z" fill="url(#dropGrad)" stroke="#00f5ff" stroke-width="1"/>
    <path d="M16 22 L16 29" stroke="#00f5ff" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Pipe fitting ring -->
    <ellipse cx="16" cy="29" rx="3" ry="1.5" fill="#ff8c00"/>
    <!-- Shine -->
    <ellipse cx="13" cy="12" rx="2" ry="3" fill="rgba(255,255,255,0.3)" transform="rotate(-20, 13, 12)"/>
    <defs>
      <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#00f5ff"/>
        <stop offset="100%" stop-color="#0066aa"/>
      </linearGradient>
    </defs>
  </svg>`,

  wrench: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <path d="M22 5 Q26 5 27 9 Q28 13 25 15 L12 28 Q10 30 8 29 Q6 28 7 26 L20 13 Q17 10 18 6 Q19 2 22 5Z" 
          fill="#ff8c00" stroke="#e07000" stroke-width="1"/>
    <circle cx="22" cy="8" r="3" fill="none" stroke="#ffd89b" stroke-width="1.5"/>
    <circle cx="9" cy="27" r="2" fill="#ffd89b"/>
    <!-- Pipe crossing the wrench -->
    <path d="M14 10 L18 14" stroke="#00f5ff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="13" cy="9.5" r="2" fill="#00f5ff" opacity="0.8"/>
    <circle cx="18.5" cy="14.5" r="2" fill="#00f5ff" opacity="0.8"/>
  </svg>`,

  pressure_gauge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Pressure gauge as clock -->
    <circle cx="16" cy="15" r="11" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5"/>
    <circle cx="16" cy="15" r="9" fill="none" stroke="rgba(0,245,255,0.2)" stroke-width="0.5"/>
    <!-- Gauge markings -->
    <line x1="16" y1="6" x2="16" y2="8" stroke="#00f5ff" stroke-width="1.5"/>
    <line x1="25" y1="15" x2="23" y2="15" stroke="#00f5ff" stroke-width="1.5"/>
    <line x1="7" y1="15" x2="9" y2="15" stroke="#00f5ff" stroke-width="1.5"/>
    <!-- Danger zone arc (red zone 200-300 PSI) -->
    <path d="M22 8 A9 9 0 0 1 25 15" stroke="#ff4444" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Needle -->
    <line x1="16" y1="15" x2="21" y2="9" stroke="#ff8c00" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="16" cy="15" r="2" fill="#ff8c00"/>
    <!-- Pipe stem -->
    <rect x="13" y="26" width="6" height="4" rx="1.5" fill="#b87333"/>
    <line x1="14" y1="30" x2="18" y2="30" stroke="#ff8c00" stroke-width="0.5"/>
  </svg>`,

  clipboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="6" width="20" height="24" rx="2" fill="#0a1628" stroke="#00f5ff" stroke-width="1.2"/>
    <!-- Clip at top -->
    <rect x="12" y="4" width="8" height="4" rx="2" fill="#ff8c00" stroke="#e07000" stroke-width="0.8"/>
    <!-- Pipe diagram on clipboard -->
    <line x1="10" y1="14" x2="16" y2="14" stroke="#00f5ff" stroke-width="1.5"/>
    <line x1="16" y1="14" x2="16" y2="18" stroke="#00f5ff" stroke-width="1.5"/>
    <line x1="16" y1="18" x2="22" y2="18" stroke="#00f5ff" stroke-width="1.5"/>
    <circle cx="10" cy="14" r="1.5" fill="#ff8c00"/>
    <circle cx="22" cy="18" r="1.5" fill="#ff8c00"/>
    <!-- Lines for text -->
    <line x1="10" y1="22" x2="22" y2="22" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <line x1="10" y1="25" x2="18" y2="25" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  </svg>`,

  valve_check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Ball valve -->
    <rect x="4" y="13" width="8" height="6" rx="1" fill="#b87333"/>
    <rect x="20" y="13" width="8" height="6" rx="1" fill="#b87333"/>
    <circle cx="16" cy="16" r="6" fill="#0a1628" stroke="#39ff14" stroke-width="2"/>
    <!-- Valve handle -->
    <rect x="13" y="7" width="6" height="3" rx="1.5" fill="#39ff14"/>
    <!-- Checkmark inside valve -->
    <path d="M12 16 L15 19 L21 13" stroke="#39ff14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  water_burst: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Central burst -->
    <circle cx="16" cy="16" r="5" fill="#00f5ff" opacity="0.9"/>
    <!-- Water spray lines -->
    <line x1="16" y1="4" x2="16" y2="8" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="16" y1="24" x2="16" y2="28" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="4" y1="16" x2="8" y2="16" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
    <line x1="24" y1="16" x2="28" y2="16" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
    <!-- Diagonal sprays -->
    <line x1="7" y1="7" x2="10" y2="10" stroke="#39ff14" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="25" y1="7" x2="22" y2="10" stroke="#39ff14" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="7" y1="25" x2="10" y2="22" stroke="#39ff14" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="25" y1="25" x2="22" y2="22" stroke="#39ff14" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Star sparks -->
    <circle cx="16" cy="6" r="1.2" fill="#ff8c00"/>
    <circle cx="26" cy="16" r="1.2" fill="#ff8c00"/>
    <circle cx="16" cy="26" r="1.2" fill="#ff8c00"/>
    <circle cx="6" cy="16" r="1.2" fill="#ff8c00"/>
  </svg>`,

  pipe_date: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <!-- Calendar with pipe fittings -->
    <rect x="3" y="8" width="26" height="21" rx="2" fill="#0a1628" stroke="#b87333" stroke-width="1.5"/>
    <rect x="3" y="8" width="26" height="7" fill="#b87333" opacity="0.3"/>
    <!-- Pipe handles on top -->
    <line x1="10" y1="4" x2="10" y2="11" stroke="#ff8c00" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="10" cy="4" r="2" fill="#ff8c00"/>
    <line x1="22" y1="4" x2="22" y2="11" stroke="#ff8c00" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="22" cy="4" r="2" fill="#ff8c00"/>
    <!-- Calendar grid dots -->
    <circle cx="9" cy="20" r="1.5" fill="#00f5ff" opacity="0.7"/>
    <circle cx="14" cy="20" r="1.5" fill="#00f5ff" opacity="0.7"/>
    <circle cx="19" cy="20" r="2" fill="#ff8c00"/>
    <circle cx="24" cy="20" r="1.5" fill="#00f5ff" opacity="0.7"/>
    <circle cx="9" cy="26" r="1.5" fill="#00f5ff" opacity="0.5"/>
    <circle cx="14" cy="26" r="1.5" fill="#00f5ff" opacity="0.5"/>
  </svg>`
};

// Generate CSS class for each icon
const PICO_CSS = Object.entries(PICO_ICONS).map(([name, svg]) => {
    const encoded = 'data:image/svg+xml,' + encodeURIComponent(svg);
    return `.pico-${name} { display:inline-block; width:1.2em; height:1.2em; vertical-align:middle; background:url("${encoded}") center/contain no-repeat; }`;
}).join('\n');

// Inject into document if running in browser
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.id = 'pico-icons-style';
    style.textContent = PICO_CSS;
    document.head.appendChild(style);
}

// Export for Node.js (build tools)
if (typeof module !== 'undefined') {
    module.exports = { PICO_ICONS, PICO_CSS };
}
