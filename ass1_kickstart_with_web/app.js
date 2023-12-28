 
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) { 
            console.log(err) ;
            data = 'No chat exists';
        }

        res.send(`
            <div>${data}</div>
            <form action="/" method="POST">
                <input type="text" name="message" placeholder="Enter your message">
                <input type="hidden" name="username" value="${req.query.username || ''}">
                <button type="submit">Send</button>
            </form>
        `);
    });
});

app.post('/', (req, res) => {
    const { username, message } = req.body;
    fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Enter your username">
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username } = req.body;
   
    res.send(`
        <script>
            localStorage.setItem('username', '${username}');
            window.location.href = '/';
        </script>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});






