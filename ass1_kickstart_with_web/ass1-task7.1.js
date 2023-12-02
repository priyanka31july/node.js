 const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/home') {
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome home</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/about') {
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title>About Us</title></head>');
    res.write('<body><h1>Welcome to About Us page</h1></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/node') {
    res.setHeader("Content-Type", 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js project</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    return res.end();
  }

  
  res.setHeader("Content-Type", 'text/html');
  res.write('<html>');
  res.write('<head><title>Page Not Found</title></head>');
  res.write('<body><h1>404 - Page Not Found</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
