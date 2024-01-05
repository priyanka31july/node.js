
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = path.dirname(require.main.filename);
const app = express();

const adminRoutes = require('./routes/add-product');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', adminRoutes);
app.use('/shop', shopRoutes); 

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});




app.listen(7000);
