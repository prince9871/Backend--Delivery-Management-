import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', data: user });
  } catch (err) {
    res.status(500).json({ message: 'Failed to register user', error: err.message });
  }
};

//get all users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: 'Users fetched successfully', data: users });
};

//delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json({ message: 'User deleted successfully' });
};

// Login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({ token, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to log in', error: err.message });
  }
};
