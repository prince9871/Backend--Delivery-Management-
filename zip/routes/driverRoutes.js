import express from 'express';
import { createDriver, getDrivers, updateDriver, deleteDriver } from '../controllers/driverController.js';
import { authenticate, authorize } from '../middlewares/auth.js';
import { calculateDriverPayment } from '../controllers/paymentController.js';
const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), createDriver);
router.get('/', authenticate, getDrivers);
router.put('/:id', authenticate, authorize(['Admin']), updateDriver);
router.delete('/:id', authenticate, authorize(['Admin']), deleteDriver);
router.get('/:id/payment', authenticate, authorize(['Admin']), calculateDriverPayment);

export default router;

