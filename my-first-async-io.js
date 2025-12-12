const fs = require('fs');

// 'utf8' tells Node to give us the file contents as a string
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  // Split the file contents into new lines
  // Number of new lines = number of elements - 1
  const lines = data.split('\n').length - 1;

  console.log(lines);
});
