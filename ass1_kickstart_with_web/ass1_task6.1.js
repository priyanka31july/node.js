
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const yourName = 'Your Name';
  res.end(`Hello, ${yourName}!`);
});

// Specify the port here
const PORT = node 6000;

server.listen(PORT, () => {
  console.log(`Server running at ${PORT});
});
