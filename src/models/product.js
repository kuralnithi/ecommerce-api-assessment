const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define('Product', {
    id: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    stock_quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    vendor_id: { type: DataTypes.UUID, allowNull: false },
});

module.exports = Product;