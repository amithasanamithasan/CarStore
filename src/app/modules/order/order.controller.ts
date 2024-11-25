import { Request, Response } from 'express';
import { OrderService } from './order.service';

const placeOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, car, quantity, totalPrice } = req.body;

    if (!email || !car || !quantity || !totalPrice) {
      res.status(400).json({
        success: false,
        message: 'All fields (email, car, quantity, totalPrice) are required',
      });
    }

    // Place the order
    const order = await OrderService.placeOrder({
      email,
      car,
      quantity,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : 'Order placement failed',
    });
  }
};
// Calculate Revenue from Orderservices

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderService.calculateTotalRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: error instanceof Error ? error.message : undefined,
    });
  }
};

export const OrderController = {
  placeOrder,
  calculateRevenue,
};
