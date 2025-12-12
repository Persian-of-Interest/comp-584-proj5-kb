const net = require('net');

function zeroFill(num) {
  return num < 10 ? '0' + num : num;
}

// Format the current date and time as "YYYY-MM-DD hh:mm"
function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = zeroFill(now.getMonth() + 1);
  const day = zeroFill(now.getDate());
  const hours = zeroFill(now.getHours());
  const minutes = zeroFill(now.getMinutes());
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Create TCP server
const server = net.createServer((socket) => {
  // Send the formatted date/time
  socket.end(getCurrentTime() + '\n');
});

// Start listening on the port provided as the first command-line argument
const port = Number(process.argv[2]);
server.listen(port);
