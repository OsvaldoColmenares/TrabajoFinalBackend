var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller')

/* GET users listing. */
router.post('/registrarProducto', controllers.registrarProducto);
router.put('/actualizarProducto/:id', controllers.actualizarProducto);
router.delete('/eliminarProducto/:id', controllers.eliminarProducto);
router.get('/verProducto', controllers.verProducto);

module.exports = router;
