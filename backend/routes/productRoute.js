const express = require('express');
const router = express.Router();

const {getProducts,
     getProduct,
     createProduct, 
     deleteProduct, 
     updateProduct} 
    = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.delete('/:id',deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;