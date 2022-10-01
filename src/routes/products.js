const router = require('express').Router();

const { getProducts, searchProduct, addProduct } = require('../controllers/products');

router.get('/', (req, res) => listProducts(req, res))

router.get('/:name', (req,res) => searchProduct(req, res))

router.post("/add", (req,res) => addProduct(req, res))

module.exports = router;