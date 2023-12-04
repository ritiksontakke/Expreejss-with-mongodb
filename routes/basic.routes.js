const UsersController = require("./controllers/user.controller");

const BasicRouter = require("express").Router();

BasicRouter.get("/", UsersController.home);

BasicRouter.get("/get-users", UsersController.getUsers);

BasicRouter.post("/add-user", UsersController.saveUser);

BasicRouter.post('/login-user', UsersController.loginUser)
// //es 5 syntex

module.exports = BasicRouter;
