const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// The issue is that the line BEFORE "swh_title" might not have a comma.
// Specifically, it's lines ending with "Est. Time:" or similar, followed by a newline and then "swh_title".
// We can use a regex to find missing commas.
// Match any line ending with a double quote (and optional whitespace) followed by a newline and then spaces and "swh_title".

appJs = appJs.replace(/"\s*\n(\s*)"swh_title"/g, '",\n$1"swh_title"');

fs.writeFileSync('app.js', appJs);
console.log('Fixed syntax error in app.js');
