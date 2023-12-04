// improt mongos
const mongoose = require("mongoose");

//create model
const UserSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: { type: String },
  phone: { type: String },
  password: { type: String },
});

//create model
const UserModel = mongoose.model("user", UserSchema, "users");

module.exports = UserModel;
