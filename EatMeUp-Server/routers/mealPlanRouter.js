const express = require("express");
const {
  getMealInfo,
  addMealPlan,
  deleteMealPlan,
  getOneDayInfo,
} = require("../controllers/mealPlanController");

const { auth } = require("../utils/checkAuth");

const mealPlanRouter = express.Router();

mealPlanRouter.route("/mealplan").all(auth).get(getMealInfo).post(addMealPlan);

mealPlanRouter
  .route("/mealplan/:id")
  .all(auth)
  .get(getOneDayInfo)
  .delete(deleteMealPlan);

module.exports = mealPlanRouter;
