const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const rootDir = path.dirname(require.main.filename);
const app = express();

const adminRoutes = require('./routes/add-product');
const shopRoutes = require('./routes/shop');
 const contactRoutes = require('./routes/contact-us');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoutes);
app.use(shopRoutes); 
app.use(contactRoutes); 


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(2000,()=>{
    console.log("server running on 2000")
})