const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), async (req, res) => {
    try {
        const { customerName, deliveryAddress, totalAmount } = req.body;
        const order = new Order({
            orderId: `ORD-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
            customerName,
            deliveryAddress,
            totalAmount,
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add other CRUD operations...

module.exports = router;
