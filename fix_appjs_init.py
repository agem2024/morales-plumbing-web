import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add a check at the end of app.js to ensure translation runs even if DOMContentLoaded already fired
init_script = '''
// Ensure initialization runs even if script is loaded late
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(() => {
        const lang = localStorage.getItem('morales_lang') || 'en';
        if (typeof setLanguage === 'function') setLanguage(lang);
    }, 1);
}
'''

if 'document.readyState === "complete"' not in content:
    with open('app.js', 'a', encoding='utf-8') as f:
        f.write('\n' + init_script + '\n')
    print("Added fallback initialization to app.js")
