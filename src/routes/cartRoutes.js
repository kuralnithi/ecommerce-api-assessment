const express = require('express');
const router = express.Router();
const { getCartItems, addItemToCart, updateCartItem, removeCartItem } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:userId', authMiddleware, getCartItems);
router.post('/', authMiddleware, addItemToCart);
router.put('/:id', authMiddleware, updateCartItem);
router.delete('/:id', authMiddleware, removeCartItem);

module.exports = router;
