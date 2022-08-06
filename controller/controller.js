const { User } = require("../models/users");
const { Product } = require("../models/products");
const { validationResult } = require("express-validator");
const axios = require('axios');

const controllers = {
    myIndex(req, res){
        res.render('index', { title: 'Express' });
    },   
    newUser: async (req, res) => {
        try{
            const error = validationResult(req);
            if(error.isEmpty()){
                const user = new User(req.body);
                await user.save();
                res.status(201).json(user);
            }
            else{
                res.status(400).json(error);
            }     
        }
        catch(err)
        {
            res.status(500).json({
                msg: "Ese email ya existe, no se puede guardar ese usuario.",
                err,
            });
        }
    },
    verUser: async (req, res) => {
        const users = await User.find();
        res.json({users})
    },
    registrarProducto: async (req, res) => {
        try{
            const error = validationResult(req);
            if(error.isEmpty()){
                const product = new Product(req.body);
                await product.save();
                res.status(201).json(product);               
            }
            else{
                res.status(400).json(error);
            }            
        }
        catch(err)
        {
            res.status(500).json({
                msg: "Ese producto ya existe, no se puede guardar.",
                err,
            });
        }
    },
    verProductos: async (req, res) => {
        const product = await Product.find();
        res.json({product})
    },
    verProducto: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.json({product});       
    },
    actualizarProducto: async (req, res) => {
        try{   
            const error = validationResult(req);
            if(error.isEmpty()){
                const { id } = req.params;
                await Product.findByIdAndUpdate(id, req.body);          
                res.status(200).json({"result": "Se actualizo el producto."});                
            }
            else{
                res.status(400).json(error);
            }            
        }
        catch(err)
        {
            res.status(500).json({
                msg: "No se puede actualizar ese producto.",
                err,
            });
        }
    },
    eliminarProducto: async (req, res) => {
        try{
            await Product.findByIdAndDelete(req.params.id);              
            res.status(201).json({"result": "Se elimino el producto."});  
        }
        catch(err)
        {
            res.status(501).json({
                msg: "No se puede eliminar ese producto.",
                err,
            });
        }
    },
    verProductosCrypto: async (req,res) =>{
        try {
            const result = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            res.json({status: result.status, response: result.data});
        } catch (error) {
            res.json({status: error.response.status, response: error.response.data})
        }
    },
    verProductoCrypto: async (req,res) =>{
        try {             
            const parametros = {
                params:{
                    vs_currency: "usd",
                    ids: req.params.id
                }
            }
            const result = await axios.get("https://api.coingecko.com/api/v3/coins/markets", parametros);
            res.json({status: result.status, response: result.data});
        } catch (error) {
            res.json({status: error.response.status, response: error.response.data})
        }
    }  
}

module.exports = controllers;