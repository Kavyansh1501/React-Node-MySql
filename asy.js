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
app.post('/api/data', (req, res) => {
    const {name,department,salary} = req.body;
    console.log(name, department, salary);



    connection.query("INSERT INTO `emp` (name,department,salary) VALUES (?,?,?)", [name, department, salary], function (err, result) {
        if (err) throw err;

        console.log("1 record inserted");

    res.json({message:"data received succelsfully",data:req.body});
    });

});
app.post('/api/delete',(req, res)=> {
 const {name}=req.body;

    connection.query("DELETE FROM `emp` WHERE name=?", [name], function (err, result) {
        if (err) throw err;

        console.log("1 record deleted");

    res.json({message:"data deleted successfully",data:req.body});

});
});
app.post('/api/update',(req,res)=>{
    const{name,department,salary}=req.body;
    connection.query("UPDATE emp SET department=?,salary=? WHERE name=?",[department,salary,name], function(err,result){
        if (err) throw err;

        console.log("1 record updated");

        res.json({message:"data updated successfully",data:req.body});
    });
});
app.post('/api/read', (req, res) => {
    const { name } = req.body;

    connection.query( "SELECT * FROM emp WHERE name = ?", [name],(err, result) => {
            if (err) throw err;

            console.log("data fetched");

            res.json({message: "data fetched successfully",data:result });
});
});
app.listen(5000, function () {
    console.log("listening");
});