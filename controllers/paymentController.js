import Driver from '../models/Driver.js';
import Route from '../models/Route.js';
import Order from '../models/Order.js';

const PAYMENT_PER_ORDER = 100; // Fixed rate per order
const PAYMENT_PER_HOUR_ONLINE = 50; // Fixed rate per hour online
const PAYMENT_PER_KM_TRAVELED = 20; // Fixed rate per kilometer traveled

export const calculateDriverPayment = async (req, res) => {
  const { id } = req.params;

  try {
    // Driver ka detail fetch karna
    const driver = await Driver.findOne({ driverId: id });

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    // Completed orders ka count
    const completedOrders = await Order.countDocuments({
      driverId: driver.driverId,
      orderStatus: 'delivered',
    });

    // Completed routes ka distance calculate karna
    const routes = await Route.find({ driverId: driver.driverId, status: 'completed' });
    const totalDistance = routes.reduce((total, route) => total + route.distanceTraveled, 0);

    // Driver ka total online time fetch karna
    const totalOnlineTime = driver.onlineTime || 0;

    // Total payment ka calculation
    const orderPayment = completedOrders * PAYMENT_PER_ORDER;
    const onlineTimePayment = totalOnlineTime * PAYMENT_PER_HOUR_ONLINE;
    const distancePayment = totalDistance * PAYMENT_PER_KM_TRAVELED;

    const totalPayment = orderPayment + onlineTimePayment + distancePayment;

    // Response bhejna
    res.status(200).json({
      
      driverId: driver.driverId,
      completedOrders,
      totalDistance,
      totalOnlineTime,
      totalPayment,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating payment', error: error.message });
  }
};
