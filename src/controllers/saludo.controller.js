function obtenerSaludo(req, res) {
  console.log(`[${new Date().toISOString()}] Botón presionado -> enviando saludo`);
  res.json({ mensaje: 'Hola Juliette', conectado: true });
}

function obtenerSaludoDos(req, res) {
  console.log(`[${new Date().toISOString()}] Botón 2 presionado -> enviando saludo dos`);
  res.json({ mensaje: 'Hola Eber', conectado: true });
}

module.exports = { obtenerSaludo, obtenerSaludoDos };
