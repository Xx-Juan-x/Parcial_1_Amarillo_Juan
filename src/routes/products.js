const router = require('express').Router();
const products = require('../schemes/products');

//Endpoints

//GET: para conseguir la lista entera de productos
router.get('/', (req, res) =>{
    products.find({isDeleted: false})
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({mensaje: error}))
})





module.exports = router;