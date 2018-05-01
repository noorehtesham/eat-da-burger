var mysql = require('mysql');

var con = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Newyorkcity1!",
    database: "burgers_db"
});

con.connect(function(err){
    if(err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Connected as id" + connection.threadId);
});

module.exports = con;