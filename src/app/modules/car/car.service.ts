import { carmodel } from '../car.model';
import { Car } from './car.interface';

const createCarIntoDB = async (car: Car) => {
  const result = await carmodel.create(car);
  return result;
};

const getAllCarsFromDB = async () => {
  const result = await carmodel.find();
  return result;
};
// getallsearchfromDB
const getAllCarsSearchqueryFromDB = async (query: object) => {
  const result = await carmodel.find(query);
  return result;
};
export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getAllCarsSearchqueryFromDB,
};
