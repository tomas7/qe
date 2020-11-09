var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary').v2;



cloudinary.config({ 
    cloud_name: 'dwefdgjdu', 
    api_key: '858193363766321', 
    api_secret: 'wQA5iKH2J5YAjtiNwB2JVAOiOJ0' 
  });


// cloudinary.v2.api.resources("dkxqapbiy",
//     function(error, result) {console.log(result, error); });

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })




// var server = app.listen(5000, function () {
//     console.log('Server is running..');
// });

module.exports = router;
