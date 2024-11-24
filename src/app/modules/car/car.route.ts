import express from 'express';
import { CarController } from './car.controller';

// Router er vitte kore get post put pach delete krbo
const router = express.Router();
// router call controller function
router.post('/api/cars', CarController.createCar);
router.get('/', CarController.getAllCars);
router.get('/api/cars', CarController.getallCarsSearchquery);
export const CarsRoutes = router;
