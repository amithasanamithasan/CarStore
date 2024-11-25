import { carmodel } from '../car.model';
import { ordermodel } from '../order.model';

const placeOrder = async (orderData: {
  email: string;
  car: string;
  quantity: number;
  totalPrice: number;
}) => {
  const { car, quantity } = orderData;

  // Find the car in the database
  const carToUpdate = await carmodel.findById(car);
  //   console.log(carToUpdate);
  if (!carToUpdate) {
    throw new Error('Car not found');
  }

  if (carToUpdate.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  carToUpdate.quantity -= quantity;

  if (carToUpdate.quantity === 0) {
    carToUpdate.inStock = false;
  }

  await carToUpdate.save();

  const order = await ordermodel.create(orderData);

  return order;
};
// Calculate Revenue from Orders (Aggregation)
const calculateTotalRevenue = async () => {
  const revenue = await ordermodel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$totalPrice', '$quantity'] } },
      },
    },
  ]);

  return revenue[0]?.totalRevenue || 0;
};

export const OrderService = {
  placeOrder,
  calculateTotalRevenue,
};
