var express  = require('express');
var app = express();
var path = require('path');
var apiRouter = require('./api/router.js')


app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/', apiRouter);


var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server running on port: ' + port);