import { carModel } from '../car.model';
import { Car } from './car.interface';

const createCarIntoDB = async (car: Car) => {
  const result = await carModel.create(car);
  return result;
};

const getAllCarsFromDB = async () => {
  const result = await carModel.find();
  return result;
};

// getallsearchqueryfromDB

const getAllCarsSearchqueryFromDB = async (query: object) => {
  const result = await carModel.find(query);
  return result;
};

//The details of a specific car by ID

const getSingleCarFromDB = async (id: string) => {
  const result = await carModel.findOne({ id: id });
  return result;
};
// Update a Car
const getSingleCarUpdatedFromDB = async (
  carId: string,
  payload: Partial<Car>,
) => {
  const result = await carModel.findByIdAndUpdate(carId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a Car
const getSingleCarDeleteFromDB = async (id: string) => {
  // console.log('Delete car with ID:', id);
  const result = await carModel.findByIdAndDelete({ _id: id });
  // console.log('Deleted result:', result);
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getAllCarsSearchqueryFromDB,
  getSingleCarFromDB,
  getSingleCarUpdatedFromDB,
  getSingleCarDeleteFromDB,
};
