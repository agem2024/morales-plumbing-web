// ═══════════════════════════════════════════════════════════════════════
// FIREBASE SERVICE v2.0 — Morales Plumbing ORION Portal
// Handles: Authentication, Profiles, Appointments, PQRs, Confirmation Codes
// Architecture: GitHub Pages (no server) + Firebase only
// CCPA Compliant · California Privacy Law
// ═══════════════════════════════════════════════════════════════════════

let _db   = null;
let _auth = null;
let _currentUser = null;
let _firebaseReady = false;

// ─── INITIALIZE ─────────────────────────────────────────────────────────────
async function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.warn('[Firebase] SDK not loaded — localStorage fallback active');
        return false;
    }
    const config = window.MORALES_FIREBASE_CONFIG;
    if (!config || !config.apiKey || config.apiKey === 'TU_API_KEY') {
        console.warn('[Firebase] Not configured');
        return false;
    }
    try {
        if (!firebase.apps.length) firebase.initializeApp(config);
        _db   = firebase.firestore();
        _auth = firebase.auth();
        await signInUser();
        _firebaseReady = true;
        console.log('[Firebase] Ready. UID:', _currentUser?.uid);
        return true;
    } catch (e) {
        console.error('[Firebase] Init failed:', e.message);
        return false;
    }
}

// ─── AUTH ────────────────────────────────────────────────────────────────────
async function signInUser() {
    return new Promise((resolve) => {
        _auth.onAuthStateChanged(async (user) => {
            if (user) {
                _currentUser = user;
                resolve(user);
            } else {
                try { let result = await _auth.signInAnonymously(); _currentUser = result.user; resolve(result.user); } catch (e) { console.warn('[Firebase] signInAnonymously failed:', e.message); resolve(null); }
            }
        });
    });
}

function getCurrentUserId() {
    return _currentUser?.uid || localStorage.getItem('morales_anon_uid') || generateAnonId();
}

function generateAnonId() {
    const id = 'anon_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
    localStorage.setItem('morales_anon_uid', id);
    return id;
}

// ─── USER PROFILE ────────────────────────────────────────────────────────────
async function saveUserProfile(profileData) {
    const uid = getCurrentUserId();
    const profile = { ...profileData, uid, updatedAt: new Date().toISOString() };
    localStorage.setItem('morales_user_profile', JSON.stringify(profile));
    if (_firebaseReady && _db) {
        try {
            await _db.collection('user_profiles').doc(uid).set(profile, { merge: true });
        } catch (e) { console.warn('[Firebase] Profile save failed:', e.message); }
    }
    return profile;
}

async function loadUserProfile() {
    const uid = getCurrentUserId();
    if (_firebaseReady && _db) {
        try {
            const doc = await _db.collection('user_profiles').doc(uid).get();
            if (doc.exists) {
                const data = doc.data();
                localStorage.setItem('morales_user_profile', JSON.stringify(data));
                return data;
            }
        } catch (e) { console.warn('[Firebase] Profile load failed:', e.message); }
    }
    return JSON.parse(localStorage.getItem('morales_user_profile') || '{}');
}

// ─── CONFIRMATION CODE SYSTEM ────────────────────────────────────────────────
// Generates a 6-digit code, stores in Firestore, opens WhatsApp with the code
// The client must send this code back to Joe to confirm the appointment

function generateConfirmationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function createAndSendConfirmationCode(appointmentId, clientData) {
    const code  = generateConfirmationCode();
    const uid   = getCurrentUserId();
    const lang  = localStorage.getItem('morales_lang') || 'es';
    const expiry = new Date(Date.now() + 30 * 60 * 1000).toISOString(); // 30 min

    const codeDoc = {
        code,
        appointmentId,
        userId: uid,
        clientName: clientData.name || '',
        clientPhone: clientData.phone || '',
        clientEmail: clientData.email || '',
        status: 'pending',       // pending | used | expired
        createdAt: new Date().toISOString(),
        expiresAt: expiry
    };

    // Save to Firestore (stored in confirmation_codes collection)
    if (_firebaseReady && _db) {
        try {
            await _db.collection('confirmation_codes').doc(appointmentId).set(codeDoc);
            console.log('[Booking] Confirmation code saved:', appointmentId);
        } catch (e) {
            console.warn('[Firebase] Code save failed:', e.message);
        }
    }

    // Also save locally for verification
    localStorage.setItem('morales_pending_code_' + appointmentId, JSON.stringify(codeDoc));

    // === SEND CODE TO CLIENT ===
    // Option 1: WhatsApp to CLIENT (opens wa.me with their number)
    const phoneDigits = (clientData.phone || '').replace(/\D/g, '');
    const waMsg_client = lang === 'es'
        ? `Hola ${clientData.name}!%0A%0ATu c%C3%B3digo de confirmaci%C3%B3n para tu cita con Morales Plumbing es:%0A%0A*${code}*%0A%0AProporciona este c%C3%B3digo a Joe AI en la p%C3%A1gina para confirmar tu cita.%0AV%C3%A1lido por 30 minutos.%0A%0AMorales Plumbing · (669) 213-4422`
        : `Hello ${clientData.name}!%0A%0AYour Morales Plumbing appointment confirmation code is:%0A%0A*${code}*%0A%0AProvide this code to Joe AI on the website to confirm your appointment.%0AValid for 30 minutes.%0A%0AMorales Plumbing · (669) 213-4422`;

    // Option 2: WhatsApp to ADMIN (Alex) with full details + code
    const waMsg_admin = `NUEVA CITA PENDIENTE%0A%0AORION Booking System%0A%0ACliente: ${clientData.name}%0ATel: ${clientData.phone}%0ADirección: ${clientData.address || 'N/A'}%0AServicio: ${clientData.service}%0AFecha: ${clientData.date}%0AHora: ${clientData.time}%0ANotas: ${clientData.notes || 'Ninguna'}%0A%0ACódigo enviado al cliente: *${code}*%0AID Cita: ${appointmentId}%0A%0AEsperar confirmación del cliente.`;

    return {
        code,
        appointmentId,
        waClientUrl:  phoneDigits.length >= 10 ? `https://wa.me/${phoneDigits}?text=${waMsg_client}` : null,
        waAdminUrl:   `https://wa.me/16692134422?text=${waMsg_admin}`,
        emailFallbackUrl: `mailto:moralesplumbing026@gmail.com?subject=Nueva Cita ${appointmentId}&body=Cliente: ${clientData.name}%0ATel: ${clientData.phone}%0AServicio: ${clientData.service}%0AFecha: ${clientData.date}%0AHora: ${clientData.time}%0ACódigo: ${code}`
    };
}

// Verify code entered by client against stored code
async function verifyConfirmationCode(appointmentId, enteredCode) {
    const uid = getCurrentUserId();
    let codeDoc = null;

    // Try Firestore first
    if (_firebaseReady && _db) {
        try {
            const snap = await _db.collection('confirmation_codes').doc(appointmentId).get();
            if (snap.exists) codeDoc = snap.data();
        } catch (e) { /* fallback */ }
    }

    // Fallback: localStorage
    if (!codeDoc) {
        const stored = localStorage.getItem('morales_pending_code_' + appointmentId);
        if (stored) codeDoc = JSON.parse(stored);
    }

    if (!codeDoc) return { valid: false, reason: 'code_not_found' };

    // Check expiry
    if (new Date() > new Date(codeDoc.expiresAt)) {
        return { valid: false, reason: 'expired' };
    }

    // Check status
    if (codeDoc.status === 'used') {
        return { valid: false, reason: 'already_used' };
    }

    // Verify code match (case insensitive, trim whitespace)
    if (codeDoc.code.trim() !== enteredCode.trim()) {
        return { valid: false, reason: 'wrong_code' };
    }

    // ✅ Code is valid — mark as used and confirm appointment
    if (_firebaseReady && _db) {
        try {
            await _db.collection('confirmation_codes').doc(appointmentId).update({
                status: 'used',
                confirmedAt: new Date().toISOString()
            });
            await _db.collection('appointments').doc(appointmentId).update({
                status: 'confirmed',
                confirmedAt: new Date().toISOString()
            });
        } catch (e) { console.warn('[Firebase] Confirm update failed:', e.message); }
    }

    // Update localStorage
    const localCode = JSON.parse(localStorage.getItem('morales_pending_code_' + appointmentId) || '{}');
    localCode.status = 'used';
    localStorage.setItem('morales_pending_code_' + appointmentId, JSON.stringify(localCode));

    // Update appointment in localStorage
    const appts = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
    const idx = appts.findIndex(a => a.id === appointmentId);
    if (idx !== -1) {
        appts[idx].status = 'confirmed';
        localStorage.setItem('morales_appointments', JSON.stringify(appts));
    }

    return { valid: true };
}

