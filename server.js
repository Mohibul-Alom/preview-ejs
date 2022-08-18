// load the things we need
let express = require('express');
let app = express();

//add variable and pass them to ejs file
const data = {
    name: "EJS"
}

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('page', data);
});


app.listen(8080);
console.log('8080 is the magic port');