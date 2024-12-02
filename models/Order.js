const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderId: { type: String, unique: true },
    customerName: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    orderStatus: { type: String, enum: ['pending', 'dispatched', 'delivered', 'canceled'], default: 'pending' },
    totalAmount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
