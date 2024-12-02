import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // Plain password for now
  role: { type: String, enum: ['Admin', 'Driver', 'User'], default: 'User' },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
