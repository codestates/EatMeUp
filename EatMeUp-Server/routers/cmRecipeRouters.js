const express = require("express");
const {
  postRecipe,
  postFoodRecipe,
  getRecipeDetail,
} = require("../controllers/cmRecipeController");
// const { auth } = require("../utils/checkAuth");

const cmRecipeRouter = express.Router();

cmRecipeRouter.route("/info").post(postRecipe);
cmRecipeRouter.route("/food").post(postFoodRecipe);
cmRecipeRouter.route("/info/:id").get(getRecipeDetail);

module.exports = cmRecipeRouter;
