const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./src/config/database.js');
const authRoutes = require('./src/routes/authRoutes.js');
const productRoutes = require('./src/routes/productRoutes.js');
const orderRoutes = require('./src/routes/orderRoutes.js');
const cartRoutes = require('./src/routes/cartRoutes.js');
const paymentRoutes = require('./src/routes/paymentRoutes.js');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await sequelize.sync();
    console.log(`Server running on port ${PORT}`);
});
