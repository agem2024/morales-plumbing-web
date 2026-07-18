// ═══════════════════════════════════════════════════════════════
// FIREBASE CONFIGURATION — Morales Plumbing ORION Portal
// ═══════════════════════════════════════════════════════════════
// INSTRUCCIONES: 
// 1. Ve a https://console.firebase.google.com
// 2. Crea un proyecto "morales-plumbing-orion"
// 3. Habilita: Authentication (anónimo), Firestore Database
// 4. Ve a Project Settings > General > Your apps > Web app
// 5. Copia tu firebaseConfig y reemplaza los valores abajo
// ═══════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
    apiKey:            "TU_API_KEY",
    authDomain:        "morales-plumbing-orion.firebaseapp.com",
    projectId:         "morales-plumbing-orion",
    storageBucket:     "morales-plumbing-orion.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId:             "TU_APP_ID",
    measurementId:     "TU_MEASUREMENT_ID"
};

// Firestore security rules (deploy via Firebase CLI or Console):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Appointments: users can create, admin can read all
    match /appointments/{apptId} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         request.auth.token.admin == true);
    }
    // User profiles: own data only
    match /user_profiles/{userId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == userId;
    }
    // Admin: read-only for all appointments
    match /admin_appointments/{apptId} {
      allow read: if request.auth != null && request.auth.token.admin == true;
      allow write: if false; // only server can write
    }
  }
}
*/

export { FIREBASE_CONFIG };
