
const express = require('express');
const apiRouter = require('./api/router');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

const server = require('http').Server(app);
const io = require('socket.io')(server, {
  path: '/sockets'
});

const apiEvents = require('./services/apiEvents')
const socketRouting = require('./api/sockets')(io, apiEvents.emitter);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/', apiRouter);
app.use(function errorHandler (err, req, res, next) {
  console.log(err)
  console.log('some error happened sending 500')
  res.status(500).send(JSON.stringify({ error: err }));
});

server.listen(port);
console.log('Server running on port: ' + port);

