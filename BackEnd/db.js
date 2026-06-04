const mysql = require('mysql2');

let connection;

function connectWithRetry() {
  connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'mi_db'
  });

  connection.connect((err) => {
    if (err) {
      console.log('⏳ Esperando a MySQL...');
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log('✅ Conectado a MySQL');
    }
  });
}

connectWithRetry();

module.exports = () => connection;