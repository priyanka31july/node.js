
const path = require('path');
// //const express = require('express');
// // module.exports=path.dirname(process.main.filename)
//  module.exports = path.dirname(require.mainModule.filename);

module.exports = path.dirname(require.main ? require.main.filename : process.argv[1]);

