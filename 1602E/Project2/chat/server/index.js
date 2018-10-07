var io = require('socket.io')();
io.on('connection', function(client){
    client.on('event', function(data){
        console.log('data...', data);
    });
    client.on('disconnect', function(){});
});
io.listen(8080);