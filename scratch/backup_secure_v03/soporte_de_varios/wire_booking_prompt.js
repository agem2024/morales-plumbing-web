const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

// Inject booking system context into callGemini and callOpenAI
const oldGeminiLine = "    sysPrompt += getJoeDynamicContext();\r\n    const url = `https://generativelanguage";
const newGeminiLine = "    sysPrompt += getJoeDynamicContext();\r\n    if (typeof BOOKING_SYSTEM_ADDITION !== 'undefined') sysPrompt += BOOKING_SYSTEM_ADDITION;\r\n    const url = `https://generativelanguage";
content = content.replace(oldGeminiLine, newGeminiLine);

// Same for OpenAI
const oldOpenAILine = "    sysPrompt += getJoeDynamicContext();\r\n    const resp = await fetch('https://api.openai";
if (content.includes(oldOpenAILine)) {
    const newOpenAILine = "    sysPrompt += getJoeDynamicContext();\r\n    if (typeof BOOKING_SYSTEM_ADDITION !== 'undefined') sysPrompt += BOOKING_SYSTEM_ADDITION;\r\n    const resp = await fetch('https://api.openai";
    content = content.replace(oldOpenAILine, newOpenAILine);
}

fs.writeFileSync('app.js', content);
console.log('Booking system prompt now injected into Gemini/OpenAI calls.');
