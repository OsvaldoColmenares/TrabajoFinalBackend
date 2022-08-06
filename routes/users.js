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
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre de usuario.
 *              email:
 *                  type: string
 *                  description: email del usuario.
 *          required:
 *              - name
 *              - email
 *          example:
 *              name: Osvaldo
 *              email: osvaldo@gmail.com
 */

/**
 * @swagger
 * /users/crearUsuario:
 *      post:
 *          summary: Registrar un nuevo usuario.
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:    
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              201:
 *                  description: Nuevo usuario registrado.
 *              404:
 *                  description: Error del cliente.
 *              500:
 *                  description: Error de servidor .            
 * 
 */
router.post('/crearUsuario',[check("name").not().isEmpty().withMessage("Tiene que ingresar un nombre de usuario."),check("email").not().isEmpty().withMessage("Tiene que ingresar un email.")],logger, controllers.newUser);
/**
 * @swagger
 * /users/verUser:
 *      get:
 *          summary: Ver todos los usuarios.
 *          tags: [User]          
 *          responses:
 *              200:
 *                  description: Ok.
 *              404:
 *                  description: Error del cliente.
 *              500:
 *                  description: Error de servidor.            
 * 
 */
router.get('/verUser', controllers.verUser);

module.exports = router;
