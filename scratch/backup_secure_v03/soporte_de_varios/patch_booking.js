const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

// 1. Patch processJoeActions to also call processBookingFill
const oldEnd = `    }
}
\r\n
// ═══════════════════════════════════════════════════════
// BOOKING PANEL`;
const newEnd = `    }

    // Also handle booking form fill actions
    if (typeof processBookingFill === 'function') {
        processBookingFill(responseText);
    }
}

// ═══════════════════════════════════════════════════════
// BOOKING PANEL`;
content = content.replace(oldEnd, newEnd);

// 2. Patch openBooking() to also open the booking panel
const oldOpenBooking = `    // Small delay so window animates open before sending
    setTimeout(() => {
        sendToJoe();
        input.focus();
    }, 350);`;
const newOpenBooking = `    // Open booking panel simultaneously
    openBookingPanel();

    // Small delay so window animates open before sending
    setTimeout(() => {
        sendToJoe();
        input.focus();
    }, 350);`;
content = content.replace(oldOpenBooking, newOpenBooking);

// 3. Enhance the booking system prompt context in the dynamic context
const bookingSystemAddition = `

// Booking mode context injected into Joe's system prompt
const BOOKING_SYSTEM_ADDITION = \`

=== BOOKING MODE PROTOCOL ===
When the user wants to schedule an appointment, follow this EXACT protocol:
1. Ask for their FULL NAME first.
2. Then ask for their PHONE NUMBER.
3. Then ask for their SERVICE ADDRESS.
4. Then ask what TYPE OF SERVICE they need (e.g., leak detection, water heater, drain cleaning).
5. Then ask for their PREFERRED DATE (e.g., next Tuesday, July 15).
6. Then ask for their PREFERRED TIME (morning, afternoon, or specific hour).
7. Then ask for any ADDITIONAL NOTES or urgent details.
8. After collecting EACH piece of information, IMMEDIATELY emit a JSON action tag on a new line:
[ACTION_FILL_BOOKING] {"name": "...", "phone": "...", "address": "...", "service": "...", "date": "...", "time": "...", "notes": "..."}
Include ONLY the fields you have collected so far. Leave missing fields out.
9. When ALL fields are collected, tell the user to click the green "Confirmar Cita" button in the form.
IMPORTANT: Emit [ACTION_FILL_BOOKING] after EVERY answer, not just at the end.
\`;
`;

content += bookingSystemAddition;
fs.writeFileSync('app.js', content);
console.log('Patched processJoeActions, openBooking(), and added booking system prompt.');
