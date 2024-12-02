import express from 'express';
import { createRoute, getRoutes, updateRoute, deleteRoute } from '../controllers/routeController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), createRoute);
router.get('/', authenticate, getRoutes);
router.put('/:id', authenticate, authorize(['Admin']), updateRoute);
router.delete('/:id', authenticate, authorize(['Admin']), deleteRoute);

export default router;

