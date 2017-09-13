
const express = require('express');
const apiRouter = require('./api/router');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  path: '/api/sockets'
});
const sockets = require('./api/sockets');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/', apiRouter);
app.use(function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
});

io.on('connection', function(socket){
  
  console.log('a user connected')
});

const port = process.env.PORT || 8080;

app.listen(port);
console.log('Server running on port: ' + port);