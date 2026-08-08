const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

// Replace system prompt
content = content.replace(/Eres Joe, asistente IA de Morales Plumbing, experto en plomería/g, "Eres Joe, coordinador de Morales Plumbing. Habla de forma humana y profesional. NUNCA menciones que eres inteligencia artificial.");
content = content.replace(/Instrucciones para el Agente \(Joe\):/g, "Instrucciones para el Agente (Joe):\n1. Habla 100% como humano. No uses lenguaje robótico ni menciones ser IA.");
content = content.replace(/¡Entendido! Soy Joe, el asistente IA de Morales Plumbing/g, "¡Entendido! Soy Joe, de Morales Plumbing");

// Replace Spanish
content = content.replace(/JOE: ASISTENTE DE Plomería Técnica AI/g, "JOE: COORDINADOR TÉCNICO");
content = content.replace(/Asistente Virtual Joe AI/g, "Coordinador Técnico Joe");
content = content.replace(/Joe AI Virtual Assistant/g, "Joe Technical Coordinator");
content = content.replace(/Soy Joe, el asistente IA de Morales Plumbing/g, "Soy Joe, el coordinador técnico de Morales Plumbing");
content = content.replace(/Soy Joe, el asistente de IA de Morales Plumbing/g, "Soy Joe, coordinador técnico de Morales Plumbing");
content = content.replace(/Hablar con Joe · Asistente AI/g, "Hablar con Joe · Coordinador");
content = content.replace(/Hablar con Joe · AI Assistant/g, "Hablar con Joe · Coordinador");
content = content.replace(/JOE · EXPERTO IA EN PLOMERÍA/g, "JOE · COORDINADOR DE SERVICIO");

// English
content = content.replace(/JOE: AI technical plumbing ASSISTANT/g, "JOE: technical plumbing COORDINATOR");
content = content.replace(/I'm Joe, the AI assistant/g, "I'm Joe, the coordinator");
content = content.replace(/Talk to Joe · AI Assistant/g, "Talk to Joe · Coordinator");

// Chinese
content = content.replace(/JOE: AI 工程助手/g, "JOE: 工程协调员");
content = content.replace(/我是 Joe，Morales Plumbing 的 AI 助手/g, "我是 Joe，Morales Plumbing 的协调员");
content = content.replace(/与 Joe 对话 · AI 助手/g, "与 Joe 对话 · 协调员");

// Tagalog
content = content.replace(/Ako si Joe, ang AI assistant/g, "Ako si Joe, ang coordinator");
content = content.replace(/Makausap si Joe · AI Assistant/g, "Makausap si Joe · Coordinator");

// Vietnamese
content = content.replace(/JOE: Trợ lý kỹ thuật AI/g, "JOE: Điều phối viên kỹ thuật");
content = content.replace(/Tôi là Joe, trợ lý AI/g, "Tôi là Joe, điều phối viên");
content = content.replace(/Trò chuyện với Joe · Trợ lý AI/g, "Trò chuyện với Joe · Điều phối viên");

// Emojis
content = content.replace(/ 🛠️/g, "");
content = content.replace(/ 🔧/g, "");

// Write back
fs.writeFileSync('app.js', content);
console.log("app.js updated");
