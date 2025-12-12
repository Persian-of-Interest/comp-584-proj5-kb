const fs = require('fs');
const path = require('path');

// The directory path is the first argument
const dirPath = process.argv[2];

// The extension to filter by (like 'txt')
const ext = process.argv[3];

// Read the directory asynchronously
fs.readdir(dirPath, (err, files) => {
  // If an error occurred, print it and stop
  if (err) {
    return console.error(err);
  }

  // Loop through all files in the directory
  files.forEach(file => {
    // path.extname(file) returns file with extension
    // So compare it with '.' + ext (for example ".txt")
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  });
});
