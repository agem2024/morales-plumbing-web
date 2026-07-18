const fs = require('fs');
const js = fs.readFileSync('app.js', 'utf8');
const jsdom = `
const dom = {
    document: {
        querySelectorAll: () => [],
        getElementById: () => null,
        querySelector: () => null,
        addEventListener: () => {}
    },
    window: {
        addEventListener: () => {},
        location: { href: '' },
        localStorage: { getItem: () => null, setItem: () => {} }
    },
    navigator: { userAgent: '' }
};
Object.assign(global, dom);
global.localStorage = global.window.localStorage;
try {
    ${js}
} catch(e) {
    console.error('CRASH ON LOAD:', e.message, e.stack.split('\\n')[1]);
}
`;
fs.writeFileSync('test_load_run.js', jsdom);
