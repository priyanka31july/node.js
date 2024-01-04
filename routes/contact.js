
const express = require('express');
const path = require('path');
const detailsController=require('../controllers/details')
const router = express.Router();

router.get('/contact-us', detailsController.getdetails);
router.post('/contact-us', detailsController.postdetails);
module.exports = router ;
