const express = require('express');
const { getAllProducts, getProductsByVendor, addProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// router.get('/', (req, res) => res.send('Get all products'));
// router.get('/:id', (req, res) => res.send('Get product by ID'));
// router.post('/', (req, res) => res.send('Create product'));
// router.put('/:id', (req, res) => res.send('Update product'));
// router.delete('/:id', (req, res) => res.send('Delete product'));





router.get('/', getAllProducts);
router.get('/vendor/:vendor_id', getProductsByVendor);
router.post('/', authMiddleware, addProduct);

module.exports = router;
