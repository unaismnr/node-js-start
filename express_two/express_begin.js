var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();

app.listen(8000);

app.use((req, res, next) => {
    console.log('middleware');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', function (req, res) {
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.send('start');
});

var profiles = {
    "1": { name: 'google', age: 30 },
    "2": { name: 'amazon', age: 30 },
    "3": { name: 'facebook', age: 30 },
}

app.get("/profile/:id", function (req, res) {
    let currentId = req.params.id;
    let currentProfile = profiles[currentId];
    res.send('profile of: ' + currentProfile.name);
})

app.get('/about', (req, res) => {
    pathabout = path.join(__dirname, 'about.html');
    fs.readFile(pathabout, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
        console.log(req.method);
    });
});