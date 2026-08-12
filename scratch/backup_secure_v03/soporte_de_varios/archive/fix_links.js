const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Fix FAQ link in the header
html = html.replace('href="docs/faq.html"', 'href="docs/faq_100.html"');

// Fix empty social buttons
html = html.replace('href="#" class="social-btn" aria-label="Facebook"', 'href="#" onclick="alert(\\\'¡Próximamente en Facebook!\\\'); return false;" class="social-btn" aria-label="Facebook"');
html = html.replace('href="#" class="social-btn" aria-label="Instagram"', 'href="#" onclick="alert(\\\'¡Próximamente en Instagram!\\\'); return false;" class="social-btn" aria-label="Instagram"');
html = html.replace('href="#" class="social-btn" aria-label="LinkedIn"', 'href="#" onclick="alert(\\\'¡Próximamente en LinkedIn!\\\'); return false;" class="social-btn" aria-label="LinkedIn"');

// Any other href="#" without return false?
// E.g., <a href="#" onclick="toggleJoe();"> ?
// In index.html, we don't have many href="#" without return false now.
// I'll ensure we write the changes.

fs.writeFileSync('index.html', html);
console.log("Fixed links and buttons in index.html");
