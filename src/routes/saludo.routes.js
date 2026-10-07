const { Router } = require('express');
const { obtenerSaludo, obtenerSaludoDos } = require('../controllers/saludo.controller');

const router = Router();

router.get('/saludo', obtenerSaludo);
router.get('/saludo-dos', obtenerSaludoDos);

module.exports = router;