// ─── APPOINTMENTS ─────────────────────────────────────────────────────────────
async function saveAppointment(appointmentData) {
    const uid = getCurrentUserId();
    const appt = {
        ...appointmentData,
        userId: uid,
        status: 'pending_confirmation',  // starts pending until code verified
        createdAt: new Date().toISOString(),
        id: appointmentData.id || Date.now().toString()
    };

    // Save locally always
    const local = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
    local.push(appt);
    localStorage.setItem('morales_appointments', JSON.stringify(local));

    // Save to Firestore
    if (_firebaseReady && _db) {
        try {
            await _db.collection('appointments').doc(appt.id.toString()).set(appt);
            // Admin notification
            await _db.collection('admin_notifications').add({
                type: 'new_appointment',
                appointmentId: appt.id,
                clientName:  appt.name    || '',
                clientPhone: appt.phone   || '',
                clientEmail: appt.email   || '',
                service:     appt.service || '',
                date:        appt.date    || '',
                time:        appt.time    || '',
                address:     appt.address || '',
                notes:       appt.notes   || '',
                status:      'unread',
                createdAt:   appt.createdAt
            });
        } catch (e) { console.warn('[Firebase] Appointment save failed:', e.message); }
    }
    return appt;
}

async function getUserAppointments() {
    const uid = getCurrentUserId();
    if (_firebaseReady && _db) {
        try {
            const snap = await _db.collection('appointments')
                .where('userId', '==', uid)
                .orderBy('createdAt', 'desc')
                .limit(20)
                .get();
            return snap.docs.map(d => d.data());
        } catch (e) { console.warn('[Firebase] Appointments load failed:', e.message); }
    }
    return JSON.parse(localStorage.getItem('morales_appointments') || '[]');
}

// ─── PQR ─────────────────────────────────────────────────────────────────────
async function savePQR(type, description) {
    const uid = getCurrentUserId();
    const pqr = {
        id: Date.now().toString(),
        userId: uid,
        type,
        description,
        status: 'open',
        createdAt: new Date().toISOString()
    };
    const local = JSON.parse(localStorage.getItem('morales_pqrs') || '[]');
    local.push(pqr);
    localStorage.setItem('morales_pqrs', JSON.stringify(local));
    if (_firebaseReady && _db) {
        try {
            await _db.collection('pqrs').doc(pqr.id).set(pqr);
            await _db.collection('admin_notifications').add({
                type: 'new_pqr',
                pqrId:       pqr.id,
                pqrType:     type,
                description,
                userId:      uid,
                status:      'unread',
                createdAt:   pqr.createdAt
            });
        } catch (e) { console.warn('[Firebase] PQR save failed:', e.message); }
    }
    return pqr;
}

// ─── CONTACT MESSAGES ─────────────────────────────────────────────────────────
async function saveContactMessage(messageData) {
    const uid = getCurrentUserId();
    const msg = {
        ...messageData,
        userId: uid,
        status: 'open',
        createdAt: new Date().toISOString(),
        id: messageData.id || Date.now().toString()
    };
    const local = JSON.parse(localStorage.getItem('morales_contact_msgs') || '[]');
    local.push(msg);
    localStorage.setItem('morales_contact_msgs', JSON.stringify(local));
    if (_firebaseReady && _db) {
        try {
            await _db.collection('contact_messages').doc(msg.id).set(msg);
            await _db.collection('admin_notifications').add({
                type:        'new_contact_message',
                messageId:   msg.id,
                clientName:  msg.name   || '',
                clientPhone: msg.phone  || '',
                clientEmail: msg.email  || '',
                message:     msg.notes  || msg.message || '',
                userId:      uid,
                status:      'unread',
                createdAt:   msg.createdAt
            });
        } catch (e) { console.warn('[Firebase] Contact msg save failed:', e.message); }
    }
    return msg;
}

// ─── JOE CHAT HISTORY ─────────────────────────────────────────────────────────
async function saveJoeSession(history) {
    const uid = getCurrentUserId();
    const session = {
        userId: uid,
        history: history.slice(-20),
        savedAt: new Date().toISOString()
    };
    localStorage.setItem('morales_joe_session', JSON.stringify(session));
    if (_firebaseReady && _db) {
        try {
            await _db.collection('joe_sessions').doc(uid).set(session, { merge: true });
        } catch (e) { console.warn('[Firebase] Joe session save failed:', e.message); }
    }
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
window.MoralesFirebase = {
    init:                      initFirebase,
    saveProfile:               saveUserProfile,
    loadProfile:               loadUserProfile,
    saveAppointment:           saveAppointment,
    getAppointments:           getUserAppointments,
    savePQR:                   savePQR,
    saveContactMessage:        saveContactMessage,
    saveJoeSession:            saveJoeSession,
    createConfirmationCode:    createAndSendConfirmationCode,
    verifyConfirmationCode:    verifyConfirmationCode,
    getCurrentUserId,
    isReady: () => _firebaseReady
};

// Auto-init
document.addEventListener('DOMContentLoaded', async () => {
    await initFirebase();
    const profile = await loadUserProfile();
    if (profile && typeof autofillFromProfile === 'function') {
        autofillFromProfile(profile);
    }
});
