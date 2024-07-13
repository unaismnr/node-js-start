const http = require('http');

http.createServer((req, res) => {
    res.write("this is node js");
    res.end();
}).listen('1001', () => console.log('server started'));