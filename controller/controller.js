const { User } = require("../models/users");
const { Product } = require("../models/products");
const { validationResult } = require("express-validator");

const controllers = {
    myIndex(req, res){
        res.render('index', { title: 'Express' });
    },   
    newUser: async (req, res) => {
        try{
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        }
        catch(err)
        {
            res.status(501).json({
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
                res.status(501).json(error);
            }            
        }
        catch(err)
        {
            res.status(501).json({
                msg: "Ese producto ya existe, no se puede guardar.",
                err,
            });
        }
    },
    verProducto: async (req, res) => {
        const product = await Product.find();
        res.json({product})
    },
    actualizarProducto: async (req, res) => {
        try{   
            const error = validationResult(req);
            if(error.isEmpty()){
                const { id } = req.params;
                await Product.findByIdAndUpdate(id, req.body);          
                res.status(201).json({"result": "Se actualizo el producto."});                
            }
            else{
                res.status(501).json(error);
            }            
        }
        catch(err)
        {
            res.status(501).json({
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

}

module.exports = controllers;