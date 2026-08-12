const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

// Replace the localStorage-only save in submitBooking with Firebase-aware save
const OLD_SAVE = `    // Save appointment to localStorage
    const appointments = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
    const appt = { id: Date.now(), ...d, created: new Date().toISOString(), status: 'pending' };
    appointments.push(appt);
    localStorage.setItem('morales_appointments', JSON.stringify(appointments));`;

const NEW_SAVE = `    // Save appointment — Firebase if available, always localStorage as backup
    const appt = { id: Date.now().toString(), ...d, created: new Date().toISOString(), status: 'pending' };
    
    if (window.MoralesFirebase && typeof window.MoralesFirebase.saveAppointment === 'function') {
        // Save to Firebase (also saves to localStorage internally)
        window.MoralesFirebase.saveAppointment(appt).then(() => {
            console.log('Appointment saved to Firebase:', appt.id);
        }).catch(e => console.warn('Firebase save failed:', e.message));
    } else {
        // Pure localStorage fallback
        const appointments = JSON.parse(localStorage.getItem('morales_appointments') || '[]');
        appointments.push(appt);
        localStorage.setItem('morales_appointments', JSON.stringify(appointments));
    }
    
    // Save/update user profile from booking data
    const profileToSave = { name: d.name, phone: d.phone, address: d.address };
    if (window.MoralesFirebase && typeof window.MoralesFirebase.saveProfile === 'function') {
        window.MoralesFirebase.saveProfile(profileToSave);
    } else {
        const existing = JSON.parse(localStorage.getItem('morales_user_profile') || '{}');
        localStorage.setItem('morales_user_profile', JSON.stringify({ ...existing, ...profileToSave }));
    }`;

if (app.includes(OLD_SAVE)) {
    app = app.replace(OLD_SAVE, NEW_SAVE);
    console.log('submitBooking patched with Firebase save');
} else {
    console.log('submitBooking save block not found — checking...');
    const idx = app.indexOf('function submitBooking');
    console.log(JSON.stringify(app.substring(idx, idx+600)));
}

// Also patch autofillFromProfile to use MoralesFirebase.loadProfile
const OLD_AUTOFILL = `function autofillFromProfile() {
    const saved = JSON.parse(localStorage.getItem('morales_user_profile') || '{}');`;
const NEW_AUTOFILL = `async function autofillFromProfile(preloadedProfile) {
    let saved = preloadedProfile || JSON.parse(localStorage.getItem('morales_user_profile') || '{}');
    // If Firebase is ready, always fetch fresh
    if (!preloadedProfile && window.MoralesFirebase && window.MoralesFirebase.isReady && window.MoralesFirebase.isReady()) {
        try { saved = await window.MoralesFirebase.loadProfile() || saved; } catch(e) {}
    }`;

if (app.includes(OLD_AUTOFILL)) {
    app = app.replace(OLD_AUTOFILL, NEW_AUTOFILL);
    console.log('autofillFromProfile upgraded with Firebase load');
} else {
    console.log('autofillFromProfile not found with expected signature');
}

fs.writeFileSync('app.js', app);
console.log('app.js Firebase integration complete.');
