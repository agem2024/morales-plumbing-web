const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('docs/hazlo_tu_mismo.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
dom.window.localStorage.setItem('morales_lang', 'es');

// Inject app.js manually since we don't have a real server
const scriptEl = dom.window.document.createElement("script");
scriptEl.textContent = appJs;
dom.window.document.head.appendChild(scriptEl);

// Wait for setTimeout in window.onload
setTimeout(() => {
    try {
        console.log("Tasks count:", dom.window.document.querySelectorAll('.diy-task').length);
        const steps = dom.window.document.querySelectorAll('.step-card');
        console.log("Steps populated count:", steps.length);
        
        // Let's check errors
        console.log("Error? No explicit error thrown if it reached here.");
    } catch(e) {
        console.error("DOM Error:", e);
    }
}, 500);
