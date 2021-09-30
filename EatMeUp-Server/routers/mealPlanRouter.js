const express = require("express");
const {
  getMealInfo,
  addMealPlan,
  deleteMealPlan,
  modMealPlan,
} = require("../controllers/mealPlanController");

const { auth } = require("../utils/checkAuth");

const mealPlanRouter = express.Router();

mealPlanRouter
  .route("/mealplan")
  .all(auth)
  .get(getMealInfo)
  .post(addMealPlan)
  .put(modMealPlan)
  .delete(deleteMealPlan);

module.exports = mealPlanRouter;
