const UserModel = require("../../models/users.model");
const bcrypt = require("bcrypt");

const UsersController = {
  home(request, response) {
    response.json({ message: "It Works" });
  },
  async getUsers(request, response) {
    try {
      let result = await UserModel.find();
      response.json({ status: true, result });
    } catch (error) {
      response.json({ status: false, message: "server error", error });
    }
  },
  async saveUser(request, response) {
    //post -- recevie in request.body
    let data = request.body;

    //save data in mongodb
    try {
      let neWPassword = await bcrypt.hash(data.password, 10);
      let newUser = new UserModel({
        name: data.name,
        username: data.username,
        email: data.email,
        address: data.address,
        phone: data.phone,
        password: neWPassword,
      });
      let isUserExists = await UserModel.findOne({
        username: { $regex: data.username, $options: "i" },
      });
      if (isUserExists) {
        response.json({
          status: false,
          message: `Username ${data.username} already taken`,
        });
      } else {
        let result = await newUser.save();
        if (result) {
          response.json({
            status: true,
            message: "Registration done successfully",
          });
        } else {
          response.json({
            status: false,
            message: "Fail to Registered,  try again",
          });
        }
      }
    } catch (error) {
      response.json({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  async loginUser(request, response) {
    let data = request.body;
    //login
    let isUserExists = await UserModel.findOne({
      username: { $regex: data.username, $options: "i" },
    });
    if (isUserExists) {
      let isPasswordIsValid = await bcrypt.compare(
        data.password,
        isUserExists.password
      );
      if (isPasswordIsValid) {
        delete isUserExists._doc.password;
        response.json({ status: true, userData: isUserExists });
      } else {
        response.json({ status: false, message: "Password is wrong" });
      }
    } else {
      response.json({ status: false, message: "Username is wrong" });
    }
  },
};

module.exports = UsersController;
