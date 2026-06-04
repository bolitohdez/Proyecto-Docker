const express = require('express');
const cors = require('cors');
const getConnection = require('./db');

const db = getConnection();

const app = express();
app.use(cors());
app.use(express.json());

// Obtener datos
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM tesdb', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Insertar datos
app.post('/usuarios', (req, res) => {
  const { nombre } = req.body;
  db.query('INSERT INTO usuarios (nombre) VALUES (?)', [nombre], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Usuario agregado');
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
