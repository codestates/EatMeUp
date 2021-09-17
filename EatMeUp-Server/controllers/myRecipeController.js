const { Recipe, User } = require("../models");

const getRecipe = async (req, res) => {
  const { id } = req.body;
  try {
    const recipeInfo = await User.findAll({
      where: id,
      include: Recipe,
    });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (e) {
    console.log(e);
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
      recipeFood.foods = JSON.stringify(foods);
      await recipeFood.save();
    }
    if (steps) {
      const recipeStep = await Recipe.findOne({ where: { id } });
      if (!recipeStep) {
        return res
          .status(400)
          .json({ success: false, message: "failed to recipe edit" });
      }
      recipeStep.steps = JSON.stringify(steps);
      await recipeStep.save();
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const postRecipe = async (req, res) => {
  const {
    id,
    title,
    description,
    cooking_time,
    level,
    main_image,
    foods,
    steps,
  } = req.body;
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
    console.log(error);
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
    console.log(error);
  }
};

module.exports = {
  getRecipe,
  putRecipe,
  postRecipe,
  deleteRecipe,
};
