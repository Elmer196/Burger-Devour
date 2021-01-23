var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost", 
        port: 3306,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USERNAME,

    })
};

connection.connect(function(err) {
    if(err){
        throw err;
    }
    console.log("Connected!");
});

module.exports = connection;