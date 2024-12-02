import Driver from '../models/Driver.js';
import Route from '../models/Route.js';
import Order from '../models/Order.js';


const PAYMENT_PER_ORDER = 100; // Example fixed payment per completed order
const PAYMENT_PER_HOUR_ONLINE = 50; // Example fixed payment per hour online
const PAYMENT_PER_KM_TRAVELED = 20; // Example fixed payment per kilometer traveled

export const calculateDriverPayment = async (req, res) => {
  const { id } = req.params; 

  try {
    // Get driver details
    const driver = await Driver.findOne({ driverId: id });
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    // Calculate number of completed orders
    const completedOrders = await Order.countDocuments({
      driverId: driver._id,
      orderStatus: 'delivered'
    });

    // Calculate total distance traveled by the driver in completed routes
    const routes = await Route.find({ driverId: driver._id, status: 'completed' });
    const totalDistance = routes.reduce((total, route) => total + route.distanceTraveled, 0);

    // Calculate total online time (in hours)
    const totalOnlineTime = driver.onlineTime; // Assuming online time is tracked in hours

    // Calculate payment
    const orderPayment = completedOrders * PAYMENT_PER_ORDER; 
    const onlineTimePayment = totalOnlineTime * PAYMENT_PER_HOUR_ONLINE; // Assuming online time is tracked in hours
    const distancePayment = totalDistance * PAYMENT_PER_KM_TRAVELED;  

    const totalPayment = orderPayment + onlineTimePayment + distancePayment;

    // Send response
    res.status(200).json({
      driverId: driver.driverId,
      completedOrders,
      totalDistance,
      totalOnlineTime,
      totalPayment
    });

  } catch (error) {
    res.status(500).json({ message: 'Error calculating payment', error: error.message });
  }
};
