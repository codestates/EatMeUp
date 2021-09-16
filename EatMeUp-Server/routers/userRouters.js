const express = require("express");
const {
  getInfo,
  putInfo,
  deleteInfo,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/info").get(getInfo).put(putInfo).delete(deleteInfo);

module.exports = userRouter;
