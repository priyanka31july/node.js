
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact-us.html'));
});

router.post('/contact-us', (req, res, next) => {
  const { name, email } = req.body; // Assuming you're using body-parser or similar middleware to parse form data
  
  // Here, you can perform any necessary validation or processing of the form data
  // For simplicity, let's assume the data is valid

  // Redirect to the success page after successful form submission
  res.redirect('/success');
});

router.get('/success', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
}) ;

module.exports = router;
