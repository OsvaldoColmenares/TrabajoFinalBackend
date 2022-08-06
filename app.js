const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const productsCryptoRouter = require('./routes/productsCrypto');
const {dbConnection} = require('./db/db');
//agrego swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title:"Trabajo Final Backend",
            version: "1.0.1"
        },
        servers:[
            {
                url:"http://localhost:8080"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/productsCrypto', productsCryptoRouter);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
dbConnection();

module.exports = app;
