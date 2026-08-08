const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/assets\/joe_avatar\.png/g, "assets/logo_portada.png");
content = content.replace(/assets\/icon_plumber_ai\.png/g, "assets/logo_portada.png");
content = content.replace(/JOE · EXPERTO IA EN PLOMERÍA/g, "JOE · COORDINADOR DE SERVICIO");
content = content.replace(/¡Qué tal! Soy Joe, el asistente IA de Morales Plumbing\. ¿En qué te puedo ayudar hoy\? 🔧/g, "¡Qué tal! Soy Joe, coordinador técnico de Morales Plumbing. ¿En qué te puedo ayudar hoy?");
content = content.replace(/Habla con Joe · AI Assistant/g, "Habla con Joe · Coordinador");
content = content.replace(/Asistente Virtual Joe AI/g, "Coordinador Joe");
content = content.replace(/Joe AI/g, "Joe");

fs.writeFileSync('index.html', content);
console.log("index.html updated");
