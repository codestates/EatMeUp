const express = require("express");
const {
  getRecipe,
  putRecipe,
  postRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const recipeRouter = express.Router();

recipeRouter.route("/info").get(getRecipe).post(postRecipe);

recipeRouter.route("/info/:id").put(putRecipe).delete(deleteRecipe);

module.exports = recipeRouter;
