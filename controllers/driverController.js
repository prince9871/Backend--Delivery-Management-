import Driver from '../models/Driver.js';

import { generateUniqueId } from '../utils/generateUniqueId.js'; // Helper function

// Create a driver
export const createDriver = async (req, res) => {
  const { name, email, phone, vehicleType } = req.body;

  try {
    const driver = new Driver({
      driverId: generateUniqueId(6),
      name,
      email,
      phone,
      vehicleType,
    });

    await driver.save();
    res.status(201).json({ message: 'Driver created successfully', data: driver });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create driver', error: err.message });
  }
};

// Get all drivers
export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json({ message: 'Drivers fetched successfully', data: drivers });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch drivers', error: err.message });
  }
};

// Update a driver
export const updateDriver = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const driver = await Driver.findByIdAndUpdate(id, { status }, { new: true });
    if (!driver) return res.status(404).json({ message: 'Driver not found' });

    res.status(200).json({ message: 'Driver updated successfully', data: driver });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update driver', error: err.message });
  }
};

// Delete a driver
export const deleteDriver = async (req, res) => {
  const { id } = req.params;

  try {
    const driver = await Driver.findByIdAndDelete(id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });

    res.status(200).json({ message: 'Driver deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete driver', error: err.message });
  }
};
