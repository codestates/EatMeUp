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

userRouter
  .route("/info")
  .all(auth)
  .get(getInfo)
  .put(putInfo)
  .delete(deleteInfo);

userRouter.route("/likelist").all(auth).post(addLikeRecipe);

userRouter
  .route("/likelist/:id")
  .all(auth)
  .get(getLikeList)
  .delete(delLikeRecipe);

module.exports = userRouter;
