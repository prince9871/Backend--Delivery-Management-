import mongoose from 'mongoose';

const RouteSchema = new mongoose.Schema({
  routeId: { type: String, unique: true, required: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  steps: [
    {
      location: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    }
  ],
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Route', RouteSchema);
