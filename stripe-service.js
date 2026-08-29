// ============================================================
// MORALES PLUMBING — Stripe Payment & Membership Service v1.0
// CCPA & PCI-DSS Compliant Payment Gateway
// ============================================================

const STRIPE_PUBLIC_KEY = window.STRIPE_PUBLISHABLE_KEY || 'pk_live_morales_plumbing_placeholder';

let _stripeInstance = null;

async function getStripe() {
    if (_stripeInstance) return _stripeInstance;
    if (typeof Stripe !== 'undefined') {
        _stripeInstance = Stripe(STRIPE_PUBLIC_KEY);
        return _stripeInstance;
    }
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';
        script.onload = () => {
            if (typeof Stripe !== 'undefined') {
                _stripeInstance = Stripe(STRIPE_PUBLIC_KEY);
                resolve(_stripeInstance);
            } else {
                console.warn('[Stripe] SDK failed to load');
                resolve(null);
            }
        };
        script.onerror = () => {
            console.warn('[Stripe] Script load error');
            resolve(null);
        };
        document.head.appendChild(script);
    });
}

async function checkoutMembership(tier) {
    const profile = JSON.parse(localStorage.getItem('morales_client_profile') || '{}');
    const email = profile.email || '';
    const name = profile.name || '';

    try {
        const btn = document.getElementById(`stripe-pay-btn-${tier}`) || document.getElementById(`upgrade-btn-${tier}`);
        if (btn) {
            btn.disabled = true;
            btn.dataset.originalText = btn.innerHTML;
            btn.innerHTML = '<span>⏳ Conectando con Stripe...</span>';
        }

        const response = await fetch('/.netlify/functions/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'subscription',
                tier: tier,
                customerEmail: email,
                customerName: name,
                successUrl: window.location.origin + '/?payment_success=true&tier=' + tier,
                cancelUrl: window.location.origin + '/?payment_cancelled=true'
            })
        });

        const data = await response.json();

        if (data.url) {
            window.location.href = data.url;
        } else if (data.sessionId) {
            const stripe = await getStripe();
            if (stripe) {
                await stripe.redirectToCheckout({ sessionId: data.sessionId });
            } else {
                throw new Error('No se pudo inicializar la pasarela de Stripe');
            }
        } else {
            alert(data.message || 'Información de pago enviada. También puedes utilizar Zelle al (669) 213-4422 para activación inmediata.');
            if (btn && btn.dataset.originalText) {
                btn.innerHTML = btn.dataset.originalText;
                btn.disabled = false;
            }
        }
    } catch (err) {
        console.error('[Stripe Checkout Error]', err);
        alert('Las opciones de pago están activas. Puedes pagar con tarjeta o utilizar Zelle a moralesplumbing026@gmail.com | (669) 213-4422.');
        const btn = document.getElementById(`stripe-pay-btn-${tier}`) || document.getElementById(`upgrade-btn-${tier}`);
        if (btn && btn.dataset.originalText) {
            btn.innerHTML = btn.dataset.originalText;
            btn.disabled = false;
        }
    }
}

async function checkoutCustomService(amountInDollars, description) {
    const profile = JSON.parse(localStorage.getItem('morales_client_profile') || '{}');
    try {
        const response = await fetch('/.netlify/functions/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'custom_payment',
                amount: amountInDollars,
                description: description || 'Servicio de Plomería Profesional Morales Plumbing',
                customerEmail: profile.email || '',
                customerName: profile.name || '',
                successUrl: window.location.origin + '/?service_payment_success=true',
                cancelUrl: window.location.origin + '/?payment_cancelled=true'
            })
        });
        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        } else {
            alert(data.message || 'Opciones de pago procesadas.');
        }
    } catch (e) {
        console.error('[Custom Payment Error]', e);
    }
}

window.MoralesStripe = {
    getStripe,
    checkoutMembership,
    checkoutCustomService
};
