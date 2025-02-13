const { Cart } = require('../models');

// Get cart items for a specific user
exports.getCartItems = async (req, res) => {
    try {
        if (req.user.id !== req.params.userId) {
            return res.status(403).json({ error: 'Access denied' });
        }
        const cartItems = await Cart.findAll({ where: { userId: req.params.userId } });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add an item to the cart
exports.addItemToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const cartItem = await Cart.create({ userId: req.user.id, productId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update cart item quantity
exports.updateCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (!cartItem) return res.status(404).json({ error: 'Cart item not found' });

        if (cartItem.userId !== req.user.id) {
            return res.status(403).json({ error: 'Access denied' });
        }

        cartItem.quantity = req.body.quantity;
        await cartItem.save();
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove an item from the cart
exports.removeCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (!cartItem) return res.status(404).json({ error: 'Cart item not found' });

        if (cartItem.userId !== req.user.id) {
            return res.status(403).json({ error: 'Access denied' });
        }

        await cartItem.destroy();
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
