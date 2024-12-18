import mongoose, { Schema } from 'mongoose';
import { Order } from './order/order.interface';

const orderSchema = new Schema<Order>(
  {
    email: { type: String },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

// Create the model
export const ordermodel = mongoose.model<Order>('Order', orderSchema);
