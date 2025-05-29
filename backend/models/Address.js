const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  apt: String,
  state: String,
  zip: String,
});

module.exports = mongoose.model("Address", AddressSchema);
