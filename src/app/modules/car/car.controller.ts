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

export const CarController = {
  createCar,
  getAllCars,
};
