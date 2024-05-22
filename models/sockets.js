

class Sockets {

    constructor( io ){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        
    this.io.on('connection', ( socket ) => { 

        //Este codigo es para saber si esta conectador al server
        /* socket.emit('Mensaje de Bienvenido', {
            msg: 'Bienvenido al Server',
            fecha: new Date(),
        }); */

        //Escuchar el evento
        //mensaje-cliente
        //console.log (data);
        socket.on('mensaje-to-server', (data) =>{
            console.log(data);

            this.io.emit('mensaje-from-server', data);
        });

        
    });

    }
    



}


module.exports = Sockets;