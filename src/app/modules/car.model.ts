import mongoose, { Schema } from 'mongoose';
import { Car, CarCategory } from './car/car.interface';

const carSchema = new Schema<Car>(
  {
    brand: { type: String },
    model: { type: String },
    year: { type: Number },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: {
        values: Object.values(CarCategory),
      },
    },
    description: { type: String },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a non-negative number'],
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const carModel = mongoose.model<Car>('Car', carSchema, 'cars');
