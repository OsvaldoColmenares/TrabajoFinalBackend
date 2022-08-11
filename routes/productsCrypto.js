var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller');
const {logger} = require('../middleware/logger');

/**
 * @swagger
 * /productsCrypto/verProductosCrypto:
 *      get:
 *          summary: Ver precio de todas las Cryptos en usd.
 *          tags: [ProductsCryptos]          
 *          responses:
 *              200:
 *                  description: Ok.
 *              404:
 *                  description: Error del cliente.
 *              500:
 *                  description: Error de servidor.            
 * 
 */
router.get('/verProductosCrypto',logger, controllers.verProductosCrypto)
/**
 * @swagger
 * /productsCrypto/verProductoCrypto/{id}:
 *      get:
 *          summary: Ver precio de una Crypto en usd.
 *          tags: [ProductsCryptos]    
 *          parameters:
 *              - in: path
 *                name: id
 *                schema: 
 *                  type: string
 *                required: true
 *                description: Nombre de la crypto, por ejemplo, bitcoin, ethereum, tether, etc.     
 *          responses:
 *              200:
 *                  description: Ok.
 *              404:
 *                  description: Error del cliente.
 *              500:
 *                  description: Error de servidor.            
 * 
 */
router.get('/verProductoCrypto/:id',logger, controllers.verProductoCrypto)

module.exports = router;

