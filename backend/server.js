import express from 'express';
import connectDB from './config/db.js';
// if using ES module add .js
// and use import syntax
// also, add "type": "module" at package.json
import dotenv from 'dotenv';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `The server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);
