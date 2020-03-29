var express = require('express');
var app = express();
const path = require('path');


//setting middleware
app.use(express.static(path.join(__dirname, 'public'))); //Serves resources from public folder


var server = app.listen(5000);
