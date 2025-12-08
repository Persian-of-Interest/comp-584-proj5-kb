let sum = 0;

// Start at index 2 because the first two are:
// process.argv[0] = "node"
// process.argv[1] = "baby-steps.js"
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
