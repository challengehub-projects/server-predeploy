const fs = require('fs'); // for the backend file system...

fs.writeFile('bookings.json', JSON.stringify([{customer: "Mark"}]));

const data = fs.readFileSync('bookings.json', 'utf-8');

console.log(JSON.parse(data));