import mongoose from 'mongoose';

const DriverSchema = new mongoose.Schema({
  driverId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  vehicleType: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

export default mongoose.model('Driver', DriverSchema);
