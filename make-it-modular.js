const mymodule = require('./mymodule.js');

// Get directory and extension from command-line arguments
const dir = process.argv[2];
const ext = process.argv[3];

// Call the module function with a callback
mymodule(dir, ext, (err, list) => {
  // If an error occurred, print it
  if (err) {
    return console.error(err);
  }

  // Otherwise, print each file on its own line
  list.forEach(file => {
    console.log(file);
  });
});
