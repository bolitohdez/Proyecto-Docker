const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = connection;

function connectWithRetry() {
  connection.connect((err) => {
    if (err) {
      console.log("Error completo:", err);
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log("Conectado a MySQL");
    }
  });
}

connectWithRetry();