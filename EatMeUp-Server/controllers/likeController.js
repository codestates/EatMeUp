const { User, Recipe } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const getLikeList = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const likeUser = await User.findOne({ where: { id: user.id } });
    const likeRecipe = await likeUser.getLikeRecipe();

    res.status(200).json({
      success: true,
      recipes: likeRecipe,
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

const addLikeRecipe = async (req, res) => {
  try {
    const recipeId = req.body.id;
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const likeUser = await User.findOne({ where: { id: user.id } });
    const likeRecipe = await Recipe.findOne({ where: { id: recipeId } });

    await likeUser.addLikeRecipe(likeRecipe);

    res.status(201).json({
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

const delLikeRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const likeUser = await User.findOne({ where: { id: user.id } });
    const likeRecipe = await Recipe.findOne({ where: { id: recipeId } });

    await likeUser.removeLikeRecipe(likeRecipe);

    res.status(201).json({
      success: true,
      message: "remove success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "remove fail",
      error: error,
    });
  }
};

module.exports = {
  delLikeRecipe,
  getLikeList,
  addLikeRecipe,
};
