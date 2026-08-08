# Firebase Firestore Rules – Deployment & Verification Guide
**Project:** Morales Plumbing  
**Last updated:** 2026-08-06

---

## Prerequisites

> [!IMPORTANT]
> Complete all prerequisites before running any deploy commands.

- [ ] [Node.js](https://nodejs.org/) v18+ installed (`node -v` to verify)
- [ ] Firebase CLI installed globally (`npm install -g firebase-tools`)
- [ ] Logged in to Firebase (`firebase login`)
- [ ] A `firebase.json` file exists in the project root
- [ ] The `firestore.rules` file is saved at the project root

---

## Step 1 — Verify Firebase CLI is Installed

```powershell
firebase --version
```

If not installed:

```powershell
npm install -g firebase-tools
```

---

## Step 2 — Log In to Firebase

```powershell
firebase login
```

This opens a browser window. Sign in with the Google account that owns (or has Editor/Owner role on) the Firebase project.  
To verify who you are logged in as:

```powershell
firebase login:list
```

---

## Step 3 — Navigate to the Project Directory

```powershell
cd C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3
```

---

## Step 4 — Confirm `firebase.json` Points to the Correct Rules File

Open `firebase.json` and confirm it contains a `firestore` section like this:

```json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  }
}
```

If `firebase.json` doesn't exist yet, initialize the project:

```powershell
firebase init firestore
```

Select your existing Firebase project when prompted and accept `firestore.rules` as the rules file name.

---

## Step 5 — Dry-Run / Preview the Rules (Optional but Recommended)

There is no built-in `--dry-run` flag, but you can **validate syntax** using the emulator before a live deploy:

```powershell
firebase emulators:start --only firestore
```

In a second terminal, run your app against the local emulator to confirm rules behave as expected, then `Ctrl+C` to stop.

---

## Step 6 — Deploy ONLY the Firestore Rules

```powershell
firebase deploy --only firestore:rules
```

Expected output:

```
=== Deploying to 'your-project-id'...
i  deploying firestore
i  firestore: reading indexes from firestore.indexes.json...
i  cloud.firestore: checking firestore.rules for compilation errors...
✔  cloud.firestore: rules file firestore.rules compiled successfully
i  firestore: uploading rules firestore.rules...
✔  firestore: released rules firestore.rules to cloud.firestore

✔  Deploy complete!
```

> [!WARNING]
> If you see **compilation errors**, fix them in `firestore.rules` and re-run Step 6.  
> Common errors: missing semicolons, mismatched braces, invalid function references.

---

## Step 7 — Verify Rules in the Firebase Console

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Select your project → **Firestore Database** → **Rules** tab
3. Confirm the rules match what you deployed (check the timestamp in the top right)

---

## Step 8 — Test Rules with the Rules Playground

Inside the Firebase Console Rules tab, click **"Rules Playground"**:

| Test Scenario | Collection | Operation | Auth UID | Expected Result |
|---|---|---|---|---|
| Owner reads own appointment | `appointments/appt1` | `get` | same as `userId` in doc | ✅ Allow |
| Other user reads appointment | `appointments/appt1` | `get` | different UID | ❌ Deny |
| Create contact_msg with all fields | `contact_messages/msg1` | `create` | matches `userId` | ✅ Allow |
| Create contact_msg missing `phone` | `contact_messages/msg1` | `create` | matches `userId` | ❌ Deny |
| Any user reads admin_notifications | `admin_notifications/n1` | `get` | any | ❌ Deny |
| User creates admin_notif (all fields) | `admin_notifications/n1` | `create` | matches `userId` | ✅ Allow |
| User creates confirmation code (own UID as doc ID) | `confirmation_codes/{uid}` | `create` | matches doc ID | ✅ Allow |
| User updates confirmation code | `confirmation_codes/{uid}` | `update` | matches doc ID | ❌ Deny |
| User reads foreign confirmation code | `confirmation_codes/otherUID` | `get` | different UID | ❌ Deny |
| Owner reads own PQRS | `pqrs/pqr1` | `get` | matches `userId` | ✅ Allow |
| Owner updates PQRS | `pqrs/pqr1` | `update` | matches `userId` | ❌ Deny |

---

## Step 9 — Rollback if Needed

The Firebase Console keeps a **version history** of your rules. To roll back:

1. Firebase Console → Firestore → Rules
2. Click **"View history"** (clock icon, top right)
3. Select the previous version → click **"Restore"**

Or re-deploy a known-good `firestore.rules` file via CLI:

```powershell
git checkout HEAD~1 -- firestore.rules
firebase deploy --only firestore:rules
```

---

## Security Checklist Before Going Live

> [!CAUTION]
> Do NOT deploy to production without completing this checklist.

- [ ] Rules syntax validated in Firebase Console (no red errors)
- [ ] All 9 test scenarios in Step 8 pass the Rules Playground
- [ ] Admin reads of `admin_notifications` and `contact_messages` are done via **Firebase Admin SDK only** (server-side, not client)
- [ ] `confirmation_codes` cleanup is handled by a Cloud Function (scheduled or triggered)
- [ ] Firebase project has **App Check** enabled to prevent API abuse from non-app clients
- [ ] Firebase project has **Firestore usage alerts** set (Console → Usage & billing)
- [ ] CCPA privacy policy updated to reflect what PII is stored and for how long

---

## Key Security Decisions – Summary

| Collection | Client Create | Client Read | Client Update | Client Delete |
|---|---|---|---|---|
| `appointments` | ✅ Owner + fields | ✅ Owner | ✅ Owner + fields (userId immutable) | ❌ |
| `user_profiles` | ✅ Owner | ✅ Owner | ✅ Owner | ✅ Owner |
| `joe_sessions` | ✅ Owner | ✅ Owner | ✅ Owner | ✅ Owner |
| `pqrs` | ✅ Owner + userId | ✅ Owner | ❌ | ❌ |
| `admin_notifications` | ✅ Auth + fields | ❌ | ❌ | ❌ |
| `contact_messages` | ✅ Owner + fields | ✅ Owner | ❌ | ❌ |
| `confirmation_codes` | ✅ Owner (doc ID = uid) | ✅ Owner | ❌ | ❌ |
