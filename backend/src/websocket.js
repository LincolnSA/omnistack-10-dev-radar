const socketio = require('socket.io');
//função a ser chamada quando iniciar o servidor
exports.setupWebsocket = (server) => {
    const io = socketio(server);

    //fica ouvindo se ocorre uma conexão
    io.on('connection', socket => {
        console.log(socket.id);
    });
};