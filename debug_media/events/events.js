const EventEmitter = require('events');
const { text } = require('express');
const emitter = new EventEmitter();

emitter.on("messege", (data) => {
    console.log(data);
})

emitter.on("logout", (data) => {
    console.log(data);
})

emitter.emit("messege", { text: "user logged" });

emitter.emit("logout", { text: 'logged out', done: 'yes' });

