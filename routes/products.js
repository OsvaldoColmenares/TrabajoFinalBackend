var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller')

/* GET users listing. */
router.post('/registrarProducto', controllers.registrarProducto);
router.get('/verProducto', controllers.verProducto);

module.exports = router;
