var express = require('express')
var app = express()
var port = 3000;


app.set ('views','views');
app.set ('view engine','pug');


app.use (express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});

  

app.listen(port, function(){
        console.log('aplikacija na portu '+port);
 });
 