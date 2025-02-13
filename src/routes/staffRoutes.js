const express = require('express');
const router = express.Router();
const { createStaff } = require('../controllers/staffController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createStaff);