import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarsRoutes } from './app/modules/car/car.route';
// const express = require('express')
const app: Application = express();

// json nia use korbo tr jonno parser use korbo
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/cars', CarsRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAController);

export default app;

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
