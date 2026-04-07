var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2743',
    database: 'hello'
});
connection.connect();
app.post('/delete', function (req, res) {

    var name = req.query.name;
    var department = req.query.department;
    var salary = req.query.salary;

    connection.query("DELETE FROM `emp` WHERE name=?", [name], function (err, result) {
        if (err) throw err;

        console.log("1 record deleted");

    res.send({ name: name, department: department, salary: salary, status: "success" });

});
});
app.listen(5000, function () {
    console.log("listening");
});