var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors');
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var jsonParser = bodyParser.json();
var urlEncondedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwordl: '',
    database: 'library',
});

con.connect((err, data) => {
    if (err) {
        throw err;
    }
    console.log('Database Connected');
});


//list of books
//create a list
//get book informations
//update a book
//delete a book

//middleware
function verifyToken(req, res, next) {
    let autHeader = req.headers.authorization;
    if (autHeader == undefined) {
        res.status(401).send({ error: "no token provided" });
    }
    let token = autHeader.split(" ")[1];
    jwt.verify(token, "secret", function (err, decoded) {
        if (err) {
            res.status(500).send({ error: "Authentication failed" });
        } else {
            res.send(decoded);
        }
    });
}

//jwt auth
app.post('/login', jsonParser, function (req, res) {
    if (req.body.username == undefined || req.body.password == undefined) {
        res.status(500).send({ error: "Authentication Failed" })
    }
    let username = req.body.username;
    let password = req.body.password;
    let qr = ` select display_name from users where username='${username}' and password=sha1('${password}') `;
    con.query(qr, (err, result) => {
        if (err || result.length == 0) {
            res.status(500).send({ error: "login failed" });
        } else {
            let resp = {
                id: result[0].id,
                display_name: result[0].display_name,
            }

            let token = jwt.sign(resp, "secret", { expiresIn: 60 });
            res.status(200).send({ auth: true, token: token });
        }
    })
});

//get list of books
app.get('/books', verifyToken, function (req, res) {
    con.query("select * from books", (err, result, fields) => {
        if (err) throw (err)
        res.send(result);
    });
});

//get single book
app.get('/books/:id', (req, res) => {
    var id = req.params.id;
    con.query('select * from books where id=' + id, (err, result, fields) => {
        if (err) throw (err);
        res.send(result);
    });
});

//insert a book
app.post('/books', jsonParser, (req, res) => {
    let book_title = req.body.book_title;
    let description = req.body.description;
    let book_author = req.body.book_author;
    let price = req.body.price;

    let qr = ` insert into books (book_title, description, author_name, price) values('${book_title}','${description}','${book_author}','${price}') `;
    con.query(qr, (err, result) => {
        if (err) {
            res.send({ error: 'Operation failed' });
        } else {
            res.send({ success: 'Operation completed' });
        }
    })
});

//update a book
app.patch('/books', jsonParser, (req, res) => {
    let book_title = req.body.book_title;
    let description = req.body.description;
    let author_name = req.body.book_author;
    let price = req.body.price;
    let id = req.body.id;

    let qr = ` update books set book_title='${book_title}',description='${description}',author_name='${author_name}',price='${price}' where id=${id} `;

    con.query(qr, (err, result) => {
        if (err) {
            res.send({ error: 'Updation failed' })
        } else {
            res.send({ success: 'Updation completed' });
        }
    })
});

//delete a book
app.delete('/books/:id', (req, res) => {
    let id = req.params.id;

    let qr = ` delete from books where id=${id} `;
    con.query(qr, (err, result) => {
        if (err) {
            res.send({ error: 'Deletion failed' });
        } else {
            res.send({ success: 'Deletion completed' })
        }
    });
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Api Server<h1>");
});


app.listen(7000, () => console.log('server started'));