var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller');
const {validarId} = require('../middleware/validarId');
const {check, validationResult, body} = require("express-validator");
const {logger} = require('../middleware/logger');
/**
 * @swagger 
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              descripcion:
 *                  type: string
 *                  unique: true
 *                  description: Descripción del producto.
 *              precio:
 *                  type: number
 *                  description: Precio del producto.
 *          required:
 *              - descripcion
 *              - precio
 *          example:
 *              descripcion: Monitor 24' Dell x2
 *              precio: 40999.99
 */

/**
 * @swagger
 * /products/registrarProducto:
 *      post:
 *          summary: Registrar un nuevo producto.
 *          tags: [Product]
 *          requestBody:
 *              required: true
 *              content:    
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              201:
 *                  description: Nuevo producto registrado.
 *              404:
 *                  description: No se encuentra el producto.
 *              500:
 *                  description: Error de servidor .            
 * 
 */
router.post('/registrarProducto',[check("descripcion").not().isEmpty().withMessage("Tiene que ingresar una descripción del producto.")],logger, controllers.registrarProducto);
/**
 * @swagger
 * /products/actualizarProducto/{id}:
 *      put:
 *          summary: Actualizar un producto.
 *          tags: [Product]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema: 
 *                  type: string
 *                required: true
 *                description: Id del producto - Ejemplo - 62eda2175d609128146a3194                 
 *          requestBody:
 *              required: true
 *              content:    
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              200:
 *                  description: Producto actualizado.
 *              404:
 *                  description: No se encuentra el producto.
 *              500:
 *                  description: Error de servidor .            
 * 
 */
router.put('/actualizarProducto/:id',validarId,[check("descripcion").not().isEmpty().withMessage("Tiene que ingresar una descripción del producto.")],logger, controllers.actualizarProducto);
/**
 * @swagger
 * /products/eliminarProducto/{id}:
 *      delete:
 *          summary: Eliminar un producto.
 *          tags: [Product]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema: 
 *                  type: string
 *                required: true
 *                description: Id del producto - Ejemplo - 62eda2175d609128146a3194   
 *          responses:
 *              200:
 *                  description: Producto eliminado.
 *              404:
 *                  description: No se encuentra el producto.
 *              500:
 *                  description: Error de servidor .            
 * 
 */
router.delete('/eliminarProducto/:id',validarId,logger, controllers.eliminarProducto);
/**
 * @swagger
 * /products/verProductos:
 *      get:
 *          summary: Ver todos los productos.
 *          tags: [Product]        
 *          responses:
 *              200:
 *                  description: Todos los productos.
 *                  content:    
 *                   application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *              404:
 *                  description: No se encontraron productos.
 *              500:
 *                  description: Error de servidor .            
 * 
 */
router.get('/verProductos', logger, controllers.verProductos);
/**
 * @swagger
 * /products/verProducto/{id}:
 *      get:
 *          summary: Buscar un producto.
 *          tags: [Product]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema: 
 *                  type: string
 *                required: true
 *                description: Id del producto - Ejemplo - 62eda2175d609128146a3194  
 *          responses:
 *              200:
 *                  description: Producto encontrado.
 *                  content:    
 *                   application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *              404:
 *                  description: No se encuentra el producto.
 *              500:
 *                  description: Error de servidor .            
 * 
 */
router.get('/verProducto/:id',validarId, logger, controllers.verProducto);

module.exports = router;
