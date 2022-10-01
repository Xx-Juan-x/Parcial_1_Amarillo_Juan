const products = require('../models/products');

//Endpoints

//GET: para conseguir la lista entera de productos
listProducts = (req, res) =>{
    products.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({mensaje: error}));
}

//GET: para conseguir un producto por name
searchProduct = (req, res) =>{
    const name = req.params.name
    products.findOne({name: name})
    .then(data => {
        if(!data){
            return res.status(404).json({mensaje: "El producto con ese nombre no existe"});
        }
        return res.json(data);
    })
    .catch(error => res.status(500).json({mensaje: error}));
}

//POST: para agregar un producto a la BD
addProduct = (req, res) => {
    const newProducts = new products(req.body);
    newProducts
    .save()
    .then(data => res.status(201).json({mensaje: "Producto añadido", data}))
    .catch(() => res.status(500).json({mensaje: "Error"}));
}

//DELETE: para eliminar un producto

module.exports = { listProducts, searchProduct, addProduct };