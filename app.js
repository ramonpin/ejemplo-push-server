// Cargamos los modulos
var express = require('express'), http = require('http');

// La parte Express
var app = express();
var server = http.createServer(app);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.render('index.jade', {layout: false});
});

// La parte Websockets
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('Se ha conectado un cliente.');
});
io.on('disconnect', function() {
  console.log('Se ha desconectado un cliente.')
})

var n = 0;
setInterval(function() {
  n = n +1;
  io.sockets.emit('nuevo_mensaje', { num: n });
}, 2000);

// Arrancar el servidor
server.listen(8080);
