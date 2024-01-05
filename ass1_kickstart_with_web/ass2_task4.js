const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Login route
app.get('/login', (req, res) => {
  res.sendFile(__dirname +
 <form action="/product" method="POST">
  <input type="text" name="title" placeholder="username">
  <input type="text" password="size" placeholder="password"> 
  <button type="submit">Submit</button>
</form>);

});

// Handling username submission
app.post('/login', (req, res) => {
  const { username } = req.body;
  // Store username in local storage (e.g., using cookies or sessions)
  // Redirect to the main chat route '/'
  res.redirect('/');
});

// Main chat route
app.get('/', (req, res) => {
  // Display the chat interface/form for sending messages
  res.sendFile(__dirname + 
  <form action="/product" method="POST">
  <input type="text" name="title" placeholder="messege">
  
  <button type="submit">Submit</button>
</form>);

  
`);
});

// Handling message submission
app.post('/send-message', (req, res) => {
  const { username, message } = req.body;
  // Store the message along with the username in a file or database
  const data = { username, message };
  fs.appendFile('messages.json', JSON.stringify(data) + '\n', (err) => {
    if (err) throw err;
    console.log('Message saved!');
  });
  // Redirect to the chat page '/'
  res.redirect('/');
});

// Reading messages from file
app.get('/messages', (req, res) => {
  // Read messages from file (messages.json) and display them in the chat interface
  // Display usernames along with their respective messages
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
