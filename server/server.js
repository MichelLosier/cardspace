const express = require('express');
const apiRouter = require('./api/router');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/', apiRouter);


let port = process.env.PORT || 8080;

app.listen(port);
console.log('Server running on port: ' + port);