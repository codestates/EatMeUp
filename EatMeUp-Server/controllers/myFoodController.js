const { Food, User } = require("../models");
const { toDB, toClient } = require("../utils/foodConverter");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

//디비에 추가 => 스키마 맞춰서 추가

//응답 => 디비에서 꺼내서 맵핑해서 바꿔준다음에 보내주기

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
      success: true,
      message: "post success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
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

    const frezFoods = toClient(userFood.Food);

    res.status(200).json({
      success: true,
      message: "load success",
      foodData: frezFoods,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
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
      success: true,
      message: "edit success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
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
      success: true,
      message: "delete success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "delete fail",
      error: error,
    });
  }
};

const modType = async (req, res) => {
  try {
    const chgFoods = toDB(req.body);

    const updataFood = async () => {
      for (let [_, food] of chgFoods.entries()) {
        const modFoodId = food.id;

        const modFood = await Food.findOne({ where: { id: modFoodId } });

        modFood.frez_type = food.frez_type;

        await modFood.save();
      }
    };

    updataFood();

    res.status(200).json({
      success: true,
      message: "edit success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "delete fail",
      error: error,
    });
  }
};

module.exports = { addFood, getFood, modFood, delFood, modType };
