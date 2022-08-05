var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller');

router.get('/verProductosCrypto', controllers.verProductosCrypto)

module.exports = router;