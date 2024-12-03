import express from 'express';
import { createOrder, getOrders, updateOrder, deleteOrder } from '../controllers/orderController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), createOrder);
router.get('/', authenticate, getOrders);
router.put('/:id', authenticate, authorize(['Admin']), updateOrder);
router.delete('/:id', authenticate, authorize(['Admin']), deleteOrder);

export default router;
