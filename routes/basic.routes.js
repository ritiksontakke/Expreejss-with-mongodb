const UsersController = require("./controllers/user.controller");

const BasicRouter = require("express").Router();

BasicRouter.get("/", UsersController.home);

BasicRouter.get("/get-users",UsersController.getUsers );

// //es 5 syntex

module.exports = BasicRouter;
