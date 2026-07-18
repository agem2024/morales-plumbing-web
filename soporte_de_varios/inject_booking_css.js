const fs = require('fs');

const bookingCSS = `
/* ═══════════════════════════════════════════════════════
   BOOKING PANEL — Slides in alongside Joe AI
═══════════════════════════════════════════════════════ */
.booking-panel {
    position: fixed;
    bottom: 100px;
    right: 420px; /* sits to the left of joe-container */
    width: 320px;
    max-height: 80vh;
    background: rgba(5, 10, 28, 0.97);
    border: 1px solid rgba(0, 245, 255, 0.35);
    border-radius: 18px;
    box-shadow: 0 0 40px rgba(0, 245, 255, 0.15), 0 20px 60px rgba(0,0,0,0.7);
    z-index: 9998;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translateX(0) scale(1);
    opacity: 1;
}

.booking-panel-hidden {
    transform: translateX(60px) scale(0.92);
    opacity: 0;
    pointer-events: none;
}

.booking-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: rgba(0, 245, 255, 0.08);
    border-bottom: 1px solid rgba(0, 245, 255, 0.2);
    gap: 8px;
    flex-wrap: wrap;
}

.booking-panel-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Orbitron', monospace;
    font-size: 0.82rem;
    font-weight: 700;
    color: #00f5ff;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
}

.booking-panel-status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.55);
    font-style: italic;
}

.booking-status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #00f5ff;
    animation: bkPulse 1.4s infinite;
    display: inline-block;
}

@keyframes bkPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.75); }
}

.booking-panel-close {
    background: none;
    border: none;
    color: rgba(255,255,255,0.4);
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 50%;
    transition: all 0.2s;
    margin-left: auto;
}

.booking-panel-close:hover {
    color: #ff4444;
    background: rgba(255,68,68,0.1);
}

.booking-panel-body {
    padding: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.booking-field-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.booking-field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.booking-label {
    font-size: 0.68rem;
    font-family: 'Orbitron', monospace;
    color: rgba(0, 245, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.booking-input {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(0, 245, 255, 0.15);
    border-radius: 8px;
    color: #e2eff5;
    padding: 8px 10px;
    font-size: 0.82rem;
    font-family: 'Inter', sans-serif;
    width: 100%;
    transition: all 0.3s;
    box-sizing: border-box;
}

.booking-input.field-filled {
    border-color: rgba(57, 255, 20, 0.5);
    background: rgba(57, 255, 20, 0.06);
    color: #39ff14;
}

.booking-input.field-filling {
    border-color: rgba(0, 245, 255, 0.6);
    background: rgba(0, 245, 255, 0.07);
    animation: fieldFillPulse 0.6s ease;
}

@keyframes fieldFillPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); box-shadow: 0 0 12px rgba(0, 245, 255, 0.4); }
    100% { transform: scale(1); }
}

.booking-textarea {
    resize: none;
    min-height: 56px;
}

.booking-progress {
    height: 4px;
    background: rgba(255,255,255,0.08);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 4px;
}

.booking-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #00f5ff, #39ff14);
    border-radius: 4px;
    transition: width 0.5s ease;
}

.booking-fields-label {
    text-align: center;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.4);
    font-family: 'Orbitron', monospace;
}

.booking-submit-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, rgba(0,245,255,0.15), rgba(57,255,20,0.15));
    border: 1px solid rgba(57,255,20,0.4);
    border-radius: 10px;
    color: #39ff14;
    font-family: 'Orbitron', monospace;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: not-allowed;
    transition: all 0.3s;
    letter-spacing: 1px;
    opacity: 0.5;
}

.booking-submit-btn:not([disabled]) {
    cursor: pointer;
    opacity: 1;
    box-shadow: 0 0 20px rgba(57,255,20,0.25);
    animation: readyPulse 2s infinite;
}

.booking-submit-btn:not([disabled]):hover {
    background: rgba(57,255,20,0.25);
    box-shadow: 0 0 30px rgba(57,255,20,0.5);
    transform: translateY(-2px);
}

@keyframes readyPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(57,255,20,0.25); }
    50% { box-shadow: 0 0 35px rgba(57,255,20,0.5); }
}

.booking-disclaimer {
    text-align: center;
    font-size: 0.65rem;
    color: rgba(255,255,255,0.3);
    margin: 0;
    line-height: 1.4;
}

@media (max-width: 900px) {
    .booking-panel {
        right: 10px;
        bottom: auto;
        top: 70px;
        width: calc(100vw - 20px);
        max-width: 380px;
    }
}
`;

let css = fs.readFileSync('style.css', 'utf8');
css += bookingCSS;
fs.writeFileSync('style.css', css);
console.log('Booking panel CSS added to style.css');
