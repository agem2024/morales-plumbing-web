/**
 * ORION UNIVERSE ENGINE v2.0
 * Renders a unique cosmos background for each subpage.
 * Mode is set via <canvas data-universe-mode="MODE">
 *
 * Modes:
 *  "warp"          — Star warp / hyperspace (pricebook)
 *  "nebula"        — Slow drifting gas clouds + stars (service pages)
 *  "matrix-stars"  — Falling star grid / matrix rain (faq / legal)
 *  "pulse"         — Radial pulse rings + floating particles (detail pages)
 *  "galaxy-spin"   — Rotating galaxy spiral (water heater / treatment)
 */

(function () {
    const canvas = document.getElementById('universe-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const MODE = canvas.dataset.universeMode || 'warp';
    let W, H, raf;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // ── SHARED STAR POOL ──────────────────────────────────────
    function makeStar(spread) {
        return {
            x: (Math.random() - 0.5) * (spread || W * 3),
            y: (Math.random() - 0.5) * (spread || H * 3),
            z: Math.random() * W,
            blink: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.7,
            size: Math.random() * 1.8 + 0.3,
            color: `hsl(${180 + Math.random() * 60},100%,${70 + Math.random() * 30}%)`
        };
    }

    // ══════════════════════════════════════════════════════════
    // MODE 1: WARP — Hyperspace Star Warp (pricebook)
    // ══════════════════════════════════════════════════════════
    function initWarp() {
        const STARS = 350;
        const stars = Array.from({ length: STARS }, () => ({
            x: Math.random() * W - W / 2,
            y: Math.random() * H - H / 2,
            z: Math.random() * W,
            pz: 0
        }));

        function draw() {
            ctx.fillStyle = 'rgba(2, 4, 16, 0.2)';
            ctx.fillRect(0, 0, W, H);

            const cx = W / 2, cy = H / 2;
            for (const s of stars) {
                s.pz = s.z;
                s.z -= 4.5;
                if (s.z <= 0) {
                    s.x = Math.random() * W - cx;
                    s.y = Math.random() * H - cy;
                    s.z = W;
                    s.pz = s.z;
                }
                const sx = (s.x / s.z) * W + cx;
                const sy = (s.y / s.z) * W + cy;
                const px = (s.x / s.pz) * W + cx;
                const py = (s.y / s.pz) * W + cy;
                const size = Math.max(0.3, (1 - s.z / W) * 3.5);
                const alpha = (1 - s.z / W);
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = `rgba(${150 + Math.floor(alpha * 105)}, ${200 + Math.floor(alpha * 55)}, 255, ${alpha * 0.9})`;
                ctx.lineWidth = size;
                ctx.stroke();
            }
            raf = requestAnimationFrame(draw);
        }
        draw();
    }

    // ══════════════════════════════════════════════════════════
    // MODE 2: NEBULA — Drifting gas clouds + twinkling stars
    // ══════════════════════════════════════════════════════════
    function initNebula() {
        const stars = Array.from({ length: 280 }, makeStar);
        let t = 0;

        // Nebula cloud nodes
        const clouds = Array.from({ length: 5 }, (_, i) => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: 200 + Math.random() * 280,
            hue: [200, 260, 140, 300, 180][i],
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.12,
            phase: Math.random() * Math.PI * 2
        }));

        function draw() {
            ctx.fillStyle = 'rgba(2, 4, 18, 0.12)';
            ctx.fillRect(0, 0, W, H);
            t += 0.005;

            // Draw nebula clouds
            for (const c of clouds) {
                c.x += c.vx + Math.sin(t + c.phase) * 0.25;
                c.y += c.vy + Math.cos(t + c.phase * 1.3) * 0.18;
                if (c.x < -c.r) c.x = W + c.r;
                if (c.x > W + c.r) c.x = -c.r;
                if (c.y < -c.r) c.y = H + c.r;
                if (c.y > H + c.r) c.y = -c.r;

                const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
                grad.addColorStop(0, `hsla(${c.hue}, 100%, 60%, 0.09)`);
                grad.addColorStop(0.5, `hsla(${c.hue + 30}, 80%, 50%, 0.05)`);
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw twinkling stars
            for (const s of stars) {
                s.blink += 0.025;
                const alpha = 0.4 + 0.6 * Math.abs(Math.sin(s.blink * s.speed));
                ctx.beginPath();
                ctx.arc(
                    ((s.x / s.z) * W + W / 2 + W / 2) % W,
                    ((s.y / s.z) * H + H / 2 + H / 2) % H,
                    s.size * alpha, 0, Math.PI * 2
                );
                ctx.fillStyle = s.color.replace(')', `,${alpha})`).replace('hsl', 'hsla');
                ctx.fill();
            }
            raf = requestAnimationFrame(draw);
        }
        draw();
    }

    // ══════════════════════════════════════════════════════════
    // MODE 3: MATRIX-STARS — Shooting stars + grid rain
    // ══════════════════════════════════════════════════════════
    function initMatrixStars() {
        const COLS = Math.floor(W / 22);
        const drops = Array.from({ length: COLS }, () => ({
            y: Math.random() * H,
            speed: 1 + Math.random() * 2.5,
            alpha: 0.3 + Math.random() * 0.5,
            char: Math.random() > 0.5
        }));

        const shooters = Array.from({ length: 12 }, () => newShooter());
        function newShooter() {
            return {
                x: Math.random() * W,
                y: Math.random() * H * 0.5,
                vx: 3 + Math.random() * 6,
                vy: 1.5 + Math.random() * 3,
                len: 60 + Math.random() * 120,
                alpha: 0.7 + Math.random() * 0.3,
                life: 1
            };
        }

        let t = 0;
        function draw() {
            ctx.fillStyle = 'rgba(2, 4, 18, 0.18)';
            ctx.fillRect(0, 0, W, H);
            t++;

            // Grid drops
            ctx.font = '13px monospace';
            for (let i = 0; i < COLS; i++) {
                const d = drops[i];
                const x = i * 22;
                ctx.fillStyle = `rgba(0, 245, 200, ${d.alpha * 0.6})`;
                const symbols = ['✦', '◈', '◇', '⬡', '△', '0', '1'];
                ctx.fillText(symbols[Math.floor(t * d.speed + i) % symbols.length], x, d.y);
                d.y += d.speed;
                if (d.y > H) d.y = -20;
            }

            // Shooting stars
            for (let i = 0; i < shooters.length; i++) {
                const s = shooters[i];
                s.life -= 0.012;
                if (s.life <= 0) { shooters[i] = newShooter(); continue; }
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.vx * s.len / 10, s.y - s.vy * s.len / 10);
                const grad = ctx.createLinearGradient(
                    s.x, s.y,
                    s.x - s.vx * s.len / 10, s.y - s.vy * s.len / 10
                );
                grad.addColorStop(0, `rgba(0, 245, 255, ${s.life * s.alpha})`);
                grad.addColorStop(1, 'transparent');
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                s.x += s.vx;
                s.y += s.vy;
                if (s.x > W + 100 || s.y > H + 100) shooters[i] = newShooter();
            }
            raf = requestAnimationFrame(draw);
        }
        draw();
    }

    // ══════════════════════════════════════════════════════════
    // MODE 4: PULSE — Radial rings + floating orbs
    // ══════════════════════════════════════════════════════════
    function initPulse() {
        const rings = Array.from({ length: 5 }, (_, i) => ({
            r: i * 80,
            speed: 0.4 + i * 0.15,
            alpha: 0,
            hue: [190, 220, 260, 300, 180][i]
        }));

        const orbs = Array.from({ length: 30 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: 1 + Math.random() * 3,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            hue: 180 + Math.random() * 120,
            alpha: 0.3 + Math.random() * 0.7,
            phase: Math.random() * Math.PI * 2
        }));

        let t = 0;
        function draw() {
            ctx.fillStyle = 'rgba(2, 4, 18, 0.15)';
            ctx.fillRect(0, 0, W, H);
            t += 0.018;
            const cx = W / 2, cy = H / 2;

            // Pulsing rings from center
            for (const ring of rings) {
                ring.r += ring.speed;
                ring.alpha = Math.max(0, 1 - ring.r / (Math.max(W, H) * 0.8));
                if (ring.r > Math.max(W, H) * 0.8) ring.r = 0;
                ctx.beginPath();
                ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
                ctx.strokeStyle = `hsla(${ring.hue}, 100%, 70%, ${ring.alpha * 0.25})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Floating orbs
            for (const o of orbs) {
                o.x += o.vx + Math.sin(t + o.phase) * 0.3;
                o.y += o.vy + Math.cos(t + o.phase * 1.2) * 0.3;
                if (o.x < 0) o.x = W;
                if (o.x > W) o.x = 0;
                if (o.y < 0) o.y = H;
                if (o.y > H) o.y = 0;
                const pulse = 0.5 + 0.5 * Math.sin(t * 2 + o.phase);
                
                // Draw inner core
                ctx.fillStyle = `hsla(${o.hue}, 100%, 85%, ${o.alpha * pulse})`;
                ctx.beginPath();
                ctx.arc(o.x, o.y, o.r * 1.2, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw outer glow (no radial gradient creation)
                ctx.fillStyle = `hsla(${o.hue}, 100%, 80%, ${o.alpha * pulse * 0.18})`;
                ctx.beginPath();
                ctx.arc(o.x, o.y, o.r * 4, 0, Math.PI * 2);
                ctx.fill();
            }
            raf = requestAnimationFrame(draw);
        }
        draw();
    }

    // ══════════════════════════════════════════════════════════
    // MODE 5: GALAXY-SPIN — Rotating galaxy spiral
    // ══════════════════════════════════════════════════════════
    function initGalaxySpin() {
        const ARMS = 4;
        const STARS_PER_ARM = 180;
        const allStars = [];

        for (let arm = 0; arm < ARMS; arm++) {
            const armAngle = (arm / ARMS) * Math.PI * 2;
            for (let i = 0; i < STARS_PER_ARM; i++) {
                const t = i / STARS_PER_ARM;
                const angle = armAngle + t * Math.PI * 3;
                const radius = t * Math.min(W, H) * 0.42;
                const scatter = (Math.random() - 0.5) * radius * 0.35;
                allStars.push({
                    ox: Math.cos(angle) * radius + (Math.random() - 0.5) * scatter,
                    oy: Math.sin(angle) * radius + (Math.random() - 0.5) * scatter,
                    size: Math.random() * 2 + 0.4,
                    hue: arm % 2 === 0 ? 180 + Math.random() * 40 : 240 + Math.random() * 60,
                    alpha: 0.3 + Math.random() * 0.7,
                    drift: (Math.random() - 0.5) * 0.001
                });
            }
        }

        // Random field stars
        for (let i = 0; i < 100; i++) {
            allStars.push({
                ox: (Math.random() - 0.5) * W * 1.2,
                oy: (Math.random() - 0.5) * H * 1.2,
                size: Math.random() * 1.2,
                hue: 180 + Math.random() * 120,
                alpha: 0.2 + Math.random() * 0.5,
                drift: (Math.random() - 0.5) * 0.0005
            });
        }

        let angle = 0;
        function draw() {
            ctx.fillStyle = 'rgba(2, 4, 18, 0.12)';
            ctx.fillRect(0, 0, W, H);
            angle += 0.0008;
            const cx = W / 2, cy = H / 2;
            const cos = Math.cos(angle), sin = Math.sin(angle);

            for (const s of allStars) {
                s.drift && (s.alpha = Math.max(0.1, Math.min(1, s.alpha + s.drift)));
                const rx = s.ox * cos - s.oy * sin;
                const ry = s.ox * sin + s.oy * cos;
                
                // Draw inner core
                ctx.fillStyle = `hsla(${s.hue}, 100%, 95%, ${s.alpha})`;
                ctx.beginPath();
                ctx.arc(cx + rx, cy + ry, s.size * 0.8, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw outer glow (no radial gradient creation)
                ctx.fillStyle = `hsla(${s.hue}, 100%, 75%, ${s.alpha * 0.15})`;
                ctx.beginPath();
                ctx.arc(cx + rx, cy + ry, s.size * 3, 0, Math.PI * 2);
                ctx.fill();
            }
            raf = requestAnimationFrame(draw);
        }
        draw();
    }

    // ── DISPATCH ────────────────────────────────────────────
    switch (MODE) {
        case 'warp':         initWarp();        break;
        case 'nebula':       initNebula();      break;
        case 'matrix-stars': initMatrixStars(); break;
        case 'pulse':        initPulse();       break;
        case 'galaxy-spin':  initGalaxySpin();  break;
        default:             initWarp();
    }
})();
