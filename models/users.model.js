// improt mongos
const mongoose = require("mongoose");

//create model
const UserSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: {
    street: { type: String },
    suite: { type: String },
    city: { type: String },
    zipcode: { type: String },
    geo: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  phone: { type: String },
  website: { type: String },
  company: {
    name: { type: String },
    catchPhrase: { type: String },
    bs: { type: String },
  },
});

//create model
const UserModel = mongoose.model("user", UserSchema, "users");

module.exports = UserModel;
