// ================================================================
// MORALES PLUMBING — Netlify Function: create-checkout-session.js
// Secure serverless backend to create Stripe Checkout sessions.
// Required Netlify Environment Variables:
//   STRIPE_SECRET_KEY (sk_live_... or sk_test_...)
//   STRIPE_PRICE_STANDARD_ID (e.g. price_standard_monthly)
//   STRIPE_PRICE_PREMIUM_ID  (e.g. price_premium_monthly)
// ================================================================

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const stripeKey = process.env.STRIPE_SECRET_KEY;

        if (!stripeKey) {
            // Return structured fallback response for client handling
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    success: false,
                    isDemo: true,
                    message: 'Pasarela Stripe configurada en modo demostración. Contacta a Morales Plumbing al (669) 213-4422 o paga directamente vía Zelle a moralesplumbing026@gmail.com.',
                    companyInfo: {
                        name: 'MORALES PLUMBING',
                        license: 'Lic. C-36 #1156542',
                        phone: '(669) 213-4422',
                        zelle: 'moralesplumbing026@gmail.com'
                    }
                })
            };
        }

        const stripe = require('stripe')(stripeKey);
        let sessionParams = {};

        if (body.type === 'subscription') {
            const isStandard = body.tier === 'standard';
            const priceAmount = isStandard ? 1999 : 4999;
            const planName = isStandard ? 'Morales Plumbing — Membresía Standard' : 'Morales Plumbing — Membresía Premium';

            sessionParams = {
                payment_method_types: ['card'],
                mode: 'subscription',
                customer_email: body.customerEmail || undefined,
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: planName,
                                description: isStandard 
                                    ? '10% de descuento en servicios + 1 inspección preventiva anual gratuita.'
                                    : '20% de descuento en servicios + 2 inspecciones preventivas anuales (SeeSnake/Termografía).'
                            },
                            unit_amount: priceAmount,
                            recurring: { interval: 'month' }
                        },
                        quantity: 1
                    }
                ],
                success_url: body.successUrl || 'https://morales-plumbing.com/?payment_success=true',
                cancel_url: body.cancelUrl || 'https://morales-plumbing.com/?payment_cancelled=true',
                metadata: {
                    tier: body.tier,
                    customerName: body.customerName || ''
                }
            };
        } else {
            const amountInCents = Math.round((parseFloat(body.amount) || 50) * 100);
            sessionParams = {
                payment_method_types: ['card'],
                mode: 'payment',
                customer_email: body.customerEmail || undefined,
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: body.description || 'Servicio de Plomería Profesional — Morales Plumbing'
                            },
                            unit_amount: amountInCents
                        },
                        quantity: 1
                    }
                ],
                success_url: body.successUrl || 'https://morales-plumbing.com/?service_payment_success=true',
                cancel_url: body.cancelUrl || 'https://morales-plumbing.com/?payment_cancelled=true'
            };
        }

        const session = await stripe.checkout.sessions.create(sessionParams);

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                success: true,
                sessionId: session.id,
                url: session.url
            })
        };

    } catch (error) {
        console.error('[Stripe Session Creation Error]', error.message);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message })
        };
    }
};
