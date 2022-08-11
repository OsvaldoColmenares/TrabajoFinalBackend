const { Product } = require("../models/products");

const validarId = async (req, res, next) => {
    try {
       const product = await Product.findById(req.params.id);
       if (product !== null) {
          next();
       } else {
          res.json({ msg: "El id es invalido" });
       }
    } catch (error) {
       res.json({ msg: "El formato de id ingresado es inválido. Por favor, ingrese un id con el formato correcto, por ejemplo: 62eda2175d609128146a3194", error });
    }
};

module.exports = {validarId}