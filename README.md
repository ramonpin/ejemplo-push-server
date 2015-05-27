README
======
Esto es un ejemplo muy sencillo de un servidor push y un cliente HTML con websocket.io. La parte servidor está implementada con node por lo que es necesario tenerlo instalado para poder ejecutar el ejemplo.

Para ejecutar la aplicación es necesario instalar las dependencias con:

    $ npm install

Y arrancar el servidor con:

    $ node app.js

##Imagen Docker
Alternativamente es posible lanzar el servidor como un contenedor docker con:

    $ docker run -it --rm --name push-server -p 8080:8080 ramonpin/ejemplo-push-server

O como un demonio con:

    $ docker run -d --name push-server -p 8080:8080 ramonpin/ejemplo-push-server
