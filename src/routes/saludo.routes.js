const { Router } = require('express');
const { obtenerSaludo } = require('../controllers/saludo.controller');

const router = Router();

router.get('/saludo', obtenerSaludo);

module.exports = router;
