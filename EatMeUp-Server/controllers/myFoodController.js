const { Food, User } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const addFood = async (req, res) => {
  try {
    const food = req.body;
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);

    const addedFood = await Food.create({
      food_name: food.food_name,
      food_image: food.food_image,
      life: food.life,
      frez_type: food.frez_type,
      own_user_id: user.id,
    });

    res.status(201).json({
      message: "post success",
    });
  } catch (error) {
    res.status(400).json({
      message: "post fail",
      error: error,
    });
  }
};

const getFood = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.accessToken, config.accessSecret);

    const userFood = await User.findOne({
      where: { id: user.id },
      include: "Food",
    });

    res.status(200).json({
      message: "load success",
      foods: userFood.Food,
    });
  } catch (error) {
    res.status(400).json({
      message: "load fail",
      error: error,
    });
  }
};

const modFood = async (req, res) => {
  try {
    const modFoodId = req.params.id;
    const modContent = req.body;

    const modFood = await Food.findOne({ where: { id: modFoodId } });

    modFood.food_name = modContent.food_name;
    modFood.food_image = modContent.food_image;
    modFood.frez_type = modContent.frez_type;
    modFood.life = modContent.life;

    await modFood.save();

    res.status(200).json({
      message: "edit success",
    });
  } catch (error) {
    res.status(400).json({
      message: "edit fail",
      error: error,
    });
  }
};

const delFood = async (req, res) => {
  try {
    const delFoodId = req.params.id;

    await Food.destroy({ where: { id: delFoodId } });

    res.status(200).json({
      message: "delete success",
    });
  } catch (error) {
    res.status(400).json({
      message: "delete fail",
    });
  }
};

module.exports = { addFood, getFood, modFood, delFood };
