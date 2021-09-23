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

const userRouter = express.Router();

userRouter.route("/info").get(getInfo).put(putInfo).delete(deleteInfo);

userRouter
  .route("/likelist")
  .post(addLikeRecipe)
  .get(getLikeList)
  .delete(delLikeRecipe);

module.exports = userRouter;
