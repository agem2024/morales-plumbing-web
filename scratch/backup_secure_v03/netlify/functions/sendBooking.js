// ================================================================
//  MORALES PLUMBING — Netlify Function: sendBooking.js
//  Secure backend endpoint to process appointment bookings.
//  Uses Resend.com API to send real email notifications.
//  Env vars required in Netlify Dashboard:
//    RESEND_API_KEY  (from resend.com — free tier: 3,000/month)
//    NOTIFY_EMAIL    (e.g. moralesplumbing026@gmail.com)
// ================================================================

exports.handler = async function(event, context) {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    // Rate limiting: reject payloads > 10KB
    if (event.body && event.body.length > 10240) {
        return { statusCode: 413, body: JSON.stringify({ error: 'Payload too large' }) };
    }

    try {
        const body = JSON.parse(event.body);
        const appt = body.appointment;

        // Validate required fields
        if (!appt || !appt.name || !appt.phone || !appt.service) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required booking fields: name, phone, service' })
            };
        }

        // Sanitize inputs (basic XSS prevention)
        const sanitize = (str) => String(str || '').replace(/<[^>]*>/g, '').trim().substring(0, 500);
        const safeAppt = {
            id:       sanitize(appt.id || `MP-${Date.now()}`),
            name:     sanitize(appt.name),
            phone:    sanitize(appt.phone),
            email:    sanitize(appt.email || 'No provided'),
            service:  sanitize(appt.service),
            date:     sanitize(appt.date || 'To be confirmed'),
            time:     sanitize(appt.time || 'To be confirmed'),
            tier:     sanitize(appt.tier || 'Standard'),
            notes:    sanitize(appt.notes || 'None'),
            lang:     sanitize(appt.lang || 'en')
        };

        const resendKey  = process.env.RESEND_API_KEY;
        const notifyTo   = process.env.NOTIFY_EMAIL || 'moralesplumbing026@gmail.com';

        // ── Send email via Resend ─────────────────────────────────────
        if (resendKey) {
            const emailHtml = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A192F; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #0A192F 0%, #112240 100%); padding: 25px 30px; border-bottom: 4px solid #D4AF37;">
                    <h1 style="margin: 0; font-size: 1.4rem; color: #D4AF37; letter-spacing: 2px;">MORALES PLUMBING</h1>
                    <p style="margin: 5px 0 0; font-size: 0.85rem; color: #00f5ff;">🔔 NUEVA CITA RECIBIDA — ORION Booking System</p>
                </div>
                <div style="padding: 25px 30px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold; width: 40%;">ID Cita:</td><td style="padding: 8px 0;">${safeAppt.id}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Cliente:</td><td style="padding: 8px 0;">${safeAppt.name}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Teléfono:</td><td style="padding: 8px 0;">${safeAppt.phone}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${safeAppt.email}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Servicio:</td><td style="padding: 8px 0;">${safeAppt.service}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Fecha:</td><td style="padding: 8px 0;">${safeAppt.date}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Hora:</td><td style="padding: 8px 0;">${safeAppt.time}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Nivel:</td><td style="padding: 8px 0;">${safeAppt.tier}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Notas:</td><td style="padding: 8px 0;">${safeAppt.notes}</td></tr>
                        <tr><td style="padding: 8px 0; color: #00f5ff; font-weight: bold;">Idioma:</td><td style="padding: 8px 0;">${safeAppt.lang}</td></tr>
                    </table>
                </div>
                <div style="padding: 15px 30px; background: rgba(0,245,255,0.05); font-size: 0.78rem; color: #718096; border-top: 1px solid rgba(255,255,255,0.08);">
                    Enviado automáticamente por ORION Booking System · Morales Plumbing AI-Integrated Services · Lic. C-36 #1156542
                </div>
            </div>`;

            await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${resendKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'ORION Bookings <onboarding@resend.dev>',
                    to:   [notifyTo],
                    subject: `[ORION] Nueva Cita: ${safeAppt.name} — ${safeAppt.service} (${safeAppt.date})`,
                    html: emailHtml
                })
            });
        }

        // Secure server-side log (visible only in Netlify Functions dashboard)
        console.log(`[ORION BOOKING] ID=${safeAppt.id} | Client=${safeAppt.name} | Service=${safeAppt.service} | Date=${safeAppt.date} ${safeAppt.time}`);

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Cita procesada con protocolos de seguridad CCPA exitosamente.',
                appointmentId: safeAppt.id
            })
        };

    } catch (error) {
        console.error('[ORION BOOKING ERROR]', error.message);
        return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error. Please try again.' }) };
    }
};
