"use strict";

import socketIOClient from 'socket.io-client';

// export const socket = socketIOClient('http://localhost:5000'); socket cliente local
export const socket = socketIOClient('https://chiguir-os-game-server.onrender.com/'); //socket cliente despliegue

export const disconnectSocket = ()=>{
    console.log("Disconecting socket...");
    socket.disconnect();
};