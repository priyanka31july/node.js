
const Detail = require('../models/detail');

exports.getdetails=(req,res,next)=>{
    res.render('contact-us',{
        pageTitle:'contact-us',
        path:'contact/contact-us',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true
    }) ;
}

exports.postdetails=(req,res,next)=>{
    const detail = new Detail(req.body.title);
     detail.save();
    res.redirect('success')
};
exports.getsuccess = (req, res, next) => {
    res.render('success', {
        pageTitle: 'success',
        path: '/success'
    });
};


