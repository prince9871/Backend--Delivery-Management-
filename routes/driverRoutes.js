import express from 'express';
import { createDriver, getDrivers, updateDriver, deleteDriver } from '../controllers/driverController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), createDriver);
router.get('/', authenticate, getDrivers);
router.put('/:driverId', authenticate, authorize(['Admin']), updateDriver);
router.delete('/:driverId', authenticate, authorize(['Admin']), deleteDriver);

export default router;

