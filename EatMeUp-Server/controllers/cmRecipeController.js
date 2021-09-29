const { Recipe, sequelize } = require("../models");
// const { Op } = require("sequelize");

const postRecipe = async (req, res) => {
  try {
    let limit = 8;
    let offset = 0 + (req.body.page - 1) * limit;

    const recipeInfo = await Recipe.findAndCountAll({
      offset,
      limit,
    });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: "failed to recipe info" });
  }
};

const postFoodRecipe = async (req, res) => {
  try {
    const { food } = req.body;
    let where = food
      .map((food) => `"Recipe"."foods" @> '[{"name" : "${food.name}"}]'`)
      .join(" OR ");
    let query = `SELECT "id", "title", "description", "cooking_time", "level", "main_image", "foods", "steps", "createdAt", "updatedAt", "post_user_id" FROM "Recipes" AS "Recipe" WHERE ${where}`;
    const recipeInfo = await sequelize.query(query);

    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: "failed to recipe info" });
  }
};

const getRecipeDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const recipeInfo = await Recipe.findOne({ where: { id } });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: "failed to recipe detail" });
  }
};

module.exports = {
  postRecipe,
  postFoodRecipe,
  getRecipeDetail,
};
