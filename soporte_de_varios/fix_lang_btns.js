const fs = require('fs');

const fullLangSelector = `        <div class="lang-selector">
            <button onclick="setLanguage('en')" style="background:none; color:#fff; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;">EN</button>
            <button onclick="setLanguage('es')" style="background:none; color:#fff; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;">ES</button>
            <button onclick="setLanguage('zh')" style="background:none; color:#fff; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;">ZH</button>
            <button onclick="setLanguage('tl')" style="background:none; color:#fff; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;">TL</button>
            <button onclick="setLanguage('vi')" style="background:none; color:#fff; border:1px solid #fff; padding:5px 10px; cursor:pointer; font-family:'Orbitron', sans-serif;">VI</button>
        </div>`;

['docs/req_hp.html', 'docs/req_tt.html', 'docs/req_ttt.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // The current lang-selector is just EN and ES. We can replace the whole block by matching:
    // <div class="lang-selector">...</div>
    html = html.replace(/<div class="lang-selector">[\s\S]*?<\/div>/, fullLangSelector);
    
    fs.writeFileSync(file, html);
    console.log('Fixed lang selector in ' + file);
});
