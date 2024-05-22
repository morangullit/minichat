const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        // Crear servidor HTTP
        this.server = http.createServer(this.app);

        // Configurar Socket.IO en el servidor
        this.io = socketio(this.server, {
           
        });

        // Configurar sockets
        this.configurarSocket();
    }

    middlewares() {
        // Servir archivos estáticos
        this.app.use(express.static(path.resolve(__dirname, '../public')));
        this.app.use(cors({ origin: true, credentials: true }));
    }

    configurarSocket() {
        new Sockets(this.io);
    }

    execute() {

        // Inicializar middlewares
        this.middlewares();

        // Iniciar el servidor
        this.server.listen(this.port, () => {
            console.log(`Server corriendo en el puerto: ${this.port}`);
        });
    }
}

module.exports = Server;
