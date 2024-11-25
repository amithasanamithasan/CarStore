import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post('/api/cars', CarController.createCar);
router.get('/', CarController.getAllCars);
router.get('/api/cars', CarController.getallCarsSearchquery);
router.get('/api/cars/:carId', CarController.getSingleCar);
router.put('/api/cars/:carId', CarController.SingleUpdatedCar);
router.delete('/api/cars/:carId', CarController.CarDeleteData);
export const CarsRoutes = router;
