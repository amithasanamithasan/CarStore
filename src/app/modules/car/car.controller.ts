import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: CarData } = req.body;
    // console.log(CarData );
    const result = await CarServices.createCarIntoDB(CarData);

    res.status(200).json({
      success: true,
      message: 'Car created successfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB();

    res.status(200).json({
      success: true,
      message: 'Cars retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get search data with query

const getallCarsSearchquery = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    // console.log(searchTerm);

    const query = searchTerm
      ? {
          $or: [
            { brand: { $regex: searchTerm, $options: 'i' } },
            { model: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
          ],
        }
      : {};

    const cars = await CarServices.getAllCarsSearchqueryFromDB(query);

    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: cars,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to retrieve cars',
      success: false,
    });
  }
};

//The details of a specific car by ID Query findOne

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { car: carId } = req.params;
    // console.log(carId);
    const result = await CarServices.getSingleCarFromDB(carId);

    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CarController = {
  createCar,
  getAllCars,
  getallCarsSearchquery,
  getSingleCar,
};
