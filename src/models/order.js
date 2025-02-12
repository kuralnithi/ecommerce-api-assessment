const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    id: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    user_id: { type: DataTypes.UUID, allowNull: false },
    total_price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'Pending' },
});

module.exports = Order;
