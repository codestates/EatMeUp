const express = require("express");
const {
  getRecipe,
  putRecipe,
  postRecipe,
  deleteRecipe,
} = require("../controllers/myRecipeController");

const myRecipeRouter = express.Router();

myRecipeRouter.route("/info").get(getRecipe).post(postRecipe);

myRecipeRouter.route("/info/:id").put(putRecipe).delete(deleteRecipe);

module.exports = myRecipeRouter;
