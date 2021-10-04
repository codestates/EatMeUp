const express = require("express");
const {
  getRecipe,
  putRecipe,
  postRecipe,
  deleteRecipe,
} = require("../controllers/myRecipeController");
const { auth } = require("../utils/checkAuth");

const myRecipeRouter = express.Router();

myRecipeRouter.route("/info").all(auth).get(getRecipe).post(postRecipe);

myRecipeRouter.route("/info/:id").all(auth).put(putRecipe).delete(deleteRecipe);

module.exports = myRecipeRouter;
