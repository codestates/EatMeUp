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
      recipes: likeRecipe,
      message: "load success",
    });
  } catch (error) {
    res.status(400).json({
      message: "load fail",
      error: error,
    });
  }
};

const addLikeRecipe = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const likeUser = await User.findOne({ where: { id: user.id } });
    const likeRecipe = await Recipe.findOne({ where: { id: req.body.id } });

    await likeUser.addLikeRecipe(likeRecipe);

    res.status(201).json({
      message: "add success",
    });
  } catch (error) {
    res.status(400).json({
      message: "add fail",
      error: error,
    });
  }
};

const delLikeRecipe = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);
    const likeUser = await User.findOne({ where: { id: user.id } });
    const likeRecipe = await Recipe.findOne({ where: { id: req.body.id } });

    await likeUser.removeLikeRecipe(likeRecipe);

    res.status(201).json({
      message: "remove success",
    });
  } catch (error) {
    res.status(400).json({
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
