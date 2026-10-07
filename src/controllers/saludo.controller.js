function obtenerSaludo(req, res) {
  console.log(`[${new Date().toISOString()}] Botón presionado -> enviando saludo`);
  res.json({ mensaje: 'Hola Juliette', conectado: true });
}

module.exports = { obtenerSaludo };
