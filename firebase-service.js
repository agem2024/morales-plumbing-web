// ═══════════════════════════════════════════════════════════════
// FIREBASE SERVICE — Morales Plumbing ORION Portal
// Handles: Authentication, User Profiles, Appointments, PQRs
// ═══════════════════════════════════════════════════════════════

// Firebase SDK is loaded via CDN in index.html
// This module wraps all Firebase operations with localStorage fallback

const ADMIN_EMAIL_NOTIFY = 'moralesplumbing026@gmail.com';

let _db = null;
let _auth = null;
let _currentUser = null;
let _firebaseReady = false;

// ─── INITIALIZE ────────────────────────────────────────────────
async function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.warn('Firebase SDK not loaded — using localStorage fallback');
        return false;
    }

    const config = window.MORALES_FIREBASE_CONFIG;
    if (!config || config.apiKey === 'TU_API_KEY') {
        console.warn('Firebase not configured — using localStorage fallback');
        return false;
    }

    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        _db   = firebase.firestore();
        _auth = firebase.auth();

        // Sign in anonymously (or restore session)
        await signInUser();
        _firebaseReady = true;
        console.log('Firebase ready. User:', _currentUser?.uid);
        return true;
    } catch (e) {
        console.error('Firebase init failed:', e.message);
        return false;
    }
}

// ─── AUTHENTICATION ────────────────────────────────────────────
async function signInUser() {
    return new Promise((resolve) => {
        _auth.onAuthStateChanged(async (user) => {
            if (user) {
                _currentUser = user;
                resolve(user);
            } else {
                // Sign in anonymously — no email/password required
                const result = await _auth.signInAnonymously();
                _currentUser = result.user;
                resolve(result.user);
            }
        });
    });
}

function getCurrentUserId() {
    return _currentUser?.uid || localStorage.getItem('morales_anon_uid') || generateAnonId();
}

function generateAnonId() {
    const id = 'anon_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('morales_anon_uid', id);
    return id;
}

// ─── USER PROFILE ──────────────────────────────────────────────
async function saveUserProfile(profileData) {
    const uid = getCurrentUserId();
    const profile = {
        ...profileData,
        uid,
        updatedAt: new Date().toISOString()
    };

    // Always save locally
    localStorage.setItem('morales_user_profile', JSON.stringify(profile));

    // Save to Firestore if available
    if (_firebaseReady && _db) {
        try {
            await _db.collection('user_profiles').doc(uid).set(profile, { merge: true });
            console.log('Profile saved to Firestore');
        } catch (e) {
            console.warn('Firestore profile save failed:', e.message);
        }
    }
    return profile;
}

async function loadUserProfile() {
    const uid = getCurrentUserId();

    // Try Firestore first
    if (_firebaseReady && _db) {
        try {
            const doc = await _db.collection('user_profiles').doc(uid).get();
            if (doc.exists) {
                const data = doc.data();
                localStorage.setItem('morales_user_profile', JSON.stringify(data));
                return data;
            }
        } catch (e) {
            console.warn('Firestore profile load failed:', e.message);
        }
    }

    // Fallback to localStorage
    return JSON.parse(localStorage.getItem('morales_user_profile') || '{}');
}

// ─── APPOINTMENTS ──────────────────────────────────────────────
async function saveAppointment(appointmentData) {
    const uid = getCurrentUserId();
    const appt = {
        ...appointmentData,
        userId: uid,
        status: 'pending',
        createdAt: new Date().toISOString(),
        id: appointmentData.id || Date.now().toString()
    };

    // Save locally
    const local = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
    local.push(appt);
    localStorage.setItem('morales_appointments', JSON.stringify(local));

    // Save to Firestore
    if (_firebaseReady && _db) {
        try {
            await _db.collection('appointments').doc(appt.id.toString()).set(appt);
            // Also notify admin collection
            await _db.collection('admin_notifications').add({
                type: 'new_appointment',
                appointmentId: appt.id,
                clientName: appt.name,
                clientPhone: appt.phone,
                service: appt.service,
                date: appt.date,
                time: appt.time,
                address: appt.address,
                notes: appt.notes || '',
                createdAt: appt.createdAt,
                status: 'unread'
            });
            console.log('Appointment saved to Firestore:', appt.id);
        } catch (e) {
            console.warn('Firestore appointment save failed:', e.message);
        }
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
        } catch (e) {
            console.warn('Firestore appointments load failed:', e.message);
        }
    }

    return JSON.parse(localStorage.getItem('morales_appointments') || '[]');
}

// ─── PQR (Petitions, Complaints, Claims) ──────────────────────
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
                pqrId: pqr.id,
                pqrType: type,
                description,
                createdAt: pqr.createdAt,
                status: 'unread'
            });
        } catch (e) {
            console.warn('Firestore PQR save failed:', e.message);
        }
    }
    return pqr;
}

// ─── JOE CHAT HISTORY ─────────────────────────────────────────
async function saveJoeSession(history) {
    const uid = getCurrentUserId();
    const session = {
        userId: uid,
        history: history.slice(-20), // last 20 messages
        savedAt: new Date().toISOString()
    };

    localStorage.setItem('morales_joe_session', JSON.stringify(session));

    if (_firebaseReady && _db) {
        try {
            await _db.collection('joe_sessions').doc(uid).set(session, { merge: true });
        } catch (e) {
            console.warn('Joe session save failed:', e.message);
        }
    }
}

// ─── REAL-TIME LISTENER (Admin notifications) ──────────────────
function listenForAdminNotifications(callback) {
    if (!_firebaseReady || !_db) return;
    return _db.collection('admin_notifications')
        .where('status', '==', 'unread')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    callback(change.doc.data());
                }
            });
        });
}

// ─── EXPORT (global scope for use in app.js) ──────────────────
window.MoralesFirebase = {
    init:                    initFirebase,
    saveProfile:             saveUserProfile,
    loadProfile:             loadUserProfile,
    saveAppointment:         saveAppointment,
    getAppointments:         getUserAppointments,
    savePQR:                 savePQR,
    saveJoeSession:          saveJoeSession,
    listenNotifications:     listenForAdminNotifications,
    getCurrentUserId,
    isReady: () => _firebaseReady
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await initFirebase();
    // Load and auto-fill user profile
    const profile = await loadUserProfile();
    if (profile && typeof autofillFromProfile === 'function') {
        autofillFromProfile(profile);
    }
});
