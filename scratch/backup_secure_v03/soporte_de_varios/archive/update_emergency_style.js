const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const oldStyles = `
.emergency-topbar {
    background: linear-gradient(90deg, #b30000, #ff0000, #b30000);
    color: white;
    text-align: center;
    padding: 8px 15px;
    font-family: 'Inter', sans-serif;
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(255, 0, 0, 0.3);
    font-weight: 600;
}
.emergency-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
.emergency-call {
    color: white;
    text-decoration: none;
    background: #000;
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}`;

const newStyles = `
.emergency-topbar {
    background: rgba(0, 15, 25, 0.8);
    color: #e0fbfc;
    text-align: center;
    padding: 4px 15px;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    border-bottom: 1px solid rgba(0, 229, 255, 0.2);
}
.emergency-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}
.emergency-call {
    color: var(--neon-cyan);
    text-decoration: none;
    background: transparent;
    padding: 2px 10px;
    border-radius: 4px;
    border: 1px solid rgba(0, 229, 255, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
}
.emergency-call:hover {
    background: rgba(0, 229, 255, 0.1);
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.5);
}`;

if (css.includes('.emergency-topbar {')) {
    // We use a regex to replace the entire block of styles in case they differ slightly due to whitespaces
    // Alternatively, since we just appended them recently, we can try string replace.
    // Let's use a regex that captures from .emergency-topbar { up to .phone-number {
    const regex = /\.emergency-topbar\s*\{[\s\S]*?\.emergency-call:hover\s*\{[\s\S]*?\}/;
    if (regex.test(css)) {
        css = css.replace(regex, newStyles);
        fs.writeFileSync('style.css', css);
        console.log("Updated emergency topbar styles via regex.");
    } else {
        console.log("Regex didn't match.");
    }
}
