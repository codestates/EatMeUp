const { Recipe, User } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const getRecipe = async (req, res) => {
  const { id } = jwt.verify(req.cookies.accessToken, config.accessSecret);
  try {
    const recipeInfo = await Recipe.findAll({
      include: [
        { model: User, as: "user", attributes: ["username", "avatar"] },
        {
          model: User,
          as: "likeUser",
          attributes: ["id", "email"],
        },
        // { all: true },
      ],
      where: { post_user_id: id },
    });
    // const recipeInfo = await User.findOne({
    //   where: id,
    //   attributes: ["username", "avatar"],
    //   include: Recipe,
    // });
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

const putRecipe = async (req, res) => {
  const {
    params: { id },
    body: { title, description, cooking_time, level, main_image, foods, steps },
  } = req;
  try {
    const recipeInfo = await Recipe.update(
      {
        title,
        description,
        cooking_time,
        level,
        main_image,
      },
      { where: { id } },
    );
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe edit" });
    }
    if (foods) {
      const recipeFood = await Recipe.findOne({ where: { id } });
      if (!recipeFood) {
        return res
          .status(400)
          .json({ success: false, message: "failed to recipe edit" });
      }
      recipeFood.foods = foods;
      await recipeFood.save();
    }
    if (steps) {
      const recipeStep = await Recipe.findOne({ where: { id } });
      if (!recipeStep) {
        return res
          .status(400)
          .json({ success: false, message: "failed to recipe edit" });
      }
      recipeStep.steps = steps;
      await recipeStep.save();
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ error, message: "failed to recipe edit" });
  }
};

const postRecipe = async (req, res) => {
  const { id } = jwt.verify(req.cookies.accessToken, config.accessSecret);
  const { title, description, cooking_time, level, main_image, foods, steps } =
    req.body;
  try {
    const recipeInfo = await Recipe.create({
      title,
      description,
      cooking_time,
      level,
      main_image,
      foods,
      steps,
      post_user_id: id,
    });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe create" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ error, message: "failed to recipe create" });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const recipeInfo = await Recipe.destroy({ where: { id } });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe delete" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ error, message: "failed to recipe delete" });
  }
};

module.exports = {
  getRecipe,
  putRecipe,
  postRecipe,
  deleteRecipe,
};
