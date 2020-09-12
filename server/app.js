const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Payments = require('./Models/Payments');
const cors = require('cors');
const PORT = '4000';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  })
);

app.get('/', async (req, res) => {
  const allPayments = await Payments.find();
  console.log(allPayments);
  res.json(allPayments);
});

app.post('/payments', async (req, res) => {
  const { sumOfOrder, cardNumber } = req.body;
  await Payments.create({
    numberOfOrder: Math.floor(Math.random() * sumOfOrder),
    sumOfOrder: sumOfOrder,
    cardNumber: cardNumber,
  });
  res.json({ success: true });
});

async function start() {
  try {
    await mongoose.connect('mongodb://localhost/Payments', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Listening port ${PORT}!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
