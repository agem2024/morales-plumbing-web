const fs = require('fs');

['docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Add CSS to crop the top 25% of the images to hide baked-in speech bubbles
    const styleBlock = `
        .comic-img-wrapper { 
            overflow: hidden; 
            border-radius: 8px; 
            border: 3px solid #000; 
            margin-bottom: 1.5rem; 
            height: 250px; /* Fixed height for cropping */
        }
        .comic-img-wrapper img { 
            width: 100%; 
            height: 100%;
            object-fit: cover; 
            object-position: center 80%; /* Shift focus to bottom/center, pushing top bubbles out */
            transform: scale(1.3); /* Zoom in to push edges out */
            border: none; /* Remove border from img, moved to wrapper */
            margin-bottom: 0;
        }
    `;
    
    // Remove old wrapper style if present
    html = html.replace(/\.comic-img-wrapper img \{[^}]+\}/, styleBlock);
    
    fs.writeFileSync(file, html);
    console.log('Applied crop CSS to ' + file);
});
