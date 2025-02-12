const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Cart = require('./cart');
const Payment = require('./payment');

module.exports = { sequelize, User, Product, Order, Cart, Payment };