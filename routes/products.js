var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller');
const {validarId} = require('../middleware/validarId');
const {check, validationResult, body} = require("express-validator");

/* GET users listing. */
router.post('/registrarProducto',[check("descripcion").not().isEmpty().withMessage("Tiene que ingresar una descripción del producto.")], controllers.registrarProducto);
router.put('/actualizarProducto/:id',validarId,[check("descripcion").not().isEmpty().withMessage("Tiene que ingresar una descripción del producto.")], controllers.actualizarProducto);
router.delete('/eliminarProducto/:id',validarId, controllers.eliminarProducto);
router.get('/verProducto', controllers.verProducto);

module.exports = router;
