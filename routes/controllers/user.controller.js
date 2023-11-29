const UserModel = require("../../models/users.model");

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
};

module.exports = UsersController;
