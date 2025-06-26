import mysql2 from "mysql2";

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movie_db",
});

// const connection = mysql2.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });

export default connection;