const { User } = require("../models/users");
const { Product } = require("../models/products");

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
            const product = new Product(req.body);
            await product.save();
            res.status(201).json(product);
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
    }
}

module.exports = controllers;