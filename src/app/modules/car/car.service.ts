import { carmodel } from '../car.model';
import { Car } from './car.interface';

const createCarIntoDB = async (car: Car) => {
  const result = await carmodel.create(car);
  return result;
};

export const CarServices = {
  createCarIntoDB,
};
