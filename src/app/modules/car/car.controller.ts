import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const car = req.body;
    // console.log(CarData );
    const result = await CarServices.createCarIntoDB(car);

    res.status(200).json({
      success: true,
      message: 'Car created successfully ',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve cars',
      success: false,
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB();

    res.status(200).json({
      status: true,
      message: 'Cars retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve cars',
      success: false,
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

// get search data with query

const getallCarsSearchquery = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { searchTerm } = req.query;

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

    if (!cars || cars.length === 0) {
      // If no cars are found, we return a response here
      res.status(404).json({
        status: false,
        message: 'No cars found matching your search criteria.',
        data: [],
      });
    }

    // Successful response
    res.status(200).json({
      status: true,
      message: 'Cars retrieved successfully.',
      data: cars,
    });
  } catch (error) {
    // Error handling response
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve cars.',
      error: error instanceof Error ? error.message : 'Unknown error occurred.',
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
      status: true,
      message: 'Car retrieved successfully ',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve cars',
      success: false,
      error: error instanceof Error ? error.message : undefined,
    });
  }
};
//FindOneUpdate a Car
const SingleUpdatedCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    // console.log('Car ID:', carId);
    const updatedCar = await CarServices.getSingleCarUpdatedFromDB(
      carId,
      req.body,
    );
    // console.log('Request Body:', req.body);
    if (!updatedCar) {
      res.status(404).json({
        success: false,
        message: 'Car not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: updatedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

// Deleted car data
const CarDeleteData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { carId } = req.params;

    // Validate carId
    if (!carId) {
      res.status(400).json({
        success: false,
        message: 'Car ID is required',
      });
    }

    const result = await CarServices.getSingleCarDeleteFromDB(carId);

    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Car deleted successfully',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting car',
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

export const CarController = {
  createCar,
  getAllCars,
  getallCarsSearchquery,
  getSingleCar,
  SingleUpdatedCar,
  CarDeleteData,
};
