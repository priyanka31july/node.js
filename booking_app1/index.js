// index.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@123',
  database: 'sys',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes(db));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
