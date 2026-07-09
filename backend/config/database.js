const mysql2 = require("mysql2/promise");

const connection = async () => {
  const db = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "castle_gym_db",
  });

  console.log("Connecting to MySQL database");
  return db;
};

module.exports = connection;
