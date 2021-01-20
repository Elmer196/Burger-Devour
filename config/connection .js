var mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost", 
    database: "burgers_db",
    password: "",
    user: "root",
})

connection.connect();

connection.connect(function(err) {
    if(err){
        throw err;
    }
    console.log("Connected!");
  });

  module.exports = connection;