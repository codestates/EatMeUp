const express = require("express");
const {
  getRecipe,
  getRecipeInfo,
} = require("../controllers/cmRecipeController");
// const { auth } = require("../utils/checkAuth");

const cmRecipeRouter = express.Router();

cmRecipeRouter.route("/info").get(getRecipe);
cmRecipeRouter.route("/info/:id").get(getRecipeInfo);

module.exports = cmRecipeRouter;
