var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function (req, res) {
    var homePath = path.join(__dirname, 'sample_html.html');
    var signupPath = path.join(__dirname, 'signup.html');

    var q = url.parse(req.url, true)

    if (q.pathname === '/') {
        fs.readFile(homePath, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.write('404 Not Found')
                res.end()
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            }


        })
    } else if (q.pathname === '/signup') {
        fs.readFile(signupPath, function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })


    } else if (q.pathname === '/signupaction') {
        console.log(q.query.fName)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>' + q.query.fName + '<h1>')
        res.end()
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found')
        res.end()
    }




}).listen(7000, function () {
    console.log('Server Started');
})