import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarsRoutes } from './app/modules/car/car.route';
import { orderRoutes } from './app/modules/order/order.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

app.use('/', CarsRoutes);
app.use('/', orderRoutes);
const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAController);

export default app;
