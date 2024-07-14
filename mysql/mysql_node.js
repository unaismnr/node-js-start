var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'application',
});

con.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
    let create_table_query = 'create table students(id int primary key auto_increment, first_name varchar(50), last_name varchar(50));';
    con.query(create_table_query, (err, data) => {
        if (err) {
            throw err;
        }
        console.log('table created');
    });

});