const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Find the first <section id="services" class="page-section">
const firstServicesStart = html.indexOf('<section id="services" class="page-section">');
const firstServicesEnd = html.indexOf('</section>', firstServicesStart) + 10;

// The first section is the NEW one the previous agent added (lines 472 to 606 roughly).
const firstSectionHtml = html.substring(firstServicesStart, firstServicesEnd);

// Find the second <section id="services" class="page-section">
const secondServicesStart = html.indexOf('<section id="services" class="page-section">', firstServicesEnd);
const secondServicesEnd = html.indexOf('</section>', secondServicesStart) + 10;

const secondSectionHtml = html.substring(secondServicesStart, secondServicesEnd);

// We want to extract the cards from the first section.
// The cards in the first section look like: <div class="eco-card glass" data-app="..."> ... </div>
// We will grab each one, and convert it to <div class="service-card glass"> ... </div>

const regex = /<div class="eco-card glass" data-app="[^"]+">\s*<div class="eco-card-img">\s*<img src="([^"]+)" alt="([^"]+)"[^>]*>\s*<\/div>\s*<div class="eco-card-content">\s*<h3 data-i18n="([^"]+)">([^<]+)<\/h3>\s*<p data-i18n="([^"]+)">([^<]+)<\/p>\s*<div class="eco-actions">\s*<a href="([^"]+)" class="btn-eco-link" data-i18n="[^"]+">[^<]+<\/a>\s*<\/div>\s*<\/div>\s*<\/div>/g;

let match;
let newCardsHtml = '';

while ((match = regex.exec(firstSectionHtml)) !== null) {
    const [_, imgSrc, imgAlt, titleI18n, titleText, descI18n, descText, linkHref] = match;
    
    // We try to style the image similar to the existing ones
    newCardsHtml += `
                <div class="service-card glass">
                    <div class="icon">
                        <img src="${imgSrc}" alt="${imgAlt}" style="width: 80px; height: 80px; filter: drop-shadow(0 0 10px var(--neon-cyan)); object-fit: cover; border-radius: 50%;">
                    </div>
                    <h4 data-i18n="${titleI18n}">${titleText}</h4>
                    <p data-i18n="${descI18n}">${descText}</p>
                    <a href="${linkHref}" class="btn-eco-link" data-i18n="eng_btn_details" style="margin-top: 15px; display: inline-block; font-size: 0.9em;">Ver Detalles →</a>
                </div>`;
}

// Now we inject these new cards into the second section, right before the closing </div> of <div class="services-grid">
let modifiedSecondSection = secondSectionHtml.replace('            </div>\n        </section>', newCardsHtml + '\n            </div>\n        </section>');

// Now we replace the original HTML
// 1. Remove the first section
let newHtml = html.substring(0, firstServicesStart) + html.substring(firstServicesEnd);

// 2. Replace the old second section with the modified one
newHtml = newHtml.replace(secondSectionHtml, modifiedSecondSection);

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log("Services sections merged successfully!");
