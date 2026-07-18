const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    // Catch failed requests
    page.on('requestfailed', request => {
        console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
    });
    
    // Catch responses with 404
    page.on('response', response => {
        if (!response.ok()) {
            console.log('RESPONSE NOT OK:', response.status(), response.url());
        }
    });

    await page.goto('file:///' + __dirname.replace(/\\/g, '/') + '/docs/diy_hub.html');
    
    console.log('Setting lang to zh...');
    await page.evaluate(() => {
        localStorage.setItem('morales_lang', 'zh');
        // trigger reload or re-render if necessary
        window.location.reload();
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    const chatHtml = await page.evaluate(() => {
        return document.getElementById('joe-diy-chat').innerHTML;
    });
    
    console.log('CHAT HTML LENGTH:', chatHtml.length);
    
    await browser.close();
})();
