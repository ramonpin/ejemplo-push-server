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
  console.log('Se ha recibido una conexion.');
  socket.on('prueba', function() {
    console.log('Se ha recibido una solicitud de prueba.');
    io.sockets.emit('nuevo_mensaje');
  });
});

// Arrancar el servidor
server.listen(8080);
