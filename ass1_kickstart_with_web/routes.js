
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
                const messages = data ? data.split('\n').reverse() : [];
                
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                res.write('<body>');
              
                res.write('<ul>');
                messages.forEach((message) => {
                    if (message.trim() !== '') {
                        res.write(`<li>${message}</li>`);
                    }
                });
                res.write('</ul>');
                res.write('<form action="/message" method="POST"><input type="text" name="message">');
                res.write('<button type="submit">submit</button></form>');
                res.write('</body></html>');
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
            
            fs.writeFile('message.txt', message + '\n', (err) => {
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


    // module.exports = {
    //     handler: requestHandler,
    //     SomeText: 'Some hard coded text'
    // };

//  module.exports=requestHandler;
   
//    module.exports.handler=requestHandler;
//    module.exports.SomeText='Some text';
   
  exports.handler=requestHandler;
  exports.SomeText="Some hard coded text";
.
