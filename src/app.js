const path = require('node:path');
const express = require('express');
const saludoRoutes = require('./routes/saludo.routes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', saludoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'No encontrado' });
});

module.exports = app;
