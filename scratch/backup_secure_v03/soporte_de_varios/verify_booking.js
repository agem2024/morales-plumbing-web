const fs = require('fs');
const app = fs.readFileSync('app.js','utf8');
const idx = fs.readFileSync('index.html','utf8');

const checks = [
  ['handleBookingState function defined', app.includes('function handleBookingState')],
  ['sendToJoe intercepts booking', app.includes('handleBookingState(text)')],
  ['syncBookingField defined', app.includes('function syncBookingField')],
  ['autofillFromProfile defined', app.includes('function autofillFromProfile')],
  ['submitBooking sends admin email', app.includes('adminMailto')],
  ['submitBooking sends user email', app.includes('userMailto')],
  ['processBookingFill defined', app.includes('function processBookingFill')],
  ['bk-name field editable', idx.includes('oninput="syncBookingField(')],
  ['bk-date is type=date', idx.includes('type="date" id="bk-date"')],
  ['bk-time is type=time', idx.includes('type="time" id="bk-time"')],
];

let allOk = true;
checks.forEach(function(item) {
  const label = item[0], pass = item[1];
  console.log((pass ? 'PASS' : 'FAIL') + ': ' + label);
  if (!pass) allOk = false;
});
console.log(allOk ? 'ALL SYSTEMS GO' : 'Some checks failed');
