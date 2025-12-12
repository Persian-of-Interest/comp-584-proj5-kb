const fs = require('fs');
const path = require('path');

// Export a single function following the contract
module.exports = function (dir, ext, callback) {
  
  // Read the directory asynchronously
  fs.readdir(dir, (err, files) => {
    // If there's an error, pass it to the callback and return early
    if (err) {
      return callback(err);
    }

    // Filter files by matching extension
    const filtered = files.filter(file => {
      return path.extname(file) === '.' + ext;
    });

    callback(null, filtered);
  });
};
