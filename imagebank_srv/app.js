var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var router = express.Router();
var def = require("./routes/default");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/followers", testAPIRouter);
const cloudinary = require('cloudinary').v2;






app.listen(process.env.PORT || 9901, () => {
  console.log(`listening to 9901`)
  }
  )

  // catch 404 and forward to error handler

  // error handler
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
  });

app.post('/getImg', async(req, res) => {
  const {resources} = await cloudinary.search.expression('folder:samples')
  .max_results(5)
  .execute();

  const publivIds = resources.map(file => file);

  res.json(publivIds);
});

  app.get('/getImg', async (req, res, next) => {
    // res.send('respond with a resource');
    const {resources} = await cloudinary.search.expression('folder:samples')
    .max_results(5)
    .execute();

    const publivIds = resources.map(file => file.public_id);

    res.json({"res":"1"});
  });

  
  module.exports = app;