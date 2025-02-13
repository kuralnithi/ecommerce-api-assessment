const { Product } = require('../models');
exports.getAllProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

exports.getProductsByVendor = async (req, res) => {
    const { vendor_id } = req.params;
    const products = await Product.findAll({ where: { vendor_id } });
    res.json(products);
};

exports.addProduct = async (req, res) => {
    if (req.user.role !== 'vendor') {
        return res.status(403).json({ error: 'Access denied' });
    }
    const { name, category, price, stock_quantity } = req.body;
    const product = await Product.create({
        name, category, price, stock_quantity, vendor_id: req.user.id
    });
    res.json(product);
};
