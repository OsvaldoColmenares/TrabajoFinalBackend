const { Product } = require("../models/products");

const validarId = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(product !== null) {
        next();
    } else {
        res.json({msg: "El id es invalido"})
    }
}

module.exports = {validarId}