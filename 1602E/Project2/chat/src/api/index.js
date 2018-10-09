// 封装websocket操作
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');


export let creaetSocket = ()=>{
    // Connection opened
    socket.addEventListener('open', function (event) {
        // socket.send('Hello Server!');
        socket.send(JSON.stringify({
            token: 12345
        }))
    });

    // Connection closed
    socket.addEventListener('close', function (event) {
        socket.send('disconnected!');
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
}