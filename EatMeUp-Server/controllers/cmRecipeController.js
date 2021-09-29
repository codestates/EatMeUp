const { Recipe, sequelize } = require("../models");
// const { Op } = require("sequelize");

const getRecipe = async (req, res) => {
  try {
    let limit = 8;
    let offset = 0 + (Number(req.body.page) - 1) * limit;

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
    return res.status(400).json({ error: e, message: "failed to recipe info" });
  }
};

const getFoodRecipe = async (req, res) => {
  try {
    const { food } = req.body;
    let where = food
      .map(
        (food) => `"Recipe"."foods" @> '[{"IRDNT_NM" : "${food.IRDNT_NM}"}]'`,
      )
      .join(" OR ");
    let query = `SELECT "id", "title", "description", "cooking_time", "level", "main_image", "foods", "steps", "createdAt", "updatedAt", "post_user_id" FROM "Recipes" AS "Recipe" WHERE ${where}`;
    console.log(query);
    const recipeInfo = await sequelize.query(query);
    // console.log(food);
    // const recipeInfo = await Recipe.findAll({
    //   where: {
    //     foods: {
    //       [Op.contains]: food,
    //     },
    //   },
    // });
    console.log(recipeInfo);
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (e) {
    return res.status(400).json({ error: e, message: "failed to recipe info" });
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
      .json({ error: e, message: "failed to recipe detail" });
  }
};

module.exports = {
  getRecipe,
  getFoodRecipe,
  getRecipeDetail,
};
