const express = require("express");
const {
  getInfo,
  putInfo,
  deleteInfo,
} = require("../controllers/userController");
const {
  getLikeList,
  addLikeRecipe,
  delLikeRecipe,
} = require("../controllers/likeController");
const { auth } = require("../utils/checkAuth");

const userRouter = express.Router();

userRouter.delete("/info", deleteInfo);
userRouter.route("/info").all(auth).get(getInfo).put(putInfo);

userRouter.route("/likelist").all(auth).post(addLikeRecipe).get(getLikeList);

userRouter.route("/likelist/:id").all(auth).delete(delLikeRecipe);

module.exports = userRouter;
