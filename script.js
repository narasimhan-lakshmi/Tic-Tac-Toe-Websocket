//const websocket = require("websocket");

const connect = document.querySelector(".connectBtn");
connect.addEventListener('click', (src) => {
    // Create a new WebSocket object
    var socket = new WebSocket('ws://localhost:5500'); 

    // Set up the onmessage event handler
    socket.onmessage = onMessage;

    // Disable the connect button after it's pressed
    src.target.disabled = true;
});
function onMessage(msg){}
