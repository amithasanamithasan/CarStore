import mongoose, { Schema } from 'mongoose';
import { Car, CarCategory } from './car/car.interface';

const carSchema = new Schema<Car>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: Object.values(CarCategory),
      required: true,
    },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }, // createdAt and updatedAt my project requirment
);

// Create the model
export const carmodel = mongoose.model<Car>('car', carSchema);
