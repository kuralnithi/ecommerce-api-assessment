const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Process payment'));
router.get('/:orderId', (req, res) => res.send('Get payment details by order ID'));

module.exports = router;
