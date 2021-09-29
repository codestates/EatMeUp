const express = require("express");
const {
  getRecipe,
  getFoodRecipe,
  getRecipeDetail,
} = require("../controllers/cmRecipeController");
// const { auth } = require("../utils/checkAuth");

const cmRecipeRouter = express.Router();

cmRecipeRouter.route("/info").get(getRecipe);
cmRecipeRouter.route("/food").get(getFoodRecipe);
cmRecipeRouter.route("/info/:id").get(getRecipeDetail);

module.exports = cmRecipeRouter;
