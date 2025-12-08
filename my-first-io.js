const fs = require('fs');

// Read file and convert to string
const contents = fs.readFileSync(process.argv[2]).toString();

// Count the number of new lines
const lines = contents.split('\n').length - 1;

console.log(lines);
