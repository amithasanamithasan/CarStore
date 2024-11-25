import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();
router.post('/api/orders', OrderController.placeOrder);
router.get('/api/orders/revenue', OrderController.calculateRevenue);
export const orderRoutes = router;
