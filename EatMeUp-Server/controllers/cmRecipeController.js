const { Recipe, User, sequelize } = require("../models");
// const { Op } = require("sequelize");

const postRecipe = async (req, res) => {
  try {
    let limit = 12;
    let offset = 0 + (Number(req.body.page) - 1) * limit;
    // let count = `SELECT count(*) AS "count" FROM "Recipes" AS "Recipe"`;
    // let query = `SELECT "Recipe"."id", "Recipe"."title", "Recipe"."description", "Recipe"."cooking_time", "Recipe"."level", "Recipe"."main_image", "Recipe"."foods", "Recipe"."steps", "Recipe"."createdAt", "Recipe"."updatedAt", "post_user_id", "User"."username", "User"."avatar" FROM "Recipes" AS "Recipe" JOIN "Users" AS "User" ON "User"."id" = "Recipe"."post_user_id" LIMIT ${limit} OFFSET ${offset};`;
    // const countInfo = await sequelize.query(count);
    // const recipeInfo = await sequelize.query(query);

    const recipeInfo = await Recipe.findAndCountAll({
      offset,
      limit,
      include: [
        { model: User, as: "user", attributes: ["username", "avatar"] },
        {
          model: User,
          as: "likeUser",
          attributes: ["id", "email"],
        },
      ],
      order: [["updatedAt", "DESC"]],
    });
    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: "failed to recipe info" });
  }
};

const postFoodRecipe = async (req, res) => {
  try {
    const { food } = req.body;
    let where = food
      .map((food) => `"Recipe"."foods" @> '[{"name" : "${food.name}"}]'`)
      .join(" OR ");
    // let query = `SELECT "Recipe"."id", "Recipe"."title", "Recipe"."description", "Recipe"."cooking_time", "Recipe"."level", "Recipe"."main_image", "Recipe"."foods", "Recipe"."steps", "Recipe"."createdAt", "Recipe"."updatedAt", "post_user_id", "User"."username", "User"."avatar" FROM "Recipes" AS "Recipe" JOIN "Users" AS "User" ON "User"."id" = "Recipe"."post_user_id" WHERE ${where} ORDER BY "Recipe"."updatedAt" DESC`;
    let query = `SELECT "Recipe".*, "user"."id" AS "user.id", "user"."username" AS "user.username", "user"."avatar" AS "user.avatar", "likeUser"."id" AS "likeUser.id", "likeUser->User_Like_Recipe"."createdAt" AS "likeUser.User_Like_Recipe.createdAt", "likeUser->User_Like_Recipe"."updatedAt" AS "likeUser.User_Like_Recipe.updatedAt", "likeUser->User_Like_Recipe"."recipe_id" AS "likeUser.User_Like_Recipe.recipe_id", "likeUser->User_Like_Recipe"."user_id" AS "likeUser.User_Like_Recipe.user_id" FROM (SELECT "Recipe"."id", "Recipe"."title", "Recipe"."description", "Recipe"."cooking_time", "Recipe"."level", "Recipe"."main_image", "Recipe"."foods", "Recipe"."steps", "Recipe"."createdAt", "Recipe"."updatedAt", "Recipe"."post_user_id" FROM "Recipes" AS "Recipe" ORDER BY "Recipe"."updatedAt" DESC) AS "Recipe" LEFT OUTER JOIN "Users" AS "user" ON "Recipe"."post_user_id" = "user"."id" LEFT OUTER JOIN ( "User_Like_Recipe" AS "likeUser->User_Like_Recipe" INNER JOIN "Users" AS "likeUser" ON "likeUser"."id" = "likeUser->User_Like_Recipe"."user_id") ON "Recipe"."id" = "likeUser->User_Like_Recipe"."recipe_id" WHERE ${where} ORDER BY "Recipe"."updatedAt" DESC`;
    console.log(query);
    const recipeInfo = await sequelize.query(query);

    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: "failed to recipe info" });
  }
};

const getRecipeDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const recipeInfo = await Recipe.findOne(
      { where: { id } },
      {
        include: [
          { model: User, as: "user", attributes: ["username", "avatar"] },
          {
            model: User,
            as: "likeUser",
            attributes: ["id", "email"],
          },
          // { all: true },
        ],
      },
    );

    if (!recipeInfo) {
      return res
        .status(400)
        .json({ success: false, message: "failed to recipe info" });
    }
    return res.status(200).json({ recipeInfo, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: "failed to recipe detail" });
  }
};

module.exports = {
  postRecipe,
  postFoodRecipe,
  getRecipeDetail,
};
