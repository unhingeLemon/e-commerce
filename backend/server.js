import express from 'express';
import products from './data/products.js';
import connectDB from './config/db.js';
// if using ES module add .js
// and use import syntax
// also, add "type": "module" at package.json
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();
connectDB();

const app = express();

app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `The server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);
