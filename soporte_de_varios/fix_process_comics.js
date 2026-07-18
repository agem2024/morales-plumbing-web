const fs = require('fs');
for (let i = 1; i <= 15; i++) {
    const file = `docs/proceso_svc_${i}_cliente.html`;
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        // Replace broken image path with the real comic image
        html = html.replace(/<img[^>]+src="[^"]+"[^>]*>/, `<img src="../assets/pb_svc_${i}.png" alt="Comic Service ${i}" style="width: 100%; border-radius: 12px; box-shadow: 0 0 20px rgba(0, 245, 255, 0.3); border: 2px solid var(--neon-cyan);">`);
        fs.writeFileSync(file, html);
    }
}
console.log("Fixed comic image paths in proceso_svc_X_cliente.html");
