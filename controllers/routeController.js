import Route from '../models/Route.js';
import { generateUniqueId } from '../utils/generateUniqueId.js'; // Helper function
import { calculateRouteDistance } from '../utils/calculateRouteDistance.js'; // Distance calculation function

// Create a route
export const createRoute = async (req, res) => {
  const { orderId, driverId, steps } = req.body;

  try {
    // Calculate total distance
    const distanceTraveled = Number(calculateRouteDistance(steps));
    console.log(distanceTraveled)
    const route = new Route({
      routeId: generateUniqueId(6),
      orderId,
      driverId,
      steps,
      distanceTraveled // Automatically calculate and save the distance
    });

    await route.save();
    console.log(`after save : `,route.distanceTraveled); // Log saved value
    res.status(201).json({ message: 'Route created successfully', data: route });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create route', error: err.message });
  }
};

// Get all routes
export const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json({ message: 'Routes fetched successfully', data: routes });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch routes', error: err.message });
  }
};

// Update a route
export const updateRoute = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    

    const route = await Route.findByIdAndUpdate(id, { status }, { new: true });
    if (!route) return res.status(404).json({ message: 'Route not found' });

    res.status(200).json({ message: 'Route updated successfully', data: route });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update route', error: err.message });
  }
};

// Delete a route
export const deleteRoute = async (req, res) => {
  const { id } = req.params;

  try {
    const route = await Route.findByIdAndDelete(id);
    if (!route) return res.status(404).json({ message: 'Route not found' });

    res.status(204).json({ message: 'Route deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete route', error: err.message });
  }
};
