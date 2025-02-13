const { Payment } = require('../models');
exports.processPayment = async (req, res) => {
    const { order_id, amount } = req.body;
    const payment = await Payment.create({ order_id, user_id: req.user.id, amount, payment_status: 'Completed' });
    res.json(payment);
};