const fs = require('fs');
let js = fs.readFileSync('firebase-service.js', 'utf8');

const oldFunc = `async function signInUser() {
    return new Promise((resolve) => {
        _auth.onAuthStateChanged(async (user) => {
            if (user) {
                _currentUser = user;
                resolve(user);
            } else {
                try { const result = await _auth.signInAnonymously();   } catch (e) { console.warn('[Firebase] signInAnonymously failed:', e.message); resolve(null); }
                _currentUser = result.user;
                resolve(result.user);
            }
        });
    });
}`;

const newFunc = `async function signInUser() {
    return new Promise((resolve) => {
        _auth.onAuthStateChanged(async (user) => {
            if (user) {
                _currentUser = user;
                resolve(user);
            } else {
                try {
                    const result = await _auth.signInAnonymously();
                    _currentUser = result.user;
                    resolve(result.user);
                } catch (e) {
                    console.warn('[Firebase] signInAnonymously failed:', e.message);
                    resolve(null);
                }
            }
        });
    });
}`;

js = js.replace(oldFunc, newFunc);
fs.writeFileSync('firebase-service.js', js, 'utf8');
console.log("Patched signInUser");
