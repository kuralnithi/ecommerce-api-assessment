const { User } = require('../models');
exports.createStaff = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied' });
    }
    const { username, password } = req.body;
    const staff = await User.create({ username, password, role: 'staff' });
    res.json(staff);
};