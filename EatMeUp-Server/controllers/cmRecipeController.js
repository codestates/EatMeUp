const { Recipe, Sequelize } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const Op = Sequelize.Op;

const getRecipe = async (req, res) => {
  // const { id } = jwt.verify(req.cookies.accessToken, config.accessSecret);
  try {
    const { food } = req.body;
    console.log(food);
    const recipeInfo = await Recipe.findAll({
      where: {
        foods: {
          [Op.contains]: [{ IRDNT_NM: "쌀" }],
        },
      },
      // where: { foods: { IRDNT_NM: { [Op.in]: food } } },
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

const getRecipeInfo = async (req, res) => {
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
    console.log(error);
  }
};

module.exports = {
  getRecipe,
  getRecipeInfo,
};
