const { Recipe } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const getRecipe = async (req, res) => {
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
    return res.status(400).json({ error: e, message: "failed to recipe info" });
  }
};

const getFoodRecipe = async (req, res) => {
  try {
    const { food } = req.body;
    console.log(food);
    const recipeInfo = await Recipe.findAll({
      where: {
        foods: {
          // [Op.or]: {
          //   [Op.contains]: food,
          // },
          // [Op.contains]:  [Op.or]: food ,
          // [Op.or]: food,
          // [Op.ne]: null,
          [Op.contains]: food,
        },
      },
    });
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
