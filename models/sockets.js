class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // Evento de conexión
        this.io.on('connection', (socket) => {
            console.log('Nuevo cliente conectado');

            // Escuchar evento mensaje del cliente
            socket.on('mensaje-to-server', (data) => {
                console.log(data);

                // Emitir mensaje a todos los clientes
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}

module.exports = Sockets;
