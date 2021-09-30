const { Recipe, User, sequelize } = require("../models");
// const { Op } = require("sequelize");

const postRecipe = async (req, res) => {
  try {
    let limit = 8;
    let offset = 0 + (Number(req.body.page) - 1) * limit;
    let count = `SELECT count(*) AS "count" FROM "Recipes" AS "Recipe"`;
    let query = `SELECT "Recipe"."id", "Recipe"."title", "Recipe"."description", "Recipe"."cooking_time", "Recipe"."level", "Recipe"."main_image", "Recipe"."foods", "Recipe"."steps", "Recipe"."createdAt", "Recipe"."updatedAt", "post_user_id", "User"."username", "User"."avatar" FROM "Recipes" AS "Recipe" JOIN "Users" AS "User" ON "User"."id" = "Recipe"."post_user_id" LIMIT ${limit} OFFSET ${offset};`;
    const countInfo = await sequelize.query(count);
    const recipeInfo = await sequelize.query(query);
    // const recipeInfo = await Recipe.findAndCountAll({
    //   offset,
    //   limit,
    // });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ countInfo, recipeInfo, success: true });
  } catch (error) {
    return res.status(400).json({ error: e, message: "failed to recipe info" });
  }
};

const postFoodRecipe = async (req, res) => {
  try {
    const { food } = req.body;
    let where = food
      .map((food) => `"Recipe"."foods" @> '[{"name" : "${food.name}"}]'`)
      .join(" OR ");
    let query = `SELECT "Recipe"."id", "Recipe"."title", "Recipe"."description", "Recipe"."cooking_time", "Recipe"."level", "Recipe"."main_image", "Recipe"."foods", "Recipe"."steps", "Recipe"."createdAt", "Recipe"."updatedAt", "post_user_id", "User"."username", "User"."avatar" FROM "Recipes" AS "Recipe" JOIN "Users" AS "User" ON "User"."id" = "Recipe"."post_user_id" WHERE ${where}`;
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

const test = async (req, res) => {
  console.log("hi");
  const { id } = req.body;
  try {
    const recipeInfo = await User.findAll({
      include: Recipe,
      // include: [
      //   {
      //     model: User,
      //     attributes: ["username", "avatar"],
      //   },
      // ],
      where: { id },
    });
    console.log(recipeInfo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postRecipe,
  postFoodRecipe,
  getRecipeDetail,
};
