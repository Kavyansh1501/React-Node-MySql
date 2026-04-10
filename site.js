var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2743',
    database: 'hello'
});
connection.connect();
app.post('/site/data', (req, res) => {
    const {name,password} = req.body;
    console.log(name, password);



    connection.query("INSERT INTO `register` (name,password) VALUES (?,?)", [name, password], function (err, result) {
        if (err) throw err;

        console.log("1 record inserted");

    res.json({message:"data received succelsfully",data:req.body});
    });

});
app.post('/site/login', (req, res) => {
    const { name, password } = req.body;

    console.log(name, password);

    connection.query(
        "SELECT * FROM register WHERE name = ? AND password = ?",
        [name, password],
        function (err, result) {
            if (err) {
                console.error(err);
            }
            if (result.length > 0) {
                res.json({ success: true, message: "Login successful" });
            } else {
                res.json({ success: false, message: "Invalid name or password" });
            }
        }
    );
});
app.listen(5000, function () {
    console.log("listening");
});