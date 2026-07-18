const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add the mic button right before the send button
if (!html.includes('id="joe-mic-btn"')) {
    html = html.replace(
        '<button onclick="sendToJoe()" id="joe-send-btn"', 
        '<button onclick="toggleJoeMic()" id="joe-mic-btn" class="joe-mic-btn" title="Activar micrófono">🎙️</button>\n                <button onclick="sendToJoe()" id="joe-send-btn"'
    );
    fs.writeFileSync('index.html', html);
    console.log('Added microphone button to index.html');
} else {
    console.log('Microphone button already exists');
}
