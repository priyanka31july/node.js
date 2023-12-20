const http = require('http');
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 500; 
                res.end();
            } else {
              
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                
                if (data) {
                    res.write(`<pre>${data}</pre>`); // Printing data as is
                }
                
           
                res.write('<form action="/message" method="POST"><input type="text" name="message">');
                res.write('<button type="send">send</button></form>');
                res.write('</html>');
                return res.end();
            }
        });
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk) ;
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            fs.appendFile('message.txt', message + '\n', (err) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500; 
                    res.end();
                } else {
                    console.log('Inside fs.writeFile');
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                }
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Hello from Node.js</h1></body>');
        res.write('</html>');
        res.end();
    }
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

