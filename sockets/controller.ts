import { Socket } from 'socket.io';


export const socketController =  (socket: Socket, io: any) => {
  
}

/*
socket.emit('message', "this is a test"); //enviando solo al remitente-cliente
socket.broadcast.emit('message', "this is a test"); //Envío a todas las clientas excepto remitente
socket.broadcast.to('game').emit('message', 'nice game'); //Enviando a todos los clientes en la sala de 'juegos' (canal) excepto al remitente
socket.to('game').emit('message', 'enjoy the game'); //enviando al cliente remitente, solo si están en la sala de 'juegos' (canal)
socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //enviando a socketid individual
io.emit('message', "this is a test"); //enviando a todos los clientes, incluye remitente
io.in('game').emit('message', 'cool game'); //enviar a todos los clientes en la sala de 'juegos' (canal), incluir remitente
io.of('myNamespace').emit('message', 'gg'); //enviar a todos los clientes en el espacio de nombres 'myNamespace', incluir remitente
socket.emit(); //Enviar a todos los clientes conectados
socket.broadcast.emit(); //enviar a todos los clientes conectados excepto al que envió el mensaje
socket.on(); //Detector de eventos, se puede llamar en el cliente para ejecutar en el servidor
io.socket.socket(); //Para emitir a clientes específicos
io.socket.emit(); //enviar a todos los clientes conectados (igual que socket.emit)
io.socket.on() ; //conexión inicial de un cliente.
*/