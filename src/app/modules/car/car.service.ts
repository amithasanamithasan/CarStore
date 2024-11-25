import { carmodel } from '../car.model';
import { Car, CarCategory } from './car.interface';

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
// Update a Car
const getSingleCarUpdatedFromDB = async (
  carId: string,
  payload: Partial<Car>,
) => {
  const result = await carmodel.findByIdAndUpdate(carId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a Car
const getSingleCarDeleteFromDB = async (id: string) => {
  console.log('Deleting car with ID:', id);
  const result = await carmodel.findByIdAndDelete({ _id: id });
  console.log('Deletion result:', result);
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
