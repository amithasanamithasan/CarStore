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

// getallsearchqueryfromDB

const getAllCarsSearchqueryFromDB = async (query: object) => {
  const result = await carmodel.find(query);
  return result;
};

//The details of a specific car by ID

const getSingleCarFromDB = async (id: string) => {
  const result = await carmodel.findOne({ id: id });
  return result;
};
export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getAllCarsSearchqueryFromDB,
  getSingleCarFromDB,
};
