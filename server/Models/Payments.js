const mongoose = require('mongoose');

const paymentsSchema = mongoose.Schema({
  numberOfOrder: Number,
  dateOfOrder: { type: Date, default: Date.now },
  sumOfOrder: Number,
  cardNumber: Number,
});

const Payments = mongoose.model('Payments', paymentsSchema);

module.exports = Payments;

