const fs = require('fs');
const path = require('path');
const base = 'C:\\Users\\alexp\\Documentos_Locales_Backup\\Morales plumbing\\V.01 web';
const corpPath = path.join(base, 'corporate team', 'Morales_Corporate_Team.html');

let html = fs.readFileSync(corpPath, 'utf8');

// 1. Remove the entire contact-split section I added
const contactStart = html.indexOf('        <!-- CONTACT / VIDEO + BUTTONS -->');
const footerStart = html.indexOf('    <!-- ── FOOTER REMOVED');
if (contactStart !== -1 && footerStart !== -1) {
    html = html.substring(0, contactStart) + html.substring(footerStart);
}

// 2. Now I need to build the new split footer replacing whatever is there.
// I will just replace the whole footer area to the end of body.
const newFooter = `    <!-- ── SPLIT FOOTER ── -->
    <footer style="display: flex; flex-wrap: wrap; background: #030814; color: #8892b0; margin-top: 60px; border-top: 1px solid rgba(212, 175, 55, 0.2); overflow: hidden;">
        <!-- Left: Video -->
        <div style="flex: 1 1 400px; min-height: 300px; position: relative;">
            <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;">
                <source src="assets/urgente_llamada.mp4" type="video/mp4">
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(to right, transparent, #030814);"></div>
        </div>
        
        <!-- Right: Contact Links -->
        <div style="flex: 1 1 400px; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px;">
            
            <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                <a href="https://wa.me/16692134422" target="_blank" style="display: flex; align-items: center; gap: 8px; color: #25D366; text-decoration: none; font-weight: bold; background: rgba(37,211,102,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(37,211,102,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(37,211,102,0.2)'" onmouseout="this.style.background='rgba(37,211,102,0.1)'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.015L.2 23.8l5.908-1.547a11.967 11.967 0 005.923 1.564h.005c6.643 0 12.028-5.385 12.028-12.031C24.062 5.166 18.675 0 12.031 0zm.005 21.848a9.986 9.986 0 01-5.1-1.393l-.366-.217-3.788.993.993-3.69-.239-.38A9.973 9.973 0 012.046 12.03c0-5.518 4.49-10.008 10.01-10.008 5.518 0 10.008 4.49 10.008 10.008 0 5.517-4.49 10.007-10.008 10.007h-.051zm5.495-7.514c-.301-.151-1.785-.88-2.062-.982-.278-.101-.48-.151-.682.151-.202.302-.783.982-.96 1.183-.177.202-.354.227-.656.076-1.503-.755-2.613-1.424-3.568-2.732-.204-.278-.022-.428.128-.578.136-.135.301-.353.453-.529.151-.176.202-.302.302-.503.1-.202.05-.378-.026-.529-.076-.151-.682-1.643-.933-2.25-.245-.591-.496-.511-.682-.52-.176-.009-.378-.009-.58-.009s-.529.076-.807.378c-.278.302-1.06 1.033-1.06 2.518s1.085 2.92 1.236 3.122c.151.202 2.128 3.252 5.155 4.556.72.31 1.282.495 1.722.634.723.23 1.382.197 1.9.12.58-.086 1.785-.729 2.037-1.433.251-.705.251-1.31.176-1.433-.075-.123-.277-.199-.579-.35z"/></svg> WhatsApp
                </a>
                <a href="https://t.me/+16692134422" target="_blank" style="display: flex; align-items: center; gap: 8px; color: #0088cc; text-decoration: none; font-weight: bold; background: rgba(0,136,204,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(0,136,204,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(0,136,204,0.2)'" onmouseout="this.style.background='rgba(0,136,204,0.1)'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> Telegram
                </a>
                <a href="mailto:moralesplumbing026@gmail.com" style="display: flex; align-items: center; gap: 8px; color: #EA4335; text-decoration: none; font-weight: bold; background: rgba(234,67,53,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(234,67,53,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(234,67,53,0.2)'" onmouseout="this.style.background='rgba(234,67,53,0.1)'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> Email
                </a>
                <a href="sms:+16692134422" style="display: flex; align-items: center; gap: 8px; color: #FABB05; text-decoration: none; font-weight: bold; background: rgba(250,187,5,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(250,187,5,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(250,187,5,0.2)'" onmouseout="this.style.background='rgba(250,187,5,0.1)'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.613 4.469 8.653V24l4.085-2.242c1.09.301 2.246.464 3.446.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm3.333 13.333H8.667v-1.111h6.666v1.111zm2.223-3.333H6.444v-1.111h11.112v1.111z"/></svg> SMS
                </a>
            </div>

            <div style="margin-top: 10px;">
                <p style="margin: 0 0 8px 0; font-size: 16px;"><strong style="color: #D4AF37;">24/7 Dispatch:</strong> <a href="tel:16692134422" style="color: #e6f1ff; text-decoration: none; font-weight: bold;">(669) 213-4422</a></p>
                <p style="margin: 0; opacity: 0.8; font-size: 14px;"><strong style="color: #D4AF37;">Contingencia:</strong> <a href="tel:16692342444" style="color: inherit; text-decoration: none;">(669) 234-2444</a></p>
            </div>

            <div style="margin-top: 10px;">
                <h4 style="color: #D4AF37; margin: 0 0 5px 0; font-size: 16px; text-transform: uppercase;">Morales Plumbing</h4>
                <p style="margin: 0; opacity: 0.6; font-size: 13px;">San Jose, CA &bull; Lic. C-36 #1156542</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

const toReplaceStart = html.indexOf('    <!-- ── FOOTER REMOVED');
if (toReplaceStart !== -1) {
    html = html.substring(0, toReplaceStart) + newFooter;
}

fs.writeFileSync(corpPath, html);

// Now apply this to index.html too (in all 3 versions)
// In index.html, we need to replace the section id="contact" with this new footer, 
// OR replace it with the original contact section BUT append this footer.
const indexFiles = [
    path.join(base, 'morales-plumbing-web', 'index.html'),
    path.join(base, 'V.02', 'index.html'),
    path.join(base, 'vo3.0', 'index.html')
];

indexFiles.forEach(idxPath => {
    let idxHtml = fs.readFileSync(idxPath, 'utf8');
    // We want to remove the `<section id="contact" ...` block that I added, and restore the OLD one if possible.
    // Wait, since the user said "do the same in the main page", maybe they just want this simple split footer?
    // Let's replace the <section id="contact"> with the old content (if we can) or just put this split footer there.
    
    // I will replace `<section id="contact" class="page-section">` ... `</section>` with a clean contact section.
    // Actually, I'll just find the contact section and replace its content with the split footer content, keeping it a page-section!
    const cStart = idxHtml.indexOf('        <section id="contact" class="page-section">');
    if (cStart !== -1) {
        const cEnd = idxHtml.indexOf('        </section>', cStart) + '        </section>'.length;
        const newContactSection = `        <section id="contact" class="page-section" style="padding: 0; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
            <div style="display: flex; flex-wrap: wrap; background: #030814; color: #8892b0; border: 1px solid rgba(212, 175, 55, 0.2); overflow: hidden; border-radius: 12px; max-width: 1200px; margin: 0 auto; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
                <!-- Left: Video -->
                <div style="flex: 1 1 400px; min-height: 400px; position: relative;">
                    <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;">
                        <source src="assets/urgente_llamada.mp4" type="video/mp4">
                    </video>
                    <div style="position: absolute; inset: 0; background: linear-gradient(to right, transparent, #030814);"></div>
                </div>
                
                <!-- Right: Contact Links -->
                <div style="flex: 1 1 400px; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px;">
                    <h2 style="color: #D4AF37; margin: 0 0 10px 0; font-family: 'Orbitron', sans-serif;">CONTACTO INMEDIATO</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                        <a href="https://wa.me/16692134422" target="_blank" style="display: flex; align-items: center; gap: 8px; color: #25D366; text-decoration: none; font-weight: bold; background: rgba(37,211,102,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(37,211,102,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(37,211,102,0.2)'" onmouseout="this.style.background='rgba(37,211,102,0.1)'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.015L.2 23.8l5.908-1.547a11.967 11.967 0 005.923 1.564h.005c6.643 0 12.028-5.385 12.028-12.031C24.062 5.166 18.675 0 12.031 0zm.005 21.848a9.986 9.986 0 01-5.1-1.393l-.366-.217-3.788.993.993-3.69-.239-.38A9.973 9.973 0 012.046 12.03c0-5.518 4.49-10.008 10.01-10.008 5.518 0 10.008 4.49 10.008 10.008 0 5.517-4.49 10.007-10.008 10.007h-.051zm5.495-7.514c-.301-.151-1.785-.88-2.062-.982-.278-.101-.48-.151-.682.151-.202.302-.783.982-.96 1.183-.177.202-.354.227-.656.076-1.503-.755-2.613-1.424-3.568-2.732-.204-.278-.022-.428.128-.578.136-.135.301-.353.453-.529.151-.176.202-.302.302-.503.1-.202.05-.378-.026-.529-.076-.151-.682-1.643-.933-2.25-.245-.591-.496-.511-.682-.52-.176-.009-.378-.009-.58-.009s-.529.076-.807.378c-.278.302-1.06 1.033-1.06 2.518s1.085 2.92 1.236 3.122c.151.202 2.128 3.252 5.155 4.556.72.31 1.282.495 1.722.634.723.23 1.382.197 1.9.12.58-.086 1.785-.729 2.037-1.433.251-.705.251-1.31.176-1.433-.075-.123-.277-.199-.579-.35z"/></svg> WhatsApp
                        </a>
                        <a href="https://t.me/+16692134422" target="_blank" style="display: flex; align-items: center; gap: 8px; color: #0088cc; text-decoration: none; font-weight: bold; background: rgba(0,136,204,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(0,136,204,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(0,136,204,0.2)'" onmouseout="this.style.background='rgba(0,136,204,0.1)'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> Telegram
                        </a>
                        <a href="mailto:moralesplumbing026@gmail.com" style="display: flex; align-items: center; gap: 8px; color: #EA4335; text-decoration: none; font-weight: bold; background: rgba(234,67,53,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(234,67,53,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(234,67,53,0.2)'" onmouseout="this.style.background='rgba(234,67,53,0.1)'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> Email
                        </a>
                        <a href="sms:+16692134422" style="display: flex; align-items: center; gap: 8px; color: #FABB05; text-decoration: none; font-weight: bold; background: rgba(250,187,5,0.1); padding: 8px 18px; border-radius: 40px; border: 1px solid rgba(250,187,5,0.2); transition: 0.3s;" onmouseover="this.style.background='rgba(250,187,5,0.2)'" onmouseout="this.style.background='rgba(250,187,5,0.1)'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.613 4.469 8.653V24l4.085-2.242c1.09.301 2.246.464 3.446.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm3.333 13.333H8.667v-1.111h6.666v1.111zm2.223-3.333H6.444v-1.111h11.112v1.111z"/></svg> SMS
                        </a>
                    </div>

                    <div style="margin-top: 10px;">
                        <p style="margin: 0 0 8px 0; font-size: 16px;"><strong style="color: #D4AF37;">24/7 Dispatch:</strong> <a href="tel:16692134422" style="color: #e6f1ff; text-decoration: none; font-weight: bold;">(669) 213-4422</a></p>
                        <p style="margin: 0; opacity: 0.8; font-size: 14px;"><strong style="color: #D4AF37;">Contingencia:</strong> <a href="tel:16692342444" style="color: inherit; text-decoration: none;">(669) 234-2444</a></p>
                    </div>

                    <div style="margin-top: 10px;">
                        <h4 style="color: #D4AF37; margin: 0 0 5px 0; font-size: 16px; text-transform: uppercase;">Morales Plumbing</h4>
                        <p style="margin: 0; opacity: 0.6; font-size: 13px;">San Jose, CA &bull; Lic. C-36 #1156542</p>
                    </div>
                </div>
            </div>
        </section>`;
        
        idxHtml = idxHtml.substring(0, cStart) + newContactSection + idxHtml.substring(cEnd);
        fs.writeFileSync(idxPath, idxHtml);
        console.log('Updated ' + idxPath);
    }
});
