const { Recipe, Mealplanner } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const getMealInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const userMealplans = await Mealplanner.findAll({
      where: { own_user_id: user.id },
      include: [
        { model: Recipe, as: "mealplanBreakfast" },
        { model: Recipe, as: "mealplanLunch" },
        { model: Recipe, as: "mealplanDinner" },
      ],
    });

    res.status(200).json({
      success: true,
      mealPlan: userMealplans,
      message: "load success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "load fail",
      error: error,
    });
  }
};

const getOneDayInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const mealPlanId = req.params.id;
    const userMealplan = await Mealplanner.findOne({
      where: { id: mealPlanId, own_user_id: user.id },
      include: [
        { model: Recipe, as: "mealplanBreakfast" },
        { model: Recipe, as: "mealplanLunch" },
        { model: Recipe, as: "mealplanDinner" },
      ],
    });

    res.status(200).json({
      success: true,
      mealPlan: userMealplan,
      message: "load success",
    });
  } catch (error) {}
};

const addMealPlan = async (req, res) => {
  try {
    const { date, breakfast, lunch, dinner } = req.body;
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);

    let checkMealPlan = await Mealplanner.findOne({
      where: [{ own_user_id: user.id, date: date }],
    });

    if (!checkMealPlan) {
      checkMealPlan = await Mealplanner.create({
        own_user_id: user.id,
        date: date,
      });
    }

    const addMeal = async () => {
      for (let [_, recipeId] of breakfast.entries()) {
        const addRecipe = await Recipe.findOne({ where: { id: recipeId } });
        await checkMealPlan.addMealplanBreakfast(addRecipe);
      }

      for (let [_, recipeId] of lunch.entries()) {
        const addRecipe = await Recipe.findOne({ where: { id: recipeId } });
        await checkMealPlan.addMealplanLunch(addRecipe);
      }

      for (let [_, recipeId] of dinner.entries()) {
        const addRecipe = await Recipe.findOne({ where: { id: recipeId } });
        await checkMealPlan.addMealplanDinner(addRecipe);
      }
    };

    addMeal();

    res.status(200).json({
      success: true,
      message: "add success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "add fail",
      error: error,
    });
  }
};

const deleteMealPlan = async (req, res) => {};

const modMealPlan = async (req, res) => {};

module.exports = {
  getMealInfo,
  addMealPlan,
  deleteMealPlan,
  modMealPlan,
  getOneDayInfo,
};
