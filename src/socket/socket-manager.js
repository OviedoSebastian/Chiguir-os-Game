"use strict";

import socketIOClient from 'socket.io-client';

export const socket = socketIOClient('http://localhost:5000');

export const disconnectSocket = ()=>{
    console.log("Disconecting socket...");
    socket.disconnect();
};