const express = require('express');
const cors = require('cors');
const getConnection = require('./db');

const db = getConnection();

const app = express();
app.use(cors());
app.use(express.json());

// Obtener datos
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Insertar usuario
app.post('/usuarios', (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).send('El nombre es obligatorio');
  }

  db.query(
    'INSERT INTO usuarios (nombre) VALUES (?)',
    [nombre],
    (err, result) => {
      if (err) return res.status(500).send(err);

      res.json({
        message: 'Usuario agregado',
        id: result.insertId
      });
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
